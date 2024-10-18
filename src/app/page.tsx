"use client"
import CustomDataGrid from "@/components/Temp/DataGrid";
import Sidebar from "@/components/Temp/Sidebar";
// import { CustomAvatar } from "@/components/Temp/Avatar";
// import { CustomAutoComplete } from "@/components/Temp/AutoComplete";
import { Box, Stack } from "@mui/material";
// import { CustomAvatarGroup } from "@/components/Temp/AvatarGroup";
// import { CustomBadge } from "@/components/Temp/Badge";
// import { CustomBottomNavigation } from "@/components/Temp/BottomNavigation";
// import { CustomChip } from "@/components/Temp/Chip";
// import { CustomSnackbar } from "@/components/Temp/Snackbar";

import React, { useState } from "react";




const Home: React.FC = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  const rows = [
    { id: 1, name: 'John Doe', job: 'Developer', address: '123 Main St', age: 30 },
    { id: 2, name: 'Jane Smith', job: 'Designer', address: '456 Park Ave', age: 25 },
    // Add more rows as needed
];
const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'job', headerName: 'Job', width: 150 },
  { field: 'address', headerName: 'Address', width: 200 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

  return (
    <Box bgcolor={"white"} height={"100vh"} width={"100vw"} gap={6}>
      <Sidebar open={sidebarOpen} onClose={toggleSidebar}/>
    <Stack>
   {/* <CustomAvatar variant={"circular"} size={"small"} src={""} alt={""} name={""} showDot={false}/>
   <CustomAutoComplete/>
   <CustomAvatarGroup list={[]} size={"small"} max={0}/>
   <CustomBadge notifications={0} children={undefined}/>
   <CustomBottomNavigation/>
   <CustomChip label={"hello"}/>
   <CustomSnackbar isOpen={false}/> */}
   <CustomDataGrid rows={rows} columns={columns} />
   </Stack>
   </Box>
  );
}

export default Home