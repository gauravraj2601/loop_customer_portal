import React from 'react'
import welcomeBanner from "../../Assets/welcomeLoop.svg"
import { Box } from '@chakra-ui/react'
const Container = () => {
  return (
    <Box >
        <img src={welcomeBanner} alt="welcome_Banner" />
    </Box>
  )
}

export default Container