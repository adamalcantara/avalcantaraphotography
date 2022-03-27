import React, {useState} from 'react';
import './Headshots.css';


import Img1 from '../../img/headshots/1.jpg';
import Img2 from '../../img/headshots/2.jpg';
import Img3 from '../../img/headshots/3.jpg';
import Img4 from '../../img/headshots/4.jpg';
import Img5 from '../../img/headshots/5.jpg';
import Img6 from '../../img/headshots/6.jpg';
import Img7 from '../../img/headshots/7.jpg';
import Img8 from '../../img/headshots/8.jpg';
import Img9 from '../../img/headshots/9.jpg';
import Img10 from '../../img/headshots/10.jpg';
import Img11 from '../../img/headshots/11.jpg';

const Gallery = () => {

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
        id: 5,
        imgSrc: Img5,
    },
    {
        id: 6,
        imgSrc: Img6,
    },
    {
        id: 7,
        imgSrc: Img7,
    },
    {
        id: 3,
        imgSrc: Img3,
    },
    {
        id: 8,
        imgSrc: Img8,
    },
    {
        id: 4,
        imgSrc: Img4,
    },
    {
        id: 9,
        imgSrc: Img9,
    },
    {
        id: 10,
        imgSrc: Img10,
    },
    {
        id: 11,
        imgSrc: Img11,
    }
]
const [model, setModel] = useState(false);
const [tempimgSrc, setTempImgSrc] = useState('');

const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true)
}
    return(
        <>
        <div className={model? "model open" : "model"} 
        onClick={()=> setModel(false)}
        >
            <img src={tempimgSrc} />
                <p onClick={()=> setModel(false)}>X</p>
        </div>
        <div className="gallery">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>

        </>
    )
}

export default Gallery