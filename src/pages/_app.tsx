/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import { HTMLAttributes } from 'react';
import './_app.css';

const components = {
  h1: (props: HTMLAttributes<HTMLHeadElement>) => <h1 {...props} style={{ color: '#333' }} />,
  h2: (props: HTMLAttributes<HTMLHeadElement>) => <h2 {...props} />,
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <MDXProvider {...{ components }}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
