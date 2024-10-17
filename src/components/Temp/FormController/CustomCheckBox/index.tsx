import * as React from 'react';
import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';

const Icon = styled('span')<{
    size: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success';
}>(({ theme, size, color }) => {
    const iconSizes = {
        small: '16px',
        medium: '24px',
        large: '32px',
    };

    const iconBorder = {
        small: 3,
        medium: 8,
        large: 10,
    };

    return {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: iconBorder[size],
        width: iconSizes[size],
        height: iconSizes[size],
        backgroundColor: theme.palette.secondary.light, 
        '.Mui-focusVisible &': {
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: theme.palette[color].light,
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette[color].dark, 
            }),
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            backgroundColor: theme.palette[color].light,
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette[color].dark,
            }),
        },
        ...theme.applyStyles('dark', {
            boxShadow: '0 0 0 1px rgb(16 22 26 / 40%)',
            backgroundColor: theme.palette[color].dark,
        }),
    };
});

const CheckedIcon = styled(Icon)(({ theme, color }) => ({
    backgroundColor: theme.palette[color].main, 
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&::before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
    },
    'input:hover ~ &': {
        backgroundColor: theme.palette[color].dark, 
    },
}));


export const CustomCheckBox = (props: CheckboxProps & { size: 'small' | 'medium' | 'large', color: 'primary' | 'secondary' | 'info' | 'error' | 'warning' | 'success' }) => {
    return (
        <Checkbox
            sx={{ '&:hover': { bgcolor: 'transparent' } }}
            disableRipple
            checkedIcon={<CheckedIcon size={props.size ?? 'medium'} color={props.color ?? 'primary'} />} 
            icon={<Icon size={props.size ?? 'medium'} color={props.color ?? 'primary'} />} 
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}