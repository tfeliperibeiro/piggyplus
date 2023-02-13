import {
  Grid,
  GridItem,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'

export const CardBalance = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(3, 1fr)',
      }}
      w={{
        base: 'full',
        sm: 'full',
        md: 'container.md',
        lg: 'container.lg',
        xl: 'container.xl',
      }}
      m={{ base: '0', sm: '0', md: '0 auto', lg: '0 auto' }}
      mt={{ base: '16', sm: '16', md: '16', lg: '16' }}
      mb={{ base: '16', sm: '0', md: '0', lg: '0', xl: '0' }}
      rowGap={{ base: '12', sm: '12', md: '12', lg: '0' }}
      justifyItems={{ base: 'center', md: 'center' }}
      alignItems={{ base: 'center', md: 'center' }}
    >
      <GridItem
        bg="card.50"
        h="36"
        w="xs"
        p="4"
        boxShadow="md"
        borderRadius="lg"
      >
        <Stat>
          <StatLabel color="text.primary.400">Saldo Total</StatLabel>
          <StatNumber color="text.primary.600">R$ 50,00</StatNumber>
          <StatHelpText color="text.primary.400">
            12 de Fevereiro de 2023
          </StatHelpText>
        </Stat>
      </GridItem>
      <GridItem
        bg="card.50"
        h="36"
        w="xs"
        p="4"
        boxShadow="md"
        borderRadius="lg"
      >
        <Stat>
          <StatLabel color="text.primary.400">Receitas</StatLabel>
          <StatNumber color="text.primary.600">R$ 150,00</StatNumber>
          <StatHelpText color="text.primary.400">
            Última receita: 5 de Fevereiro de 2023
          </StatHelpText>
          <StatArrow type="increase" />
        </Stat>
      </GridItem>
      <GridItem
        bg="card.50"
        h="36"
        w="xs"
        p="4"
        boxShadow="md"
        borderRadius="lg"
      >
        <Stat>
          <StatLabel color="text.primary.400">Despesas</StatLabel>
          <StatNumber color="text.primary.600">- R$ 100,00</StatNumber>
          <StatHelpText color="text.primary.400">
            Última despesa: 9 de Fevereiro de 2023
          </StatHelpText>
          <StatArrow type="decrease" />
        </Stat>
      </GridItem>
    </Grid>
  )
}
