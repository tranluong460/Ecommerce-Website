import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
                <svg
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
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

        <button
          type="button"
          className="-m-2 ml-5 p-2 text-muted-foreground hover:text-primary sm:ml-7"
        >
          <span className="sr-only">Xem lưới</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div>
          <FilterDrawn />
        </div>
      </div>
    </div>
  );
};

export default Top;
