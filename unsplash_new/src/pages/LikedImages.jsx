//components
import { ImagesContainer } from "../components";
//context
import { useGlobalContext } from "../hooks/useGlobalContext";

//rrd
import { Link } from "react-router-dom";
function LikedImages() {
  const { likedImages } = useGlobalContext();

  if (likedImages.length == 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center flex-col gap-8 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-600 text-center    flex items-center justify-center">
          You don't have any liked images :(
        </h1>
        <Link to="/">
          <button className="btn bg-pink-600">Go Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-[90vh] custom-container my-10">
      {likedImages.length > 0 && <ImagesContainer images={likedImages} />}
    </div>
  );
}

export default LikedImages;
