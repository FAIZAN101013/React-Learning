import React from 'react'
import '../components/User.css'

const userData = {
    firstName: 'Faizan',
    lastName: 'Patel',
    title: 'Student',
}

const User = () => {
    return (
        <div className="center-container">
            <div className="user-card">
                <p className="user-name">
                    {userData.firstName.toUpperCase()} {userData.lastName.toUpperCase()}
                </p>
                <p className="user-title">{userData.title}</p>
            </div>
        </div>
      
    )
}

export default User
