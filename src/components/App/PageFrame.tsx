import React from 'react';

export interface PageFrameProps {
  component: any;
}

const Pageframe: React.FC<PageFrameProps> = (Props) => {

  const Component = Props.component

  return (

    <div id={'page-frame'}>
      <Component />
    </div>
  
  );
}

export default Pageframe;
