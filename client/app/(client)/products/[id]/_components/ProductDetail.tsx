import HeartButton from "./HeartButton";
import Rating from "./Rating";
import Breadcrumb from "./Breadcrumb";
import ImageGallery from "./ImageGallery";
import { IProduct, ISizeProduct } from "@/interface/products";
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
      {/* Breadcrumb */}
      <Breadcrumb _id={product?._id} name={product?.name} />
      {/* End Breadcrumb */}

      {/* Images */}
      <ImageGallery images={images} />
      {/* End Images */}

      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-secondary lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {product?.name}
          </h1>
        </div>

        {/* Product Right */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Thông tin sản phẩm</h2>
          <p className="text-3xl tracking-tight text-card-foreground">
            {priceFormatted(product?.price)}
          </p>

          <div className="mt-6">
            <h3 className="sr-only">Bình luận</h3>
            {/* Rating */}
            <Rating comments={product?.comments} />
            {/* End Rating */}
          </div>

          <div className="mt-10">
            <div>
              <h3 className="text-sm font-medium text-card-foreground">Màu</h3>

              <fieldset className="mt-4">
                <legend className="sr-only">Chọn màu</legend>

                {/* Color */}
                <div className="flex items-center space-x-3">
                  {colors?.map((color) => (
                    <label
                      key={color.name}
                      className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                    >
                      <span id="color-choice-0-label" className="sr-only">
                        {color.name}
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-8 w-8 rounded-full border dark:border-secondary"
                        style={{ backgroundColor: `#${color.name}` }}
                      />
                    </label>
                  ))}
                </div>
                {/* End Color */}
              </fieldset>
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

              <fieldset className="mt-4">
                <legend className="sr-only">Chọn kích cỡ</legend>
                {/* Size */}
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {product?.sizes.map((size: ISizeProduct) => (
                    <div
                      key={size.name}
                      className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase focus:outline-none sm:flex-1 sm:py-6 text-card-foreground ${
                        size.quantity !== 0
                          ? "dark:border-secondary hover:bg-primary hover:text-white shadow-sm cursor-pointer"
                          : "cursor-not-allowed"
                      }`}
                    >
                      <input
                        type="radio"
                        name="size-choice"
                        value="XS"
                        className="sr-only"
                        aria-labelledby="size-choice-1-label"
                      />
                      <span id="size-choice-1-label">{size.name}</span>

                      {size.quantity !== 0 ? (
                        <span
                          className="pointer-events-none absolute -inset-px rounded-md"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200 dark:border-gray-600"
                        >
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
                    </div>
                  ))}
                </div>
                {/* End Size */}
              </fieldset>
            </div>

            <div className="flex items-center mt-10 gap-3">
              <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-primary-foreground hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Thêm Vào giỏ hàng
              </button>

              <HeartButton />
            </div>
          </div>
        </div>
        {/* End Product Right */}

        {/* Product Left */}
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-secondary lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h3 className="sr-only">Mô tả</h3>

            <div className="space-y-6">
              <p className="text-base text-muted-foreground">
                {product?.short_description}
              </p>
            </div>
          </div>

          <div className="mt-10">
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

          <div className="mt-10">
            <h2 className="text-sm font-medium text-card-foreground">
              Mô tả chi tiết
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-muted-foreground">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
        {/* End Product Left */}
      </div>
    </div>
  );
};

export default ProductDetail;
