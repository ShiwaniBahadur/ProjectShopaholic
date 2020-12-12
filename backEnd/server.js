/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

import express from 'express';
import cors from 'cors';

// Women Category
import ethnicWear from './ethnicWear';
import westernWear from './westernWear';
import footwear from './footWear';
import innerWear from './innerWear';
import bags from './bags';
import jewellery from './jewellery';
import accessoriesWomen from './accessoriesWomen';
import wellness from './wellness';
import tools from './tools';

// Men Category
import footwearMen from './footwearMen';
import accessoriesMen from './accessoriesMen';
import traditionalWearMen from './traditionalWearMen';
import innerWearMen from './innerWearMen';
import bottomWear from './bottomWear';
import clothing from './clothing';

// Skin Care category
import skinCare from './skinCare';

// Bath and Shower category
import bathAndShower from './bathAndShower';

// Fragnances Category
import perfume from './perfume';

// Packed Foods Category
import packedFoods from './packedFoods';

// Hair Category
import hairCare from './hairCare';
import toolsHair from './toolsHair';
import herbal from './herbal';
import hairRemoval from './hairRemoval';
import straightners from './straightners';
import stylers from './stylers';
import trimmers from './trimmers';
import dryers from './dryers';
import hairAccessories from './hairAccessories';

// Makeup Category
import face from './face';
import eyes from './eyes';
import lips from './lips';
import nails from './nails';
import makeupKits from './makeupKits';
import makeupAccessories from './makeupAccessories';
import makeupCombo from './makeupCombo';
import creamMen from './creamMen';
import grooming from './grooming';

// Home Category
import storage from './storage';
import appliance from './appliance';
import curtain from './curtain';
import livingRoom from './livingRoom';
import kitchenTools from './kitchenTools';
import kitchenStorage from './kitchenStorage';
import kitchenLinens from './kitchenLinens';
import kitchenAppliances from './kitchenAppliances';
import cookware from './cookware';
import garden from './garden';
import carpets from './carpets';
import bedding from './bedding';
import bathroomLinen from './bathroomLinen';
import bathroomAccessories from './bathroomAccessories';

// Electronics Category
import earphone from './earphone';
import headphone from './headphone';
import cable from './cable';
import bluetooth from './bluetooth';
import cases from './cases';
import powerBank from './powerBank';
import chargers from './chargers';
import holders from './holders';
import mouse from './mouse';
import laptopSkin from './laptopSkin';
import laptopScreen from './laptopScreen';
import camera from './camera';
import tripod from './tripod';
import cctv from './cctv';

const app = express();
app.use(cors());

// Women Category
app.get('/api/products/ethnicWear', (req, res) => {
    res.send(ethnicWear.products);
});
app.get('/api/products/westernWear', (req, res) => {
    res.send(westernWear.products);
});
app.get('/api/products/footwear', (req, res) => {
    res.send(footwear.products);
});
app.get('/api/products/innerWear', (req, res) => {
    res.send(innerWear.products);
});
app.get('/api/products/bags', (req, res) => {
    res.send(bags.products);
});
app.get('/api/products/jewellery', (req, res) => {
    res.send(jewellery.products);
});
app.get('/api/products/accessoriesWomen', (req, res) => {
    res.send(accessoriesWomen.products);
});
app.get('/api/products/wellness', (req, res) => {
    res.send(wellness.products);
});
app.get('/api/products/tools', (req, res) => {
    res.send(tools.products);
});

// Men Category
app.get('/api/products/footwearMen', (req, res) => {
    res.send(footwearMen.products);
});
app.get('/api/products/accessoriesMen', (req, res) => {
    res.send(accessoriesMen.products);
});
app.get('/api/products/traditionalWearMen', (req, res) => {
    res.send(traditionalWearMen.products);
});
app.get('/api/products/innerWearMen', (req, res) => {
    res.send(innerWearMen.products);
});
app.get('/api/products/bottomWear', (req, res) => {
    res.send(bottomWear.products);
});
app.get('/api/products/clothing', (req, res) => {
    res.send(clothing.products);
});

// Skin Care category
app.get('/api/products/skinCare', (req, res) => {
    res.send(skinCare.products);
});

// Bath and Shower category
app.get('/api/products/bathAndShower', (req, res) => {
    res.send(bathAndShower.products);
});

// Fragnances Category
app.get('/api/products/perfume', (req, res) => {
    res.send(perfume.products);
});

// Packed Foods Category
app.get('/api/products/packedFoods', (req, res) => {
    res.send(packedFoods.products);
});

// Hair Category
app.get('/api/products/hairCare', (req, res) => {
    res.send(hairCare.products);
});
app.get('/api/products/toolsHair', (req, res) => {
    res.send(toolsHair.products);
});
app.get('/api/products/herbal', (req, res) => {
    res.send(herbal.products);
});
app.get('/api/products/hairRemoval', (req, res) => {
    res.send(hairRemoval.products);
});
app.get('/api/products/straightners', (req, res) => {
    res.send(straightners.products);
});
app.get('/api/products/stylers', (req, res) => {
    res.send(stylers.products);
});
app.get('/api/products/trimmers', (req, res) => {
    res.send(trimmers.products);
});
app.get('/api/products/dryers', (req, res) => {
    res.send(dryers.products);
});
app.get('/api/products/hairAccessories', (req, res) => {
    res.send(hairAccessories.products);
});

// Makeup Category
app.get('/api/products/face', (req, res) => {
    res.send(face.products);
});
app.get('/api/products/eyes', (req, res) => {
    res.send(eyes.products);
});
app.get('/api/products/lips', (req, res) => {
    res.send(lips.products);
});
app.get('/api/products/nails', (req, res) => {
    res.send(nails.products);
});
app.get('/api/products/makeupKits', (req, res) => {
    res.send(makeupKits.products);
});
app.get('/api/products/makeupAccessories', (req, res) => {
    res.send(makeupAccessories.products);
});
app.get('/api/products/makeupCombo', (req, res) => {
    res.send(makeupCombo.products);
});
app.get('/api/products/creamMen', (req, res) => {
    res.send(creamMen.products);
});
app.get('/api/products/grooming', (req, res) => {
    res.send(grooming.products);
});

// Home Category
app.get('/api/products/storage', (req, res) => {
    res.send(storage.products);
});
app.get('/api/products/appliance', (req, res) => {
    res.send(appliance.products);
});
app.get('/api/products/curtain', (req, res) => {
    res.send(curtain.products);
});
app.get('/api/products/livingRoom', (req, res) => {
    res.send(livingRoom.products);
});
app.get('/api/products/kitchenTools', (req, res) => {
    res.send(kitchenTools.products);
});
app.get('/api/products/kitchenStorage', (req, res) => {
    res.send(kitchenStorage.products);
});
app.get('/api/products/kitchenLinens', (req, res) => {
    res.send(kitchenLinens.products);
});
app.get('/api/products/kitchenAppliances', (req, res) => {
    res.send(kitchenAppliances.products);
});
app.get('/api/products/cookware', (req, res) => {
    res.send(cookware.products);
});
app.get('/api/products/garden', (req, res) => {
    res.send(garden.products);
});
app.get('/api/products/carpets', (req, res) => {
    res.send(carpets.products);
});
app.get('/api/products/bedding', (req, res) => {
    res.send(bedding.products);
});
app.get('/api/products/bathroomLinen', (req, res) => {
    res.send(bathroomLinen.products);
});
app.get('/api/products/bathroomAccessories', (req, res) => {
    res.send(bathroomAccessories.products);
});

// Electronics Category
app.get('/api/products/earphone', (req, res) => {
    res.send(earphone.products);
});
app.get('/api/products/headphone', (req, res) => {
    res.send(headphone.products);
});
app.get('/api/products/cable', (req, res) => {
    res.send(cable.products);
});
app.get('/api/products/bluetooth', (req, res) => {
    res.send(bluetooth.products);
});
app.get('/api/products/cases', (req, res) => {
    res.send(cases.products);
});
app.get('/api/products/powerBank', (req, res) => {
    res.send(powerBank.products);
});
app.get('/api/products/chargers', (req, res) => {
    res.send(chargers.products);
});
app.get('/api/products/holders', (req, res) => {
    res.send(holders.products);
});
app.get('/api/products/mouse', (req, res) => {
    res.send(mouse.products);
});
app.get('/api/products/laptopSkin', (req, res) => {
    res.send(laptopSkin.products);
});
app.get('/api/products/laptopScreen', (req, res) => {
    res.send(laptopScreen.products);
});
app.get('/api/products/camera', (req, res) => {
    res.send(camera.products);
});
app.get('/api/products/tripod', (req, res) => {
    res.send(tripod.products);
});
app.get('/api/products/cctv', (req, res) => {
    res.send(cctv.products);
});

app.listen(7000, () => {
    console.log('serve at http://localhost:7000');
});
