export const getAllProducts = async () => {
  const response = await fetch(
    process.env.NEXT_ENV === "deployment"
      ? "http://localhost:8080/products"
      : "https://seines.vercel.app/products",
    { cache: "no-cache" }
  );

  return response.json();
};

export const getOneProduct = async (id: string) => {
  const response = await fetch(
    process.env.NEXT_ENV === "deployment"
      ? `http://localhost:8080/products/${id}`
      : `https://seines.vercel.app/products/${id}`,
    { cache: "no-cache" }
  );

  return response.json();
};
