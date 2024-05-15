import AllExercise from "../components/AllExercise";
import Navbar from "../components/Navbar";

const Exercise = ()=>{
    return(
        <>
            <Navbar />
            <h1 className="text-center text-5xl mb-7">All Exercise</h1>
            <AllExercise />
        </>
    )
}

export default Exercise;