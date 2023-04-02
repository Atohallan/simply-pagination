import styled from 'styled-components';

export const StyledTable = styled.table`
    width: 100%;
    box-shadow: 0px 0px 5px 5px #eee;
`

export const StyledTr = styled.tr`
    display: flex;
    justify-content: space-around;
    background: #eee;
    border-bottom: 1px solid white;
    padding: 1rem;
    text-align:start;
`

export const StyledTh = styled.th`
    text-align:center;
    width: 100%;
`

export const StyledTd = styled.td`
    background: transparent;
    text-overflow: ellipsis;
    overflow: hidden; 
    width: 100%; 
    height: 1.2em; 
    white-space: nowrap;
    text-align:center;
`