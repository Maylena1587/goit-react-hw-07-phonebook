import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

function Loader() {
  return <BeatLoader size={30} margin={10} color={'purple'} loading={true} />;
}

export default Loader;
