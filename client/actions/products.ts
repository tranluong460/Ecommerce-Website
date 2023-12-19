"use server";

export const getAllProducts = async () => {
  const response = await fetch("http://localhost:8080/products", {
    cache: "force-cache",
  });

  return response.json();
};

export const getOneProduct = async (id: string) => {
  const response = await fetch(`http://localhost:8080/products/${id}`, {
    cache: "force-cache",
  });

  return response.json();
};
