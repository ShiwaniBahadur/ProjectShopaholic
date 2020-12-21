import axios from 'axios';
import { apiUrl } from './config';
import { getUserInfo } from './localStorage';

// eslint-disable-next-line consistent-return
export const getProduct = async (id) => {

  // Women Category
    try {
      if (window.location.href.indexOf('ethnicWear') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/ethnicWear/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      if (response.statusText !== 'OK') {
        throw new Error(response.data.message);
      }
      return response.data; 
    }
    } catch (err) {
      console.log(err);
      return { error: err.response.data.message || err.message };
    } 
  try {
    if (window.location.href.indexOf('westernWear') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/westernWear/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('footwear') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/footwear/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('innerWear') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/innerWear/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('bags') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/bags/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('jewellery') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/jewellery/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('accessoriesWomen') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/accessoriesWomen/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('wellness') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/wellness/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('tools') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/tools/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }

  // Men Category
  try {
    if (window.location.href.indexOf('footwearMen') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/footwearMen/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('accessoriesMen') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/accessoriesMen/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('traditionalWearMen') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/traditionalWearMen/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('innerWearMen') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/innerWearMen/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('bottomWear') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/bottomWear/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
  try {
    if (window.location.href.indexOf('clothing') > -1) {
      const response = await axios({ 
        url: `${apiUrl}/api/products/clothing/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }); 
      return response.data; 
    }
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }

// Skin Care category
try {
  if (window.location.href.indexOf('skinCare') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/skinCare/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Bath and Shower category
try {
  if (window.location.href.indexOf('bathAndShower') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/bathAndShower/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Fragnances Category
try {
  if (window.location.href.indexOf('perfume') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/perfume/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Packed Foods Category
try {
  if (window.location.href.indexOf('packedFoods') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/packedFoods/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Hair Category
try {
  if (window.location.href.indexOf('hairCare') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/hairCare/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('toolsHair') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/toolsHair/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('herbal') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/herbal/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('hairRemoval') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/hairRemoval/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('straightners') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/straightners/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('stylers') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/stylers/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('trimmers') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/trimmers/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('dryers') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/dryers/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('hairAccessories') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/hairAccessories/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Makeup Category
try {
  if (window.location.href.indexOf('face') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/face/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('eyes') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/eyes/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('lips') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/lips/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('nails') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/nails/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('makeupKits') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/makeupKits/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('makeupAccessories') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/makeupAccessories/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('makeupCombo') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/makeupCombo/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('creamMen') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/creamMen/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('grooming') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/grooming/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Home Category
try {
  if (window.location.href.indexOf('storage') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/storage/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('kitchenAppliances') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/appliance/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('curtain') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/curtain/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('livingRoom') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/livingRoom/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('kitchenTools') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/kitchenTools/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('kitchenStorage') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/kitchenStorage/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('kitchenLinens') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/kitchenLinens/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('kitchenAppliances') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/kitchenAppliances/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('cookware') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/cookware/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('garden') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/garden/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('carpets') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/carpets/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('bedding') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/bedding/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('bathroomLinen') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/bathroomLinen/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('bathroomAccessories') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/bathroomAccessories/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}

// Electronics Category
try {
  if (window.location.href.indexOf('earphone') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/earphone/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('headphone') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/headphone/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('cable') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/cable/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('bluetooth') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/bluetooth/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('cases') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/cases/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('powerBank') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/powerBank/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('chargers') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/chargers/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('holders') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/holders/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('mouse') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/mouse/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('laptopSkin') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/laptopSkin/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('laptopScreen') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/laptopScreen/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('camera') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/camera/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('tripod') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/tripod/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
try {
  if (window.location.href.indexOf('cctv') > -1) {
    const response = await axios({ 
      url: `${apiUrl}/api/products/cctv/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }); 
    return response.data; 
  }
} catch (err) {
  console.log(err);
  return { error: err.response.data.message || err.message };
}
}; 
export const signin = async ({ email, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/signin`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      data: {
        email,
        password,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};
export const register = async ({ name, email, password }) => {
  try {
    const response = await axios({
      url: `${apiUrl}/api/users/register`,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      data: {
        name,
        email,
        password,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};
export const update = async ({ name, email, password }) => {
  try {
    const { _id, token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/users/${_id}`,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        name,
        email,
        password,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return { error: err.response.data.message || err.message };
  }
};
export const createOrder = async (order) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: order,
    });
    if (response.statusText !== 'Created') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response ? err.response.data.message : err.message };
  }
};
export const getOrder = async (id) => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/${id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.message };
  }
};
export const getMyOrders = async () => {
  try {
    const { token } = getUserInfo();
    const response = await axios({
      url: `${apiUrl}/api/orders/mine`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.statusText !== 'OK') {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (err) {
    return { error: err.response ? err.response.data.message : err.message };
  }
};
