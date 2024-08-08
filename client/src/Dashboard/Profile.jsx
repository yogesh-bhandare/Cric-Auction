import React, { useEffect, useState } from 'react'
import api from '../api'

const Profile = () => {
  const [user, setUser] = useState([])

  const getUserData = () => {
    api.get("user/")
    .then((response) => setUser(response.data))
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    getUserData()
  }, [])
  
  return (
    <div>
      <h1>Profile</h1>
      <p>User: {user.username}</p>
    </div>
  )
}

export default Profile