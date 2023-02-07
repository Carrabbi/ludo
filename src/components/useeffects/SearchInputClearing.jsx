import { useEffect } from 'react';

export const SearchInputClearing = () => {
  useEffect(() => {
    const inputRoom = 'roomNameSearch';
    const inputHost = 'hostSearch';

    const inR = document.getElementById(inputRoom);
    const inH = document.getElementById(inputHost);

    try {
      inR.addEventListener('click', (event) => {
        event.preventDefault();
        inR.value = null;
      });

      inH.addEventListener('click', (event) => {
        event.preventDefault();
        inH.value = null;
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  });
}