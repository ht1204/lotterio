import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

type WinnerProps = {
    totalWinners: string;
    setTotalWinners: StateReact<string>;
};


export const WinnersSection : React.FC<WinnerProps> = ({ totalWinners,  setTotalWinners }) => {

    const handleChange = (event : SelectChangeEvent) => {
        const { value } = event.target;
        const itemValue = value as string;
        setTotalWinners(itemValue);    
    };

    
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="filled" fullWidth>
                <InputLabel>
                    Select Total of Winners
                </InputLabel>
                <Select value={totalWinners} label="Select" onChange={handleChange}>
                    <MenuItem value={1}>
                        One Winner
                    </MenuItem>
                    <MenuItem value={2}>
                        Two Winners
                    </MenuItem>
                    <MenuItem value={3}>
                        Three Winners
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );

}