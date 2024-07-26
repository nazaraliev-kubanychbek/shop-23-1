import ProductItem from "./ProductItem";
import { useState, useEffect } from "react";
import axios from "axios";
import './products.scss';

const ProductsList = ({ item, limit }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(
      limit
        ? `https://fakestoreapi.com/products/category/${item}?limit=${limit}`
        : `https://fakestoreapi.com/products/category/${item}`
    ).then(({ data }) => setData(data));
  }, [limit, item]);
  return (
    <div className="container">
      <h1>{item}</h1>
      <div className="row">
        {
        data.map((item) => {
          return <div className="col-3" key={item.id}>
              <ProductItem item={item} />
            </div>
        })
        }
      </div>
    </div>
  );
};

export default ProductsList;
