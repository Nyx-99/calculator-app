'use client'
import { useReducer, useState } from 'react'
import { Button } from './components/calculator-button'
import { Screen } from './components/calculator-screen'
import { Header } from './components/calculator-header'
import { ThemeProvider } from './store'
import { INPUT_VALUE, DELETE_VALUE, RESET_VALUE,CALCULATE_VALUE, RESULT, initState, inputReducer } from './store'


export default function Home() {
  const [state, dispatch] = useReducer(inputReducer, initState)
  function handleClick(key) {
    key.active = true
    // key.active = false
    if (key.number)
    {
      dispatch({
        type: INPUT_VALUE,
        value: key.number,
      })
      console.log('input')
    }
    
    if (key.id == 'delete')
    {
      dispatch({
        type: DELETE_VALUE,
      })
    }

    if (key.id == 'clear')
    {
      dispatch({
        type: RESET_VALUE
      })
      console.log('reset')
    }

    if (key.operator)
    {
      dispatch({
        type: CALCULATE_VALUE,
        value: key.number ,
        operator: key.operator,
        // index :id
      })
    }

    if (key.id == 'equals')
    {
      dispatch({
        type: RESULT,
        operator: key.operator
      })
      console.log('result')
    }
    // console.log(key)
  }

  function handleActive(key) {
    key.active = true
    console.log(key.active)
  }

  function handleInactive(key) {
    key.active = false
  }

  return (
    <div id='container'>
      <ThemeProvider>
        <Header strategy="beforeInteractive" />
        <Screen
          inputs={state}
        />
        <Button
          onHandleClick={handleClick}
          onHandleActive={handleActive}
          onHandleInactive={handleInactive}
        />
      </ThemeProvider>
    </div>
  )
}
