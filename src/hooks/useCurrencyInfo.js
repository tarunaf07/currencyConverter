import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    
    const [data,setData]=useState({})
    useEffect(()=>{

        const url = `https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${currency}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd4c4d5f144mshbaa04409554bb4fp15fd6ajsn1949d2a0053f',
		'x-rapidapi-host': 'currency-converter-pro1.p.rapidapi.com'
	}
};
        fetch(url,options)
        .then((res)=>res.json()).then((res)=>setData(res.result))
    },[currency])
    return data;
}

export default useCurrencyInfo;