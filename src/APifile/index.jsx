// /posts	100 posts
 export const getposts = async () => {
   const response = fetch ("https://jsonplaceholder.typicode.com/posts" , {
        method: 'GET'
    }) 
    return (await response).json()  ;
}

export const getphotos = async () => {
  const response = fetch ("https://jsonplaceholder.typicode.com/photos" , {
       method: 'GET'
   }) 
   return (await response).json()  ;
}

export const getnasa = async () => {
  const response = fetch ("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY" , {
       method: 'GET'
   }) 
   return (await response).json()  ;
}
