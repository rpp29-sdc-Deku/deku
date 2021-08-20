import React from 'react';

export default function ComparisonModal (props) {
  console.log('PROPS IN COMPARISON MODAL ========== ', props);
  const { compareProducts } = props;
  return (
    <div className='comparison-modal'>
      <div className='modal-body'>
        <div className='comparison-modal-close' onClick={compareProducts}>❌</div>
        <div><h2>Compare</h2></div>
      </div>
    </div>
  );
}
