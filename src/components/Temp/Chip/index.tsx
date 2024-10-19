import Chip from '@mui/material/Chip'
import React, { ReactElement } from 'react'

interface props {
    shape? : "pill" | "rounded",
    onDelete? : () => void,
    deleteIcon? : ReactElement,
    color? : "default" | "primary" |"secondary" | "error" | "info" | "success" | "warning",
    size?: "medium" | "small",
    variant? : "filled" | "outlined",
    label : string,
    disabled? : boolean,
    startIcon? :ReactElement
}

export const CustomChip = ({
    shape = "pill",
    onDelete,
    deleteIcon,
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
            deleteIcon={deleteIcon}
            icon={startIcon}
            disabled = {disabled}
        />
    )
}