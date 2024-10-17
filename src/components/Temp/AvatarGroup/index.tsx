import React from 'react'
import AvatarGroup from '@mui/material/AvatarGroup';
import { CustomAvatar } from '../Avatar';

interface props { 
    list : {
        name : string,
        src : string,
    }[],
    size : "small" | "medium" | "large",
    max : number
}

export const CustomAvatarGroup = ({list , size , max} : props) => {

    return (
        <AvatarGroup max={max}>
            {list.map((ele ) => (
                <CustomAvatar 
                    key={ele.name}
                    variant="circular"
                    size={size}
                    src={ele.src}
                    alt={ele.name}
                    name = {ele.name}
                    showDot = {false}
                />
            ))}
        </AvatarGroup>
    )
}