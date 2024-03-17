import { useRifm } from 'rifm'

function decimalNumber(input: string) {
  const matches = input.match(/\d+[.]?\d{0,27}/) || []
  return matches.join('')
}

interface UseDecimalNumberRifmOptions
  extends Omit<Parameters<typeof useRifm>[0], 'format'> {}

export const useDecimalNumberRifm = (options: UseDecimalNumberRifmOptions) =>
  useRifm({
    ...options,
    format: decimalNumber,
    accept: /[\d.]+/g,
  })
