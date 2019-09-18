import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from 'antd';
import NavContent from './NavContent';

const Nav: React.FC = () => {

  const [expanded, setExpanded] = React.useState(false)
  const [from, setFrom] = React.useState('-100%')
  const [fromOpacity, setFromOpacity] = React.useState(0)
  const [to, setTo] = React.useState('-100%')
  const [toOpacity, setToOpacity] = React.useState(0);

  const toggleMenu = (setExpandedValue: boolean) => {

    if (expanded) {
      setFrom('0%')
      setTo('-100%')
      setToOpacity(0)
      setFromOpacity(1)

    } else {
      setFrom('-100%')
      setTo('0%')
      setToOpacity(1)
      setFromOpacity(0)
    }

    setExpanded(setExpandedValue)

  }

  const NavExpandMovement = keyframes`
  from {
    transform: translateX(${from ? from : 1});
    opacity: ${fromOpacity}
  }
  to {
    transform: translateX(${to ? to : 1});
    opacity: ${toOpacity}

  }
}`

  const NavExpand = styled.div`{

    ::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      animation: ${NavExpandMovement} ${!expanded ? '0.125' : '0'}s;s;
      animation-delay: ${expanded ? '0.25s' : '0s'};
      animation-fill-mode: forwards;
      z-index: -1;
    }

    ::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 42%;
      min-width: 320px;
      height: 100vh;
      background-color: ghostwhite;
      animation: ${NavExpandMovement} 0.25s ease-out;
      animation-delay: ${!expanded ? '0.125' : '0'}s;
      animation-fill-mode: forwards;
      z-index: -1;
    }

  }`;

  return (

    <div
      id={'nav-inner'}
      onClick={() => toggleMenu(!expanded)}
      style={{
        backgroundColor: expanded ? 'ghostwhite' : '',
        color: expanded ? '#1f1f1f' : ''
      }}
    >
      <Icon type="ellipsis">{expanded && <p>click anywhere to exit</p>}</Icon>
      <NavExpand />




      {expanded &&
        <div>
          <div id={'nav-info'}>
            <p className={'small-text'}>Click anywhere to exit</p>
          </div>
          
          <NavContent />
        </div>

      }
    </div>
  );
}

export default Nav;
