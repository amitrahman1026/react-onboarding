import React, { ReactNode } from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export interface FormPageProps {
  children: ReactNode;
  currentPage: number;
  totalPages: number;
}

const BaseFormPage: React.FC<FormPageProps> = ({ children, currentPage, totalPages }) => {
  const progress = Math.floor(((currentPage-1) / totalPages) * 100);

  return (
    <div className="flex flex-col h-screen">
      <header>
        <LinearProgress variant="determinate" value={progress} />
      </header>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default BaseFormPage;
