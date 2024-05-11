
import React from 'react'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Gradient } from '@mui/icons-material';
import BasicCard from '../card/Card';
import { Card, dividerClasses } from '@mui/material';


const Fact = ({ factData }) => {
  return (
    <>

      <Container maxWidth='false'
        sx={{ background: 'lightgray', height: '70vh' }} >

        <Typography
        sx={{ textAlign:'center', fontSize:'50px', fontWeight:'700', paddingTop:'20px'}}
         >
          Fact and Figures
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '60px' }}>
          {factData.map((card, i) => (
            <Box sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px', width: '300px',
              backgroundColor: '#ECF0F1 ', borderRadius: '20px', boxShadow: ''

            }}>
              <img height={100} style={{ marginTop: '10px' }} key={i} src={card.href} />
              <Typography variant='h3' fontWeight={600} sx={{ marginTop: '15px', }} key={i}>{card.num}</Typography>
              <Typography variant='h4' fontWeight={600} sx={{ marginTop: '30px' }} key={i}>{card.title}</Typography>
            </Box>
          ))}
        </Box>


      </Container>

    </>
  )
}

export default Fact