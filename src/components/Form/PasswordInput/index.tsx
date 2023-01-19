import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'

export const PasswordInput = (props: InputProps) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <InputGroup>
      <Input type={show ? 'email' : 'password'} {...props} />
      <InputRightElement>
        <Button
          bg="none"
          rightIcon={
            show ? (
              <ViewIcon color="purple.500" fontSize="xl" />
            ) : (
              <ViewOffIcon color="purple.500" fontSize="xl" />
            )
          }
          iconSpacing={0}
          onClick={() => setShow(!show)}
          _hover={{ bg: 'none' }}
        />
      </InputRightElement>
    </InputGroup>
  )
}
