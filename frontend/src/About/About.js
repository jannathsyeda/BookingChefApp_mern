import React from 'react';
import img from '../images/Chef_s_Table_2.avif';
import '../About/About.style.css' 

const About = () => {
    return (
        <div className='Container-fluid' style={{"backgroundImage":`url(${img})`,"backgroundSize": "cover","backgroundAttachment":"fixed","height":"1000px"}}>
           {/* <div class="d-flex  justify-content-center">
				<div class="about-section d-flex align-items-center">
					<h1 class="headling-1 d-flex align-items-center" >About Us
					</h1>
					<p class="para" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

				</div>
			</div> */}
         
            <div class="d-flex  justify-content-center para">
            
            <h1 className='about-section ' >About Us</h1>
            </div>
            <div class="d-flex  justify-content-center para">
            
            <p className='pr-4 pl-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           
        </div>
    );
};

export default About;