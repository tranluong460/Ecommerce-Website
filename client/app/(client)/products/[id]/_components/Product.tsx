"use client";

import { useState } from "react";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  StarFilledIcon,
  MinusIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { ICommentProduct, IProduct } from "@/interface/products";
import { priceFormatted } from "@/libs/formatted";
import { calculateAverageRating } from "@/libs/calculate";

type DetailProps = {
  product: IProduct;
};

const Product = ({ product }: DetailProps) => {
  const { toast } = useToast();
  const [select, setSelect] = useState({
    color: "",
    size: "",
    image: "",
    quantity: 1,
  });

  const colorList = product?.attributes.map((item) => ({
    name: item.color,
  }));

  const attributes = product?.attributes.find(
    (item) =>
      item.color ===
      (select.color ? select.color : product?.attributes[0].color)
  );

  const sizeFind = attributes?.sizes.find((item) => item.name === select.size);

  const renderStars = (comments: ICommentProduct[]) => {
    const averageRating = calculateAverageRating(comments);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFilledIcon
          key={i}
          className={`w-5 h-5 ${
            averageRating && averageRating >= i
              ? "text-yellow-400"
              : "text-gray-500"
          }`}
        />
      );
    }
    return stars;
  };

  const handleQuantityChange = (value: string) => {
    const isIncrease = value === "increase";
    const isDecrease = value === "decrease";

    if (
      (isIncrease && sizeFind && select.quantity >= sizeFind.quantity) ||
      (isDecrease && select.quantity === 1)
    ) {
      toast({
        variant: "destructive",
        description: "Số lượng đã đạt đến giới hạn",
      });
    } else if (isIncrease || isDecrease) {
      setSelect((prev) => ({
        ...prev,
        ...(value === "increase" && {
          quantity: prev.quantity + 1,
        }),
        ...(value === "decrease" && {
          quantity: prev.quantity - 1,
        }),
      }));
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Image Gallery */}
        {attributes && (
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {attributes?.color_images.map((image) => (
                  <button
                    key={image.url}
                    onClick={() =>
                      setSelect((prev) => ({ ...prev, image: image.url }))
                    }
                    className="relative flex h-24 items-center justify-center rounded-md bg-background text-sm font-medium uppercase text-foreground hover:bg-background/80 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        width={1000}
                        height={1000}
                        src={image.url}
                        alt={image.url}
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full">
              <Image
                width={1000}
                height={1000}
                src={select.image || attributes?.color_images[0].url}
                alt={select.image || attributes?.color_images[0].url}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>
        )}
        {/* End Image Gallery */}

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {product?.name}
          </h1>

          <div className="mt-3 text-3xl tracking-tight text-muted-foreground">
            {priceFormatted(product?.price)}
          </div>

          <div className="mt-3 flex items-center">
            {/* Rating */}
            {product?.id_comments && (
              <div className="flex items-center">
                <div className="flex items-center">
                  {/* <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" /> */}
                  {renderStars(product.id_comments)}
                </div>

                <span className="ml-3 text-sm font-medium text-primary hover:text-primary/80">
                  {product.id_comments.length} bình luận
                </span>
              </div>
            )}
            {/* End Rating */}
          </div>

          <div className="mt-6 space-y-6 text-base text-muted-foreground">
            {product?.short_description}
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-medium text-foreground">
              Điểm nổi bật
            </h3>

            <div className="mt-4">
              <ul className="list-disc space-y-2 pl-4 text-sm">
                {product?.highlights.map((highlight) => (
                  <li key={highlight.name}>
                    <span className="text-muted-foreground">
                      {highlight.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="mt-10">
              <h3 className="text-sm font-medium text-card-foreground">
                Chọn màu
              </h3>

              <div className="mt-2">
                {/* Color */}
                {colorList && (
                  <div className="flex items-center space-x-3">
                    {colorList.map((color) => (
                      <button
                        key={color.name}
                        onClick={() =>
                          setSelect((prev) => ({
                            ...prev,
                            color: color.name,
                            size: "",
                            image: "",
                            quantity: 1,
                          }))
                        }
                        className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none ${
                          select.color
                            ? color.name === select.color
                              ? "ring ring-primary"
                              : ""
                            : color.name === product?.attributes[0].color
                            ? "ring ring-primary"
                            : ""
                        }`}
                      >
                        <span
                          className="h-8 w-8 rounded-full border dark:border-secondary"
                          style={{ backgroundColor: `#${color.name}` }}
                        />
                      </button>
                    ))}
                  </div>
                )}
                {/* End Color */}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-card-foreground">
                Số lượng
              </h3>

              {/* Size */}
              {attributes && (
                <div className="mt-3 flex items-center">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    disabled={select.size === ""}
                    className="border dark:border-secondary p-1 focus:border-primary disabled:cursor-not-allowed"
                  >
                    <MinusIcon className="w-6 h-6" />
                  </button>

                  <input
                    type="text"
                    disabled={select.size === ""}
                    className="border-t border-b p-1 outline-none text-center w-16 bg-background disabled:cursor-not-allowed"
                    value={select.size ? select.quantity : 0}
                    readOnly
                  />

                  <button
                    onClick={() => handleQuantityChange("increase")}
                    disabled={select.size === ""}
                    className="border dark:border-secondary p-1 focus:border-primary disabled:cursor-not-allowed"
                  >
                    <PlusIcon className="w-6 h-6" />
                  </button>

                  <span className="text-muted-foreground text-xs font-medium ml-3">
                    {select.size
                      ? `Còn ${sizeFind?.quantity} sản phẩm trong kho`
                      : "Vui lòng chọn kích thước sản phẩm"}
                  </span>
                </div>
              )}
              {/* End Size */}
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-card-foreground">
                  Kích thước
                </h3>

                <span className="text-sm font-medium text-primary hover:text-primary/90 hover:underline cursor-default">
                  Hướng dẫn chọn kích thước
                </span>
              </div>

              {/* Size */}
              {attributes && (
                <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {attributes.sizes.map((size) => (
                    <button
                      key={size.name}
                      disabled={size.quantity === 0}
                      onClick={() =>
                        setSelect((prev) => ({
                          ...prev,
                          size: size.name,
                          quantity: 1,
                        }))
                      }
                      className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 text-card-foreground ${
                        size.quantity !== 0
                          ? "dark:border-secondary hover:bg-primary hover:text-white shadow-sm"
                          : "cursor-not-allowed"
                      } ${
                        size.name === select.size ? "ring ring-primary" : ""
                      }`}
                    >
                      <span>{size.name}</span>

                      {size.quantity !== 0 ? (
                        <span className="pointer-events-none absolute -inset-px rounded-md" />
                      ) : (
                        <span className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200 dark:border-gray-600">
                          <svg
                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200 dark:text-gray-600"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            stroke="currentColor"
                          >
                            <line
                              x1="0"
                              y1="100"
                              x2="100"
                              y2="0"
                              vectorEffect="non-scaling-stroke"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
              {/* End Size */}
            </div>

            <div className="mt-10 flex items-center gap-2">
              <Button size="lg" className="w-full">
                Thêm vào giỏ hàng
              </Button>

              {/* Heart Button */}
              <div className="border rounded-full p-2.5">
                <HeartIcon className="text-foreground dark:text-muted-foreground w-5 h-5" />
              </div>
              {/* End Heart Button */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
