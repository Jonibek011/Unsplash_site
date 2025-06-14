import { createContext, useEffect, useReducer } from "react";
import { useCollection } from "../hooks/useCollection";
export const MainContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "READYCHANGE":
      return { ...state, readyChange: true };
    case "LOGOUT":
      return { ...state, user: null };
    case "ADD_LIKE":
      return { ...state, likedImages: payload };
    case "DISLIKE":
      return {
        ...state,
        likedImages: state.likedImages.filter((image) => image.id !== payload),
      };
    case "DOWNLOAD":
      return {
        ...state,
        downloadedImages: [...state.downloadedImages, payload],
      };
    case "INFO":
      return { ...state, imageInfo: payload };
    case "LOADING":
      return { ...state, payload: true };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    likedImages: [],
    downloadedImages: [],
    imageInfo: [],
    readyChange: false,
    loading: false,
  });

  const { data: likedImages, loader } = useCollection("likedImages", [
    "uid",
    "==",
    state.user && state.user.uid,
  ]);

  useEffect(() => {
    if (likedImages) {
      dispatch({ type: "ADD_LIKE", payload: likedImages });
    }
  }, [likedImages]);

  return (
    <MainContext.Provider value={{ ...state, dispatch, loader }}>
      {children}
    </MainContext.Provider>
  );
}
