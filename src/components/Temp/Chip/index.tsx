import { Avatar, Chip } from '@mui/material'
import React, { ReactElement } from 'react'

interface props {
    borderRadius? : "16px" | "4px",
    avatarLetter? : string,
    avatarSrc? : string,
    onDelete? : () => void,
    icon? : ReactElement,
    color? : "default" | "primary" |"secondary" | "error" | "info" | "success" | "warning",
    size? :"medium" | "small",
    variant? : "filled" | "outlined",
    label : string,
    disabled? : boolean 
}

export const CustomChip = ({
    borderRadius = "16px",
    avatarLetter,
    avatarSrc,
    onDelete,
    icon,
    color = "default",
    size = "medium",
    variant = "filled",
    label,
    disabled = false
} : props) => {

    // for the avatar image or avatar letter
    const onAvatar = () => {
        if(avatarLetter?.length){
            return(<Avatar>{avatarLetter}</Avatar>)
        }

        if(avatarSrc?.length){
            return(<Avatar src={avatarSrc} />)
        }

        return undefined
    }

    return (
        <Chip 
            label = {label}
            variant={variant}
            color={color}
            size={size}
            sx={{borderRadius}}
            avatar={onAvatar()}
            onDelete={onDelete}
            deleteIcon={icon}
            disabled = {disabled}
        />
    )
}