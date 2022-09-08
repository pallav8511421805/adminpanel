import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import React, { useMemo, useState } from 'react'

function Memoexple(props) {
  const [count, setcount] = useState(0)
  const [number, setnumber] = useState(0)

  const factorial = (n) => {
    if (n > 1) {
      return n * factorial(n - 1)
    } else {
      return 1
    }
  }

  // without usememo
  // const result = factorial(number);

  const result = useMemo(() => factorial(number), [number])

  return (
    <>
      <h1>Usememo</h1>
      <TextField
        id="standard-basic"
        label="Enter any number"
        variant="standard"
        style={{ display: 'block', margin: '5px 0' }}
        onChange={(e) => {
          setnumber(e.target.value)
        }}
      />
      <h1>Counter: {count}</h1>
      <h1>Factorial is: {result}</h1>
      <Button variant="outlined" onClick={() => setcount(count + 1)}>
        Count
      </Button>
    </>
  )
}

export default Memoexple
