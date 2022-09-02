import Link from 'next/link';

import Container from './Container';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="h-12">
      <Container className="flex h-full items-center justify-center space-x-4">
        <p>Copyright &copy; DJ Events {year}</p>
        <Link
          href="/about"
          className="text-blue-500 hover:text-blue-400 hover:underline"
        >
          About This Project
        </Link>
      </Container>
    </footer>
  );
}

export default Footer;
