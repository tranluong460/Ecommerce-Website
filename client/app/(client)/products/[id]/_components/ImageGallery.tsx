import Image from "next/image";
import { IImageProduct } from "@/interface/products";

type ImageGalleryProps = {
  images: IImageProduct | undefined;
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      {images?.color_images[0]?.url && (
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <Image
            width={1000}
            height={100}
            src={images?.color_images[0]?.url}
            alt={images?.color_images[0]?.url}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}

      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        {images?.color_images[1]?.url && (
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              width={1000}
              height={100}
              src={images?.color_images[1]?.url}
              alt={images?.color_images[1]?.url}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {images?.color_images[2]?.url && (
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <Image
              width={1000}
              height={100}
              src={images?.color_images[2]?.url}
              alt={images?.color_images[2]?.url}
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}
      </div>

      {images?.color_images[3]?.url && (
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <Image
            width={1000}
            height={100}
            src={images?.color_images[3]?.url}
            alt={images?.color_images[3]?.url}
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
