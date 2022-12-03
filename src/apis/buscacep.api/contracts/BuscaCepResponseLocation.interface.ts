import { BuscaCepResponseCoordinates } from './BuscaCepResponseCoordinates.interface';

export interface BuscaCepResponseLocation {
  coordinates?: BuscaCepResponseCoordinates
  type: string
}