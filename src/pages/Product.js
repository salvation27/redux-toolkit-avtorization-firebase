import React, { useState } from "react";
import { useGetGoodsQuery } from "../store/slices/goodsApi";
import { useAuth } from "hooks/use-auth";
import { Redirect } from "react-router-dom";
import ProductItem from "../components/ProductItem/ProductItem";

const Product = () => {
  const [count, setCount] = useState("");
  const { data = [] } = useGetGoodsQuery(count);

  const selectChange = (e) => setCount(e.target.value);

  const { isAuth } = useAuth();
console.log('колличество',data.length)

  return isAuth ? (
    <div className="product">
      <div className="container">
        <div className="product_wrap">
          {data.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
        <div className="product_select">
          <select name="select" id="" value={count} onChange={selectChange}>
            <option value="">all</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Product;
