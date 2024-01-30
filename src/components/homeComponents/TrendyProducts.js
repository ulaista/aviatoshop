import React from 'react'
import { useTranslation } from 'react-i18next';


function TrendyProducts() {
  const { t } = useTranslation();
  return (
    <div>
        <div className="row">
          <div className="title text-center">
				    <h2>{t('clothes')}</h2>
			    </div>
		    </div>
    </div>
  )
}

export default TrendyProducts