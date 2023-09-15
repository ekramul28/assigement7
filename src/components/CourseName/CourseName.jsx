import PropTypes from 'prop-types'
const CourseName = ({ details, hours, price }) => {
    return (
        <div className="w-1/4 ">
            <div className='bg-[#fff] p-4 rounded-xl'>
                <h1 className="text-xl font-bold">Course Name</h1>
                <div className='border-b-2'>
                    {
                        details.map((detail, index) => <li className="list-decimal my-2 text-[#6e6c6c]" key={index}>{detail.course_name}</li>)
                    }
                </div>
                <p className='text-sm font-medium border-b-2 py-3'>Total Credit Hour : {hours}</p>
                <p className='text-lg font-medium  py-3'>Total Price : {price} BD</p>
            </div>
        </div>
    );
};
CourseName.propTypes = {
    details: PropTypes.object,
    hours: PropTypes.number,
    price: PropTypes.number
}
export default CourseName;