import Link from "next/Link"
import Head from "next/head"
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a href="http://example.com">Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
