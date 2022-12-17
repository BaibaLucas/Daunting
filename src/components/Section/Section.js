import React from 'react';
import MembersCarousel from '../MembersCarousel/MembersCarousel';


const Section = ({ section, subSection}) => {

  const backgroundLegibility = (content, image) =>
  {
    if(content !== undefined)
      return `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.3)),url(${section.image})`

    return `url(${image})`
  } 
  return(
    <div className='section'>
      {section.data === undefined && (
        <>
          <div
          className="mainsection"
          style={{
            backgroundImage: backgroundLegibility(section.content, section.image),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: section.size,
            maxWidth: (section.maxWidth ? section.maxWidth : '')
          }}
          >
          {section.title && (
            <div className="mainsection-title">
              {section.title}
            </div>
          )}
          {section.subtitle && (
            <div className="mainsection-subtitle">
              {section.subtitle}
            </div>
          )}
          {section.subtitle2 && (
            <div className="mainsection-subtitle">
              {section.subtitle2}
            </div>
          )}
          {section.content && (
            <div className="mainsection-content">
              {section.content}
            </div>
          )}
          {section.content2 && (
            <div className="mainsection-content">
              {section.content}
            </div>
          )}
          {section.footer && (
          <div className="mainsection-footer">
            {section.footer}
          </div>
          )}
        </div>
        {subSection && (
        <div 
          className="subsection"
          style={{
            backgroundImage: backgroundLegibility(subSection.content, subSection.image),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: subSection.size
          }}
        >
          {subSection.subtitle && (
          <div className="subsection-title">
            {subSection.title}
          </div>
          )}
          {subSection.subtitle && (
          <div className="subsection-subtitle">
            {subSection.subtitle}
          </div>
          )}
        </div>
        )}
        </>
      )}
      {section.data && (
        <>
        {/* <div
          className="mainsection"
          style={{
            backgroundImage: backgroundLegibility(section.content, section.data[0].img),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: section.size,
            maxWidth: (section.maxWidth ? section.maxWidth : '')
          }}
          ></div> */}
          <MembersCarousel
            data={section.data}
          />
        </>
      )}
    </div>
  );

};

export default Section;