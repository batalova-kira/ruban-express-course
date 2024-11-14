import { Params } from '@/app/typings';

async function ArticlePage({ params }: Params) {
  const { articleName } = await params;
  return <>This is article: {articleName}</>;
}

export default ArticlePage;
