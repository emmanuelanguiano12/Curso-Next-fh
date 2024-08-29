"use client"

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {

    const count = useAppSelector(state => state.counter.count) //Conectarse al store de Redux

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget 
            title={count.toString()}
            subtitle='Items en el carrito'
            href='/dashboard/counter'
            label='Contador'
            icon={<IoCartOutline size={70} className='text-blue-600'/>}
        />
      </div>
  )
}
