import { useEffect, useState } from "react";
import { ElementList } from './elementList'


export function TodoItem (){
    const [data, setData] = useState([]);
    const [erorr, setError] = useState('')


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then((response)=> response.json())
        .then((response) => setData(response))
        .catch((erorr) =>  setError(erorr))
        
    }, [])


    return (
        <div>
        {data.map((item) => 
        <ElementList key={item.id} title={item.title} checked={item.checked} />
    )}
    </div>
    )
    
}