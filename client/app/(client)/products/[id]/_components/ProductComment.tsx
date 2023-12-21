// import { ICommentProduct } from "@/interface/products";
// import Image from "next/image";

// type ProductCommentProps = {
//   comments: ICommentProduct[];
// };

// const ProductComment = ({ comments }: ProductCommentProps) => {
//   return (
//     <div className="-mb-10">
//       <h3 className="sr-only">Customer Reviews</h3>

//       {comments.map((cmt,index) => (
//         <div key={index} className="flex space-x-4 text-sm text-gray-500">
//           <div className="flex-none py-10">
//             <Image
//               src={review.}
//               alt=""
//               width={100}
//               height={100}
//               className="h-10 w-10 rounded-full bg-gray-100"
//             />
//           </div>
//           <div
//             className={classNames(
//               reviewIdx === 0 ? "" : "border-t border-gray-200",
//               "py-10"
//             )}
//           >
//             <h3 className="font-medium text-gray-900">{review.author}</h3>
//             <p>
//               <time dateTime={review.datetime}>{review.date}</time>
//             </p>

//             <div className="mt-4 flex items-center">
//               {[0, 1, 2, 3, 4].map(
//                 (rating) =>
//                   // <StarIcon
//                   //   key={rating}
//                   //   className={classNames(
//                   //     review.rating > rating
//                   //       ? "text-yellow-400"
//                   //       : "text-gray-300",
//                   //     "h-5 w-5 flex-shrink-0"
//                   //   )}
//                   //   aria-hidden="true"
//                   // />
//                   1
//               )}
//             </div>
//             <p className="sr-only">{review.rating} out of 5 stars</p>

//             <div
//               className="prose prose-sm mt-4 max-w-none text-gray-500"
//               dangerouslySetInnerHTML={{ __html: review.content }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductComment;
