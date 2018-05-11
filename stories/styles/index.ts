// You can create custom styles to be used inside Storybook here
import { CSSProperties } from 'react';

export const flex = { display: 'flex' };
export const flexCenter = { ...flex, justifyContent: 'center', alignItems: 'center' };

export const layout: { [key: string]: CSSProperties } = {
  flex,
  flexCenter,
};
