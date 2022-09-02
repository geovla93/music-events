import Container from '@/components/Container';
import Layout from '@/components/Layout';

function AboutPage() {
  return (
    <Layout title="About">
      <Container className="pt-16">
        <h1>About</h1>
        <p>This is an app to find the latest DJ and other musical events</p>
        <p>
          Version: <strong>1.0.0</strong>
        </p>
      </Container>
    </Layout>
  );
}
export default AboutPage;
