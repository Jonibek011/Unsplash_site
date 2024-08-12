//style
import { useState } from 'react'
import './NewUserForm.css'
import {v4 as uuidv4} from 'uuid'

function NewUserForm({pushUser, setShowModal}) {


    const [user, setUser] = useState({
        id: uuidv4(),
        image: '',
        firstName: '',
        lastName: '',
        age: null,
        from: '',
        job: '',
        gender: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        pushUser(user)
        setShowModal(false)
    }

  return (
    
        <div className="overlay">
             <div className="modal">
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Image URL:</span>
                        <input type="url" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, image:e.target.value}
                            })
                        }} />
                    </label>
                    <label>
                        <span>First name:</span>
                        <input type="text" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, firstName:e.target.value}
                            })
                        }}/>
                    </label>
                    <label>
                        <span>Last name:</span>
                        <input type="text" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, lastName:e.target.value}
                            })
                        }}/>
                    </label>
                    <label>
                        <span>Age:</span>
                        <input type="text" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, age:e.target.value}
                            })
                        }}/>
                    </label>
                    <label>
                        <span>From:</span>
                        <input type="text" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, from:e.target.value}
                            })
                        }}/>
                    </label>
                    <label>
                        <span>Job:</span>
                        <input type="text" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, job:e.target.value}
                            })
                        }}/>
                    </label>
                    <label>
                        Gender: 
                        <small> Male</small>
                        <input type="radio" name='gender' onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, gender:e.target.value}
                            })
                        }}/>
                        <small> Femail</small>
                        <input type="radio" name="gender" onChange={(e) => {
                            setUser((prev) => {
                                return {...prev, gender:e.target.value}
                            })
                        }}/>
                    </label>
                    <button className='modal-btn'>Submit</button>
                </form>
            </div>
        </div>
  
  )
}

export default NewUserForm