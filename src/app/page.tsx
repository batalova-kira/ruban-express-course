import { getAllArticles } from './(server)/api';

export default async function Home() {
  const articles = await getAllArticles();
console.log('HELLO');

  return (
    <>
    <h2>Ruban blog</h2>
    <ul>
      {articles.map((item) => (<li key={item.name}>
          {item.header}
          </li>)
      )}
    </ul>
    </>
  );
}
