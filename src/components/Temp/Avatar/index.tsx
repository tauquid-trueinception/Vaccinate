"use client"
import { Avatar } from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import React from 'react'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        marginLeft: "0px",
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


interface props {
    variant: "circular" | "rounded" | "square",
    size: "small" | "medium" | "large",
    src: string,
    alt: string,
    name: string
    showDot : boolean
}



const CheckNameIsSplit = (name : string) => {
    if(Array.from(name).includes(" ")){
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }else{
        return name.split(' ')[0][0]
    }
}


function stringAvatar(name: string) {
    return {
        children: CheckNameIsSplit(name),
    };
}


export const CustomAvatar = (
{
    variant,
    size = "medium",
    src,
    alt,
    name,
    showDot
}: props) => {
    const sizes = {
        small: "32px",
        medium: "40px",
        large: "56px"
    }
    return (
        <StyledBadge
            overlap="circular"
            variant={showDot ? "dot" : "standard"}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{
                width: sizes[size],
                height: sizes[size]
            }}
        >
            <Avatar
                variant={variant}
                alt={alt}
                src={src}
                sx={{
                    width: sizes[size],
                    height: sizes[size],
                }}
                {...stringAvatar(name)}
            />
        </StyledBadge>
    )
}