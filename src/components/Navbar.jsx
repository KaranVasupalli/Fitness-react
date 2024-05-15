import {Link} from 'react-router-dom'


const Navbar = ()=>{
    return(
        <>
            <div className=" flex justify-around h-20 items-center bg-[#2f3032] text-white">
                <h1 className=" text-2xl">FITGURU</h1>
                <div className=" flex gap-16  list-none cursor-pointer">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/exercise">EXERCISE</Link></li>
                </div>
            </div>
        </>
    )
}

export default Navbar