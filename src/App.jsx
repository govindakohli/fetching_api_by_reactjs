import './App.css'
import {useEffect, useState} from "react"
// /posts	100 posts

// import { getposts } from './APifile/index'
// import Postcards from './components/postcards'

// color photos 5000

// import {getphotos} from './APifile/index'
// import Photos from './components/photos'

import Nasa from './components/Nasa'
import Nasadata from './APifile/Nasa_data'
// import {getnasa} from './APifile/index'
import Fetchbyaxios from "./APifile/fetchbyaxios"

function App() {

  // 100 posts 

//  const[data , setdata] = useState(null)
//  useEffect(() => {
//    getposts().then((post)=>setdata(post))
//  }, []);

//   return (
//     <div>
//       <h1 className='Post_card_main-heading'>100 Posts</h1>
//      {
//       data ? data.map((e)=> <Postcards tittle={e.title} body={e.body} id={e.id}/>) : <p>No Data</p>
//      }
//     </div>
//   )




  // photos 

//   const[value , setValue] = useState(null)
//  useEffect(() => {
//   getphotos().then((value)=>setValue(value))
//  }, []);

//   return (
//     <>
//     <h1 className='Post_card_main-heading'>Photos</h1>
//     <div className='flex_photos'>

//      {
//       value ? value.map((e)=> <Photos id={e.id} tittle={e.title} url={e.url} thumbnailUrl={e.thumbnailUrl}/>) : <p>No Data</p>
//      }
//     </div></>
//   )



  // Nasa

//   const[nasa , setNasa] = useState(null)
//  useEffect(() => {
//   getnasa().then((nasa)=>console.log(nasa))
//   // getnasa().then((nasa)=>setNasa(nasa))
//  }, []);
//  console.log (nasa)

//   return (
//     <div>
//       <h1 className='Post_card_main-heading'>Nasa</h1>
//      {
    
//       nasa ? nasa.map((e)=>{
//         console.log (e.photos.map((img)=>{
//           console.log(img)
//         }))
//         return (
//           <>
//           </>
//         )
//       } ) : <p>No Data</p>
      
    
//      }
       
//     </div>
//   )

// by using create data file

return (
  <div>
    <Fetchbyaxios/>
    
    {/* <img src="http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631200305217E01_DXXX.jpg" alt="" />
    {
          Nasadata.map((value)=>{
              //  console.log(value.photos)
               console.log(value.photos.map((img)=>{
                console.log(img.img_src)
                return(
                  <>
                  <Nasa src = {value.photos}/>
                  </>
                )
                }))
              // photos[0].img_src
            //  return <Nasa url={value.photos.map((img)=>{return(img.img_src)})} id={value.photos.map((img)=>{(img.img_src)})} />
            // return <Nasa  id={value.photos.map((img)=>{(img.id)})} />
             
          })
          
        } */}
  </div>
 )
}

export default App
