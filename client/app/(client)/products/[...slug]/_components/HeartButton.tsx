import { HeartIcon } from "@radix-ui/react-icons";

const HeartButton = () => {
  return (
    <div className="border rounded-full p-2.5">
      <HeartIcon className="text-foreground dark:text-muted-foreground w-5 h-5" />
    </div>
  );
};

export default HeartButton;
