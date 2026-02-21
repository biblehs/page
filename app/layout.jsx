import './globals.css';

export const metadata = {
  title: 'Shaun Han | Web3 Product Portfolio',
  description:
    'Web3 Product Lead, Strategy Researcher and Ecosystem Builder. Portfolio of selected work, research, and experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
