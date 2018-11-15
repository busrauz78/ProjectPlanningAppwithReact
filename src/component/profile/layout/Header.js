import React from 'react'

const Header =({profile}) =>{
  
  return (
      <div className="container">
    <div className="card">
        <div className="center">
        <i className="fas fa-user-circle large"></i>
        </div>
        <div className="card-content center">
          {profile.userName}
        </div>
        
      </div>  </div>
  )
}

export default  Header;