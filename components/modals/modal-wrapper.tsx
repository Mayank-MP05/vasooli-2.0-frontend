import React from "react";
import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

const Modal = ({ isOpen = false }: { isOpen: Boolean }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("SIGN_IN");

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none sm:m-4">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {modalType === "SIGN_IN" ? (
                  <SignInForm setModalType={setModalType} />
                ) : (
                  ""
                )}
                {modalType === "SIGN_UP" ? (
                  <SignUpForm setModalType={setModalType} />
                ) : (
                  ""
                )}
                {modalType === "SIGN_OUT" ? <h1>Logout ...</h1> : ""}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
