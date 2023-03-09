import React, {useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Input',
}

export const UncontrolledInput = () => <input  />;
export const TrackValueOfUncontrolledInput = () => {
  const [value,setValue] = useState('')
  return (
      <>
        <input onChange={(event) => setValue(event.currentTarget.value)} /> - {value}
      </>
  )
}
export const GetValueByBtnPressUncontrolledInput = () => {
  const [value,setValue] = useState('')
  let inputRef = useRef<HTMLInputElement>(null)


  const save = () => {
      let el = inputRef.current as HTMLInputElement
      setValue(el.value)
  }

  return (
      <>
        <input ref={inputRef} /> <button onClick={save}>save</button> - actual value {value}
      </>
  )
}


export const ControlledInputWithFixedValue = () => <input value={1324123} />;




