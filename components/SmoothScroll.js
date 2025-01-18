import React, { useEffect, useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';
const SmoothScroll = (props) => {
  const scrollbar = useRef(null);

  useEffect(() => {
    console.log(scrollbar.current);
  }, []);
  return (
    <div
      className="sample-container"
      style={{ maxHeight: '100vh', display: 'flex', width: '100%' }}
    >
      <Scrollbar
        ref={scrollbar}
        plugins={{
          overscroll: {
            effect: 'bounce',
          },
        }}
      >
        {props.children}
      </Scrollbar>
    </div>
  );
};

export default SmoothScroll;
