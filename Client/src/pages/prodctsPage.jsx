import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Annoucement from "../components/Annoucement";
import Products from "../components/Products";
import NewLetter from "../components/Newletter";
import Footer from "../components/footer";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProdctsPage = () => {
  const location = useLocation();
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const cat = location.pathname.split("/")[2];
  const handelChange = (e) => {
    const value = e.target.value;
    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Annoucement />
      <FilterContainer>
        <Filter>
          <FilterText>{cat}</FilterText>
          <Select name="color" onChange={handelChange}>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handelChange}>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select name="order" onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <NewLetter />
      <Footer />
    </div>
  );
};

export default ProdctsPage;
