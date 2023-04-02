import React from 'react';

import Table from '../components/table';
import Button from '../components/button';

import { requestData, controlDataNumber } from '../actions';

const Index =  () => {

    const [pagenum, Setpagenum] = React.useState(0);
    const [datas, SetData] = React.useState([]);

    const namefield = [ "ID", "JobTitle", "EmailAddress", "FirstNameLastName", "Email", "Phone", "Company" ];

    const onInit = async (pagenum: number) => {
        const _result = await requestData(pagenum);
        const _returned_result = await controlDataNumber(_result);
        SetData(_returned_result);
    }

    const onPrev = () => {
        Setpagenum(pagenum === 0 ? 0 : pagenum - 10);
    }

    const onNext = () => {
        Setpagenum(pagenum + 10);
    }

    React.useEffect( () => {
        onInit(pagenum);
    }, [pagenum]);

    return(
        <>
            <Table _tabledatas={datas} name={namefield}>{datas}</Table>
            <Button onClick1={onPrev} onClick2={onNext} />
        </>
    )
}

export default Index;