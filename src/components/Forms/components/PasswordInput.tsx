import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputProps,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Controller } from 'react-hook-form'

type PasswordInputProps = InputProps & {
  control: any
}

export const PasswordInput = ({ control, ...rest }: PasswordInputProps) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <Controller
      control={control}
      name="password"
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="current-password"
            {...rest}
          />
          <InputRightElement>
            <Button
              bg="none"
              rightIcon={
                show ? (
                  <ViewIcon
                    color={error ? 'error.primary' : 'primary.500'}
                    fontSize="xl"
                  />
                ) : (
                  <ViewOffIcon
                    color={error ? 'error.primary' : 'primary.500'}
                    fontSize="xl"
                  />
                )
              }
              iconSpacing={0}
              onClick={() => setShow(!show)}
              _hover={{ bg: 'none' }}
            />
          </InputRightElement>
        </InputGroup>
      )}
    />
  )
}
