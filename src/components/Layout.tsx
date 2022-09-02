import type { PropsWithChildren } from 'react';
import cn from 'classnames';

import Seo from './Seo';
import Header from './Header';
import Footer from './Footer';

interface Props {
  title: string;
  description?: string;
  className?: string;
}

function Layout({
  children,
  className,
  title,
  description,
}: PropsWithChildren<Props>) {
  const rootClassName = cn(className, 'min-h-[calc(100vh-96px)]');

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
