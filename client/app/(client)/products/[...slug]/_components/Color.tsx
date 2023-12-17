type ColorProps = {
  colorList: { name: string }[];
  colorDefault: string | undefined;
  colorSelect: string;
  setSelect: (value: string) => void;
};

const Color = ({
  colorDefault,
  colorList,
  colorSelect,
  setSelect,
}: ColorProps) => {
  return (
    <div className="flex items-center space-x-3">
      {colorList.map((color) => (
        <button
          key={color.name}
          onClick={() => setSelect(color.name)}
          className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none ${
            colorSelect
              ? color.name === colorSelect
                ? "ring ring-primary"
                : ""
              : color.name === colorDefault
              ? "ring ring-primary"
              : ""
          }`}
        >
          <span
            className="h-8 w-8 rounded-full border dark:border-secondary"
            style={{ backgroundColor: `#${color.name}` }}
          />
        </button>
      ))}
    </div>
  );
};

export default Color;
