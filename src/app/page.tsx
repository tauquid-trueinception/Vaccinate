"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import { Check, Close, CoPresentSharp, Mail, MailLock } from "@mui/icons-material";
import CustomBadge from "@/components/Temp/Badge";
import { CustomChip } from "@/components/Temp/Chip";


const App: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={"white"}
    >
      {/* <Typography variant="d1" borderColor={"#FF5733"} borderRadius={5}>
        Badge
      </Typography> */}

<CustomChip label="Primary Chip" color="primary" variant="filled" count={2} startIcon={<Check/>} onDelete={() => console.log('Delete action')}/>

<CustomChip
                        label="label"
                        shape="rounded"
                        variant="outlined"
                        color="warning"
                        size="large"
                        count={4}
                        startIcon={<MailLock/>}
                        onDelete={()=>{}}
                        deleteIcon={<Close/>}
                    />

 
      <Stack gap={4}>
        <CustomBadge
          variant="outline"
          color="primary"
          badgeContent={4}
          max={5}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Typography
            variant="l1"
            borderColor={"black"}
            borderRadius={5}
            sx={{ padding: "0.5rem", color: "black" }}
          >
            Badge
          </Typography>
        </CustomBadge>
        <CustomBadge variant="filled" color="success" badgeContent={6} max={5}>
          <Typography
            variant="l1"
            borderColor={"black"}
            borderRadius={5}
            sx={{ padding: "0.5rem", color: "black" }}
          >
            Badge
          </Typography>
        </CustomBadge>
        <CustomBadge
          variant="filled"
          color="error"
          badgeContent={1}
          max={99}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Mail sx={{ color: "black" }} />
        </CustomBadge>
      </Stack>
    </Box>
  );
};

export default App;
