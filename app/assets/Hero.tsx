'use client';

import {
  Box,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
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
          <Box className={styles.call2action} p="4">
            <Heading className="call2actionHeading">
              <Center>Let&apos;s Search for Your Next Domain</Center>
            </Heading>

            <Text
              pb="8"
              pt="4"
              sx={{ justifyContent: 'center', textAlign: 'center' }}
            >
              We specialize in Premium Domains Services, Web Hosting, Managed
              Web Hosting, Decentralized Web3 Hosting, SSL Certificates and
              more.
            </Text>

            <form
              action="https://my.nodesunlimited.com/cart.php?a=add&domain=register"
              method="post"
            >
              <Stack
                direction={'row'}
                style={{
                  justifyContent: 'center',
                  width: '80%',
                  margin: '0 auto',
                }}
              >
                <Input
                  type="text"
                  name="query"
                  size="20"
                  p="2"
                  placeholder="Type your domain here..."
                  style={{ border: '1px solid orange' }}
                />
                <Button
                  className="chakra-button register css-sqq147"
                  type="submit"
                  width="100px"
                >
                  Go
                </Button>
              </Stack>
            </form>
          </Box>
        </div>
      </div>
    </>
  );
}
