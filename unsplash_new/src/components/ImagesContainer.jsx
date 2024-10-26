import Image from "./Image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// context hooks
import { useGlobalContext } from "../hooks/useGlobalContext";
function ImagesContainer({ images }) {
  const { likedImages } = useGlobalContext();
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry gutter="10px">
        {images &&
          images.map((image) => {
            return (
              <div key={image.alt_description}>
                <Image
                  image={image}
                  added={likedImages.some((img) => img.id == image.id)}
                />
              </div>
            );
          })}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImagesContainer;
