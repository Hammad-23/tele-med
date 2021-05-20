const userRequest = () => {
    return{
        type: "USER_REQUEST"
    }
}

const userSuccess = () => {
    return{
        type: "USER_SUCCESS"
    }
}

const userError = () => {
return{
    type: "USER_ERROR"
}
}

export{
    userRequest,
    userSuccess,
    userError
}