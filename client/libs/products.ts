export const getAllProducts = async () => {
  const response = await fetch("https://seines.vercel.app/products", {
    cache: "force-cache",
  });

  return response.json();
};

export const getOneProduct = async (id: string) => {
  const response = await fetch(`https://seines.vercel.app/products/${id}`);
  return response.json();
};
