"use client";
import React from "react";
import { Box, Stack } from "@mui/material";

import { Close, MailLock } from "@mui/icons-material";
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
      <CustomChip
        label="label"
        shape="rounded"
        variant="outlined"
        color="warning"
        size="small"
        count={4}
        startIcon={<MailLock />}
        onDelete={() => {}}
        deleteIcon={<Close />}
        max={3}
      />

      <Stack gap={4}>
        <CustomChip
          label="label"
          shape="rounded"
          variant="outlined"
          color="warning"
          size="large"
          count={2}
          max={1}
          startIcon={<MailLock />}
          onDelete={() => {}}
          deleteIcon={<Close />}
        />
        <CustomChip
          label="label"
          shape="pill"
          variant="filled"
          color="warning"
          size="medium"
          count={2}
          max={1}
          startIcon={<MailLock />}
          onDelete={() => {}}
          deleteIcon={<Close />}
        />
      </Stack>
    </Box>
  );
};

export default App;
