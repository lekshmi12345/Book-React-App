import React from 'react'
import Header2 from './Header2'

const Addbooks = () => {
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
                <div class="col col-12 div-sm-6 col-md-6 col-lg-6 div-xl-6 col-xxl-6">
                  <label for="" class="form label">Author</label>
                  <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 div-xl-6 col-xxl-6">
                  <label for="" class="form-label">Price</label>
                  <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 div-sm-12 col-md-12 col-lg-12 div-xl-12 col-xxl-12">
                    <button class="btn btn-success">Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Addbooks