
import { useState } from 'react'
import './App.css'
import CourseName from './components/CourseName/CourseName'
import Courses from './components/Courses/Courses'

function App() {
  const [details, setDetails] = useState([]);
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const handelAddToDetails = (props, Credit, Price) => {
    setDetails([...details, props]);
    setHours(hours + Credit);
    setPrice(price + Price);
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Course Registration</h1>
      <div className='flex gap-3'>
        <Courses
          handelAddToDetails={handelAddToDetails}></Courses>
        <CourseName details={details} hours={hours} price={price}></CourseName>
      </div>
    </div>
  )
}

export default App
