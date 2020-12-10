//Women Category
import ethnicWearData from '../ethnicWear.js';
import westernWearData from '../westernWear.js';
import footWearData from '../footWear.js';
import innerWearData from '../innerWear.js';
import bagsData from '../bags.js';
import jewelleryData from '../jewellery.js';
import accessoriesData from '../accessoriesWomen.js';
import wellnessData from '../wellness.js';
import toolsData from '../tools.js';
//Men category
import footwearMenData from '../footwearMen.js';
import accessoriesMenData from '../accessoriesMen.js';
import ethnicWearMenData from '../ethnicWearMen.js';
import innerWearMenData from '../innerWearMen.js';
import bottomWearData from '../bottomWear.js';
import clothingData from '../clothing.js'; 
//Skin Care category
import skinCareData from '../skinCare.js';
//Bath and Shower category
import bathAndShowerData from '../bathAndShower.js';
//Fragnances Category
import perfumeData from '../perfume.js';
// Packed Foods Category
import packedFoodsData from '../packedFoods.js';
//Hair Category
import hairCareData from '../hairCare.js';
import toolsHairData from '../toolsHair.js';
import herbalData from '../herbal.js';
import hairRemovalData from '../hairRemoval.js';
import straightnersData from '../straightners.js';
import stylersData from '../stylers.js';
import trimmersData from '../trimmers.js';
import dryersData from '../dryers.js';
import hairAccessoriesData from '../hairAccessories.js';
//Makeup Category
import faceData from '../face.js';
import eyesData from '../eyes.js';
import lipsData from '../lips.js';
import nailsData from '../nails.js';
import makeupKitsData from '../makeupKits.js';
import makeupAccessoriesData from '../makeupAccessories.js';
import makeupComboData from '../makeupCombo.js';
import creamMenData from '../creamMen.js';
import groomingData from '../grooming.js';
// Home Category
import storageData from '../storage.js';
import applianceData from '../appliance.js';
import curtainData from '../curtain.js';
import livingRoomData from '../livingRoom.js';
import kitchenToolsData from '../kitchenTools.js';
import kitchenStorageData from '../kitchenStorage.js';
import kitchenLinensData from '../kitchenLinens.js';
import kitchenAppliancesData from '../kitchenAppliances.js';
import cookwareData from '../cookware.js';
import gardenData from '../garden.js';
import carpetsData from '../carpets.js';
import beddingData from '../bedding.js';
import bathroomLinenData from '../bathroomLinen.js';
import bathroomAccessoriesData from '../bathroomAccessories.js';
//Electronics Category
import earphoneData from '../earphone.js';
import headphoneData from '../headphone.js';
import cableData from '../cable.js';
import bluetoothData from '../bluetooth.js';
import casesData from '../cases.js';
import powerBankData from '../powerBank.js';
import chargersData from '../chargers.js';
import holdersData from '../holders.js';
import mouseData from '../mouse.js';
import laptopSkinData from '../laptopSkin.js';
import laptopScreenData from '../laptopScreen.js';
import cameraData from '../camera.js';
import tripodData from '../tripod.js';
import cctvData from '../cctv.js'; 
const HomeScreen = {
    render: () => {
        //Women category
        if(window.location.href.indexOf("ethnicWear") > -1){
            const {products} = ethnicWearData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("westernWear") > -1){
            const {products} = westernWearData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("footwear") > -1){
            const {products} = footWearData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("innerWear") > -1){
            const {products} = innerWearData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bags") > -1){
            const {products} = bagsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("jewellery") > -1){
            const {products} = jewelleryData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("accessoriesWomen") > -1){
            const {products} = accessoriesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("wellness") > -1){
            const {products} = wellnessData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("tools") > -1){
            const {products} = toolsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Men category
        if(window.location.href.indexOf("footwearMen") > -1){
            const {products} = footwearMenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("accessoriesMen") > -1){
            const {products} = accessoriesMenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("ethnicWearMen") > -1){
            const {products} = ethnicWearMenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("innerWearMen") > -1){
            const {products} = innerWearMenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bottomWear") > -1){
            const {products} = bottomWearData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("clothing") > -1){
            const {products} = clothingData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Skin Care category
        if(window.location.href.indexOf("skinCare") > -1){
            const {products} = skinCareData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Bath and Shower category
        if(window.location.href.indexOf("bathAndShower") > -1){
            const {products} = bathAndShowerData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Fragnances Category
        if(window.location.href.indexOf("perfume") > -1){
            const {products} = perfumeData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Packed Foods Category
        if(window.location.href.indexOf("packedFoods") > -1){
            const {products} = packedFoodsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Hair Category
        if(window.location.href.indexOf("hairCare") > -1){
            const {products} = hairCareData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("toolsHair") > -1){
            const {products} = toolsHairData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("herbal") > -1){
            const {products} = herbalData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("hairRemoval") > -1){
            const {products} = hairRemovalData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("straightners") > -1){
            const {products} = straightnersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("stylers") > -1){
            const {products} = stylersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("trimmers") > -1){
            const {products} = trimmersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("dryers") > -1){
            const {products} = dryersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("hairAccessories") > -1){
            const {products} = hairAccessoriesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Makeup Category
        if(window.location.href.indexOf("face") > -1){
            const {products} = faceData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("eyes") > -1){
            const {products} = eyesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("lips") > -1){
            const {products} = lipsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("nails") > -1){
            const {products} = nailsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("makeupKits") > -1){
            const {products} = makeupKitsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("makeupAccessories") > -1){
            const {products} = makeupAccessoriesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("makeupCombo") > -1){
            const {products} = makeupComboData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("creamMen") > -1){
            const {products} = creamMenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("grooming") > -1){
            const {products} = groomingData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        // Home Category
        if(window.location.href.indexOf("storage.html") > -1){
            const {products} = storageData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("appliance") > -1){
            const {products} = applianceData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("curtain") > -1){
            const {products} = curtainData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("livingRoom") > -1){
            const {products} = livingRoomData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("kitchenTools") > -1){
            const {products} = kitchenToolsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("kitchenStorage") > -1){
            const {products} = kitchenStorageData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("kitchenLinens") > -1){
            const {products} =kitchenLinensData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("kitchenAppliances") > -1){
            const {products} = kitchenAppliancesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("cookware") > -1){
            const {products} = cookwareData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("garden") > -1){
            const {products} = gardenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("carpets") > -1){
            const {products} = carpetsData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bedding") > -1){
            const {products} = beddingData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bathroomLinen") > -1){
            const {products} = bathroomLinenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bathroomAccessories") > -1){
            const {products} = bathroomAccessoriesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        //Electronics Category
        if(window.location.href.indexOf("earphone") > -1){
            const {products} = earphoneData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("headphone") > -1){
            const {products} = headphoneData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("cable") > -1){
            const {products} = cableData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("bluetooth") > -1){
            const {products} = bluetoothData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("cases") > -1){
            const {products} = casesData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("powerBank") > -1){
            const {products} = powerBankData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("chargers") > -1){
            const {products} = chargersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("holders") > -1){
            const {products} = holdersData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("mouse") > -1){
            const {products} = mouseData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("laptopSkin") > -1){
            const {products} = laptopSkinData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("laptopScreen") > -1){
            const {products} = laptopScreenData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("camera") > -1){
            const {products} = cameraData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("tripod") > -1){
            const {products} = tripodData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
        if(window.location.href.indexOf("cctv") > -1){
            const {products} = cctvData;
            return `               
            <ul class="products">
            ${products.map( product => `
            <li>
            <div class="product">
                <a href="/#/product/${product._id}"> 
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="/#/product/${product._id}">
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
    },    
};
export default HomeScreen; 