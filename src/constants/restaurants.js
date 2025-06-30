export const restaurants = [
    {
        slug: "sakura-sushi",
        name: "Sakura Sushi",
        rating: 4.9,
        cuisine: "Japanese",
        location: "10 Ayas St, Yerevan 0082",
        price: "$$$",
        phone: "+234 123 456 7890",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/story_1.jpg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Sakura Sushi offers an exquisite fusion of traditional Japanese flavors with a modern twist.",
        features: [
            "Vegetarian friendly",
            "Vegan options",
            "Gluten free options",
            "Accepts Credit Cards",
            "Breakfast, Lunch, Dinner, Brunch, Late Night, Drinks",
        ],
        categories: ["birthday", "corporate", "wedding"],
        // Every category must have a unique menuVariants!.
        menuVariants: [
            {
                id: "budget",
                title: "Essential Plan",
                image: "/menu/variants/3.jpg",
                description: "Simple and delicious dishes for cost-effective events.",
                fullDescription: "Our Budget Menu features crowd-pleasing dishes made with fresh ingredients, designed for affordability without compromising on taste. Perfect for casual gatherings, office events, and small celebrations.",
                priceRange: "$1000–$3000",
                pricePerPerson: 8000,
                menu: [
                    {
                        category: "Appetizers",
                        image: "/story_3.jpg",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                                badge: "best selling",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        image: "/menu/salad.jpg",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        image: "/menu/hot.jpg",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        image: "/menu/variants/3.jpg",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        image: "/menu/variants/3.jpg",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "unlimited",
                                badge: "unlimited",

                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
            {
                id: "standard",
                title: "Classic Choice",
                image: "/menu/variants/2.jpg",
                description: "A balanced choice of taste and value.",
                fullDescription: "The Standard Menu offers a well-rounded selection of appetizers, main courses, and desserts—ideal for weddings, corporate events, and birthday parties. Enjoy great taste with reasonable pricing.",
                priceRange: "$3000–$6000",
                pricePerPerson: 15000,
                menu: [
                    {
                        category: "Appetizers",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "$500",
                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
            {
                id: "premium",
                title: "Gourmet Experience",
                image: "/menu/variants/1.jpg",
                description: "Exquisite dishes for special occasions.",
                fullDescription: "Elevate your event with our Premium Menu featuring gourmet dishes crafted with high-quality ingredients. Best suited for upscale celebrations, galas, and VIP receptions.",
                priceRange: "$6000–$12000",
                pricePerPerson: 25000,
                menu: [
                    {
                        category: "Appetizers",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "$500",
                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
        ],
        bookedDates: [
            "2025-06-21",
            "2025-06-18",
            "2025-07-01",
        ],
    },
    {
        slug: "bella-italia",
        name: "Bella Italia",
        rating: 4.8,
        cuisine: "Italian",
        location: "6H3F+24V Ереван",
        price: "$$",
        phone: "+234 987 654 3210",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/story_3.jpg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Bella Italia brings the best of Italy to Nigeria with handmade pastas and wood-fired pizzas.",
        features: [
            "Romantic atmosphere",
            "Outdoor seating",
            "Wine and beer",
            "Family-friendly",
        ],
        categories: ["anniversary", "birthday", "wedding"],
        menuVariants: [],
        bookedDates: [
            "2025-08-14",
            "2025-07-18",
            "2025-10-01",
        ],
    },
    {
        slug: "spice-villa",
        name: "Spice Villa",
        rating: 4.6,
        cuisine: "European",
        location: "88 Curry Street, Lagos",
        price: "$$",
        phone: "+234 111 222 3333",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_1.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Authentic Indian food with rich spices and vibrant flavors. Great for both meat lovers and vegetarians.",
        features: ["Halal", "Vegan options", "Free Wi-Fi", "Takeout available"],
        categories: ["birthday", "corporate"],
        menuVariants: [],
        bookedDates: [
            "2025-06-21",
            "2025-06-18",
            "2025-07-01",
        ],
    },
    {
        slug: "le-bistro",
        name: "Le Bistro",
        rating: 4.8,
        cuisine: "French",
        location: "29 Paris Crescent, Abuja",
        price: "$$$",
        phone: "+234 444 555 6666",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_2.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Fine French dining with an elegant setting, perfect for romantic dinners and special occasions.",
        features: ["Accepts Credit Cards", "Fine dining", "Gluten-free options", "Live music", "Parking available"],
        categories: ["birthday", "wedding", "anniversary"],
        menuVariants: [],
        bookedDates: [
            "2025-06-21",
            "2025-06-18",
            "2025-07-01",
        ],
    },
    {
        slug: "ocean-delight",
        name: "Ocean Delight",
        rating: 4.7,
        cuisine: "Seafood",
        location: "Seaside Boulevard, Victoria Island",
        price: "$$$",
        phone: "+234 777 888 9999",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_3.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Fresh seafood with stunning ocean views. Our grilled fish and prawns are crowd favorites.",
        features: ["Waterfront", "Seafood only", "Casual", "Family-friendly"],
        categories: ["birthday", "wedding"],
        menuVariants: [],
    },
    {
        slug: "kids-rock",
        name: "Burger Joint",
        rating: 4.5,
        cuisine: "American",
        location: "Fast Lane, Ikeja",
        price: "$",
        phone: "+234 121 121 1212",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_kids.webp",
        images: ["/restaurants/hall_kids.webp", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Burgers, fries, and milkshakes in a casual setting. Best spot for late-night cravings.",
        features: ["Open late", "Takeout", "Student discounts", "Outdoor seating", "Parking available"],
        categories: ["birthday", "wedding", "kids"],
        menuVariants: [],
    },
    {
        slug: "kith-kin",
        name: "Kith & Kin",
        rating: 5,
        cuisine: "American",
        location: "Baghramyan 19/1 Yerevan, Armenia",
        price: "$",
        phone: "+234 121 121 1212",
        workingHours: {
            Monday: "10:00 AM – 11:00 PM",
            Tuesday: "10:00 AM – 11:00 PM",
            Wednesday: "10:00 AM – 11:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/kith_kin.jpg",
        images: ["/restaurants/hall_kids.webp", "/restaurants/kith_kin_1.jpg", "/restaurants/kith_kin_2.jpg", "/story_3.jpg"],
        about: "Burgers, fries, and milkshakes in a casual setting. Best spot for late-night cravings.",
        features: ["Open late", "Takeout", "Student discounts", "Outdoor seating", "Parking available"],
        categories: ["birthday", "wedding", "kids"],
        menuVariants: [
            {
                id: "budget",
                title: "Essential Plan",
                image: "/menu/variants/3.jpg",
                description: "Simple and delicious dishes for cost-effective events.",
                fullDescription: "Our Budget Menu features crowd-pleasing dishes made with fresh ingredients, designed for affordability without compromising on taste. Perfect for casual gatherings, office events, and small celebrations.",
                priceRange: "$1000–$3000",
                pricePerPerson: 8000,
                menu: [
                    {
                        category: "Appetizers",
                        image: "/story_3.jpg",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                                badge: "best selling",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        image: "/menu/salad.jpg",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        image: "/menu/hot.jpg",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        image: "/menu/variants/3.jpg",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        image: "/menu/variants/3.jpg",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "unlimited",
                                badge: "unlimited",

                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
            {
                id: "standard",
                title: "Classic Choice",
                image: "/menu/variants/2.jpg",
                description: "A balanced choice of taste and value.",
                fullDescription: "The Standard Menu offers a well-rounded selection of appetizers, main courses, and desserts—ideal for weddings, corporate events, and birthday parties. Enjoy great taste with reasonable pricing.",
                priceRange: "$3000–$6000",
                pricePerPerson: 15000,
                menu: [
                    {
                        category: "Appetizers",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "$500",
                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
            {
                id: "premium",
                title: "Gourmet Experience",
                image: "/menu/variants/1.jpg",
                description: "Exquisite dishes for special occasions.",
                fullDescription: "Elevate your event with our Premium Menu featuring gourmet dishes crafted with high-quality ingredients. Best suited for upscale celebrations, galas, and VIP receptions.",
                priceRange: "$6000–$12000",
                pricePerPerson: 25000,
                menu: [
                    {
                        category: "Appetizers",
                        items: [
                            {
                                name: "Garlic Bread",
                                description: "Toasted baguette with garlic butter and herbs",
                                price: "$1500",
                            },
                            {
                                name: "Spring Rolls",
                                description: "Vegetable-filled crispy rolls served with sweet chili sauce",
                                price: "$1800",
                            },
                        ],
                    },
                    {
                        category: "Salads",
                        items: [
                            {
                                name: "Caesar Salad",
                                description: "Romaine lettuce, parmesan, croutons, Caesar dressing",
                                price: "$3000",
                            },
                            {
                                name: "Greek Salad",
                                description: "Cucumber, tomato, olives, feta cheese, olive oil dressing",
                                price: "$3200",
                            },
                        ],
                    },
                    {
                        category: "Hot",
                        items: [
                            {
                                name: "Spicy Chicken Wings",
                                description: "Grilled wings tossed in a hot pepper sauce",
                                price: "$3500",
                            },
                            {
                                name: "Grilled Plantains",
                                description: "Served hot with pepper sauce and peanuts",
                                price: "$2000",
                            },
                        ],
                    },
                    {
                        category: "Second Courses",
                        items: [
                            {
                                name: "Grilled Tilapia",
                                description: "Whole grilled fish served with jollof rice and sauce",
                                price: "$6000",
                            },
                            {
                                name: "Beef Stir-Fry",
                                description: "Sautéed beef with bell peppers and onions, served with rice",
                                price: "$5500",
                            },
                        ],
                    },
                    {
                        category: "Drinks",
                        items: [
                            {
                                name: "Chapman",
                                description: "Nigerian cocktail with Fanta, Angostura bitters, and grenadine",
                                price: "$1200",
                            },
                            {
                                name: "Bottled Water",
                                description: "500ml chilled bottled water",
                                price: "$500",
                            },
                            {
                                name: "Zobo",
                                description: "Hibiscus drink with ginger and pineapple essence",
                                price: "$1000",
                            },
                        ],
                    },
                ],
            },
        ],
        bookedDates: [
            "2025-06-21",
            "2025-06-18",
            "2025-07-01",
        ],
    },
    {
        slug: "taco-fiesta",
        name: "Taco Fiesta",
        rating: 4.4,
        cuisine: "Mexican",
        location: "10 Cinco Street, Lekki",
        price: "$$",
        phone: "+234 345 678 9012",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/story_3.jpg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Enjoy the spirit of Mexico with authentic tacos, burritos, and margaritas.",
        features: ["Spicy food", "Happy hour", "Live music", "Kid-friendly"],
        categories: ["birthday", "engagement", "kids"],
        menuVariants: [],
    },
    {
        slug: "green-bowl",
        name: "Green Bowl",
        rating: 4.6,
        cuisine: "Healthy",
        location: "Nature Plaza, Yaba",
        price: "$$",
        phone: "+234 555 123 4567",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_1.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Healthy meals and smoothie bowls made from the freshest organic ingredients.",
        features: ["Vegetarian", "Vegan", "Gluten-free", "Juice bar", "Parking available"],
        categories: ["birthday", "wedding", "corporate", "engagement"],
        menuVariants: [],
    },
    {
        slug: "grill-zone",
        name: "Grill Zone",
        rating: 4.3,
        cuisine: "Barbecue",
        location: "BBQ Avenue, Surulere",
        price: "$$",
        phone: "+234 789 789 7890",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_2.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg", "/story_2.jpg"],
        about: "Barbecue meats grilled to perfection, with bold Nigerian and American-style sauces.",
        features: ["Outdoor grill", "Beer available", "Live DJ", "Cash only", "Parking available"],
        categories: ["birthday", "wedding", "casual gatherings"],
        menuVariants: [],
    },
    {
        slug: "morning-brew",
        name: "Morning Brew",
        rating: 4.9,
        cuisine: "Café",
        location: "Cafe Corner, Lekki Phase 1",
        price: "$",
        phone: "+234 234 234 2345",
        workingHours: {
            Monday: "10:00 AM – 10:00 PM",
            Tuesday: "10:00 AM – 10:00 PM",
            Wednesday: "10:00 AM – 10:00 PM",
            Thursday: "10:00 AM – 11:00 PM",
            Friday: "10:00 AM – 11:30 PM",
            Saturday: "11:00 AM – 11:30 PM",
            Sunday: "Closed",
        },
        mainImage: "/restaurants/hall_3.jpeg",
        images: ["/story_1.jpg", "/story_2.jpg", "/story_1.jpg", "/story_3.jpg"],
        about: "Cozy coffee shop with excellent pastries, specialty brews, and Wi-Fi.",
        features: ["Free Wi-Fi", "Co-working", "Pastries", "Espresso bar", "Parking available"],
        categories: ["birthday", "wedding", "anniversary", "engagement", "holiday parties"],
        menuVariants: [],
    },
];
