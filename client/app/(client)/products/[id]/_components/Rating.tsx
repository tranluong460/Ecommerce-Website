import { StarFilledIcon } from "@radix-ui/react-icons";
import { ICommentProduct } from "@/interface/products";

type RatingProps = {
  comments: ICommentProduct[] | undefined;
};

const Rating = ({ comments }: RatingProps) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <div className="text-center">
          <span className="flex flex-row-reverse">
            <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" />
            <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" />
            <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" />
            <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" />
            <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" />
          </span>
        </div>
      </div>

      <p className="sr-only">Đánh giá</p>

      <span className="ml-3 text-sm font-medium text-primary hover:text-primary/80">
        {comments && comments.length} bình luận
      </span>
    </div>
  );
};

export default Rating;
