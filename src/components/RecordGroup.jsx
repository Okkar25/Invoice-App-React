import React, { useContext } from "react";
import { GeneralContext } from "../contexts/GeneralContext";
import EmptyStage from "./EmptyStage";
import Record from "./Record";

const RecordGroup = () => {
  const { records } = useContext(GeneralContext);

  return (
    <>
      {!records.length && <EmptyStage />}

      {records.map((record, index) => (
        <Record
          key={record.id}
          index={index}
          record={record}
        />
      ))}
    </>
  );
};

export default RecordGroup;
