import { useState } from "react";
import Header from "../header/header";
import styled from "styled-components";
import './testFilter.css';
import {MainCards} from './keyTestometrika.js';
import Krest from './крестик выхода.png'
const TestDiv = styled.div`
    margin-top: 10%;
    margin-left: 15%;
`
const HeaderText = styled.a`
    margin-top: 5%;
    color: #4A860B;
    font-size: 3.375rem;
    font-family: 'CygreBlack';
`
const HeaderText2 = styled(HeaderText)`
    margin-left: auto;
    margin-right: auto;
    font-size: 5.0vh;
`
const TagOpener = styled.div`
    margin-top: 10%;
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
const ButtonFilterActive = styled.button`
    font-size: 1.25rem;
    font-family: 'Gilroy';
    padding-top: 0.1em;
    padding-bottom: 0.1em;
    padding-left: 2em;
    padding-right: 2em;
    border: 1.5px solid #4A860B;
    margin-right: 1em;
    background-color: #4A860B;
    color: white;
    margin-top: 1em;
`
const BackgroundAlert = styled.div`
    backdrop-filter: blur(10px);
    height: 60.0vh;
    margin-left:auto;
    margin-right: auto;
    margin-top: 20%;
    width: 90%;

`
const ButtonsAlerts = styled.button`
    height: 20%;
    padding-left: 1.5em;
    padding-right: 1.5em;
    padding-top: .3em;
    padding-bottom: .3em;
    position: relative;
    top: 3em;
    border: 1px solid rgb(74, 134, 11);
    margin-left: 1em;
    margin-right: auto;
    font-size: 2.0vh;
    font-family: 'Gilroy';
    margin-top: 1em;

`
const IconExit = styled.img`
    height: 2vh;
    position: relative;
    left: 88%;
    margin-left: 0.8em;
    margin-top: 0.8em;
    margin-bottom: 2em;
`
const ButtonSubmit = styled.button`
    position: absolute;
    bottom: 0;
    background-color: #4A860B;
    color: white;
    border: 0px solid;
    height: 20%;
    width: 100%;
    font-size: 4.0vh;
`
const DivFilters = styled.div`
    
`
const DivHeaderFilter = styled.div`
    margin-left: auto;
    margin-right:auto;
    text-align: center;
    margin-top: 1em;
`

const Header3 = styled.button`
    background: none;
    border: 0px solid;
    color: #4A860B;
    font-size: 2vh;
    padding-left: 2vh;
    padding-top: 2vh;
    font-family: 'Gilroy';

`
const Textcard = styled.p`
    color: #B4D21C;
    font-size: 2vh;
    padding-left: 2vh;
    font-family: 'Gilroy';
    padding-bottom: .5em;
   
`
const DivCard = styled.div`
    width: 90%;
    border: 1.5px solid #696969;
    margin-top: 1em;
`
const HeaderTest = styled(HeaderText)`
    margin-left: auto;
    margin-right: auto;
    font-size: 5vh;
`
const DivTest = styled.div`
 width: 70vh;
 margin-left: auto;
 margin-right: auto;
 height: 90vh;
 margin-top: 2em;
 padding: 1.5em;
 border: 1.5px solid #4A860B;
`

export default function TestFilter(){
    const [alert, setAlert] = useState(false);
    const [smoke, setSmoke] = useState(false);
    const [sleep, setSleep] = useState(false);
    const [habits, setHabits] = useState(false);
    const [live, setLive] = useState(false);
    const [tests, setTests] = useState(false);
    const [nameTest, setNameTest] = useState("");
    const hrefTest = "";
    const Edits = () =>{
        setAlert(true);
    }
    function Tests( testName){
        setNameTest(testName);
        setTests(true)
    }
    function CheksText(){
        
        if(!alert && !tests){       
            return(
                <div>     
                    <Header/>
                    <TestDiv>
                        <HeaderText>ТЕСТЫ</HeaderText>
                        
                        <TagOpener>
                            <ButtonFilter onClick={Edits}>теги</ButtonFilter> 
                            {smoke ? (
                            <ButtonFilterActive className="true" onClick={() => setSmoke(false)}>курение</ButtonFilterActive> 
                            ):(<></>)}
                            {sleep ? (
                            <ButtonFilterActive className="true" onClick={() => setSleep(false)}>сон</ButtonFilterActive> 
                            ):(<></>)}
                             {habits ? (
                            <ButtonFilterActive className="true" onClick={() => setHabits(false)}>привычки</ButtonFilterActive> 
                            ):(<></>)}
                             {live ? (
                            <ButtonFilterActive className="true" onClick={() => setLive(false)}>жизнь</ButtonFilterActive> 
                            ):(<></>)}
                        </TagOpener>
                        {() => {
                            if(tests){
                                return(<h1>Test</h1>)
                            }
                        }}
                        {MainCards.map(function(item){
                            if(live && item.tag.search("live")){    
                                return(
                                    <DivCard key={Date.now} onClick={Tests}>
                                        <Header3 onClick={Tests}>{item.title}</Header3>
                                        <Textcard>{item.text}</Textcard>
                                    </DivCard>
                                )
                            }else if(smoke && item.tag.search("smoke")){
                                return(
                                    <DivCard key={Date.now} onClick={Tests}>
                                        <Header3>{item.title}</Header3>
                                        <Textcard>{item.text}</Textcard>
                                    </DivCard>
                                )
                            }else if (habits && item.tag("habits")){
                                return(
                                    <DivCard key={Date.now} onClick={Tests}>
                                        <Header3 onClick={Tests}>{item.title}</Header3>
                                        <Textcard>{item.text}</Textcard>
                                    </DivCard>
                                )
                            }else if (!live && !smoke && !sleep && !habits){
                                return(
                                    <DivCard key={Date.now} onClick={() => Tests(item.title)}>
                                        <Header3 onClick={Tests}>{item.title}</Header3>
                                        <Textcard>{item.text}</Textcard>
                                    </DivCard>
                                )
                            }
                        })}
                    </TestDiv>
                </div>
            )
        }else if (tests){
            return(
            <DivTest>
                <IconExit onClick={() => {setTests(false)}} src={Krest}/>
                <HeaderTest>{nameTest}</HeaderTest>
            </DivTest>)
        }
        else{
            return(
                <BackgroundAlert>
                     {/* <IconExit onClick={() => setAlert(false)} src={Krest}/> */}
                    <DivHeaderFilter>
                        <HeaderText2>Выберети фильтр</HeaderText2>
                    </DivHeaderFilter>
                    <DivFilters>
                        <ButtonsAlerts className={smoke + " false"} onClick={() => setSmoke(!smoke)}>курение</ButtonsAlerts>
                        <ButtonsAlerts className={sleep + " false"} onClick={() => setSleep(!sleep)}>сон</ButtonsAlerts>
                        <ButtonsAlerts className={habits + " false"} onClick={() => setHabits(!habits)}>привычки</ButtonsAlerts>
                        <ButtonsAlerts className={live + " false"} onClick={() => setLive(!live)}>жизнь</ButtonsAlerts>
                    </DivFilters>
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