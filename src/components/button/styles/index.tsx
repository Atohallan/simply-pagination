import styled from 'styled-components';

export const StyledButton = styled.button`
    border: 2px solid white;
    box-shadow: 0px 0px 5px 5px #eee;
    
    background: white;
    color: black;
    cursor: pointer;
    width: 6rem;
    height: 2rem;
    float: right;
    margin: 2rem 0 0 2rem;

    &:hover{
        background: #eee;
        transition: all 0.7s;
        color: white;
    }
`