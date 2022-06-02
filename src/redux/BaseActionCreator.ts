export const setAppName = (appName : any ) => {
    console.info('setAppName',appName);
    return (dispatch: any)=> {
        dispatch({type:'app-name', payload:appName})
    }
}