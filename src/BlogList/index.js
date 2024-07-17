import React, { useState } from 'react';
import BlogPost from '../Post/index.js'; 
import './index.css';
import trevor from '../images/trevor.jpeg'
import crime from '../images/crime.jpeg'

import born from '../images/born.jpeg'
import PageOne from '../PageOne/index.js';
// import { Link } from 'react-scroll';

{/* <div className='nav-links'>
    <a className='nav-item'><Link to="Home" smooth={true} duration={500}>Home</Link></a>
    <a className='nav-item'><Link to="Blog" smooth={true} duration={500}>Blog</Link></a>
    <a className='nav-item'><Link to="Portfolio" smooth={true} duration={500}>Portfolio</Link></a>
    <a className='nav-item'><Link to="Podcast" smooth={true} duration={500}>Podcast</Link></a>
    <a className='nav-item'><Link to="Video" smooth={true} duration={500}>Video</Link></a>
      </div> */}



const posts = [
  {
    title: 'Case Study and Farmer',
    component: <PageOne />
  },
  {
    title: 'The Impact of Born a Crime',
    image: trevor,
    content: `Born a Crime by Trevor Noah is a powerful memoir that explores themes of racism, identity struggles,
     and resilience. It provides a compelling narrative of Noah's life growing up in South Africa during and after apartheid. 
     The memoir delves into his experiences as a mixed-race child, born to a black Xhosa mother and a white Swiss father, which was a union considered illegal under apartheid laws. Noah's storytelling highlights the
     systemic racism and discrimination that shaped his upbringing, as well as the societal challenges he faced in navigating his dual identity`
  },
  {

    title: 'Born A Crime',
    image: crime,
    content: `Born a Crime by Trevor Noah remains relevant today as it highlights the impact of racism, 
    identity struggles, and resilience. The memoir sheds light on issues of systemic racism and discrimination, 
    resonating with current social justice movements Born a Crime by Trevor Noah remains relevant today as it highlights the impact of racism, 
    identity struggles, and resilience. The memoir sheds light on issues of systemic racism and discrimination, 
    resonating with current social justice movementsBorn a Crime by Trevor Noah remains relevant today as it highlights the impact of racism, 
    identity struggles, and resilience. The memoir sheds light on issues of systemic racism and discrimination, 
    resonating with current social justice movements Born a Crime by Trevor Noah remains relevant today as it highlights the impact of racism, 
    identity struggles, and resilience. The memoir sheds light on issues of systemic racism and discrimination, 
    resonating with current social justice movements Born a Crime by Trevor Noah remains relevant today as it highlights the impact of racism, 
    identity struggles, and resilience.`
  },
  {
    title: 'Social Issues Arising The Novel Born A Crime',
    image: born,
    content: `Noah eloquently recounts the profound impact of apartheid on his life, 
    reflecting on the segregation and discrimination he faced due to being born to a black Xhosa 
    mother and a white Swiss father. This defiance of apartheid laws is encapsulated in the title "Born a Crime,"
     which serves as a poignant reflection of the absurdity and brutality of apartheid's racial legislation. The memoir 
     also illuminates the intricate journey of navigating identity and belonging as a biracial individual in a society marked by deep racial divisions.
     .
    `
  },
  {
    title: 'Family and Relationships',
    image: trevor,
    content: `Central to the narrative is Noah's poignant portrayal of his relationship with his mother, Patricia Nombuyiselo Noah. Through vivid storytelling, Noah depicts her as a resilient and influential figure, shaping his values of independence, courage, and compassion. Additionally, the memoir delves into the complexities of Noah's relationship with his father,
     exploring the impact of paternal absence on his understanding of masculinity and the role of fathers
      in shaping their children's lives. Central to the narrative is Noah's poignant portrayal of his relationship with his mother, 
      Patricia Nombuyiselo Noah. Through vivid storytelling, Noah depicts her as a resilient and influential figure, shaping his values of independence, courage, and compassion. Additionally, the memoir delves into the complexities of Noah's relationship with his father, 
      e,
      . `,
  },
  {
    title: 'Resilience and Survival',
    image: crime,
    content: `Noah paints a compelling picture of the challenges his family faced while growing up in poverty in Soweto. Despite the hardships, he illustrates how their resilience, resourcefulness, and determination enabled them to overcome adversity. Furthermore, 
    the memoir highlights Noah's adept use of humor as a coping mechanism, revealing his ability to find lightness in the midst of darkness. Noah paints a compelling picture of the challenges his family faced while growing up in poverty in Soweto. Despite the hardships, he illustrates how their resilience, resourcefulness, and determination enabled them to overcome adversity. Furthermore, 
    the memoir highlights Noah's adept use of humor as a coping mechanism, revealing his ability to find lightness in the midst of darkness...`
  }
];

const BlogList = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const handleNext = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handleBack = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };


  const currentPost = posts[currentPostIndex];



  return (

    <div className="blog-list">

      {currentPost.component ? (
        <div className="blog-post">
          {currentPost.component}
          <div className="navigation">
            {currentPostIndex > 0 && <button onClick={handleBack}>Back</button>}
            {currentPostIndex < posts.length - 1 && <button onClick={handleNext}>Next</button>}
          </div>
        </div>
      ) : (
        <BlogPost
          post={currentPost}
          onNext={currentPostIndex < posts.length - 1 ? handleNext : null}
          onBack={currentPostIndex > 0 ? handleBack : null}
        />
      )}
     

    </div>
  );
};

export default BlogList;
