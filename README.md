# SYVONIX Technologies — Website

Multi-page company website built with Next.js, TypeScript, Tailwind CSS and Lucide icons.

## Pages
- `/` — Home
- `/about` — Company purpose, mission, vision and principles
- `/services` — Software, AI, automation, product design, backend/cloud and support
- `/portfolio` — Project explorations and case-study structure
- `/process` — Delivery phases and collaboration approach
- `/pricing` — Engagement models and pricing factors (no invented fixed rates)
- `/contact` — Contact details and email-based project brief

## Run locally
Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm run start
```

## Before publishing
1. Confirm legal clearance for the SYVONIX name and relevant trademark classes.
2. Replace `hello@syvonix.com` with an email address you control in the footer and contact page.
3. Connect a real contact form endpoint (for example, a server route and email provider). The current contact CTA opens a prefilled email draft and does not submit data to a server.
4. Replace or validate portfolio descriptions and labels. The current portfolio entries are framed as concepts/prototypes, not verified client deployments.
5. Add the final production domain, social profiles, privacy policy and any required legal pages.
6. Review service descriptions and industries to ensure they accurately reflect what the company is ready to deliver.

No founder information is included.


## Motion and navigation
- Route entry transition is implemented through `src/app/template.tsx`.
- Scroll reveal animations use `IntersectionObserver` in `src/components/ScrollMotion.tsx`.
- The navigation highlights the active route, gains a glass background on scroll, and opens a working mobile menu.
- Reduced-motion preferences are respected.
