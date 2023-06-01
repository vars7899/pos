import React from "react";
import { PosLayout } from "../../layouts";
import { PosNavbar, SelectCategoryListContainer } from "../../components";

const ProductMenu = () => {
  return (
    <PosLayout isLoading={false}>
      <div className="grid grid-cols-[5fr,_minmax(600px,_3fr)]">
        <div>
          <PosNavbar />
          <SelectCategoryListContainer />
          <div className="border-t-[1px]"></div>
        </div>
        <div className="w-[100%]"></div>
      </div>
    </PosLayout>
  );
};

export default ProductMenu;
