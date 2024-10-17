"use client"

import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'


interface props {
    value?: string | number
    label?: string
    placeholder: string
    inline: boolean
    required: boolean
    helperText: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    error?: boolean
    disabled: boolean
    width?: string | number
    size: 'small' | 'medium'
    color?: 'error' | 'success'
    type?: 'text' | 'password' | 'number' | "email"
    multiLineProps?: {
        charCount?: number
        minRows?: number
        maxRows?: number
        maxChar: number
    },
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const CustomInputField = ({
    value,
    label = "placeholder",
    placeholder,
    inline,
    required,
    helperText,
    leftIcon,
    rightIcon,
    error,
    disabled,
    size,
    color,
    type = "text",
    width,
    multiLineProps,
    onChange
}: props) => {

    const [showPass, setShowPass] = useState<boolean>(false);

    return (
        <Stack
            justifyContent={"flex-start"}
            alignItems={"baseline"}
            width={"100%"}
            height={"100%"}
            direction={inline ? "row" : "column"}
            gap={inline ? "16px" : "8px"}
        >
            {/* label is start */}
            <Stack
                direction={"row"}
                gap={"8px"}
                alignSelf={inline ? "baseline" : "none"}

            >
                <Typography
                    variant='l1'
                    color={disabled ? 'textDisabled' : 'textActive'}
                >
                    {label}
                </Typography>
                {required && (
                    <Typography variant='l1' color='error.500' >
                        *
                    </Typography>
                )}
            </Stack>
            {/* label is end */}

            {/* wrap the input in this stack */}
            <Stack gap={"8px"} width={width} height={"100%"} >
                {/* input is start */}
                <OutlinedInput
                    value={value}
                    onChange={onChange}
                    type={type == "password" ? (showPass ? 'text' : "password") : type}
                    placeholder={placeholder}
                    disabled={disabled}
                    color={color}
                    error={error}
                    size={size}
                    minRows={(multiLineProps && multiLineProps.minRows) || undefined}
                    maxRows={(multiLineProps && multiLineProps.maxRows) || undefined}
                    multiline={multiLineProps ? true : undefined}
                    inputProps={{
                        maxLength: multiLineProps?.maxChar
                    }}
                    sx={{
                        width: "100%",
                        px: leftIcon ? "0px" : "8px",
                        "& .MuiInputBase-input": {
                            paddingLeft: leftIcon ? "7px" : "0px",
                            height: !multiLineProps ? size : undefined,
                        }
                    }}

                    startAdornment={
                        leftIcon && (
                            <Stack
                                bgcolor={'shade.200'}
                                border={'1px solid'}
                                borderColor={'border.page'}
                                borderRadius={'6px 0px 0px 6px'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                alignSelf={'stretch'}
                                px={size === 'small' ? '10px' : '16px'}
                            >
                                {leftIcon}
                            </Stack>
                        )
                    }

                    endAdornment={
                        type === "password" ? (
                            <InputAdornment position="end">
                                <IconButton
                                    size="small"
                                    onClick={() => setShowPass((prev) => !prev)} // Toggle show/hide password
                                >
                                    {showPass ? (
                                        <VisibilityIcon
                                            sx={{
                                                color: 'textActive', // Customize color as needed
                                            }}
                                        />
                                    ) : (
                                        <VisibilityOffIcon
                                            sx={{
                                                color: 'textActive', // Customize color as needed
                                            }}
                                        />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ) :
                        multiLineProps ? (
                            <Stack
                                alignItems={'center'}
                                justifyContent={'start'}
                                alignSelf={'stretch'}
                                height={"auto"}
                                px={"8px"}
                            >
                                <Typography
                                    fontWeight={400}
                                    color="textDisabled"
                                    variant="l1"
                                >
                                    {String(value).length}/{multiLineProps.maxChar}
                                </Typography>
                            </Stack>
                        ) :
                        rightIcon && (
                            <InputAdornment position="end">
                                {rightIcon}
                            </InputAdornment>
                        )
                    }
                />
                {/* input is end */}

                {/* helper text is start */}
                {!disabled ? (
                    <Typography
                        variant={'l2'}
                        align={inline ? 'right' : "left"}
                        fontWeight={400}
                        color={
                            color === 'error'
                                ? 'error.500'
                                : color === 'success'
                                    ? 'success.500'
                                    : 'textInactive'
                        }
                    >
                        {helperText}
                    </Typography>
                ) : (
                    <Typography
                        variant={'l2'}
                        align={inline ? 'right' : "left"}
                        fontWeight={400}
                        color={'textDisabled'}
                    >
                        {helperText}
                    </Typography>
                )}
                {/* helper text is start */}
            </Stack>
        </Stack>
    )
}