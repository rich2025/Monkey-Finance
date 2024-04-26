import { useState, useEffect} from 'react';
import axios from 'axios';

const About = () => {
  const [array, setArray] = useState([]);

    const fetchAPI = async () => {
      const response = await axios.get("http://localhost:8080/api/stockrecommend");
      console.log(response.data);
      setArray(response.data);
    };

    useEffect(() => {
      fetchAPI();
    },[]);

    return (
      <div className="flex flex-col w-full min-h-screen flex-grow bg-gradient-to-b from-yellow-300 to-yellow-100 flex items-center justify-center">
      {
        array.map((data, index) => (
          <span key = {index}>{data}</span>

        ))
      }


  
    </div>
    );
  }
  
  export default About