import React from 'react'
import category1 from "../../images/shop/category/6.jpg"
import category2 from "../../images/shop/category/7.jpg"
import category3 from "../../images/shop/category/4.jpg"

function ProductCategory() {
  return (
    <div>
        <section className="product-category section">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="category-box">
                        <a href="#!">
                            <img src={category1} alt="category1" />
                            <div className="content">
                                <h2> Мы использовуем натуральные материалы и уникальные узоры.</h2> 
                                
                            </div>
                        </a>	
                    </div>
                    <div className="category-box">
                        <a href="#!">
                            <img src={category2} alt="category2" />
                            <div className="content">
                                <h1><br/>Мода Вне Времени<br/></h1>
                                <h2> Изделия из натуральных  материалов ручной работы прослужат вам долго.</h2>
                            </div>
                        </a>	
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="category-box category-box-2">
                        <a href="#!">
                            <img src={category3} alt="category3" />
                            <div className="content">
                                <h1>Изысканный Cтиль<br/></h1>
                                <h2> Тонкая ручная работа, уникальный дизайн и натуральные волокна.</h2>
                            
                            </div>
                        </a>	
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProductCategory