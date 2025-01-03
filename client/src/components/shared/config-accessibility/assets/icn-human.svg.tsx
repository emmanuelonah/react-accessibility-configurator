/* eslint-disable max-len */
import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'IcnHuman';

type PrimitiveSvgProps = React.ComponentPropsWithoutRef<'svg'>;
type IcnHumanElement = React.ElementRef<'svg'>;
interface IcnHumanProps extends PrimitiveSvgProps {
  fill?: string;
  width?: string;
  height?: string;
}

const IcnHuman = React.forwardRef<IcnHumanElement, IcnHumanProps>(({ fill, width, height, ...restProps }, forwardedRef) => (
  <svg {...restProps} ref={forwardedRef} width={width} height={height} fill={fill}>
    <path d="M16 9.6A1.8 1.8 0 1 0 16 6a1.8 1.8 0 0 0 0 3.6zm.5 10.4a.5.5 0 0 0-1 0l-1.4 5.8a.7.7 0 0 1-1 .5.7.7 0 0 1-.5-.9l1.2-7.7v-3.5a1 1 0 0 0-.8-1l-4.4-.6a.7.7 0 0 1-.6-.7.7.7 0 0 1 .7-.7h14.7a.7.7 0 0 1 .6 1.2.7.7 0 0 1-.5.2l-4.4.7a1 1 0 0 0-.8.9v3.5l1.2 7.7a.7.7 0 0 1-.8.9.7.7 0 0 1-.7-.5L16.5 20z" />
  </svg>
));

if (__dev__) {
  IcnHuman.displayName = DISPLAY_NAME;
}

IcnHuman.defaultProps = {
  fill: '#000',
  height: '32',
  width: '32',
};

export { IcnHuman };
