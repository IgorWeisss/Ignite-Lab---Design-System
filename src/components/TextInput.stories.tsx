import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  argTypes: {},
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      
      <TextInput.Input placeholder='Digite seu e-mail' />
    ]
  }
} as Meta <TextInputRootProps>

export const Default: StoryObj <TextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable:true
      }
    }
  }
}

export const WithoutIcon: StoryObj <TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input placeholder='Digite seu e-mail' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable:true
      }
    }
  }
}