import { useState } from 'react';
import styled from 'styled-components';

const RealAboutUs = () => {




  return (
    <BodyWrap>
      <div className="options">
        <Option className="option active">
          <div className = "shadow"/>
          <div className = "label">
            <div className = "icon">
              <i>a</i>
            </div>
            <div className = "info">
              <div className = "main"> ABCD </div>
              <div className = "sub"> asdfasdf </div>
            </div> 
          </div>
        </Option>
        <Option className="option active">
          <div className = "shadow"/>
          <div className = "label">
            <div className = "icon">
              <i>a</i>
            </div>
            <div className = "info">
              <div className = "main"> ABCD </div>
              <div className = "sub"> asdfasdf </div>
            </div> 
          </div>
        </Option>
        <Option className="option active">
          <div className = "shadow"/>
          <div className = "label">
            <div className = "icon">
              <i>a</i>
            </div>
            <div className = "info">
              <div className = "main"> ABCD </div>
              <div className = "sub"> asdfasdf </div>
            </div> 
          </div>
        </Option>
        <Option className="option active">
          <div className = "shadow"/>
          <div className = "label">
            <div className = "icon">
              <i>a</i>
            </div>
            <div className = "info">
              <div className = "main"> ABCD </div>
              <div className = "sub"> asdfasdf </div>
            </div> 
          </div>
        </Option>




      </div>
    </BodyWrap>
  );
}

const BodyWrap = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 100vh;

  font-family : -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition : .25s;
`;

const Option = styled.div`
`
export default RealAboutUs;