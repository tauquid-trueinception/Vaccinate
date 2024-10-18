import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { DataGrid, GridFilterModel, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import { CustomInputField } from '../InputField';

type columnsType = {
    field : string,
    headerName : string,
    width : number
}

type rowsType = {
    id : number,
    name : string,
    job : string,
    address : string,
    age : number
}

interface props {
    rows : rowsType[],
    columns : columnsType[],
    checkboxSelection? : boolean,
    pagination?: boolean;
    searchBar?: boolean;
    gridToolbar? : boolean;
    isLoading? : boolean;
    pageSizeOptions? : number[],
    loadingVariant?  : "circular-progress" | "linear-progress" | "skeleton",
    pageSize ? : number
}


 const CustomDataGrid = ({
    rows , 
    columns , 
    checkboxSelection = false,
    pagination = false,
    searchBar = false,
    gridToolbar = false,
    isLoading = false,
    pageSizeOptions = [5, 10, 25],
    loadingVariant = "circular-progress",
    pageSize = 5

} : props) => {
    const [searchValue , setSearchValue] = useState("");
    const [filterModel, setFilterModel] = useState<GridFilterModel>({
        items: [],
    });
    
    const filteredColumns = useMemo(() => {
        return columns; 
    }, []);

    const onSearch = useCallback((e : ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearchValue(value);

        const newFilterModel: GridFilterModel = {
            items: [
                {
                    field: 'name',
                    operator: 'contains', 
                    value: value,
                },
            ],
        };

        setFilterModel(newFilterModel)
    } , [])

    return (
        <Box>
            {searchBar && (
                <CustomInputField 
            value={searchValue}
            leftIcon={<SearchRounded />}
            onChange={onSearch}
            size="small"
            helperText=''
            label=''
            placeholder='Search here...' inline={false} required={false} disabled={false}                />
            )}
            <DataGrid
                columns={filteredColumns}
                checkboxSelection = {checkboxSelection}
                filterModel={filterModel}
                initialState={{
                    pagination: pagination ?  { 
                        paginationModel: {pageSize} 
                    } : undefined,
                }}
                rows={rows}
                slots={{
                    toolbar: gridToolbar ? GridToolbar : undefined,
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true, 
                        quickFilterProps: {
                            debounceMs: 500, 
                        },
                    },
                    loadingOverlay: {
                        variant: loadingVariant,
                        noRowsVariant: loadingVariant,
                    },
                }}
                pageSizeOptions={pageSizeOptions}
                loading = {isLoading}
            />
        </Box>
    );
}

export default CustomDataGrid