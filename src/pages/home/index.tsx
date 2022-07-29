import { Container, Button, Grid, Typography, Paper, Stack, Chip } from "@mui/material";
import React from "react";
import { steps } from '../../constants/steps';
import { HeaderComponent } from "../../components/Header";
import { InputForm , StepsSection, WinnersSection} from "./sections/";
import { selectRandom } from "../../utils/selectRandom";


export const HomePage: React.FC<{}> = () => {
  
  const [ participant, setParticipant ] = React.useState<string | null>(null);
  const [ participants, setParticipants ] = React.useState<string[]>([]);
  const [ activeStep, setActiveStep ] = React.useState<number>(0);
  const [ totalWinners, setTotalWinners ] = React.useState<string>('');
  const [ winners, setWinners ] = React.useState<string[]>([]);
  
  React.useEffect(()=>{
    if(participant){
      setParticipants([...participants, participant]);
    }
  },[participant]);


  const handleWinner = () => {

    const items = participants;
    const amountWinners = totalWinners as unknown as number;

    const randomWinnersObj = {
      items,
      amountWinners
    };

    const { result } = selectRandom(randomWinnersObj);
    setWinners(result);

  }

  const nextStep = () => {
    setActiveStep(prev => prev + 1);

    if (activeStep === 1) {
      handleWinner();
      setActiveStep(3);
    }

    if (activeStep === 3) {
      setActiveStep(0);
      setParticipants([]);
      setParticipant(null);
    }

  }

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 9 }}>
        <HeaderComponent 
         title="Lotter.io"
         description="Generate Raffles of Participants"
        />

        <StepsSection steps={steps} activeStep={activeStep}/>

        <Container sx={{ mt: 6}} maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4" sx={{ mb: 4 }}>
                {steps[activeStep]}
              </Typography>
            </Grid>
          </Grid>
        {activeStep === 0 &&  
          <InputForm participant={setParticipant} />
        }

        {activeStep === 1 &&
          <WinnersSection 
            totalWinners={totalWinners} 
            setTotalWinners={setTotalWinners} 
          />
        }

        {activeStep <= 1 ? (
          <Paper sx={{ height: "300px", mt: 2, mb: 2, padding:"0.5em 1em" }}>
            {participants.length ? (
              <Grid container spacing={1} direction="row">
                {participants.map((participant, index) => {
                  return (
                    <Grid item key={index}>
                      <Chip label={participant}/>
                    </Grid>
                  );
                })}
              </Grid>
            ): (
              <Stack 
                sx={{ height: "100%"}}
                direction="column"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h4" sx={{ opacity: 0.3}}>
                  Add Here
                </Typography>
              </Stack>
            )}
          </Paper>
        ) : (
          <Stack sx={{ mt: 3, mb: 3}} spacing={2}>
            {winners && winners.map((winner, index) =>{
              return (
                <Typography key={index} variant = {index + 1 === 1 ? "h2": "h3"}>
                  Winner {index + 1} : {winner}
                </Typography>
              );
            })}
          </Stack>
        )}

        <Button 
          onClick={nextStep} 
          variant="contained"
          fullWidth
          disabled={participants.length < 3}
        >
          {activeStep <= 2 ? 'Next' : 'Restart'}
        </Button>   
        </Container>
      </Container>
    </>
  );
};
