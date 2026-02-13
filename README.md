# Evangeliegemeente De Deur Maasluis

Church website project with multiple design prototypes for "Evangeliegemeente De Deur Maasluis" - a Christian fellowship church in Maassluis, Netherlands.

## Live Demo

**[View all designs →](https://church-website-nine-opal.vercel.app)**

## Design Prototypes

| Version | Name | Description |
|---------|------|-------------|
| [v1](/v1) | The Pro Standard | Clean, high-contrast, conversion-focused design with floating CTA |
| [v5](/v5) | Nature & Peace | Fresh greens, glassmorphism effects, organic shapes |
| [v6](/v6) | Cinema Noir | Dark cinematic aesthetic with amber accents and film-grain |
| [v7](/v7) | Scandinavian Minimal | Ultra-clean with generous whitespace and refined typography |
| [v8](/v8) | Ocean Calm | Deep blues, cyan gradients, maritime feel |
| [v9](/v9) | Sunrise Hope | Warm gradients from dark to light, dawn colors |
| [v10](/v10) | Editorial Grace | Magazine layout with asymmetric grids |

Use the floating design switcher (bottom-right) to quickly compare all designs.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **React**: v19
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

```bash
# Clone the repository
git clone git@github.com:jellewijma/kerk-site.git
cd kerk-site

# Install dependencies
cd church-website
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design selector.

## Project Structure

```
church-website/
├── app/
│   ├── components/     # Shared components
│   ├── v1-v10/         # Design prototype pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage (design selector)
├── public/             # Static assets
└── resources/          # Design reference images
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type checking |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
