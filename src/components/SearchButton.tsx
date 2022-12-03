import { ButtonHTMLAttributes } from 'react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'

interface SearchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
}

const SearchButton = (props: SearchButtonProps) => {
  return (
        <button
          className='flex content-center cursor-pointer bg-transparent border-none hover:scale-125 duration-200'
          { ...props }
        >
          <HiOutlineMagnifyingGlass size={25} color="white"/>
        </button>
        )
}

export { SearchButton }