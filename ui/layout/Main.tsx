import type { PropsWithChildren } from 'react';

import Head from 'next/head';

export const MainContainer = ({ children }: PropsWithChildren) => (
  <>
    <Head>
      <title>Gameplays</title>
      <meta name="description" content="FE Coding Challenge for Engagement Community Sr. Software Engineer." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <main>
      <div className="w-screen max-w-full">{children}</div>
    </main>
  </>
);
