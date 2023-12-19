"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductRating from "./ProductRating";
import ProductHeartButton from "./ProductHeartButton";
import ProductImageGallery from "./ProductImageGallery";
import { IProduct } from "@/interface/products";
import { priceFormatted } from "@/libs/formatted";
import ProductQuantity from "./ProductQuantity";

type ProductDetailProps = {
  product: IProduct | undefined;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
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

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {attributes && (
          <ProductImageGallery
            imageList={attributes?.color_images}
            imageSelect={select.image}
            setSelect={(value: string) =>
              setSelect((prev) => ({ ...prev, image: value }))
            }
          />
        )}

        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {product?.name}
          </h1>

          <div className="mt-3 text-3xl tracking-tight text-muted-foreground">
            {priceFormatted(product?.price)}
          </div>

          <div className="mt-3 flex items-center">
            {product?.id_comments && (
              <ProductRating comments={product.id_comments} />
            )}
          </div>

          <div className="mt-6 space-y-6 text-base text-muted-foreground">
            {product?.short_description}
          </div>

          <div className="mt-5">
            <h3 className="text-sm font-medium text-foreground">
              Điểm nổi bật
            </h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
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
                {colorList && (
                  <ProductColor
                    colorList={colorList}
                    colorDefault={product?.attributes[0].color}
                    colorSelect={select.color}
                    setSelect={(value: string) =>
                      setSelect((prev) => ({
                        ...prev,
                        color: value,
                        size: "",
                        image: "",
                        quantity: 1,
                      }))
                    }
                  />
                )}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-card-foreground">
                Số lượng
              </h3>

              {attributes && (
                <ProductQuantity
                  quantitySelect={select.quantity}
                  sizeList={attributes.sizes}
                  sizeSelect={select.size}
                  setSelect={(value: string) =>
                    setSelect((prev) => ({
                      ...prev,
                      ...(value === "increase" && {
                        quantity: prev.quantity + 1,
                      }),
                      ...(value === "decrease" && {
                        quantity: prev.quantity - 1,
                      }),
                    }))
                  }
                />
              )}
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

              {attributes && (
                <ProductSize
                  sizeList={attributes.sizes}
                  sizeSelect={select.size}
                  setSelect={(value: string) =>
                    setSelect((prev) => ({ ...prev, size: value, quantity: 1 }))
                  }
                />
              )}
            </div>

            <div className="mt-10 flex items-center gap-2">
              <Button size="lg" className="w-full">
                Thêm vào giỏ hàng
              </Button>

              <ProductHeartButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
