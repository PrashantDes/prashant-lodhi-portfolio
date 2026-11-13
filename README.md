# Prashant Lodhi | Data Analyst Portfolio

My personal portfolio showcasing data analytics projects, practical skills, education, and virtual internship experience. I use Python, SQL, Power BI, and Excel to turn raw data into insights and dashboards.

**Live website:** [prashant-lodhi-portfolio.vercel.app](https://prashant-lodhi-portfolio.vercel.app/)

## Features

- Introduction, biography, education, and virtual internship experience.
- Skills grouped by visualization, SQL, Python, and statistical analysis.
- Six featured projects with screenshots, technology tags, and source links.
- Downloadable resume and links to GitHub, LinkedIn, and email.
- Curated articles and documentation on the Resources page.
- Blog infrastructure for future Markdown posts.
- Light and dark themes, animated content, and a floating navigation dock.
- Navbar shortcuts for Home, Projects, Skills, and Resources, alongside social links and the theme toggle.


## Tech stack

- **Framework:** Next.js 14 App Router, React 18, and TypeScript.
- **Styling:** Tailwind CSS, shadcn/ui, and Radix UI.
- **Animation:** Framer Motion and Magic UI components.
- **Icons:** Lucide and custom SVG icons.
- **Content:** Markdown, gray-matter, unified, and rehype-pretty-code.
- **Hosting:** Vercel, connected to this GitHub repository.

## Run locally

Install Node.js and npm, then clone the repository using a GitHub account with access:

```bash
git clone https://github.com/PrashantDes/prashant-lodhi-portfolio.git
cd prashant-lodhi-portfolio
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). If that port is occupied, use the URL printed by Next.js.

The current app does not require environment variables.

### Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm start` | Serve the production build after building |
| `npm run lint` | Run the Next.js lint checks |

## Edit content

| Path | Contents |
| --- | --- |
| `src/data/resume.tsx` | Profile, skills, education, internship, projects, contact details, and navbar links |
| `src/data/resources.ts` | Resource links, pinned reads, categories, and logos |
| `src/app/page.tsx` | Homepage sections and layout |
| `src/app/layout.tsx` | Shared layout and page metadata |
| `src/app/globals.css` | Global styles and dock appearance |
| `src/components/` | Shared UI, navigation, cards, and animation components |
| `content/` | Blog posts stored as `.mdx` files |
| `public/` | Avatar, resume PDF, project screenshots, and resource logos |

When changing the deployed domain, update `DATA.url` in `src/data/resume.tsx` so the page metadata uses the correct address.

### Add a blog post

Create a file such as `content/my-first-analysis.mdx` with frontmatter and Markdown content:

```md
---
title: "My First Analysis"
publishedAt: "2026-11-13"
summary: "What I learned while exploring a dataset."
---

Write the article here using Markdown.
```

The post appears on `/blog` and is available at `/blog/my-first-analysis`. The content pipeline renders Markdown; embedded JSX components are not configured.

## Deploy on Vercel

1. Import `PrashantDes/prashant-lodhi-portfolio` into Vercel and allow access to the private repository.
2. Select **Next.js** as the framework and keep the **Root Directory** as `./`.
3. Use **main** as the production branch and keep the detected build settings.
4. Deploy. Subsequent pushes to `main` trigger a deployment through the connected Vercel project.

## Contact

- **GitHub:** [PrashantDes](https://github.com/PrashantDes)
- **LinkedIn:** [Prashant Lodhi](https://www.linkedin.com/in/itsprashantlodhi)
- **Email:** [prashantlodhi1920@gmail.com](mailto:prashantlodhi1920@gmail.com)
