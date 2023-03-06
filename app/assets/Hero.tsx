'use client';


import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';

import styles from '../assets/styles/hero.module.css';



export default function HomePageHero() {
  return (
    <>
           <div className={styles.heroContainer}>
                <div className={styles.heroInnerContainer}>
                    <Box className={styles.call2action}>
                        <h1 className={styles.call2actionHeading}>We have all the tools you need to grow your business.</h1>
                        <p  className={styles.call2actionDescription}>We are here to help you build a brand online, tell your story to the world, showcase who you truly are. Nodes Unlimited Worry Free Managed Services are next generation solutions to help you excel.</p>
                        <Button  style={{backgroundColor:'tomato', color:'#fff'}}>Find more...</Button>
                    </Box>
                </div>
           </div>
    </>
  );
}

