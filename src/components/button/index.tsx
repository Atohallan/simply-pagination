import React, { ReactNode } from 'react';
import {StyledButton} from './styles/index';

type MyComponentProps = {
    onClick1: () => void,
    onClick2: () => void,
} & React.HTMLAttributes<HTMLElement>;

export default function Button({children, ...rest}: MyComponentProps){
    return(
        <>
            <StyledButton onClick={rest.onClick2}>Next</StyledButton>
            <StyledButton onClick={rest.onClick1}>Prev</StyledButton>
        </>
    )
}