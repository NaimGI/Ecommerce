import { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { prodctsArray } from "../data.js";
import axios from "axios";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  flex-wrap: wrap;
`;
const Products = ({ cat, filter, sort }) => {
  console.log(cat, filter, sort);
  const [product, setProduct] = useState([]);
  const [productFilter, setProdctFilter] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:2000/api/product?category=${cat}`
            : "http://localhost:2000/api/product/"
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [cat]);
  console.log(product);
  useEffect(() => {
    cat &&
      setProdctFilter(
        product.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [product, cat, filter]);
  useEffect(() => {
    if (sort === "newest") {
      setProdctFilter((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setProdctFilter((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setProdctFilter((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);
  return (
    <Container>
      {cat
        ? productFilter.map((item) => <ProductItem item={item} key={item.id} />)
        : product
            .slice(0, 6)
            .map((item) => <ProductItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
