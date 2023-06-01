import { useState } from "react";
import SectionHeading from "../SectionHeading";
import IndividualTable from "./IndividualTable";

const sectionMap = {};

const tableMapData = [
  {
    _id: "0398h4g083h4g084h80h4g3",
    tableNumber: 1,
    numberOfSeats: 4,
    currentStatus: "free",
    assignedTo: {
      FirstName: "Senorita",
      lastName: "Bishop",
    },
    areaLocation: "",
  },
];

const TableMapContainer = () => {
  const [selectedTable, setSelectedTable] = useState<boolean>(false);
  return (
    <div className="px-6 py-4">
      {/* Filter to get the table with given number of seats, status of the table */}
      <SectionHeading heading="Table Map" />
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] gap-2">
        <IndividualTable numberOfSeats={12} tableNumber={1} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={4} tableNumber={23} />
        <IndividualTable numberOfSeats={6} tableNumber={223} />
        <IndividualTable numberOfSeats={10} tableNumber={27} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={12} tableNumber={1} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={4} tableNumber={23} />
        <IndividualTable numberOfSeats={6} tableNumber={223} />
        <IndividualTable numberOfSeats={10} tableNumber={27} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={12} tableNumber={1} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={4} tableNumber={23} />
        <IndividualTable numberOfSeats={6} tableNumber={223} />
        <IndividualTable numberOfSeats={10} tableNumber={27} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={12} tableNumber={1} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={4} tableNumber={23} />
        <IndividualTable numberOfSeats={6} tableNumber={223} />
        <IndividualTable numberOfSeats={10} tableNumber={27} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={12} tableNumber={1} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
        <IndividualTable numberOfSeats={4} tableNumber={23} />
        <IndividualTable numberOfSeats={6} tableNumber={223} />
        <IndividualTable numberOfSeats={10} tableNumber={27} />
        <IndividualTable numberOfSeats={3} tableNumber={2} />
      </div>
    </div>
  );
};

export default TableMapContainer;
