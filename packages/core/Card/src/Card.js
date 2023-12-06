import React from 'react'
import Button from "@core/button";


function Card({props}) {
  return (
<div {...props} className="o-cpnuEd o-efHQCX o-bqHweY o-bIMsfE o-ItVGT o-eKWNKE o-dNhQyk  o-YCHtV o-fklLUJ o-cglRxs o-cYOpxG" >
  <a href="test" title="Maruti Suzuki New Swift">

  </a>
  <div className="oxygen-card__body">
    <a href="test" title="Maruti Suzuki New Swift">
      <div className="oxygen-card__body-head">
        <h3 className="oxygen-card-primary-title">
          Maruti Suzuki New Swift
        </h3>
      </div>
      <div className="oxygen-card__body-content">
        <p className="oxygen-card-secondary-title" >
          ₹4.5 - 7.5 Lakhs
        </p>
        <div className="o-bfyaNx o-brXWGL o-bqHweY   njI3">
        <img className="o-bXKmQE o-cgkaRG o-cQfblS o-bNxxEB o-pGqQl o-wBtSi o-bwUciP o-btTZkL o-bfyaNx o-eAZqQI "
         src="https://imgd.aeplcdn.com/0x0/design15/d/swift.jpg?q=85&amp;v=2"
          alt="Maruti Suzuki New Swift" title="Maruti Suzuki New Swift" />
      </div>
        <div className="oxygen-card-primary-subtitle">
          Estimated price
        </div>
        <div className="oxygen-card-secondary-subtitle">
        Expected launch February 2018
        </div>
      </div>
      <div className="oxygen-card__media">

    </div>
    </a>
  </div>
  <Button>Custom Card Version 1.2.3 </Button>
</div>
  )
}

export default Card