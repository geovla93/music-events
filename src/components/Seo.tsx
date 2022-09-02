import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
}

function Seo({ title, description }: Props) {
  const siteTitle = `${title} | Music Events`;
  const siteDescription =
    description ?? 'Find the best and latest music events.';

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="dj, music, event" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
    </Head>
  );
}

export default Seo;
