import React from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const jobPlatforms = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/search/?keywords=' },
  { name: 'Indeed', url: 'https://www.indeed.com/jobs?q=' },
  { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/jobs.htm?sc.keyword=' },
  { name: 'ZipRecruiter', url: 'https://www.ziprecruiter.com/jobs/search?search=' },
  { name: 'SimplyHired', url: 'https://www.simplyhired.com/search?q=' },
  { name: 'Snagajob', url: 'https://www.snagajob.com/search?q=' },
  { name: 'Hired', url: 'https://hired.com/job-search?query=' },
];

const JobSearch = ({ skills = '' }) => {
  const handleSearch = (platformUrl) => {
    if (!skills) {
      alert('Please provide skills to search for jobs.');
      return;
    }
    
    const skillQuery = skills.split(', ').join('+');
    const searchURL = `${platformUrl}${skillQuery}`;
    window.open(searchURL, '_blank');
  };

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="#4682B4" marginLeft="50px" textColor="black" >
          Search Jobs by Skills
        </MenuButton>
        <MenuList>
          {jobPlatforms.map((platform) => (
            <MenuItem key={platform.name} onClick={() => handleSearch(platform.url)}>
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default JobSearch;
