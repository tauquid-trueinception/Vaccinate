import React, { ReactNode } from 'react'
import { Badge } from '@mui/material'

interface props {
  notifications : number,
  color? : "default" | "error" | "info" | "primary" | "secondary" | "success" | "warning",
  variant? : "standard" | "dot"
  positionY? : "top" | "bottom", // for the vertical direction 
  positionX? : "left" | "right", // for the horizontal direction
  maxNotifications? : number,
  children : ReactNode
}

export const CustomBadge = ({
  notifications,
  maxNotifications = 100,
  color = "primary",
  variant = "standard",
  positionX = "right",
  positionY = "top",
  children
} : props) => {

  return (
    <Badge 
      badgeContent={notifications} 
      color={color} 
      variant={variant}
      anchorOrigin={{
        vertical : positionY,
        horizontal : positionX
      }}
      max={maxNotifications}
    >
      {children}
    </Badge>
  )
}