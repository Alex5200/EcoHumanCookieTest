import { useState } from "react";
import Header from "../header/header";
import styled from "styled-components";
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
`
export default function TestFilter(){
    const [alert, setAlert] = useState(false);
    const Edits = () =>{
        setAlert(true);
        console.log(true)
    }
    return(
        <div>
            <Header/>
            <TestDiv>
                <HeaderText>ТЕСТЫ</HeaderText>
                <TagOpener>
                    <ButtonFilter onClick={Edits}>теги</ButtonFilter> 
                </TagOpener>
            </TestDiv>
        </div>
    )
}