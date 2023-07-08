// RolesSelectionPage.tsx
import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { blueGrey } from '@mui/material/colors';
import { FormData } from '../utils/formData';

const roles = [
  { name: 'Internship', icon: <EngineeringIcon /> },
  { name: 'Entry-level Job', icon: <EngineeringIcon /> },
  { name: 'Junior Software Engineer', icon: <EngineeringIcon /> },
  { name: 'Senior Software Engineer', icon: <EngineeringIcon /> },
  { name: 'Data Scientist', icon: <EngineeringIcon /> },
  { name: 'Machine Learning Engineer', icon: <EngineeringIcon /> },
];

interface RolesSelectionPageProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const RolesSelectionPage: React.FC<RolesSelectionPageProps> = ({ formData, updateFormData }) => {
  const [selectedRole, setSelectedRole] = useState('');
  
  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
    updateFormData({ roles: role }); // Update the form data
  };

  return (
    <div className='flex'>
      <BaseFormPage currentPage={1} totalPages={4}>
        <h2>Select your roles:</h2>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
          }}
        >
          {roles.map((role) => (
            <Button
              key={role.name}
              variant="contained"
              sx={{
                width: '120px',
                height: '120px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: selectedRole === role.name ? '#dcdcdc' : blueGrey[500],
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#dcdcdc',
                },
              }}
              onClick={() => handleRoleSelection(role.name)}
            >
              {role.icon}
              <span>{role.name}</span>
            </Button>
          ))}
        </Box>
      </BaseFormPage>
    </div>
  );
};

export default RolesSelectionPage;
