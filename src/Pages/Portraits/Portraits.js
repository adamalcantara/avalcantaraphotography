import React, {useState} from 'react';
import './Portraits.css';

// import images
import Img1 from '../../img/headshots/1.jpg';
import Img2 from '../../img/headshots/2.jpg';
import Img3 from '../../img/headshots/3.jpg';
import Img4 from '../../img/headshots/4.jpg';
import Img5 from '../../img/headshots/5.jpg';


 const Portraits = () => {

  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
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
      <div className={modal ? "modal open" : "modal"} onCLick={()=> setModal(false)}>
        <img src={tempImgSrc} />
        <h1 onClick={()=> setModal(false)} id="closeIcon">X</h1>
      </div>

      {/* div for the gallery */}
      <div className='gallery'>
          {data.map((item, index)=>{
            return(
              <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} />
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Portraits