export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://biblehs.github.io/page/sitemap.xml',
    host: 'https://biblehs.github.io',
  };
}
