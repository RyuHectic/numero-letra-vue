import { bigUnits } from './units'

export function numbersExceptions(strNumber: string): string {
  let Letter = strNumber.replace('  ', ' ')

  if (searchVeinte(Letter)) { Letter = Letter.replace('veinte', 'veinti').trim() }

  if (searchCero(Letter)) { Letter = Letter.replace('cero', '').trim() }

  if (Letter.trim() === 'ciento') { Letter = 'cien' }

  return Letter.replace('  ', ' ')
}

const searchCero = (Number: string) => Number.length > 4 && Number.indexOf('cero') > -1

const searchVeinte = (Number: string) => Number.indexOf('veinte') > -1 && Number.indexOf('cero') === -1

export const getBigUnit = (step: number, ActualNumber: string) => parseInt(ActualNumber) === 0 ? '' : ` ${bigUnits[step]} `

export function bigUnitsExceptions(Number: string): string {
  let Letter = Number.replace('  ', ' ')

  if (Letter.includes('uno cuatrillones')) {
    Letter = Letter.replace('uno cuatrillones', 'un cuatrillon').trim()
  }

  if (Letter.includes('uno trillones')) {
    Letter = Letter.replace('uno trillones', 'un trillon').trim()
  }

  if (Letter.includes('uno billones')) {
    Letter = Letter.replace('uno billones', 'un billon').trim()
  }

  if (Letter.includes('uno millones')) {
    Letter = Letter.replace('uno millones', 'un millon').trim()
  }

  if (Letter.trim().includes('uno mil')) {
    Letter = Letter.replace('uno mil', 'mil').trim()
  }

  return Letter.replace('  ', ' ')
}
