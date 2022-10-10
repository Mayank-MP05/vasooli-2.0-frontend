import React from "react";
import IconWrapper from "../../components/common/icon-wrapper";
import TransactionCard from "../../components/transaction-card";

const Transactions = () => {
  return (
    <>
      <IconWrapper
        icon={`/static/transactions-icon.svg`}
        headerTitle="Transaction"
        showCreateNewBtn
      />
      <TransactionCard />
    </>
  );
};

export default Transactions;
