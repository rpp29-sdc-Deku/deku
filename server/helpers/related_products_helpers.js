const axios = require('axios');
const router = require('express').Router();
const bodyParser = require('body-parser');

const apiToken = process.env.API_TOKEN;
const apiURL = process.env.API;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const getRelatedProducts = (currentProductId) => {

  //delete this variable and use incoming variable from line 11 into the end at line 15
  //hardcoded now while I want for other service to be up and running.

  const currentProductIdtesting = -1;

  //http://localhost:5000/api/related?_id=${currentProductIdtesting}

  const relatedProductIds = axios.get(`http://18.212.20.132:5000/api/related?_id=-1`, {
    headers: {
      Authorization: apiToken
    }
  });

  // need to retrievee for category, name, slogan, price
  const relatedProductDetails = relatedProductIds.then(currentProductIds => {
    let servercount = 0
    currentProductIds.data.push(currentProductId);
    servercount++
    console.log(servercount)
    return Promise.all(currentProductIds.data.map(id => {
      return axios.get(`${apiURL}products/${id}`, {
        headers: {
          Authorization: apiToken
        }
      });
    }));
  });

  const productImages = relatedProductDetails.then((productsList) => {
    return Promise.all(productsList.map(product => {
      return axios.get(`${apiURL}products/${product.data.id}/styles`, {
        headers: {
          Authorization: apiToken
        }
      });
    }));
  });

  const productDetailsWithImages = productImages.then((images) => {
    // const needed = ['id', 'photos'];
    const imageData = images.map(image => {
      const id = image.data.product_id;
      const imageObj = image.data.results[0];
      imageObj.id = id;
      const filtered = Object.keys(imageObj)
        // .filter(key => needed.includes(key))
        .reduce((obj, key) => {
          obj[key] = imageObj[key];
          return obj;
        }, {});
      return filtered;
    });

    // console.log('IMAGE DATA ', imageData);
    return imageData;
  });

  // console.log('PRODUCT IMAGES ', productImages);

  return Promise.all([relatedProductDetails, productDetailsWithImages]);
};

const combineDetailsAndImages = (productDetails, productImages) => {
  // const needed = ['id', 'name', 'slogan', 'default_price', 'category'];
  const productOverview = productDetails.map(product => {
    const raw = product.data;
    const filtered = Object.keys(raw)
      // .filter(key => needed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});
    return filtered;
  });

  const combinedData = productOverview.map((product, i) => {
    const combine = {
      ...productImages[i],
      ...product
    };
    return combine;
  });

  // console.log('product images ============== ', combinedData);
  return combinedData;
};

module.exports = {
  getRelatedProducts: getRelatedProducts,
  combineDetailsAndImages: combineDetailsAndImages
};
