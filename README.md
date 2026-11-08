# Al ZamZam Cooling — Company Website

**The Complete Cooling Solution** · HVAC, Air Conditioning & Refrigeration · Ajman, UAE

A fast, fully static company website built with **Next.js (App Router) + TypeScript + Tailwind CSS**, hosted for free on **GitHub Pages**. No server, database or paid backend is needed.

---

## 1. Quick start

You need **Node.js 20.9 or newer** (check with `node -v`).

| Command | What it does |
| --- | --- |
| `npm install` | Downloads the libraries listed in `package.json` into `node_modules/`. Run once after cloning. |
| `npm run dev` | Starts a live development server at http://localhost:3000/al-zamzam-cooling/. Pages reload as you save files. |
| `npm run build` | Builds the final static website into the `out/` folder. |
| `npm run preview` | Serves the built `out/` folder at http://localhost:4173/al-zamzam-cooling/, the same way GitHub Pages will. |
| `npm run lint` | Checks the code for common mistakes. |

---

## 2. What to edit (most common tasks)

| I want to… | Edit this file |
| --- | --- |
| Add the **WhatsApp number**, phone, email | `src/config/site.ts` → `contact` |
| Change the **address** or map link | `src/config/site.ts` → `address`, `mapsLink`, `mapsEmbed` |
| Change **service text** | `src/data/services.ts` |
| Replace **photos** | `src/data/images.ts` (see instructions at the top of the file) |
| Replace the **logo** | `public/logo/alzamzam-logo.svg` and `alzamzam-logo-white.svg` (browser-tab icon: `src/app/icon.svg`) |
| Change **brand colours / fonts** | `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx` |
| Change **page SEO titles** | the `pageMetadata({...})` call at the top of each `page.tsx` |

### Changing the WhatsApp number, phones or email

In `src/config/site.ts`:

```ts
contact: {
  whatsapp: "971509202450",   // international format, digits only: 971 + number without the first 0
  phones: [
    { dial: "+971509202450", display: "050 920 2450" },
    { dial: "+971507742450", display: "050 774 2450" },
  ],
  email: "alzamzamcoolingsolutions@gmail.com",
},
```

All WhatsApp buttons, the contact form, the Call buttons, the footer and Google's business data update automatically.

---

## 3. How the project is organised

```
al-zamams/
├── .github/workflows/deploy.yml   ← Automatic build & deploy to GitHub Pages
├── public/                        ← Files copied as-is to the site (images, logo, favicon)
│   ├── images/                    ← Put your own photos here
│   └── logo/                      ← Put the official logo here
├── src/
│   ├── app/                       ← PAGES (App Router — folder name = URL)
│   │   ├── layout.tsx             ← Wraps every page: navbar, footer, fonts, default SEO
│   │   ├── page.tsx               ← Home page            →  /
│   │   ├── about/page.tsx         ← About page           →  /about/
│   │   ├── services/page.tsx      ← Services page        →  /services/
│   │   ├── contact/page.tsx       ← Contact page         →  /contact/
│   │   ├── not-found.tsx          ← 404 page
│   │   ├── sitemap.ts             ← Generates /sitemap.xml
│   │   ├── robots.ts              ← Generates /robots.txt
│   │   └── globals.css            ← Brand colours, fonts, button styles
│   ├── components/                ← Reusable building blocks (Navbar, Hero, ServiceCard, …)
│   ├── config/site.ts             ← ⭐ Company details — single source of truth
│   ├── data/services.ts           ← The 5 services (text, icons, images)
│   ├── data/images.ts             ← All photo URLs + alt text
│   ├── lib/seo.ts                 ← SEO helper + LocalBusiness structured data
│   └── types/index.ts             ← TypeScript "shapes" for services, images, etc.
├── next.config.ts                 ← Next.js settings (static export)
└── package.json                   ← Project name, scripts and libraries
```

### How the App Router works (in one minute)

- Every folder inside `src/app/` that contains a `page.tsx` becomes a URL.
  `src/app/about/page.tsx` → `/about/`.
- `layout.tsx` wraps all pages, so the navbar and footer are written once.
- Components are **Server Components** by default: they run at build time and produce plain HTML (fast, no JavaScript sent to the browser).
- Files starting with `"use client"` (Navbar, ContactForm) are **Client Components**: they also run in the browser because they need interactivity (opening the mobile menu, validating the form).

### How the static export works

`next.config.ts` sets `output: "export"`. When you run `npm run build`, Next.js renders every page to an HTML file inside `out/`:

```
out/index.html          → /
out/about/index.html    → /about/
out/services/index.html → /services/
out/contact/index.html  → /contact/
out/404.html, sitemap.xml, robots.txt, _next/ (CSS, JS)
```

That folder can be hosted anywhere that serves files — here, GitHub Pages. Because there is no server, features like API routes, server actions and the built-in image optimiser are not used. Images are set to `unoptimized: true`, so each photo URL in `src/data/images.ts` asks Unsplash for a fixed width instead.

### How the contact form works

There is no server to send email, so the form does **not** pretend to send messages. When a visitor submits:

1. The fields are checked (name, valid phone, optional valid email, service, message).
2. WhatsApp opens with the enquiry pre-typed.
3. The visitor presses **Send** in WhatsApp.

The "Enquire About This Service" buttons on the Services page link to `/contact/?service=…`, which pre-selects that service.

---

## 4. Put the code on GitHub

Install Git and create a free GitHub account first. Then:

1. On GitHub, click **New repository**. Name it `al-zamzam-cooling` (it must match `basePath: "/al-zamzam-cooling"` in `next.config.ts`). Leave it empty (no README).
2. In this project folder, run the commands below. `git` was already initialised by the project setup.

```bash
git add .
git commit -m "Al ZamZam Cooling website"
git branch -M main
git remote add origin https://github.com/rashinechikunnu/al-zamzam-cooling.git
git push -u origin main
```

What these do: `add` stages all files, `commit` saves a snapshot, `branch -M main` names the branch `main`, `remote add` links to your GitHub repo, and `push` uploads it.

---

## 5. Deploy to GitHub Pages (free hosting)

1. On GitHub, open your repository → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push any change to `main` (or open the **Actions** tab → *Deploy to GitHub Pages* → **Run workflow**).
4. Wait for the green tick in the **Actions** tab (about 1–2 minutes).
5. The site is live at `https://rashinechikunnu.github.io/al-zamzam-cooling/`.

The workflow (`.github/workflows/deploy.yml`) automatically:

- installs dependencies, lints and builds the site,
- sets the correct **site URL** for canonical tags, the sitemap and robots.txt,
- uploads `out/` and publishes it.

Every future `git push` to `main` redeploys the site.

---

## 6. Connect a custom domain

Once the domain is purchased (for example from GoDaddy, Namecheap, Cloudflare or a UAE `.ae` registrar):

### Step A: Tell GitHub the domain

Repository → **Settings → Pages → Custom domain** → enter `www.your-domain.com` → **Save**.

(With GitHub Actions deployments, the domain is set here. A `CNAME` file in the code is not needed.)

### Step B: Add DNS records at your domain registrar

| Type | Name / Host | Value |
| --- | --- | --- |
| `CNAME` | `www` | `<your-username>.github.io` |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` (optional, IPv6) | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |

The `A` records make `your-domain.com` work; the `CNAME` makes `www.your-domain.com` work. GitHub redirects one to the other automatically.

DNS changes can take from a few minutes up to 24–48 hours to spread.

**Recommended:** verify the domain in your GitHub account settings → **Pages → Add a domain**. This stops anyone else from using it on GitHub.

### Step C: Enable HTTPS

Back in **Settings → Pages**, once the DNS check passes, tick **Enforce HTTPS**. GitHub issues a free SSL certificate automatically. If the box is greyed out, wait a little longer for DNS and the certificate.

### Step D: Remove the base path, then redeploy

With a custom domain the site lives at the root (`https://www.your-domain.com/`), not under `/al-zamzam-cooling`. In `next.config.ts`, change:

```ts
const basePath = "/al-zamzam-cooling";   →   const basePath = "";
```

Also change `BASE_PATH` at the top of `scripts/preview.mjs` to `""`.

Then commit, push, and run the workflow again (Actions → *Deploy to GitHub Pages* → **Run workflow**) so canonical URLs, the sitemap and robots.txt use your new domain. You can also hard-code the domain in `src/config/site.ts` → `url`.

### Step E: Search engines

Add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.your-domain.com/sitemap.xml`. A **Google Business Profile** for Al ZamZam Cooling also helps local "Ajman" searches. Once it exists, paste its share link into `mapsLink` in `src/config/site.ts`.

---

## 7. Before going live: checklist

- [x] WhatsApp number, phones and email added in `src/config/site.ts`
- [x] Official logo and browser-tab icon added
- [ ] Real project photos added if available (`src/data/images.ts`)
- [ ] Map pin checked against the real location (`mapsLink` / `mapsEmbed`)
- [ ] Custom domain connected and **Enforce HTTPS** ticked

## Photo credits

Stock photos are from [Unsplash](https://unsplash.com) and used under the [Unsplash License](https://unsplash.com/license), which allows free commercial use.
