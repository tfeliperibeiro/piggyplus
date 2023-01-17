import { Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Text
      sx={{
        backgroundImage: 'linear-gradient(to right, #00B5D8, #9AE6B4)',
        backgroundClip: 'text',
      }}
      fontSize="4xl"
      color="teal.500"
      fontWeight="extrabold"
    >
      Piggy
      <Text fontSize="5xl" as="span">
        +
      </Text>
    </Text>
  )
}
