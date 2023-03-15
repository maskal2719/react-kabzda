import {reducer, StateType} from "./reducer";
import {action} from "@storybook/addon-actions";

test('reducer should change value to opposite value' , () => {

    //data
    const state: StateType = {
        collapsed : false
    }

    //action
    const newState = reducer(state,{type: 'TOGGLE-COLLAPSED'})

    //expection
    expect(state.collapsed).toBe(false)
    expect(newState.collapsed).toBe(true)

})
test('fake type' , () => {

    //data
    const state: StateType = {
        collapsed : false
    }

    //expection
    // expect(() => {
    //     reducer(state,{type: 'Fake'})
    // }).toThrowError()

    expect(() => {
        reducer(state, {type: '123123123'})
    }).toThrowError('3123123123')
})
