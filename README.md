# Quicc Technologies — marketing site

A single-page marketing site for Quicc Technologies, built with Next.js (App
Router), Tailwind CSS v4, Framer Motion and GSAP.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Contact form email (Resend)

The enquiry form posts to `POST /api/contact`, which sends two emails through
[Resend](https://resend.com): a notification to the Quicc inbox and a
confirmation to whoever submitted the form.

1. Create a Resend account and generate an API key.
2. Add **quicctech.io** under Resend → Domains and complete DNS verification.
   Until a domain is verified, Resend only allows sending from
   `onboarding@resend.dev` **to the address the account was registered with** —
   which means the visitor confirmation email will not be delivered.
3. Copy `.env.example` to `.env.local` and fill in the values.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | Resend API key |
| `CONTACT_TO_EMAIL` | no | Where enquiries land. Defaults to `Info@QuiccTech.io` |
| `CONTACT_FROM_EMAIL` | no | Sender identity. Its domain must be verified in Resend |

The notification email is treated as the one that must succeed — if it fails the
visitor is told to email directly. The confirmation is best-effort: a failure is
logged but does not report an error to someone whose enquiry did arrive.

The route also applies a honeypot field, shared client/server validation, and a
per-IP rate limit (6 submissions per 10 minutes). The rate limit is held in
process memory, so a horizontally scaled deployment needs a shared store to
enforce it strictly.

## Project layout

```
src/
  app/                 route entry points, global CSS, the contact API route
  components/
    chrome/            banner, header, footer, scroll progress, cursor
    sections/          one file per page section
    ui/                shared primitives (Marquee, Reveal, Button, …)
    icons/             hand-built SVG icon sets
  content/             all site copy and data, kept out of the components
  lib/                 validation, email templates, rate limiting, hooks
```

Copy, prices, services, testimonials and the tech stack all live in
`src/content` — edit those files rather than the components.

## Replacing placeholder content

- **Work showcase** (`src/content/work.ts`) — tiles currently render generated
  mock UI. Add a screenshot to `/public` and set `image` on an entry to use it.
- **Testimonials** (`src/content/testimonials.ts`) — illustrative copy showing
  the layout. Replace with real, permitted client reviews before launch.
- **Client logos** (`src/content/clients.ts`) — house-built marks standing in
  for real client logos.

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run lint    # ESLint
```
