import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Ali Abu Diab is a software engineer with 3+ years of experience in building and maintaining visually stunning, user-friendly, and responsive websites. Proficient in HTML, CSS, and JavaScript, as well as modern libraries and frameworks."
        />
        <meta name="revisit-after" content="1 days" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-title" content="Ali Abu Diab" />
        <meta name="application-name" content="AD Portfolio" />
        <meta
          name="keywords"
          content="software engineer, frontend engineer, Nuxt, Next, React, Vue, web applications, personal website, Ali Abu Diab, Ali, Abu Diab, علي أبودياب, علي"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#000000" />
        <meta name="language" content="English" />
        <meta name="owner" content="Ali Abu Diab" />
        <meta name="copyright" content="Ali Abu Diab(c) 2023" />
        <meta name="author" content="Ali Abu Diab" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:title" content="Ali Abu Diab - Software Engineer" />
        <meta
          property="og:description"
          content="Ali Abu Diab is a software engineer with 3+ years of experience in building and maintaining visually stunning, user-friendly, and responsive websites. Proficient in HTML, CSS, and JavaScript, as well as modern libraries and frameworks."
        />
        <meta property="og:url" content="https://aliabudiab.com/" />
        <meta property="og:type" content="website" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
