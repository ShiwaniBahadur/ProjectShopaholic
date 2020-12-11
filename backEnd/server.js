const express = require("express");
const cors = require('cors');
//Women Category
const ethnicWear = require('./ethnicWear.js');
const westernWear = require('./westernWear');
const footwear = require('./footwear.js');
const innerWear = require('./innerWear.js');
const bags = require('./bags.js');
const jewellery = require('./jewellery.js');
const accessoriesWomen = require('./accessoriesWomen.js');
const wellness = require('./wellness.js');
const tools = require('./tools.js');
//Men Category
const footwearMen = require('./footwearMen.js');
const accessoriesMen = require('./accessoriesMen.js');
const traditionalWearMen = require('./traditionalWearMen.js');
const innerWearMen = require('./innerWearMen.js');
const bottomWear = require('./bottomWear.js');
const clothing = require('./clothing.js');
//Skin Care category
const skinCare = require('./skinCare.js');
//Bath and Shower category
const bathAndShower = require('./bathAndShower.js');
//Fragnances Category
const perfume = require('./perfume.js');
//Packed Foods Category
const packedFoods = require('./packedFoods.js');
//Hair Category
const hairCare = require('./hairCare.js');
const toolsHair = require('./toolsHair.js');
const herbal = require('./herbal.js');
const hairRemoval = require('./hairRemoval.js');
const straightners = require('./straightners.js');
const stylers = require('./stylers.js');
const trimmers = require('./trimmers.js');
const dryers = require('./dryers.js');
const hairAccessories = require('./hairAccessories.js');
//Makeup Category
const face = require('./face.js');
const eyes = require('./eyes.js');
const lips = require('./lips.js');
const nails = require('./nails.js');
const makeupKits = require('./makeupKits.js');
const makeupAccessories = require('./makeupAccessories.js');
const makeupCombo = require('./makeupCombo.js');
const creamMen = require('./creamMen.js');
const grooming = require('./grooming.js');
// Home Category
const storage = require('./storage.js');
const appliance = require('./appliance.js');
const curtain = require('./curtain.js');
const livingRoom = require('./livingRoom.js');
const kitchenTools = require('./kitchenTools.js');
const kitchenStorage = require('./kitchenStorage.js');
const kitchenLinens = require('./kitchenLinens.js');
const kitchenAppliances = require('./kitchenAppliances.js');
const cookware = require('./cookware.js');
const garden = require('./garden.js');
const carpets = require('./carpets.js');
const bedding = require('./bedding.js');
const bathroomLinen = require('./bathroomLinen.js');
const bathroomAccessories = require('./bathroomAccessories.js');
//Electronics Category
const earphone = require('./earphone.js');
const headphone = require('./headphone.js');
const cable = require('./cable.js');
const bluetooth = require('./bluetooth.js');
const cases = require('./cases.js');
const powerBank = require('./powerBank.js');
const chargers = require('./chargers.js');
const holders = require('./holders.js');
const mouse = require('./mouse.js');
const laptopSkin = require('./laptopSkin.js');
const laptopScreen = require('./laptopScreen.js');
const camera = require('./camera.js');
const tripod = require('./tripod.js');
const cctv = require('./cctv.js'); 

const app = express();
app.use(cors());
//Women Category
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
//Men Category
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
//Skin Care category
app.get('/api/products/skinCare', (req, res) => {
    res.send(skinCare.products);
});
//Bath and Shower category
app.get('/api/products/bathAndShower', (req, res) => {
    res.send(bathAndShower.products);
});
//Fragnances Category
app.get('/api/products/perfume', (req, res) => {
    res.send(perfume.products);
});
//Packed Foods Category
app.get('/api/products/packedFoods', (req, res) => {
    res.send(packedFoods.products);
});
//Hair Category
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
//Makeup Category
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
//Electronics Category
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
    console.log("serve at http://localhost:7000");
});
