import { Button } from "@/components/ui/button";
import { priceFormatted } from "@/libs/formatted";
import { calculateCartTotalPrice } from "@/libs/calculate";
import { ICart } from "@/interface/carts";

type SummaryCartProps = {
  carts: ICart;
};

const SummaryCart = ({ carts }: SummaryCartProps) => {
  return (
    <div className="mt-16 rounded-lg bg-secondary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-foreground">Tóm tắt</h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Tổng phụ</div>
          <div className="text-sm font-medium text-muted-foreground">
            {calculateCartTotalPrice(carts)}
          </div>
        </div>

        <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Phí vận chuyển</span>
          </div>

          <div className="text-sm font-medium text-muted-foreground">
            {priceFormatted(0)}
          </div>
        </div>

        <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
          <div className="flex text-sm text-muted-foreground">
            <span>Thuế</span>
          </div>

          <div className="text-sm font-medium text-muted-foreground">
            {priceFormatted(0)}
          </div>
        </div>

        <div className="flex items-center justify-between border-t dark:border-muted-foreground pt-4">
          <div className="text-base font-medium text-muted-foreground">
            Tổng
          </div>

          <div className="text-base font-medium text-muted-foreground">
            {calculateCartTotalPrice(carts)}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button className="w-full" size="lg">
          Thanh toán
        </Button>
      </div>
    </div>
  );
};

export default SummaryCart;
