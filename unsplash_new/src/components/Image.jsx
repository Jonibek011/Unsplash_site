//react-icons
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

//context
import { useGlobalContext } from "../hooks/useGlobalContext";
//Next ui
import { Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

import { useDatabase } from "../hooks/useDatabase";
//==============================================================
function Image({ image, added }) {
  const { likedImages, user: authUser, dispatch } = useGlobalContext();
  const { addDocument } = useDatabase();

  const { urls, links, alt_description, user } = image;

  const downloadImage = (e) => {
    e.preventDefault();
    window.open(links.download + "&force=true", "_blank");
  };

  const addLike = (image, event) => {
    event.preventDefault();
    const alreadyAdded = likedImages.some((img) => {
      return img.id == image.id;
    });

    if (!alreadyAdded) {
      dispatch({ type: "LIKE", payload: image });
      addDocument("likedImages", { ...image, uid: authUser.uid });
    } else {
      dispatch({ type: "DISLIKE", payload: image.id });
    }
  };

  const addDownload = (image) => {
    dispatch({ type: "DOWNLOAD", payload: image });
  };

  const getImageInfo = (image) => {
    dispatch({ type: "INFO", payload: image });
  };

  return (
    <Link to="/imageInfo" onClick={() => getImageInfo(image)}>
      <div className="relative group ">
        {!added && (
          <span
            onClick={(event) => addLike(image, event)}
            className="icon-hover cursor-pointer like absolute inline-flex justify-center items-center w-8 h-8 rounded-md bg-white top-2 right-2 text-slate-900"
          >
            <FaRegHeart />
          </span>
        )}
        {added && (
          <span
            onClick={(event) => addLike(image, event)}
            className="icon-hover cursor-pointer like text-red-700 absolute inline-flex justify-center items-center w-8 h-8 rounded-md bg-white top-2 right-2 "
          >
            <FaHeart />
          </span>
        )}
        <img src={urls.regular} alt={alt_description} className="rounded-md" />
        <span
          onClick={() => addDownload(image)}
          className="icon-hover download absolute inline-flex justify-center items-center w-8 h-8 rounded-md bg-white bottom-2 right-2 text-slate-900"
        >
          <span onClick={(e) => downloadImage(e)}>
            <FaDownload />
          </span>
        </span>
        <span className="icon-hover user absolute inline-flex justify-center gap-2 items-center  top-2 left-2">
          <div className="flex gap-3 items-center ">
            <Avatar src={user.profile_image.large} className="w-6 h-6" />
          </div>
          <span className="text-sm font-semibold text-white ">
            {user.first_name + " " + user.last_name}
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Image;
