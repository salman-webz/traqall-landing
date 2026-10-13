# Local recovery — 12 October 2026

The working project is now fully local in `builldings`, outside iCloud-synced Documents. No project source is a cloud-only placeholder or an external symlink.

The last 60 missing source/asset files were recovered from the existing Downloads copy of the project. Every recovered file matched the corresponding cloud placeholder's recorded byte size. Newer local navigation fixes were preserved. The original image uploads are included in `assets/source`; the image utility no longer contains a machine-specific path.

The previous recovery had replaced an unreadable Contact template with the current email-link page. The recovered original template is preserved at `recovery/original-contact-page.js.txt`. Its form targets a PHP endpoint, which the Next.js server does not execute, so it was not substituted for the working email-link page.

The source ZIP contains the complete local source tree and assets, excluding generated output, installed dependencies, local secrets, and recovery caches. Retained old copies in Documents/Downloads are not needed to run this folder.
