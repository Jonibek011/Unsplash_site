import { Form } from "react-router-dom";
import FormInput from "./FormInput";

function Modal() {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">Password reset</h3>
          <Form method="post">
            <FormInput
              type="email"
              name="email_reset"
              placeholder="Enter email"
            />

            <div className="flex justify-end items-center gap-3 mt-5">
              <button
                onClick={() => document.getElementById("my_modal_1").close()}
                className="btn btn-primary btn-sm"
              >
                Send
              </button>
              <button
                onClick={() => document.getElementById("my_modal_1").close()}
                type="button"
                className="btn btn-sm btn-secondary"
              >
                Close
              </button>
            </div>
          </Form>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
