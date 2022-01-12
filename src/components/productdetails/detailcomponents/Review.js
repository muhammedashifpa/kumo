import React from 'react'

function Review() {
    return (
        <section className="middle">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12">
                    <ul className="nav nav-tabs b-0 d-flex align-items-center justify-content-center simple_tab_links mb-4" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="description-tab" href="#description" data-toggle="tab" role="tab" aria-controls="description" aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" href="#information" id="information-tab" data-toggle="tab" role="tab" aria-controls="information" aria-selected="false">Additional information</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" href="#reviews" id="reviews-tab" data-toggle="tab" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    
                    <div className="tab-content" id="myTabContent">
                        
                        {/* <!-- Description Content --> */}
                        <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                            <div className="description_info">
                                <p className="p-0 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <p className="p-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Additional Content --> */}
                        <div className="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-tab">
                            <div className="additionals">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                          <th className="ft-medium text-dark">ID</th>
                                          <td>#1253458</td>
                                        </tr>
                                        <tr>
                                          <th className="ft-medium text-dark">SKU</th>
                                          <td>KUM125896</td>
                                        </tr>
                                        <tr>
                                          <th className="ft-medium text-dark">Color</th>
                                          <td>Sky Blue</td>
                                        </tr>
                                        <tr>
                                          <th className="ft-medium text-dark">Size</th>
                                          <td>Xl, 42</td>
                                        </tr>
                                        <tr>
                                          <th className="ft-medium text-dark">Weight</th>
                                          <td>450 Gr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        {/* <!-- Reviews Content --> */}
                        <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="reviews_info">
                                <div className="single_rev d-flex align-items-start br-bottom py-3">
                                    <div className="single_rev_thumb"><img src="assets/img/team-1.jpg" className="img-fluid circle" width="90" alt="" /></div>
                                    <div className="single_rev_caption d-flex align-items-start pl-3">
                                        <div className="single_capt_left">
                                            <h5 className="mb-0 fs-md ft-medium lh-1">Daniel Rajdesh</h5>
                                            <span className="small">30 jul 2021</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum</p>
                                        </div>
                                        <div className="single_capt_right">
                                            <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Single Review --> */}
                                <div className="single_rev d-flex align-items-start br-bottom py-3">
                                    <div className="single_rev_thumb"><img src="assets/img/team-2.jpg" className="img-fluid circle" width="90" alt="" /></div>
                                    <div className="single_rev_caption d-flex align-items-start pl-3">
                                        <div className="single_capt_left">
                                            <h5 className="mb-0 fs-md ft-medium lh-1">Seema Gupta</h5>
                                            <span className="small">30 Aug 2021</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum</p>
                                        </div>
                                        <div className="single_capt_right">
                                            <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Single Review --> */}
                                <div className="single_rev d-flex align-items-start br-bottom py-3">
                                    <div className="single_rev_thumb"><img src="assets/img/team-3.jpg" className="img-fluid circle" width="90" alt="" /></div>
                                    <div className="single_rev_caption d-flex align-items-start pl-3">
                                        <div className="single_capt_left">
                                            <h5 className="mb-0 fs-md ft-medium lh-1">Mark Jugermi</h5>
                                            <span className="small">10 Oct 2021</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum</p>
                                        </div>
                                        <div className="single_capt_right">
                                            <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* <!-- Single Review --> */}
                                <div className="single_rev d-flex align-items-start py-3">
                                    <div className="single_rev_thumb"><img src="assets/img/team-4.jpg" className="img-fluid circle" width="90" alt="" /></div>
                                    <div className="single_rev_caption d-flex align-items-start pl-3">
                                        <div className="single_capt_left">
                                            <h5 className="mb-0 fs-md ft-medium lh-1">Meena Rajpoot</h5>
                                            <span className="small">17 Dec 2021</span>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum</p>
                                        </div>
                                        <div className="single_capt_right">
                                            <div className="star-rating align-items-center d-flex justify-content-left mb-1 p-0">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                            <div className="reviews_rate">
                                <form className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <h4>Submit Rating</h4>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="revie_stars d-flex align-items-center justify-content-between px-2 py-2 gray rounded mb-2 mt-1">
                                            <div className="srt_013">
                                                <div className="submit-rating">
                                                  <input id="star-5" type="radio" name="rating" value="star-5" />
                                                  <label htmlFor="star-5" title="5 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                  </label>
                                                  <input id="star-4" type="radio" name="rating" value="star-4" />
                                                  <label htmlFor="star-4" title="4 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                  </label>
                                                  <input id="star-3" type="radio" name="rating" value="star-3" />
                                                  <label htmlFor="star-3" title="3 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                  </label>
                                                  <input id="star-2" type="radio" name="rating" value="star-2" />
                                                  <label htmlFor="star-2" title="2 stars">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                  </label>
                                                  <input id="star-1" type="radio" name="rating" value="star-1" />
                                                  <label htmlFor="star-1" title="1 star">
                                                    <i className="active fa fa-star" aria-hidden="true"></i>
                                                  </label>
                                                </div>
                                            </div>
                                            
                                            <div className="srt_014">
                                                <h6 className="mb-0">4 Star</h6>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="medium text-dark ft-medium">Full Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="medium text-dark ft-medium">Email Address</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label className="medium text-dark ft-medium">Description</label>
                                            <textarea className="form-control"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group m-0">
                                            <a className="btn btn-white stretched-link hover-black">Submit Review <i className="lni lni-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Review
