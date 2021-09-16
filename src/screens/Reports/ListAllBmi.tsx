import { Container, Paper, Typography, Box, Card } from '@material-ui/core'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { User } from '../../interfaces'
import { getAllUsers } from '../../services/report'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function ListAllBmi() {
    const initialData: User[] = [];
    const [data, setData] = useState(initialData);
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'Gender',
            headerName: 'Gender',
            width: 150,
        },
        {
            field: 'HeightCm',
            headerName: 'Height Cm',
            width: 150,
        },
        {
            field: 'WeightKg',
            headerName: 'Weight Kg',
            width: 150,
        },
        {
            field: 'bmi',
            headerName: 'BMI',
            width: 150,
        },
        {
            field: 'healthRisk',
            headerName: 'Health Risk',
            width: 150,
        },
    ];
    useEffect(() => {
        getAllUsers().then((data) => {
            setData(data);
        })
    }, [])
    return (
        <Container>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Typography variant="h4">Health Risk Report</Typography>
            </Box>
            <Box flex={1} display="flex" style={{ height: 400, marginTop:20 }}>
                {(data.length) && < DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />}
            </Box>
        </Container>
    )
}

export default ListAllBmi
