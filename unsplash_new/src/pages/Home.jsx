import { useActionData } from "react-router-dom";

//components
import { Search, ImagesContainer } from "../components";

//custom hooks
import { useFetch } from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let search = formData.get("search");
  return search;
};

function Home() {
  const searchInfo = useActionData();
  const [nextPage, setNextPage] = useState(1);
  const [allImages, setAllImages] = useState([]);
  const prevSearchInfo = useRef(searchInfo);

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_UNSPLASH_ACCESS_KEY
    }&query=${searchInfo ?? "All"}&page=${nextPage}`
  );

  useEffect(() => {
    if (data && data.results) {
      // if (nextPage > 1) {
      //   setAllImages((prev) => {
      //     return [...prev, ...data.results];
      //   });
      // } else {
      //   setAllImages(data.results);
      // }
      setAllImages((prev) => {
        return nextPage === 1 ? data.results : [...prev, ...data.results];
      });
    }
  }, [data]);

  useEffect(() => {
    if (searchInfo !== prevSearchInfo.current) {
      setAllImages([]);
      setNextPage(1);
      prevSearchInfo.current = searchInfo;
    }
  }, [searchInfo]);

  return (
    <div className="home  custom-container">
      <div className="my-8">
        <Search />
      </div>
      <div>
        {isPending && <h1>Loading...</h1>}
        {allImages.length > 0 && <ImagesContainer images={allImages} />}
        <button
          onClick={() => setNextPage(nextPage + 1)}
          className="btn btn-secondary mx-auto w-full my-10"
        >
          SHow More
        </button>
      </div>
    </div>
  );
}

export default Home;
