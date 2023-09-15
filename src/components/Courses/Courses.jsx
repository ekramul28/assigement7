import { useEffect, useState } from "react";
import Course from "../Course/course";
import PropTypes from 'prop-types';

const Courses = ({ handelAddToDetails }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="w-3/4 grid grid-cols-3 gap-3">
            {
                courses.map((course, index) => <Course key={index} course={course}
                    handelAddToDetails={handelAddToDetails}></Course>)
            }
        </div>
    );
};
Courses.propTypes = {
    handelAddToDetails: PropTypes.func,
    handelAddToHours: PropTypes.func
}
export default Courses;