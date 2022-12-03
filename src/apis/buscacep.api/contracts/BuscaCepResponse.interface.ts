import { BuscaCepResponseLocation } from "./BuscaCepResponseLocation.interface";

export interface BuscaCepResponse {
  cep: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,
  service: string,
  location: BuscaCepResponseLocation,
}