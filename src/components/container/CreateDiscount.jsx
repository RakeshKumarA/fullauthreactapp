import React, { useEffect, useState } from 'react';
import BasicDetails from '../../features/basicDetails/BasicDetails';
import Schedule from '../../features/schedule/Schedule';
import Audience from '../../features/audience/Audience';
import Header from '../../features/userProfile/Header';
import { useSelector } from 'react-redux';
import ReviewandSubmit from './ReviewandSubmit';

const CreateDiscount = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepNumber = useSelector((state) => state.stepper.step);

  useEffect(() => {
    setActiveStep(stepNumber);
  }, [stepNumber]);

  return (
    <React.Fragment>
      <Header />

      {activeStep === 0 && <BasicDetails />}
      {activeStep === 1 && <Schedule />}
      {activeStep === 2 && <Audience />}
      {activeStep === 3 && <ReviewandSubmit />}
    </React.Fragment>
  );
};

export default CreateDiscount;
