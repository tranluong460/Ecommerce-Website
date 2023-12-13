type ButtonProps = {
  label: string;
  icon?: React.ReactNode;
};

const Button = ({ label, icon }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${
        icon
          ? "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accentForeground h-9 px-4 py-2"
          : "bg-primary text-primaryForeground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
