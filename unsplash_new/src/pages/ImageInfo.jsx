//useGlobal context
import { useGlobalContext } from "../hooks/useGlobalContext";
//rrd
import { Link } from "react-router-dom";
function ImageInfo() {
  const { imageInfo } = useGlobalContext();
  console.log(imageInfo);
  return (
    <div className="imageInfo custom-container min-h-[60vh]">
      <div className="info-container flex flex-col lg:flex-row    w-full h-auto sm:w-[70vw]  bg-white rounded-lg  mx-auto mt-5 md:mt-10">
        <div className="image-info w-[100%] lg:w-[60%] xl:w-[70%]   rounded-t-lg lg:rounded-none lg:rounded-s-lg overflow-hidden">
          <img src={imageInfo.urls.full} alt={imageInfo.image_description} />
        </div>
        <div className="overflow-hidden w-[100%] text-black lg:w-[40%] xl:w-[30%]  text-center lg:text-start  rounded-b-lg lg:rounded-none lg:rounded-e-lg px-10 py-4 ">
          <h1 className="title font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Image Info
          </h1>
          <p className="text-md font-semibold ">
            <i className="text-lg underline">Image name: </i>
            {imageInfo.description ?? imageInfo.alt_description}
          </p>
          <p className="text-md font-semibold">
            <i className="text-lg underline">Likes: </i>
            {imageInfo.likes}
          </p>

          {imageInfo.user.location && (
            <p className="text-md font-semibold">
              <i className="text-lg underline">Location: </i>
              {imageInfo.user.location}
            </p>
          )}
          <p className="text-md font-semibold">
            <i className="text-lg underline">Date: </i>
            {imageInfo.created_at}
          </p>
          <p className="text-md font-semibold">
            <i className="text-lg underline">Photographer name: </i>{" "}
            {imageInfo.user.first_name + " " + imageInfo.user.last_name}
          </p>
          <p className="text-md font-semibold">
            <i className="text-lg underline">User name: </i>
            {imageInfo.user.username}
          </p>
          <p className="text-md font-semibold">
            <i className="text-lg underline">Total collections: </i>
            {imageInfo.user.total_collections}
          </p>
          <Link
            to="/?index"
            className="btn btn-primary btn-sm md:btn-md mt-10 btn-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageInfo;
