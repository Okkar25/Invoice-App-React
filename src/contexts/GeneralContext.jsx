import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
  // drawer
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  // product
  const fruits = [
    { id: 1, name: "Apple", price: 1.2 },
    { id: 2, name: "Banana", price: 0.8 },
    { id: 3, name: "Orange", price: 1.5 },
    { id: 4, name: "Grapes", price: 2.3 },
  ];

  const [products, setProducts] = useState(fruits);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // record
  const [records, setRecord] = useState([]);

  const removeRecord = (id) => {
    setRecord(records.filter((record) => record.id !== id));
  };

  const addRecord = (newRecord) => {
    const isExistedRecord = records.find(
      (record) => record.productId === newRecord.productId
    );

    if (isExistedRecord) {
      updateRecordQuantity(isExistedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };

  const updateRecordQuantity = (id, updateQuantity) => {
    setRecord(
      records.map((record) => {
        if (record.id === id) {
          const newQuantity = record.quantity + updateQuantity;
          const newCost = record.price + newQuantity;

          return {
            ...record,
            quantity: newQuantity,
            cost: newCost,
          };
        }

        return record;
      })
    );
  };

  return (
    <div>
      <GeneralContext.Provider
        value={{
          openDrawer,
          toggleDrawer,
          products,
          addProduct,
          records,
          addRecord,
          removeRecord,
          updateRecordQuantity,
        }}
      >
        {children}
      </GeneralContext.Provider>
    </div>
  );
};

export default GeneralContextProvider;
