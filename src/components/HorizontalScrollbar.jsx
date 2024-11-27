import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css'; // Ensure correct styles are applied
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Arrow components
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={(e) => {
        e.preventDefault(); // Prevent default page scrolling
        scrollPrev();
      }}
      className="left-arrow"
      style={{ cursor: 'pointer' }} // Add styles for better UX
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={(e) => {
        e.preventDefault(); // Prevent default page scrolling
        scrollNext();
      }}
      className="right-arrow"
      style={{ cursor: 'pointer' }} // Add styles for better UX
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Main HorizontalScrollbar component
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  return (
    <Box style={{ overflowX: 'hidden', width: '100%' }}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item} // Ensures proper unique identification
            title={item.id || item}
            m="0 40px"
          >
            {bodyParts ? (
              <BodyPart
                item={item}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
              />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
