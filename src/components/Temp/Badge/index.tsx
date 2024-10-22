import React from 'react';
import Badge from '@mui/material/Badge';
import { BadgeProps } from '@mui/material';

interface CustomBadgeProps extends BadgeProps {
  variant?: 'filled' | 'outline';
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'warning'
    | 'success'
    | 'info';
}

const CustomBadge: React.FC<CustomBadgeProps> = ({
  children,
  variant = 'filled',
  color = 'primary',
  badgeContent,
  ...props
}) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      variant={variant === 'outline' ? 'standard' : 'dot'} // Simplified variant handling
      {...props}
    >
      {children}
    </Badge>
  );
};

export default CustomBadge;
