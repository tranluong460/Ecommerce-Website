import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DashboardIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import FilterDrawn from "./FilterDrawn";

const Top = () => {
  return (
    <div className="flex items-baseline justify-between border-b dark:border-secondary pb-6 pt-4">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        Danh sách sản phẩm
      </h1>

      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="group inline-flex justify-center text-sm font-medium text-muted-foreground hover:text-primary cursor-default">
                Sắp xếp
                <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                <DropdownMenuItem>Giá từ thấp đến cao</DropdownMenuItem>
                <DropdownMenuItem>Giá từ cao đến thấp</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <button className="-m-2 ml-5 p-2 text-muted-foreground hover:text-primary sm:ml-7">
          <span className="sr-only">Xem lưới</span>
          <DashboardIcon className="h-5 w-5" />
        </button>

        <FilterDrawn />
      </div>
    </div>
  );
};

export default Top;
