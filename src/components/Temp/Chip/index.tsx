import Chip from '@mui/material/Chip'
import { Stack, SxProps, Theme, Typography } from '@mui/material'
import React, { ReactElement } from 'react'
import CustomBadge from '../Badge'


interface props {
    shape?: "pill" | "rounded",
    onDelete?: () => void,
    deleteIcon?: ReactElement,
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning",
    size?: "large" | "medium" | "small",
    variant?: "filled" | "outlined",
    label: string,
    disabled?: boolean,
    startIcon?: ReactElement,
    count?: number,
    sx?: SxProps<Theme>
}

export const CustomChip = ({
    shape = "pill",
    onDelete,
    deleteIcon,
    color = "primary",
    size = "medium",
    variant = "outlined",
    label,
    disabled = false,
    startIcon,
    count,
    sx = {},
}: props) => {

  return (
    <Chip
        label={
            <Stack direction={'row'} gap={'8px'} alignItems={'center'} justifyContent={"center"}>
                {label}
                {
                    count ? 
                    <CustomBadge 
                        badgeContent = {count} 
                    >
                        {count}
                    </CustomBadge>
                : null
            }
            </Stack>
        }
        variant={variant}
        color={color}
        size={size}
        sx={{ borderRadius: shape === "pill" ? "16px" : "4px", ...sx }} // override the CSS styles using sx prop
        onDelete={onDelete}
        icon={startIcon}
        disabled={disabled}
        deleteIcon={deleteIcon}
    />
)
}

// import Chip from '@mui/material/Chip'
// import React, { ReactElement } from 'react'

// interface props {
//     shape? : "pill" | "rounded",
//     onDelete? : () => void,
//     color? : "default" | "primary" |"secondary" | "error" | "info" | "success" | "warning",
//     size?: "medium" | "small" | "large",
//     variant? : "filled" | "outlined",
//     label : string,
//     disabled? : boolean,
//     startIcon? :ReactElement
//     deleteIcon?: ReactElement
//     customCount?: number | string | null 
// }

// export const CustomChip = ({
//     shape = "pill",
//     onDelete,
//     color = "success",
//     size = "medium",
//     variant = "outlined",
//     label,
//     disabled = false,
//     startIcon,
//     deleteIcon,
//     customCount = 0,
// } : props) => {

//     const shapes = {
//         pill : "16px",
//         rounded : "4px"
//     }

//     return (
//         <Chip 
//             label = {`${label}${customCount ? ` (${customCount})` : ''}`}
//             variant={variant}
//             color={color}
//             size={size}
//             sx={{borderRadius : shapes[shape]  , marginRight : ".7rem"}}
//             onDelete={onDelete}
//             icon={startIcon}
//             disabled = {disabled}
//             deleteIcon={deleteIcon}
//         />
//     )
// }



// import React from 'react';
// import { Chip, ChipProps } from '@mui/material';

// // Define the props interface
// interface CustomChipProps extends ChipProps {
//   variant: 'filled' | 'outlined'; // Required variant prop
//   color: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'; // Required color prop
//   size?: 'small' | 'medium' | 'large'; // Optional size prop
//   customCount?: number; // Optional custom count
//   startIcon: React.ReactNode
// }

// // Custom Chip Component
// const CustomChip: React.FC<CustomChipProps> = ({
//   variant,
//   color,
//   size = 'medium', // Default size
//   customCount,
//   startIcon,
//   ...props
// }) => {
//   return (
//     <Chip
//       variant={variant}
//       color={color}
//       size={size}
//       {...props}
//       deleteIcon={customCount !== undefined ? <span>{customCount}</span> : undefined}
//       onDelete={customCount ? () => console.log('Delete action') : undefined}
      
//     />
//   );
// };

// export default CustomChip;