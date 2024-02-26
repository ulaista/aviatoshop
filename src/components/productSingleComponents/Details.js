// import React, { useState } from "react";
// import avater1 from "../../images/blog/avater-1.jpg";

// function Details() {
//   const [activeTab, setActiveTab] = useState("details");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   return (
//     <div className="row">
//       <div className="col-xs-12">
//         <div className="tabCommon mt-20">
//           <ul className="nav nav-tabs">
//             <li className={activeTab === "details" ? "active" : ""}>
//               <a
//                 data-toggle="tab"
//                 href="#details"
//                 aria-expanded={activeTab === "details"}
//                 onClick={() => handleTabClick("details")}
//               >
//                 Details
//               </a>
//             </li>
//             <li className={activeTab === "reviews" ? "active" : ""}>
//               <a
//                 data-toggle="tab"
//                 href="#reviews"
//                 aria-expanded={activeTab === "reviews"}
//                 onClick={() => handleTabClick("reviews")}
//               >
//                 Reviews (3)
//               </a>
//             </li>
//           </ul>
//           <div className="tab-content">
//             <div
//               id="details"
//               className={`tab-pane ${activeTab === "details" ? "active" : ""}`}
//             >
//               <div className="patternbg">
//                 <div id="details" className="tab-pane fade active in">
//                   <h4>Product Description</h4>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                     sed do eiusmod tempor incididunt ut labore et dolore magna
//                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     Duis aute irure dolor in reprehenderit in voluptate velit
//                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
//                     occaecat cupidatat non proident, sunt in culpa qui officia
//                     deserunt mollit anim id est laborum. Sed ut per spici
//                   </p>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Veritatis delectus quidem repudiandae veniam distinctio
//                     repellendus magni pariatur molestiae asperiores animi, eos
//                     quod iusto hic doloremque iste a, nisi iure at unde
//                     molestias enim fugit, nulla voluptatibus. Deserunt voluptate
//                     tempora aut illum harum, deleniti laborum animi neque,
//                     praesentium explicabo, debitis ipsa?
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               id="reviews"
//               className={`tab-pane ${activeTab === "reviews" ? "active" : ""}`}
//             >
//               <div className="patternbg">
//                 <div id="reviews" className="tab-pane fade active in">
//                   <div className="post-comments">
//                     <ul className="media-list comments-list m-bot-50 clearlist">
//                       <li className="media">
//                         {/* <a className="pull-left" href="#!">
//                           <img
//                             className="media-object comment-avatar"
//                             src={avater1}
//                             alt=""
//                             width="50"
//                             height="50"
//                           />
//                         </a> */}

//                         <div className="media-body">
//                           <div className="comment-info">
//                             <h4 className="comment-author">
//                               <a href="#!">Jonathon Andrew</a>
//                             </h4>
//                             <time dateTime="2013-04-06T13:53">
//                               July 02, 2015, at 11:34
//                             </time>
//                             <a className="comment-button" href="#!">
//                               <i className="tf-ion-chatbubbles"></i>Reply
//                             </a>
//                           </div>

//                           <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit. Quisque at magna ut ante eleifend
//                             eleifend.Lorem ipsum dolor sit amet, consectetur
//                             adipisicing elit. Quod laborum minima, reprehenderit
//                             laboriosam officiis praesentium? Impedit minus
//                             provident assumenda quae.
//                           </p>
//                         </div>
//                       </li>

//                       <li className="media">
//                         {/* <a className="pull-left" href="#!">
//                           <img
//                             className="media-object comment-avatar"
//                             src={avater1}
//                             alt=""
//                             width="50"
//                             height="50"
//                           />
//                         </a> */}

//                         <div className="media-body">
//                           <div className="comment-info">
//                             <div className="comment-author">
//                               <a href="#!">Jonathon Andrew</a>
//                             </div>
//                             <time dateTime="2013-04-06T13:53">
//                               July 02, 2015, at 11:34
//                             </time>
//                             <a className="comment-button" href="#!">
//                               <i className="tf-ion-chatbubbles"></i>Reply
//                             </a>
//                           </div>

//                           <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit. Quisque at magna ut ante eleifend eleifend.
//                             Lorem ipsum dolor sit amet, consectetur adipisicing
//                             elit. Magni natus, nostrum iste non delectus atque
//                             ab a accusantium optio, dolor!
//                           </p>
//                         </div>
//                       </li>

//                       <li className="media">
//                         {/* <a className="pull-left" href="#!">
//                           <img
//                             className="media-object comment-avatar"
//                             src={avater1}
//                             alt=""
//                             width="50"
//                             height="50"
//                           />
//                         </a> */}

//                         <div className="media-body">
//                           <div className="comment-info">
//                             <div className="comment-author">
//                               <a href="#!">Jonathon Andrew</a>
//                             </div>
//                             <time dateTime="2013-04-06T13:53">
//                               July 02, 2015, at 11:34
//                             </time>
//                             <a className="comment-button" href="#!">
//                               <i className="tf-ion-chatbubbles"></i>Reply
//                             </a>
//                           </div>

//                           <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit. Quisque at magna ut ante eleifend eleifend.
//                           </p>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;


import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import instanceApi from '../../axiosConfig';

function Details({ productId }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("details");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instanceApi.get(`/product/${productId}/`);
        setProduct(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных о продукте:", error);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  if (!product) {
    return <div>Loading product details...</div>;
  }

  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="tabCommon mt-20">
          <ul className="nav nav-tabs">
            <li className={activeTab === "details" ? "active" : ""}>
              <a href="#!" onClick={() => handleTabClick("details")}>
                {t('Details')}
              </a>
            </li>
            <li className={activeTab === "reviews" ? "active" : ""}>
              <a href="#!" onClick={() => handleTabClick("reviews")}>
                {t('Reviews')} ({product.reviews.length})
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className={`tab-pane ${activeTab === "details" ? "active" : ""}`}>
              <div className="patternbg">
                <h4>{t('Product Description')}</h4>
                <div dangerouslySetInnerHTML={{ __html: product.full_description_ru }} />
              </div>
            </div>

            <div className={`tab-pane ${activeTab === "reviews" ? "active" : ""}`}>
              <div className="patternbg">
                {product.reviews && product.reviews.map((review, index) => (
                  <div key={index} className="post-comments">
                    <ul className="media-list comments-list m-bot-50 clearlist">
                      <li className="media">
                        <div className="media-body">
                          <div className="comment-info">
                            <h4 className="comment-author">{review.name}</h4>
                            <time dateTime={review.date_time}>
                              {new Date(review.date_time).toLocaleDateString()}
                            </time>
                          </div>
                          <p>{review.text}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
