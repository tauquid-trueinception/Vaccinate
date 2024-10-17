import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { Palette } from '@mui/material/styles/createPalette';

// Define size styles for small, medium, and large
const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small':
            return {
                width: 32,
                height: 18,
                thumbSize: 14,
                thumbTransform: 'translateX(14px)',
                trackTranslate: 'translateX(12px)',
            };
        case 'large':
            return {
                width: 52,
                height: 34,
                thumbSize: 28.7,
                thumbTransform: 'translateX(20px)',
                trackTranslate: 'translateX(20px)',
            };
        // this is for the medium size
        default:
            return {
                width: 42,
                height: 26,
                thumbSize: 22,
                thumbTransform: 'translateX(16px)',
                trackTranslate: 'translateX(16px)',
            };
    }
};

// Custom type for valid color values in the Material UI palette
type ColorOption = keyof Palette | 'default';

export const CustomSwitch = styled(({...props }: SwitchProps & { size?: 'small' | 'medium' | 'large'; color?: ColorOption }) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme, size = "medium", color = "primary" }) => {
    const sizeStyles = getSizeStyles(size);

    const trackColor = color === 'default' ? '#A8A29E' : theme.palette[color].main || theme.palette.primary.main;
    const trackColorDark = color === 'default' ? '#39393D' : theme.palette[color].dark || theme.palette.primary.dark;

    return {
        width: sizeStyles.width,
        height: sizeStyles.height,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: sizeStyles.thumbTransform,
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: trackColor,
                    opacity: 1,
                    border: 0,
                    ...theme.applyStyles('dark', {
                        backgroundColor: trackColorDark,
                    }),
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: theme.palette.grey[400],
                ...theme.applyStyles('dark', {
                    color: theme.palette.grey[600],
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.7,
                ...theme.applyStyles('dark', {
                    opacity: 0.3,
                }),
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: sizeStyles.thumbSize,
            height: sizeStyles.thumbSize,
        },
        '& .MuiSwitch-track': {
            borderRadius: sizeStyles.height / 2,
            backgroundColor: '#A8A29E',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
            ...theme.applyStyles('dark', {
                backgroundColor: '#39393D',
            }),
        },
    };
});