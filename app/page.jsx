import PortfolioPage from '../src/components/PortfolioPage';

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shaun Han',
    jobTitle: 'Web3 Product Lead',
    description:
      'Web3 Product Lead, Strategy Researcher and Ecosystem Builder. Helping teams design better products and build stronger growth systems.',
    url: 'https://biblehs.github.io/page/',
    sameAs: ['https://x.com/shaunh666', 'https://github.com/biblehs'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PortfolioPage />
    </>
  );
}
