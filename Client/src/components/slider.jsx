import styled from "styled-components";
import { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { sliderItems } from "../data.js";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  position: absolute;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: 0;
  bottom: 0;
  left: ${(props) => props.directions === "left" && "10px"};
  right: ${(props) => props.directions === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndexs, setSliderIndex] = useState();
  const handelClick = (direction) => {
    if (direction === "left") {
      setSliderIndex(sliderIndexs > 0 ? sliderIndexs - 1 : 2);
    } else {
      setSliderIndex(sliderIndexs < 2 ? sliderIndexs + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow directions="left" onClick={() => handelClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={sliderIndexs}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Check</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow directions="right" onClick={() => handelClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
