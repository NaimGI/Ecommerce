import React from "react";
import styled from "styled-components";
import { categories } from "../data.js";
import CategorieItems from "../components/CategorieItems";
import { mobile } from "../resposive.js";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", height: "60%" })};
`;
const Categorie = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorieItems item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categorie;
