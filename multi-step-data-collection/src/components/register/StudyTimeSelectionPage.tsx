// StudyTimeSelectionPage.tsx
import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Slider from '@mui/material/Slider';
import { FormData } from './formData';

interface StudyTimeSelectionPageProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const StudyTimeSelectionPage: React.FC<StudyTimeSelectionPageProps> = ({ formData, updateFormData }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState(0);
  const [weeksToCommit, setWeeksToCommit] = useState(0);

  const handleHoursPerWeekChange = (event: any, newValue: number | number[]) => {
    console.log('Hours per week changed');
    const updatedHoursPerWeek = newValue as number;
    setHoursPerWeek(updatedHoursPerWeek);
    updateFormData({ studyTime: { hoursPerWeek: updatedHoursPerWeek, weeksToCommit } });
  };

  const handleWeeksToCommitChange = (event: any, newValue: number | number[]) => {
    console.log('Weeks to commit changed');
    const updatedWeeksToCommit = newValue as number;
    setWeeksToCommit(updatedWeeksToCommit);
    updateFormData({ studyTime: { hoursPerWeek, weeksToCommit: updatedWeeksToCommit } });
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
