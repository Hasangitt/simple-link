
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <>
      <div className='bg-black'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/26/You_Have_Been_Hacked!.jpg" alt="" />
      </div>
      <div>
        <h1 className='text-green-500 text-xl font-bold mt-5'>If you want to recover your id, You have only 5 seconds.</h1>
      </div>
      <div>
        <Link to="/haha"><button className='border px-4 py-2 rounded-lg mt-5 text-white font-semibold'>Click Here</button></Link>
      </div>
    </>
  )
}

export default App
