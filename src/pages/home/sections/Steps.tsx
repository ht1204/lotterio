import React from 'react';
import { Box, Step, Stepper, StepLabel } from '@mui/material';

type StepsProps = {
  steps: Array<string>;
  activeStep: number;
};

export const StepsSection : React.FC<StepsProps> = ({ steps, activeStep }) => {
    
    return (
        <Box>
            <Stepper activeStep={activeStep}>
                {steps && steps.map((step: any, index: any) => {
                    return (
                        <Step key={index}>
                            <StepLabel>
                                {step}
                            </StepLabel>
                        </Step>                  
                        );
                })}
            </Stepper>
        </Box>
    );

};