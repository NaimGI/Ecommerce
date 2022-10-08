import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
const Annoucement = () => {
  return <Container>Super Deal !Free shoping on Ordres Overs 50$ .</Container>;
};

export default Annoucement;
