import { bigUnitsExceptions, getBigUnit, numbersExceptions } from 'src/composables/utils/numbersExceptions'
import { centenas, decenas, unidadDecenas, unidades } from 'src/composables/utils/units'

/* eslint-disable no-console */
export function toLetter(fromNumber: string): string {
  console.log('lettet')
  const myNumberSplit = fromNumber.split(',').reverse()
  const totalSplit = myNumberSplit.length - 1
  let letterNumber = ''

  for (let i = totalSplit, len = 0; i >= len; i--) {
    const myActualNumber = myNumberSplit[i]

    letterNumber += getNumber(myActualNumber) + getBigUnit(i, myActualNumber)

    if (i === 0) {
      letterNumber = bigUnitsExceptions(letterNumber)
    }
  }

  return letterNumber
}

function getNumber(threeNumbers: string): string {
  const splitInNumber = threeNumbers.split('').reverse()
  const totalIN = splitInNumber.length - 1
  let strNumber = ''
  let mayor = false
  let addAnd = false

  for (let i = totalIN, len = 0; i >= len; i--) {
    mayor = (i === 1 && splitInNumber[i] === '1')
    addAnd = (i === 0 && parseInt(splitInNumber[i]) > 0 && parseInt(splitInNumber[i + 1]) > 2)

    strNumber += stepByStep(i, splitInNumber[mayor ? i - 1 : i], mayor, addAnd)

    if (i === 0) { strNumber = numbersExceptions(strNumber) }

    if (mayor) { i-- }
  }

  return strNumber
}

function stepByStep(intStep: number, strNumber: string, mayor: boolean, addAnd: boolean): string {
  switch (intStep) {
    case 0: return (addAnd ? ' y ' : '') + getUnits(strNumber).replace('  ', ' ')
    case 1: return getTens(strNumber, mayor).replace('  ', ' ')
    case 2: return getHundreds(strNumber).replace('  ', ' ') + ' '
    default: return ''
  }
}

function getUnits(unit: string) : string {
  return unidades[unit]
}

function getTens(ten: string, mayor: boolean) : string {
  return mayor ? unidadDecenas[ten] : decenas[ten]
}

function getHundreds(hundred: string): string {
  return centenas[hundred]
}
