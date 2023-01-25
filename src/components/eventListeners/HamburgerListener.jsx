import React, { useEffect } from 'react';

function HamburgerListener() {
  useEffect(() => {
    const hamName = 'hamburgerMenu';
    const navName = 'navigationMenuMobile';

    const hamM = document.getElementById(hamName);
    const navM = document.getElementById(navName);

    try {
      let i = 0;
      hamM.addEventListener('click', (event) => {
        event.preventDefault();

        if (i === 1) {
          navM.style.display = 'none';
          i -= 1;
        } else {
          navM.style.display = 'flex';
          i += 1;
        }
      });
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      {' '}
      <p> </p>{' '}
    </>
  );
}

export default HamburgerListener;
