import React, { Component } from 'react';
import  Profile  from '../../resources/profile.jpg';
import MacAdv from '../../resources/MacAdvlogoNoBack.png'
import Vital38 from '../../resources/Vital38.png'
import Kstech from '../../resources/kstech-logo-color.png'
import Tillys from '../../resources/Tillys.png'
import Choosethefood  from '../../resources/ChooseTheFoodLogoTile.png'
import SSUDirectory from '../../resources/ssuDirectoryLogo.png'
import DKKD from '../../resources/DKKDLogo.png'
import SonomaState from '../../resources/sonomaStateLogo.jpg'
import {Wrapper, ExperienceWrapper, Job, Project} from './components';

export class Header extends Component {
    render() {
        return (
            <span>
                 <header className="App-header">
                    <h1>Maurice Becnel</h1>
                    <div id= "headerSub"> Computer Science Major at Sonoma State University</div>
                 </header>
            </span>
        );
    }
}

export class ProfileContent extends Component {
    render() {
        return (
            <Wrapper>
                <div class= "profilepic">
                    <img src = {Profile} width = '250' height = '350'/>
                </div>
                <div class= "About">
                    <h1> About </h1>
                    <p>As a Computer Science Major at SSU, I am learning and building a foundation that will help me achieve my goal of a career in computers and technology.
                     I don’t just take classes, I apply what I learn in developing projects outside of the classroom environment. Because of these experiences I have developed a passion for IT work and web development. I enjoy helping clients/customers solve and overcome their technical problems and if need be implementing my own solution using my programming background. I am very eager to learn more and use my knowledge to contribute to a corporate environment.
                    </p>
                    <div class= "Toolbox"> 
                        <h2> Technical Toolbox </h2>
                        <p> Python, C++, JavaScript, Java, MySQL, React.JS, Linux/Unix, CSS, HTML, Wordpress, GitHub, WordPress, Adobe Photoshop, Adobe Illustrator </p>
                    </div>
                </div>
            </Wrapper>
        );
    }
}
export class Education extends Component {
    render() {
        return (
            <ExperienceWrapper>
                <h1> Education </h1>
                    <div class="Jobs">
                        <Job onClick={()=>window.location="http://www.sonoma.edu/"}>
                            <div class = "Company">
                                <img src = { SonomaState } width = '120' height = '55'/>
                                <div class = "Companyname"> <h2>Sonoma State University, School of Science and Technology</h2> </div>
                            </div>
                            <div class = "JobDescription">
                                <h4> Rohnert Park, CA </h4>
                                <p>• Bachelor of Science in Computer Science (BSCS) May 2019</p>
                                <p>• Current GPA: 3.3</p>
                            </div>
                                
                        </Job>
                    </div>
            </ExperienceWrapper>
        );
    }
}


export class Experience extends Component {
    render() {
        return (
            <ExperienceWrapper>
                <h1> Experience </h1>
                    <div class="Jobs">
                        <Job onClick={()=>window.location="https://www.vital38.com"}>
                            <div class = "Company">
                                <img src = { Vital38 } width = '75' height = '55'/>
                                <div class = "Companyname"> <h2>Vital 38 Media</h2> </div>
                            </div>
                            <div class = "JobDescription">
                                <h4> Web Devlopment Manager </h4>
                                <p>• Managed business development activities by recruiting new clients which resulted in a 50% increase in revenue.</p>
                                <p>• Worked directly with clients and managed projects to completion.</p>
                                <p>• Provided customized solutions using WordPress, Joomla and React.</p>
                                <p>• Clients saw an increase of traffic to sites from 20 to 30% because of customized business automation and workflows.</p>
                            </div>
                                
                        </Job>
                        <Job onClick={()=>window.location="https://themacadvantage.com/ca/Home.html"}>
                            <div class = "Company">
                                <img src = { MacAdv } width = '85' height = '65'/>
                                <div class = "Companyname"> <h2>Mac Advantage</h2> </div>
                            </div>
                            <div class = "JobDescription">
                                <h4> Technician </h4>
                                <p>• Provided technology solutions to customers by preforming diagnostics, repair, upgrades and data recovery for an average of 20 Mac computers a week.</p>
                                <p>• Implemented an inventory management system for repair parts that improved the company’s warehouse efficiency by 20%.</p>
                                <p>• Managed IT and front office customer support to drive customer satisfaction.</p>
                                <p>• Related the necessity of products and services to customers leading to additional sales ranging from $300-$3,000.</p>
                                <p>• Managed invoices daily using QuickBooks Software.</p>
                                <p>• Currently updating website</p>
                            </div>
                        </Job>
                        <Job onClick={()=>window.location="https://www.kstech.com"}>
                            <div class = "Company">
                                <img src = { Kstech } width = '220' height = '175'/>
                                <div class = "Companyname"> <h2>Kornerstone Tech Inc.</h2> </div>
                            </div>
                            <div class = "JobDescription">
                                <h4> Information Systems Intern </h4>
                                <p>• Assisted in customizing business solutions such as Microsoft Dynamics CRM and SharePoint.</p>
                                <p>• Provided network, hardware and application support to over 100 users using remote access tools.</p>
                                <p>• Maintained www.kstech.com with updates and requested changes from staff.</p>
                            </div>
                        </Job>
                        <Job onClick={()=>window.location="https://www.tillys.com/about-tillys/about-us.html"}>
                            <div class = "Company">
                                <img src = { Tillys } width = '170' height = '35'/>
                                <div class = "Companyname"> <h2>Tilly's Clothing Store</h2> </div>
                            </div>
                            <div class = "JobDescription">
                                <h4> Sales Associate </h4>
                                <p>• Generated $1,000 of weekly revenue by providing personalized customer shopping experiences.</p>
                                <p>• Organized cashier’s cash handling procedures and inventory count processes to improve back end store management efficiency.</p>
                            </div>
                        </Job>
                    </div>

            </ExperienceWrapper>
        );
    }
}
export class Projects extends Component {
    render() {
        return (                
            <ExperienceWrapper>
                <h1> Projects </h1>
                <div class= "ProjectTiles">
                    <Project onClick={()=>window.location="https://www.choosethefood.com"}>
                        < div class = "ProjectImage">
                            <img src = { Choosethefood } width = '200px' height = '200px'/>
                        </div>
                        <h2> www.ChooseTheFood.com </h2>
                        <p>A React application that uses AWS Lambda to call Yelp Fusions API to return a random restaurant recommendation in your location. (Personal Project) </p>
                    </Project>
                    <Project>
                        < div class = "ProjectImage">
                            <img src = { SSUDirectory }  width ='200px' height = '200px' />
                        </div>
                        <h2> Sonoma State Directory </h2>
                        <p> Alexa skill application that queries a database of Sonoma State faculty via AWS Lambda instance. (Team Project) </p>
                    </Project>
                    <Project onClick={()=>window.location="https://www.dkkdstaffing.com"}>
                        < div class = "ProjectImage">
                            <img src = { DKKD }  width ='200px' height = '200px' />
                        </div>
                        <h2> www.DKKDStaffing.com </h2>
                        <p> A Wordpress site with specific custom requirements from a client to improve their business workflow. (Work Project) </p>
                    </Project>
                </div>
            </ExperienceWrapper>
        );
    }
}