
import { useState } from 'react'
import './App.css'
import CourseName from './components/CourseName/CourseName'
import Courses from './components/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const remainingToast = () => toast("Credit Hour End You Can't add Course")
  const totalRemaining = () => toast("Total Credit Hours End You Cannot add Course  ")
  const [details, setDetails] = useState([]);
  const [hours, setHours] = useState(0);
  const [price, setPrice] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const handelAddToDetails = (props, Credit, Price) => {
    const minus = remaining - Credit;
    const hour = hours + Credit;

    setPrice(price + Price);

    if (hour > 20) {
      remainingToast()
    } else {
      setHours(hour);
      setDetails([...details, props]);
    }


    if (minus < 0) {
      totalRemaining()
    } else {
      setRemaining(minus);
    }
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Course Registration</h1>
      <div className='flex gap-3'>
        <Courses
          handelAddToDetails={handelAddToDetails}></Courses>
        <CourseName details={details} hours={hours} remaining={remaining}
          price={price}></CourseName>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  )
}

export default App
