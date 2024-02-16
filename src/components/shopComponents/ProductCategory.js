import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import instanceApi from '../../axiosConfig';

function ProductCategory() {
  const { categoryId } = useParams(); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    instanceApi.get(`/products/category/${categoryId}/`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Ошибка при загрузке продуктов:", error));
  }, [categoryId]);

  return (
    <div>
      {products.length > 0 ? (
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              {/* Отображение информации о продукте */}
              <h4>{product.title_ru} / {product.title_az}</h4>
              <p>Цена: {product.price} ₼</p>
              {/* Добавьте дополнительную информацию о продукте по желанию */}
            </div>
          ))}
        </div>
      ) : (
        <p>Продукты не найдены.</p>
      )}
    </div>
  );
}

export default ProductCategory;


