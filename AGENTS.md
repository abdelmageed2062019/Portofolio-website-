# AGENTS.md — frontend_react

Personal portfolio site (Create React App, React 18).

## Commands

| Command | Action |
|---------|--------|
| `npm start` | Dev server on http://localhost:3000 |
| `npm run build` | Production build to `build/` |
| `npm test` | Test runner (CRA interactive watch mode) |
| `npm run deploy` | Build + publish to GitHub Pages (`gh-pages -d build`) |

No lint, format, or typecheck scripts — CRA's built-in ESLint runs via `react-scripts start/build`.

## Architecture

```
src/
├── index.js          # Entrypoint → ReactDOM.createRoot
├── App.js            # Root: theme context provider + section order
├── container/        # Page sections (Header, About, Work, Experience, Skills, Footer)
├── components/       # Shared (Navbar, NavigationDots, SocialMedia, Portofolio)
├── wrapper/          # HOCs: AppWrap (layout shell), MotionWrap (framer-motion)
├── cleint.js         # Sanity client (projectId, token from REACT_APP_SANITY_* env vars)
└── constants/        # Image imports barrel
```

Sections are rendered in a flat scrollable layout — no router.

## Key details

- **Styling**: Sass (SCSS) — import `.scss` files directly, CRA handles compilation via `sass` devDependency.
- **Sanity CMS**: Content is fetched client-side from Sanity. Requires `REACT_APP_SANITY_PROJECT_ID` and `REACT_APP_SANITY_PROJECT_TOKEN` in `.env`.
- **EmailJS**: Contact form sends via EmailJS. Credentials hardcoded in `Footer.jsx` (service/template/publicKey).
- **Theme**: Dark/light toggle via React Context (`themeContext` in `App.js`), persisted in `localStorage`.
- **Netlify deploy**: `netlify.toml` builds with `npm run build`, publishes `build/`, SPA redirect `/* → /index.html`.
- **GitHub Pages deploy**: `npm run deploy` (gh-pages).
- **No TypeScript, no routing, no state management** beyond Context.

## Environment

- Node >=20, npm >=10
- `.env` (committed) holds Sanity credentials — do not share or commit to public repos.
