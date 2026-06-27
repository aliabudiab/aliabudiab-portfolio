import { Html, Head, Main, NextScript } from "next/document";

import { siteConfig } from "@/content/site";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content={`${siteConfig.name} — ${siteConfig.title}. Frontend architecture, design systems, and high-performance web experiences.`}
        />
        <meta
          name="keywords"
          content="software engineer, senior software engineer, frontend engineer, staff engineer, React, Next.js, TypeScript, design systems, Ali Abu Diab"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={siteConfig.name} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="application-name" content={siteConfig.name} />
        <meta name="theme-color" content="#0a0a0b" />
        <meta name="author" content={siteConfig.name} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
