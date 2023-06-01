import { useState } from "react";
import { PosNavbar, TableInformationSection, TableMapContainer } from "../../components";
import { PosLayout } from "../../layouts";

const TableMap = () => {
  const [selectedTable, setSelectedTable] = useState<boolean>(true);
  return (
    <PosLayout isLoading={false}>
      <div className={`grid max-h-[100vh] h-[100%] ${selectedTable ? "grid-cols-[5fr,_3fr]" : "grid-cols-1"}`}>
        <div className="overflow-y-scroll hideScrollbar pb-10">
          <PosNavbar />
          <TableMapContainer />
        </div>
        {selectedTable && (
          <div className="border-l-[1px] overflow-y-scroll hideScrollbar">
            <TableInformationSection />
          </div>
        )}
      </div>
    </PosLayout>
  );
};

export default TableMap;
