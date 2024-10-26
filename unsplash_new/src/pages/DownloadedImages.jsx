//components
import { ImagesContainer } from "../components";
//useContext hook
import { useGlobalContext } from "../hooks/useGlobalContext";

//rrd
import { Link } from "react-router-dom";

function DownloadedImages() {
  const { downloadedImages } = useGlobalContext();

  if (downloadedImages.length == 0) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center flex-col gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-600 text-center    flex items-center justify-center">
          You don't have any downloaded images :(
        </h1>
        <Link to="/">
          <button className="btn bg-pink-600">Go Home</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="min-h-[90vh] my-10 custom-container">
      {downloadedImages.length > 0 && (
        <ImagesContainer images={downloadedImages} />
      )}
    </div>
  );
}

export default DownloadedImages;
