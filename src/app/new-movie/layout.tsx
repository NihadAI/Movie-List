"use client"
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React, { ReactNode } from 'react'
import MovieForm from './upload/form'




const Layout = ({children}: {children: ReactNode}) => {

  return (
    <MaxWidthWrapper className='flex flex-1 flex-col mt-10'>
        <div className='flex justify-end'>
            <h1 className='capitalize text-4xl text-white font-semibold'>create a new movie</h1>
        </div>
        <div className='flex-row flex-1 w-full grid grid-cols-2 gap-4 justify-between'>
            {children}
            <div className='flex flex-col w-3/4 justify-center'>
                <MovieForm/>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Layout