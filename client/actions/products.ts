"use server";

export const getAllProducts = async () => {
  const res = await fetch("http://localhost:8080/products", {
    cache: "force-cache",
  });

  return res.json();
};
