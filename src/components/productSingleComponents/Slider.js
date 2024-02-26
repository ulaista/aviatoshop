// import React, { useEffect, useState } from "react";
// import instanceApi from "../../axiosConfig";
// import product1 from "../../images/shop/single-products/product-1.jpg";
// import product2 from "../../images/shop/single-products/product-2.jpg";
// import product3 from "../../images/shop/single-products/product-3.jpg";
// import product4 from "../../images/shop/single-products/product-4.jpg";
// import product5 from "../../images/shop/single-products/product-5.jpg";
// import product6 from "../../images/shop/single-products/product-6.jpg";

// import "../../plugins/bootstrap/css/bootstrap.min.css";
// import "../../plugins/bootstrap/js/bootstrap.min.js";

// import {Image} from 'antd';

// function Slider() {
//   const [photos, setPhotos] = useState([]);
  
//   useEffect(() => {
//     const fetchPhotos = async () => {
//         let url = '/product/1/photos/';
//         const response = await instanceApi.get(url);
//         setPhotos(response.data);
//     };
  
//     fetchPhotos();
//   }, []);

//   return ( 
//     <>{photos.map((photo) => {
//       const product1 = `${photo.photo}`;
//     return (
//       <div>
//         <div className="col-md-5">
//           <div className="single-product-slider">
//             <div
//               id="carousel-custom"
//               className="carousel slide"
//               data-ride="carousel"
//             >
//               <div className="carousel-outer">
//                 <div className="carousel-inner ">
//                   <div className="item active">
//                     <Image src={product1} alt="" data-zoom-image={product1} />
//                   </div>
//                   <div className="item">
//                     <Image src={product2} alt="" data-zoom-image={product2} />
//                   </div>
  
//                   <div className="item">
//                     <Image src={product3} alt="" data-zoom-image={product3} />
//                   </div>
//                   <div className="item">
//                     <Image src={product4} alt="" data-zoom-image={product4} />
//                   </div>
//                   <div className="item">
//                     <Image src={product5} alt="" data-zoom-image={product5} />
//                   </div>
//                   <div className="item">
//                     <Image src={product6} alt="" data-zoom-image={product6} />
//                   </div>
//                 </div>
  
//                 <a
//                   className="left carousel-control"
//                   href="#carousel-custom"
//                   data-slide="prev"
//                 >
//                   <i className="tf-ion-ios-arrow-left"></i>
//                 </a>
//                 <a
//                   className="right carousel-control"
//                   href="#carousel-custom"
//                   data-slide="next"
//                 >
//                   <i className="tf-ion-ios-arrow-right"></i>
//                 </a>
//               </div>
  
//               <ol className="carousel-indicators mCustomScrollbar meartlab">
//                 <li
//                   data-target="#carousel-custom"
//                   data-slide-to="0"
//                   className="active"
//                 >
//                   <img src={product1} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="1">
//                   <img src={product2} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="2">
//                   <img src={product3} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="3">
//                   <img src={product4} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="4">
//                   <img src={product5} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="5">
//                   <img src={product6} alt="" />
//                 </li>
//                 <li data-target="#carousel-custom" data-slide-to="6">
//                   <img src={product6} alt="" />
//                 </li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     );  
//   })}
//   </>
//   )
// }

// export default Slider;


import React, { useEffect, useState } from "react";
import instanceApi from "../../axiosConfig";
import { Image } from 'antd';
import { serverURL } from "../../axiosConfig";
import { Carousel } from 'react-bootstrap';


function Slider({ productId }) {
  const [mainPhoto, setMainPhoto] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {

    // Загрузка основного фото продукта
    const fetchMainPhoto = async () => {
      const response = await instanceApi.get(`/product/${productId}/`);
      // Преобразование относительного пути в абсолютный URL
      setMainPhoto(serverURL + response.data.main_photo);
    };

    // Загрузка дополнительных фото продукта
    const fetchPhotos = async () => {
      const response = await instanceApi.get(`/product/${productId}/photos/`);
      setPhotos(response.data);
    };

    if (productId) {
      fetchMainPhoto();
      fetchPhotos();
    }
  }, [productId]);

  return (
    <div className="col-md-5">
      <div className="single-product-slider">
        <div id="carousel-custom" className="carousel slide" data-ride="carousel">
          <div className="carousel-outer">
            {/* Динамически отображаемые слайды */}
            <div className="carousel-inner">
              {mainPhoto && (
                <div className="item active">
                  <Image src={mainPhoto} alt="" data-zoom-image={mainPhoto} />
                </div>
              )}
              {photos.map((photo, index) => (
                <div className="item" key={index}>
                  <Image src={photo.photo} alt="" data-zoom-image={photo.photo} />
                </div>
              ))}
            </div>

            {/* Контролы для навигации */}
            <a className="left carousel-control" href="#carousel-custom" data-slide="prev">
              <i className="tf-ion-ios-arrow-left"></i>
            </a>
            <a className="right carousel-control" href="#carousel-custom" data-slide="next">
              <i className="tf-ion-ios-arrow-right"></i>
            </a>
          </div>

          {/* Индикаторы для слайдов */}
          <ol className="carousel-indicators">
            {mainPhoto && (
              <li data-target="#carousel-custom" data-slide-to="0" className="active">
                <img src={mainPhoto} alt="" />
              </li>
            )}
            {photos.map((photo, index) => (
              <li data-target="#carousel-custom" data-slide-to={index + 1} key={index}>
                <img src={photo.photo} alt="" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Slider;

