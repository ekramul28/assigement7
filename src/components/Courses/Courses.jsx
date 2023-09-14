import { useEffect, useState } from "react";
import Course from "../Course/course";
// import course from ''

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="w-5/6 grid grid-cols-3 gap-3">
            {
                courses.map((course, index) => <Course key={index} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;