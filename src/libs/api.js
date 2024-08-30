export const getProductApi = async ( resource, query ) => { 
    const response = await fetch(`https://dummyjson.com/${resource}?${query}`)
    const data = await response.json()
    return data
}