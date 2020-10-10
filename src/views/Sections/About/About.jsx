import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
 <section className="about-section">
     <div className="container">
       <div className="row">
        <div className="col-lg-6">
         <div className="about-image clearfix">
           <div className="single-image float-left">
            <img src="https://lh3.googleusercontent.com/proxy/65sP7pAuwzNY0RAOQvT3TPrA46OWtC-p6rndCHhTqS-VhieuSdeKSIuZKzxqXJ7yazIRnMILP8mqVGxhnVMSqnQbnTmb_2PObYCKNEYeJqNvnI7Iiu_Ct9QZtg5Y9s8N2I--_Nc9upg4eLSV-cDHp5uS_F_ICyGIModfves" alt=""/>
           </div> 
          <div className="single-image image-tow float-right">
         <img src="https://www.drugrehab.com/wp-content/uploads/2017/11/hero-rap-music.jpg" width="420" alt=""/>
       </div> 
     </div> 
       </div>
         <div className="col-lg-6">
          <div className="about-content mt-5">
             <h2>About Us </h2>
             <p>Binish PR was established in 2014, Binish is based between Miami and Los Angeles and is publicist for celebrities in the entertainment  industry focusing on all music genres but specializing in hip-hop/rap. Her expertise and experience has gotten her major blog coverage as well as exposure in major outlets as well as with a list celebrity clientele. For more information email and inquire. </p>
			
         
         </div> 
        </div>
       </div> 
     </div> 
    </section>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
