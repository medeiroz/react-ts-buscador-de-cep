import { FormEvent, useState } from 'react'
import buscaCepApi from './apis/buscacep.api'
import { BuscaCepResponse } from './apis/buscacep.api/contracts/BuscaCepResponse.interface'
import { CepResult } from './components/CepResult'
import { SearchButton } from './components/SearchButton'
import { SearchInput } from './components/SearchInput'
import cepValidator from './validators/cep.validator' 

function App() {

  const [input, setInput] = useState<string>('')
  const [cep, setCep] = useState<BuscaCepResponse | null>(null)

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    setCep(null)

    if (cepValidator(input) === false) {
      return alert('Cep inválido')
    }
    
    buscaCepApi(input)
    .then(response => setCep(response.data))
    .catch(() => alert('Erro ao obter os dados. Verifique os campos e tente novamente'))
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-slate-700">
      <h1 className="text-4xl md:text-6xl text-white animate-flip">Buscador de CEP</h1>

      <form
        className='flex rounded bg-white bg-opacity-20 p-3 my-10 shadow-md shadow-black/50'
        onSubmit={handleSearch}
      >
        <SearchInput
          type="text"
          placeholder="Digite o Cep"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <SearchButton type="submit"/>
      </form>

      { cep !== null && <CepResult cep={cep} /> }
      
    </div>
  )
}

export default App
