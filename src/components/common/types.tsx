import { JSX, ReactNode } from 'react';

export type ChildrenProps = string | JSX.Element | JSX.Element[];
export type PropsWithChildren<P> = P & { children?: ReactNode };
