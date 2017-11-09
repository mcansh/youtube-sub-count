import React from 'react';
import PropTypes from 'prop-types';

const SubCount = ({ count }) => {
  const countInt = count && parseFloat(count);
  return (
    <div>
      <h1>{countInt && countInt.toLocaleString()}</h1>
      <style jsx>{`
        div {
          color: white;
          text-align: center;
        }
        h1 {
          font-size: 20rem;
        }
      `}</style>
    </div>
  );
};

SubCount.propTypes = {
  count: PropTypes.string.isRequired,
};

export default SubCount;
