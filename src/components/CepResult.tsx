import { BuscaCepResponse } from "../apis/buscacep.api/contracts/BuscaCepResponse.interface";

interface CepResultProps {
  cep: BuscaCepResponse
}

const CepResult = (props: CepResultProps) => {
  return (
        <main className='flex flex-col justify-evenly bg-white rounded mx-8 py-4 px-8 max-w-lg md-w-3/4 w-full h-48'>
          <span>CEP: { props.cep.cep }</span>
          <span>Rua: { props.cep.street }</span>
          <span>{ props.cep.neighborhood }</span>
          <span>{ props.cep.city } - { props.cep.state }</span>
        </main>
      )
}

export { CepResult }