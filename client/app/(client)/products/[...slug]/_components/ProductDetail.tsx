import { Button } from "@/components/ui/button";
import Size from "./Size";
import Rating from "./Rating";
import Breadcrumb from "./Breadcrumb";
import HeartButton from "./HeartButton";
import ImageGallery from "./ImageGallery";
import ListProducts from "../../_components/ListProducts";
import { IProduct } from "@/interface/products";
import { priceFormatted } from "@/libs/formatted";
import { products } from "@/data/products";
import Color from "./Color";

type ProductDetailProps = {
  product: IProduct | undefined;
  colorParam: string;
};

const ProductDetail = ({ product, colorParam }: ProductDetailProps) => {
  const colorList = product?.attributes.map((item) => ({
    name: item.color,
  }));

  const color_attributes = product?.attributes.find(
    (item) =>
      item.color === (colorParam ? colorParam : product?.attributes[0].color)
  );

  return (
    <div className="py-6">
      <Breadcrumb _id={product?._id} name={product?.name} />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {color_attributes && (
            <ImageGallery images={color_attributes?.color_images} />
          )}

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {product?.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-muted-foreground">
                {priceFormatted(product?.price)}
              </p>
            </div>

            <div className="mt-3">
              <h3 className="sr-only">Bình luận</h3>
              <div className="flex items-center">
                <Rating comments={product?.comments} />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Mô tả ngắn</h3>

              <p className="space-y-6 text-base text-muted-foreground">
                {product?.short_description}
              </p>
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
              <div>
                <h3 className="text-sm text-foreground">Màu</h3>

                <div className="mt-2">
                  <div className="sr-only">Chọn màu</div>

                  <Color
                    idProduct={product?._id}
                    colorList={colorList}
                    colorDefault={product?.attributes[0].color}
                    colorParam={colorParam}
                  />
                </div>
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
                <Size sizes={color_attributes?.sizes} />
              </div>

              <div className="mt-10 flex items-center gap-2">
                <Button size="lg" className="w-full">
                  Thêm vào giỏ hàng
                </Button>

                <HeartButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Sản phẩm cùng loại
        </h1>

        <ListProducts products={products} />
      </div>
    </div>
  );
};

export default ProductDetail;
