import React, {useState} from 'react';
import './Portraits.css';

// import images
import portraits1 from '../../img/portraits/portraits1.jpg';
import portraits2 from '../../img/portraits/portraits2.jpg';
import portraits3 from '../../img/portraits/portraits3.jpg';
import portraits4 from '../../img/portraits/portraits4.jpg';
import portraits5 from '../../img/portraits/portraits5.jpg';
import portraits6 from '../../img/portraits/portraits6.jpg';
import portraits7 from '../../img/portraits/portraits7.jpg';
import portraits8 from '../../img/portraits/portraits8.jpg';
import portraits9 from '../../img/portraits/portraits9.jpg';
import portraits10 from '../../img/portraits/portraits10.jpg';
import portraits11 from '../../img/portraits/portraits11.jpg';
import portraits12 from '../../img/portraits/portraits12.jpg';
import portraits13 from '../../img/portraits/portraits13.jpg';


 const Portraits = () => {

  let data = [
    {
      id: 4,
      imgSrc: portraits4,
    },
    {
      id: 12,
      imgSrc: portraits12,
    },
    {
      id: 2,
      imgSrc: portraits2,
    },
    {
      id: 3,
      imgSrc: portraits3,
    },
    {
      id: 9,
      imgSrc: portraits9,
    },
    {
      id: 5,
      imgSrc: portraits5,
    },
    {
      id: 6,
      imgSrc: portraits6,
    },
    {
      id: 7,
      imgSrc: portraits7,
    },
    {
      id: 8,
      imgSrc: portraits8,
    },
    {
      id: 11,
      imgSrc: portraits11,
    },
    {
      id: 1,
      imgSrc: portraits1,
    },
    {
      id: 13,
      imgSrc: portraits13,
    },
    {
      id: 10,
      imgSrc: portraits10,
    },
  ]
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);

    setModal(true);
  }

  return (
    <>

      {/* div containing the modal */}
      <div className={modal ? "portraitModal portraitOpen" : "portraitModal"} onClick={()=> setModal(false)}>
        <img src={tempImgSrc} alt="lightbox"/>
        <h1 onClick={()=> setModal(false)} id="portraitCloseIcon">X</h1>
      </div>

      {/* div for the gallery */}
      <div className='portraitGallery'>
          {data.map((item, index)=>{
            return(
              <div className='portraitPics' key={index} onClick={()=> getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} alt="gallery" />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Portraits