import {  PersonStandingIcon } from 'lucide-react'

const MenuTitle = () => {
  return (
    <h4 className='flex items-center gap-2'>
      <PersonStandingIcon className='text-pink-500' size={40} />
      Welcome
    </h4>
  )
}

export default MenuTitle