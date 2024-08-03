## NEXTJS TUTORIAL

## Create Next App

```sh
npx create-next-app@latest appName
```

## Folder Structure

- app folder - where we will spend most of our time
  - setup routes, layouts, loading states, etc
- node_modules - project dependencies
- public - static assets
- .gitignore - sets which will be ignored by source control
- bunch of config files (will discuss as we go)
- in package.json look scripts
- 'npm run dev' to spin up the project on http://localhost:3000

```sh
npm run dev
```

- in globals.css remove everything after directives
- get a hold of the README.md

## Home Page

- page.tsx in the root of app folder
- represents root of our application
  '/' local domain or production domain
- react component (server component)
- bunch of css classes (will discuss Tailwind in few lectures)
- export component as default
- file name "page" has a special meaning
- snippets extension

  app/page.tsx

```tsx
const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
    </div>
  );
};
export default HomePage;
```

## Create Pages in Next.js

- in the app folder create a folder with the page.js file
  - about/page.js
  - contact/page.js
- can have .js .jsx .tsx extension

app/about/page.tsx

```tsx
const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">AboutPage</h1>
    </div>
  );
};
export default AboutPage;
```

## Link Component

- navigate around the project
- import Link from 'next/link'
  home page

```tsx
import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">HomePage</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">
        about page
      </Link>
    </div>
  );
};
export default HomePage;
```

## Nested Routes

- app/info/contact/page.tsx
- if no page.tsx in a segment will result in 404

```tsx
function ContactPage() {
  return <h1 className="text-7xl">ContactPage</h1>;
}
export default ContactPage;
```

## CSS and Tailwind

- vanilla css in globals.css
- [Tailwind](https://tailwindcss.com/)

## Layouts and Templates

- layout.tsx
- template.tsx

  Layout is a component which wraps other pages and layouts. Allow to share UI. Even when the route changes, layout DOES NOT re-render. Can fetch data but can't pass it down to children. Templates are the same but they re-render.

- the top-most layout is called the Root Layout. This required layout is shared across all pages in an application. Root layouts must contain html and body tags.
- any route segment can optionally define its own Layout. These layouts will be shared across all pages in that segment.
- layouts in a route are nested by default. Each parent layout wraps child layouts below it using the React children prop.

```tsx
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>hello there</nav>
        {children}
      </body>
    </html>
  );
}
```

## Challenge - Navbar

- create components/Navbar.tsx
- render in layout.tsx

```tsx
import Link from "next/link";

function Navbar() {
  return (
    <nav className="max-w-3xl mx-auto py-4 flex gap-x-4">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/tours">Tours</Link>
      <Link href="/actions">Actions</Link>
    </nav>
  );
}
export default Navbar;
```

```tsx
import Navbar from "@/components/Navbar";

return (
  <html lang="en">
    <body className={inter.className}>
      <Navbar />
      <main className="max-w-3xl mx-auto py-10">{children}</main>
    </body>
  </html>
);
```

## Fonts - Google Fonts

Automatically self-host any Google Font. Fonts are included in the deployment and served from the same domain as your deployment. No requests are sent to Google by the browser.

```tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>hello there</nav>
        {children}
      </body>
    </html>
  );
}
```

## Metadata

Next.js has a Metadata API that can be used to define your application metadata (e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.To define static metadata, export a Metadata object from a layout.tsx or page.tsx file.

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
};
```
