#!/usr/bin/env python3
"""Resize and composite TraqAll home page images to template dimensions."""

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "source"
PUBLIC = ROOT / "public" / "assets" / "images"
TRAQALL = PUBLIC / "traqall"


def find_asset(name_part: str) -> Path:
    matches = sorted(ASSETS.glob(f"*{name_part}*"))
    if not matches:
        raise FileNotFoundError(f"Missing source asset matching {name_part} in {ASSETS}")
    return matches[0]


DASHBOARD_SRC = find_asset("d33513b0")
MOBILE_SRC = find_asset("d86a3193")
EQUIPMENT_SRC = find_asset("1530ae31")


def ensure_dir(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def save_jpg(img: Image.Image, dest: Path, size: tuple[int, int], quality: int = 88) -> None:
    ensure_dir(dest)
    out = img.convert("RGB").resize(size, Image.Resampling.LANCZOS)
    out.save(dest, "JPEG", quality=quality, optimize=True)


def save_png(img: Image.Image, dest: Path, size: tuple[int, int] | None = None) -> None:
    ensure_dir(dest)
    out = img.convert("RGBA")
    if size:
        out = out.resize(size, Image.Resampling.LANCZOS)
    out.save(dest, "PNG", optimize=True)


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


def paste_screen(base: Image.Image, screen: Image.Image, box: tuple[int, int, int, int]) -> None:
    x1, y1, x2, y2 = box
    w, h = x2 - x1, y2 - y1
    fitted = fit_cover(screen, (w, h))
    base.paste(fitted, (x1, y1))


def build_equipment_showcase() -> Image.Image:
    """Replace mock UI on marketing image with real TraqAll screenshots."""
    base = Image.open(EQUIPMENT_SRC).convert("RGB")
    dashboard = Image.open(DASHBOARD_SRC)
    mobile = Image.open(MOBILE_SRC)

    # Laptop + phone screen regions (1024x682 marketing asset)
    paste_screen(base, dashboard, (132, 418, 348, 598))
    paste_screen(base, mobile, (508, 432, 578, 612))
    return base


def build_slider_product_png() -> Image.Image:
    """435x630 hero product visual: laptop + phone with real UI."""
    canvas = Image.new("RGBA", (435, 630), (0, 0, 0, 0))
    dashboard = Image.open(DASHBOARD_SRC)
    mobile = Image.open(MOBILE_SRC)

    laptop_frame = Image.new("RGBA", (320, 210), (20, 24, 32, 255))
    laptop_screen = dashboard.convert("RGB").resize((296, 178), Image.Resampling.LANCZOS)
    laptop_frame.paste(laptop_screen, (12, 12))
    canvas.paste(laptop_frame, (20, 120), laptop_frame)

    phone_frame = Image.new("RGBA", (118, 230), (20, 24, 32, 255))
    phone_screen = mobile.convert("RGB").resize((102, 206), Image.Resampling.LANCZOS)
    phone_frame.paste(phone_screen, (8, 12))
    canvas.paste(phone_frame, (285, 200), phone_frame)

    return canvas


def main() -> None:
    TRAQALL.mkdir(parents=True, exist_ok=True)

    equipment = build_equipment_showcase()
    slider_product = build_slider_product_png()
    dashboard = Image.open(DASHBOARD_SRC)
    mobile = Image.open(MOBILE_SRC)

    save_png(dashboard, TRAQALL / "dashboard.png")
    save_png(mobile, TRAQALL / "mobile-app.png")
    save_jpg(equipment, TRAQALL / "equipments-pic.png", (1024, 682))
    save_png(slider_product, PUBLIC / "slider" / "slider-v1-product.png", (435, 630))

    mappings = [
        (ASSETS / "slider-bg-1.png", PUBLIC / "backgrounds" / "slider-v1-img1.jpg", (1920, 790)),
        (ASSETS / "slider-bg-2.png", PUBLIC / "backgrounds" / "slider-v1-img2.jpg", (1920, 790)),
        (ASSETS / "slider-bg-3.png", PUBLIC / "backgrounds" / "slider-v1-img3.jpg", (1920, 790)),
        (ASSETS / "about-img1.png", PUBLIC / "about" / "about-v1-img1.jpg", (420, 465)),
        (ASSETS / "about-img2.png", PUBLIC / "about" / "about-v1-img2.jpg", (155, 175)),
        (ASSETS / "service-timecards.png", PUBLIC / "services" / "timecards-pic.png", (325, 220)),
        (TRAQALL / "equipments-pic.png", PUBLIC / "services" / "equipments-pic.png", (325, 220)),
        (ASSETS / "service-materials.png", PUBLIC / "services" / "materials-pic.png", (325, 220)),
        (ASSETS / "service-tools.png", PUBLIC / "services" / "small-tools-pic.png", (325, 220)),
        (ASSETS / "service-issues.png", PUBLIC / "services" / "issues-pic.png", (325, 220)),
        (ASSETS / "working-1.png", PUBLIC / "resources" / "working-process-v1-img1.jpg", (915, 360)),
        (ASSETS / "working-2.png", PUBLIC / "resources" / "working-process-v1-img2.jpg", (915, 360)),
        (DASHBOARD_SRC, PUBLIC / "resources" / "working-process-v1-img3.jpg", (915, 360)),
        (ASSETS / "working-4.png", PUBLIC / "resources" / "working-process-v1-img4.jpg", (915, 360)),
        (ASSETS / "blog-1.png", PUBLIC / "blog" / "blog-v1-img1.jpg", (340, 260)),
        (ASSETS / "blog-2.png", PUBLIC / "blog" / "blog-v1-img2.jpg", (340, 260)),
        (ASSETS / "blog-3.png", PUBLIC / "blog" / "blog-v1-img3.jpg", (340, 260)),
        (ASSETS / "pricing-bg.png", PUBLIC / "backgrounds" / "pricing-v1-bg.jpg", (1920, 860)),
        (ASSETS / "appointment-bg.png", PUBLIC / "backgrounds" / "appoinment-v1-bg.jpg", (500, 800)),
        (ASSETS / "faq-1.png", PUBLIC / "resources" / "faq-v1-img1.jpg", (190, 230)),
        (ASSETS / "faq-2.png", PUBLIC / "resources" / "faq-v1-img2.jpg", (190, 230)),
        (ASSETS / "faq-3.png", PUBLIC / "resources" / "faq-v1-img3.jpg", (190, 230)),
        (ASSETS / "faq-4.png", PUBLIC / "resources" / "faq-v1-img4.jpg", (190, 230)),
        (equipment, PUBLIC / "slider" / "slider-v1-equipment.png", (435, 630)),
        (slider_product, PUBLIC / "slider" / "slider-v1-img2.png", (435, 630)),
        (slider_product, PUBLIC / "slider" / "slider-v1-img3.png", (435, 630)),
    ]

    for src, dest, size in mappings:
        img = Image.open(src) if isinstance(src, Path) else src
        if dest.suffix.lower() == ".png":
            save_png(fit_cover(img, size), dest, None)
        else:
            save_jpg(fit_cover(img, size), dest, size)

    avatars = [
        (ASSETS / "avatar-superintendent.png", PUBLIC / "testimonial" / "testimonial-v1-img6.png", (85, 85)),
        (ASSETS / "avatar-manager.png", PUBLIC / "team" / "team-v1-img1.png", (80, 80)),
        (ASSETS / "avatar-foreman.png", PUBLIC / "team" / "team-v1-img2.png", (80, 80)),
        (ASSETS / "avatar-estimator.png", PUBLIC / "team" / "team-v1-img3.png", (80, 80)),
        (ASSETS / "avatar-executive.png", PUBLIC / "team" / "team-v1-img4.png", (80, 80)),
    ]
    for src, dest, size in avatars:
        if src.exists():
            save_png(Image.open(src), dest, size)

    # Testimonial avatar strip (reuse superintendent + generated avatars)
    testimonial_sources = [
        ASSETS / "avatar-manager.png",
        ASSETS / "avatar-foreman.png",
        ASSETS / "avatar-estimator.png",
        ASSETS / "avatar-executive.png",
        ASSETS / "avatar-superintendent.png",
    ]
    for i, src in enumerate(testimonial_sources, start=1):
        if src.exists():
            save_png(Image.open(src), PUBLIC / "testimonial" / f"testimonial-v1-img{i}.png", (60, 60))

    save_png(Image.open(ASSETS / "avatar-manager.png"), PUBLIC / "about" / "about-v1-img3.png", (75, 75))

    print("Home page images prepared in", PUBLIC)


if __name__ == "__main__":
    main()
