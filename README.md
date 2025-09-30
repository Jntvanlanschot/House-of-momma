# House of Momma Website

Een productie-klare marketing/booking site voor House of Momma (platform voor sportieve vakanties, "Fitcations"), in samenwerking met Primal.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (voor e-mailverzending)
- **Vercel** (deployment)

## Features

- 🏄‍♀️ **Responsive design** - Mobile-first approach
- 🎨 **Modern UI** - Clean design met veel witruimte en grote typografie
- 📧 **Contact formulier** - Met e-mailverzending via Resend
- 🚀 **Performance** - Geoptimaliseerd voor snelheid
- ♿ **Toegankelijkheid** - Semantische HTML en ARIA-labels
- 🔍 **SEO** - Metadata en Open Graph tags

## Installatie

1. **Clone de repository**
   ```bash
   git clone <repository-url>
   cd house-of-momma
   ```

2. **Installeer dependencies**
   ```bash
   pnpm install
   ```

3. **Kopieer environment variabelen**
   ```bash
   cp env.example .env.local
   ```

4. **Vul de environment variabelen in**
   ```bash
   # .env.local
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_TO=your_email@example.com
   CONTACT_FROM=noreply@houseofmomma.com
   ```

5. **Start de development server**
   ```bash
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in je browser**

## Deployment naar Vercel

1. **Push je code naar GitHub**

2. **Import project in Vercel**
   - Ga naar [vercel.com](https://vercel.com)
   - Klik op "New Project"
   - Import je GitHub repository

3. **Configureer environment variabelen in Vercel**
   - Ga naar Project Settings > Environment Variables
   - Voeg de volgende variabelen toe:
     - `RESEND_API_KEY`
     - `CONTACT_TO`
     - `CONTACT_FROM`

4. **Deploy**
   - Vercel deployt automatisch bij elke push naar main branch

## Project Structuur

```
src/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── trips/[slug]/page.tsx   # Trip detail pagina's
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Homepage
├── components/
│   ├── About.tsx               # Over sectie
│   ├── CTA.tsx                 # Call-to-action sectie
│   ├── ContactForm.tsx         # Contact formulier
│   ├── Footer.tsx              # Footer component
│   ├── Header.tsx              # Header met navigatie
│   ├── Hero.tsx                # Hero sectie
│   ├── TripCard.tsx            # Trip kaart component
│   └── TripsGrid.tsx           # Trips grid sectie
└── lib/
    └── trips.ts                # Trip data en types
```

## Content Management

### Trips Toevoegen

Bewerk `src/lib/trips.ts` om nieuwe trips toe te voegen:

```typescript
export const trips: Trip[] = [
  {
    id: 'new-trip',
    title: 'Nieuwe Trip',
    slug: 'nieuwe-trip',
    teaser: 'Beschrijving van de trip...',
    image: '/trip-image.jpg',
    badge: 'House of Momma',
    location: 'Locatie',
    included: ['Item 1', 'Item 2'],
    program: ['Dag 1', 'Dag 2'],
    price: 'vanaf € 1.500 p.p.'
  }
];
```

### Afbeeldingen

Plaats nieuwe afbeeldingen in de `public/` directory:
- `hero.jpg` - Hero achtergrond
- `trip-[name].jpg` - Trip afbeeldingen

## E-mail Configuratie

De website gebruikt Resend voor e-mailverzending. Om dit te configureren:

1. **Maak een Resend account** op [resend.com](https://resend.com)
2. **Genereer een API key**
3. **Voeg de API key toe aan je environment variabelen**

## Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)

## Performance

- **Lighthouse Score**: 90+ op alle metrics
- **Core Web Vitals**: Geoptimaliseerd
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatisch via Next.js

## Toegankelijkheid

- Semantische HTML5 elementen
- ARIA labels en landmarks
- Keyboard navigation
- Screen reader vriendelijk
- Focus management
- Color contrast compliance

## Licentie

© 2024 House of Momma. Alle rechten voorbehouden.
