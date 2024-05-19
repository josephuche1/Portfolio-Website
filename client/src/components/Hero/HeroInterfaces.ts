import { CSSProperties } from 'react';


export default interface IHeroStyles {
    container: CSSProperties;
    InnerBox: CSSProperties;
    overlay: CSSProperties;
    title: CSSProperties;
    body: CSSProperties;
}

export interface IHeroProps {
    title: string;
    body: string;
}
