
import './App.css'
import CourseName from './components/CourseName/CourseName'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold text-center my-7'>Course Registration</h1>
      <div className='flex gap-3'>
        <Courses></Courses>
        <CourseName></CourseName>
      </div>
    </div>
  )
}

export default App
