import React from 'react'
import galleryImgs from './galleryImgs'
import Masory,{ResponsiveMasonry} from 'react-responsive-masonry'
export const MasonryGalleryImgs = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
      <Masory gutter="1rem">
        {
          galleryImgs.map((item,index)=>(
            <img className='masonry__img' src={item} key={index} alt="" style={{'width':'100%','display':'block','borderRadius':'10px'}} />
          ))
        }
      </Masory>
    </ResponsiveMasonry>
  )
}
 export default MasonryGalleryImgs