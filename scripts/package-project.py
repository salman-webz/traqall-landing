#!/usr/bin/env python3
"""Create a portable source archive inside the project folder."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
output = root / 'builldings-source.zip'
excluded = {'.git', '.next', 'node_modules', '.venv', 'venv', '.pylibs',
            '__pycache__', '.icloud-source-backup', '.vercel'}
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for path in sorted(root.rglob('*')):
        relative = path.relative_to(root)
        if any(part in excluded for part in relative.parts):
            continue
        if path == output or not path.is_file() or path.name == '.DS_Store':
            continue
        if path.name.startswith('.env') and path.name != '.env.example':
            continue
        if path.suffix in {'.zip', '.pyc', '.log'}:
            continue
        if path.is_symlink():
            raise RuntimeError(f'Cannot package a symlink: {relative}')
        archive.write(path, Path('builldings') / relative)
with ZipFile(output) as archive:
    damaged = archive.testzip()
    if damaged:
        raise RuntimeError(f'Archive verification failed: {damaged}')
    print(f'Created {output.name}: {len(archive.namelist())} files, {output.stat().st_size:,} bytes')
