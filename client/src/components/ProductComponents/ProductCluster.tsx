import { Product } from "../../global/types";
import SmallProductCard from "./SmallProductCard";

type ProductClusterProps = {
  productList: Product[];
};

const ProductCluster = ({ productList }: ProductClusterProps) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] p-3 gap-1">
      {productList.map((product: Product) => (
        <SmallProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductCluster;
