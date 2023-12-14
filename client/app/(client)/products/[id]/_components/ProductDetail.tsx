import Size from "./Size";
import Rating from "./Rating";
import Breadcrumb from "./Breadcrumb";
import HeartButton from "./HeartButton";
import ImageGallery from "./ImageGallery";
import { Button } from "@/components/ui/button";
import { IProduct } from "@/interface/products";
import { priceFormatted } from "@/libs/formatted";

type ProductDetailProps = {
  product: IProduct | undefined;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  const colors = product?.images_attributes.map((item) => ({
    name: item.color,
  }));

  const images = product?.images_attributes.find(
    (item) => item.color === product?.images_attributes[0].color
  );

  return (
    <div className="pt-6">
      <Breadcrumb _id={product?._id} name={product?.name} />

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ImageGallery images={images} />

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
                    <li className="text-card-foreground" key={highlight.name}>
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
                  <div className="flex items-center space-x-3">
                    {colors?.map((color) => (
                      <label
                        key={color.name}
                        className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                      >
                        <span className="sr-only">{color.name}</span>

                        <span
                          className="h-8 w-8 rounded-full border dark:border-secondary"
                          style={{ backgroundColor: `#${color.name}` }}
                        />
                      </label>
                    ))}
                  </div>
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
                <Size sizes={product?.sizes} />
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
    </div>
  );
};

export default ProductDetail;
