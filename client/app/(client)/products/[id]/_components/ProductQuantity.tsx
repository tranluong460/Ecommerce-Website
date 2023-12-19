import { useToast } from "@/components/ui/use-toast";
import { ISizeProduct } from "@/interface/products";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type ProductQuantity = {
  quantitySelect: number;
  sizeList: ISizeProduct[];
  sizeSelect: string;
  setSelect: (value: string) => void;
};

const ProductQuantity = ({
  quantitySelect,
  sizeList,
  sizeSelect,
  setSelect,
}: ProductQuantity) => {
  const { toast } = useToast();
  const sizeFind = sizeList.find((item) => item.name === sizeSelect);

  const handleQuantityChange = (value: string) => {
    const isIncrease = value === "increase";
    const isDecrease = value === "decrease";

    if (
      (isIncrease && sizeFind && quantitySelect >= sizeFind.quantity) ||
      (isDecrease && quantitySelect === 1)
    ) {
      toast({
        variant: "destructive",
        description: "Số lượng đã đạt đến giới hạn",
      });
    } else if (isIncrease || isDecrease) {
      setSelect(value);
    }
  };

  return (
    <div className="mt-3 flex items-center">
      <button
        onClick={() => handleQuantityChange("decrease")}
        disabled={sizeSelect === ""}
        className="border dark:border-secondary p-1 focus:border-primary disabled:cursor-not-allowed"
      >
        <MinusIcon className="w-6 h-6" />
      </button>

      <input
        type="text"
        disabled={sizeSelect === ""}
        className="border-t border-b p-1 outline-none text-center w-16 bg-background disabled:cursor-not-allowed"
        value={sizeSelect ? quantitySelect : 0}
        readOnly
      />

      <button
        onClick={() => handleQuantityChange("increase")}
        disabled={sizeSelect === ""}
        className="border dark:border-secondary p-1 focus:border-primary disabled:cursor-not-allowed"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      <span className="text-muted-foreground text-xs font-medium ml-3">
        {sizeSelect
          ? `Còn ${sizeFind?.quantity} sản phẩm trong kho`
          : "Vui lòng chọn kích thước sản phẩm"}
      </span>
    </div>
  );
};

export default ProductQuantity;
