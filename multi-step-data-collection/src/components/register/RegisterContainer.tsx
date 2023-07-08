import React, { useState } from 'react';
import RolesSelectionPage from './RolesSelectionPage';
import StudyTimeSelectionPage from './StudyTimeSelectionPage';
import MarketingDataSurveyPage from './MarketingDataSurveyPage';
import InterviewTimelineSelectionPage from './InterviewTimelineSelectionPage';
import { useForm } from './formData';
import Button from '@mui/material/Button';

const RegisterContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, updateFormData] = useForm();

  const handleNextPage = () => {
    console.log('Next page');
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFormSubmit = () => {
    console.log('Form submitted');
    console.log(JSON.stringify(formData)); // Log the formData as JSON
    // Handle form submission here
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <MarketingDataSurveyPage />;
      case 1:
        return <RolesSelectionPage />;
      case 2:
        return <InterviewTimelineSelectionPage />;
      case 3:
        return <StudyTimeSelectionPage />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='flex'>{renderPage()}</div>
      <div className='flex'>
        <footer className='flex' style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
          {currentPage > 0 && (
            <Button variant="outlined" onClick={handlePreviousPage}>
              Previous
            </Button>
          )}
          {currentPage < 3 ? (
            <Button variant="contained" onClick={handleNextPage}>
              Next
            </Button>
          ) : (
            <Button variant="contained" onClick={handleFormSubmit}>
              Submit
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
};

export default RegisterContainer;
