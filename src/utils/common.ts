/**
 *
 * @description TS下通过字符串从对象中获取想要的值
 * @param o 想要获取数据的源对象
 * @param name 想要获取的键名
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function getObjectKeyByName<T extends object, K extends keyof T>(
  o: T,
  name: K
): T[K] {
  return o[name]
}

/**
 * @description 四舍五入保留两位小数
 * @param {*} num 需要转换的数据
 * @returns 保留两位为小数，不够的自动补0,类型string
 */
export function keepTwoDecimalFull(num: any, n: number) {
  let f = parseFloat(num)
  if (isNaN(f)) {
    return false
  }
  f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂

  let s = f.toString()
  let rs = s.indexOf('.')
  // 判定如果是整数，增加小数点再补0
  if (rs < 0) {
    rs = s.length
    s += '.'
  }
  while (s.length <= rs + n) {
    s += '0'
  }
  return s
}
