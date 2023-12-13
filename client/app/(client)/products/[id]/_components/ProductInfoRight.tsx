import Color from "./Color";
import Favorite from "./Favorite";
import Rate from "./Rate";
import Size from "./Size";

const ProductInfoRight = () => {
  return (
    <div className="mt-4 lg:row-span-3 lg:mt-0">
      <h2 className="sr-only">Thông tin sản phẩm</h2>
      <p className="text-3xl tracking-tight text-cardForeground">$192</p>

      <div className="mt-6">
        <h3 className="sr-only">Bình luận</h3>
        <Rate />
      </div>

      <form className="mt-10">
        <div>
          <h3 className="text-sm font-medium text-cardForeground">Màu</h3>

          <fieldset className="mt-4">
            <legend className="sr-only">Chọn màu</legend>
            <Color />
          </fieldset>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-cardForeground">
              Kích thước
            </h3>
            <span className="text-sm font-medium text-primary hover:text-primary/80">
              Hướng dẫn chọn kích thước
            </span>
          </div>

          <fieldset className="mt-4">
            <legend className="sr-only">Chọn kích cỡ</legend>
            <Size />
          </fieldset>
        </div>

        <div className="flex items-center mt-10 gap-3">
          <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-primaryForeground hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            Thêm Vào giỏ hàng
          </button>

          <Favorite />
        </div>
      </form>
    </div>
  );
};

export default ProductInfoRight;
