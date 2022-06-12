/* GlobalStyle.jsx */
import { createGlobalStyle } from 'styled-components';
import '../GlobalStyled/GlobalStyled.module.css'
import { normalize } from "styled-normalize";

/* Normalize :: 여러 브라우저마다 기본적으로 설치된 스타일을 지워줌 */
import { reset } from "styled-reset";


const GlobalStyle = createGlobalStyle `
${reset}
${normalize}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: white;
    ::-webkit-scrollbar { 
        display: none; /* Chrome, Safari, Opera*/
    }
}
:root {
    --blue : #0F4A63;
    --red : #EF3B44;
    --yellow : #EDBC67;
    --bg : #FFEEDA;
    --post : #DBBFA0;
}
`;

export default GlobalStyle;