export const getUserByClerkId = async (id: string) => {
  const response = await fetch(
    process.env.NEXT_ENV === "deployment"
      ? `http://localhost:8080/users/${id}`
      : `https://seines.vercel.app/users/${id}`,
    { cache: "no-cache" }
  );

  return response.json();
};
