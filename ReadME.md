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

## Server Components VS Client Components

- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

- BY DEFAULT, NEXT.JS USES SERVER COMPONENTS !!!!
- To use Client Components, you can add the React "use client" directive

### Server Components

Benefits :

- data fetching
- security
- caching
- bundle size

Data Fetching: Server Components allow you to move data fetching to the server, closer to your data source. This can improve performance by reducing time it takes to fetch data needed for rendering, and the amount of requests the client needs to make.
Security: Server Components allow you to keep sensitive data and logic on the server, such as tokens and API keys, without the risk of exposing them to the client.
Caching: By rendering on the server, the result can be cached and reused on subsequent requests and across users. This can improve performance and reduce cost by reducing the amount of rendering and data fetching done on each request.
Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server. This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
Initial Page Load and First Contentful Paint (FCP): On the server, we can generate HTML to allow users to view the page immediately, without waiting for the client to download, parse and execute the JavaScript needed to render the page.
Search Engine Optimization and Social Network Shareability: The rendered HTML can be used by search engine bots to index your pages and social network bots to generate social card previews for your pages.
Streaming: Server Components allow you to split the rendering work into chunks and stream them to the client as they become ready. This allows the user to see parts of the page earlier without having to wait for the entire page to be rendered on the server.
Can build backend apps

### Client Components

Benefits :

- If we want the user to interact wiht the component
- Interactivity: Client Components can use state, effects, and event listeners, meaning they can provide immediate feedback to the user and update the UI.
- Browser APIs: Client Components have access to browser APIs, like geolocation or localStorage, allowing you to build UI for specific use cases.

Only the components that need to be client (interact with user) should be. The rest can be
server side and also these components can be nested in server component
