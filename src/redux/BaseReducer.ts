const initialState = {
    appName : ''
};

export const baseReducer = (state: any = initialState,action: any) => {
    console.info('basereducer',action.payload);
    switch(action.type){
        case 'app-name':
        return {...state, appName: action.payload}
    }
    return state;
}