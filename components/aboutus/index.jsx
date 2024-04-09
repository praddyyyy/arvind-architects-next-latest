import React from 'react'
import Text3d from '../text3d'

export default function index() {
  return (
    <div className='h-screen flex items-center justify-between'>
      <div>
        <Text3d primary={"About"} secondary={"Us"} />
      </div>
    </div>
  )
}
