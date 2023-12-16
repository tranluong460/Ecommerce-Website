import Image from "next/image";
import { IImageProduct } from "@/interface/products";

type ImageGalleryProps = {
  images: IImageProduct[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <div
              key={image.url}
              className="relative flex h-24 cursor-default items-center justify-center rounded-md bg-background text-sm font-medium uppercase text-foreground hover:bg-background/80 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                  width={1000}
                  height={100}
                  src={image.url}
                  alt={image.url}
                  className="h-full w-full object-cover object-center"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="aspect-h-1 aspect-w-1 w-full">
        <Image
          width={1000}
          height={100}
          src={images[0].url || ""}
          alt={images[0].url || ""}
          className="h-full w-full object-cover object-center sm:rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
