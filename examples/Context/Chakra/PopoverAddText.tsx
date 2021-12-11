import React, { useState } from 'react'
import useInstance from '../../../src'
import { addText } from '../utils'
import {
  Box,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Popover,
  ButtonGroup,
  Button,
  PinInput,
  PinInputField,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Switch,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

const TextInput = props => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id} color={'white'}>
        {props.label}
      </FormLabel>
      <Input id={props.id} {...props} />
    </FormControl>
  )
}

const Form = ({ onCancel }) => {
  const [showForm, setShowForm] = useState(false)
  const [dateValue, setDateValue] = React.useState('')
  const { instance } = useInstance()

  function toggleShow() {
    setShowForm(!showForm)
  }

  function handleChange(value) {
    setDateValue(value)
  }

  function getAndAdd() {
    const fn = document.getElementById('first-name').value
    const ln = document.getElementById('last-name').value
    const texts =
      (fn ? fn : '') +
      (ln ? ' ' + ln : '') +
      (dateValue ? '\n' + dateValue : '')
    if (texts) addText(instance, texts)
  }
  return (
    <Stack spacing={4} pt={4}>
      <TextInput label='First name' id='first-name' defaultValue='Mark' />
      <TextInput label='Last name' id='last-name' defaultValue='Chan' />
      <Text>
        <Switch
          mr={2}
          pb={1}
          size='md'
          onChange={toggleShow}
          width={'max-content'}
        />
        Initials and Date (mmdd)
      </Text>
      {showForm && (
        <HStack justifyContent='space-between'>
          <PinInput type='alphanumeric' onChange={handleChange}>
            {[...new Array(6)].map((u,i) => (
              <PinInputField key={'date'+i}/>
            ))}
          </PinInput>
        </HStack>
      )}
      <ButtonGroup d='flex' justifyContent='flex-end' pt={2}>
        <Button colorScheme='teal' onClick={getAndAdd}>
          Add
        </Button>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

function PopoverAddText() {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Popover
      placement='bottom'
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}>
      <PopoverTrigger>
        <Button colorScheme='blue' mr={3}>
          Popover Add Text
        </Button>
      </PopoverTrigger>
      <PopoverContent color='white' bg='blue.700' borderColor='blue.700'>
        <PopoverHeader pt={4} fontSize='22' fontWeight='bold' border='0'>
          Add Your Name
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Some explaination texts usually go here.
          <Form onCancel={onClose} />
        </PopoverBody>
        <PopoverFooter
          border='0'
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          pb={4}>
          <Box fontSize='sm'>*Footnote Placeholder</Box>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAddText
