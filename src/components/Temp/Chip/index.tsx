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
    sx?: SxProps<Theme>,
    max? : number
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
    max = 100
}: props) => {

    return (
        <Chip
            label={
                <Stack direction={'row'} gap={'16px'} alignItems={'center'} justifyContent={"space-between"}>
                    {label}
                    {
                        count ? 
                        <CustomBadge
                            badgeContent = {count} 
                            max={max}
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
            sx={{ borderRadius: shape === "pill" ? "16px" : "4px", ...sx }}
            onDelete={onDelete}
            deleteIcon={deleteIcon}
            icon={startIcon}
            disabled={disabled}
        />
    )
}