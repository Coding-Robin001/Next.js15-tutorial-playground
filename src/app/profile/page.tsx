import { useTheme } from '@/components/theme-providers'
import React from 'react'

const Profile = () => {

  const theme = useTheme


  return (
    <div className='main flex h-100 justify-center align-center'>
      <h2 className='text-[2rem]' style={{backgroundColor:theme.colors.primary}}>Profile page</h2>
    </div>
  )
}

export default Profile
