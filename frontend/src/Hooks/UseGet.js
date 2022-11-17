import { message } from "antd";
import { useEffect, useState } from "react";

const UseGet = ((url, initialValue) => {
    const [data,setData] = useState(initialValue);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() =>{
        async function fetchData() {
            setLoading(true);
            setError(false);

            fetch(url).then((res) =>  {
                console.log('begin fetch')
                if(res.ok){
                    console.log('all good')
                    return res.json()
                }
                else{
                    console.log('error')
                    throw new Error('There was a problem fetching that data')
                }
            })
            .then(
                (res) => {
                    console.log(res.name);
                    setData(res);
                    setLoading(false);
                }
           )
           .catch((error) =>
            message.error(error)
           );
        }
        fetchData();
    }, [url, refresh])

    return {data, isLoading, isError, refresh, setRefresh}
})

export default UseGet;