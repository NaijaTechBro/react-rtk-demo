import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = React.useState(1)
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>Number of  icecream - {numOfIcecreams}</h2>
    <button
    onClick={() => dispatch(ordered(value))}
    >Order icecream</button>
    <button
    onClick={() => dispatch(restocked(value))}
    >Restocked icecream</button>
    <input
    type='number'
    value={value}
    onChange={(e) => setValue(parseInt(e.target.value))}
    />
</div>
  )
}
