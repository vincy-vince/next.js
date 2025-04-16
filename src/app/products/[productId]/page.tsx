export default async function ProductList({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about Product {productId}</h1>;
}
