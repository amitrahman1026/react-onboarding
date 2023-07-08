import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Button from '@mui/material/Button';
import RedditIcon from '@mui/icons-material/Reddit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import { blueGrey } from '@mui/material/colors';
import { useForm } from './formData';

interface MarketingDataSurveyPageProps {
  handlePlatformSelection: (platform: string) => void;
}

const marketingPlatforms = [
  { name: 'Instagram', icon: <InstagramIcon /> },
  { name: 'Reddit', icon: <RedditIcon /> },
  { name: 'Facebook', icon: <FacebookIcon /> },
  { name: 'YouTube', icon: <YouTubeIcon /> },
  // Add more marketing platforms as needed
];

const MarketingDataSurveyPage: React.FC<MarketingDataSurveyPageProps> = ({ handlePlatformSelection }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [formData, updateFormData] = useForm(); // Retrieve form data and update function from the useForm hook

  const handleSelection = (platform: string) => {
    if (selectedPlatforms.includes(platform)) {
      setSelectedPlatforms(selectedPlatforms.filter((item) => item !== platform));
      updateFormData({ marketingPlatforms: selectedPlatforms.filter((item) => item !== platform) }); // Update the form data
    } else {
      setSelectedPlatforms([...selectedPlatforms, platform]);
      updateFormData({ marketingPlatforms: [...selectedPlatforms, platform] }); // Update the form data
    }
    handlePlatformSelection(platform); // Call the prop function here
  };

  return (
    <BaseFormPage currentPage={0} totalPages={4}>
      <h2>How did you hear about us?</h2>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        {marketingPlatforms.map((platform) => (
          <Button
            key={platform.name}
            variant="contained"
            sx={{
              width: '120px',
              height: '120px',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: selectedPlatforms.includes(platform.name) ? '#dcdcdc' : blueGrey[500],
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#dcdcdc',
              },
            }}
            onClick={() => handleSelection(platform.name)}
          >
            {platform.icon}
            <span>{platform.name}</span>
          </Button>
        ))}
      </Box>
    </BaseFormPage>
  );
};

export default MarketingDataSurveyPage;
