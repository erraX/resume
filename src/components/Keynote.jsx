import * as React from 'react';

function SvgKeynote(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M407 0H105C47.103 0 0 47.103 0 105v302c0 57.897 47.103 105 105 105h302c57.897 0 105-47.103 105-105V105C512 47.103 464.897 0 407 0zm-81 431H186v-30h55v-75h30v75h55v30zm95.752-135H90.248v-30h26.248l6.426-73.898c1.838-21.144 17.713-37.592 38.078-40.603V126c0-19.299 15.701-35 35-35h25V81h60v50h-60v-10h-25c-2.757 0-5 2.243-5 5v25h153.248c23.521 0 42.793 17.67 44.83 41.102L395.504 266h26.248v30z" />
    </svg>
  );
}

export default SvgKeynote;

