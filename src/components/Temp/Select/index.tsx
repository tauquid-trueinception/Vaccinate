"use client";

import React,  {useState} from "react";
import {
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
    SvgIconTypeMap,
} from "@mui/material";

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { customTheme } from "@/theme/ThemeProvider";
import { useAppSelector } from "@/hook/hook";


interface props {
    options: string[];
    multiple?: boolean;
    value: string;
    onChange: (event: SelectChangeEvent<string>) => void;
    isAutocomplete?: boolean;
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    size?: "medium" | "small",
    placeholder?: string,
    icon?: OverridableComponent<SvgIconTypeMap<"svg">>,
    variant?: "outlined" | "filled" | "standard"
}

export const CustomSelect = ({
    options,
    value,
    onChange,
    color = "primary",
    size = "medium",
    placeholder = "Select items...",
    icon = UnfoldMoreIcon,
    variant = "outlined"
}: props) => {
    const mode = useAppSelector((state => state.theme.mode));
    const [selectedValues, setSelectedValues] = useState<string>(value);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedValues(event.target.value);
        onChange(event);
    };

    const colors = {
        primary: {
            backgroundColor: customTheme.mappedColors.action.primary.main(mode),
            color: customTheme.mappedColors.action.primary.textMain(mode),
            '&:hover': {
                backgroundColor: customTheme.mappedColors.action.primary.hover(mode),
                color: customTheme.mappedColors.action.primary.textHover(mode)
            },
            '&:active': {
                backgroundColor: customTheme.mappedColors.action.primary.pressed(mode),
                color: customTheme.mappedColors.action.primary.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor: customTheme.mappedColors.action.primary.disabled(mode),
                color: customTheme.mappedColors.action.primary.textDisabled(mode)
            },
        },
        error: {
            backgroundColor: customTheme.mappedColors.action.error.main(mode),
            color: customTheme.mappedColors.action.error.textMain(mode),
            '&:hover': {
                backgroundColor: customTheme.mappedColors.action.error.hover(mode),
                color: customTheme.mappedColors.action.error.textHover(mode)
            },
            '&:active': {
                backgroundColor: customTheme.mappedColors.action.error.pressed(mode),
                color: customTheme.mappedColors.action.error.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor: customTheme.mappedColors.action.error.disabled(mode),
                color: customTheme.mappedColors.action.error.textDisabled(mode)
            }
        },
        success: {
            backgroundColor: customTheme.mappedColors.action.success.main(mode),
            color: customTheme.mappedColors.action.success.textMain(mode),
            '&:hover': {
                backgroundColor: customTheme.mappedColors.action.success.hover(mode),
                color: customTheme.mappedColors.action.success.textHover(mode)
            },
            '&:active': {
                backgroundColor: customTheme.mappedColors.action.success.pressed(mode),
                color: customTheme.mappedColors.action.success.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor: customTheme.mappedColors.action.success.disabled(mode),
                color: customTheme.mappedColors.action.success.textDisabled(mode)
            }
        },
        secondary: {
            backgroundColor: customTheme.mappedColors.action.secondary.main(mode),
            color: customTheme.mappedColors.action.secondary.textMain(mode),
            '&:hover': {
                backgroundColor: customTheme.mappedColors.action.secondary.hover(mode),
                color: customTheme.mappedColors.action.secondary.textHover(mode)
            },
            '&:active': {
                backgroundColor: customTheme.mappedColors.action.secondary.pressed(mode),
                color: customTheme.mappedColors.action.secondary.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor: customTheme.mappedColors.action.secondary.disabled(mode),
                color: customTheme.mappedColors.action.secondary.textDisabled(mode)
            }
        },
        info: {
            backgroundColor: customTheme.mappedColors.action.info.main(mode),
            color: customTheme.mappedColors.action.info.textMain(mode),
            '&:hover': {
                backgroundColor: customTheme.mappedColors.action.info.hover(mode),
                color: customTheme.mappedColors.action.info.textHover(mode)
            },
            '&:active': {
                backgroundColor:
                    customTheme.mappedColors.action.info.pressed(mode),
                color: customTheme.mappedColors.action.info.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor:
                    customTheme.mappedColors.action.info.disabled(mode),
                color: customTheme.mappedColors.action.info.textDisabled(mode)
            }
        },
        warning: {
            backgroundColor: customTheme.mappedColors.action.warning.main(mode),
            color: customTheme.mappedColors.action.warning.textMain(mode),
            '&:hover': {
                backgroundColor:
                    customTheme.mappedColors.action.warning.hover(mode),
                color: customTheme.mappedColors.action.warning.textHover(mode)
            },
            '&:active': {
                backgroundColor:
                    customTheme.mappedColors.action.warning.pressed(mode),
                color: customTheme.mappedColors.action.warning.textPressed(mode)
            },
            '&:disabled': {
                backgroundColor:
                    customTheme.mappedColors.action.warning.disabled(mode),
                color: customTheme.mappedColors.action.warning.textDisabled(mode)
            }
        }
    }

    return (
        <Select
            value={selectedValues}
            onChange={handleChange}
            IconComponent={icon}
            displayEmpty
            placeholder={placeholder}
            fullWidth
            variant={variant}
            size={size}
            renderValue={(selected) => {
                if (selected.length === 0) {
                    return <Typography variant="p3">{placeholder}</Typography>;
                }
                return selected;
            }}

            sx={colors[color]}
        >
            {options.length > 0 && options.map((option) => (
                <MenuItem key={option} value={option}>
                    <ListItemText primary={option} />
                </MenuItem>
            ))}
        </Select>
    );
};