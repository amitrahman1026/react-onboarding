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
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleFormSubmit = () => {
    // Handle form submission here
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return (
          <RolesSelectionPage
            handleRoleSelection={(role: string) => updateFormData({ roles: role })}
          />
        );
      case 1:
        return (
          <StudyTimeSelectionPage
            handleHoursPerWeekChange={(newValue: number) =>
              updateFormData({ studyTime: { ...formData.studyTime, hoursPerWeek: newValue } })
            }
            handleWeeksToCommitChange={(newValue: number) =>
              updateFormData({ studyTime: { ...formData.studyTime, weeksToCommit: newValue } })
            }
          />
        );
      case 2:
        return (
          <MarketingDataSurveyPage
            handlePlatformSelection={(platform: string) => {
              const selectedPlatforms = formData.marketingPlatforms;
              if (selectedPlatforms.includes(platform)) {
                updateFormData({
                  marketingPlatforms: selectedPlatforms.filter((item) => item !== platform),
                });
              } else {
                updateFormData({
                  marketingPlatforms: [...selectedPlatforms, platform],
                });
              }
            }}
          />
        );
      case 3:
        return <InterviewTimelineSelectionPage />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="flex flex-col items-center w-4/5 my-8">
        {renderPage()}
      </div>
      <div className="flex justify-between w-4/5 p-4">
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
      </div>
    </div>
  );
};

export default RegisterContainer;