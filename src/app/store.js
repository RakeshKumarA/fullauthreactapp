import { configureStore } from '@reduxjs/toolkit';
import basicDetailReducer from '../features/basicDetails/basicDetailSlice';
import scheduleReducer from '../features/schedule/scheduleSlice';
import audienceReducer from '../features/audience/audienceSlice';
import stepperReducer from '../features/stepper/stepperSlice';

export default configureStore({
  reducer: {
    basicDetail: basicDetailReducer,
    schedule: scheduleReducer,
    audience: audienceReducer,
    stepper: stepperReducer,
  },
});
