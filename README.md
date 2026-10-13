# TraqAll / Billdins

## Run locally

Install Node.js 22 or newer. Open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3002. Stop with Ctrl+C. The default development port is 3002, so `PORT=3002` is unnecessary.

Production:

```sh
npm run build
npm run start -- --port 3002
```

## Keep the project local

Keep this entire folder outside iCloud-synced Desktop/Documents, for example `~/Developer/builldings`. All project source, runtime assets, and original image uploads are included here. The project does not depend on the previous Documents or Downloads copies. The macOS startup check detects cloud placeholders before Next.js tries to read them.

## Share

Send `builldings-source.zip` from this folder. The recipient should extract it into a local folder, then run `npm ci` and `npm run dev`. Node dependencies are installed for their machine; `node_modules` and generated `.next` files are intentionally excluded. Network access is needed for dependency installation and Google fonts during a fresh build.

After making changes, regenerate the ZIP with Python 3:

```sh
python3 scripts/package-project.py
```

The archive includes source image uploads, but excludes local environment secrets and caches. No private credentials are required to render the included site.

## Optional image preparation

The prepared images are already included. To regenerate them, install Python 3.10 or newer, then:

```sh
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r scripts/requirements.txt
npm run prepare:images
npm run prepare:site-images
```

On Windows, activate with `.venv\Scripts\activate` and invoke the Python scripts with your Python 3 interpreter. Image preparation writes to `public/assets/images`.

## Checks and recovery

```sh
npm test
node scripts/check-local-files.mjs
npm run build
```

See `RECOVERY-STATUS.md` for recovery details. The Contact page currently uses email links; it does not submit through an application backend. Legacy account, cart, checkout, and other template screens are included as supplied; restoring their files does not add authentication, payment processing, or other backend services.

## Form API

Set `NEXT_PUBLIC_API_BASE_URL` using `.env.example` before building. See [API integration](docs/api-integration.md) for the form inventory, provisional endpoints, payload mappings, response contract and backend confirmation checklist.
