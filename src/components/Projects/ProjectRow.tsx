import React from 'react';
import { projectProps } from './Projects';
import styled, { keyframes } from 'styled-components';

export interface projectRowProps extends projectProps {
  index: number
}

const ProjectRow: React.FC<projectRowProps> = (Props) => {

  const descriptionBlockExpand = keyframes`{
    from {
      opacity: 0;
      transform: translateY(250px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }`;

  const DescriptionBlock:any = styled.div`{
    height: auto;
    overflow: hidden;
    animation: ${descriptionBlockExpand} 0.25s ease-in-out;
    animation-delay: ${( (props:any) => (props.delay * 100) + 0.5)}s;
    animation-fill-mode: forwards;
    opacity: 0;
  }`;

  return (

    <DescriptionBlock className={'row'} delay={(Props.index/1000)}>

      <div className={'header-wrapper'}>
        <h2>{Props.name}</h2>
      </div>
      <p className={'small-text'}>{Props.description}</p>

    </DescriptionBlock>
  );
}

export default ProjectRow;
