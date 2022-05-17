import React from 'react'
import Header2 from './Header2'

const Searchbook = () => {
  return (
    <div> 
        <Header2/>
<div class="container">
    <div class="row">
        <div class="col col-12 div-sm-12 col-md-12 col-lg-12 div-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 div-sm-12 col-md-12 col-lg-12 div-xl-12 col-xxl-12 ">
                    <label for="" class="form-label">Book title</label>
                    <input type="text" class="form-control"/>
                </div>
                
                <div class="col col-12 div-sm-12 col-md-12 col-lg-12 div-xl-12 col-xxl-12">
                    <button class="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchbook