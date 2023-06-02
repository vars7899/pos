import { PosLayout } from "../../layouts";
import { PosNavbar, ProductCluster, SelectCategoryListContainer } from "../../components";
import { IconScan, IconEdit, IconTrash, IconReceipt, IconDiscount, IconGridDots } from "@tabler/icons-react";
import { Product, TableDetails } from "../../global/types";
import { hideStringOverflow } from "../../functions/HideStringOverflow";
import OrderOverview from "../../components/OrderComponents/OrderOverview";
import { Currency } from "../../global/constants";

const productList: Product[] = [
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
  {
    _id: "029h9t90h03gf923",
    name: "fried Oyster",
    description:
      "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
    station: "seafood",
    createdAt: "1975-08-19T23:15:30.000Z",
    price: 25.69,
  },
];

const selectedTable: TableDetails = {
  _id: "39gh389h4g0983hg4908h34",
  tableNumber: 13,
  capacity: 4,
  orderDetails: {
    _id: "2049gt2409gn40n9g03n4g",
    orderItem: [
      {
        product: {
          _id: "029h9t90h03gf923",
          name: "fried Oyster",
          description:
            "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
          station: "seafood",
          createdAt: "1975-08-19T23:15:30.000Z",
          price: 25.69,
        },
        quantity: 1,
        notes: "Allergy to nuts, please make it spicy and lorem ipsum hummus",
        add: [
          {
            name: "lemon",
            price: 1.25,
          },
        ],
        remove: [
          {
            name: "Avocado",
            price: 1.25,
          },
        ],
        sides: [
          {
            name: "french fries",
            price: 1.25,
          },
          {
            name: "Coca cola",
            price: 0.99,
          },
        ],
        guestNumber: 2,
      },
      {
        product: {
          _id: "029h9t90h03gf923",
          name: "fried Oyster",
          description:
            "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
          station: "seafood",
          createdAt: "1975-08-19T23:15:30.000Z",
          price: 25.69,
        },
        quantity: 6,
        notes: "Allergy to nuts, please make it spicy and lorem ipsum hummus",
        guestNumber: 2,
      },
      {
        product: {
          _id: "029h9t90h03gf923",
          name: "fried Oyster",
          description:
            "The easiest difference to see between type and interface is that only type can be used to alias a primitive: None of these examples are possible to achieve with interfaces. 💡 When providing a type alias for a primitive value, use the type keyword",
          station: "seafood",
          createdAt: "1975-08-19T23:15:30.000Z",
          price: 25.69,
        },
        quantity: 3,
        guestNumber: 9,
      },
    ],
  },
};

const IconAttributes = {
  strokeWidth: 1.25,
  className: "cursor-pointer",
};

const ProductMenu = () => {
  return (
    <PosLayout isLoading={false}>
      <div className="grid grid-cols-[5fr,_380px]">
        <div>
          <PosNavbar />
          <SelectCategoryListContainer />
          <div className="border-t-[1px]">
            <ProductCluster productList={productList} />
          </div>
        </div>
        <div className="w-[100%] border-l-[1px]">
          <div className="flex items-center justify-between border-b-[1px] px-4">
            <div className="h-[70px] flex flex-col justify-center">
              <p className="text-xl font-semibold">Table {selectedTable.tableNumber}</p>
              <p className="capitalize text-xs text-slate-600 font-medium">
                {hideStringOverflow("johnhansen flamingo")}
              </p>
            </div>
            <div className="grid grid-cols-4 justify-stretch">
              <div className="centerOut px-3">
                <IconScan {...IconAttributes} />
              </div>
              <div className="centerOut px-2">
                <IconEdit {...IconAttributes} />
              </div>
              <div className="centerOut px-2">
                <IconReceipt {...IconAttributes} />
              </div>
              <div className="centerOut px-2">
                <IconTrash {...IconAttributes} />
              </div>
            </div>
          </div>
          <OrderOverview orderDetails={selectedTable.orderDetails} />
          {/* Discount and add amount tab */}
          <div className="grid grid-cols-2 border-[1px] divide-x-[1px]">
            <button className="flex items-center justify-center py-3 text-emerald-600">
              <IconDiscount {...IconAttributes} />
              <p className="ml-2 font-semibold text-lg">Discount</p>
            </button>
            <button className="flex items-center justify-center py-3 text-purple-600">
              <IconGridDots {...IconAttributes} />
              <p className="ml-2 font-semibold text-lg">Add Amount</p>
            </button>
          </div>
          {/* order price summary */}
          <div className="px-4 py-1">
            <div className="flex items-center justify-between py-1 font-semibold text-gray-400">
              <p>Tax</p>
              <p>{Currency + " " + 23.23}</p>
            </div>
            <div className="flex items-center justify-between py-1 font-semibold text-gray-400">
              <p>Subtotal</p>
              <p>{Currency + " " + 207.66}</p>
            </div>
            <div className="flex items-center justify-between py-1 font-semibold">
              <p>Total</p>
              <p>{Currency + " " + 230.89}</p>
            </div>
          </div>
          {/* fire Order button */}
          <button className="text-xl font-semibold tracking-wide flex items-center justify-center w-[100%] py-4 bg-indigo-100">
            <p className="text-indigo-800">Fire Order</p>
          </button>
        </div>
      </div>
    </PosLayout>
  );
};

export default ProductMenu;
