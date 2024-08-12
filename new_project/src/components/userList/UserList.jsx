//style

import './UserList.css'


function UserList({users, setUsers}) {

  const handleDelete = id => {
    setUsers((prev) => {
      return (
        prev.filter((p) => {
          return p.id !== id
        })
      )
      
    })
  }

  return (
    <div className='userList'>
        <div className="userList-container container">
            {users.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <div className="card-inner">
                      <img src={user.image} alt="" />
                      <h3>{user.firstName} {user.lastName} {user.age} age </h3>
                      <p>from: {user.from}</p>
                      <p>job: {user.job}</p>
                      <p>gender: {user.gender}</p>
                      <button className='modal-btn' onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default UserList