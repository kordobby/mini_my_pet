import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import A1 from '../img/A1.png';
import A2 from '../img/A2.png';
import A5 from '../img/A5.png';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {

  const [ target, setTarget ] = useState(1); // onClick or MouseOver? 
  const [ mouseIn, setMouseIn ] = useState(false); 
  const navigate = useNavigate();

  const onMouseOverHandler = (event, item) => {
    setTarget(item);  // 마우스 오버 시 해당 item 값으로 target 변경
    setMouseIn(Boolean(event));
  }

  const onMouseLeaverHandler = (event) => {
    setTarget(1);  // mouseover 시 targer 제거
    setMouseIn(!event);
    console.log(!event);
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
            onMouseOver = {(event) => onMouseOverHandler(event, 3)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 3, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A5})` }}>
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
              <i className="fas fa-tree"></i>
              </div>
              <div className="info">
                <div className="main">Seungjun Koe</div>
                <div className="sub">Back-end Developer</div>
              </div>
            </div>
          </div>

          <div
            onMouseOver = {(event) => onMouseOverHandler(event, 4)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 4, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A1})` }}>
            <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                      <i className="fas fa-tint"></i>
                  </div>
                  <div className="info">
                    <div className="main">Hee Jue</div>
                    <div className="sub">Back-end Developer</div>
                  </div>
                </div>
              </div>
            <div
            onMouseOver = {(event) => onMouseOverHandler(event, 5)}
            onMouseLeave = {onMouseLeaverHandler}
            id = {generateIdName(target, 5, mouseIn)}
            className="option"
            style = {{ backgroundImage : `url(${A5})` }}>
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">
                  <i className="fas fa-sun"></i>
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