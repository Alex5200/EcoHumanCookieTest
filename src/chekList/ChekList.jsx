import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CygreBlack from '../assets/fonts/Cygre-Black.ttf'
import CygreExtraBold from '../assets/fonts/Cygre-ExtraBoldIt.ttf';
import Gilroy from '../assets/fonts/Gilroy-Medium.ttf'
import "./ChekList.scss"
import {privichki} from './privichki'
import Header from '../header/header';


const ChekListHabits = styled.div`
    color: #72AB46;
    font-family: ${CygreBlack};
    font-size: 54.723px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`;
const ProgressOfHabits = styled.div`
    color: #EDCFC5;
    font-family: ${CygreExtraBold};
    font-size: 30px;
    font-style: italic;
    font-weight: 800;
    line-height: normal;
    margin-right: 50%;
    width: 50%;
    margin-top:2em;
`;

/*
const ChekProgress = styled.input`
`;
const ImgSlider = styled.img`
    position: relative;
    left:0;
    width: 4em;
`;*/
const ChekBoxText = styled.a`
    margin-left: 1em;
    color: #696969;
    text-align: justify;
    font-family: ${Gilroy};
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
/*
const SliderDiv = styled.div`
    width: 30em;
`;*/
const ChekBoxDiv = styled.div`
padding: 0.5em;
margin-right: auto;
`;
let scoreHuman = 0;
function functionReturnRadioButton(text, id){
    const Handle = () =>{
        console.log(event.target.checked, event.target.value)
        console.log(scoreHuman);
        if(event.target.checked == true){
            scoreHuman += 1;
        }else{
            scoreHuman -= 1;
        }
    }
    return(
    <ChekBoxDiv>
        <input className={"custom-checkbox"} onChange={Handle}  type="checkbox" id={id} name={id} value={text} />
        <ChekBoxText >{text}</ChekBoxText>
    </ChekBoxDiv>
    )

}
const ViewPrivichki = privichki.map((value) => {
        return (functionReturnRadioButton(value.text, value.id))
})
const BoxHow  = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export default function ChekList(){
    return(
        <div>
            <Header></Header>
            <div>
                <ChekListHabits>ЧЕК-ЛИСТ ПРИВЫЧЕК</ChekListHabits>
                <div>
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
                </div> 
            </div>
        </div>
    );
}