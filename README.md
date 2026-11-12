# Aravindh Invisible Grills

Official website for **Aravindh Invisible Grills**, Hyderabad — invisible grills, balcony & building safety nets, bird control, sports nets and ceiling cloth hangers.

Built with React 19 + TypeScript + Vite 7 + Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview the production build
npm run typecheck  # TypeScript check
```

## Structure

```
index.html
public/
  favicon.svg
  robots.txt
  images/              # source JPG photography
src/
  App.tsx              # page composition
  main.tsx
  index.css            # Tailwind theme tokens + component classes
  assets/img/          # optimised WebP images imported by the app
  components/          # Header, Footer, floating call/WhatsApp actions, icons, logo
  lib/data.ts          # all site content: contact, services, gallery, areas, FAQs, reviews
  sections/            # Hero/About/WhyUs/Areas, Services, Gallery, FaqReviews, Contact
  utils/cn.ts
```

## Content edits

Almost every text, number and image mapping lives in `src/lib/data.ts` — phone/WhatsApp,
navigation, hero slides, the 28 service cards, gallery items, service areas, FAQs and reviews.
Contact submissions are validated client-side and currently display an on-page confirmation
(no backend); wire the `submit` handler in `src/sections/Contact.tsx` to your form endpoint to
receive leads.
