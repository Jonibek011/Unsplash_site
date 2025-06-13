//globalContext
import { useGlobalContext } from "../hooks/useGlobalContext";

//react icons
import { MdVerified } from "react-icons/md";

//firebase
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

//main function
function Profile() {
  const sentVerification = () => {
    sendEmailVerification(auth.currentUser, {
      url: "http://localhost:5174/profile",
    }).then(() => {
      toast.success("Verification is sended");
    });
  };

  const { user, loading } = useGlobalContext();
  return (
    <div className="min-h-[65vh] px-[5%] mt-[5%]">
      <div className="flex items-center gap-5 flex-col sm:flex-row ">
        <div className="w-40 h-40   flex flex-col justify-between items-center">
          <div className="relative">
            <img
              className=" rounded-full object-cover h-28 w-28"
              src={user.photoURL}
              alt={user.displayName + " profile"}
            />
            {loading && (
              <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <span className="loading loading-spinner text-primary"></span>
              </span>
            )}
          </div>
          {/* {!inputValue && (
            <label>
              <input
                onChange={imageBase64}
                accept="image/*"
                type="file"
                className="file-input file-input-xs file-input-bordered file-input-primary w-full max-w-xs"
              />
            </label>
          )}

          {inputValue && (
            <div className="flex gap-2">
              <button
                onClick={savaNewProfileImage}
                className="btn btn-primary btn-sm"
              >
                Save
              </button>
              <button
                onClick={() => setInputValue(null)}
                className="btn btn-neutral btn-sm"
              >
                Cancel
              </button>
            </div>
          )} */}
        </div>

        <div className="bg-base-200 w-full grow h-40 p-4 rounded-lg flex flex-col  md:flex-row justify-evenly">
          <h2 className="flex md:flex-col text-xl gap-1">
            <span className="font-medium">User name: </span> {user.displayName}
          </h2>
          <p className="flex md:flex-col  text-xl gap-1">
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="flex items-center gap-2 md:flex-col  text-xl ">
            <span className="font-medium">Verification: </span>{" "}
            {user.emailVerified ? (
              <span className="flex items-center gap-1">
                Verified <MdVerified />
              </span>
            ) : (
              <div className="flex gap-2 items-center">
                <span>Not verified</span>
                <button
                  onClick={sentVerification}
                  className="btn btn-primary btn-xs"
                  type="button"
                >
                  Verify now
                </button>
              </div>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
