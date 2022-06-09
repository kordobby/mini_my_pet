/* GlobalStyle.jsx */
import { createGlobalStyle } from 'styled-components';

/* Normalize :: 여러 브라우저마다 기본적으로 설치된 스타일을 지워줌 */
import { reset } from "styled-reset";


const GlobalStyle = createGlobalStyle `
${reset} 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: cornflowerblue;
    ::-webkit-scrollbar { 
        display: none; /* Chrome, Safari, Opera*/
    }
}
:root {

}
`;

export default GlobalStyle;