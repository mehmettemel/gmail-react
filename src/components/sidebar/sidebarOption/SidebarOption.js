import React, { useState } from 'react'
import './SidebarOption.scss'

function SidebarOption({ Icon, title, colorRed }) {
  return (
    <div className={`sidebarOption ${colorRed ? 'colorRed' : ''} `}>
      <Icon />
      <h3>{title}</h3>
    </div>
  )
}

export default SidebarOption
