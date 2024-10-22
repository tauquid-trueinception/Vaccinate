import Chip from '@mui/material/Chip'
import React, { ReactElement } from 'react'

interface props {
    shape? : "pill" | "rounded",
    onDelete? : () => void,
    color? : "default" | "primary" |"secondary" | "error" | "info" | "success" | "warning",
    size?: "medium" | "small" | "large",
    variant? : "filled" | "outlined",
    label : string,
    disabled? : boolean,
    startIcon? :ReactElement
}

export const CustomChip = ({
    shape = "pill",
    onDelete,
    color = "success",
    size = "medium",
    variant = "outlined",
    label,
    disabled = false,
    startIcon
} : props) => {

    const shapes = {
        pill : "16px",
        rounded : "4px"
    }

    return (
        <Chip 
            label = {label}
            variant={variant}
            color={color}
            size={size}
            sx={{borderRadius : shapes[shape]  , marginRight : ".7rem"}}
            onDelete={onDelete}
            icon={startIcon}
            disabled = {disabled}
        />
    )
}