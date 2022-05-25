import React from 'react';

function CardIcon({ ratio }) {
  return (
    <svg 
    width={ ratio ?? '2.344vw'}
    height={ratio ?? '2.344vw'}
     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 15C15.5511 15 15.3603 15.079 15.2197 15.2197C15.079 15.3603 15 15.5511 15 15.75C15 15.9489 15.079 16.1397 15.2197 16.2803C15.3603 16.421 15.5511 16.5 15.75 16.5H18.75C18.9489 16.5 19.1397 16.421 19.2803 16.2803C19.421 16.1397 19.5 15.9489 19.5 15.75C19.5 15.5511 19.421 15.3603 19.2803 15.2197C19.1397 15.079 18.9489 15 18.75 15H15.75ZM1.5 7.5C1.5 6.70435 1.81607 5.94129 2.37868 5.37868C2.94129 4.81607 3.70435 4.5 4.5 4.5H19.5C20.2956 4.5 21.0587 4.81607 21.6213 5.37868C22.1839 5.94129 22.5 6.70435 22.5 7.5V16.5C22.5 17.2956 22.1839 18.0587 21.6213 18.6213C21.0587 19.1839 20.2956 19.5 19.5 19.5H4.5C3.70435 19.5 2.94129 19.1839 2.37868 18.6213C1.81607 18.0587 1.5 17.2956 1.5 16.5V7.5ZM21 7.5C21 7.10218 20.842 6.72064 20.5607 6.43934C20.2794 6.15804 19.8978 6 19.5 6H4.5C4.10218 6 3.72064 6.15804 3.43934 6.43934C3.15804 6.72064 3 7.10218 3 7.5V9H21V7.5ZM3 16.5C3 16.8978 3.15804 17.2794 3.43934 17.5607C3.72064 17.842 4.10218 18 4.5 18H19.5C19.8978 18 20.2794 17.842 20.5607 17.5607C20.842 17.2794 21 16.8978 21 16.5V10.5H3V16.5Z" fill="black"/>
</svg>



  );
}

export default CardIcon;