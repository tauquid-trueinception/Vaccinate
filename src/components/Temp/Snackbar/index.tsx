import React, { useEffect, useState } from 'react';
import { Close } from '@mui/icons-material'
import { Alert, Box, IconButton, Typography } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import ErrorIcon from '@mui/icons-material/Error';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface props {
    isOpen : boolean,
    message? : string,
    severity? : "error" | "success" | "info" | "warning" | "secondary",
    vertical? : "top" | "bottom", 
    horizontal? : "left" | "right" | "center",
    autoHideDuration? : number,
    onUndo ? : () => void
}

const icons = {
    error : <ErrorIcon sx={{width : "16.6px"}} />,
    success : <CheckCircleIcon sx={{width : "16.6px"}} />,
    secondary : <CheckCircleIcon sx={{width : "16.6px"}} />,
    info : <ErrorIcon sx={{width : "16.6px"}} />,
    warning : <ReportProblemIcon sx={{width : "16.6px"}} />
}

export const CustomSnackbar = ({
    isOpen , 
    message = "Snack massage...",
    severity = "success",
    vertical = "bottom",
    horizontal = "right",
    autoHideDuration = 3000,
    onUndo
} : props) => {
    const [state, setState] = useState(false);

    // This helps to open the snackbar using the isOpen prop.
    useEffect(() => setState(isOpen), [isOpen]);

    //This is to add a time duration for automatically hiding the snackbar.
    useEffect(() => {
        if (state && autoHideDuration) {
            const timer = setTimeout(() => setState(false), autoHideDuration);
            return () => clearTimeout(timer);
        }
    }, [state, autoHideDuration]);
    

    return (
        <Snackbar
            anchorOrigin={{
                vertical,
                horizontal 
            }}
            open={state}
        >
            <Alert 
                severity ={severity}
                variant = "filled"
                sx={{width : "100%"}}
                onClose = {() => setState(false)}
                action = {
                    <Box>
                        {onUndo &&
                            <Typography variant="p4" sx={{cursor : "pointer"}}  onClick={() => setState(false)}>
                                UNDO
                            </Typography>
                        }
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => setState(false)}
                        >
                            <Close fontSize="small" />
                        </IconButton>
                    </Box>
                }
                icon = {icons[severity]}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}