import React, { useState } from 'react';
import BaseFormPage from './BaseFormPage';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { blueGrey } from '@mui/material/colors';

const roles = [
  { name: 'Internship', icon: <EngineeringIcon /> },
  { name: 'Entry-level Job', icon: <EngineeringIcon /> },
  { name: 'Junior Software Engineer', icon: <EngineeringIcon /> },
  { name: 'Senior Software Engineer', icon: <EngineeringIcon /> },
  { name: 'Data Scientist', icon: <EngineeringIcon /> },
  { name: 'Machine Learning Engineer', icon: <EngineeringIcon /> },
];

const RolesSelectionPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
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
