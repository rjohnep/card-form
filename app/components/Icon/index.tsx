import React, { FC } from 'react';

type IconT = {
  className: string;
  icon: { id: string; viewBox: string };
};

export const Icon: FC<IconT> = (props: IconT) => (
  <svg viewBox={props.icon.viewBox} className={props.className}>
    <use xlinkHref={`#${props.icon.id}`} />
  </svg>
);
