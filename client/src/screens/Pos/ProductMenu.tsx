import { PosLayout } from "../../layouts";
import {
  OrderTableFeatures,
  PosNavbar,
  ProductCluster,
  SelectCategoryListContainer,
  OrderOverview,
  OrderTotalSection,
} from "../../components";
import { Product, TableDetails } from "../../global/types";

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
        <div className="w-[100%] max-h-[100vh] border-l-[1px] flex flex-col justify-between">
          <div>
            <OrderTableFeatures selectedTable={selectedTable} />
            <OrderOverview orderDetails={selectedTable.orderDetails} />
          </div>
          <OrderTotalSection />
        </div>
      </div>
    </PosLayout>
  );
};

export default ProductMenu;
