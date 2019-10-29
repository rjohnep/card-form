import React, { FC } from 'react';

export const Icon: FC<{
  className: string;
  icon: { id: string; viewBox: string };
}> = (props) => (
  <svg viewBox={props.icon.viewBox} className={props.className}>
    <use xlinkHref={`#${props.icon.id}`} />
  </svg>
);
