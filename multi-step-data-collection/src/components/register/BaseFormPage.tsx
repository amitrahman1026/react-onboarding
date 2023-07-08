import React, { ReactNode } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export interface FormPageProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
}

const BaseFormPage: React.FC<FormPageProps> = ({ children, currentPage, totalPages }) => {
  const progress = Math.floor((currentPage / totalPages) * 100);

  return (
    <div className='flex flex-col'>
      <div className='flex grow-0 w-min'><LinearProgress variant="determinate" value={progress} /></div>
      <div className='flex'>{children}</div>
    </div>
  );
};

export default BaseFormPage;
