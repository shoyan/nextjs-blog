import Layout from "../../components/layout";

export default function Post() {
  return <Layout>...</Layout>;
}

export async function getStaticPaths() {
  // id としてとりうる値のリストを返す
}

export async function getStaticProps({ params }) {
  // params.id を使用して、ブログの投稿に必要なデータを取得する
}
