const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Function to fetch categories from medineeds.in
async function fetchMedineedsCategories() {
  try {
    const { data } = await axios.get('https://medineeds.in/');
    const $ = cheerio.load(data);

    const categories = {
      'mobility-aids': [
        { name: 'Walking Sticks', href: '/products?category=walking-sticks' },
        { name: 'Walker', href: '/products?category=walker' },
        { name: 'Wheelchairs', href: '/products?category=wheelchairs' },
        { name: 'Commode', href: '/products?category=commode' }
      ],
      'patient-care': [
        { name: 'AirBeds', href: '/products?category=airbeds' },
        { name: 'Injection | Tube | Needles', href: '/products?category=injection-tube-needles' },
        { name: 'Cleaning', href: '/products?category=cleaning' },
        { name: 'Health Care Device', href: '/products?category=health-care-device' },
        { name: 'Acupressure', href: '/products?category=acupressure' },
        { name: 'Dressing', href: '/products?category=dressing' },
        { name: 'Adult Diapers', href: '/products?category=adult-diapers' },
        { name: 'Shower Chair', href: '/products?category=shower-chair' },
        { name: 'Ointments', href: '/products?category=ointments' },
        { name: 'Underpads', href: '/products?category=underpads' },
        { name: 'Dental Care', href: '/products?category=dental-care' },
        { name: 'Hearing Battery', href: '/products?category=hearing-battery' }
      ],
      'brands': [
        { name: 'Karma', href: '/products?brand=karma' },
        { name: 'Coloplast', href: '/products?brand=coloplast' },
        { name: 'Romsons', href: '/products?brand=romsons' },
        { name: 'Hicks', href: '/products?brand=hicks' },
        { name: 'B-Fit', href: '/products?brand=b-fit' },
        { name: 'ConvaTec', href: '/products?brand=convatec' },
        { name: 'Vissco', href: '/products?brand=vissco' },
        { name: 'Hollister', href: '/products?brand=hollister' },
        { name: 'One Touch', href: '/products?brand=one-touch' },
        { name: 'Beurer', href: '/products?brand=beurer' },
        { name: 'Point Of Care', href: '/products?brand=point-of-care' },
        { name: 'Dr.Morepen', href: '/products?brand=dr-morepen' },
        { name: 'Omron', href: '/products?brand=omron' }
      ],
      'support': [
        { name: 'Knee & Calf Support', href: '/products?category=knee-calf-support' },
        { name: 'Leg Support', href: '/products?category=leg-support' },
        { name: 'Cervical Collar (Neck)', href: '/products?category=cervical-collar' },
        { name: 'Finger Support', href: '/products?category=finger-support' },
        { name: 'Hand Support', href: '/products?category=hand-support' },
        { name: 'Back Support', href: '/products?category=back-support' },
        { name: 'Elbow Support', href: '/products?category=elbow-support' },
        { name: 'Foot Support', href: '/products?category=foot-support' }
      ]
    };

    return categories;
  } catch (error) {
    console.error('Error fetching medineeds categories:', error);
    return {};
  }
}

// Function to fetch ostomy categories from coloplaststore.in
async function fetchColoplastCategories() {
  try {
    const { data } = await axios.get('https://coloplaststore.in/');
    const $ = cheerio.load(data);

    const ostomyCategories = [
      { name: 'Ostomy Bags', href: '/products?category=ostomy-bags' },
      { name: 'Ostomy Baseplates', href: '/products?category=ostomy-baseplates' },
      { name: 'Supporting Products', href: '/products?category=supporting-products' },
      { name: 'Brands', href: '/products?category=ostomy-brands' }
    ];

    return ostomyCategories;
  } catch (error) {
    console.error('Error fetching coloplast categories:', error);
    return [];
  }
}

// Endpoint to get categories
app.get('/api/categories', async (req, res) => {
  try {
    const medineedsCats = await fetchMedineedsCategories();
    const coloplastCats = await fetchColoplastCategories();

    res.json({
      'ostomy-care': coloplastCats,
      ...medineedsCats
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// Endpoint to get products
app.get('/api/products', async (req, res) => {
  const { category, brand } = req.query;

  try {
    let url;
    if (category && category.startsWith('ostomy')) {
      url = `https://coloplaststore.in/collections/${category.replace('ostomy-', '').replace('-', '-')}`;
    } else if (category) {
      url = `https://medineeds.in/collections/${category}`;
    } else if (brand) {
      url = `https://medineeds.in/collections/${brand}`;
    } else {
      url = 'https://medineeds.in/collections/all';
    }

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const products = [];

    // For medineeds.in
    $('.product-item, .grid__item').each((i, elem) => {
      const title = $(elem).find('h3, .product-title, a').first().text().trim() || $(elem).find('img').attr('alt');
      const price = $(elem).find('.price, .money').text().trim();
      const image = $(elem).find('img').attr('src');
      const link = $(elem).find('a').attr('href');

      if (title) {
        products.push({
          title,
          price: price || '₹ 0',
          image: image ? (image.startsWith('http') ? image : 'https:' + image) : '',
          link: link ? (link.startsWith('http') ? link : 'https://medineeds.in' + link) : ''
        });
      }
    });

    // If no products, add dummy
    if (products.length === 0) {
      products.push({
        title: 'Sample Product',
        price: '₹ 100',
        image: 'https://via.placeholder.com/200',
        link: '#'
      });
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});