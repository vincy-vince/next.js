import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<any>;
}) {
  const { articleId } = await params;
  const { lang = "bless", a } = await searchParams;
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>Reading in {lang} {a}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
