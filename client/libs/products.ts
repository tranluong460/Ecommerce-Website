const statusCode = [404, 500];

export const getAllProducts = async () => {
  const response = await fetch(
    process.env.NEXT_ENV === "deployment"
      ? "http://localhost:8080/products"
      : "https://seines.vercel.app/products",
    { cache: "no-cache" }
  );

  const data = await response.json();

  return statusCode.includes(data.statusCode) ? null : data;
};

export const getOneProduct = async (id: string) => {
  const response = await fetch(
    process.env.NEXT_ENV === "deployment"
      ? `http://localhost:8080/products/${id}`
      : `https://seines.vercel.app/products/${id}`,
    { cache: "no-cache" }
  );

  const data = await response.json();

  return statusCode.includes(data.statusCode) ? null : data;
};
