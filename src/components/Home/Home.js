import React from 'react';
import Container from '../common/Container';
import Splash from '../common/Splash';
import splashImg from "../../assets/timeclock.jpg";



const Home=()=>{
    return(
        <Container>
            <Splash image={splashImg}>
                <h1 style={{textShadow: '1px 1px white'}}>Welcome to Punch Time</h1>
                <h2 style={{textShadow: 'white 1px 1px'}}>Time Card Management System</h2>   
            </Splash>
         </Container>
    )
}

export default Home;