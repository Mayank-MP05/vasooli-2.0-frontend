import React from "react";
import IconWrapper from "../../components/common/icon-wrapper";

const Transactions = () => {
  return (
    <IconWrapper
      icon={`/static/transactions-icon.svg`}
      headerTitle="Transaction"
      showCreateNewBtn
    />
  );
};

export default Transactions;
