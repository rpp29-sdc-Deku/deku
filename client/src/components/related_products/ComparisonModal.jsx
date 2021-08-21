import React from 'react';

export default function ComparisonModal (props) {
  console.log('PROPS IN COMPARISON MODAL!! ========== ', props);
  const { toggleCompareProducts, productsToCompare } = props;
  const { thisProductDetails, masterProductDetails } = productsToCompare;

  const masterProductFeatures = {};
  masterProductDetails.features.forEach(feature => {
    const name = feature.feature;
    masterProductFeatures[name] = feature.value;
  });

  const thisProductFeatures = {};
  thisProductDetails.features.forEach(feature => {
    const name = feature.feature;
    thisProductFeatures[name] = feature.value;
  });

  console.log('MASTER PRODUCT FEATURES OBJECT ====== ', masterProductFeatures);

  const allFeatureNames = new Set([
    ...thisProductDetails.features.map(feature => feature.feature),
    ...masterProductDetails.features.map(feature => feature.feature)
  ]);

  const comparison = [...allFeatureNames].map((featureName, i) => {
    let masterProductFeature;
    let thisProductFeature;

    // compare masterproduct feature with current feature
    for (const [name, value] of Object.entries(masterProductFeatures)) {
      if (name === featureName) {
        masterProductFeature = value;
      }
    }

    // compare thisProductFeature with current feature
    for (const [name, value] of Object.entries(thisProductFeatures)) {
      if (name === featureName) {
        thisProductFeature = value;
      }
    }

    // compare matching features between products that are not null
    if (masterProductFeature) {
      if (masterProductFeature === thisProductFeature) {
        masterProductFeature = '✔️';
        thisProductFeature = '✔️';
      }
    }

    if (!masterProductFeature) {
      masterProductFeature = <span className='empty'> x </span>;
    }

    if (!thisProductFeature) {
      thisProductFeature = <span className='empty'> x </span>;
    }

    return (
        <tr className='comparison-row' key={i}>
        <td> {masterProductFeature} </td>
        <td className='feature-name'> {featureName} </td>
        <td> {thisProductFeature} </td>
      </tr>
    );
  });

  return (
    <div className='comparison-modal'>
      <div className='modal-body'>
        <div className='comparison-modal-close' onClick={toggleCompareProducts}>❌</div>
        <div className='category-name'>Comparing..</div>
        <table className='modal-table'>
          <tbody>
            <tr>
              <th><h4>{masterProductDetails.name}</h4></th>
              <th className='feature-name'></th>
              <th><h4>{thisProductDetails.name}</h4></th>
            </tr>
            {comparison}
          </tbody>
        </table>
      </div>
    </div>
  );
}
