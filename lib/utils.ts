/**
 *
 * @param {Number} num
 * @returns {String} 1K, 1M, 1B
 */
export const abbreviateNumberByMagnitude = (num: number, { fixed }: any = {}): string => {
  const fix = (val: number) => (fixed ? val.toFixed(fixed) : val)
  if (num >= 1000000000000) {
    return `${fix(num / 1000000000000)}T`
  } else if (num >= 1000000000) {
    return `${fix(num / 1000000000)}B`
  } else if (num >= 1000000) {
    return `${fix(num / 1000000)}M`
  } else if (num >= 1000) {
    return `${fix(num / 1000)}K`
  } else {
    return `${num}`
  }
}

export const classNames = (...classes: any): string => {
  return classes.filter(Boolean).join(' ')
}