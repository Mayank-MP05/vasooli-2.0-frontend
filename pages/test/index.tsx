import React from "react";
import ConfirmDeleteModal from "../../components/common/confirm-delete-modal";
import SignInForm from "../../components/modals/sign-in-form";
import ModalWrapper from "../../components/modals/modal-wrapper";

const TestPage = () => {
  return (
    <div className="max-w-md">
      <ModalWrapper isOpen={true} />
    </div>
  );
};

export default TestPage;
