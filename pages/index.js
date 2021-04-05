import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    const [data, setData] = useState([])
    useEffect(async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data)
    }, [])
    return(
        <div className="container" style={{background: "black"}}>
            {data&& data.map((a) => {
                return (
                    <div className="jumbotron">
                        <h4 style={{color: "forestgreen"}}>{a.id} { a.title}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default App;