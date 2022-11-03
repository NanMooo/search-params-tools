interface Params {
  [propName: string]: string
}
export const addSearchParams = (
  searchParamsString: string,
  params: Params
): string => {
  const currentParams = new URLSearchParams(searchParamsString)
  Object.keys(params).map((key) => currentParams.append(key, params[key]))
  return currentParams.toString()
}

export const delSearchParams = (
  searchParamsString: string,
  keys: string[]
): string => {
  const currentParams = new URLSearchParams(searchParamsString)
  keys.map((key) => currentParams.delete(key))
  return currentParams.toString()
}

export const getSearchParams = (searchParamsString: string): Params => {
  const currentParams = new URLSearchParams(searchParamsString)
  const paramsObject: Params = {}
  currentParams.forEach((value, key) => {
    paramsObject[key] = value
  })
  return paramsObject
}
