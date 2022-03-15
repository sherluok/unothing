/**
 * - MDX: https://nextjs.org/docs/advanced-features/using-mdx
 * - Sass: https://nextjs.org/docs/basic-features/built-in-css-support#customizing-sass-options
 */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react", // If you use `MDXProvider`, uncomment the following line.
  },
});

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'], // Append the default value with md extensions
  sassOptions: {},
});
