import { Form } from "react-router-dom";
import FormInput from "./FormInput";

function Search() {
  return (
    <div className="w-full flex justify-end ">
      <Form
        method="post"
        className="w-full max-w-96   flex  gap-2 items-center"
      >
        <FormInput name="search" type="text" placeholder="Search" />
        <button className="btn btn-success btn-xs md:hidden ">Search</button>
      </Form>
    </div>
  );
}

export default Search;
