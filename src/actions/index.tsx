import Axios from 'axios';

export const requestData = async (index : number) => {
    try {
        const res = await Axios.get(`https://give-me-users-forever.vercel.app/api/users/${index}/next`);
        return res.data.users;
    } catch (error) {
        return error;
    }
}

export const controlDataNumber = async (data : Array<string>) => {
    var _result : any = []
    for(var i = 0; i < data.length; i++) {
        if(i > 9){
            return _result;
        }
        _result.push(data[i]);
    }
    return _result;
}