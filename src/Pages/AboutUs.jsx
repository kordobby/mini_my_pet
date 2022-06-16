import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faRocket, faUserAstronaut, faPaw, faCat } from "@fortawesome/free-solid-svg-icons";

import A1 from '../img/A1.png';
import A2 from '../img/A2.png';
import A3 from '../img/A3.png';
import A4 from '../img/A4.png';
import A5 from '../img/A5.png';

const AboutUs = () => {

  const [ target, setTarget ] = useState(1); // onClick or MouseOver? 
  const [ mouseIn, setMouseIn ] = useState(false); 

  const onMouseOverHandler = (event, item) => {
    setTarget(item);  // 마우스 오버 시 해당 item 값으로 target 변경
    setMouseIn(Boolean(event));
  }

  const onMouseLeaverHandler = (event) => {
    setTarget(1);  // mouseover 시 targer 제거
    setMouseIn(!event);
  };

  const generateIdName = (target, itemValue, isMouseIn) => {
    if (itemValue === target && isMouseIn) {
      return "active"
    }
    if (itemValue === target || mouseIn) {
      return 'normal';
    }
    return 'default';  // ? 필요없으려나
  };

  return (
    <div className = "body__wrap">
      <div className="body__title">
        <span style = {{color : 'black', fontSize : '50px'}}>About Us !</span>
      </div>
      <p style = {{marginBottom : '10px'}}>세상의 모든 귀여운 아이들을 사랑하는 개발자들이랍니다.</p>
      <p style = {{marginBottom : '20px'}}>그리고 우리들도 귀엽답니다.</p>
      <div className = "body__test">
        <div className="options">
          <div
            onClick = {()=> window.open('https://github.com/kordobby', '_blank')}
            onMouseOver = {(event) => onMouseOverHandler(event, 1)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 1, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A1})`, cursor : 'pointer'}}>
            <div className="shadow">
            </div>
            <div className="label">
              <div className="icon">
              <FontAwesomeIcon icon = {faGamepad} />
              </div>
              <div className="info">
                <div className="main">YOON LEE</div>
                <div className="sub">Front-end Developer</div>
              </div>
            </div>
          </div>

          <div
            onClick = {()=> window.open('https://github.com/devPeterLim/', '_blank')}
            onMouseOver = {(event) => onMouseOverHandler(event, 0)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 0, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A2})` }}>
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
              <FontAwesomeIcon icon = {faRocket} />
              </div>
              <div className="info">
                <div className="main">DAEKYUN LIM</div>
                <div className="sub">Front-end Developer</div>
              </div>
            </div>
          </div>

          <div
            onClick = {()=> window.open('https://github.com/kokomong2', '_blank')}
            onMouseOver = {(event) => onMouseOverHandler(event, 3)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 3, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A3})` }}>
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
              <FontAwesomeIcon icon = {faCat} />
              </div>
              <div className="info">
                <div className="main">Seungjun Koe</div>
                <div className="sub">Back-end Developer</div>
              </div>
            </div>
          </div>

          <div
            onClick = {()=> window.open('https://github.com/Joo-hui', '_blank')}
            onMouseOver = {(event) => onMouseOverHandler(event, 4)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 4, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A4})` }}>
            <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <FontAwesomeIcon icon = {faPaw} />
                  </div>
                  <div className="info">
                    <div className="main">Hee Jue</div>
                    <div className="sub">Back-end Developer</div>
                  </div>
                </div>
              </div>

            <div
            onClick = {()=> window.open('https://github.com/sungyoungk', '_blank')}
            onMouseOver = {(event) => onMouseOverHandler(event, 5)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 5, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A5})` }}>
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                <FontAwesomeIcon icon = {faUserAstronaut} />
                </div>
                <div className="info">
                  <div className="main">SungYoung Kim</div>
                  <div className="sub">Back-end Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;