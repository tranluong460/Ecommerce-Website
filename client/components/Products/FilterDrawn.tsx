type ModalSearchProps = {
  showModal: boolean;
  setShowModal: () => void;
};

const FilterDrawn = ({ showModal, setShowModal }: ModalSearchProps) => {
  return (
    <div className={`relative z-40 lg:hidden ${showModal ? "" : "hidden"}`}>
      <div className="fixed inset-0 bg-black/80 bg-opacity-25"></div>

      <div className="fixed inset-0 z-40 flex">
        <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-background py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-foreground">Lọc</h2>

            <button
              onClick={setShowModal}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-secondary p-2 text-mutedForeground hover:text-primary"
            >
              <span className="sr-only">Đóng</span>

              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 border-t dark:border-secondary">
            <div className="border-t dark:border-secondary px-4 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <button className="group flex w-full items-center justify-between bg-secondary px-2 py-3 text-mutedForeground hover:text-primary">
                  <span className="font-medium text-mutedForeground group-hover:text-primary">
                    Giới tính
                  </span>

                  <span className="ml-6 flex items-center">
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
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="filter-mobile-sex-0"
                      name="sex-boy"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-sex-0"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      Nam
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-sex-1"
                      name="sex-girl"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-sex-1"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-secondary px-4 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <button
                  className="group flex w-full items-center justify-between bg-secondary px-2 py-3 text-mutedForeground hover:text-primary"
                  aria-controls="filter-section-mobile-2"
                  aria-expanded="false"
                >
                  <span className="font-medium text-mutedForeground group-hover:text-primary">
                    Kích cỡ
                  </span>

                  <span className="ml-6 flex items-center">
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

              <div className="pt-6" id="filter-section-mobile-2">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      id="filter-mobile-size-0"
                      name="size-xs"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-size-0"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      XS
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-size-1"
                      name="size-s"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-size-1"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      S
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-size-2"
                      name="size-M"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-size-2"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      M
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-size-3"
                      name="size-L"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-size-3"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      L
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="filter-mobile-size-4"
                      name="size-XL"
                      type="checkbox"
                      className="h-4 w-4 rounded border dark:border-secondary text-mutedForeground focus:ring-ring"
                    />

                    <label
                      htmlFor="filter-mobile-size-4"
                      className="ml-3 min-w-0 flex-1 text-mutedForeground"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawn;
