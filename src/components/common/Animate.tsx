import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ChildrenProps } from './types';

export interface AnimateProps {
  sx?: object;
  type?: string;
  delay?: number;
  children?: ChildrenProps;
}

const Animate = ({ sx, ...props }: AnimateProps) => {
  const [translateY, setTranslateY] = useState(1000);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTranslateY(0);
      setOpacity(1);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (props.type === 'fade') {
    return (
      <Box
        sx={{
          ...sx,
          transition: 'opacity 1s ease',
          opacity: opacity,
          transitionDelay: props.delay + 's' || 'unset',
        }}
      >
        {props.children}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        ...sx,
        transform: `translateY(${translateY}px)`,
        transition: 'transform 1s ease, opacity 2s ease',
        opacity: opacity,
        transitionDelay: props.delay + 's' || 'unset',
      }}
    >
      {props.children}
    </Box>
  );
};

export default Animate;
