import React, {useRef, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';
import {action} from "@storybook/addon-actions";

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

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    return (
        <input value={parentValue} type="text" onChange={(e) => setParentValue(e.currentTarget.value)}/>
    )
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)

    return (
        <input type="checkbox" checked={parentValue} onChange={(e) => setParentValue(e.currentTarget.checked)}/>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return (
        <select value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)}>
            <option >none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Gomel</option>
        </select>
    )
}

export const ControlledInputWithFixedValue = () => <input value={1324123} />;




