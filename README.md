# Prashant Lodhi — Portfolio

My personal portfolio website. Live at [prashant-lodhi.vercel.app](https://prashant-lodhi.vercel.app/).

## What's inside

- **Home** — about me, virtual internship, education, skills, and featured projects
- **Blog** — MDX support for future data analytics articles
- **Resources** — tools, references, and learning material I use and recommend
- Dark mode, smooth scroll animations, and a fully responsive layout

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) with TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/) + [Magic UI](https://magicui.design/) for animations
- MDX for blog content, rendered with `unified`/`rehype-pretty-code`

## Running locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To add a blog post, drop a new `.mdx` file in `content/` with `title`, `publishedAt`, and `summary` frontmatter. Projects, internship experience, education, skills, and contact information are all edited in one place: `src/data/resume.tsx`.

## Contact

- GitHub: [PrashantDes](https://github.com/PrashantDes)
- LinkedIn: [Prashant Lodhi](https://www.linkedin.com/in/itsprashantlodhi)
- Email: prashantlodhi1920@gmail.com
