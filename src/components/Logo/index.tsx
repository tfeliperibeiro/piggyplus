import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Text
      sx={{
        backgroundImage: 'linear-gradient(to right, #805AD5, #44337A)',
        backgroundClip: 'text',
      }}
      align="center"
      fontSize="4xl"
      fontWeight="extrabold"
    >
      Piggy
      <Text fontSize="5xl" as="span">
        +
      </Text>
    </Text>
  )
}
