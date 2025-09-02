"use client"

import { useTheme } from '@/components/theme-providers'
import ThemeButton from '@/components/themeButton'

const Profile = () => {
  const { theme } = useTheme() 

  return (
    <div className='main flex h-100 justify-center align-center'
      style={{ backgroundColor: theme.colors.secondary, color: theme.colors.primary }}
    >
      <h2
        className='text-[2rem]'
      >
        Profile page (client)
      </h2>

      <ThemeButton />
    </div>
  )
}

export default Profile
