import React from 'react';
import '../ProfileCustomer/ProfileCustomer.style.css'
const ProfileCustomer = () => {
    return (
        <div className="container-fluid backgroundimage">
            
           <div className="container ">
            <div className="row row-margin">
            
                <div className="col-md-6">
                <h3>Edit Your Profile:</h3>
                {/* <form  onSubmit={handleSubmit}  className="pl-4"> */}
                <form   className="pl-4">

                            <div className="form-row">


                            <div className="form-group col-md-12 ">
                                <label htmlFor="title">Email</label>
                                <input
                                    type="text"
                                    id="holidayTitle"
                                    className="form-control"
                                    placeholder=""
                                    name="holidayTitle"
                                    // onChange={(e) => setholidayTitle(e.target.value)}
                                    // value={holidayTitle}
                                    required
                                />
                            </div>

                        
                        </div>

                      
                        <div className="form-row">
                          

                            <div className="form-group col-md-12">
                            <label htmlFor="title">Password</label>
                                <input
                                    type="text"
                                    id="holidayTitle"
                                    className="form-control"
                                    placeholder=""
                                    name="holidayTitle"
                                    // onChange={(e) => setholidayTitle(e.target.value)}
                                    // value={holidayTitle}
                                    required
                                />
                              
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-12">
                        <label htmlFor="title">Update Profile image</label>
                                <input
                                    type="file"
                                    id="holidayTitle"
                                    className="form-control"
                                    placeholder=""
                                    name="holidayTitle"
                                    // onChange={(e) => setholidayTitle(e.target.value)}
                                    // value={holidayTitle}
                                    required
                                />
                            </div>
                       </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                <h3>Your Booking History:</h3>
                <div className="col-md-12">
                                <p>
                                <span className='font-weight-bold'>Chef name</span>:Jannath
                                </p>
                            </div>
                 
                            <div className="col-md-12">
                                <p>
                                <span className='font-weight-bold'>Date of booking</span> :11/4/23
                                </p>
                            </div>
                
                            <div className="col-md-12">
                                <p>
                                <span className='font-weight-bold'> chef details</span>:Lorem Ipsum is simply dummy text of the printing and typesetting industry.

                                </p>
                            </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ProfileCustomer;