// import axios from 'axios';
import { getProducts } from '../api';
import Rating from '../components/Rating';
// import { hideLoading, showLoading } from '../utils';

const HomeScreen = {
    // eslint-disable-next-line consistent-return
    render: async () => {
        // Women category
        const products = await getProducts();
    if (products.error) {
      return `<div class="error">${products.error}</div>`;
    }
        /* showLoading();
        if (window.location.href.indexOf('ethnicWear') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/ethnicWear',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data; */
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })} 
                </div>
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        
        /* if (window.location.href.indexOf('westernWear') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/westernWear',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('footwear') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/footwear',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('innerWear') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/innerWear',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bags') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bags',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                    </div>
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('jewellery') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/jewellery',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('accessoriesWomen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/accessoriesWomen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('wellness') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/wellness',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('tools') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/tools',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Men category
        if (window.location.href.indexOf('footwearMen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/footwearMen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('accessoriesMen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/accessoriesMen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('traditionalWearMen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/traditionalWearMen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('innerWearMen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/innerWearMen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bottomWear') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bottomWear',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('clothing') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/clothing',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Skin Care category
        if (window.location.href.indexOf('skinCare') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/skinCare',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Bath and Shower category
        if (window.location.href.indexOf('bathAndShower') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bathAndShower',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Fragnances Category
        if (window.location.href.indexOf('perfume') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/perfume',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Packed Foods Category
        if (window.location.href.indexOf('packedFoods') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/packedFoods',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Hair Category
        if (window.location.href.indexOf('hairCare') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/hairCare',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('toolsHair') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/toolsHair',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('herbal') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/herbal',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('hairRemoval') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/hairRemoval',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('straightners') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/straightners',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('stylers') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/stylers',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('trimmers') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/trimmers',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('dryers') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/dryers',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('hairAccessories') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/hairAccessories',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Makeup Category
        if (window.location.href.indexOf('face') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/face',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('eyes') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/eyes',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('lips') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/lips',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('nails') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/nails',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('makeupKits') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/makeupKits',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('makeupAccessories') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/makeupAccessories',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('makeupCombo') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/makeupCombo',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('creamMen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/creamMen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('grooming') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/grooming',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Home Category
        if (window.location.href.indexOf('storage.html') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/storage',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('appliance') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/appliance',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('curtain') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/curtain',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('livingRoom') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/livingRoom',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('kitchenTools') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/kitchenTools',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('kitchenStorage') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/kitchenStorage',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('kitchenLinens') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/kitchenLinens',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('kitchenAppliances') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/kitchenAppliances',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('cookware') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/cookware',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('garden') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/garden',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('carpets') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/carpets',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bedding') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bedding',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bathroomLinen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bathroomLinen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bathroomAccessories') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bathroomAccessories',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        // Electronics Category
        if (window.location.href.indexOf('earphone') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/earphone',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('headphone') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/headphone',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('cable') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/cable',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('bluetooth') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/bluetooth',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('cases') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/cases',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('powerBank') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/powerBank',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('chargers') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/chargers',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('holders') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/holders',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('mouse') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/mouse',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('laptopSkin') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/laptopSkin',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('laptopScreen') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/laptopScreen',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('camera') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/camera',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('tripod') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/tripod',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        }
        if (window.location.href.indexOf('cctv') > -1) {
            const response = await axios({
                url: 'http://localhost:7000/api/products/cctv',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            hideLoading();
            if (!response || response.statusText !== 'OK') {
                return '<div> Error in getting data</div>';
            }
            const products = response.data;
            return `               
            <ul class="products">
            ${products.map((product) => `
            <li>
            <div class="product">
                <a href="#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#/product/${product._id}">
                        ${product.name}		
                    </a>  
                </div>
                <div class = "product-rating"> 
                ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`,
                  })}
                <div class="product-price">
                    ₹${product.price}
                </div>
                </div>
            </li>
            `).join('\n')} 
            `;
        } */
    },
};
export default HomeScreen;
