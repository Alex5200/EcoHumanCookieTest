import CygreBlack from "../assets/fonts/Cygre-Black.ttf";
import CygreExtraBold from "../assets/fonts/Cygre-ExtraBoldIt.ttf";
import Gilroy from "../assets/fonts/Gilroy-Medium.ttf";
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
    font-family: 'CygreBlack';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CygreBlack});
}
@font-face {
    font-family: 'Gilroy';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${Gilroy});
}
@font-face {
    font-family: 'CygreExtraBold';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${CygreExtraBold});
}
`


