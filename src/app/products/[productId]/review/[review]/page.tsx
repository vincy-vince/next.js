import { notFound } from "next/navigation";
import NotFound from "./not-found";

export default async function Review({
  params,
}: {
  params: Promise<{ productId: string; review: string }>;
}) {
  const { productId, review } = await params;
  if (parseInt(review) > 1000) {
    notFound();
  }
  return (
    <h1>
      {" "}
      Product review {review} for product {productId}
    </h1>
  );
}
