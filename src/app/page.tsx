"use client"
import { CustomAvatar } from "@/components/Temp/Avatar";
import { CustomAutoComplete } from "@/components/Temp/AutoComplete";
import { Box, Stack } from "@mui/material";
import { CustomAvatarGroup } from "@/components/Temp/AvatarGroup";
import { CustomBadge } from "@/components/Temp/Badge";
import { CustomBottomNavigation } from "@/components/Temp/BottomNavigation";
import { CustomChip } from "@/components/Temp/Chip";
import { CustomSnackbar } from "@/components/Temp/Snackbar";
import CustomDataGrid from "@/components/Temp/DataGrid";



export default function Home() {
  return (
    <Box bgcolor={"white"} height={"100vh"} width={"100vw"} gap={6}>
    <Stack>
   <CustomAvatar variant={"circular"} size={"small"} src={""} alt={""} name={""} showDot={false}/>
   <CustomAutoComplete/>
   <CustomAvatarGroup list={[]} size={"small"} max={0}/>
   <CustomBadge notifications={0} children={undefined}/>
   <CustomBottomNavigation/>
   <CustomChip label={"hello"}/>
   <CustomSnackbar isOpen={false}/>
   <CustomDataGrid/>
   </Stack>
   </Box>
  );
}
