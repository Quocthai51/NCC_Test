import React from 'react'
import './LeftSlide.css'
import NavItem from '../NavItem/NavItem'

const leftSlide = () => {

  return (
    <div className='container'>
        <NavItem title='Home' isActive={true} />
        <NavItem title='Services' />
        <NavItem title='News' />
        <NavItem title='Blog' />
        <NavItem title='Contact' />
    </div>
  )
}

export default leftSlide