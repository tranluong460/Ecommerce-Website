import { StarFilledIcon } from "@radix-ui/react-icons";
import { ICommentProduct } from "@/interface/products";
import { calculateAverageRating } from "@/libs/calculate";

type RatingProps = {
  comments: ICommentProduct[];
};

const ProductRating = ({ comments }: RatingProps) => {
  const renderStars = () => {
    const averageRating = calculateAverageRating(comments);
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <StarFilledIcon
          key={i}
          className={`w-5 h-5 ${
            averageRating && averageRating >= i
              ? "text-yellow-400"
              : "text-gray-500"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {/* <StarFilledIcon className="text-gray-500 cursor-pointer peer peer-hover:text-yellow-400 hover:text-yellow-400 duration-100 w-6 h-6" /> */}
        {renderStars()}
      </div>

      <span className="ml-3 text-sm font-medium text-primary hover:text-primary/80">
        {comments.length} bình luận
      </span>
    </div>
  );
};

export default ProductRating;
