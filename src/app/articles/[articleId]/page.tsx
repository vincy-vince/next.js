"use client";

import Link from "next/link";
import { use } from "react";

export default function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<any>;
}) {
  const { articleId } = use(params);
  const { lang = "bless", a } = use(searchParams);
  return (
    <div>
      <h1>News Article {articleId}</h1>
      <p>
        Reading in {lang} {a}
      </p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}

// async and await for SSR (Server Side Rendering)
// use hook for CSR (client side rendering)
