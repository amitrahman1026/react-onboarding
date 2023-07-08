import { useState } from 'react';

export interface FormData {
  roles: string;
  studyTime: {
    hoursPerWeek: number;
    weeksToCommit: number;
  };
  marketingPlatforms: string[];
  interviewTimeline: string;
  // Add more properties as needed
}

export const useForm = (): [FormData, (data: Partial<FormData>) => void] => {
  const [formData, setFormData] = useState<FormData>({
    roles: '',
    studyTime: {
      hoursPerWeek: 0,
      weeksToCommit: 0,
    },
    marketingPlatforms: [],
    interviewTimeline: '',
    // Initialize other properties as needed
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  return [formData, updateFormData];
};
