import { createContext, useEffect, useReducer } from "react";

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
    case "LIKE":
      return { ...state, likedImages: [...state.likedImages, payload] };
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

// const getDataFromLocalStorage = () => {
//   return (
//     JSON.parse(localStorage.getItem("splash")) || {
//       likedImages: [],
//       downloadedImages: [],
//       imageInfo: [],
//     }
//   );
// };

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    likedImages: [],
    downloadedImages: [],
    imageInfo: [],
    readyChange: false,
    loading: false,
  });

  useEffect(() => {
    localStorage.setItem("splash", JSON.stringify(state));
  }, [state]);
  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
