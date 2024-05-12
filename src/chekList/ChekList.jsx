import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./ChekList.scss";
import { privichki } from "./privichki";
import Header from "../header/header";
import { useCookies } from 'react-cookie';

const ChekListHabits = styled.div`
  color: #4A860B;
  font-family: 'CygreBlack';
  font-size: 54.723px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
`;
const ProgressOfHabits = styled.div`
  color: #b4d21c;
  font-family: "CygreExtraBold";
  font-size: 30px;
  font-style: italic;
  font-weight: 800;
  line-height: normal;
  margin-top: 2em;
  text-align: left;
  margin-bottom: 0.5em;
`;

const ChekBoxText = styled.a`
  margin-left: 1em;
  color: #696969;
  text-align: justify;
  font-family: "Gilroy";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ChekBoxDiv = styled.div`
  padding: 0.5em;
  margin-right: auto;
`;

const BoxHow = styled.div`
  display: flex;
  flex-direction: column;
  width: 30em;
`;
const ShowDiv = styled.div`
  text-align: center;
`
const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 5em;
`
const Slider = styled.input`
    accent-color: #4A860B;
    color: #CFCFCF;
    width: 80%;   
    border-radius: 0;
    
`;
export default function ChekList() {
  const [count, setCount] = useState(0);

  function functionReturnRadioButton(text, id) {
  const Handle = () => {
    console.log(event.target.checked, event.target.value);
    console.log(count);
    if (event.target.checked == true) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <ChekBoxDiv>
      <input
        className={"custom-checkbox"}
        onChange={Handle}
        type="checkbox"
        id={id}
        name={id}
        value={text}
      />
      <ChekBoxText>{text}</ChekBoxText>
    </ChekBoxDiv>
  );
}
const ViewPrivichki = privichki.map((value) => {
  return functionReturnRadioButton(value.text, value.id);
});
  return (
    <div>
      <Header></Header>
      <ShowDiv>
        <ChekListHabits>ЧЕК-ЛИСТ ПРИВЫЧЕК</ChekListHabits>
        <Slider value={count} max={20} min={0} type='range'></Slider>
        <FlexDiv>
          <BoxHow>
            <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
            {ViewPrivichki}
          </BoxHow>
          <BoxHow>
            <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
            {ViewPrivichki}
          </BoxHow>
          <BoxHow>
            <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
            {ViewPrivichki}
          </BoxHow>
          <BoxHow>
            <ProgressOfHabits>Прогресс привычек</ProgressOfHabits>
            {ViewPrivichki}
          </BoxHow>
        </FlexDiv>
      </ShowDiv>
    </div>
  );
}
