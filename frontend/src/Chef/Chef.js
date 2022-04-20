import React from 'react';
import Chef1 from '../images/chef1.jpg';
import Chef2 from '../images/chef2.jpg';
import Chef3 from '../images/chef3.jpg';
import Chef7 from '../images/chef7.jpg';
import Chef8 from '../images/chef8.jpg';
import Chef6 from '../images/chef6.jpg';
import { Link } from 'react-router-dom';

const Chef = () => {
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-12'>
                    <h1 className='d-flex justify-content-center p-5 text-warning'>Our Chefs</h1>
                </div>
            </div>

            <div className='row p-5'>
                <div className='col-lg-4'>
                  <div className='d-flex justify-content-center'>
                     
                         <img className='rounded-circle' src={Chef1} alt="ba"/>
                     
                     <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
                  </div>
                </div>
                <div className='col-lg-4'>
                <div className='d-flex justify-content-center'>
                     
                     <img className='rounded-circle' src={Chef2} alt="ba"/>
                 
                 <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
              </div>
                </div>
                <div className='col-lg-4'>
                <div className='d-flex justify-content-center'>
                     
                     <img className='rounded-circle' src={Chef3} alt="ba"/>
                 
                 <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
              </div>
                </div>
            </div>

            <div className='row p-5'>
                <div className='col-lg-4'>
                  <div className='d-flex justify-content-center'>
                     
                         <img className='rounded-circle' src={Chef7} alt="ba"/>
                     
                     <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
                  </div>
                </div>
                <div className='col-lg-4'>
                <div className='d-flex justify-content-center'>
                     
                     <img className='rounded-circle' src={Chef8} alt="ba"/>
                 
                 <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
              </div>
                </div>
                <div className='col-lg-4'>
                <div className='d-flex justify-content-center'>
                     
                     <img className='rounded-circle' src={Chef6} alt="ba"/>
                 
                 <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id ullamcorper odio, quis vehicula dui.</p>
              </div>
                </div>
            </div>
            <div className='row p-5'>
                <div className='col-lg-12 d-flex justify-content-center'>
              <Link to="/calendersection"><button  type="button" class="btn btn-warning btn-lg text-white"><span class="font-weight-bold">BOOk YOUR CHEF</span></button></Link>

                </div>
            </div>
        </div>
    );
};

export default Chef;