import React from 'react'
import PageHeader from '../components/shopComponents/PageHeader'
import Categories from '../components/shopComponents/Categories'
import Product from '../components/shopComponents/Product'

function ShopPage() {
  return (
    <div>
        
        <PageHeader />
        <section className="products section">
            <div className="container"> 	
              <div className="row">
                <Categories />
                <Product />
              </div>
            </div>
        </section>
    </div>
  )
}

export default ShopPage