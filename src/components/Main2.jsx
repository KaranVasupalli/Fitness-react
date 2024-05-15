import axios from 'axios'
import { useState, useEffect } from "react"

const Main2 = ()=>{
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

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



    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredData = data.filter(exercise => 
        exercise.name.toLowerCase().includes(search.toLowerCase())
    );


    return(
        <>
            <div className=" text-center flex flex-col gap-10 mt-10 mb-4">
                <h1 className=" text-3xl">Awesome Exercises You Should Know Search Exercises</h1>
                <div className=" flex items-center justify-center gap-3">
                    <input
                     value={search}
                     onChange={handleSearchChange}
                     className="border-2 px-3 py-3 border-red-500 text-xl"  type="text" name="" id="" placeholder="Search exercise" />
                    <button className="text-2xl px-4 py-3 text-black bg-red-400 rounded-lg">Submit</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-5 justify-center h-[500px]'>
                {
                    filteredData.map((post) => {
                        const { id, name, gifUrl } = post;
                        return (
                            <div className='border p-3 w-[400px]' key={id}>
                                <h2>{name}</h2>
                                <img src={gifUrl} alt={name} className="h-36" />
                            </div>
                        );
                    })
                }
            </div>       
        </>
    )
}

export default Main2