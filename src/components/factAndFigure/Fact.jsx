
import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Gradient } from '@mui/icons-material';
import BasicCard from '../card/Card';
import { Card, dividerClasses } from '@mui/material';


const Fact = ({ factData }) => {
  return (
    <Container maxWidth='false'
      sx={{ background: '', height: '65vh', backgroundImage: "url('/fact-bg.jpg')" }} >
      <Typography
        sx={{ textAlign: 'center', fontSize: '40px', fontWeight: '900', paddingTop: '40px' }}
      >
        Facts and Figures
      </Typography>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-evenly', margin: '20px' }}>
        {factData.map((card, i) => (
          <Box
            height={300}
            width={300}
            my={2}
            gap={4}
            p={2}
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              backgroundColor: '#bdb8d9 ', borderRadius: '20px'
            }}>
            <img height={110} style={{ marginTop: '10px' }} key={i} src={card.href} />
            <Typography variant='h3' fontWeight={800} key={i}>{card.num}</Typography>
            <Typography variant='h4' fontWeight={900} key={i}>{card.title}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Fact