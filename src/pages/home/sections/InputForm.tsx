import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

type InputFormType = {
    participant: StateReact<string | null>;

};


export const InputForm: React.FC<InputFormType> = ({ participant }) => {

    const [item, setItem] = React.useState<string | null>(null);
    
    const handleSubmit = (event : React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(item) {
            participant(item);
            setItem('');
        }

    }

    const insertData =  (event : React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setItem(value);
    }

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Grid 
                container
                justifyContent="center"
                spacing={2}                                
            >
                <Grid item xs={8}>
                    <TextField
                        size="small"
                        label="Add Participant"
                        fullWidth
                        value={item || ''}
                        onChange={insertData}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button
                        disabled={item === null || item === ""}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Add To List
                    </Button>
                </Grid>                
            </Grid>
        </Box>
    );
};