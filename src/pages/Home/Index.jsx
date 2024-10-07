import React ,{useCallback,useState} from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () =>{

    const [value, setValue] = useState();
    const navigate = useNavigate();
    const HandleJoinRoom= useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value]);
    return <div>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Enter Room Code' />
        <button onClick={HandleJoinRoom}>Join</button>
    </div>
}

export default HomePage;