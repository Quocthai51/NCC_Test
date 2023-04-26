import React from 'react'
import './NavItem.css'


const NavItem = (props) => {
  const isActive = props.isActive ? 'active' : ''
  return (
    <div className={`NavContainer ${isActive}`  }>{props.title}</div>
  )
}

export default NavItem