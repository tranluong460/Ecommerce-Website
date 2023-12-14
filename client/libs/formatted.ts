export const priceFormatted = (price: number | undefined) => {
  return price?.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};
