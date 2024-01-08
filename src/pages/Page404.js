import React from 'react'
import siteLogo from "../images/logo.png"

function Page404() {
  return (
    <div>	
        <section className="page-404">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <a href="index.html">
                            <img src={siteLogo} alt="site logo" />
                        </a>
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                        <a href="index.html" className="btn btn-main"><i className="tf-ion-android-arrow-back"></i> Go Home</a>
                        <p className="copyright-text">© 2018 Themefisher All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
</div>
  )
}

export default Page404