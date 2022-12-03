import { BuscaCepResponse } from './contracts/BuscaCepResponse.interface';
import api from '../brasilapi.api'


export default async function (cep: string) {
  const digitsOfCep = cep.replace(/\D/g, '')

  return api.get<BuscaCepResponse>(`cep/v2/${digitsOfCep}`)
}