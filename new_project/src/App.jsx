
//style
import './App.css'



//Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import UserList from './components/userList/UserList'
import NewUserForm from './components/newuser/NewUserForm'

import { useState } from 'react'




function App() {

  const [users, setUsers] = useState([])
  
  const [showModal, setShowModal] = useState(false)
  

  // Close modal
  const closeModaL = (e) => {
    if (e.target.className === 'overlay') setShowModal(false)
  }

  const closeModalKey = (e) => {
    if (e.code === 'Escape') setShowModal(false)
  }

  const pushUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
  }

    return (
      <div className='App' onClick={closeModaL} onKeyDown={closeModalKey}>
        <Navbar userLength={users.length}/>
        <main className='main'>
          {!users.length && <h1 className='no-users'>No Users</h1>}
          <button type='button' onClick={() => setShowModal(true)} className="create-user">Create Users</button>
          <UserList users={users} setUsers={setUsers}/>
          {showModal &&  <NewUserForm pushUser={pushUser} setShowModal={setShowModal}/>}
        </main>
        
        <Footer/>
      </div>
    )
}

export default App
