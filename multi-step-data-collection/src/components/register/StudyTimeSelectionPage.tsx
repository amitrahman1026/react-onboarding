import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Slider from '@mui/material/Slider';
import { useForm } from './formData';

const StudyTimeSelectionPage: React.FC = () => {
  const [, updateFormData] = useForm(); // Retrieve the updateFormData function from the useForm hook
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [weeksToCommit, setWeeksToCommit] = useState(0);

  const handleHoursPerWeekChange = (event: any, newValue: number | number[]) => {
    const updatedHoursPerWeek = newValue as number;
    setHoursPerWeek(updatedHoursPerWeek);
    updateFormData({ studyTime: { hoursPerWeek: updatedHoursPerWeek, weeksToCommit } }); // Include weeksToCommit property
  };

  const handleWeeksToCommitChange = (event: any, newValue: number | number[]) => {
    const updatedWeeksToCommit = newValue as number;
    setWeeksToCommit(updatedWeeksToCommit);
    updateFormData({ studyTime: { hoursPerWeek, weeksToCommit: updatedWeeksToCommit } }); // Include hoursPerWeek property
  };

  return (
    <BaseFormPage currentPage={3} totalPages={4}>
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
