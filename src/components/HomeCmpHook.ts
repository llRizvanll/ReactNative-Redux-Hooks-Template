import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/ActionCreator";

export const CmpHook = (props: any ) => {
    const [data,setData] = useState();
    const base =  useSelector((state: any) => state.baseReducer);
    const API_PATH = 'https://jsonplaceholder.typicode.com/posts';
    const TEXT_1 : string = "This is the first Text to be shown...";
    

    const dispatch = useDispatch();

    //dispatchers to base reducers
    const {
        setAppName
    } = bindActionCreators(actionCreators,dispatch);

    useEffect(() => {
        setAppName(TEXT_1);
        
    },[]);

    useEffect(() => {
        console.info('hook',base.appName);
        setData(base.appName);
    });

    const updateTheUIText = (name: any) => {
        setAppName(name);
        const results = getResults();
        results.then((_)=> console.info('results',JSON.stringify(_)));
    }

    const getResults = async () : Promise<any> => {
        return await fetchLatestPosts();
    }

    const fetchLatestPosts = async () : Promise<any> => {
        return fetch(API_PATH,{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
        }).then((response) => response.json())
        .then((_)=>_)
        .catch((error) => {
            console.error(error);
        })
    }

    return{
        data,
        updateTheUIText
    };   
}