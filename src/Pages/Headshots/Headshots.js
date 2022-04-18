import React, {useState} from 'react';
import './Headshots.css';

// import images
import headshot1 from '../../img/headshots/headshot1.jpg';
import headshot2 from '../../img/headshots/headshot2.jpg';
import headshot3 from '../../img/headshots/headshot3.jpg';
import headshot4 from '../../img/headshots/headshot4.jpg';
import headshot5 from '../../img/headshots/headshot5.jpg';
import headshot6 from '../../img/headshots/headshot6.jpg';
import headshot7 from '../../img/headshots/headshot7.jpg';
import headshot8 from '../../img/headshots/headshot8.jpg';
import headshot9 from '../../img/headshots/headshot9.jpg';
import headshot10 from '../../img/headshots/headshot10.jpg';
import headshot11 from '../../img/headshots/headshot11.jpg';


 const Headshots = () => {

  let data = [
    {
      id: 1,
      imgSrc: headshot1,
    },
    {
      id: 2,
      imgSrc: headshot2,
    },
    {
      id: 3,
      imgSrc: headshot3,
    },
    {
      id: 5,
      imgSrc: headshot5,
    },
    {
      id: 4,
      imgSrc: headshot4,
    },
    
    {
      id: 6,
      imgSrc: headshot6,
    },
    {
      id: 7,
      imgSrc: headshot7,
    },
    {
      id: 8,
      imgSrc: headshot8,
    },
    {
      id: 9,
      imgSrc: headshot9,
    },
    {
      id: 10,
      imgSrc: headshot10,
    },
    {
      id: 11,
      imgSrc: headshot11,
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
      <div className={modal ? "modal open" : "modal"} onClick={()=> setModal(false)}>
        <img src={tempImgSrc} alt="lightbox"/>
        <h1 onClick={()=> setModal(false)} id="closeIcon">X</h1>
      </div>

      {/* div for the gallery */}
      <div className='gallery'>
          {data.map((item, index)=>{
            return(
              <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} alt="gallery" />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Headshots