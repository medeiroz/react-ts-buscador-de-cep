import { InputHTMLAttributes } from 'react'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
}

const SearchInput = (props: SearchInputProps) => {
  return (
        <input
          className='bg-transparent border-none text-lg text-white outline-none mr-2 placeholder:text-gray-300'
          { ...props }
        />
        )
}

export { SearchInput }