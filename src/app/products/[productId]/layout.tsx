function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("error loading review");
  }
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
}
