import React, { useState } from 'react';
import { Typography, Box, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '20px' } }}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <Box
            key={index}
            className="exercise-video"
            sx={{
              position: 'relative',
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '20px',
              overflow: 'hidden',
              width: { lg: '350px', xs: '100%' },
            }}
          >
            <img
              style={{ width: '100%', display: 'block' }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              onClick={() => setSelectedVideoId(item.video.videoId)}
            />
            <Box p="10px">
              <Typography
                sx={{ fontSize: { lg: '20px', xs: '16px' } }}
                fontWeight={600}
                color="#000"
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      {selectedVideoId && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              color: 'white',
              zIndex: 11,
            }}
            onClick={() => setSelectedVideoId(null)}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Exercise Video"
            style={{
              width: '70%',
              height: '70%',
              borderRadius: '10px',
            }}
          ></iframe>
        </Box>
      )}
    </Box>
  );
};

export default ExerciseVideos;
