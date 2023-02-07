import { useEffect } from 'react';

export const HamburgerListener = () => {
  useEffect(() => {
    const hamName = 'hamburgerMenu';
    const navName = 'navigationMenuMobile';
      try {
        const ham = document.getElementById(hamName);
        const navM = document.getElementById(navName);
  
        let i = 0;
        ham.addEventListener('click', (event) => {
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
        // eslint-disable-next-line no-console
        console.log(error);
      }
  });
}