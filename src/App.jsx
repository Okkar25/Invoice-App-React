import React from "react";
import CheckOutForm from "./components/CheckOutForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDrawer from "./components/ProductDrawer";
import RecordTable from "./components/RecordTable";

const App = () => {
  return (
    <div className="max-w-[800px] mx-auto min-h-screen flex flex-col">
      <Header />

      <CheckOutForm />

      <RecordTable />

      <Footer />

      <ProductDrawer />
    </div>
  );
};

export default App;
