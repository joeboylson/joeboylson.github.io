import React from 'react';
import styled, { keyframes } from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'

const NavContent: React.FC = () => {

  const NavLinkMovement = keyframes`
    from {
      transform: translateX(-250px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }`

  const ActiveNavLinkHighlight = keyframes`{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`;

  const NavLink: any = styled.div`{
    transform: translateX(-250px);
    opacity: 0;
    animation: ${NavLinkMovement} 0.5s;
    animation-delay: ${(props: any) => (props.delay / 1000) + 0.125}s;
    animation-fill-mode: forwards;

    ::before {
      opacity: 0;
      background-color: #e0e0e0;
      animation: ${ActiveNavLinkHighlight} 0.5s;
      animation-delay: ${(props: any) => (props.delay / 1000) + 0.5}s;
      animation-fill-mode: forwards;
    }
  }

  }`;

  return (
    <div id={'nav-content'}>
    
      <h2>
        <NavLink delay={0} className={window.location.pathname === '/' ? 'active' : ''}>
          <Link to={'/'}>HOME</Link>
        </NavLink>
      </h2>

      <h2>
        <NavLink delay={50} className={window.location.pathname === '/projects' ? 'active' : ''}>
          <Link to={'/projects'}>PROJECTS</Link>
        </NavLink>
      </h2>

      <h2>
        <NavLink delay={100} className={window.location.pathname === '/gallery' ? 'active' : ''}>
          <Link to={'/gallery'}>GALLERY</Link>
        </NavLink>
      </h2>

      <h2>
        <NavLink delay={150} className={window.location.pathname === '/contact' ? 'active' : ''}>
          <Link to={'/contact'}>CONTACT</Link>
        </NavLink>
      </h2>

    </div>
  );
}

export default NavContent;
