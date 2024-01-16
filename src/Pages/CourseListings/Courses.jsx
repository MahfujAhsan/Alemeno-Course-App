import { useEffect } from "react";
import { useState } from "react"
import Course from "./Course";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((data) => data.json())
            .then((result) => setCourses(result))
    }, []);
    console.log(courses)
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Alemeno Courses</h1>
            <div className="md:grid grid-cols-3 gap-x-12 md:mt-8">
                {
                    courses.map((course) => <Course key={course?.id} course={course} />)
                }
            </div>
        </div>
    )
}

export default Courses