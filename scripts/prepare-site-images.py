#!/usr/bin/env python3
"""
Prepare TraqAll inner-page images from real product UI screenshots.
Focus: timecards, equipment, materials, tools, issues — operations management,
not generic construction-site photography.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "assets" / "images"
TRAQALL = PUBLIC / "traqall"


def ensure_dir(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def fit_cover(img: Image.Image, size: tuple[int, int]) -> Image.Image:
    target_w, target_h = size
    src = img.convert("RGB")
    src_ratio = src.width / src.height
    target_ratio = target_w / target_h
    if src_ratio > target_ratio:
        new_h = target_h
        new_w = int(new_h * src_ratio)
    else:
        new_w = target_w
        new_h = int(new_w / src_ratio)
    resized = src.resize((new_w, new_h), Image.Resampling.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    return resized.crop((left, top, left + target_w, top + target_h))


def save_jpg(img: Image.Image, dest: Path, size: tuple[int, int], quality: int = 88) -> None:
    ensure_dir(dest)
    out = fit_cover(img, size) if img.size != size else img.convert("RGB")
    if out.size != size:
        out = out.resize(size, Image.Resampling.LANCZOS)
    out.save(dest, "JPEG", quality=quality, optimize=True)


def save_png(img: Image.Image, dest: Path, size: tuple[int, int]) -> None:
    ensure_dir(dest)
    out = fit_cover(img, size)
    out.save(dest, "PNG", optimize=True)


def blend_on_canvas(
    background: Image.Image,
    foreground: Image.Image,
    box: tuple[int, int],
    opacity: float = 1.0,
) -> Image.Image:
    bg = background.copy().convert("RGBA")
    fg = foreground.convert("RGBA")
    if opacity < 1.0:
        alpha = fg.split()[3].point(lambda p: int(p * opacity))
        fg.putalpha(alpha)
    bg.paste(fg, box, fg)
    return bg.convert("RGB")


def crop_fraction(img: Image.Image, box: tuple[float, float, float, float]) -> Image.Image:
    """box: left, top, right, bottom as 0..1 fractions."""
    w, h = img.size
    l, t, r, b = box
    return img.crop((int(w * l), int(h * t), int(w * r), int(h * b)))


def light_ops_background(size: tuple[int, int]) -> Image.Image:
    w, h = size
    base = Image.new("RGB", (w, h), (248, 250, 252))
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / max(h - 1, 1)
        color = (
            int(248 - 8 * t),
            int(250 - 10 * t),
            int(252 - 6 * t),
        )
        draw.line([(0, y), (w, y)], fill=color)
    return base


def page_header_from_ui(dashboard: Image.Image, mobile: Image.Image) -> Image.Image:
    w, h = 1920, 570
    base = light_ops_background((w, h))
    dash = fit_cover(dashboard, (1100, 620))
    dash = ImageEnhance.Brightness(dash).enhance(1.05)
    dash = dash.filter(ImageFilter.GaussianBlur(0.5))
    base = blend_on_canvas(base, dash, (w - 980, -40), opacity=0.92)

    phone = fit_cover(mobile, (280, 520))
    phone_frame = Image.new("RGBA", (300, 540), (30, 35, 45, 255))
    screen = phone.resize((268, 500), Image.Resampling.LANCZOS)
    phone_frame.paste(screen, (16, 20))
    base = blend_on_canvas(base, phone_frame, (120, 40), opacity=1.0)

    laptop = fit_cover(dashboard, (720, 450))
    frame = Image.new("RGBA", (760, 490), (30, 35, 45, 255))
    screen = laptop.resize((728, 430), Image.Resampling.LANCZOS)
    frame.paste(screen, (16, 16))
    base = blend_on_canvas(base, frame, (w - 820, 80), opacity=1.0)
    return base


def device_pair(dashboard: Image.Image, mobile: Image.Image, size: tuple[int, int]) -> Image.Image:
    w, h = size
    base = light_ops_background((w, h))
    laptop = fit_cover(dashboard, (int(w * 0.72), int(h * 0.85)))
    frame = Image.new("RGBA", (int(w * 0.76), int(h * 0.9)), (30, 35, 45, 255))
    screen = laptop.resize((int(w * 0.72), int(h * 0.82)), Image.Resampling.LANCZOS)
    frame.paste(screen, (12, 12))
    base = blend_on_canvas(base, frame, (int(w * 0.04), int(h * 0.06)), opacity=1.0)

    phone = fit_cover(mobile, (int(w * 0.22), int(h * 0.75)))
    pf = Image.new("RGBA", (int(w * 0.24), int(h * 0.8)), (30, 35, 45, 255))
    pf.paste(phone.resize((int(w * 0.21), int(h * 0.72)), Image.Resampling.LANCZOS), (8, 10))
    base = blend_on_canvas(base, pf, (int(w * 0.7), int(h * 0.12)), opacity=1.0)
    return base


def main() -> None:
    dashboard = Image.open(TRAQALL / "dashboard.png")
    mobile = Image.open(TRAQALL / "mobile-app.png")
    equipment = Image.open(TRAQALL / "equipments-pic.png")

    # Page header — product UI, not job-site skyline
    header = page_header_from_ui(dashboard, mobile)
    save_jpg(header, PUBLIC / "backgrounds" / "page-header-bg.jpg", (1920, 570))

    # About — management workflows on devices
    save_jpg(device_pair(dashboard, mobile, (670, 590)), PUBLIC / "about" / "about-v2-img1.jpg", (335, 295))
    save_jpg(
        fit_cover(equipment, (760, 590)),
        PUBLIC / "about" / "about-v2-img2.jpg",
        (380, 295),
    )

    # Why choose — dashboard command center
    why = light_ops_background((850, 800))
    dash = fit_cover(dashboard, (780, 720))
    why = blend_on_canvas(why, dash, (40, 50), opacity=0.95)
    save_jpg(why, PUBLIC / "resources" / "why-choose-v1-bg.jpg", (850, 800))

    # Service detail heroes — one per module (UI-forward)
    service_crops = {
        "services-details-img1.jpg": crop_fraction(dashboard, (0.0, 0.0, 0.85, 0.55)),
        "services-details-img2.jpg": crop_fraction(equipment, (0.05, 0.15, 0.95, 0.85)),
        "services-details-img3.jpg": crop_fraction(dashboard, (0.1, 0.2, 1.0, 0.75)),
        "services-details-img4.jpg": crop_fraction(mobile, (0.0, 0.05, 1.0, 0.9)),
        "services-details-img5.jpg": crop_fraction(dashboard, (0.15, 0.35, 1.0, 1.0)),
    }
    for name, crop in service_crops.items():
        save_jpg(crop, PUBLIC / "services" / name, (870, 385))

    # Per-service supporting images (mobile + dashboard crops)
    pairs = [
        ("services-details-timecards-a.jpg", mobile, (420, 200)),
        ("services-details-timecards-b.jpg", dashboard, (420, 200)),
        ("services-details-equipment-a.jpg", equipment, (420, 200)),
        ("services-details-equipment-b.jpg", dashboard, (420, 200)),
        ("services-details-materials-a.jpg", dashboard, (420, 200)),
        ("services-details-materials-b.jpg", mobile, (420, 200)),
        ("services-details-tools-a.jpg", mobile, (420, 200)),
        ("services-details-tools-b.jpg", dashboard, (420, 200)),
        ("services-details-issues-a.jpg", mobile, (420, 200)),
        ("services-details-issues-b.jpg", dashboard, (420, 200)),
    ]
    for name, src, size in pairs:
        save_jpg(src, PUBLIC / "services" / name, size)

    features = [
        ("services-details-timecards-feature.jpg", mobile, (425, 190)),
        ("services-details-equipment-feature.jpg", equipment, (425, 190)),
        ("services-details-materials-feature.jpg", dashboard, (425, 190)),
        ("services-details-tools-feature.jpg", mobile, (425, 190)),
        ("services-details-issues-feature.jpg", dashboard, (425, 190)),
    ]
    for name, src, size in features:
        save_jpg(src, PUBLIC / "services" / name, size)

    # Footer gallery — module UI thumbnails
    gallery_sources = [
        crop_fraction(mobile, (0, 0, 1, 0.45)),
        crop_fraction(equipment, (0.2, 0.2, 0.8, 0.8)),
        crop_fraction(dashboard, (0, 0.3, 0.5, 1)),
        crop_fraction(dashboard, (0.4, 0, 1, 0.5)),
        crop_fraction(mobile, (0, 0.4, 1, 1)),
        crop_fraction(dashboard, (0.2, 0.2, 0.8, 0.8)),
    ]
    for i, src in enumerate(gallery_sources, start=1):
        save_jpg(src, PUBLIC / "resources" / f"footer-v1-img{i}.jpg", (240, 240))

    # Team portraits — reuse home avatars at about-page size
    team_map = [
        ("team-v1-img1.png", "team-v2-img1.png"),
        ("team-v1-img2.png", "team-v2-img2.png"),
        ("team-v1-img3.png", "team-v2-img3.png"),
        ("team-v1-img4.png", "team-v2-img4.png"),
    ]
    for src_name, dest_name in team_map:
        src = PUBLIC / "team" / src_name
        if src.exists():
            save_png(Image.open(src), PUBLIC / "team" / dest_name, (250, 255))

    print("Site images prepared (operations-management / UI focus)")


if __name__ == "__main__":
    main()
