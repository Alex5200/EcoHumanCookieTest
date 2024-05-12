import { useState } from "react";
import Header from "../header/header";
import styled from "styled-components";
import './testFilter.css';
import Krest from './крестик выхода.png'
const TestDiv = styled.div`
    margin-top: 12.25rem;
    margin-left: 10.75rem;
`
const HeaderText = styled.a`
    margin-top: 2em;
    color: #4A860B;
    font-size: 3.375rem;
    font-family: 'CygreBlack';
`
const TagOpener = styled.div`
    margin-top: 8.9375rem;
`
const ButtonFilter = styled.button`
    font-size: 1.25rem;
    font-family: 'Gilroy';
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    padding-left: 2em;
    padding-right: 2em;
    border: 1.5px solid #4A860B;
    color: #4A860B;
    background: none;
    margin-right: 1em;
`
const BackgroundAlert = styled.div`
    backdrop-filter: blur(10px);
    border: 1px solid #4A860B;
    height: 20em;
    margin-left:auto;
    margin-right: auto;
    margin-top: 20%;
    width: 20em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const ButtonsAlerts = styled.button`
    height: 20%;
    padding-left: 1em;
    padding-right: 1em;
    position: relative;
    top: 3em;
    border: 1px solid rgb(74, 134, 11);
    margin-left: 1em;
    margin-right: auto;
`
const IconExit = styled.img`
    height: 15px;
    position: relative;
    left: 90%;
    margin-left: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 2em;
`
const ButtonSubmit = styled.button`
    position: absolute;
    bottom: 0;
    padding: 1em;
    background-color: #4A860B;
    color: white;
    border: 0px solid;
    height: 20%;
    width: 100%;
    
`

export default function TestFilter(){
    const [alert, setAlert] = useState(false);
    const [smoke, setSmoke] = useState(false);
    const [sleep, setSleep] = useState(false);
    const [habits, setHabits] = useState(false);
    const Edits = () =>{
        setAlert(true);
    }
    function CheksText(){
        if(!alert){       
            return(
                <div>     
                    <Header/>
                    <TestDiv>
                        <HeaderText>ТЕСТЫ</HeaderText>
                        <TagOpener>
                            <ButtonFilter onClick={Edits}>теги</ButtonFilter> 
                            {smoke ? (
                            <ButtonFilter className="true" onClick={() => setSmoke(false)}>курение</ButtonFilter> 
                            ):(none)}
                        </TagOpener>
                    </TestDiv>
                </div>
            )
        }else{
            return(
               
                <BackgroundAlert>
                    <IconExit onClick={() => setAlert(false)} src={Krest}/>
                    <ButtonsAlerts className={smoke} onClick={() => setSmoke(!smoke)}>курение</ButtonsAlerts>
                    <ButtonsAlerts className={sleep} onClick={() => setSleep(!sleep)}>сон</ButtonsAlerts>
                    <ButtonsAlerts className={habits} onClick={() => setHabits(!habits)}>привычки</ButtonsAlerts>
                    
                    <ButtonSubmit onClick={() => setAlert(!alert)}>Применить</ButtonSubmit>
                </BackgroundAlert>
            )
        }
    }
    return(
        <div>
            {CheksText()}
            
        </div>
    )
}