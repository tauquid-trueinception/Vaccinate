import { Badge } from "@mui/material";
import React from "react";


interface BadgePropsVariantOverrides{
  variant ?:  'filled' | 'outline';
  color?: 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success';
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  badgeContent: number;
  max?: number;
  anchorOrigin?: {
    vertical?: 'top' | 'bottom';
    horizontal?: 'left' | 'right';
  };
  
}

const CustomBadge : React.FC<BadgePropsVariantOverrides> = ({
  variant = 'filled',
  color = 'primary',
  size = 'medium',
  children,
  badgeContent,
  max = 99,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'right',
  },
}) => {
  return(
<Badge variant={variant} color={color} badgeContent={badgeContent} max={max} anchorOrigin={anchorOrigin}>
{children}
</Badge>
  )
}

export default CustomBadge