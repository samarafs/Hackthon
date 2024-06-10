import bcryptjs from "bcryptjs";
export const productsData = {
    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcryptjs.hashSync('123'),
            isAdmin: true
        },
        {
            name: 'User',
            email: 'user@example.com',
            password: bcryptjs.hashSync('123'),
            isAdmin: false
        }
    ],
    products: [
    
        {
      
            name: 'Yuta',
            slug: 'Tables-Yuta',
            description: 'Yuta is a distinctive black table crafted from recycled iron, designed to complement and enhance your balanced lifestyle. This special piece embodies both sustainability and sophistication, serving as a stylish focal point while promoting eco-conscious living.',
            price: 356,
            brand: 'Adidas',
            category: 'Tables',
            image: 'Yuta.jpg',
            banner: 'Yuta.jpg',
            quantity: 1,
            rating: 4.5,
            numReviews: 10,
            countInStock: 6,
            colors: ['red', 'green', 'blue'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Taou',
            slug: 'Table-Taou',
            description: 'Taou is a petite and aesthetically pleasing table crafted from recycled wood. This charming piece embodies minimalist elegance, offering both functionality and eco-conscious design in a compact form.',
            price: 249,
            brand: 'Adidas',
            category: 'Tables',
            image: 'Taou.jpg',
            banner: 'Taou.jpg',
            quantity: 1,
            rating: 4.7,
            numReviews: 8,
            countInStock: 12,
            colors: ['black', 'white', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
          
            name: 'Slipa',
            slug: 'Paints-Slipa',
            description: 'A truly artistic painting created on cardboard, showcasing the ingenuity of using unconventional materials. This captivating piece combines creativity with sustainability, transforming humble cardboard into a captivating work of art that adds depth and character to any space.',
            price: 298,
            brand: 'Nike',
            category: 'Paints',
            image: 'Slipa.jpg',
            banner: 'Slipa.jpg',
            quantity: 1,
            rating: 4.8,
            numReviews: 15,
            countInStock: 10,
            colors: ['blue', 'black'],
            sizes: ['medium', 'large', 'x-large']
        },
        {
            
            name: 'Sashi',
            slug: 'Tables-Sashi',
            description: 'A simple yet adorable wooden table, perfect for your living room. This delightful piece exudes warmth and charm, offering both functionality and timeless elegance to enhance your space.',
            price: 180,
            brand: 'Levis',
            category: 'Tables',
            image: 'Sashi.jpg',
            banner: 'Sashi.jpg',
            quantity: 1,
            rating: 4.4,
            numReviews: 12,
            countInStock: 8,
            colors: ['blue', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Saboun',
            slug: 'Chairs-Saboun',
            description: 'A charming chair crafted from recycled pallets, blending rustic charm with eco-conscious design. This lovely piece not only adds character to your space but also promotes sustainable living by giving new life to discarded materials. ',
            price: 500,
            brand: 'H&M',
            category: 'dresses',
            image: 'Saboun.jpg',
            banner: 'Saboun.jpg',
            quantity: 1,
            rating: 4.9,
            numReviews: 20,
            countInStock: 15,
            colors: ['yellow', 'pink'],
            sizes: ['small', 'medium']
        },
        {
           
            name: 'Noela',
            slug: 'Pots-Noela',
            description: 'An amazing piece of pottery crafted from repurposed plastics. This innovative creation combines sustainability with artistry, transforming discarded materials into a unique and eye-catching work of art.',
            price: 150,
            brand: 'North Face',
            category: 'Pots',
            image: 'Noela.jpg',
            banner: 'Noela.jpg',
            quantity: 1,
            rating: 4.6,
            numReviews: 18,
            countInStock: 3,
            colors: ['black', 'blue'],
            sizes: ['medium', 'large', 'x-large']
        },
        {
          
            name: 'Lagra',
            slug: 'Pots-Lagra',
            description:  'An amazing piece of pottery crafted from repurposed plastics. This innovative creation combines sustainability with artistry, transforming discarded materials into a unique and eye-catching work of art.',
            price: 90,
            brand: 'Puma',
            category: 'Pots',
            image: 'Lagra.jpg',
            banner: 'Lagra.jpg',
            quantity: 1,
            rating: 4.3,
            numReviews: 25,
            countInStock: 20,
            colors: ['red', 'blue'],
            sizes: ['8', '9', '10']
        },
        {
            name: 'Kyle',
            slug: 'Wardrobes-Kayle',
            description: 'A vibrant and colorful wardrobe, crafted from recycled wood and painted with reclaimed materials. This unique piece combines sustainability with artistic flair, adding a lively touch to any room.',
            price: 476,
            brand: 'Zara',
            category: 'Wardrobes',
            image: 'Kyle.jpg',
            banner: 'Kyle.jpg',
            quantity: 1,
            rating: 4.7,
            numReviews: 30,
            countInStock: 5,
            colors: ['black', 'brown'],
            sizes: ['medium', 'large']
        },
        {
           
            name: 'Golden Boy',
            slug: 'Tables-Golden-B',
            description: 'An amazing table crafted from recycled iron, featuring a stunning golden finish. This exquisite piece merges sustainability with opulent design, making it a standout addition to any space.',
            price: 98,
            brand: 'Lululemon',
            category: 'Tables',
            image: 'Golden-Boy.jpg',
            banner: 'Golden-Boy.jpg',
            quantity: 1,
            rating: 4.8,
            numReviews: 50,
            countInStock: 25,
            colors: ['black', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Ellan',
            slug: 'Shelfs-Ellan',
            description: 'A beautiful shelf crafted from recycled wood, combining sustainability with timeless elegance. This charming piece makes every room looks stunning.',
            price: 765,
            brand: 'Nike',
            category: 'Shelfs',
            image: 'Ellan.jpg',
            banner: 'Ellan.jpg',
            quantity: 1,
            rating: 4.9,
            numReviews: 45,
            countInStock: 30,
            colors: ['white', 'black'],
            sizes: ['8', '9', '10', '11']
        },
        {
           
            name: 'Clay',
            slug: 'Shelfs-Clay',
            description: 'A beautiful shelf crafted from recycled wood, combining sustainability with timeless elegance. This charming piece adds a touch of natural beauty and eco-friendly design to any room.',
            price: 190,
            brand: 'Under Armour',
            category: 'Shelfs',
            image: 'Clay.jpg',
            banner: 'Clay.jpg',
            quantity: 1,
            rating: 4.5,
            numReviews: 15,
            countInStock: 10,
            colors: ['black', 'white'],
            sizes: ['small', 'medium', 'large']
        },
        {
            
            name: 'Bronco',
            slug: 'Chairs-Bronco',
            description: 'An amazing and aesthetically pleasing chair, crafted from recycled iron, perfect for your office. This unique piece blends sustainability with style, adding a touch of elegance and eco-consciousness to your workspace.',
            price: 325,
            brand: 'Columbia',
            category: 'Chairs',
            image:'Bronco.jpg',
            banner: 'Bronco.jpg',
            quantity: 1,
            rating: 4.6,
            numReviews: 22,
            countInStock: 12,
            colors: ['brown', 'black'],
            sizes: ['9', '10', '11']
        },
        {
            name: 'Blanco',
            slug: 'Tables-Blanco',
            description: 'A stunning white iron table, expertly crafted from recycled materials, perfect for enhancing the charm of your room. This elegant piece combines eco-friendly practices with timeless design, creating a stylish and sustainable addition to your space.',
            price: 325,
            brand: 'Reebok',
            category: 'Tables',
            image: 'Blanco.jpg',
            banner: 'Blanco.jpg',
            quantity: 1,
            rating: 4.4,
            numReviews: 18,
            countInStock: 15,
            colors: ['black', 'grey'],
            sizes: ['small', 'medium', 'large']
        },
        {
           
            name: 'Adak',
            slug: 'Star-Adak',
            description: 'A stunning star, crafted entirely from metals salvaged from recycled televisions. This unique piece merges creativity with eco-consciousness, bringing a touch of brilliance and innovation to any setting.',
            price: 75,
            brand: 'Patagonia',
            category: 'Accessories',
            image: 'Adak.jpg',
            banner: 'Adak.jpg',
            quantity: 1,
            rating: 4.7,
            numReviews: 12,
            countInStock: 20,
            colors: ['blue', 'grey'],
            sizes: ['one-size']
        },
        {
         
            name: 'Galdana',
            slug: 'Tables-Galdana',
            description: 'This exquisite wooden table, crafted from reclaimed wood, combines sustainability with elegance. Its unique grain patterns and rich textures tell a story of transformation, adding both beauty and character to any space. ',
            price: 645,
            brand: 'Uniqlo',
            category: 'Tables',
            image: 'Galdana.jpg',
            banner: 'Galdana.jpg',
            quantity: 1,
            rating: 4.8,
            numReviews: 20,
            countInStock: 25,
            colors: ['white', 'black'],
            sizes: ['small', 'medium', 'large']
        }
    ]
}