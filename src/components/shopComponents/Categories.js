import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import instanceApi from '../../axiosConfig'; 
import { Link } from 'react-router-dom';


function Categories({ onCategorySelect, selectedCategory }) {
  const { t, i18n } = useTranslation();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    instanceApi.get('/categories/')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  const getCategoryName = (category) => {
    const language = i18n.language;
    return language === 'ru' ? category.name_ru : category.name_az;
  };

  return (
    <div>
      <div className="widget product-category">
        <h4 className="widget-title">{t('category')}</h4>
        <div className="panel-group commonAccordion" id="accordion" role="tablist" aria-multiselectable="true">
          {categories.map((category, index) => (
            <div className="panel panel-default" key={category.id}>
              <div className="panel-heading" role="tab" id={`heading${index}`}>
                <h4 className="panel-title">
                  {/* <Link to={`/category/${category.id}`}> */}
                  <a
                    onClick={() => {
                      if (selectedCategory === category.id) {
                        onCategorySelect(null); // Сбросить фильтр, если категория уже была выбрана
                      } else {
                        onCategorySelect(category.id); // Установить выбранную категорию
                      }
                    }}
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {getCategoryName(category)}
                  {/* </Link> */}
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
