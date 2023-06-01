import { useState } from "react";
import { PosNavbar, SelectCategoryListContainer, TableMapContainer } from "../../components";
import { PosLayout } from "../../layouts";

const TableMap = () => {
  const [selectedTable, setSelectedTable] = useState<boolean>(true);
  return (
    <PosLayout isLoading={false}>
      <div className={`grid h-[100%] ${selectedTable ? "grid-cols-[5fr,_minmax(0px,_3fr)]" : "grid-cols-1"}`}>
        <div>
          <PosNavbar />
          <TableMapContainer />
        </div>
        {selectedTable && (
          <div className="border-l-[1px]">
            <p>no</p>
          </div>
        )}
      </div>
    </PosLayout>
  );
};

export default TableMap;
