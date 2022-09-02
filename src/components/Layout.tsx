import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';

type Props = PropsWithChildren<{
  title: string;
  description?: string;
  className?: string;
}>;

function Layout({ children, className, title, description }: Props) {
  const rootClassName = cn(className, 'bg-gray-100 min-h-[calc(100vh-96px)]');

  return (
    <>
      <Seo title={title} description={description} />
      <Header />
      <main className={rootClassName}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
