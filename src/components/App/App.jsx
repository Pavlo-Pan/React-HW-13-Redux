
import UserList from '../UserList/UserList'

import FIlter from '../FIlter/FIlter'

import './App.css'

function App() {
  return (
    <>
       <div className='container'>
      <h1>User List Filter</h1>
      <FIlter />
      <UserList />
    </div>
    </>
  )
}

export default App
