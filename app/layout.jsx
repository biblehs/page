import './globals.css';

export const metadata = {
  title: 'Shaun Han | Web3 Product Portfolio',
  description:
    'Web3 Product Lead, Strategy Researcher and Ecosystem Builder. Portfolio of selected work, research, and experience.',
  metadataBase: new URL('https://biblehs.github.io'),
  alternates: {
    canonical: '/page/',
  },
  openGraph: {
    title: 'Shaun Han | Web3 Product Portfolio',
    description:
      'Web3 Product Lead, Strategy Researcher and Ecosystem Builder. Portfolio of selected work, research, and experience.',
    url: 'https://biblehs.github.io/page/',
    siteName: 'Shaun Han Portfolio',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaun Han | Web3 Product Portfolio',
    description:
      'Web3 Product Lead, Strategy Researcher and Ecosystem Builder. Portfolio of selected work, research, and experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
