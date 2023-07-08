import React, { ReactNode } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

export interface FormPageProps {
  onNext: () => void; // Function to handle the next action
  onPrevious: () => void; // Function to handle the previous action
  children: ReactNode; // Children elements of the form page
}

const BaseFormPage: React.FC<FormPageProps> = ({ onNext, onPrevious, children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '50vh' }}>
      <header>
        <LinearProgress />
      </header>
      <main style={{ flexGrow: 1 }}>{children}</main>
      <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
        <Button variant="outlined" onClick={onPrevious}>
          Previous
        </Button>
        <Button variant="contained" onClick={onNext}>
          Next
        </Button>
      </footer>
    </div>
  );
};

export default BaseFormPage;
