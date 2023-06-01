"use client";

import type { NextPage } from "next";
import Head from 'next/head';
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My About Us Page</title>
        <meta name="description" content="This is my test about us page only." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://adappt.ai">our About Us! Page</a>
        </h1>

      </main>

      <footer className="w-full justify-center border-red-500 border-2">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/spinner.svg" alt="Spinner Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default About