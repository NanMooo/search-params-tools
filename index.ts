interface Params {
  [propName: string]: string
}
export const addSearchParams = (searchParamsString: string, params: Params) => {
  const currentParams = new URLSearchParams(searchParamsString)
  Object.keys(params).map((key) => currentParams.append(key, params[key]))
  return currentParams.toString()
}

export const delSearchParams = (searchParamsString: string, keys: string[]) => {
  const currentParams = new URLSearchParams(searchParamsString)
  keys.map((key) => currentParams.delete(key))
  return currentParams.toString()
}

export const getSearchParams = (
  searchParamsString: string,
  key?: string
): Params | string => {
  const currentParams = new URLSearchParams(searchParamsString)
  if (key) {
    return currentParams.get(key)
  } else {
    const paramsObject: Params = {}
    currentParams.forEach((value, key) => {
      paramsObject[key] = value
    })
    return paramsObject
  }
}
