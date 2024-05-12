import styled from "styled-components";
import ImgLogo from "../assets/icon/logo.png"
import { useState } from 'react';
const Texts = styled.div`
    margin-top:25px
`
const TextsA = styled.a`
    position: relative;
    top: 0.4em;
    color: #4A860B;
    font-size: 26px;
    font-family: Gilroy-Medium;
`
const StrogColor = styled.strong`
    color: #B4D21C;
    font-size: 26px;
    font-family: Cygre-Black;
`
export default function Header(){
    const [stateNav, setStateNav] = useState(false);
    function clicks(){
        setStateNav(!stateNav);
        console.log(stateNav);
    }
    function visibility(){
        if(stateNav){
            return (
            <nav className="navigation">
                <ul id="primary-navigation" data-visible="true" className="primary-navigation flex">
                <li className="navigation__list-item">
                    <a href="#main">
                      здоровье
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#cure">
                      тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#license">
                      ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a>
                      чек лист привычек
                    </a>
                </li>
            </ul> 
        </nav>   
            )
        }else{
        return(
            <nav className="navigation"> 
            <ul id="primary-navigation" data-visible="false" className="primary-navigation flex">
                <li className="navigation__list-item ">
                    <a href="#main">
                    здоровье
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#cure">
                    тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a href="#license">
                    ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a >
                    чек лист привычек
                    </a>
                </li>
            </ul>  
            </nav>  
            )
        }
    }
    function visibilityButton(){
        if(stateNav){
            return(
            <button className="mobile-nav-toggle" onClick={clicks} aria-controls="primary-navigation" aria-expanded="true"><span className="sr-only"></span></button>)
    
        }else{
            return(
            <button className="mobile-nav-toggle" onClick={clicks} aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only"></span></button>)
        }
    }

    return(
        <header className="primary-header flex">
            <div className="logoImg-container">
                <div>
                    <img src={ImgLogo}  loading="lazy" alt="logoImg" className="logoImg" />
                </div>
                <Texts href="main.html">
                    <TextsA>ЭКО<StrogColor>СОЗНАНИЕ</StrogColor></TextsA>
                </Texts>
            </div>
            {visibilityButton()}        
            {visibility()}
        </header>
    )
}