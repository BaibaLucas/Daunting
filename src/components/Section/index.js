import React from 'react';


const Section = ({ section, subSection}) => {

  return(
    <div className='section'>
      <div
        className="mainsection"
        style={{
          backgroundImage: `url(${section.image})`,
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
      </div>
      {subSection && (
      <div 
        className="subsection"
        style={{
          backgroundImage: `url(${subSection.image})`,
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
        {subSection.footer && (
        <div className="subsection-footer">
          {subSection.footer}
        </div>
        )}
      </div>
      )}
    </div>
  );

};

export default Section;