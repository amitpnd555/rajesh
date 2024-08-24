import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import image1 from "../../../public/images/image1.jpg"
import image2 from "../../../public/images/image2.jpg"
import image3 from "../../../public/images/image3.jpg"
import image4 from "../../../public/images/image4.jpg"
import image5 from "../../../public/images/image5.jpg"
import image6 from "../../../public/images/image6.jpg"
import image7 from "../../../public/images/image7.jpg"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    // imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    imgPath: image1,
  },
  {
    label: 'Bird',
    imgPath: image2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath: image3,
  },
  {
    label: 'Goč, Serbia',
    imgPath: image4,
  },
  {
    label: 'image5',
    imgPath: image5,
  },
  {
    label: 'image6',
    imgPath: image6,
  },

];

const Image = React.memo(({ imgPath, label }) => (
  <Box
    component="img"
    sx={{
      height: 600,
      display: 'block',
      overflow: 'hidden',
      width: '100%',
      margin: '0 auto',
      borderRadius: '16px',
    }}
    src={imgPath}
    alt={label}
  />
));

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = React.useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = React.useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleStepChange = React.useCallback((step) => {
    setActiveStep(step);
  }, []);

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{ }}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Image imgPath={step.imgPath} label={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            aria-label="Next image"
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            aria-label="Previous image"
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
