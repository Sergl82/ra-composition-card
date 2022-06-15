import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ img, title, link, buttonText, children }) {
   return (
      <div className="card">
         {img && <img src={img} className="card__img-top" alt="..." />}
         <div className="card__body">
            {title && <h5 className="card__title">{title}</h5>}
            {children}
            {link && (
               <a href={link} className="btn btn-primary">
                  {buttonText}
               </a>
            )}
         </div>
      </div>
   );
}

Card.defaultProps = {
   img: '',
};

Card.propTypes = {
   img: PropTypes.string,
   children: PropTypes.node.isRequired,
   title: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
   link: PropTypes.string.isRequired,
};
