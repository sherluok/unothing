/**
 * https://nextjs.org/docs/advanced-features/custom-app
 */

import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import { HTMLAttributes } from 'react';
import { Layout } from '^/components/Layout';
import './_app.css';

const components = {
  // h1: (props: HTMLAttributes<HTMLHeadElement>) => <h1 {...props} />,
  // h2: (props: HTMLAttributes<HTMLHeadElement>) => <h2 {...props} />,
};

export default function App(props: AppProps) {
  const { Component, pageProps, ...rest } = props;
  console.log(pageProps, rest, Component);

  if (Component.name === 'MDXContent') {
    return (
      <Layout>
        <MDXProvider {...{ components }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
