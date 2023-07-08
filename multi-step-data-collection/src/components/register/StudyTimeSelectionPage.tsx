import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Slider from '@mui/material/Slider';

const StudyTimeSelectionPage: React.FC = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [weeksToCommit, setWeeksToCommit] = useState(0);

  const handleHoursPerWeekChange = (event: any, newValue: number | number[]) => {
    setHoursPerWeek(newValue as number);
  };

  const handleWeeksToCommitChange = (event: any, newValue: number | number[]) => {
    setWeeksToCommit(newValue as number);
  };

  return (
    <BaseFormPage currentPage={2} totalPages={4}>
      <h2>Select your study time:</h2>
      <div>
        <h4>Hours per week:</h4>
        <Slider
          value={hoursPerWeek}
          onChange={handleHoursPerWeekChange}
          max={40}
          min={0}
          step={1}
          valueLabelDisplay="on"
        />
      </div>
      <div>
        <h4>Weeks to commit:</h4>
        <Slider
          value={weeksToCommit}
          onChange={handleWeeksToCommitChange}
          max={10}
          min={0}
          step={1}
          valueLabelDisplay="on"
        />
      </div>
    </BaseFormPage>
  );
};

export default StudyTimeSelectionPage;
