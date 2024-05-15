import axios from 'axios'
import { useState, useEffect } from 'react'

const AllExercise = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://exercisedb.p.rapidapi.com/exercises',
                headers: {
                    'X-RapidAPI-Key': 'a2b663905cmshb33bbb326ce9a14p193b48jsn9a41b2fc751f',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };
            
            try {
                const response = await axios.request(options);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-center text-5xl mb-7">All Exercise</h1>
            <div className='flex flex-wrap gap-6 justify-center'>
            {
                data.map((post) => {
                    const { id, name, gifUrl } = post;
                    return (
                        
                        <div className=' border ' key={id}>
                            <h2>{name}</h2>
                            <img  src={gifUrl} alt={name} className=" h-[400px] w-[430px] " />
                        </div>
                        
                    );
                })
            }
            </div>
            
        </>
    );
}

export default AllExercise
