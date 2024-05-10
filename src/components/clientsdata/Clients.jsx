
import React from 'react'

import BasicCard from '../card/Card';
import Card from '../card/Card'
import { Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Clients = ({ clientsData }) => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }} >Our Clients</h1>
            <Carousel autoPlay={true}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                }}
            >

            {clientsData.map((client, i) => (

                <Box sx={{ marginLeft:'20cm', height: '300px', width: 'px', borderRadius: '20px',

                }}>

                    <img height={200} key={i} src={client.img} />
                    </Box>
                ))}
                 </Carousel>
                </>
            )
}

            export default Clients