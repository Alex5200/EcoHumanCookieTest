import ImgLogo from "../assets/icon/logo.png"
import { useState } from 'react';
/*
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');
    if (visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}); */


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
                <li className="navigation__list-item active">
                    <a style={{color: "#696969"}} href="#main">
                      здоровье
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a style={{color: "#696969"}} href="#cure">
                      тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a style={{color: "#696969"}} href="#license">
                      ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a  style={{color: "#72AB46"}}>
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
                <li className="navigation__list-item active">
                    <a style={{color: "#696969"}} href="#main">
                    здоровье
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a style={{color: "#696969"}} href="#cure">
                    тесты
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a style={{color: "#696969"}} href="#license">
                    ресуры
                    </a>
                </li>
                <li className="navigation__list-item">
                    <a  style={{color: "#72AB46"}}>
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
                <img src={ImgLogo}  loading="lazy" alt="logoImg" className="logoImg" />
            </div>
            {visibilityButton()}        
            {visibility()}
        </header>
    )
}