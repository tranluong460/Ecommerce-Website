const Filter = () => {
  return (
    <div className="hidden lg:block">
      <div className="border-b dark:border-secondary py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="group flex w-full items-center justify-between bg-secondary py-3 text-sm text-mutedForeground hover:text-primary"
            aria-controls="filter-section-0"
            aria-expanded="false"
          >
            <span className="ml-2 font-medium text-mutedForeground group-hover:text-primary">
              Giới tính
            </span>

            <span className="mr-2 flex items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>

              {/* <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clipRule="evenodd"
                />
              </svg> */}
            </span>
          </button>
        </h3>

        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-sex-0"
                name="sex-boy"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-sex-0"
                className="ml-3 text-sm text-mutedForeground"
              >
                Nam
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="filter-sex-1"
                name="sex-girl"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-sex-1"
                className="ml-3 text-sm text-mutedForeground"
              >
                Nữ
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b dark:border-secondary py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="group flex w-full items-center justify-between bg-secondary py-3 text-sm text-mutedForeground hover:text-primary"
            aria-controls="filter-section-0"
            aria-expanded="false"
          >
            <span className="ml-2 font-medium text-mutedForeground group-hover:text-primary">
              Kích cỡ
            </span>

            <span className="mr-2 flex items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </span>
          </button>
        </h3>

        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-size-0"
                name="size-xs"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-size-0"
                className="ml-3 text-sm text-mutedForeground"
              >
                XS
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="filter-size-1"
                name="size-s"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-size-1"
                className="ml-3 text-sm text-mutedForeground"
              >
                S
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="filter-size-2"
                name="size-m"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-size-2"
                className="ml-3 text-sm text-mutedForeground"
              >
                M
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="filter-size-3"
                name="size-l"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-size-3"
                className="ml-3 text-sm text-mutedForeground"
              >
                L
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="filter-size-4"
                name="size-xl"
                type="checkbox"
                className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
              />

              <label
                htmlFor="filter-size-4"
                className="ml-3 text-sm text-mutedForeground"
              >
                XL
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
