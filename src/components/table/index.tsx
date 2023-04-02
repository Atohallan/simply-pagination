import React from 'react';
import {StyledTable, StyledTr, StyledTd, StyledTh} from './styles/index';

type MyComponentProps = {
    _tabledatas: Array<string>,
    name: Array<string>
} & React.HTMLAttributes<HTMLElement>;

type ResultType = {
    [key: string] : any
}

export default function Table({children, ...rest}: MyComponentProps){

    const shareResult: ResultType = rest._tabledatas;

    return(
        <StyledTable {...rest}>
            <thead>
                <StyledTr>
                    <StyledTh>{rest.name[0]}</StyledTh>
                    <StyledTh>{rest.name[1]}</StyledTh>
                    <StyledTh>{rest.name[2]}</StyledTh>
                    <StyledTh>{rest.name[3]}</StyledTh>
                    <StyledTh>{rest.name[4]}</StyledTh>
                    <StyledTh>{rest.name[5]}</StyledTh>
                    <StyledTh>{rest.name[6]}</StyledTh>
                </StyledTr>
            </thead>
            <tbody>
                {
                    shareResult.map((item : ResultType) => 
                        <StyledTr key={item["ID"]}>
                            <StyledTd>{item["ID"]}</StyledTd>
                            <StyledTd>{item["JobTitle"]}</StyledTd>
                            <StyledTd>{item["EmailAddress"]}</StyledTd>
                            <StyledTd>{item["FirstNameLastName"]}</StyledTd>
                            <StyledTd>{item["Email"]}</StyledTd>
                            <StyledTd>{item["Phone"]}</StyledTd>
                            <StyledTd>{item["Company"]}</StyledTd>
                        </StyledTr>
                    )
                }
            </tbody>
        </StyledTable>
    )
}