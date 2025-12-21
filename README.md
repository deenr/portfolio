# Dean Reymen - Portfolio

A minimal, personal portfolio website built with Next.js 16 and Tailwind CSS.

## Features

- **Dynamic Photo Albums** - Automatically generates album pages from folders in `public/`
- **Custom Image Modal** - Smooth animations with Framer Motion and shared element transitions
- **Dark/Light Mode** - Theme toggle with `next-themes`
- **Responsive Design** - Mobile-first approach with consistent typography
- **Geist Mono Font** - Clean, monospace typography throughout

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Photo Albums

1. Create a new folder in `public/` (e.g., `public/my-album`)
2. Add your photos (JPG, PNG, WEBP, GIF supported)
3. Optionally add metadata in `app/lib/photo-data.json`:

```json
{ "file": "photo.webp", "date": "1 Jan 2024", "location": "City, Country", "category": "my-album" }
```

4. The album will be available at `/albums/my-album`

## Project Structure

```
app/
├── albums/[slug]/    # Dynamic album pages
├── components/       # Reusable components
├── lib/              # Utilities and data
└── page.tsx          # Homepage
public/
└── [album-name]/     # Photo albums
```

## License

MIT
