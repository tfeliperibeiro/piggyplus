import { AddIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'

export const AddTransactionButton = () => {
  return (
    <IconButton
      aria-label="add-button"
      icon={<AddIcon />}
      position="fixed"
      right={{ base: '8', sm: '16', md: '16', lg: '24', xl: '32' }}
      bottom={{ base: '12', sm: '16', md: '16', lg: '24', xl: '32' }}
      size="lg"
      color="text.light.900"
      bg="primary.500"
      borderRadius="full"
      boxShadow="xl"
      _hover={{ bg: 'primary.700' }}
    />
  )
}
