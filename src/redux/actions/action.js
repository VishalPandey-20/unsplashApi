

export const apiCall = () => {
    return {
        type: "api_call"
    }
}

export const getDataFromApi = (data) => {
    // console.log(data,"dfghjk");
    return {
        type: "get_data_from_api",
        payload: data
    }
}

export const numberFun = ()=>{
    return {
        type:"inc_num"
    }
}

export const input = (data)=>{
    // console.log("data>>>",data);
    return {
        type:"user_input",
        payload:data
    }
}

export const serachApiCall = ()=>{
    return {
        type:"search_api_call"
    }
}

export const getDataFromSearchApi = (data)=>{
    return {
        type:'get_data_from_search_api',
        payload:data
    }
}