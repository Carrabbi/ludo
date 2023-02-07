import { useEffect } from 'react';
import PropTypes from 'prop-types';


export const HideAfterClick = ({elementId}) => {
  useEffect(() => { 
    try {
      const element = document.getElementById(elementId);
      if (element != null)
        element.addEventListener('click', (event) => {
          event.preventDefault();
            element.style.visibility = 'hidden';
        });

    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });
}

HideAfterClick.defaultProps = {
  elementId: null,

};

HideAfterClick.propTypes = {
  elementId: PropTypes.string,
};



