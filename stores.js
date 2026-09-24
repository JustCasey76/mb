// Store data — extracted from each store's official Market Basket Shoppers' Guide PDF
// (linked per store as `pdf`). Those PDFs are the source of truth: every aisle the app assigns
// traces back to a line here. Format: "Item | Aisle as printed"; sub-entries use "Head: Qualifier".
// Store list from shopmarketbasket.com/store-locations — 89 grocery stores with a guide.

window.MB_STORES = {
  s1: { id: 's1', name: "Lowell", state: 'MA', number: '1', address: "331 Fletcher Street, Lowell, MA 01854", lat: 42.644503, lng: -71.319353,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-01-2024-01-29.pdf",
    guide: `
Air Freshener | 9
Aluminum Foil | 10
Ammonia | 9
Applesauce | 12
Automotive | 10
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 12
Bakeware | 10
Baking Needs | 5
Barbecue Sauce | 1
Bath Tissue | 8
Batteries | Registers
Beans: Baked | 2
Beans: Dry | 2 & 4
Bisquick | 12
Bleach | 9
Bouillon Cubes | 5
Bread | 12
Bread Crumbs | 1
Brooms | 9
Bug Spray | 10
Butter | 1
Butter Buds | 5
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 9
Candy | 11
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 10
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 2
Cheese: Prepackaged | 1
Cheese: Specialty | 1
Chili Sauce | 1
Chinese Food: Canned | 4
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 1
Coffee | 3
Cold Remedies | 7
Cookies | 12
Cottage Cheese | 1
Crackers | 12
Cranberry Sauce | 12
Croutons | 2
Deodorant | 7
Detergent: Dish-Dishwasher | 9
Detergent: Laundry | 9
Diapers | 7
Disinfectant Spray | 9
Dog Food-Dog Needs | 10
Drain Cleaner | 9
Dried Fruit: Currants-Dates | 13
Dried Fruit: Prunes-Raisins | 13
Dye: Fabric | 9
Eggs | 1
Electrical Supplies | 10
Escargot | 1
Eye Care | 7
Facial Tissue | 8
Fabric Softener | 9
Feminine Needs | 7
Figs: Dry | Produce Dept
Fish: Canned | 1
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 10
Fruit: Canned | 12
Fruit: Fresh | Produce Dept
Frozen Foods | 13
Gloves: Work | 9
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 5
Honey | 12
Household Cleaners | 9
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | Back End of 12
Iced Tea Mix | 3
Jam & Jelly | 12
Jello | 5
Juice | 6
Ketchup | 1
Kitchen Gadgets | 10
Kool Aid | 13
Laundry Detergent | 9
Laxative | 7
Lightbulbs | 10
Mac & Cheese: Packaged | 2
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 1
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 5
Molasses | 12
Mops | 9
Mouthwash | 7
Mushrooms: Canned | 5
Mustard | 2
Napkins | 8
Noodles | 2
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | Ice Cream Corner
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 10
Olives | 2
Pancake Mix | 12
Paper: Cups-Plates | 8
Paper: Towels | 8
Pasta | 2
Peanut Butter | 12
Pie Filling | 5
Pizza: Fresh | Market's Sub Shop
Plasticware | 8
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 11
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 5
Raisins | 13
Razor Blades | 7
Rice: Packaged | 4 & 5
Rice: Cakes | 3
Rubbermaid | 10
Rubbing Alcohol | 7
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 7
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tartar | 1
Sauce: Soy | 1
Sauce: Tabasco | 1
Shake & Bake | 1
Shaving Needs | 7
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 7
Soda | 11
Soup | 5
Spaghetti Sauce | 2
Spam | 1
Spices | 4 & 5
Sponges | 9
Stationery | 10
Steel Wool | 9
Straws | 8
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 3
Tissue: Bath | 10
Tissue: Facial | 8
Tomato: Canned | 2
Tomato: Fresh | Produce Dept
Tomato: Paste | 2
Tomato: Sauce | 2
Toothbrushes-Toothpaste | 7
Toothpicks | 8
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 7
Water: Distilled-Spring | 6
Wax Paper | 10
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s2: { id: 's2', name: "Lowell", state: 'MA', number: '2', address: "1201 Bridge Street, Lowell, MA 01850", lat: 42.664767, lng: -71.302033,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/02-LOWELL-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 11
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 11
Baby Powder | 10
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 11
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 12
Batteries | 13
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 9
Bleach | 14
Bouillon Cubes | 5
Bread | 19
Bread Crumbs | 17
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 6
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 13
Escargot | 2
Eye Care | 10
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 11
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 14
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 9
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Corner
Ice Cubes | 18
Iced Tea Mix | 6
Jam & Jelly | 9
Jello | 6
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 8
Laundry Detergent | 15
Laxative | 10
Lightbulbs | 13
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 11
Molasses | 9
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 7
Mustard | 2
Napkins | 12
Noodles | 5
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 9
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 9
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 3
Popping Corn | 11
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 11
Razor Blades | 10 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 5
Sauce: /Tabasco | 2
Shake & Bake | 18
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 5
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 2
Vacuum Cleaner Bags | 14
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 8
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s3: { id: 's3', name: "Wilmington", state: 'MA', number: '3', address: "260 Main Street, Wilmington, MA 01887", lat: 42.555342, lng: -71.178158,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-03-2024-11-25-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 9
Ammonia | 13
Applesauce | 7
Automotive | 12
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 9
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 12
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 5
Bleach | 13
Bouillon Cubes | 9
Bread | 18
Bread Crumbs | 16
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 9
Cherries: Canned | 5
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 10
Cookies | 7
Cottage Cheese | 1
Crackers | 7
Cranberry Sauce | 7
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 10
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 9
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 16 & 17
Gloves: Work | 13
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 5
Household Cleaners | 13
Ice Cream | 18
Ice Cream Cones | 18
Ice Cubes | Produce Corner
Iced Tea Mix | 5
Jam & Jelly | 7
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 9
Kool Aid | 14
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 12
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 5
Molasses | 5
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 7
Pie Filling | 5
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 7
Razor Blades | 10 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 9
Shake & Bake | 17
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 14
Soup | 9
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 13
Stationery | 9
Steel Wool | 13
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath-Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 8
Wax Paper | 9
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s4: { id: 's4', name: "Chelmsford", state: 'MA', number: '4', address: "288 Chelmsford Street, Chelmsford, MA 01824", lat: 42.613593, lng: -71.333005,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/4-CHELMSFORD-SHOPPERS-GUIDE-MAY-2023-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 13
Ammonia | 14
Applesauce | 17
Automotive | 12
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 20
Bakeware | 13
Baking Needs | 8
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 12
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 8
Bleach | 14
Bouillon Cubes | 6
Bread | 20
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 7
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 16
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 5
Charcoal | 12
Cheese: Grated Parmesan | 6
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Shrimp Case
Chinese Food: Canned | 4
Cherries: Canned | 8
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 2
Coffee | 8
Cold Remedies | 9
Cookies | 12
Cottage Cheese | 1
Crackers | 12
Cranberry Sauce | 17
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 9
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 17
Dried Fruit: Prunes-Raisins | 17
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 11
Escargot | 2
Eye Care | 9
Facial Tissue | 9
Fabric Softener | 14
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 13
Fruit: Canned | 17
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 14
Granola Bars | 5
Gravy | 7
Grits | 5
Ham Glaze | 2
Hamburger Helper | 4
Honey | 8
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | 18
Iced Tea Mix | 8
Jam & Jelly | 20
Jello | 8
Juice | 7
Ketchup | 2
Kitchen Gadgets | 2 & 13
Kool Aid | 15
Kosher Foods | 6
Laundry Detergent | 14
Laxative | 9
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 8
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 7
Mustard | 2
Napkins | 11
Noodles | 6
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 6
Peanut Butter | 20
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 5
Popping Corn | 16
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 17
Razor Blades | 10
Rice: Packaged | 4
Rice: Cakes | 5
Rubbermaid | 13
Rubbing Alcohol | 9
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco | 2
Sauce: Soy | 4
Shake & Bake | 18
Shaving Needs | 10
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 16
Soup | 6
Spaghetti Sauce | 6
Spam | 2
Spices | 8
Sponges | 14
Stationery | 11
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 11
Tissue: Facial | 9
Tomato: Canned | 6
Tomato: Fresh | Produce Dept
Tomato: Paste | 6
Tomato: Sauce | 6
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 15
Wax Paper | 13
Wheat Germ | 5
Windshield Washer Fluid | 12` },
  s5: { id: 's5', name: "Lawrence", state: 'MA', number: '5', address: "700 Essex Street, Lawrence, MA 01840", lat: 42.701958, lng: -71.172117,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-05-UPDATED-11-25-24-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 12
Ammonia | 14
Applesauce | 11
Automotive | 12
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Packaged | 18
Bakeware | 12
Baking Needs | 8
Barbecue Sauce | 4
Bath Tissue | 13
Batteries | 13
Beans: Baked | 4
Beans: Dry | Goya Corner
Bisquick | 11
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 10
Brooms | 14
Bug Spray | 12
Butter | 1
Butter Buds | Goya Corner
Cake Mix | 8
Candles: Birthday | 8
Candles: Household | 9
Candy | 11
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 6
Charcoal | 12
Cheese: Grated Parmesan | 7
Cheese: Prepackaged | 2
Cheese: Specialty | Cheese Case
Chili Sauce | 4
Chinese Food: Canned | 4
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 9
Cookies | 17
Cottage Cheese | 2
Crackers | 17
Cranberry Sauce | 11
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 10
Disinfectant Spray | 14
Dog Food-Dog Needs | 12
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 10
Eggs | 2
Electrical Supplies | 11
Escargot | 4
Eye Care | 10
Facial Tissue | 13
Fabric Softener | 14
Feminine Needs | 9
Fish: Canned | 4
Fish: Fresh | …Deli/Fish Dept
Flour | 8
Food Coloring | Goya Corner
Freezer Wrap | 12
Fruit: Canned | 11
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Goya Foods | Far Corner
Granola Bars | 6
Gravy | 4
Grits | 6
Ham Glaze | 3
Hamburger Helper | 7
Honey | 11
Household Cleaners | 14
Ice Cream | 20
Ice Cream Cones | 20
Ice Cubes | End Aisle 11
Iced Tea Mix | 15
Jam & Jelly | 18
Jello | 8
Juice | 5
Ketchup | 4
Kitchen Gadgets | 11
Kool Aid | 15
Laundry Detergent | 14
Laxative | 9
Lightbulbs | 13
Mac & Cheese: Packaged | 7
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 4
Meat: Fresh | Meat Dept
Mexican Food | 4
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 11
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 4
Mustard | 3
Napkins | 13
Noodles | 7
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 17
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 11
Paper: Cups-Plates | 12
Paper: Towels | 13
Pasta | 7
Peanut Butter | 18
Pie Filling | 8
Plasticware | 11
Pop Tarts | 6
Popping Corn | 17
Potato Chips | Goya Corner
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 4
Pudding Mix | 8
Raisins | 11
Razor Blades | 9
Rice: Packaged | 7
Rice: Cakes | 6
Rubbermaid | 4
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | Goya Corner
Sanitary Napkins | 9
Sardines: Canned | 4
Sauce: BBQ-Chili-Steak | 4
Sauce: Tabasco-Tartar | 4
Sauce: Soy | 4
Shake & Bake | Shrimp Case
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 9
Soda | 16
Soup | 2
Spaghetti Sauce | 7
Spam | 4
Spices | Goya Corner
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 12
Stuffing Mix | 10
Sugar | 8
Taco Shells | 4
Tea Bags | 8
Tissue: Bath | 13
Tomato: Canned | 7
Tomato: Fresh | Produce
Tomato: Paste | 7
Tomato: Sauce | 7
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 4
Vegetables: Canned | 4
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Spring | 15
Wax Paper | 12
Wheat Germ | 6
Windshield Fluid | 12` },
  s6: { id: 's6', name: "Salem", state: 'NH', number: '6', address: "265 South Broadway, Salem, NH 03079", lat: 42.762229, lng: -71.21287,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/06-SALEM-NH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 17
Aluminum Foil | 15
Ammonia | 17
Applesauce | 9
Automotive | 16
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 15
Bags: Garbage-Trash | 15
Bakery: Fresh | Front Corner
Bakery: Packaged | 23
Bakeware | 5
Baking Needs | 8
Barbecue Sauce | 2
Bath Tissue | 14
Batteries | 12
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 9
Bleach | 17
Bouillon Cubes | 11
Bread | 23
Bread Crumbs | Back Main Aisle
Brooms | 17
Bug Spray | 16
Butter | 1
Butter Buds | 8
Cake Mix | 8
Candles: Birthday | 8 & Bakery Case
Candles: Household | 17
Candy | 9
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 16
Cereal | 3
Charcoal | 16
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 5
Cherries: Canned | 9
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 11
Clams: Canned-Minced-Juice | 2
Coffee | 8
Cold Remedies | 12
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 2
Deodorant | 13
Detergent: Dish-Dishwasher | 17
Detergent: Laundry | 17
Diapers | 12
Disinfectant Spray | 17
Dog Food-Dog Needs | 16
Drain Cleaner | 17
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 17
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 13
Facial Tissue | 14
Fabric Softener | 17
Feminine Needs | 13
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 5
Freezer Wrap | 15
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 21 & 22
Gloves: Work | 17
Granola Bars | 3
Gravy | 7
Greeting Cards | 12
Ham Glaze | 2
Hamburger Helper | 4
Honey | 9
Household Cleaners | 17
Ice Cream | 15
Ice Cream Cones | 11
Ice Cubes | 22
Iced Tea Mix | 11
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 2
Kitchen Gadgets | 5
Kool Aid | 11
Kosher Foods | 5
Laundry Detergent | 17
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 17
Mouthwash | 13
Mushrooms: Canned | 7
Mustard | 2
Napkins | 15
Noodles | 4
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 11
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 16
Olives | 2
Pancake Mix | 9
Paper: Cups-Plates | 15
Paper: Towels | 15
Pasta | 4
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 15
Pop Tarts | 3
Popping Corn | 11
Potato Chips | 10
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 11
Razor Blades | 13 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 16
Rubbing Alcohol | 12
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 13
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 5
Shake & Bake | Back Main Aisle
Shaving Needs | 13
Shoe Care | 13
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 14
Soda | 19
Soup | 11
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 17
Stationery | 12
Steel Wool | 17
Straws | 15
Stuffing Mix | 22
Sugar | 8
Taco: Sauce-Shells | 5
Tea Bags | 8
Tissue: Bath | 14
Tissue: Facial | 14
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 13
Toothpicks | 15
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 14
Water: Distilled-Spring | 18
Wax Paper | 15
Wheat Germ | 3
Windshield Washer Fluid | 16` },
  s7: { id: 's7', name: "Billerica", state: 'MA', number: '7', address: "700 Boston Road, Billerica, MA 01821", lat: 42.540245, lng: -71.244142,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/07-BILLERICA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 8
Ammonia | 11
Applesauce | 8
Automotive | 12
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | front main
Bakery: Packaged | front main
Bakeware | 8
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 5
Bleach | 11
Bouillon Cubes | 8
Bread | 14
Bread Crumbs | 1
Brooms | 12
Bug Spray | 1
Butter | 6
Butter Buds | 5
Cake Mix | 5
Candles: Birthday | 5
Candles: Household | 11
Candy | 8
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | dairy
Cheese: Specialty | back main
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 14
Cottage Cheese | 1
Crackers | 14
Cranberry Sauce | 8
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 9
Disinfectant Spray | 11
Dog Food-Dog Needs | 12
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 16
Dye: Fabric | 11
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 11
Feminine Needs | 9
Figs: Dry | produce
Fish: Canned | 2
Fish: Fresh | back main
Flour | 5
Food Coloring | 5
Freezer Wrap | 8
Fruit: Canned | 7
Fruit: Fresh | produce
Frozen Foods | 15
Gloves: Work | 12
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 11
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | Produce Corner
Iced Tea Mix | 5
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Utensils | 8
Kool Aid | 15
Laundry Detergent | 11
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept back main
Mexican Food | 2
Milk: Fresh | 1
Milk: Evaporated-Powdered | 1 & 5
Molasses | 3
Mops | 11
Mouthwash | 9
Mushrooms: Canned | 5
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | produce
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 3
Peanut Butter | 14
Pie Filling | 5
Pizza: Fresh | Market's Kitchen front main
Plasticware | 8
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 8
Potatoes: Fresh | produce
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 16
Razor Blades | 9
Rice: Packaged | 5
Rice: Cakes | bakery
Rubbermaid | 8
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 4
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar/Tabasco | 2
Sauce: Soy | 2
Shake & Bake | back main
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 11
Stationery | 12
Steel Wool | 11
Straws | 10
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | produce
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | produce
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 8
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s8: { id: 's8', name: "Tewksbury", state: 'MA', number: '8', address: "10 Main Street, Tewksbury, MA 01876", lat: 42.631071, lng: -71.273586,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/8-TEWKSBURY-SHOPPERS-GUIDE-AUG-2023-2-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 13
Ammonia | 11
Applesauce | 4
Automotive | 13
Baby Food | 4
Baby Powder | 4
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 14
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 14
Batteries | 13
Beans: Baked | 2
Beans: Dry | 8
Bisquick | 3
Bleach | 11
Bouillon Cubes | 4
Bread | 16
Bread Crumbs | 1
Brooms | 11
Bug Spray | 13
Butter | 1
Cake Mix | 6
Candles: Birthday | 6 & Bakery
Candles: Household | 11
Candy | 4
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | Back Main Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 5
Cherries: Canned | 6
Cherries: Jar | 4
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 12
Cookies | 15
Cottage Cheese | Back Main Aisle
Crackers | 15
Cranberry Sauce | 4
Croutons | 2
Deodorant | 12
Detergent: Dish-Laundry | 11
Diapers | 4
Disinfectant Spray | 11
Dog Food-Dog Needs | 13
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 16
Dried Fruit: Prunes-Raisins | 16
Drinks: Energy 7 Sport | 8
Dye: Fabric | 11
Eggs | 1
Electrical Supplies | 13
Escargot | 2
Eye Care | 12
Facial Tissue | 14
Fabric Softener | 11
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 13
Fruit: Canned | 4
Fruit: Fresh | Produce Dept
Frozen Foods | 9 & 10
Gloves: Work | 11
Granola Bars | 3
Gravy | 8
Grits | 3
Ham Glaze | 2
Hamburger Helper | 5
Honey | 3
Household Cleaners | 11
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | 10
Iced Tea Mix | Freezer Wall
Jam & Jelly | 16
Jello | 6
Juice | 8
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | Across From Ice Cream
Kosher Foods | 5
Laundry Detergent | 11
Laxative | 12
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Check Out Area
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Back Main
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 11
Mouthwash | 12
Mushrooms: Canned | 8
Mustard | 2
Napkins | 14
Noodles | 5
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 14
Paper: Towels | 14
Pasta | 5
Peanut Butter | 16
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 14
Pop Tarts | 3
Popping Corn | 10
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 6
Raisins | 16
Razor Blades | 12 & Checkout
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 14
Rubbing Alcohol | 12
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 12
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 5
Shake & Bake | 1
Shaving Needs | 12
Shoe Care | 12
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 12
Soda | 7
Soup | 4
Spaghetti Sauce | 5
Spam | 2
Spices | 6
Sponges | 11
Stationery | 14
Steel Wool | 11
Straws | 14
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath-Facial | 14
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 12
Toothpicks | 14
Tuna: Canned | 2
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 12
Water: Distilled-Spring-Flavored | Back Main
Wax Paper | 13
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s9: { id: 's9', name: "Haverhill", state: 'MA', number: '9', address: "400 Lowell Ave., Haverhill, MA 01832", lat: 42.773938, lng: -71.114427,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-09-2025-1-18.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 10
Ammonia | 15
Applesauce | 8
Automotive | 14
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 10
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 11
Beans: Baked | 1
Beans: Dry | 1 & 2
Bisquick | 8
Bleach | 15
Bouillon Cubes | 8
Bread | 18
Bread Crumbs | 19
Brooms | 15
Bug Spray | 14
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | 7 & Bakery
Candles: Household | 15
Candy | 8
Canning Supplies | 10
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 12
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 11
Escargot | 3
Eye Care | 12
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 10
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 15
Ice Cream | Freezer Wall
Ice Cream Cones | 21
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 10
Kool Aid | 16
Kosher Foods | 3
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | 21
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 10
Paper: Towels | 13
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 4
Popping Corn | 10
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 10
Razor Blades | 11
Rice: Packaged | 2 & 5
Rice: Cakes | 4
Rubbermaid | 10
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 12
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tartar | 3
Sauce: Tabasco | 3
Shake & Bake | Back Main Aisle
Shaving Needs | 11
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 17
Soup | 8
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 11
Steel Wool | 15
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 10
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s10: { id: 's10', name: "Methuen", state: 'MA', number: '10', address: "186 Haverhill Street, Methuen, MA 01844", lat: 42.704881, lng: -71.201475,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/10-METHUEN-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 14
Ammonia | 13
Applesauce | 6
Automotive | 14
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 14
Bags: Garbage-Trash | 14
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 15
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 15
Batteries | 15
Beans: Baked | 2
Beans: Dry | 4
Bisquick | 6
Bleach | 13
Bouillon Cubes | 3
Bread | 16
Bread Crumbs | 1
Brooms | 13
Bug Spray | 14
Butter | 1
Butter Buds | 4
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 8
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 6
Charcoal | 14
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Above Forz Shrimp
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 6
Chowder: Clam-Corn-Potato | 3
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 12
Cookies | 11
Cottage Cheese | Dairy Aisle
Crackers | 11
Cranberry Sauce | 6
Croutons | 2
Deodorant | 12
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 12
Disinfectant Spray | 13
Dog Food-Dog Needs | 14
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 15
Escargot | 2
Eye Care | 12
Facial Tissue | 15
Fabric Softener | 13
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Seafood
Flour | 7
Food Coloring | 7
Freezer Wrap | 14
Fruit: Canned | 6
Fruit: Fresh | Produce Dept
Frozen Foods | 10 & 11
Gloves: Work | 13
Granola Bars | 6
Gravy | 4
Grits | 6
Ham Glaze | 2
Hamburger Helper | 4
Honey | 6
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Wall
Ice Cubes | Front at Register #13
Iced Tea Mix | 7
Jam & Jelly | 16
Jello | 7
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 10
Kosher Foods | 1
Laundry Detergent | 13
Laxative | 12
Lightbulbs | 15
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 7
Molasses | 6
Mops | 13
Mouthwash | 12
Mushrooms: Canned | 5
Mustard | 2
Napkins | 15
Noodles | 3
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 14
Olives | 2
Pancake Mix | 6
Paper: Cups-Plates | 15
Paper: Towels | 15
Pasta | 3
Peanut Butter | 16
Pie Filling | 7
Pizza: Fresh | Deli
Plasticware | 15
Pop Tarts | 6
Popping Corn | 10
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 7
Raisins | 8
Razor Blades | Courtesy Booth
Rice: Packaged | 4
Rice: Cakes | 6
Rubbermaid | 14
Rubbing Alcohol | 12
Salad Dressing | 2
Salt | 7
Sanitary Napkins | 12
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 12
Shoe Care | 12
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 12
Soda | 9
Soup | 3
Spaghetti Sauce | 3
Spam | 2
Spices | 7
Sponges | 13
Steel Wool | 11
Straws | 11
Stuffing Mix | 1
Sugar | 8
Taco: Sauce-Shells | 2
Tea Bags | 7
Tissue: Bath | 15
Tissue: Facial | 15
Tomato: Canned | 3
Tomato: Fresh | Produce
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 12
Toothpicks | 15
Tuna: Canned | 2
Vacuum Cleaner Bags | 13
Vegetables: Canned | 5
Vegetables: Fresh | Produce
Vinegar | 2
Vitamins | 12
Water: Distilled-Spring | 9
Wax Paper | 14
Wheat Germ | 6
Windshield Washer Fluid | 14` },
  s12: { id: 's12', name: "North Andover", state: 'MA', number: '12', address: "350 Winthrop Avenue, North Andover, MA 01845", lat: 42.682832, lng: -71.13723,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-12-2026-04-27.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 12
Ammonia | 13
Applesauce | 9
Automotive | 11
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 13
Bouillon Cubes | 8
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 13
Bug Spray | 11
Butter | 1
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | 20
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 11
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 5
Cherries: Canned | 7
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 17
Cottage Cheese | 1
Crackers | 17
Cranberry Sauce | 9
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 10
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 11
Escargot | 3
Eye Care | 9
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 13
Ice Cream | Bakery Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 18
Iced Tea Mix | 14
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 2
Kitchen Gadgets | 2 & 12
Kool Aid | 14
Kosher Foods | 3
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Café
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4 & 6
Mops | 13
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 2
Napkins | 11
Noodles | 8
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 11
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 5
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Markets Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 9
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 9
Razor Blades | Cust.Service & 10
Rice: Packaged | 5 & 8
Rice: Cakes | 4
Rubbermaid | 12
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 3
Sauce: Soy | 5
Sauce: /Tobasco | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 8
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 11
Steel Wool | 13
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath-Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 11
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 14
Wax Paper | 12
Wheat Germ | 4
Windshield Washer Fluid | 11` },
  s13: { id: 's13', name: "Nashua", state: 'NH', number: '13', address: "261 Daniel Webster Highway, Nashua, NH 03060", lat: 42.706508, lng: -71.443478,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-13-2024-12-3-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 8
Ammonia | 12
Applesauce | 7
Automotive | 11
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 15
Bakeware | 8
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 8
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 3
Bleach | 12
Bouillon Cubes | 8
Bread | 15
Bread Crumbs | 1
Brooms | 12
Bug Spray | 11
Butter | 1
Butter Buds | 5
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 14
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 7
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 9
Cookies | 15
Cottage Cheese | 1
Crackers | 15
Cranberry Sauce | 7
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 8
Escargot | 2
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 8
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | 18
Ice Cubes | 17
Iced Tea Mix | 13
Jam & Jelly | 15
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 13
Kosher Foods | 8
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 8
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 8
Paper: Towels | 11
Pasta | 4
Peanut Butter | 15
Pie Filling | 6
Pizza: Fresh | Deli
Plasticware | 11
Pop Tarts | 3
Popping Corn | 7
Potato Chips | 7
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 3
Razor Blades | 10 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 8
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 8
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 14
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 8
Steel Wool | 12
Straws | 11
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath-Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 13
Wax Paper | 8
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s14: { id: 's14', name: "Fitchburg", state: 'MA', number: '14', address: "130 Water Street, Fitchburg, MA 01420", lat: 42.580081, lng: -71.793183,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-14-2024-12-02-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 8
Ammonia | 12
Applesauce | 8
Automotive | 11
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 6
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 11
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 3
Bleach | 12
Bouillon Cubes | 4
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 12
Bug Spray | 11
Butter | 1
Butter Buds | 7
Cake Mix | 5
Candles: Birthday | 5
Candles: Household | 12
Candy | 8
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 6
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 14
Cottage Cheese | 1
Crackers | 14
Cranberry Sauce | 8
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 11
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 12
Granola Bars | 3
Gravy | 7
Grits | 5
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 12
Ice Cream | Produce Wall
Ice Cream Cones | Produce Wal
Ice Cubes | Produce
Iced Tea Mix | 5
Jam & Jelly | 17
Jello | 5
Juice | 7
Ketchup | 2
Kitchen Gadgets | 6
Kool Aid | 13
Kosher Foods | 6
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 5
Molasses | 3
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 17
Pie Filling | 5
Pizza: Fresh | Market's Kitchen
Plasticware | 10
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 14
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 5
Raisins | 8
Razor Blades | 9
Rice: Packaged | 6
Rice: Cakes | 3
Rubbermaid | 10
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco | 2
Sauce: Soy | 6
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 12
Stationery | 10
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 8
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s15: { id: 's15', name: "Haverhill", state: 'MA', number: '15', address: "2 Water Street, Haverhill, MA 01830", lat: 42.775993, lng: -71.075148,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/15-HAVERHILL-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 6
Automotive | 10
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Aisle
Bakery: Packaged | 12
Bakeware | 11
Baking Needs | 4
Barbecue Sauce | 1
Bath Tissue | 9
Batteries | 7
Beans: Baked | 1
Beans: Dry | 6
Bisquick | 6
Bleach | 10
Bouillon Cubes | 7
Bread | 12
Bread Crumbs | Above Freezer
Brooms | 10
Bug Spray | 10
Butter | Dairy Aisle
Butter Buds | 5
Cake Mix | 4
Candles: Birthday | Produce Wall
Candles: Household | 10
Candy | 6
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 2
Charcoal | 10
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 1
Chinese Food: Canned | 1
Cherries: Canned | 4
Cherries: Jar | 1
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 1
Coffee | 4
Cold Remedies | 8
Cookies | 12
Cottage Cheese | Dairy Aisle
Crackers | 12
Cranberry Sauce | 6
Croutons | 1
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 8
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 14
Dried Fruit: Prunes-Raisins | 14
Dye: Fabric | 10
Eggs | Dairy Aisle
Electrical Supplies | 7
Escargot | 1
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Fish: Canned | 1
Fish: Fresh | Deli/Fish
Flour | 4
Food Coloring | 4
Freezer Wrap | 11
Fruit: Canned | 6
Fruit: Fresh | Produce
Frozen Foods | 13
Gloves: Work | 10
Goya Foods | 6
Granola Bars | 2
Gravy | 5
Grits | 2
Ham Glaze | 1
Hamburger Helper | 7
Honey | 6
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Wall
Ice Cubes | Front Main Aisle
Iced Tea Mix | 4
Jam & Jelly | 6
Jello | 4
Juice | 5
Ketchup | 1
Kitchen Gadgets | Above Cheese
Kool Aid | 13
Kosher Foods | 1
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 7
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 1
Meat: Canned | 1
Meat: Fresh | Meat Dept
Mexican Food | Front Main Aisle
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 4
Molasses | 6
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 5
Mustard | 1
Napkins | 9
Noodles | 3
Nuts: Baking | 4
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 12
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 10
Olives | 1
Pancake Mix | 6
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 3
Peanut Butter | 6
Pie Filling | 4
Plasticware | 11
Pop Tarts | 2
Popping Corn | 14
Potato Chips | Soda Corner
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 4
Raisins | 14
Razor Blades | Checkout
Rice: Packaged | 1
Rice: Cakes | 2
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 1
Salt | 4
Sanitary Napkins | 8
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tabasco-Tartar | 1
Sauce: Soy | 1
Shake & Bake | Above Freezer
Shaving Needs | 8
Shoe Care | 8
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 8
Soda | Front Corner
Soup | 7
Spaghetti Sauce | 3
Spam | 1
Spices | 4
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | Dairy Aisle
Sugar | 4
Taco Shells | Front Main Aisle
Tea Bags | 4
Tissue: Bath-Facial | 9
Tomato: Canned | 3
Tomato: Fresh | Produce Dept
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 1
Vacuum Cleaner Bags | 10
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 8
Water: Spring | Soda Corner
Wax Paper | 11
Wheat Germ | 2
Windshield Fluid | 10` },
  s16: { id: 's16', name: "Leominster", state: 'MA', number: '16', address: "71 Sack Boulevard, Leominster, MA 01453", lat: 42.529848, lng: -71.745203,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-16-2025-08-28.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 10
Ammonia | 14
Applesauce | 10
Automotive | 13
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 10
Baking Needs | 8
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 12
Beans: Baked | 2
Beans: Dry | 7 & 9
Bisquick | 10
Bleach | 14
Bouillon Cubes | 9
Bread | 18
Bread Crumbs | Back Main Aisle
Brooms | 14
Bug Spray | 13
Butter | 1
Cake Mix | 8
Candles: Birthday | 8 & Bakery Case
Candles: Household | 14
Candy | 10
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 6
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 4
Cherries: Canned | 8
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 4
Coffee | 8
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 10
Croutons | 3
Deodorant | 12
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 12
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 12
Escargot | 4
Eye Care | 12
Facial Tissue | 11
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 4
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 10
Fruit: Canned | 10
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 6
Gravy | 7
Grits | 6
Ham Glaze | 2
Hamburger Helper | 5
Honey | 10
Household Cleaners | 14
Ice Cream | 21
Ice Cream Cones | 21
Ice Cubes | 20
Iced Tea Mix | 8 & 15
Jam & Jelly | 10
Jello | 8
Juice | 7
Ketchup | 2
Kitchen Gadgets | 2
Kool Aid | 15
Kosher Foods | 4
Laundry Detergent | 14
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 4
Meat: Fresh | Meat Dept
Mexican Food | 4
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 10
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 2
Napkins | 13
Noodles | 5
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 2
Pancake Mix | 10
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 10
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 6
Popping Corn | 10
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 10
Razor Blades | 11
Rice: Packaged | 9
Rice: Cakes | 6
Rubbermaid | 10
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 11
Sardines: Canned | 4
Sauce: BBQ-Steak | 2
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 4
Shake & Bake | Back Main Aisle
Shaving Needs | 12
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 16
Soup | 9
Spaghetti Sauce | 5
Spam | 4
Spices | 8
Sponges | 14
Stationery | 12
Steel Wool | 14
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 4
Tea Bags | 8
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 4
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 15
Wax Paper | 10
Wheat Germ | 6
Windshield Washer Fluid | 13` },
  s18: { id: 's18', name: "Methuen", state: 'MA', number: '18', address: "70 Pleasant Valley Street, Methuen, MA 01844", lat: 42.742936, lng: -71.165505,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/18-METHUEN-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 9
Aluminum Foil | 7
Ammonia | 9
Applesauce | 5
Automotive | 8
Baby Food | 2
Baby Powder | 2
Bags: Lunch-Sandwich | 7
Bags: Garbage-Trash | 7
Bakery: Fresh | n/a
Bakery: Packaged | entrance
Bakeware | 7
Baking Needs | 3
Barbecue Sauce | 1
Bath Tissue | 8
Batteries | 8
Beans: Baked | 1
Beans: Dry | 4
Bisquick | 12
Bleach | 9
Bouillon Cubes | 6
Bread | 12
Bread Crumbs | dairy aisle
Brooms | 9
Bug Spray | 8
Butter | dairy aisle
Butter Buds | 3
Cake Mix | 3
Candles: Birthday | freezer corner
Candles: Household | 9
Candy | 6
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 7
Cereal | 2
Charcoal | 8
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | dairy
Cheese: Specialty | dairy case
Chili Sauce | 1
Chinese Food: Canned | 1
Cherries: Canned | 3
Cherries: Jar | 1
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 1
Coffee | 3
Cold Remedies | 6
Cookies | 10
Cottage Cheese | dairy
Crackers | 10
Cranberry Sauce | 5
Croutons | 1
Deodorant | 6
Detergent: Dish-Dishwasher | 9
Detergent: Laundry | 9
Diapers | 2
Disinfectant Spray | 9
Dog Food-Dog Needs | 7
Drain Cleaner | 9
Dried Fruit: Currants-Dates | produce
Dried Fruit: Prunes-Raisins | produce
Dye: Fabric | 6
Eggs | dairy
Electrical Supplies | 8
Escargot | 1
Eye Care | 6
Facial Tissue | 8
Fabric Softener | 9
Feminine Needs | 6
Figs: Dry | produce
Fish: Canned | 1
Fish: Fresh | deli
Flour | 3
Food Coloring | 3
Freezer Wrap | 7
Fruit: Canned | 5
Fruit: Fresh | produce
Frozen Foods | front corner
Gloves: Work | 9
Granola Bars | 3
Gravy | 3
Grits | 2
Ham Glaze | 1
Hamburger Helper | 4
Honey | 12
Household Cleaners | 9
Ice Cream | Front Corner
Ice Cream Cones | Front Corner
Ice Cubes | checkout
Iced Tea Mix | 3
Jam & Jelly | 12
Jello | 3
Juice | 5
Ketchup | 1
Kitchen Utensils | dairy aisle
Kool Aid | 5
Laundry Detergent | 9
Laxative | 6
Lightbulbs | 8
Mac & Cheese: Packaged | 4
Magazines | checkout
Mayonnaise | 1
Meat: Canned | 1
Meat: Fresh | Meat Dept
Mexican Food | 1
Milk: Fresh | dairy aisle
Milk: Evaporated-Powdered | 3
Molasses | 12
Mops | 9
Mouthwash | 6
Mushrooms: Canned | 5
Mustard | 1
Napkins | 8
Noodles | 4
Nuts: Baking | 3
Nuts: Peanuts in shell | produce
Nuts: Snack Nuts | above freezer
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 8
Olives | 1
Pancake Mix | 12
Paper: Cups-Plates | 8
Paper: Towels | 8
Pasta | 4
Peanut Butter | 12
Pie Filling | 3
Pizza: Fresh | Market's Kitchen n/a
Plasticware | 8
Pop Tarts | 2
Popping Corn | above freezer
Potato Chips | 10
Potatoes: Fresh | produce
Potatoes: Canned-Instant | 5
Pudding Mix | 3
Raisins | produce
Razor Blades | checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 8
Rubbing Alcohol | 6
Salad Dressing | 1
Salt | 3
Sanitary Napkins | 6
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tartar/Tabasco | 1
Sauce: Soy | 1
Shake & Bake | dairy aisle
Shaving Needs | 6
Shoe Care | 6
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 9
Soda | 11
Soup | 6
Spaghetti Sauce | 4
Spam | 1
Spices | 3
Sponges | 9
Stationery | 8
Steel Wool | 9
Straws | 8
Stuffing Mix | 1
Sugar | 3
Taco: Sauce-Shells | 1
Tea Bags | 3
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 5
Tomato: Fresh | produce
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 6
Toothpicks | 8
Tuna: Canned | 1
Vegetables: Canned | 5
Vegetables: Fresh | produce
Vinegar | 1
Vitamins | 6
Water: Distilled-Spring | 11
Wax Paper | 7
Wheat Germ | 2
Windshield Washer Fluid | 8` },
  s19: { id: 's19', name: "Lowell", state: 'MA', number: '19', address: "11 Wood Street, Lowell, MA 01851", lat: 42.633801, lng: -71.356613,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/19-LOWELL-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 9
Ammonia | 12
Applesauce | 4
Automotive | Front Wall at Register 8
Baby Food | 8
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Packaged | 14
Bakeware | 9
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 9
Beans: Baked | 2
Beans: Dry | 2
Bisquick | 5
Bleach | 11
Bouillon Cubes | 7
Bread | 14
Bread Crumbs | 1
Brooms | 12
Bug Spray | Front Wall
Butter | Dairy Dept
Butter Buds | 7
Cake Mix | 5
Candles: Birthday | 5
Candles: Household | 12
Candy | 8
Canning Supplies | 9
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 4
Charcoal | Front Wall at Register 8
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Dept
Cheese: Specialty | Front of Deli
Chili Sauce | 2
Chinese Food: Canned | 7
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 1
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 10
Cookies | 14
Cottage Cheese | Dairy Dept
Crackers | 14
Cranberry Sauce | 4
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 8
Disinfectant Spray | 12
Dog Food-Dog Needs | 9
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 15
Dried Fruit: Prunes-Raisins | 15
Dye: Fabric | 13
Eggs | Dairy Dept
Electrical Supplies | 9
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 12
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 4
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 12
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 2
Hamburger Helper | 3
Honey | 5
Household Cleaners | 12
Ice Cream | Front Corner
Ice Cream Cones | 16
Ice Cubes | 16
Iced Tea Mix | 13
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 16
Kosher Foods | 5
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 9
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | Front Corner
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 5
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 1
Napkins | 11
Noodles | 3
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | Front Corner
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 9
Olives | 1
Pancake Mix | 5
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 3
Peanut Butter | 14
Pie Filling | 5
Pizza: Fresh | Front of Deli
Plasticware | 11
Pop Tarts | 4
Popping Corn | Front Corner
Potato Chips | Front Corner
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 15
Razor Blades | Checkout
Rice: Packaged | 3
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 1
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 7
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 13
Soup | 1
Spaghetti Sauce | 3
Spam | 2
Spices | 7
Sponges | 12
Stationery | 10
Steel Wool | 12
Straws | 11
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | Front Corner
Tea Bags | 5
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 3
Tomato: Fresh | Produce Dept
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 10
Water: Distilled-Spring | 8
Wax Paper | 9
Wheat Germ | 4
Windshield Fluid | Front @ Reg 8` },
  s20: { id: 's20', name: "Woburn", state: 'MA', number: '20', address: "310 Mishawum Road, Woburn, MA 01801", lat: 42.50621, lng: -71.131741,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/20-WOBURN-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 12
Ammonia | 11
Applesauce | 5
Automotive | 12
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | Back Main Aisle
Bakeware | 12
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 10
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 5
Bleach | 11
Bouillon Cubes | 4
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 11
Bug Spray | 12
Butter | 1
Butter Buds | 7
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 11
Candy | 8
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 5
Cherries: Canned | 5
Cherries: Jar | 5
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 9
Cookies | 8
Cottage Cheese | 1
Crackers | 8
Cranberry Sauce | 5
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 8
Disinfectant Spray | 11
Dog Food-Dog Needs | 12
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 14
Dried Fruit: Prunes-Raisins | 14
Dye: Fabric | 11
Eggs | 1
Electrical Supplies | 10
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 11
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 12
Fruit: Canned | 5
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 11
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 2
Honey | 5
Household Cleaners | 11
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Dept
Ice Cubes | 16
Iced Tea Mix | 6
Jam & Jelly | 5
Jello | 6
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 13
Kosher Foods | 5
Laundry Detergent | 11
Laxative | 9
Lightbulbs | 10
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 5
Mops | 11
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 14
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 5
Pie Filling | 6
Pizza: Frozen | 15
Plasticware | 10
Pop Tarts | 3
Popping Corn | 14
Potato Chips | 14
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 14
Razor Blades | 9
Rice: Packaged | 2 & 5
Rice: Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 5
Sauce: /Tabasco | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 11
Stationery | 9
Steel Wool | 11
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 12
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s21: { id: 's21', name: "Portsmouth", state: 'NH', number: '21', address: "1465 Woodbury Avenue, Portsmouth, NH 03801", lat: 43.088255, lng: -70.788298,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/21-PORTSMOUTH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 9
Ammonia | 15
Applesauce | 11
Automotive | 10
Baby Food | 11
Baby Powder | 7
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 9
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 11
Beans: Baked | 2
Beans: Dry | 2
Bisquick | 11
Bleach | 15
Bouillon Cubes | 8
Bread | 16
Bread Crumbs | 1
Brooms | 15
Bug Spray | 10
Butter | 1
Butter Buds | 6
Cake Mix | 5
Candles:Birthday | Rack Produce
Candles: Household | 15
Candy | 11
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 8
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 7
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 11
Croutons | 2
Deodorant | 7
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 11
Disinfectant Spray | 15
Dog Food-Dog Needs | 9
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 11
Energy Bars | 7
Eye Care | 7
Facial Tissue | 10
Fabric Softener | 15
Feminine Needs | 7
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 9
Fruit: Canned | 11
Fruit: Fresh | Produce Dept
Frozen Foods | 17
Gloves: Work | 15
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 11
Household Cleaners | 15
Ice Cream | Freezer Wall
Ice Cream Cones | 18
Ice Cubes | Beer Dept
Iced Tea Mix | 5
Jam & Jelly | 11
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 6
Kosher Foods | 8
Laundry Detergent | 15
Laxative | 7
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2 & 4
Meat: Fresh | Meat Dept
Mexican Food | 8
Milk: Fluid | 1
Milk: Evaporated-Powdered | 5
Molasses | 11
Mops | 15
Mouthwash | 7
Mushrooms: Canned | 6
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 12
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 10
Olives | 2
Pancake Mix | 11
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 11
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 10
Pop Tarts | 3
Popping Corn | 12
Potato Chips | 8 & 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 11
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 9
Rubbing Alcohol | 7
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 7
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 8
Shake & Bake | 1
Shaving Needs | 7
Shoe Care | 7
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 7
Soda | 12
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 15
Stationery | 11
Steel Wool | 15
Straws | 10
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 8
Tea Bags | 5
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 7
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 7
Water: Distilled-Spring | 14
Wax Paper | 9
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s22: { id: 's22', name: "Tewksbury", state: 'MA', number: '22', address: "1900 Main Street, Tewksbury, MA 01876", lat: 42.590902, lng: -71.202359,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/22-TEWKSBURY-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 11
Ammonia | 13
Applesauce | 9
Automotive | 14
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | Front Main Aisle
Bakeware | 11
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 12
Batteries | 11
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 9
Bleach | 13
Bouillon Cubes | 4
Bread | 19
Bread Crumbs | Back Main Aisle
Brooms | 13
Bug Spray | 14
Butter | 1
Butter Buds | 7
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 13
Candy | 9
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 3
Charcoal | 14
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 5
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 10
Disinfectant Spray | 13
Dog Food-Dog Needs | 14
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 11
Escargot | 2
Eye Care | 10
Facial Tissue | 12
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 11
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 13
Granola Bars | 3
Gravy | 7
Grits | 6
Ham Glaze | 2
Hamburger Helper | 5
Honey | 9
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | 18
Ice Cubes | Back Main Aisle
Iced Tea Mix | 6
Jam & Jelly | 9
Jello | 6
Juice | 7
Ketchup | 2
Kitchen Gadgets | 11
Kool Aid | 8
Kosher Foods | 5
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 9
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 7
Mustard | 2
Napkins | 12
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 11
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 14
Olives | 2
Pancake Mix | 9
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 9
Pie Filling | 6
Pizza: Fresh | Deli
Plasticware | 12
Pop Tarts | 3
Popping Corn | 11
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 11
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 2
Sauce: /Tabasco | 5
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 13
Stationery | 11
Steel Wool | 13
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 8
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 14` },
  s23: { id: 's23', name: "Danvers", state: 'MA', number: '23', address: "139 Endicott Street, Danvers, MA 01923", lat: 42.5511, lng: -70.933503,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/23-DANVERS-SHOPPERS-GUIDE-JUN-2022-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 14
Ammonia | 15
Applesauce | 10
Automotive | 17
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 14
Bags: Garbage-Trash | 14
Bakery: Fresh | Front Corner
Bakery: Packaged | Back Main End Caps
Bakeware | 14
Baking Needs | 9
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6 & 7
Bisquick | 7
Bleach | 15
Bouillon Cubes | 2
Bread | 22
Bread Crumbs | 5
Brooms | 15
Bug Spray | 16
Butter | 1
Butter Buds | 8
Cake Mix | 9
Candles: Birthday | Bakery
Candles: Household | 15
Candy | 10
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 16
Cereal | 4
Charcoal | 16
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 7
Cherries: Canned | 9
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 9
Cold Remedies | 12
Cookies | 21
Cottage Cheese | 1
Crackers | 21
Cranberry Sauce | 10
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 11
Disinfectant Spray | 15
Dog Food-Dog Needs | 16
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 12
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 11
Figs: Dry | 10
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 9
Food Coloring | 9
Freezer Wrap | 14
Fruit: Canned | 10
Fruit: Fresh | Produce Dept
Frozen Foods | 23 to 25
Gloves: Work | 15
Granola Bars | 7
Gravy | 8
Grits | 9
Ham Glaze | 3
Hamburger Helper | 5
Honey | 7
Household Cleaners | 15
Ice Cream | 25
Ice Cream Cones | 7
Ice Cubes | 23
Iced Tea Mix | 20
Jam & Jelly | 22
Jello | 9
Juice | 8
Ketchup | 3
Kitchen Gadgets | 14
Kool Aid | 20
Kosher Foods | 7
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 9
Molasses | 7
Mops | 15
Mouthwash | 12
Mushrooms: Canned | 8
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 9
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 16
Olives | 3
Pancake Mix | 7
Paper: Cups-Plates | 14
Paper: Towels | 13
Pasta | 5
Peanut Butter | 22
Pie Filling | 9
Pizza: Fresh | Market's Kitchen
Plasticware | 14
Pop Tarts | 4
Popping Corn | 10
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 9
Raisins | 10
Razor Blades | Checkout
Rice: Packaged | 7
Rice: Cakes | 4
Rubbermaid | 14
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 9
Sanitary Napkins | 13
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco-Tartar | 3
Sauce: Soy | 7
Shake & Bake | 7
Shaving Needs | 12
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 19
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 9
Sponges | 15
Stationery | 12
Steel Wool | 15
Straws | 14
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 9
Tissue: Bath | 10
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 12
Toothpicks | 14
Tuna: Canned | 3
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 20
Wax Paper | 14
Wheat Germ | 4
Windshield Washer Fluid | 16` },
  s24: { id: 's24', name: "Burlington", state: 'MA', number: '24', address: "43 Middlesex Turnpike, Burlington, MA 01803", lat: 42.4689, lng: -71.208439,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/24-burlington-shoppers-guide-UPDATED-2023-10-24-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 10
Ammonia | 11
Applesauce | 8
Automotive | 10
Baby Food | 15
Baby Powder | 15
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 15
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 13
Batteries | 15
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 8
Bleach | 11
Bouillon Cubes | 8
Bread | 18
Bread Crumbs | Top 19 & 20
Brooms | 11
Bug Spray | 10
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | 7
Candles: Household | 15
Candy | 8
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 10
Cereal | 4
Charcoal | 10
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 3
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 15
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3 & Produce Dept
Deodorant | 14
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 15
Disinfectant Spray | 11
Dog Food-Dog Needs | 10
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 12
Dried Fruit: Prunes-Raisins | 12
Dye: Fabric | 11
Eggs | 1
Electrical Supplies | 15
Escargot | 2
Eye Care | 13
Facial Tissue | 12
Fabric Softener | 11
Feminine Needs | 13
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 10
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 11
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 11
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 2
Kitchen Gadgets | 15
Kool Aid | 16
Kosher Foods | 3
Laundry Detergent | 11
Laxative | 15
Lightbulbs | 15
Mac & Cheese: Packaged | 5
Magazines | 12 & Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 11
Mouthwash | 14
Mushrooms: Canned | 6
Mustard | 2
Napkins | 12
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 12
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 10
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 12
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 12
Razor Blades | 14 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 15
Rubbing Alcohol | 15
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 13
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco | 2
Sauce: Soy-Tartar | 3
Shake & Bake | 19
Shaving Needs | 14
Shoe Care | 14
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 14
Soda | 17
Soup | 8
Spaghetti Sauce | 5
Spam | 2
Spices | 7
Sponges | 11
Stationery | 15
Steel Wool | 11
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 2
Tea Bags | 7
Tissue: Bath | 13
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 14
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 13
Water: Distilled-Spring | 16
Wax Paper | 10
Wheat Germ | 4
Windshield Washer Fluid | 10` },
  s25: { id: 's25', name: "Plaistow", state: 'NH', number: '25', address: "34 Plaistow Road, Plaistow, NH 03865", lat: 42.821784, lng: -71.106707,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-25-2025-01-13.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 9
Ammonia | 10
Applesauce | 14
Automotive | 9
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Bakery
Bakery: Packaged | 17
Bakeware | 9
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 8
Batteries | 9
Beans: Baked | 1
Beans: Dry | 4
Bisquick | 14
Bleach | 10
Bouillon Cubes | 4
Bread | 17
Bread Crumbs | 1
Brooms | 10
Bug Spray | 9
Butter | 1
Cake Mix | 6
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 14
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 11
Charcoal | 9
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Top of Shrimp Case
Chinese Food: Canned | 4
Cherries: Canned | 4
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 7
Cookies | 15
Cottage Cheese | 1
Crackers | 15
Cranberry Sauce | 14
Croutons | 2
Deodorant | 7
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 7
Disinfectant Spray | 10
Dog Food-Dog Needs | 9
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 14
Dried Fruit: Prunes-Raisins | 14
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 7
Facial Tissue | 8
Fabric Softener | 10
Feminine Needs | 7
Figs: Dry | Produce
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 9
Fruit: Canned | 14
Fruit: Fresh | Produce
Frozen Foods | 15 & 16
Gloves: Work | 10
Granola Bars | 11
Gravy | 4
Grits | 11
Ham Glaze | 2
Hamburger Helper | 3
Honey | 14
Household Cleaners | 10
Ice Cream | Produce
Ice Cream Cones | Produce
Ice Cubes | Check Out
Iced Tea Mix | 6
Jam & Jelly | 11
Jello | 6
Juice | 5
Ketchup | 1
Kitchen Gadgets | 1
Kool Aid | 5
Kosher Foods | 4
Laundry Detergent | 10
Laxative | 7
Lightbulbs | 9
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 14
Mops | 10
Mouthwash | 7
Mushrooms: Canned | 4
Mustard | 2
Napkins | 8
Noodles | 3
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce
Nuts: Snack Nuts | 14
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 9
Olives | 2
Pancake Mix | 14
Paper: Cups-Plates | 8
Paper: Towels | 8
Pasta | 3
Pastene | 3
Peanut Butter | 11
Pie Filling | 6
Plasticware | 8
Pop Tarts | 11
Popping Corn | 14
Potato Chips | 12
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 4
Pudding Mix | 6
Raisins | 14
Razor Blades | Checkout
Rice: Packaged | 3
Rice: Cakes | 11
Rubbermaid | 9
Rubbing Alcohol | 7
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 7
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | Top of Fish Case
Sauce: Soy | 4
Shake & Bake | 1
Shaving Needs | 7
Shoe Care | 7
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 7
Soda | 13
Soup | 4
Spaghetti Sauce | 3
Spam | 2
Spices | 6
Sponges | 10
Stationery | 8
Steel Wool | 10
Straws | 8
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 10
Tissue: Facial | 8
Tomato: Canned | 3
Tomato: Fresh | Produce Dept
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 7
Toothpicks | 8
Tuna: Canned | 2
Vegetables: Canned | 4
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 7
Water: Distilled-Spring | 5
Wax Paper | 9
Wheat Germ | 11
Windshield Washer Fluid | 9` },
  s26: { id: 's26', name: "Stratham", state: 'NH', number: '26', address: "27 Portsmouth Avenue, Stratham, NH 03885", lat: 42.999211, lng: -70.924054,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/26-STRATHAM-SHOPPERS-GUIDE-2023-3-1-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 4
Automotive | 11
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Packaged | 14
Bakeware | 9
Baking Needs | 3
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 7
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 2
Bleach | 12
Bouillon Cubes | 6
Bread | 14
Bread Crumbs | Dairy Aisle
Brooms | 12
Bug Spray | 9
Butter | Dairy Aisle
Butter Buds | 5
Cake Mix | 3
Candles: Birthday | Bakery
Candles: Household | 12
Candy | 7
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 4
Charcoal | 9
Cheese: Grated Parmesan | 6
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 3
Cherries: Jar | 1
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 2
Coffee | 3
Cold Remedies | 10
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 2
Croutons | 1
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 7
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 16
Dried Fruit: Prunes-Raisins | 16
Dye: Fabric | 12
Eggs | Dairy Aisle
Electrical Supplies | 7
Escargot | 2
Eye Care | 10
Facial Tissue | 9
Fabric Softener | 12
Feminine Needs | 10
Fish: Canned | 2
Fish: Fresh | Deli/Fish
Flour | 3
Food Coloring | 3
Freezer Wrap | 11
Fruit: Canned | 2
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 12
Granola Bars | 4
Grated Cheese | 6
Gravy | 5
Grits | 4
Ham Glaze | 2
Hamburger Helper | 6
Honey | 2
Household Cleaners | 12
Ice Cream | Corner By Produce
Ice Cream Cones | Produce Corner
Ice Cubes | By Beer Dept
Iced Tea Mix | 3
Jam & Jelly | 14
Jello | 3
Juice | 5
Ketchup | 2
Kitchen Gadgets | Over Hot Dogs
Kool Aid | 16
Kosher Foods | 15
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 7
Mac & Cheese: Packaged | 6
Magazines | Registers
Mayonnaise | 1
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 4
Molasses | 2
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 9
Noodles | 6
Nuts: Baking | 3
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 9
Olives | 1
Pancake Mix | 2
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 6
Peanut Butter | 14
Pie Filling | 3
Plasticware | 9
Pop Tarts | 4
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 3
Raisins | 16
Razor Blades | Checkout
Rice: Packaged | 6
Rice: Cakes | 4
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 1
Salt | 3
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 1
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 10
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 10
Soda | 7
Soup | 6
Spaghetti Sauce | 6
Spam | 2
Spices | 3
Sponges | 12
Stationery | 7
Steel Wool | 12
Straws | 9
Stuffing Mix | 1
Sugar | 3
Taco: Sauce-Shells | 2
Tea Bags | 3
Tissue: Bath-Facial | 9
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 6
Tomato: Sauce | 6
Toothbrushes-Toothpaste | 10
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 10
Water: Spring | 8
Wax Paper | 11
Wheat Germ | 4
Windshield Fluid | 9` },
  s27: { id: 's27', name: "Fitchburg", state: 'MA', number: '27', address: "399 John Fitch Highway, Fitchburg, MA 01420", lat: 42.581523, lng: -71.775504,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/27-FITCHBURG-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 8
Automotive | 7
Baby Food | 5
Baby Powder | 10
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 4
Barbecue Sauce | 3
Bath Tissue | 9
Batteries | 7
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 12
Bouillon Cubes | 5
Bread | 15
Bread Crumbs | 1
Brooms | 12
Bug Spray | 7
Butter | Dairy Aisle
Butter Buds | 4
Cake Mix | 4
Candles: Birthday | 14
Candles: Household | 11
Candy | 13
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 7
Cereal | 8
Charcoal | 7
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Front of Deli
Chili Sauce | 2
Chinese Food: Canned | 5
Cherries: Canned | 4
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 4
Cold Remedies | 10
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 8
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 5
Disinfectant Spray | 12
Dog Food-Dog Needs | 7
Drain Cleaner | 12
Dried Fruit: Currants-Dates-Raisins | Over Freezer Case
Dye: Fabric | 12
Eggs | Dairy Aisle
Electrical Supplies | 7
Escargot | 2
Eye Care | 10
Facial Tissue | 9
Fabric Softener | 12
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 4
Food Coloring | 4
Freezer Wrap | 11
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | Front Wall
Gloves: Work | 12
Granola Bars | 8
Gravy | 6
Grits | 8
Ham Glaze | 2
Hamburger Helper | 3
Honey | 8
Household Cleaners | 12
Ice Cream | Front Corner
Ice Cream Cones | Over Freezer
Ice Cubes | Front at Reg #11
Iced Tea Mix | 4
Jam & Jelly | 15
Jello | 4
Juice | 6
Ketchup | 3
Kitchen Gadgets | 1
Kool Aid | Back of Floral Case
Kosher Foods | 1
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 7
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 4
Molasses | 8
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 5
Nuts: Baking | 4
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | Above Frozen Case
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 7
Olives | 2
Pancake Mix | 8
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 3
Peanut Butter | 15
Pie Filling | 4
Pizza: Fresh | Front of Deli
Plasticware | 11
Pop Tarts | 8
Popping Corn | Back of Reg 14
Potato Chips | 14
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 4
Raisins | Over Freezer Case
Razor Blades | 10 & Checkout
Rice: Packaged | 3
Rice: Cakes | 8
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 4
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 2
Sauce: Soy | 5
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 13
Soup | 5
Spaghetti Sauce | 3
Spam | 2
Spices | 4
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 9
Stuffing Mix | 1
Sugar | 4
Taco: Sauce-Shells | 2
Tea Bags | 4
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 3
Tomato: Fresh | Produce Dept
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 10
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 11
Wax Paper | 11
Wheat Germ | 8
Windshield Washer Fluid | 7` },
  s28: { id: 's28', name: "Somerville", state: 'MA', number: '28', address: "400 Somerville Avenue, Somerville, MA 02143", lat: 42.38073, lng: -71.101597,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/28-SOMERVILLE-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 14
Ammonia | 13
Applesauce | 8
Automotive | 14
Baby Food | 8
Baby Powder | 10
Bags: Lunch-Sandwich | 14
Bags: Garbage-Trash | 14
Bakery: Packaged | Front Main Aisle
Bakeware | 14
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | Checkout
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 3
Bleach | 13
Bouillon Cubes | 1
Bread | 17
Bread Crumbs | 11
Brooms | 13
Bug Spray | 14
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 13
Candy | 16
Canning Supplies | Above Ice Cream
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 3
Charcoal | 14
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Dairy Aisle
Chili Sauce | 2
Chinese Food: Canned | 7
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 1
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 8
Cottage Cheese | Dairy Aisle
Crackers | 8
Cranberry Sauce | 8
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 8
Disinfectant Spray | 13
Dog Food-Dog Needs | 14
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 15
Dried Fruit: Prunes-Raisins | 15
Dye: Fabric | 13
Eggs | Dairy Aisle
Electrical Supplies | 14
Escargot | 2
Eye Care | 10
Facial Tissue | 9
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 14
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 11 & 12
Gloves: Work | 13
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 13
Ice Cream | Floral Corner
Ice Cream Cones | Floral Corner
Ice Cubes | Check-out Area
Jam & Jelly | 8
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 15
Kosher Foods | 7
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 7
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 9
Noodles | 1
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 14
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 8
Pie Filling | 6
Pizza Dough | 1
Plasticware | 9
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 11
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 15
Razor Blades | Checkout
Rice: Packaged | 4,7
Rice: Cakes | 3
Rubbermaid | 14
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 7
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 16
Soup | 1
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 13
Stationery | 9
Steel Wool | 13
Straws | 9
Stuffing Mix | Back of Aisle 12
Sugar | 6
Taco: Sauce-Shells | 7
Tea Bags | 6
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 15
Wax Paper | 14
Wheat Germ | 3
Windshield Washer Fluid | 14` },
  s30: { id: 's30', name: "Seabrook", state: 'NH', number: '30', address: "380 Lafayette Road, Seabrook, NH 03874", lat: 42.886065, lng: -70.868163,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/30-SEABROOK-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 9
Ammonia | 12
Applesauce | 10
Automotive | 12
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 9
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 8
Batteries | 7
Beans: Baked | 1
Beans: Dry | 1
Beer | 16
Bisquick | 3
Bleach | 12
Bread | 17
Bread Crumbs | 1
Brooms | 12
Bug Spray | 11
Butter | 1
Butter Buds | 5
Cake Mix | 6
Candles: Birthday | Bakery
Candles: Household | 12
Candy | 10
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 9
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 8
Cookies | 10
Cottage Cheese | 1
Crackers | 10
Cranberry Sauce | 10
Croutons | 2
Deodorant | 7
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 7
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 8
Facial Tissue | 8
Fabric Softener | 12
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 9
Fruit: Canned | 10
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | Back of Floral
Ice Cubes | End of Aisle 17
Iced Tea Mix | 6
Jam & Jelly | 10
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 9
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 12
Laxative | 8
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 12
Mouthwash | 7
Mushrooms: Canned | 5
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 9
Paper: Towels | 11
Pasta | 4
Peanut Butter | 10
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 10
Razor Blades | 7 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 9
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 9
Shake & Bake | 1
Shaving Needs | 7
Shoe Care | 7
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 7
Soda | 13
Soup | 9
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 11
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 8
Tissue: Facial | 8
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 7
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 7
Water: Distilled-Spring | 14
Wax Paper | 9
Wheat Germ | 3
Windshield Washer Fluid | 11
Wine | 16` },
  s31: { id: 's31', name: "Salem", state: 'NH', number: '31', address: "167 S Broadway, Salem, NH 03079", lat: 42.767375, lng: -71.216622,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/salem-nh-31-shoppers-guide-sept-2024-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 10
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 8
Batteries | 13
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 10
Bleach | 12
Bouillon Cubes | 10
Bread | 19
Bread Crumbs | Back Main Aisle
Brooms | 12
Bug Spray | 13
Butter | Dairy Aisle
Butter Buds | 7
Cake Mix | 5
Candles: Birthday | Bakery & 5
Candles: Household | 12
Candy | 10
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 10
Cherries: Canned | 5
Cherries: Jar | 2 & 17
Chowder: Clam-Corn-Potato | 10
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 16
Cottage Cheese | Dairy Aisle
Crackers | 16
Cranberry Sauce | 10
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 11
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 15
Dried Fruit: Prunes-Raisins | 15
Dye: Fabric | 12
Eggs | Dairy Aisle
Electrical Supplies | 13
Escargot | 2
Eye Care | 9
Facial Tissue | 8
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 10
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 10
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | 17
Ice Cubes | 17 & Checkout
Iced Tea Mix | 5
Jam & Jelly | 10
Jello | 5
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 6
Kosher Foods | 10
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 13
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 10
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 8
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 10
Paper: Cups-Plates | 11
Paper: Towels | 8
Pasta | 4
Pastene | 4
Peanut Butter | 10
Pie Filling | 5
Plasticware | 11
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 5
Raisins | 15
Razor Blades | 9 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 10
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 14
Soup | 10
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 8
Stuffing Mix | 4
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 8
Tissue: Facial | 8
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 8
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 6
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s32: { id: 's32', name: "Chelsea", state: 'MA', number: '32', address: "170 Everett Avenue, Chelsea, MA 02150", lat: 42.394142, lng: -71.042246,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/32-CHELSEA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 18
Aluminum Foil | 16
Ammonia | 18
Applesauce | 7
Automotive | 17
Baby Food | 13
Baby Powder | 13
Bags: Lunch-Sandwich | 16
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | Back Main
Bakeware | 15
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 15
Batteries | 17
Beans: Baked | 2
Beans: Dry | 9
Bisquick | 4
Bleach | 18
Bouillon Cubes | 11
Bread | 23
Bread Crumbs | Back Main
Brooms | 18
Bug Spray | 17
Butter | 1
Butter Buds | 8
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 18
Candy | 7
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 17
Cereal | 4
Charcoal | 17
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | 1
Chili Sauce | Above Frozen Fish
Chinese Food: Canned | 10
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 11
Clams: Canned-Minced-Juice | 3
Coffee | 6
Cold Remedies | 13
Cookies | 7
Cottage Cheese | 1
Crackers | 7
Cranberry Sauce | 7
Croutons | 3
Deodorant | 15
Detergent: Dish-Dishwasher | 18
Detergent: Laundry | 18
Diapers | 13
Disinfectant Spray | 18
Dog Food-Dog Needs | 17
Drain Cleaner | 18
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 18
Eggs | 1
Electrical Supplies | 17
Escargot | 2
Eye Care | 14
Facial Tissue | 13
Fabric Softener | 18
Feminine Needs | 13
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 16
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 21 & 22
Gloves: Work | 18
Granola Bars | 4
Gravy | 8
Grits | 6
Ham Glaze | 2
Hamburger Helper | 5
Honey | 4
Household Cleaners | 18
Ice Cream | 23
Ice Cream Cones | 11
Ice Cubes | Back of Aisle 23
Iced Tea Mix | 20
Jam & Jelly | 7
Jello | 6
Juice | 8
Ketchup | 2
Kitchen Gadgets | 2 & 15
Kool Aid | 11
Kosher Foods | 10
Laundry Detergent | 18
Laxative | 13
Lightbulbs | 17
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 4
Mops | 18
Mouthwash | 14
Mushrooms: Canned | 8
Mustard | 2
Napkins | 16
Noodles | 5
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 11
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 17
Olives | 2
Pancake Mix | 4
Paper: Cups-Plates | 16
Paper: Towels | 16
Pasta | 5
Peanut Butter | 7
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 16
Pop Tarts | 4
Popping Corn | 11
Potato Chips | 12
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 6
Raisins | 11
Razor Blades | 15 & Checkout
Rice: Packaged | 9
Rice: Cakes | 4
Rubbermaid | 15
Rubbing Alcohol | 13
Salad Dressing | 3
Salt | 6
Sanitary Napkins | 13
Sardines: Canned | 3
Sauce: BBQ-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 10
Shake & Bake | Above Frozen Fish
Shaving Needs | 15
Shoe Care | 13
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 15
Soda | 20
Soup | 11
Spaghetti Sauce | 5
Spam | 3
Spices | 6
Sponges | 18
Stationery | 15
Steel Wool | 18
Straws | 16
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 3
Tea Bags | 6
Tissue: Bath | 15
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 14
Toothpicks | 16
Tuna: Canned | 3
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 14
Water: Distilled-Spring | 19
Wax Paper | 16
Wheat Germ | 4
Windshield Washer Fluid | 17` },
  s33: { id: 's33', name: "Hudson", state: 'NH', number: '33', address: "212 Lowell Road, Hudson, NH 03051", lat: 42.73281, lng: -71.42368,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/33-HUDSON-NH-SHOPPERS-GUIDE-2022-MARCH-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 10
Ammonia | 11
Applesauce | 3
Automotive | 10
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 10
Baking Needs | 2
Barbecue Sauce | 1
Bath Tissue | 9
Batteries | 9
Beans: Baked | 1
Beans: Dry | 6
Bisquick | 2
Bleach | 11
Bouillon Cubes | 5
Bread | 14
Bread Crumbs | Back Main Aisle
Brooms | 11
Bug Spray | 10
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 2
Candles: Birthday | Ice Cream Dept
Candles: Household | 11
Candy | 5
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 10
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 1
Chinese Food: Canned | 1
Cherries: Canned | 3
Cherries: Jar | 1
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 1
Coffee | 2
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 3
Croutons | 1
Deodorant | 8
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 8
Disinfectant Spray | 11
Dog Food-Dog Needs | 10
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 5
Dried Fruit: Prunes-Raisins | 5
Dye: Fabric | 11
Eggs | Dairy Aisle
Electrical Supplies | 10
Escargot | 1
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 11
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 1
Fish: Fresh | Deli/Fish Dept
Flour | 2
Food Coloring | 2
Freezer Wrap | 10
Fruit: Canned | 3
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 11
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 1
Hamburger Helper | 4
Honey | 2
Household Cleaners | 11
Ice Cream | Bakery Corner
Ice Cream Cones | Bakery Corner
Ice Cubes | Beer Dept
Iced Tea Mix | 2
Jam & Jelly | 14
Jello | 2
Juice | 6
Ketchup | 1
Kitchen Gadgets | Dairy Aisle
Kool Aid | 7
Kosher Foods | 1
Laundry Detergent | 11
Laxative | 8
Lightbulbs | 10
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 1
Meat: Canned | 1
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 2
Molasses | 2
Mops | 11
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 1
Napkins | 9
Noodles | 4
Nuts: Baking | 2
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 10
Olives | 1
Pancake Mix | 2
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 14
Pie Filling | 2
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 2
Raisins | 5
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 10
Rubbing Alcohol | 8
Salad Dressing | 1
Salt | 2
Sanitary Napkins | 8
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tabasco/Tartar | 1
Sauce: Soy | 1
Shake & Bake | Back Main Aisle
Shaving Needs | 8
Shoe Care | 8
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 8
Soda | 12
Soup | 5
Spaghetti Sauce | 4
Spam | 1
Spices | 2
Sponges | 11
Stationery | 9
Steel Wool | 11
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 2
Taco: Sauce-Shells | 5
Tea Bags | 2
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 1
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 8
Water: Distilled-Spring | 7
Wax Paper | 10
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s34: { id: 's34', name: "Concord", state: 'NH', number: '34', address: "80 Storrs Street Suite 2, Concord, NH 03301", lat: 43.204561, lng: -71.532861,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-34-concord-nh-1-25-2024-2.pdf",
    guide: `
Air Freshener | 8
Aluminum Foil | 7
Ammonia | 8
Applesauce | 5
Automotive | 9
Baby Food | 6
Baby Powder | 6
Bags: Lunch-Sandwich | 7
Bags: Garbage-Trash | 7
Bakery: Packaged | 12
Bakeware | 7
Baking Needs | 4
Barbeque Sauce | 3
Bath Tissue | 9
Batteries | Register 6
Beans: Baked | 3
Beans: Dry | 3
Bisquick | 2
Bleach | 8
Bouillon Cubes | 4
Bread | 12
Bread Crumbs | 1
Brooms | 8
Bug Spray | 9
Butter | 12
Butter Buds | 5
Cake Mix | 11
Candles: Birthday | 11
Candles: Household | 8
Candy | 10
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 2
Charcoal | 9
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 12
Cheese: Specialty | 12
Chili Sauce | 3
Chinese Food: Canned | 3
Cherries: Canned | 11
Cherries: Jar | 5
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 3
Coffee | 2
Cold Remedies | 6
Cookies | 10
Cottage Cheese | 12
Crackers | 10
Cranberry Sauce | 5
Croutons | 3
Deodorant | 6
Detergent: Dish-Dishwasher | 8
Detergent: Laundry | 8
Diapers | 6
Disinfectant Spray | 8
Dog Food-Dog Needs | 9
Drain Cleaner | 8
Dried Fruit: Dates | Produce
Dried Fruit: Prunes | Produce
Dye: Fabric | 8
Eggs | 12
Escargot | 3
Eye Care | 6
Facial Tissue | 9
Fabric Softener | 8
Feminine Needs | 6
Fish: Canned | 3
Fish: Fresh | 1
Flour | 4
Food Coloring | 1
Freezer Wrap | 7
Fruit: Canned | 5
Fruit: Fresh | Produce Dept
Frozen Foods | 11
Gloves: Work | 8
Grape Juice | 5
Granola Bars | 10
Gravy | 5
Grits | 4
Ham Glaze | 5
Hamburger Helper | Back Aisle
Honey | 2
Household Cleaners | 8
Ice Cream | Chip Area
Ice Cream Cones | Chip Area
Ice Cubes | Top of Aisle 10 & 11
Iced Tea Mix | 2
Jam & Jelly | 12
Jello | 11
Juice | 5
Ketchup | 3
Kitchen Gadgets | 1
Kool Aid | 7
Kosher Foods | 11
Laundry Detergent | 8
Laxative | 6
Lightbulbs | 6
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | Chip Area
Milk: Fluid | 12
Milk: Evaporated-Powdered | 2
Molasses | 2
Mops | 8
Mouthwash | 6
Mushrooms: Canned | 5
Mustard | 3
Napkins | 7
Noodles | 4
Nuts: Baking | 4
Nuts: Peanuts in Shell | Produce
Nuts: Snack Nuts | Chip Area
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 9
Olives | 3
Pancake Mix | 2
Paper: Cups-Plates | 7
Paper: Towels | 9
Pasta | 4
Peanut Butter | 12
Pie Filling | 11
Pizza: Frozen | 11
Plasticware | 7
Pop Tarts | 2
Popping Corn | Chip Area
Potato Chips | Chip Area
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 11
Raisins | Produce Dept
Razor Blades | 6
Rice: Packaged | 3
Rice: Cakes | 10
Rubbermaid | 7
Rubbing Alcohol | 6
Salad Dressing | 3
Salt | 1
Sanitary Napkins | 6
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 3
Shake & Bake | 1
Shaving Needs | 6
Shoe Care | 8
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 6
Soda | 7
Soup | 4
Spaghetti Sauce | 4
Spam | 3
Spices | 1
Sponges | 8
Stationery | 8
Steel Wool | 8
Straws | 7
Stuffing Mix | Back Main
Sugar | 4
Taco: Sauce-Shells | Chip Area
Tea Bags | 2
Tissue: Bath. 10 Facial | 9
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 6
Toothpicks | 7
Tuna: Canned | 3
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 6
Water: Distilled-Spring | Chip Area
Wax Paper | 7
Wheat Germ | 2
Windshield Washer Fluid | 9` },
  s35: { id: 's35', name: "Concord", state: 'NH', number: '35', address: "108 Fort Eddy Road, Concord, NH 03301", lat: 43.215046, lng: -71.529704,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/35-CONCORD-NH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 13
Ammonia | 12
Applesauce | 11
Automotive | 10
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 13
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 10
Beans: Baked | 2
Beans: Dry | 2
Bisquick | 11
Bleach | 12
Bouillon Cubes | 5
Bread | 16
Bread Crumbs | 1
Brooms | 12
Bug Spray | 10
Butter | Dairy Aisle
Butter Buds | 8
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 12
Candy | 11
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Shrimp Case
Chinese Food: Canned | 2
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 9
Cookies | 16
Cottage Cheese | Dairy Aisle
Crackers | 16
Cranberry Sauce | 11
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 12
Eggs | Dairy Aisle
Electrical Supplies | 10
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 13
Fruit: Canned | 11
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 3
Gravy | 8
Grits | 6
Ham Glaze | 2
Hamburger Helper | 4
Honey | 11
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | 11
Ice Cubes | Freezer Wall
Iced Tea Mix | 7
Jam & Jelly | 11
Jello | 6
Juice | 8
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 7
Kosher Foods | 2
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 10
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 6
Molasses | 11
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 8
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 11
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 10
Olives | 2
Pancake Mix | 11
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 11
Pie Filling | 6
Pizza: Fresh | Deli
Plasticware | 13
Pop Tarts | 3
Popping Corn | 11
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 6
Raisins | 11
Razor Blades | 9 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 13
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 14
Soup | 5
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 10
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 7
Wax Paper | 13
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s36: { id: 's36', name: "Somersworth", state: 'NH', number: '36', address: "60 Tricity Plaza, Somersworth, NH 03878", lat: 43.227041, lng: -70.882131,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/36-SOMERSWORTH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 13
Ammonia | 14
Applesauce | 7
Automotive | 13
Baby Food | 7
Baby Powder | 9
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakeware | 13
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 12
Batteries | 12
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 7
Bleach | 14
Bouillon Cubes | 7
Bread | 17
Bread Crumbs | Dairy Aisle
Brooms | 14
Bug Spray | 13
Butter | Dairy Aisle
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 15
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 16
Cottage Cheese | Dairy Aisle
Crackers | 16
Cranberry Sauce | 7
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 7
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 9
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 13
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 10 & 11
Gloves: Work | 14
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 7
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | Register 14
Iced Tea | 15
Jam & Jelly | 17
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 11
Kosher Foods | Dairy Aisle
Laundry Detergent | 14
Laxative | 9
Lightbulbs | 12
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 7
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 7
Mops | 14
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 2
Napkins | 12
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 17
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 12
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 10
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 7
Razor Blades | 9 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 13
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 15
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 14
Stationery | 12
Steel Wool | 14
Straws | 12
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 7
Tea Bags | 5
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 8
Wax Paper | 13
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s39: { id: 's39', name: "Nashua", state: 'NH', number: '39', address: "34 Northwest Boulevard, Nashua, NH 03060", lat: 42.800151, lng: -71.542121,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-39-2026-02-06.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 7
Automotive | 11
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | Front Main Aisle
Bakeware | 10
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 9
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 6
Bleach | 12
Bouillon Cubes | 7
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 12
Bug Spray | 11
Butter | 1
Butter Buds | 6
Cake Mix | 6
Candles: Birthday | Bakery & 6
Candles: Household | 12
Candy | 8
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 7
Cherries: Canned | 7
Cherries: Jar | 7
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 9
Cookies | 17
Cottage Cheese | 1
Crackers | 17
Cranberry Sauce | 7
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Drink Mixes | 16
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 13 & 14
Goya Foods | 7
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 6
Household Cleaners | 12
Ice Cream | 19
Ice Cream Cones | 19
Ice Cubes | End of Aisle 17
Iced Tea Mix | 15
Jam & Jelly | 7
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 15
Kosher Foods | 7
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 6
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 5
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 6
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 7
Pie Filling | 6
Plasticware | 10
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 7
Razor Blades | Checkout & 9
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 7
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 16
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 9
Steel Wool | 12
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 15
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11
Wine | 7` },
  s40: { id: 's40', name: "Newburyport", state: 'MA', number: '40', address: "25 Storey Avenue, Newburyport, MA 01950", lat: 42.820958, lng: -70.901958,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/40-NEWBURYPORT-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 7
Automotive | 11
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 5
Bleach | 10
Bouillon Cubes | 7
Bread | 14
Bread Crumbs | 1
Brooms | 10
Bug Spray | 11
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chinese Food: Canned | 4
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 7
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 13
Dried Fruit: Prunes-Raisins | 13
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Fish: Canned | 2
Fish: Fresh | Deli/Fish
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce
Frozen Foods | 15
Gloves: Work | 10
Grape Juice | 6
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 5
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | 16
Ice Cubes | Front at Register #13
Iced Tea Mix | 15
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 15
Kosher Foods | 4
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 5
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 14
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 9
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 13
Razor Blades | 8 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 4
Shake & Bake | 1
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
soda | 12 & next to office
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath-Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vacuum Cleaner Bags | 10
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water | Aisle 12 & Register 13
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11
Chili Sauce | Over Frozen Fish` },
  s41: { id: 's41', name: "Seabrook", state: 'NH', number: '41', address: "838 Lafayette Road, Seabrook, NH 03874", lat: 42.899845, lng: -70.867983,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-41-2026-01-29.pdf",
    guide: `
Air Freshener | 9
Aluminum Foil | 6
Ammonia | 9
Applesauce | 2
Automotive | 8
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 6
Bags: Garbage-Trash | 6
Bakery: Packaged | Front Main Aisle
Bakeware | 6
Baking Needs | 2
Barbecue Sauce | 1
Bath Tissue | 8
Batteries | 9
Beans: Baked | 1
Beans: Dry | 1
Bisquick | 2
Bleach | 9
Bouillon Cubes | 4
Bread | 11
Bread Crumbs | 1
Brooms | 9
Bug Spray | 8
Butter | Dairy Aisle
Butter Buds | 2
Cake Mix | 2
Candles: Birthday | 2
Candles: Household | 9
Candy | 13
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 8
Cereal | 3
Charcoal | 8
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Above Fzn Shrimp
Chinese Food: Canned | 4
Cherries: Canned | 2
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 1
Coffee | 2
Cold Remedies | 7
Cookies | 6
Cottage Cheese | Dairy Aisle
Crackers | 6
Cranberry Sauce | 2
Croutons | 1
Deodorant | 7
Detergent: Dish-Dishwasher | 9
Detergent: Laundry | 9
Diapers | 7
Disinfectant Spray | 9
Dog Food-Dog Needs | 8
Drain Cleaner | 9
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 9
Eggs | Dairy Aisle
Electrical Supplies | 9
Escargot | 1
Eye Care | 7
Facial Tissue | 7
Fabric Softener | 9
Feminine Needs | 7
Figs: Dry | 3
Fish: Canned | 1
Fish: Fresh | Deli/Fish Dept
Flour | 2
Food Coloring | 2
Freezer Wrap | 6
Fruit: Canned | 2
Fruit: Fresh | Produce Dept
Frozen Foods | 12 & 13
Gloves: Work | 9
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 1
Hamburger Helper | 5
Honey | 3
Household Cleaners | 9
Ice Cream | 13
Ice Cream Cones | 13
Ice Cubes | Back Corner Produce
Iced Tea Mix | 10
Jam & Jelly | 11
Jello | 2
Juice | 5
Ketchup | 1
Kitchen Gadgets | Above Hot Dogs
Kool Aid | Front Main Aisle
Laundry Detergent | 9
Laxative | 7
Lightbulbs | 9
Liquid Smoke | 5
Mac & Cheese: Packaged | 4
Magazines | Checkout
Mayonnaise | 1
Meat: Canned | 4
Meat: Fresh | Meat Dept
Mexican Food | 4
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 2
Molasses | 2
Mops | 9
Mouthwash | 7
Mushrooms: Canned | 5
Mustard | 1
Napkins | 6
Noodles | 5
Nuts: Baking | 2
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 8
Olives | 1
Pancake Mix | 2
Paper: Cups-Plates | 6
Paper: Towels | 8
Pasta | 4
Peanut Butter | 11
Pie Filling | 2
Plasticware | 6
Pop Tarts | 3
Popping Corn | 6
Potato Chips | 11
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 2
Raisins | 3
Razor Blades | Checkout
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 6
Rubbing Alcohol | 7
Salad Dressing | 1
Salt | 2
Sanitary Napkins | 7
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tabasco-Tartar | 1
Sauce: Soy | 4
Shake & Bake | Above Fzn Fish
Shaving Needs | 7
Shoe Care | 7
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 7
Soda | 10
Soup | 4
Spaghetti Sauce | 4
Spam | 4
Spices | 2
Sponges | 9
Stationery | 9
Steel Wool | 9
Straws | 6
Stuffing Mix | 1
Sugar | 2
Taco: Sauce-Shells | 4
Tahini | 1
Tea Bags | 2
Tissue: Bath | 10
Tissue: Facial | 8
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 7
Toothpicks | 6
Tuna: Canned | 1
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 7
Water: Distilled-Spring | 10
Wax Paper | 6
Wheat Germ | 3
Windshield Washer Fluid | 8` },
  s42: { id: 's42', name: "Londonderry", state: 'NH', number: '42', address: "10 Michels Way, Londonderry, NH 03053", lat: 42.867021, lng: -71.346885,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/42-LONDONDERRY-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 12
Ammonia | 15
Applesauce | 8
Automotive | 14
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 11
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 4
Bleach | 15
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 21
Brooms | 15
Bug Spray | 14
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 9
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 9
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 9
Escargot | 3
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 15
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 20 & 21
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 15
Ice Cream | Front Corner
Ice Cream Cones | Front Corner
Ice Cubes | Checkout & 21
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 2
Kool Aid | 16
Kosher Foods | 2
Laundry Detergent | 15
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4 & 6
Mops | 15
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 12
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 12
Rubbing Alcohol | 9
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar-Tabasco | 3
Sauce: Soy | 2
Shake & Bake | 20
Shaving Needs | 10
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 9
Steel Wool | 15
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 12
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s43: { id: 's43', name: "Nashua", state: 'NH', number: '43', address: "375 Amherst Street, Nashua, NH 03060", lat: 42.785224, lng: -71.505439,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/43-NASHUA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 8
Ammonia | 12
Applesauce | 8
Automotive | 12
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 11
Batteries | 8
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 8
Bleach | 12
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | 19
Brooms | 12
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 10
Disinfectant Spray | 12
Dog Food-Dog Needs | 9
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 8
Escargot | 3
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 12
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 12
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 12
Ice Cream | 20
Ice Cream Cones | 20
Ice Cubes | 19
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 13
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 8
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 7
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 9
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 7
Paper: Cups-Plates | 8
Paper: Towels | 9
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 8
Pop Tarts | 4
Popping Corn | 15
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 11 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 2
Shake & Bake | 19
Shaving Needs | 11
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 14
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 12
Stationery | 10
Steel Wool | 12
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vacuum Cleaner Bags | 12
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 13
Wax Paper | 8
Wheat Germ | 4
Windshield Washer Fluid | 8` },
  s44: { id: 's44', name: "North Billerica", state: 'MA', number: '44', address: "199 Boston Road, North Billerica, MA 01862", lat: 42.58071, lng: -71.289282,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/44-BILLERICA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 9
Ammonia | 10
Applesauce | 3
Automotive | 9
Baby Food | 7
Baby Powder | 7
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 12
Bakeware | 6
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 8
Batteries | 10
Beans: Baked | 1
Beans: Dry | 5
Bisquick | 3
Bleach | 10
Bouillon Cubes | 4
Bread | 12
Bread Crumbs | 1
Brooms | 10
Bug Spray | 9
Butter | Dairy Aisle
Butter Buds | 5
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 10
Candy | 12
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 9
Cereal | 3
Charcoal | 9
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 1
Chinese Food: Canned | 5
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 4
Coffee | 2
Cold Remedies | 7
Cookies | 12
Cottage Cheese | Dairy Aisle
Crackers | 12
Cranberry Sauce | 3
Croutons | 2
Deodorant | 7
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 7
Disinfectant Spray | 10
Dog Food-Dog Needs | 9
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 10
Eggs | Dairy Aisle
Electrical Supplies | 10
Escargot | 4
Eye Care | 7
Facial Tissue | 8
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 4
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 9
Fruit: Canned | 3
Fruit: Fresh | Produce Dept
Frozen Foods | 13 & 14
Gloves: Work | 10
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 10
Ice Cream | 14
Ice Cream Cones | 14
Ice Cubes | 12
Iced Tea Mix | 2
Jam & Jelly | 3
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 14
Kosher Foods | 1
Laundry Detergent | 10
Laxative | 7
Lightbulbs | 10
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 4
Meat: Fresh | Meat Dept
Mexican Food | 6
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 10
Mouthwash | 7
Mushrooms: Canned | 5
Mustard | 2
Napkins | 8
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 11
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 9
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 8
Paper: Towels | 8
Pasta | 4
Peanut Butter | 3
Pie Filling | 6
Plasticware | 9
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 6
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 3
Razor Blades | 7
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 8
Rubbing Alcohol | 7
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 8
Sardines: Canned | 4
Sauce: BBQ-Steak | 2
Sauce: Tabasco | 1
Sauce: Soy | 5
Shake & Bake | 1
Shaving Needs | 7
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 7
Soda | 11
Soup | 4
Spaghetti Sauce | 4
Spam | 4
Spices | 6
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 8
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 6
Tea Bags | 2
Tissue: Bath | 8
Tissue: Facial | 8
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 7
Toothpicks | 8
Tuna: Canned | 4
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 7
Water: Distilled-Spring | By Reg 10
Wax Paper | 9
Wheat Germ | 3
Windshield Washer Fluid | 9` },
  middleton: { id: 'middleton', name: "Middleton", state: 'MA', number: '45', address: "230 South Main Street, Middleton, MA 01949", lat: 42.580016, lng: -70.996794,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/45-MIDDLETON-SHOPPERS-GUIDE-SEPT-2022-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 10
Ammonia | 12
Applesauce | 3
Automotive | 12
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 10
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 8
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 3
Bleach | 12
Bouillon Cubes | 1
Bread | 13
Bread Crumbs | Above Meat Case
Brooms | 12
Bug Spray | 12
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 10
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Above Froz Seafood
Chinese Food: Canned | 1
Cherries: Canned | 5
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 1
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 13
Cottage Cheese | Dairy Aisle
Crackers | 13
Cranberry Sauce | 3
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 10
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 8
Escargot | 2
Eye Care | 9
Facial Tissue | 9
Fabric Softener | 12
Feminine Needs | 8
Fish: Canned | 2
Fish: Fresh | Deli/Fish
Flour | 5
Food Coloring | 5
Freezer Wrap | 10
Fruit: Canned | 3
Fruit: Fresh | Produce
Frozen Foods | 14 & 15
Gloves: Work | 12
Grape Juice | 6
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 3
Hamburger Helper | 4
Honey | 3
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | Frozen Corner
Ice Cubes | 14
Iced Tea Mix | 6
Jam & Jelly | 13
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 10
Kool Aid | 6
Kosher Foods | 2
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 8
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 3
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 2
Napkins | 8
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 2
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 10
Paper: Towels | 8
Pasta | 4
Peanut Butter | 13
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 10
Pop Tarts | 3
Popping Corn | 7
Potato Chips | 7
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 7
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 10
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 1
Shake & Bake | Above Meat Case
Shaving Needs | 8
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 11
Soup | 1
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 12
Stationery | 8
Steel Wool | 12
Straws | 8
Stuffing Mix | Above Meat Case
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath-Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 10
Tuna: Canned | 2
Vacuum Cleaner Bags | 12
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 11
Wax Paper | 10
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s46: { id: 's46', name: "Ashland", state: 'MA', number: '46', address: "49 Pond Street, Ashland, MA 01721", lat: 42.257129, lng: -71.428122,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/46-ashland-shoppers-guide-1-24-024-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 7
Automotive | 10
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 8
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 9
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 3
Bleach | 12
Bouillon Cubes | 6
Bread | 14
Bread Crumbs | Dairy Aisle
Brooms | 12
Bug Spray | 10
Butter | Dairy Aisle
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 5
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 6
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 8
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 2
Coffee | 8
Cold Remedies | 9
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 11
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Fish: Canned | 2
Fish: Fresh | Deli/Fish
Flour | 8
Food Coloring | 8
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce
Frozen Foods | 15 & 16
Gloves: Work | 12
Grape Juice | 7
Granola Bars | 3
Gravy | 7
Grits | 8
Ham Glaze | 2
Hamburger Helper | 6
Honey | 3
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | Behind Floral
Ice Cubes | Back of Aisle #14
Iced Tea Mix | 8
Jam & Jelly | 14
Jello | 8
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 16
Kosher Foods | 6
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 8
Molasses | 3
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 10
Noodles | 6
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 10
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 6
Peanut Butter | 14
Pie Filling | 8
Pizza: Fresh | Deli
Plasticware | 11
Pop Tarts | 3
Popping Corn | 16
Potato Chips | 5
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 3
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 8
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 6
Spaghetti Sauce | 6
Spam | 2
Spices | 8
Sponges | 12
Stationery | 9
Steel Wool | 12
Straws | 10
Stuffing Mix | 1
Sugar | 8
Taco: Sauce-Shells | 2
Tea Bags | 8
Tissue: Bath-Facial | 10
Tomato: Canned | 6
Tomato: Fresh | Produce
Tomato: Paste | 6
Tomato: Sauce | 6
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s47: { id: 's47', name: "Rindge", state: 'NH', number: '47', address: "497 US Rte. 202, Rindge, NH 03461", lat: 42.765915, lng: -72.035497,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-47-ringe-nh-1-24-2024-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 9
Ammonia | 12
Applesauce | 5
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Bakery Corner
Bakery: Packaged | By Register 1
Bakeware | 9
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 9
Beans: Baked | 2
Beans: Dry | 8
Bisquick | 5
Bleach | 12
Bouillon Cubes | 9
Bread | 16
Bread Crumbs | 1
Brooms | 12
Bug Spray | 13
Butter | 1
Butter Buds | 8
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 12
Candy | 5
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Back Main Aisle
Chili Sauce | 2
Chinese Food: Canned | 9
Cherries: Canned | 6
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 5
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 10
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 5
Dried Fruit: Prunes-Raisins | 5
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 12
Feminine Needs | 10
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 9
Fruit: Canned | 5
Fruit: Fresh | Produce Dept
Frozen Foods | 17
Gloves: Work | 12
Grape Juice | 8
Granola Bars | 3
Gravy | 8
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 5
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | 17
Iced Tea Mix | 7
Jam & Jelly | 5
Jello | 6
Juice | 8
Ketchup | 2
Kitchen Gadgets | 1 & 9
Kool Aid | 7
Kosher Foods | 1
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 5
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 8
Mustard | 2
Napkins | 11
Noodles | 9
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 5
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 5
Pie Filling | 6
Pizza: Fresh | Markets Sub Shop
Plasticware | 9
Pop Tarts | 3
Popping Corn | 5
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 6
Raisins | 5
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 9
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 14
Soup | 9
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 9
Steel Wool | 12
Straws | 11
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath. 11 Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 7
Wax Paper | 9
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s48: { id: 's48', name: "Haverhill", state: 'MA', number: '48', address: "285 Lincoln Avenue, Haverhill, MA 01830", lat: 42.76379, lng: -71.036957,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/48-HAVERHILL-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 8
Ammonia | 11
Applesauce | 3
Automotive | 12
Baby Food | 6
Baby Powder | 9
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 8
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 12
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 4
Bleach | 11
Bouillon Cubes | 6
Bread | 14
Bread Crumbs | 1
Brooms | 11
Bug Spray | 12
Butter | 1
Butter Buds | 7
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 11
Candy | 6
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 4
Cherries: Jar | 2
Cherries: Fresh | Produce Dept
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 9
Cookies | 14
Cottage Cheese | 1
Crackers | 14
Cranberry Sauce | 3
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 6
Disinfectant Spray | 11
Dog Food-Dog Needs | 12
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 16
Dried Fruit: Prunes-Raisins | 16
Dye: Fabric | 11
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 11
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 8
Fruit: Canned | 3
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 11
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 1
Honey | 4
Household Cleaners | 11
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Wall
Ice Cubes | By Ice Cream
Iced Tea Mix | 5
Jam & Jelly | 8
Jello | 5
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 15
Kosher Foods | 15
Laundry Detergent | 11
Laxative | 9
Lightbulbs | 12
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 6
Milk: Fluid | 1
Milk: Evaporated-Powdered | 4
Molasses | 4
Mops | 11
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 10
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 4
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 4
Peanut Butter | 8
Pie Filling | 5
Pizza: Fresh | Sub Shop
Plasticware | 10
Pop Tarts | 3
Popping Corn | 16
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 5
Raisins | 16
Razor Blades | 9 & Checkout
Rice: Packaged | 2
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 4
Shake & Bake | 1
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 6
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 11
Stationery | 12
Steel Wool | 11
Straws | 10
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 6
Tea Bags | 5
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vacuum Cleaner Bags | 11
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 8
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s49: { id: 's49', name: "Rowley", state: 'MA', number: '49', address: "231 Newburyport Trpk. Rte. 1, Rowley, MA 01969", lat: 42.708678, lng: -70.905862,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/49-ROWLEY-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 12
Ammonia | 11
Applesauce | 7
Automotive | 10
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 12
Baking Needs | 4
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 3
Bleach | 11
Bouillon Cubes | 5
Bread | 14
Bread Crumbs | 1
Brooms | 11
Bug Spray | 10
Butter | Dairy Aisle
Cake Mix | 4
Candles: Birthday | Bakery Case
Candles: Household | 11
Candy | 8
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 10
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 4
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 4
Cold Remedies | 9
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 9
Disinfectant Spray | 11
Dog Food-Dog Needs | 12
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 71
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 11
Eggs | Dairy Aisle
Electrical Supplies | 9
Escargot | 2
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 11
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 4
Food Coloring | 4
Freezer Wrap | 12
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 11
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 5
Honey | 3
Household Cleaners | 11
Ice Cream | Freezer Wall
Ice Cream Cones | 16
Ice Cubes | Next to Floral Case
Iced Tea Mix | 4
Jam & Jelly | 14
Jello | 4
Juice | 6
Ketchup | 2
Kitchen Gadgets | 6
Kool Aid | 15
Kosher Foods | 2
Laundry Detergent | 11
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 7
Molasses | 3
Mops | 11
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 2
Napkins | 10
Noodles | 5
Nuts: Baking | 4
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 7
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 10
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 14
Pie Filling | 4
Pizza: Fresh | Bakery & Deli
Plasticware | 12
Pop Tarts | 3
Popping Corn | 16
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 4
Raisins | 7
Razor Blades | 9
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 4
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 7
Soup | 5
Spaghetti Sauce | 5
Spam | 2
Spices | 4
Sponges | 11
Stationery | 10
Straws | 10
Stuffing Mix | 1
Sugar | 4
Taco: Sauce-Shells | 2
Tea Bags | 4
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 12
Wheat Germ | 3
Windshield Washer Fluid | 10` },
  s50: { id: 's50', name: "Rochester", state: 'NH', number: '50', address: "96 Milton Road Route 125, Rochester, NH 03868", lat: 43.341791, lng: -70.975745,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/50-ROCHESTER-SHOPPERS-GUIDE-JULY-25-23-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 7
Automotive | 11
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 4
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 8
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 7
Bleach | 10
Bouillon Cubes | 5
Bread | 14
Bread Crumbs | 1
Brooms | 10
Bug Spray | 11
Butter | 1
Butter Buds | 4
Cake Mix | 4
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 4
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 4
Cold Remedies | 8
Cookies | 14
Cottage Cheese | 1
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 8
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 8
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 4
Food Coloring | 4
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 16
Gloves: Work | 10
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 2
Honey | 7
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | 16
Ice Cubes | Front Main Aisle
Iced Tea Mix | 4
Jam & Jelly | 14
Jello | 4
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 16
Kosher Foods | 2
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 8
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 7
Milk: Fluid | 1
Milk: Evaporated | 3
Milk: Powdered | 4
Molasses | 7
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 5
Nuts: Baking | 4
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Pastene | 5
Peanut Butter | 14
Pie Filling | 4
Plasticware | 9
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 4
Raisins | 7
Razor Blades | Checkout
Rice: Packaged | 2
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 4
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 2
Shake & Bake | 1
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 12
Soup | 5
Spaghetti Sauce | 5
Spam | 2
Spices | 4
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 4
Taco: Sauce-Shells | 7
Tea Bags | 4
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 12
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s51: { id: 's51', name: "Lee", state: 'NH', number: '51', address: "54 Calef Road Route 125, Lee, NH 03861", lat: 43.150602, lng: -71.008992,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/51-LEE-NH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 3
Automotive | 11
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 5
Bleach | 10
Bouillon Cubes | 7
Bread | 14
Bread Crumbs | Dairy Aisle
Brooms | 10
Bug Spray | 11
Butter | 1
Butter Buds | 5
Cake Mix | 5
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Above Frozen Shrimp
Chinese Food: Canned | 4
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 3
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 8
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 11
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 3
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 10
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 5
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | Back of Floral
Ice Cubes | Checkout Area
Iced Tea Mix | 5
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 12
Kosher Foods | 1
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 5
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 7
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 14
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 9
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 3
Razor Blades | 8 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 4
Shake & Bake | 1
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 12
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 12
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s52: { id: 's52', name: "Raynham", state: 'MA', number: '52', address: "240 Broadway Street, Raynham, MA 02767", lat: 41.936851, lng: -71.084059,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/52-RAYNHAM-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 12
Ammonia | 13
Applesauce | 9
Automotive | 12
Baby Food | 9
Baby Powder | 10
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 15
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 11
Beans: Baked | 2
Beans: Dry | 8
Bisquick | 3
Bleach | 13
Bouillon Cubes | 9
Bread | 15
Bread Crumbs | Dairy Aisle
Brooms | 13
Bug Spray | 12
Butter | 1
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 6
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 10
Cookies | 15
Cottage Cheese | Dairy Aisle
Crackers | 15
Cranberry Sauce | 9
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 9
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 1
Dried Fruit: Prunes-Raisins | Produce Aisle
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 11
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 16
Gloves: Work | 13
Granola Bars | 3
Gravy | 8
Grits | 8
Ham Glaze | 2
Hamburger Helper | 9
Honey | 3
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Aisle
Ice Cubes | Front at Register #20
Iced Tea Mix | 7
Jam & Jelly | 9
Jello | 7
Juice | 8
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 5
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 7
Molasses | 3
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 8
Mustard | 2
Napkins | 11
Noodles | 9
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Bakery & Deli
Plasticware | 12
Pop Tarts | 3
Popping Corn | 9
Potato Chips | 6
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 7
Raisins | Produce Aisle
Razor Blades | Registers
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 14
Soup | 9
Spaghetti Sauce | 4
Spam | 2
Spices | 7
Sponges | 13
Stationery | 10
Straws | 11
Stuffing Mix | 1
Sugar | 7
Taco: Sauce-Shells | 2
Tea Bags | 7
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 5
Wax Paper | 12
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s53: { id: 's53', name: "Claremont", state: 'NH', number: '53', address: "345 Washington St. Rte. 103, Claremont, NH 03743", lat: 43.363744, lng: -72.319701,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/53-CLAREMONT-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 9
Aluminum Foil | 8
Ammonia | 9
Applesauce | 7
Automotive | 8
Baby Food | 7
Baby Powder | 10
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Packaged | 14
Bakeware | 8
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 11
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 7
Bleach | 9
Bouillon Cubes | 7
Bread | 14
Bread Crumbs | 1
Brooms | 9
Bug Spray | 8
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 6
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 7
Canning Supplies | 6
Cat Food-Cat Litter-Cat Needs | 8
Cereal | 3
Charcoal | 8
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 4
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 9
Detergent: Laundry | 9
Diapers | 7
Disinfectant Spray | 9
Dog Food-Dog Needs | 8
Drain Cleaner | 9
Dried Fruit: Currants-Dates | 16
Dried Fruit: Prunes-Raisins | 16
Dye: Fabric | 9
Eggs | Dairy Aisle
Electrical Supplies | 11
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 9
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 8
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 9
Granola Bars | 3
Gravy | 5
Grits | 6
Ham Glaze | 2
Hamburger Helper | 4
Honey | 7
Household Cleaners | 9
Ice Cream | Front Corner
Ice Cream Cones | 16
Ice Cubes | Front of Aisle 16
Iced Tea Mix | 6
Jam & Jelly | 14
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | Over Hot Dogs
Kool Aid | 15
Kosher Foods | 1
Laundry Detergent | 9
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 6
Molasses | 7
Mops | 9
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 8
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Pastene | 4
Peanut Butter | 14
Pie Filling | 6
Plasticware | 8
Pop Tarts | 3
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 15
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tartar | Top of Fish Case
Sauce: Soy | 4
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 12
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 9
Stationery | 11
Steel Wool | 9
Straws | 11
Stuffing Mix | 1
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 12
Wax Paper | 8
Wheat Germ | 3
Windshield Washer Fluid | 8` },
  s54: { id: 's54', name: "Bellingham", state: 'MA', number: '54', address: "274 Hartford Ave. Rte. 126, Bellingham, MA 02019", lat: 42.116487, lng: -71.462282,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/54-BELLINGHAM-SHOPPERS-GUIDE-APR-2023-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 13
Ammonia | 12
Applesauce | 9
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 15
Bakeware | 13
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 10
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 9
Bleach | 12
Bouillon Cubes | 9
Bread | 15
Bread Crumbs | 1
Brooms | 12
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 9
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 9
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 10
Cookies | 15
Cottage Cheese | 1
Crackers | 15
Cranberry Sauce | 9
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 10
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 16
Dried Fruit: Prunes-Raisins | 16
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 10
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 12
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 13
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 16
Gloves: Work | 12
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 9
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | 17
Ice Cubes | End of Aisle 15
Iced Tea Mix | 7
Jam & Jelly | 9
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 11
Kool Aid | 7
Kosher Foods | 9
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 10
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 5
Molasses | 9
Mops | 12
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 9
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 9
Pie Filling | 5
Plasticware | 11
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 16
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 13
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 10
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 1
Shake & Bake | 1
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 10
Soda | 14
Soup | 9
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 11
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 13
Vitamins | 13
Water: Distilled-Spring | 13
Wax Paper | 13
Wheat Germ | 13
Windshield Washer Fluid | 13` },
  s55: { id: 's55', name: "Warner", state: 'NH', number: '55', address: "30 Nichols Mill Lane, Warner, NH 03278", lat: 43.291121, lng: -71.833434,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/55-WARNER-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 7
Automotive | 11
Baby Food | 7
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 3
Bleach | 10
Bouillon Cubes | 4
Bread | 14
Bread Crumbs | Dairy Aisle
Brooms | 10
Bug Spray | 11
Butter | 1
Butter Buds | 5
Cake Mix | 5
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Froz Shrimp
Chinese Food: Canned | 6
Cherries: Canned | 7
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 7
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 10
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | 16
Ice Cubes | 16
Iced Tea Mix | 16
Jam & Jelly | 7
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 16
Kosher Foods | 6
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 3
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 7
Pie Filling | 5
Pizza: Fresh | Sub Shop
Plasticware | 11
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 7
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ--Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 6
Shake & Bake | Dairy Aisle
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 12
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 12
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s56: { id: 's56', name: "Portsmouth", state: 'NH', number: '56', address: "1500 Lafayette Road, Portsmouth, NH 03801", lat: 43.044711, lng: -70.774262,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/56-PORTSMOUTH-SHOPPERSGUIDE-2021-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 7
Automotive | 9
Baby Food | 8
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 8
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 3
Bleach | 10
Bouillon Cubes | 4
Bread | 14
Bread Crumbs | Dairy Aisle
Brooms | 10
Bug Spray | 9
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | Bakery
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 9
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | Shrimp Case
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 8
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 10
Eggs | Dairy Aisle
Electrical Supplies | 8
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Gloves: Work | 10
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cubes | Front at Register 11
Iced Tea Mix | 6
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kool Aid | 6
Kosher Foods | Dairy Aisle
Laundry Detergent | 10
Laxative | 7
Lightbulbs | 8
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 4
Molasses | 5
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 9
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 14
Pie Filling | 5
Plasticware | 9
Pop Tarts | 3
Popping Corn | 16
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 3
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 2
Shake & Bake | Dairy Aisle
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 7
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 9
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vacuum Cleaner Bags | 10
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 12
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 9` },
  s57: { id: 's57', name: "Milford", state: 'NH', number: '57', address: "21 Jones Road Route 101, Milford, NH 03055", lat: 42.840812, lng: -71.705811,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/57-MILFORD-NH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 10
Aluminum Foil | 11
Ammonia | 10
Applesauce | 7
Automotive | 11
Baby Food | 7
Baby Powder | 8
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 14
Bakeware | 11
Baking Needs | 5
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 9
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 5
Bleach | 10
Bouillon Cubes | 7
Bread | 14
Bread Crumbs | 1
Brooms | 10
Bug Spray | 11
Butter | 1
Butter Buds | 6
Cake Mix | 5
Candles: Birthday | 5
Candles: Household | 10
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 3
Charcoal | 11
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 4
Cherries: Canned | 5
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 5
Cold Remedies | 8
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 7
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 10
Detergent: Laundry | 10
Diapers | 7
Disinfectant Spray | 10
Dog Food-Dog Needs | 11
Drain Cleaner | 10
Dried Fruit: Currants-Dates | 3
Dried Fruit: Prunes-Raisins | 3
Dye: Fabric | 10
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 8
Facial Tissue | 9
Fabric Softener | 10
Feminine Needs | 8
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 5
Food Coloring | 5
Freezer Wrap | 11
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 15
Gloves: Work | 10
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 5
Household Cleaners | 10
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Wall
Ice Cubes | Front at Register 12
Iced Tea Mix | 5
Jam & Jelly | 14
Jello | 5
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 16
Kosher Foods | 4
Laundry Detergent | 10
Laxative | 8
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 5
Molasses | 5
Mops | 10
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 5
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 15
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 11
Olives | 2
Pancake Mix | 5
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 4
Peanut Butter | 14
Pie Filling | 5
Pizza: Fresh | Deli
Plasticware | 9
Pop Tarts | 3
Popping Corn | 15
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 5
Raisins | 3
Razor Blades | 8
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 11
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 5
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 4
Shake & Bake | Dairy Aisle
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 12
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 5
Sponges | 10
Stationery | 9
Steel Wool | 10
Straws | 9
Stuffing Mix | 1
Sugar | 5
Taco: Sauce-Shells | 2
Tea Bags | 5
Tissue: Bath | 10
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 12
Wax Paper | 11
Wheat Germ | 3
Windshield Washer Fluid | 11` },
  s58: { id: 's58', name: "Salem", state: 'MA', number: '58', address: "227 Highland Avenue, Salem, MA 01970", lat: 42.503231, lng: -70.919199,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/58-SALEM-MA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 13
Ammonia | 12
Applesauce | 3
Automotive | 13
Baby Food | 10
Baby Powder | 11
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 13
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 13
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 6
Bleach | 12
Bouillon Cubes | 4
Bread | 18
Bread Crumbs | Back of Aisle 6
Brooms | 12
Bug Spray | 13
Butter | 1
Butter Buds | 7
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 10
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 5
Cherries: Canned | 3
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 4
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 9
Cookies | 15
Cottage Cheese | 1
Crackers | 15
Cranberry Sauce | 3
Croutons | 2
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 10
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 13
Escargot | 2
Eye Care | 9
Facial Tissue | 11
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 13
Fruit: Canned | 3
Fruit: Fresh | Produce Dept
Frozen Foods | 16 & 17
Gloves: Work | 12
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 5
Honey | 6
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | 18
Ice Cubes | 16
Iced Tea Mix | 6
Jam & Jelly | 18
Jello | 6
Juice | 7
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 8
Kosher Foods | 5
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 13
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 6
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 7
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 6
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 18
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 3
Popping Corn | 10
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 10
Razor Blades | Checkout
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 13
Rubbing Alcohol | 9
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 2
Sauce: Soy | 2
Sauce: /Tabasco | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 14
Soup | 4
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 12
Stationery | 11
Steel Wool | 12
Straws | 8
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 9
Toothpicks | 11
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 8
Wax Paper | 13
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s59: { id: 's59', name: "Tilton", state: 'NH', number: '59', address: "100 Market Street, Tilton, NH 03276", lat: 43.45514, lng: -71.574942,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/59-TILTON-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 11
Aluminum Foil | 10
Ammonia | 11
Applesauce | 8
Automotive | 12
Baby Food | 9
Baby Powder | 8
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | Facing Produce
Bakeware | 8
Baking Needs | 4
Barbecue Sauce | 1
Bath Tissue | 10
Batteries | 9
Beans: Baked | 6
Beans: Dry | 6
Bisquick | 2
Bleach | 11
Bouillon Cubes | 8
Bread | 14
Bread Crumbs | Back Main Aisle
Brooms | 11
Bug Spray | 12
Butter | Dairy Aisle
Butter Buds | 6
Cake Mix | 4
Candles: Birthday | 4
Candles: Household | 11
Candy | 8
Canning Supplies | 1
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 2
Charcoal | 12
Cheese: Grated Parmesan | 3
Cheese: Prepackaged | Dairy Aisle
Cheese: Specialty | Cheese Case
Chili Sauce | 1
Chinese, Korean, Thai Food | 3
Cherries: Canned | 4
Cherries: Maraschino | 1
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 1
Coffee | 4
Cold Remedies | 9
Cookies | 14
Cottage Cheese | Dairy Aisle
Crackers | 14
Cranberry Sauce | 8
Croutons | 1
Deodorant | 9
Detergent: Dish-Dishwasher | 11
Detergent: Laundry | 11
Diapers | 9
Disinfectant Spray | 11
Dog Food-Dog Needs | 12
Drain Cleaner | 11
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 11
Eggs | Dairy Aisle
Electrical Supplies | 9
Ensure | 9
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 11
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 1
Fish: Fresh | Deli/Fish Dept
Flour | 4
Food Coloring | 4
Freezer Wrap | 10
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 15 & 16
Gloves: Work | 11
Granola Bars | 2
Gravy | 6
Grits | 2
Ham Glaze | 1
Hamburger Helper | 3
Honey | 2
Household Cleaners | 11
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | Front at Register 15
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 4
Juice | 6
Ketchup | 1
Kitchen Gadgets | 8
Kool Aid | 7
Kosher Foods | 1
Laundry Detergent | 11
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 3
Magazines | Registers
Mayonnaise | 1
Meat: Canned | 1
Meat: Fresh | Meat Dept
Mexican Food | 1
Milk: Fluid | Dairy Aisle
Milk: Evaporated-Powdered | 4
Molasses | 2
Mops | 11
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 1
Napkins | 10
Noodles | 3
Nuts: Baking | 4
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 5
Oil: Canola-Cooking-Corn | 1
Oil: Olive-Vegetable | 1
Oil: Motor | 12
Olives | 1
Pancake Mix | 2
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 3
Peanut Butter | 8
Pie Filling | 4
Pizza: Fresh | Bakery & Deli
Plasticware | 10
Pop Tarts | 2
Popping Corn | 15 & 16
Potato Chips | 5
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 4
Raisins | 8
Razor Blades | 9
Rice: Packaged | 3
Rice: Cakes | 2
Rubbermaid | 10
Rubbing Alcohol | 9
Salad Dressing | 1
Salt | 4
Sanitary Napkins | 9
Sardines: Canned | 1
Sauce: BBQ-Chili-Steak | 1
Sauce: Tabasco/Tartar | 1
Sauce: Soy | 3
Shake & Bake | Back of Aisle 14
Shaving Needs | 9
Shoe Care | 9
Shortening | 1
Soap: Bar-Body-Hand-Liquid | 9
Soda | 13
Soup | 8
Spaghetti Sauce | 3
Spam | 1
Spices | 4
Sponges | 11
Stationery | 9
Steel Wool | 11
Straws | 10
Stuffing Mix | Back of Aisle 5
Sugar | 4
Taco: Sauce-Shells | 1
Tea Bags | 4
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 3
Tomato: Fresh | Produce Dept
Tomato: Paste | 3
Tomato: Sauce | 3
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 1
Vegan | Produce Dept
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 1
Vitamins | 9
Water: Distilled-Spring | 7
Wax Paper | 10
Wheat Germ | 2
Windshield Washer Fluid | 12` },
  s60: { id: 's60', name: "Reading", state: 'MA', number: '60', address: "30 General Way, Reading, MA 01867", lat: 42.519334, lng: -71.097047,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-60-2025-11-4.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 13
Ammonia | 14
Applesauce | 9
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 13
Baking Needs | 6
Barbecue Sauce | 5
Bath Tissue | 12
Batteries | 11
Beans: Baked | 5
Beans: Dry | 7
Bisquick | 9
Bleach | 14
Bouillon Cubes | 2
Bread | 19
Bread Crumbs | Back Main Aisle
Brooms | 14
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 6
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 10
Cherries: Canned | 6
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 5
Coffee | 6
Cold Remedies | 11
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 5
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 11
Escargot | 5
Eye Care | 11
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 5
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 13
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 14
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 5
Hamburger Helper | 4
Honey | 9
Household Cleaners | 14
Ice Cream | 19
Ice Cream Cones | 10
Ice Cubes | Registers
Iced Tea Mix | 8
Jam & Jelly | 9
Jello | 6
Juice | 7
Ketchup | 5
Kitchen Gadgets | 13
Kool Aid | 8
Kosher Foods | 10
Laundry Detergent | 14
Laxative | 11
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 5
Meat: Canned | 5
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 9
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 5
Napkins | 12
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 5
Oil: Olive-Vegetable | 5
Oil: Motor | 12
Olives | 5
Pancake Mix | 9
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 9
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 3
Popping Corn | 10
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 10
Razor Blades | Checkout & 11
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 11
Salad Dressing | 5
Salt | 6
Sanitary Napkins | 11
Sardines: Canned | 5
Sauce: BBQ-Chili-Steak | 5
Sauce: Tabasco-Tartar | 5
Sauce: Soy | 10
Shake & Bake | Back Main Aisle
Shaving Needs | 11
Shoe Care | 11
Shortening | 5
Soap: Bar-Body-Hand-Liquid | 11
Soda | 15
Soup | 2
Spaghetti Sauce | 4
Spam | 5
Spices | 6
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 11
Toothpicks | 12
Tuna: Canned | 5
Vacuum Cleaner Bags | 14
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 5
Vitamins | 11
Water: Distilled-Spring | 8
Wax Paper | 13
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s61: { id: 's61', name: "Gloucester", state: 'MA', number: '61', address: "101 Gloucester Crossing, Gloucester, MA 01930", lat: 42.62143, lng: -70.656524,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/61-GLOUCESTER-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 10
Ammonia | 13
Applesauce | 9
Automotive | 12
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 10
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 12
Beans: Baked | 2
Beans: Dry | 2
Bisquick | 7
Bleach | 13
Bouillon Cubes | 5
Bread | 19
Bread Crumbs | Back Main Aisle
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 3
Charcoal | 12
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 5
Cherries: Canned | 7
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 5
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 8
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 2
Deodorant | 8
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 10
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 10
Dried Fruit: Prunes-Raisins | 10
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 12
Escargot | 2
Eye Care | 8
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 8
Film | Registers
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 10
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 13
Granola Bars | 3
Gravy | 6
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 7
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | 10
Ice Cubes | 17
Iced Tea Mix | 7
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 14
Kosher Foods | 5
Laundry Detergent | 13
Laxative | 8
Lightbulbs | 12
Mac & Cheese: Packaged | 4
Magazines | 8 & Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 7
Mops | 13
Mouthwash | 8
Mushrooms: Canned | 6
Mustard | 2
Napkins | 11
Noodles | 4
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 12
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 4
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Bakery & Deli
Plasticware | 11
Pop Tarts | 3
Popping Corn | 10
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 16
Razor Blades | Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 10
Rubbing Alcohol | 8
Salad Dressing | 2
Salt | 7
Sanitary Napkins | 8
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 5
Shake & Bake | Back Main Aisle
Shaving Needs | 8
Shoe Care | 8
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 8
Soda | 15
Soup | 5
Spaghetti Sauce | 4
Spam | 2
Spices | 7
Sponges | 13
Stationery | 11
Steel Wool | 13
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 5
Tea Bags | 7
Tissue: Bath-Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 8
Toothpicks | 11
Tuna: Canned | 2
Vacuum Cleaner Bags | 13
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 8
Water: Distilled-Spring | 14
Wax Paper | 10
Wheat Germ | 3
Windshield Washer Fluid | 12` },
  s62: { id: 's62', name: "Oxford", state: 'MA', number: '62', address: "95 Sutton Avenue, Oxford, MA 01540", lat: 42.113911, lng: -71.851788,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/62-OXFORD-SHOPPERS-GUIDE-UPDATED-2023-11-6-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 12
Ammonia | 15
Applesauce | 13
Automotive | 14
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 21
Bakeware | 8
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 9
Beans: Baked | 2
Beans: Dry | 7
Bisquick | 13
Bleach | 15
Bouillon Cubes | 8
Bread | 21
Bread Crumbs | 19
Brooms | 15
Bug Spray | 14
Butter | 1
Butter Buds | 7
Cake Mix | 6
Candles: Birthday | 6
Candles: Household | 15
Candy | 13
Canning Supplies | Back Main
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 3
Charcoal | 14
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 6
Cherries: Jar | 13
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 11
Cookies | 13
Cottage Cheese | 10
Crackers | 13
Cranberry Sauce | 13
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 11
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 15
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 12
Fruit: Canned | 13
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 3
Gravy | 7
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 13
Household Cleaners | 15
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer
Ice Cubes | 20
Iced Tea Mix | 8
Jam & Jelly | 13
Jello | 6
Juice | 7
Ketchup | 2
Kitchen Gadgets | 8
Kool Aid | 8
Kosher Foods | 5
Laundry Detergent | 15
Laxative | 11
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 5
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 13
Mops | 15
Mouthwash | 10
Mushrooms: Canned | 7
Mustard | 2
Napkins | 12
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 14
Olives | 2
Pancake Mix | 13
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 13
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 18
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 6
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 11
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 11
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 17
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 15
Stationery | 8
Steel Wool | 15
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 5
Tea Bags | 6
Tissue: Bath | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 16
Wax Paper | 12
Wheat Germ | 3
Windshield Washer Fluid | 14` },
  s63: { id: 's63', name: "Epping", state: 'NH', number: '63', address: "24 Calef Highway Rte. 125, Epping, NH 03042", lat: 43.024729, lng: -71.076852,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-63-Updated-2024-11-25-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 12
Ammonia | 14
Applesauce | 7
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 21
Bakeware | 12
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 8
Beans: Baked | 2
Beans: Dry | 5
Bisquick | 7
Bleach | 14
Bouillon Cubes | 8
Bread | 21
Brooms | 14
Bug Spray | 13
Butter | 1
Cake Mix | 6
Candles: Birthday | 6 & Bakery
Candles: Household | 14
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 8
Cherries: Canned | 6
Cherries: Jar | 7
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 11
Cookies | 7
Cottage Cheese | 1
Crackers | 7
Cranberry Sauce | 7
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 8
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | 8 & Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 12
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 7
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | 8 & 19
Ice Cubes | 20 & Checkout
Iced Tea Mix | 16
Jam & Jelly | 7
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 8 & Meat Case
Kool Aid | 15
Kosher Foods | 8
Laundry Detergent | 14
Laxative | 11
Lightbulbs | 8
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 7
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 12
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 7
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 4
Rice: Rice Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 11
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 11
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 8
Shake & Bake | 20
Shaving Needs | 10
Shoe Care | 10
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 16
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 14
Stationery | 8
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 9
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 15
Wax Paper | 12
Wheat Germ | 3
Windshield Washer Fluid | 13` },
  s64: { id: 's64', name: "Swanzey", state: 'NH', number: '64', address: "11 West Swanzey Road, Swanzey, NH 03446", lat: 42.910129, lng: -72.296833,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-64-10-04-2024-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 12
Ammonia | 14
Applesauce | 7
Automotive | 13
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 21
Bakeware | 12
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 11
Batteries | 9
Beans: Baked | 2
Beans: Dry | 5
Beer | 18
Bleach | 14
Bouillon Cubes | 8
Bread | 21
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 5
Cake Mix | 6
Candles: Birthday | Bakery
Candles: Household | 14
Candy | 7
Canning Supplies | 2
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Shrimp Case
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 11
Cookies | 7
Cottage Cheese | 1
Crackers | 7
Cranberry Sauce | 7
Croutons | 2
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 9
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 14
Eggs | 1
Electrical Supplies | 9
Escargot | 2
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 14
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 12
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 3
Gravy | 5
Grits | 3
Ham Glaze | 2
Hamburger Helper | 4
Honey | 7
Household Cleaners | 14
Ice Cream | 22
Ice Cream Cones | 21
Ice Cubes | 21
Iced Tea Mix | 8
Jam & Jelly | 7
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 1
Kool Aid | 15
Kosher Foods | 8
Laundry Detergent | 14
Laxative | 11
Lightbulbs | 9
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 7
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 12
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 7
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 4
Peanut Butter | 7
Pie Filling | 6
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 8
Rubbing Alcohol | 11
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 9
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 8
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 9
Soda | 16
Soup | 8
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 14
Stationery | 9
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vinegar | 2
Vitamins | 9
Water: Distilled-Spring | 15
Wax Paper | 12
Wine | 18
Windshield Washer Fluid | 13` },
  s65: { id: 's65', name: "New Bedford", state: 'MA', number: '65', address: "122 Sawyer Street, New Bedford, MA 02746", lat: 41.657587, lng: -70.92226,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-65-2026-04-24.pdf",
    guide: `
Air Freshener | 16
Aluminum Foil | 10
Ammonia | 16
Applesauce | 9
Automotive | 15
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 21
Bakeware | 10
Baking Needs | 8
Barbecue Sauce | 2
Bath Tissue | 13
Batteries | 13
Beans: Baked | 2
Beans: Dry | 2
Bisquick | 9
Bleach | 16
Bouillon Cubes | 10
Bread | 22
Bread Crumbs | Back Main Aisle
Brooms | 16
Bug Spray | 15
Butter | 1
Cake Mix | 8
Candles: Birthday | 8
Candles: Household | 16
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 15
Cereal | 4
Charcoal | 15
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 3
Cherries: Canned | 9
Cherries: Jar | Produce Dept
Chowder: Clam-Corn-Potato | 10
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 11
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 3
Deodorant | 12
Detergent: Dish-Dishwasher | 16
Detergent: Laundry | 16
Diapers | 11
Disinfectant Spray | 16
Dog Food-Dog Needs | 15
Drain Cleaner | 16
Dried Fruit: Currants-Dates | 14
Dried Fruit: Prunes-Raisins | 14
Dye: Fabric | 16
Eggs | 1
Electrical Supplies | 13
Escargot | 3
Eye Care | 12
Facial Tissue | 11
Fabric Softener | 16
Feminine Needs | 13
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 10
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 20 & 21
Gloves: Work | 16
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 2
Hamburger Helper | 5
Honey | 9
Household Cleaners | 16
Ice Cream | 22
Ice Cream Cones | Produce Dept
Ice Cubes | 21
Iced Tea Mix | 17
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 2
Kitchen Gadgets | 2 & 10
Kool Aid | 17
Kosher Foods | 6
Laundry Detergent | 16
Laxative | 11
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 16
Mouthwash | 12
Mushrooms: Canned | 7
Mustard | 2
Napkins | 14
Noodles | 5
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 14
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 15
Olives | 2
Pancake Mix | 9
Paper: Cups-Plates | 14
Paper: Towels | 14
Pasta | 5
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 10 & 14
Pop Tarts | 4
Popping Corn | 14
Potato Chips | 19
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 14
Razor Blades | 12 & Checkout
Rice: Packaged | 5 & 6
Rice: Cakes | 4
Rubbermaid | 10
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 13
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco | 2
Sauce: Soy-Tartar | 3
Shake & Bake | Back Main Aisle
Shaving Needs | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 18
Soup | 10
Spaghetti Sauce | 5
Spam | 3
Spices | 8
Sponges | 16
Stationery | 11
Steel Wool | 16
Straws | 14
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 12
Toothpicks | 14
Tuna: Canned | 3
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 12
Water: Distilled-Spring | 17
Wax Paper | 10
Wheat Germ | 4
Windshield Washer Fluid | 15` },
  s66: { id: 's66', name: "Hooksett", state: 'NH', number: '66', address: "30 Market Drive, Hooksett, NH 03106", lat: 43.044511, lng: -71.46871,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-66-2026-1-27.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 12
Ammonia | 14
Applesauce | 7
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 12
Baking Needs | 6
Barbecue Sauce | 2
Bath Tissue | 9
Batteries | 11
Beans: Baked | 2
Beans: Dry | 5
Beer | 18
Bisquick | 3
Bleach | 14
Bouillon Cubes | 7
Bread | 17
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Cake Mix | 6
Candles: Birthday | 6 & Bakery
Candles: Household | 14
Candy | 12
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 3
Charcoal | 13
Cheese: Grated Parmesan | 4
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 7
Cherries: Canned | 6
Cherries: Jar | 7
Chowder: Clam-Corn-Potato | 7
Clams: Canned-Minced-Juice | 2
Coffee | 6
Cold Remedies | 10
Cookies | 17
Cottage Cheese | 1
Crackers | 17
Cranberry Sauce | 7
Croutons | Produce & 2
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 7
Dried Fruit: Prunes-Raisins | 7
Dye: Fabric | 14
Eggs | 1
Energy Drinks | 16
Evaporated Milk | 6
Eye Care | 10
Facial Tissue | 9
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 6
Food Coloring | 6
Freezer Wrap | 12
Fruit: Canned | 7
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gatorade | 5
Gloves: Work | 14
Granola Bars | 3
Gravy | 5
Ham Glaze | 2
Hamburger Helper | 4
Honey | 3
Household Cleaners | 14
Ice Cream | 22
Ice Cream Cones | 22
Ice Cubes | 20
Jam & Jelly | 7
Jello | 6
Juice | 5
Ketchup | 2
Kitchen Gadgets | 12
Kool Aid | 16
Kosher Foods | 7
Laundry Detergent | 14
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 4
Magazines | Registers
Mayonnaise | 2
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 2
Milk: Fluid | 1
Milk: Evaporated-Powdered | 6
Molasses | 3
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 5
Mustard | 2
Napkins | 9
Noodles | 4
Nuts: Baking | 6
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 2
Oil: Olive-Vegetable | 2
Oil: Motor | 13
Olives | 2
Pancake Mix | 3
Paper: Cups-Plates | 12
Paper: Towels | 9
Pasta | 4
Peanut Butter | 7
Pie Filling | 6
Pizza: Frozen | 19
Plasticware | 12
Pop Tarts | 3
Popping Corn | 8
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 5
Pudding Mix | 6
Raisins | 7
Razor Blades | 11 & Checkout
Rice: Packaged | 4
Rice: Cakes | 3
Rubbermaid | 12
Rubbing Alcohol | 10
Salad Dressing | 2
Salt | 6
Sanitary Napkins | 11
Sardines: Canned | 2
Sauce: BBQ-Steak | 2
Sauce: Tabasco | 2
Sauce: Tartar | Back Main
Sauce: Soy | 7
Shake & Bake | 20
Shaving Needs | 11
Shoe Care | 9
Shortening | 2
Soap: Bar-Body-Hand-Liquid | 11
Soda | 16
Soup | 7
Spaghetti Sauce | 4
Spam | 2
Spices | 6
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 6
Taco: Sauce-Shells | 2
Tea Bags | 6
Tissue: Bath | 11
Tissue: Facial | 9
Tomato: Canned | 4
Tomato: Fresh | Produce Dept
Tomato: Paste | 4
Tomato: Sauce | 4
Toothbrushes-Toothpaste | 10
Toothpicks | 9
Tuna: Canned | 2
Vegetables: Canned | 5
Vegetables: Fresh | Produce Dept
Vitamin Water | 5
Vinegar | 2
Vitamins | 10
Water: Distilled-Spring | 15
Wax Paper | 12
Windshield Washer Fluid | 13
Wine | 18` },
  s67: { id: 's67', name: "Manchester", state: 'NH', number: '67', address: "460 Elm Street, Manchester, NH 03101", lat: 42.983961, lng: -71.464608,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-67-2026-03-18.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 14
Ammonia | 15
Applesauce | 2
Automotive | 15
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 14
Bags: Garbage-Trash | 14
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 14
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 15
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 15
Bouillon Cubes | 2
Bread | 17
Bread Crumbs | 19
Brooms | 15
Bug Spray | 15
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 16
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 15
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Shrimp Case
Chinese Food: Canned | 10
Cherries: Canned | 2
Cherries: Jar | 2
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 13
Cookies | 17
Cottage Cheese | 1
Crackers | 17
Cranberry Sauce | 2
Croutons | 3
Deodorant | 13
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 11
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates-Prunes | Front of Produce Department
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 13
Escargot | 3
Eye Care | 12
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 14
Fruit: Canned | 2
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 15
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | Frozen Foods
Iced Tea Mix | 8
Jam & Jelly | 2
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 7
Kool Aid | 8
Laundry Detergent | 15
Laxative | 13
Lightbulbs | 15
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 15
Mouthwash | 12
Mushrooms: Canned | 6
Mustard | 3
Napkins | 11
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | Front of Produce
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 15
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 14
Paper: Towels | 11
Pasta | 5
Peanut Butter | 2
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 4
Popping Corn | Front of Produce
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | Front of Produce
Razor Blades | 12 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 14
Rubbing Alcohol | 13
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: Chili | Shrimp Case
Sauce: BBQ-Steak-Tartar | 3
Sauce: Soy | 10
Sauce: /Tabasco | 3
Shake & Bake | 20
Shaving Needs | 12
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 13
Soda | 16
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 13
Steel Wool | 15
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 12
Toothpicks | 11
Tuna: Canned | 3
Vacuum Cleaner Bags | 15
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 12
Water: Distilled-Spring | 8
Wax Paper | 14
Wheat Germ | 4
Windshield Washer Fluid | 15` },
  s68: { id: 's68', name: "Brockton", state: 'MA', number: '68', address: "200 Westgate Drive, Brockton, MA 02301", lat: 42.093075, lng: -71.054513,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/68-BROCKTON-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 8
Ammonia | 15
Applesauce | 8
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 12
Batteries | 10
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 15
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19
Brooms | 15
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 9
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 10
Disinfectant Spray | 15
Dog Food-Dog Needs | 13
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 10
Escargot | 3
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 15
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 15
Ice Cream | 21
Ice Cream Cones | 21
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 16
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 6
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 12
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 14
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 14
Potato Chips | 14
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 5 & 9
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Steak-Tartar | 3
Sauce: Tabasco | 3
Sauce: Soy | 9
Shake & Bake | 20
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 10
Steel Wool | 15
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 12
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 12
Tuna: Canned | 3
Vacuum Cleaner Bags | 15
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 8
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s69: { id: 's69', name: "Bourne", state: 'MA', number: '69', address: "1 Factory Outlet Way, Bourne, MA 02561", lat: 41.771072, lng: -70.546387,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/69-BOURNE-SHOPPERS-GUIDE-2023-JUN-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 11
Ammonia | 15
Applesauce | 11
Automotive | 14
Baby Food | 10
Baby Powder | 9
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 11
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 8
Beans: Baked | 8
Beans: Dry | 8
Bisquick | 11
Bleach | 15
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | Back Main Aisle
Brooms | 15
Bug Spray | 14
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 11
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 11
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 10
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 8
Escargot | 3
Eye Care | 9
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 11
Fruit: Canned | 11
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 11
Household Cleaners | 15
Ice Cream | 21
Ice Cream Cones | 21
Ice Cubes | 19
Iced Tea Mix | 16
Jam & Jelly | 11
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 16
Laundry Detergent | 15
Laxative | 10
Lightbulbs | 8
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 11
Mops | 15
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 12
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 11
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 11
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 4
Popping Corn | 12
Potato Chips | 12
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 11
Razor Blades | 9 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Steak-Tartar | 3
Sauce: Tabasco | 3
Sauce: Soy | 8
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 9
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 9
Steel Wool | 15
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 13
Tuna: Canned | 3
Vacuum Cleaner Bags | 15
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 16
Wax Paper | 11
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s70: { id: 's70', name: "West Bridgewater", state: 'MA', number: '70', address: "352 West Center Street, West Bridgewater, MA 02379", lat: 42.015011, lng: -71.032536,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/70-WEST-BRIDGEWATER-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 8
Ammonia | 15
Applesauce | 8
Automotive | 14
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 13
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 12
Batteries | 10
Beans: Baked | 3
Beans: Dry | 6
Beans: Goya | 6
Bisquick | 8
Bleach | 15
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19
Brooms | 15
Bug Spray | 14
Butter | 1
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Above Shrimp Case
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 10
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 15
Eggs | 1
Electrical Supplies | 10
Escargot | 2
Eye Care | 12
Facial Tissue | 10
Fabric Softener | 15
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 15
Ice Cream | 21
Ice Cream Cones | Freezer Wall
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 13
Kool Aid | 16
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 11 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 10
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tabasco-Tartar | 3
Sauce: Soy | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 11
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 2
Spices | 7
Sponges | 15
Stationery | 10
Steel Wool | 15
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 12
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 2
Vacuum Cleaner Bags | 15
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 8
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s71: { id: 's71', name: "Bedford", state: 'NH', number: '71', address: "539 Donald Street, Bedford, NH 03110", lat: 42.970071, lng: -71.508407,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-71-2026-7-20.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 8
Ammonia | 13
Applesauce | 8
Automotive | 12
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 11
Batteries | 12
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 4
Bleach | 13
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | 18
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 10
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 12
Escargot | 3
Eye Care | 11
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Next to Floral
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | 20
Ice Cubes | Frozen Foods
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 11
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 6
Mops | 13
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 8
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 8
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 8
Paper: Towels | 12
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 8
Pop Tarts | 4
Popping Corn | 9
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 2
Sauce: Soy | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 10
Steel Wool | 13
Straws | 8
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 8
Tuna: Canned | 3
Vacuum Cleaner Bags | 13
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 14
Wax Paper | 8
Wheat Germ | 4
Windshield Washer Fluid | 12` },
  s72: { id: 's72', name: "Westford", state: 'MA', number: '72', address: "6A Cornerstone Square, Westford, MA 01886", lat: 42.565695, lng: -71.426411,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/72-WESTFORD-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 8
Automotive | 13
Baby Food | 11
Baby Powder | 9
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 10
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 13
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 8
Bleach | 12
Bouillon Cubes | 2
Bread | 19
Bread Crumbs | Back Main Aisle
Brooms | 12
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 11
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 9
Cookies | 8
Cottage Cheese | 1
Crackers | 8
Cranberry Sauce | 8
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 11
Disinfectant Spray | 12
Dog Food-Dog Needs | 13
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 11
Dried Fruit: Prunes-Raisins | 11
Dye: Fabric | 9
Eggs | 1
Electrical Supplies | 13
Escargot | 3
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 11
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 12
Ice Cream | 19
Ice Cream Cones | 19
Ice Cubes | 18
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 10
Kool Aid | 14
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 3
Napkins | 10
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 11
Paper: Towels | 10
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 10
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 11
Razor Blades | 9 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 11
Rubbing Alcohol | 9
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tabasco-Tartar | 3
Sauce: Soy | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 9
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 12
Stationery | 10
Steel Wool | 12
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 14
Wax Paper | 11
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s73: { id: 's73', name: "Hudson", state: 'MA', number: '73', address: "8 Highland Commons East, Hudson, MA 01749", lat: 42.393818, lng: -71.593734,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-73-2025-06-23.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 9
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6, 8
Bisquick | 4
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery, 7
Candles: Household | 14
Candy | 9
Canning Supplies | Produce
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 12
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 12
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 12
Escargot | 3
Eye Care | 11
Facial Tissue | 10
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 14
Ice Cream | 21
Ice Cream Cones | 21
Ice Cubes | 19
Iced Tea Mix | 15
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 9
Kool Aid | 15
Laundry Detergent | 14
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 10
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 17
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 17
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 9
Razor Blades | 12 & Checkout
Rice: Packaged | 5,8
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 3
Shake & Bake | 20
Shaving Needs | 12
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 16
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 14
Stationery | 12
Steel Wool | 14
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 10
Tuna: Canned | 3
Vacuum Cleaner Bags | 14
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 15
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s74: { id: 's74', name: "Revere", state: 'MA', number: '74', address: "275 Squire Road, Revere, MA 02151", lat: 42.427513, lng: -71.010578,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/74-REVERE-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 10
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 10
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6 & 7
Bisquick | 9
Bleach | 14
Bouillon Cubes | 9
Bread | 18
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 2
Butter Buds | 7
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 10
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 6
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 8
Cold Remedies | 11
Cookies | 18
Cottage Cheese | 2
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 12
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 12
Disinfectant Spray | 14
Dog Food-Dog Needs | 10
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 17
Dried Fruit: Prunes-Raisins | 17
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 12
Escargot | 2
Eye Care | 11
Facial Tissue | 11
Fabric Softener | 14
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 10
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 14
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 20
Iced Tea Mix | 15
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Gadgets | 10
Kool Aid | 15
Laundry Detergent | 14
Laxative | 11
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 13
Noodles | 9
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 17
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 10
Pop Tarts | 4
Popping Corn | 17
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 9
Razor Blades | 11 & Checkout
Rice: Packaged | 5 & 6
Rice: Cakes | 4
Rubbermaid | 10
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 12
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 6
Sauce: /Tabasco | 3
Shake & Bake | 20
Shaving Needs | 11
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 16
Soup | 9
Spaghetti Sauce | 5
Spam | 2
Spices | 8
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 13
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 2
Vacuum Cleaner Bags | 14
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 12
Water: Distilled-Spring | 15
Wax Paper | 10
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s75: { id: 's75', name: "Biddeford", state: 'ME', number: '75', address: "220 Mariner Way, Biddeford, ME 04005", lat: 43.471824, lng: -70.512541,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/SHOPPERS-GUIDE-75-UPDATE-8-12-24-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 12
Ammonia | 13
Applesauce | 4
Automotive | 12
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 15
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 11
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 7
Bleach | 13
Bouillon Cubes | 2
Bread | 15
Bread Crumbs | Back of 17 & 18
Brooms | 13
Bug Spray | 12
Butter | 1
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 15
Cottage Cheese | 1
Crackers | 15
Cranberry Sauce | 4
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 9
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 4
Dried Fruit: Prunes-Raisins | 4
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 11
Escargot | 3
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 4
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Next to Floral
Ham Glaze | 3
Hamburger Helper | 5
Honey | 7
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | Across From Ice Cream
Ice Cubes | 18
Iced Tea Mix | 14
Jam & Jelly | 15
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 12
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 7
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 11
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 7
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 5
Peanut Butter | 15
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 4
Popping Corn | 9
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 4
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 13
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 2
Shake & Bake | 17
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 8
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 11
Steel Wool | 13
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 11
Tissue: Facial | 11
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 14
Wax Paper | 12
Wheat Germ | 4
Windshield Washer Fluid | 12` },
  s76: { id: 's76', name: "South Attleboro", state: 'MA', number: '76', address: "1200 Newport Ave., South Attleboro, MA 02703", lat: 41.90068, lng: -71.354208,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/76-S-ATTLEBORO-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 12
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 12
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6,7
Bisquick | 9
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 8
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 6
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 10
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 10
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 11
Escargot | 3
Eye Care | 11
Facial Tissue | 10
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 9
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 14
Ice Cream | 21
Ice Cream Cones | 21
Ice Cubes | 20
Iced Tea Mix | 8
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Gadgets | 12
Kool Aid | 15
Laundry Detergent | 14
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 12
Noodles | 5
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 5
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 17
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 9
Razor Blades | 11 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9 & 11
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco-Tartar | 3
Sauce: Soy | 6
Shake & Bake | 20
Shaving Needs | 11
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 16
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 8
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 12
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 12
Tuna: Canned | 3
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 15
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s77: { id: 's77', name: "Littleton", state: 'MA', number: '77', address: "301 Constitution Avenue, Littleton, MA 01460", lat: 42.552952, lng: -71.476279,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/77-LITTLETON-MA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 11
Ammonia | 12
Applesauce | 8
Automotive | 10
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 11
Bags: Garbage-Trash | 11
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 11
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 9
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 12
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | Back Main Aisle
Brooms | 12
Bug Spray | 10
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 12
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 4
Charcoal | 10
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 9
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 12
Eggs | 1
Electrical Supplies | 9
Escargot | 3
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 11
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 17 & 18
Gloves: Work | 12
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 12
Ice Cream | 19
Ice Cream Cones | Produce Dept
Ice Cubes | 17
Iced Tea Mix | 7
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 13
Laundry Detergent | 12
Laxative | 9
Lightbulbs | 9
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 3
Napkins | 10
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 10
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 10
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 15
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 9 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 11
Rubbing Alcohol | 9
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 3
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 9
Soda | 14
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 12
Stationery | 9
Steel Wool | 12
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 10
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 13
Wax Paper | 11
Wheat Germ | 4
Windshield Washer Fluid | 10` },
  s78: { id: 's78', name: "Athol", state: 'MA', number: '78', address: "147 Tower Rd, Athol, MA 01331", lat: 42.581012, lng: -72.188719,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/78-ATHOL-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 8
Automotive | 13
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 9
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 10
Batteries | 10
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 8
Bleach | 14
Bouillon Cubes | 8
Bread | 18
Bread Crumbs | 19
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 2
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 12
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 4
Dried Fruit: Prunes-Raisins | 4
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 13
Escargot | 3
Eye Care | 12
Facial Tissue | 10
Fabric Softener | 14
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Freezer Wall
Ice Cubes | 20
Iced Tea Mix | 15
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 2
Kitchen Gadgets | 9
Kool Aid | 15
Laundry Detergent | 14
Laxative | 12
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 2
Napkins | 9
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 17
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 17
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 4
Razor Blades | 12 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 12
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 2
Sauce: Tabasco-Tartar | 2
Sauce: Soy | 8
Shake n Bake | 19
Shaving Needs | 12
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 16
Soup | 8
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 14
Stationery | 10
Steel Wool | 14
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 15
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s79: { id: 's79', name: "Waltham", state: 'MA', number: '79', address: "110 Market Place Drive, Waltham, MA 02451", lat: 42.381054, lng: -71.262846,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/79-WALTHAM-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 10
Ammonia | 15
Applesauce | 9
Automotive | 14
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 10
Bags: Garbage-Trash | 10
Bakery: Fresh | Front Corner
Bakery: Packaged | 19
Bakeware | 10
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 13
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 9
Bleach | 15
Bouillon Cubes | 9
Bread | 19
Bread Crumbs | 20
Brooms | 15
Bug Spray | 14
Butter | 2
Butter Buds | 7
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 2
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 6
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 8
Cold Remedies | 12
Cookies | 19
Cottage Cheese | 1
Crackers | 19
Cranberry Sauce | 9
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 11
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 4
Dried Fruit: Prunes-Raisins | 4
Dye: Fabric | 15
Eggs | 2
Electrical Supplies | 13
Escargot | 2
Eye Care | 11
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 10
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 20 & 21
Gloves: Work | 15
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 15
Ice Cream | 22
Ice Cream Cones | Produce Dept
Ice Cubes | Bakery
Iced Tea Mix | 16
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Gadgets | 10
Kool Aid | 16
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 10
Noodles | 5
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 18
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 10
Pop Tarts | 4
Popping Corn | 18
Potato Chips | 18
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 4
Razor Blades | 11 & Checkout
Rice: Packaged | 5,6
Rice: Cakes | 4
Rubbermaid | 10
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 11
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 6
Sauce: /Tabasco | 3
Shake & Bake | 21
Shaving Needs | 11
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 13
Soda | 17
Soup | 9
Spaghetti Sauce | 5
Spam | 2
Spices | 8
Sponges | 15
Stationery | 13
Steel Wool | 15
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 10
Tuna: Canned | 2
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 12
Water: Distilled-Spring | 16
Wax Paper | 10
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s80: { id: 's80', name: "Plymouth", state: 'MA', number: '80', address: "1 Commerce Way, Plymouth, MA 02360", lat: 41.942047, lng: -70.713221,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/80-PLYMOUTH-MA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 13
Ammonia | 15
Applesauce | 8
Automotive | 14
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 13
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 15
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19
Brooms | 15
Bug Spray | 14
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 14
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main
Chinese Food: Canned | 2
Cherries: Canned | 8
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 12
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 12
Eggs | 2
Electrical Supplies | 14
Escargot | 3
Eye Care | 12
Facial Tissue | 10
Fabric Softener | 15
Feminine Needs | 12
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 13
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 15
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 13
Kool Aid | 16
Laundry Detergent | 15
Laxative | 10
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 14
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 11 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 13
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 12
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 3
Shake & Bake | 20
Shaving Needs | 11
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 15
Stationery | 12
Steel Wool | 15
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 13
Wheat Germ | 4
Windshield Washer Fluid | 14` },
  s81: { id: 's81', name: "Rochester", state: 'NH', number: '81', address: "120 Marketplace Blvd. Unit 1, Rochester, NH 03867", lat: 43.331459, lng: -71.011014,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/81-ROCHESTER-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 12
Ammonia | 13
Applesauce | 9
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 10
Beans: Baked | 2
Beans: Dry | 6
Bisquick | 4
Bleach | 13
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | 18 & 19
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 9
Canning Supplies | Produce
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 9
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 11
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 13
Eggs | 1
Electrical Supplies | 10
Escargot | 3
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Floral Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Dept
Ice Cubes | 19
Iced Tea Mix | 14
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 12
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 11
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 9
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 9
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy/Tabasco | 2
Shake & Bake | 18
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 10
Steel Wool | 13
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 9
Tuna: Canned | 3
Vacuum Cleaner Bags | 13
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 14
Wax Paper | 12
Wheat Germ | 4
Windshield Washer Fluid | 12` },
  lynn: { id: 'lynn', name: "Lynn", state: 'MA', number: '82', address: "40 Federal Street, Lynn, MA 01905", lat: 42.463581, lng: -70.967831,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/82-LYNN-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 15
Aluminum Foil | 14
Ammonia | 15
Applesauce | 9
Automotive | 13
Baby Food | 12
Baby Powder | 12
Bags: Lunch-Sandwich | 14
Bags: Garbage-Trash | 14
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 13
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 13
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 15
Bouillon Cubes | 9
Bread | 18
Bread Crumbs | 20
Brooms | 15
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 15
Candy | 9
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 14
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 9
Clams: Canned-Minced-Juice | 2
Coffee | 7
Cold Remedies | 12
Cookies | 18
Cottage Cheese | 2
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 15
Detergent: Laundry | 15
Diapers | 12
Disinfectant Spray | 15
Dog Food-Dog Needs | 14
Drain Cleaner | 15
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 15
Eggs | 2
Electrical Supplies | 11
Escargot | 2
Eye Care | 11
Facial Tissue | 13
Fabric Softener | 15
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 2
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 14
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 15
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 15
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Utensils | 9
Kool Aid | 16
Laundry Detergent | 15
Laxative | 12
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 2
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 15
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 10
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 13
Paper: Towels | 13
Pasta | 5
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 14
Pop Tarts | 4
Popping Corn | 10
Potato Chips | 10
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 9
Razor Blades | 12 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 12 & 14
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 2
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar/Tabasco | 3
Sauce: Soy | 8
Shake & Bake | 19
Shaving Needs | 12
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 12
Soda | 17
Soup | 9
Spaghetti Sauce | 5
Spam | 2
Spices | 7
Sponges | 15
Stationery | 12
Steel Wool | 15
Straws | 13
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 13
Tissue: Facial | 13
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 13
Tuna: Canned | 2
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 14
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s83: { id: 's83', name: "Fall River", state: 'MA', number: '83', address: "600 William S. Canning Blvd., Fall River, MA 02721", lat: 41.677181, lng: -71.162113,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/83-FALL-RIVER-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 13
Ammonia | 14
Applesauce | 8
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 13
Bags: Garbage-Trash | 13
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 14
Bouillon Cubes | 8
Bread | 18
Bread Crumbs | 20
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 8
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 8
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 8
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 12
Escargot | 3
Eye Care | 12
Facial Tissue | 10
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 13
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 14
Ice Cream | Produce Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 20
Iced Tea Mix | 16
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Utensils | 13
Kool Aid | 15
Laundry Detergent | 14
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 13
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 13
Pop Tarts | 4
Popping Corn | 16
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 12 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 13
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar/Tabasco | 3
Sauce: Soy | 9
Shake & Bake | 19
Shaving Needs | 12
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 17
Soup | 8
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 14
Stationery | 12
Steel Wool | 13
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 12
Toothpicks | 10
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 12
Water: Distilled-Spring | 15
Wax Paper | 13
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s84: { id: 's84', name: "Salem", state: 'NH', number: '84', address: "69 Central Street, Salem, NH 03079", lat: 42.7809715, lng: -71.2308349,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/84-SALEM-NH-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 8
Ammonia | 13
Applesauce | 8
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 13
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 13
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | 19
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | 7 & Bakery Case
Candles: Household | 13
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 11
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 13
Escargot | 3
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | I C Corner
Ice Cubes | 19
Iced Tea Mix | 14
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 11
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 13
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 8
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | Ice Cream Corner
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 8
Paper: Towels | 12
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 8
Pop Tarts | 4
Popping Corn | 9
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 6
Raisins | 8
Razor Blades | 11
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 2
Shake & Bake | 18
Shaving Needs | 11
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 10
Steel Wool | 13
Straws | 8
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 8
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 14
Wax Paper | 8
Wheat Germ | 4
Windshield Washer | 12` },
  s85: { id: 's85', name: "Westbrook", state: 'ME', number: '85', address: "90 Rock Row, Westbrook, ME 04092", lat: 43.6699152, lng: -70.337551,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/85-WESTBROOK-SHOPPERS-GUIDE-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 8
Ammonia | 13
Applesauce | 8
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 13
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 4
Bleach | 13
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | Back of 18 & 19
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 8
Canning Supplies | Produce
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 11
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 13
Escargot | 3
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 4
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | I C Corner
Ice Cubes | 18
Iced Tea Mix | 14
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 8
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 11
Lightbulbs | 13
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 4
Mops | 13
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 8
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 4
Paper: Cups-Plates | 8
Paper: Towels | 12
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 8
Pop Tarts | 4
Popping Corn | 9
Potato Chips | 9
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 10
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 12
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 2
Shake & Bake | 18
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 10
Steel Wool | 13
Straws | 8
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 8
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 14
Wax Paper | 8
Wheat Germ | 4
Windshield Washer | 12` },
  s86: { id: 's86', name: "Plymouth", state: 'NH', number: '86', address: "34 Ridge View Lane, Plymouth, NH 03264", lat: 43.7717862, lng: -71.7249579,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/86-PLYMOUTH-SHOPPERS-GUIDE-MAY-2023-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 9
Ammonia | 13
Applesauce | 8
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 9
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 13
Bouillon Cubes | 2
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 13
Bug Spray | 12
Butane | 12
Butter | 1
Cake Mix | 7
Candles: Birthday | 7 & Bakery Case
Candles: Household | 12
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 8 & 17
Cottage Cheese | 1
Crackers | 8 & 17
Cranberry Sauce | 8
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 11
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Date | 4 & 21
Dried Fruit: Prunes-Raisins | 4
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 12
Escargot | 3
Eye Care | 10
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | 21
Ice Cubes | Checkout
Iced Tea Mix | 14
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 9
Kool Aid | 14
Kosher Foods | 5
Laundry Detergent | 13
Laxative | 11
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 13
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 9
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | Deli & 3
Pancake Mix | 8
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 16
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 4
Razor Blades | 11
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 5
Shake & Bake | Back Main Aisle
Shaving Needs | 11
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 9
Steel Wool | 13
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 14
Wax Paper | 9
Wheat Germ | 4
Windshield Washer | 12` },
  s87: { id: 's87', name: "Maynard", state: 'MA', number: '87', address: "6 Digital Way, Route 27, Maynard, MA 01754", lat: 42.4186573, lng: -71.4483864,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/Shoppers-Guide-87-2025-06-17.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 8
Ammonia | 14
Applesauce | 9
Automotive | 15
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 12
Batteries | 10
Beans: Baked | 3
Beans: Dry | 8
Bisquick | 9
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | Back Main
Brooms | 14
Bug Spray | 15
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles:Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 15
Cereal | 4
Charcoal | 15
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 8
Cherries: Canned | 9
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 9
Cottage Cheese | 1
Crackers | 9
Cranberry Sauce | 9
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 15
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 18
Dried Fruit: Prunes-Raisins | 18
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 10
Escargot | 3
Eye Care | 10
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 6
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 18
Jam & Jelly | 9
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Utensils | 8
Kool Aid | 18
Laundry Detergent | 14
Laxative | 10
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 9
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 12
Noodles | 2
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 18
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 15
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 12
Paper: Towels | 12
Pasta | 5
Peanut Butter | 9
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 18
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 18
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tartar | Back Main
Sauce: Soy | 8
Sauce: /Tabasco | 3
Shake & Bake | Back Main
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 17
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 14
Stationery | 10
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 8
Wheat Germ | 4
Windshield Washer Fluid | 15` },
  s89: { id: 's89', name: "Warwick", state: 'RI', number: '89', address: "25 Pace Boulevard, Warwick, RI 02886", lat: 41.7025411, lng: -71.4981289,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/89-WARWICK-SHOPPERS-GUIDE-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 6
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 9
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 11
Batteries | 11
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 6
Bleach | 14
Bouillon Cubes | 2
Bread | 17
Bread Crumbs | 5
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 8
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 6
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 6
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 10
Cookies | 17
Cottage Cheese | 1
Crackers | 17
Cranberry Sauce | 6
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 10
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 12
Dried Fruit: Prunes-Raisins | 12
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 11
Escargot | 3
Eye Care | 10
Facial Tissue | 11
Fabric Softener | 14
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 9
Fruit: Canned | 6
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 14
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 6
Household Cleaners | 14
Ice Cream | 19
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 15
Jam & Jelly | 6
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Utensils | 9
Kool Aid | 15
Laundry Detergent | 14
Laxative | 10
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 6
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 9
Noodles | 2
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 12
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 6
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Peanut Butter | 6
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 12
Potato Chips | 12
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 12
Razor Blades | 10 & Checkout
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 3
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 16
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 8
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vacuum Cleaner Bags | 14
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 15
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s90: { id: 's90', name: "Johnston", state: 'RI', number: '90', address: "1300 Hartford Avenue, Johnston, RI 02919", lat: 41.822429, lng: -71.4949586,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/90-JOHNSTON-SHOPPERS-GUIDE-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 8
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 12
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 9
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 5
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 8
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 8
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 12
Cookies | 17
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 10
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 12
Escargot | 3
Eye Care | 12
Facial Tissue | 10
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 9
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 14
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 3
Honey | 9
Household Cleaners | 14
Ice Cream | 19
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 17
Jam & Jelly | 18
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Utensils | 9
Kool Aid | 17
Laundry Detergent | 14
Laxative | 12
Lightbulbs | 12
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 6
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 10
Noodles | 2
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 9
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 10
Paper: Towels | 10
Pasta | 5
Peanut Butter | 8
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 16
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 9
Razor Blades | 12 & Cust. Service
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 11
Rubbing Alcohol | 12
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 2
Sauce: /Tabasco | 3
Shake & Bake | Back Main Aisle
Shaving Needs | 12
Shoe Care | 12
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 8
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 10
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vacuum Cleaner Bags | 14
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 17
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s91: { id: 's91', name: "Hanover", state: 'MA', number: '91', address: "1775 Washington Street, Hanover, MA 02339", lat: 42.1476127, lng: -70.8422111,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/91-HANOVER-MA-SHOPPERS-GUIDE_0-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 10
Baby Powder | 10
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 9
Baking Needs | 7
Barbecue Sauce | 2
Bath Tissue | 12
Batteries | 11
Beans: Baked | 3
Beans: Dry | 8
Bisquick | 9
Bleach | 14
Bouillon Cubes | 6
Bread | 18
Bread Crumbs | 19 & 20
Brooms | 14
Bug Spray | 13
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 2
Chinese Food: Canned | 6
Cherries: Canned | 9
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 6
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 11
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 10
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 9
Dried Fruit: Prunes-Raisins | 9
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 11
Escargot | 3
Eye Care | 11
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 8
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 14
Ice Cream | Freezer Wall
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 17
Jam & Jelly | 18
Jello | 7
Juice | 8
Ketchup | 2
Kitchen Utensils | 9
Kool Aid | 17
Laundry Detergent | 14
Laxative | 11
Lightbulbs | 11
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 9
Mops | 14
Mouthwash | 10
Mushrooms: Canned | 8
Mustard | 2
Napkins | 12
Noodles | 6
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 9
Paper: Towels | 12
Pasta | 5
Peanut Butter | 18
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 16
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 8
Pudding Mix | 7
Raisins | 9
Razor Blades | 11 & Customer Servic
Rice: Packaged | 5 & 6
Rice: Cakes | 4
Rubbermaid | 12
Rubbing Alcohol | 11
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 2
Sauce: Tartar | 3
Sauce: Soy | 6
Sauce: /Tabasco | 3
Shake & Bake | 19
Shaving Needs | 11
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 11
Soda | 15
Soup | 6
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 14
Stationery | 11
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 12
Tuna: Canned | 3
Vacuum Cleaner Bags | 14
Vegetables: Canned | 8
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 10
Water: Distilled-Spring | 17
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s92: { id: 's92', name: "Concord", state: 'NH', number: '92', address: "15 Merchants Way, Concord, NH 03301", lat: 43.2879428, lng: -71.5783259,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/92-CONCORD-SHOPPERS-GUIDE-AUG-2022-2.pdf",
    guide: `
Air Freshener | 12
Aluminum Foil | 8
Ammonia | 12
Applesauce | 8
Automotive | 11
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 8
Bags: Garbage-Trash | 8
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 8
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 9
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 12
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | 18 & 19
Brooms | 12
Bug Spray | 11
Butter | 1
Butter Buds | 7
Cake Mix | 7
Candles: Birthday | 7 & Bakery Case
Candles: Household | 12
Candy | 8
Canning Supplies | Produce Dept
Cat Food-Cat Litter-Cat Needs | 11
Cereal | 4
Charcoal | 11
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 8
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 8
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 12
Detergent: Laundry | 12
Diapers | 9
Disinfectant Spray | 12
Dog Food-Dog Needs | 11
Drain Cleaner | 12
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 12
Eggs | 2
Electrical Supplies | 9
Escargot | 3
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 12
Feminine Needs | 9
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 8
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 12
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 12
Ice Cream | Freezer Wall
Ice Cream Cones | I C Corner
Ice Cubes | 18 & 19
Iced Tea Mix | 14
Jam & Jelly | 16
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 2
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 12
Laxative | 10
Lightbulbs | 9
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 12
Mouthwash | 9
Mushrooms: Canned | 6
Mustard | 3
Napkins | 8
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 13
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 11
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 8
Paper: Towels | 11
Pasta | 5
Peanut Butter | 16
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 8
Pop Tarts | 4
Popping Corn | 13
Potato Chips | 13
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 9 & Courtesy Booth
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 8
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 9
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 2
Shake & Bake | Back Main Aisle
Shaving Needs | 9
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 12
Stationery | 9
Steel Wool | 12
Straws | 8
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 9
Toothpicks | 8
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 14
Wax Paper | 8
Wheat Germ | 4
Windshield Washer | 11` },
  s93: { id: 's93', name: "Shrewsbury", state: 'MA', number: '93', address: "200 Hartford Tpke, Shrewsbury, MA 01545", lat: 42.2473045, lng: -71.7263334,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/93-SHREWSBURY-MA-SHOPPERS-GUIDE-2023-JAN-2.pdf",
    guide: `
Air Freshener | 14
Aluminum Foil | 9
Ammonia | 14
Applesauce | 9
Automotive | 13
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 18
Bakeware | 8
Baking Needs | 8
Barbecue Sauce | 3
Bath Tissue | 12
Batteries | 10
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 9
Bleach | 14
Bouillon Cubes | 2
Bread | 18
Bread Crumbs | 19 & 20
Brooms | 14
Bug Spray | 13
Butter | 1
Cake Mix | 8
Candles: Birthday | Bakery Case
Candles: Household | 14
Candy | 9
Canning Supplies | 20
Cat Food-Cat Litter-Cat Needs | 13
Cereal | 4
Charcoal | 13
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 6
Cherries: Canned | 9
Cherries: Jar | 9
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 8
Cold Remedies | 10
Cookies | 18
Cottage Cheese | 1
Crackers | 18
Cranberry Sauce | 9
Croutons | 3
Deodorant | 11
Detergent: Dish-Dishwasher | 14
Detergent: Laundry | 14
Diapers | 11
Disinfectant Spray | 14
Dog Food-Dog Needs | 13
Drain Cleaner | 14
Dried Fruit: Currants-Dates | 17
Dried Fruit: Prunes-Raisins | 17
Dye: Fabric | 14
Eggs | 2
Electrical Supplies | 10
Escargot | 3
Eye Care | 10
Facial Tissue | 12
Fabric Softener | 14
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 8
Food Coloring | 8
Freezer Wrap | 9
Fruit: Canned | 9
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 14
Granola Bars | 4
Gravy | 7
Grits | 4
Ham Glaze | 3
Hamburger Helper | 5
Honey | 9
Household Cleaners | 14
Ice Cream | Bakery Corner
Ice Cream Cones | Produce Corner
Ice Cubes | 19
Iced Tea Mix | 16
Jam & Jelly | 9
Jello | 8
Juice | 7
Ketchup | 3
Kitchen Utensils | 12
Kool Aid | 16
Laundry Detergent | 14
Laxative | 10
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 8
Molasses | 9
Mops | 14
Mouthwash | 11
Mushrooms: Canned | 7
Mustard | 3
Napkins | 12
Noodles | 2
Nuts: Baking | 8
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 17
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 13
Olives | 3
Pancake Mix | 9
Paper: Cups-Plates | 9
Paper: Towels | 12
Pasta | 5
Peanut Butter | 9
Pie Filling | 8
Pizza: Fresh | Market's Kitchen
Plasticware | 12
Pop Tarts | 4
Popping Corn | 17
Potato Chips | 17
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 7
Pudding Mix | 8
Raisins | 17
Razor Blades | 10 & Cust. Service
Rice: Packaged | 5 & 6
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 8
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tartar | 3
Sauce: Soy | 6
Sauce: /Tabasco | 3
Shake & Bake | 20
Shaving Needs | 10
Shoe Care | 10
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 8
Sponges | 14
Stationery | 10
Steel Wool | 14
Straws | 12
Stuffing Mix | Back Main Aisle
Sugar | 8
Taco: Sauce-Shells | 3
Tea Bags | 8
Tissue: Bath | 12
Tissue: Facial | 12
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 12
Tuna: Canned | 3
Vegetables: Canned | 7
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 16
Wax Paper | 9
Wheat Germ | 4
Windshield Washer Fluid | 13` },
  s94: { id: 's94', name: "North Conway", state: 'NH', number: '94', address: "80 Barnes Road, North Conway, NH 03860", lat: 44.0262352, lng: -71.1158479,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/94-NORTH-CONWAY-SHOPPERS-GUIDE-2023-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 9
Ammonia | 13
Applesauce | 8
Automotive | 12
Baby Food | 11
Baby Powder | 11
Bags: Lunch-Sandwich | 9
Bags: Garbage-Trash | 9
Bakery: Fresh | Front Corner
Bakery: Packaged | 17
Bakeware | 9
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 10
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 8
Bleach | 13
Bouillon Cubes | 2
Bread | 17
Bread Crumbs | Back Main Aisle
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | 7 & Bakery Case
Candles: Household | 13
Candy | 8
Canning Supplies | 3
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | 3
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 3
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 8
Cottage Cheese | 1
Crackers | 8
Cranberry Sauce | 8
Croutons | 3
Deodorant | 10
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 11
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 4
Dried Fruit: Prunes-Raisins | 4
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 12
Escargot | 3
Eye Care | 11
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 11
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 9
Fruit: Canned | 8
Fruit: Fresh | Produce Dept
Frozen Foods | 19 & 20
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 8
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | I C Corner
Ice Cubes | 19
Iced Tea Mix | 14
Jam & Jelly | 8
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 9
Kool Aid | 14
Kosher Foods | 2
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 10
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 8
Mops | 13
Mouthwash | 11
Mushrooms: Canned | 6
Mustard | 3
Napkins | 9
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 16
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 8
Paper: Cups-Plates | 9
Paper: Towels | 9
Pasta | 5
Peanut Butter | 8
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 9
Pop Tarts | 4
Popping Corn | 16
Potato Chips | 16
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 4
Razor Blades | 10
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 9
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 11
Sardines: Canned | 3
Sauce: BBQ-Chili-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 5
Shake & Bake | Back Main Aisle
Shaving Needs | 10
Shoe Care | 11
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 9
Steel Wool | 13
Straws | 9
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 11
Toothpicks | 9
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 11
Water: Distilled-Spring | 14
Wax Paper | 9
Wheat Germ | 4
Windshield Washer | 12` },
  s95: { id: 's95', name: "Topsham", state: 'ME', number: '95', address: "169 Topsham Fair Mall Rd., Topsham, ME 04086", lat: 43.9305158, lng: -69.9834908,
    pdf: "https://www.shopmarketbasket.com/wp-content/uploads/2025/02/95-TOPSHAM-SHOPPERS-GUIDE-2.pdf",
    guide: `
Air Freshener | 13
Aluminum Foil | 12
Ammonia | 13
Applesauce | 11
Automotive | 12
Baby Food | 9
Baby Powder | 9
Bags: Lunch-Sandwich | 12
Bags: Garbage-Trash | 12
Bakery: Fresh | Front Corner
Bakery: Packaged | 16
Bakeware | 12
Baking Needs | 7
Barbecue Sauce | 3
Bath Tissue | 10
Batteries | 9
Beans: Baked | 3
Beans: Dry | 6
Bisquick | 11
Bleach | 13
Bouillon Cubes | 2
Bread | 16
Bread Crumbs | Back of 18 & 19
Brooms | 13
Bug Spray | 12
Butter | 1
Butter Buds | 6
Cake Mix | 7
Candles: Birthday | Bakery Case
Candles: Household | 13
Candy | 11
Canning Supplies | Produce
Cat Food-Cat Litter-Cat Needs | 12
Cereal | 4
Charcoal | 12
Cheese: Grated Parmesan | 5
Cheese: Prepackaged | 1
Cheese: Specialty | Cheese Case
Chili Sauce | Back Main Aisle
Chinese Food: Canned | 2
Cherries: Canned | 7
Cherries: Jar | 11
Chowder: Clam-Corn-Potato | 2
Clams: Canned-Minced-Juice | 3
Coffee | 7
Cold Remedies | 10
Cookies | 16
Cottage Cheese | 1
Crackers | 16
Cranberry Sauce | 11
Croutons | 3
Deodorant | 9
Detergent: Dish-Dishwasher | 13
Detergent: Laundry | 13
Diapers | 9
Disinfectant Spray | 13
Dog Food-Dog Needs | 12
Drain Cleaner | 13
Dried Fruit: Currants-Dates | 8
Dried Fruit: Prunes-Raisins | 8
Dye: Fabric | 13
Eggs | 2
Electrical Supplies | 9
Escargot | 3
Eye Care | 9
Facial Tissue | 10
Fabric Softener | 13
Feminine Needs | 10
Figs: Dry | Produce Dept
Fish: Canned | 3
Fish: Fresh | Deli/Fish Dept
Flour | 7
Food Coloring | 7
Freezer Wrap | 12
Fruit: Canned | 11
Fruit: Fresh | Produce Dept
Frozen Foods | 18 & 19
Gloves: Work | 13
Granola Bars | 4
Gravy | 6
Greeting Cards | Produce Dept
Ham Glaze | 3
Hamburger Helper | 5
Honey | 11
Household Cleaners | 13
Ice Cream | Freezer Wall
Ice Cream Cones | I C Corner
Ice Cubes | 18
Iced Tea Mix | 14
Jam & Jelly | 11
Jello | 7
Juice | 6
Ketchup | 3
Kitchen Gadgets | 11
Kool Aid | 14
Kosher Foods | 5
Laundry Detergent | 13
Laxative | 10
Lightbulbs | 9
Mac & Cheese: Packaged | 5
Magazines | Registers
Mayonnaise | 3
Meat: Canned | 3
Meat: Fresh | Meat Dept
Mexican Food | 3
Milk: Fluid | 1
Milk: Evaporated-Powdered | 7
Molasses | 11
Mops | 13
Mouthwash | 10
Mushrooms: Canned | 6
Mustard | 3
Napkins | 11
Noodles | 5
Nuts: Baking | 7
Nuts: Peanuts in shell | Produce Dept
Nuts: Snack Nuts | 8
Oil: Canola-Cooking-Corn | 3
Oil: Olive-Vegetable | 3
Oil: Motor | 12
Olives | 3
Pancake Mix | 11
Paper: Cups-Plates | 11
Paper: Towels | 11
Pasta | 5
Peanut Butter | 11
Pie Filling | 7
Pizza: Fresh | Market's Kitchen
Plasticware | 11
Pop Tarts | 4
Popping Corn | 8
Potato Chips | 8
Potatoes: Fresh | Produce Dept
Potatoes: Canned-Instant | 6
Pudding Mix | 7
Raisins | 8
Razor Blades | 9
Rice: Packaged | 5
Rice: Cakes | 4
Rubbermaid | 12
Rubbing Alcohol | 10
Salad Dressing | 3
Salt | 7
Sanitary Napkins | 10
Sardines: Canned | 3
Sauce: BBQ-Steak | 3
Sauce: Tabasco/Tartar | 3
Sauce: Soy | 2
Shake & Bake | 18
Shaving Needs | 9
Shoe Care | 9
Shortening | 3
Soap: Bar-Body-Hand-Liquid | 10
Soda | 15
Soup | 2
Spaghetti Sauce | 5
Spam | 3
Spices | 7
Sponges | 13
Stationery | 9
Steel Wool | 13
Straws | 11
Stuffing Mix | Back Main Aisle
Sugar | 7
Taco: Sauce-Shells | 3
Tea Bags | 7
Tissue: Bath | 10
Tissue: Facial | 10
Tomato: Canned | 5
Tomato: Fresh | Produce Dept
Tomato: Paste | 5
Tomato: Sauce | 5
Toothbrushes-Toothpaste | 10
Toothpicks | 11
Tuna: Canned | 3
Vegetables: Canned | 6
Vegetables: Fresh | Produce Dept
Vinegar | 3
Vitamins | 9
Water: Distilled-Spring | 14
Wax Paper | 12
Wheat Germ | 4
Windshield Washer | 12` }
};

// Everyday words → the Shoppers' Guide entry they belong with. Because these point at guide
// entries (not aisle numbers), one table works for every store: the store's own PDF decides the
// aisle. A list of targets means "first one this store's guide has".
window.MB_ALIASES = {
  // Dairy case (guide: Milk: Fluid / Butter / Cheese)
  'Milk: Fluid': 'yogurt, greek yogurt, yoghurt, half and half, heavy cream, whipping cream, whipped cream, cream, creamer, coffee creamer, sour cream, cream cheese, margarine, oat milk, almond milk, soy milk, lactose free milk, chocolate milk, skim milk, whole milk, kefir, biscuits dough, pillsbury, crescent roll, dip, french onion dip',
  'Butter': 'butter, i cant believe its not butter, country crock, smart balance',
  'Cheese: Prepackaged': 'cheese, shredded cheese, sliced cheese, string cheese, cheese stick, cheddar, mozzarella, american cheese, swiss, swiss cheese, provolone, pepper jack, colby, monterey jack, cheese slice, babybel',
  'Cheese: Specialty': 'brie, gouda, feta, goat cheese, blue cheese, gorgonzola, manchego, havarti, camembert, specialty cheese, fancy cheese',
  'Cheese: Grated Parmesan': 'parmesan, parm, grated cheese, romano',
  'Cottage Cheese': 'ricotta, cottage cheese',
  'Eggs': 'egg, egg white, egg beater',

  // Meat / deli / seafood
  'Meat: Fresh': 'chicken, chicken breast, chicken thigh, chicken wing, wing, drumstick, rotisserie chicken, beef, ground beef, hamburger, burger, burger patty, steak, sirloin, ribeye, pork, pork chop, pork loin, pork tenderloin, bacon, sausage, italian sausage, breakfast sausage, hot dog, hotdog, frank, kielbasa, ham, ground turkey, turkey, lamb, rib, spare rib, roast, pot roast, meatball, veal, stew meat, brisket, chorizo',
  'Fish: Fresh': 'deli, lunch meat, lunchmeat, cold cut, deli meat, sliced turkey, deli turkey, roast beef, salami, pepperoni, bologna, prosciutto, fish, salmon, shrimp, cod, haddock, tilapia, scallop, lobster, crab, seafood, sushi, deli salad, potato salad, macaroni salad, coleslaw, hummus',
  'Meat: Canned': 'canned chicken, corned beef hash, vienna sausage, canned ham',
  'Tuna: Canned': 'tuna, starkist',
  'Fish: Canned': 'canned salmon, anchovy, canned fish',
  'Clams: Canned-Minced-Juice': 'canned clam, clam juice',
  'Pizza: Fresh': 'pizza, fresh pizza, pizza dough, calzone',

  // Bakery
  'Bakery: Fresh': 'bagel, donut, doughnut, pastry, muffin, croissant, cake, birthday cake, cupcake, pie, fresh bread, danish, cannoli, whoopie pie, bakery, sub roll, italian bread, french bread, baguette',
  'Bakery: Packaged': 'snack cake, little debbie, hostess, twinkie, entenmann',
  'Candles: Birthday': 'birthday candle',

  // Produce
  'Fruit: Fresh': 'apple, banana, orange, clementine, cutie, lemon, lime, grape, strawberry, blueberry, raspberry, blackberry, berry, cherry, melon, cantaloupe, honeydew, watermelon, avocado, pear, peach, plum, nectarine, kiwi, mango, pineapple, grapefruit, pomegranate, fresh fruit, fruit, apricot, fig',
  'Vegetables: Fresh': 'lettuce, romaine, iceberg, spinach, kale, arugula, salad, salad mix, spring mix, cabbage, cucumber, pepper, bell pepper, jalapeno, onion, red onion, scallion, green onion, shallot, garlic, carrot, baby carrot, celery, broccoli, cauliflower, zucchini, squash, butternut squash, eggplant, asparagus, green bean, snap pea, snow pea, brussels sprout, corn on the cob, corn, mushroom, radish, beet, turnip, parsnip, leek, herb, cilantro, parsley, basil, mint leaf, dill, rosemary, thyme, ginger, sweet potato, yam, vegetable, veggie, produce, tofu, sprout, artichoke, okra, bok choy',
  'Potatoes: Fresh': 'potato, russet, red potato, yukon gold, idaho potato',
  'Tomato: Fresh': 'tomato, cherry tomato, grape tomato, roma tomato',
  'Nuts: Peanuts in shell': 'peanuts in shell, in shell peanut',

  // Frozen
  'Frozen Foods': 'frozen, frozen pizza, frozen vegetable, frozen dinner, frozen meal, tv dinner, waffle, eggo, frozen waffle, popsicle, stouffer, lean cuisine, hot pocket, pierogi, tater tot, corn dog, french fry, fries, frozen fries, fish stick, chicken nugget, nugget, frozen fruit, cool whip, frozen yogurt, burrito, ice pop, freezer pop, egg roll',
  'Ice Cream': 'ice cream, gelato, sherbet, sorbet, ice cream sandwich, ice cream bar, fudgsicle, klondike',
  'Ice Cream Cones': 'ice cream cone, sprinkle cone, waffle cone',
  'Ice Cubes': 'ice, bag of ice, ice bag, ice cube',

  // Condiments / oils / Mexican / pickled
  'Ketchup': 'ketchup, catsup',
  'Mustard': 'mustard, dijon',
  'Mayonnaise': 'mayo, mayonnaise, miracle whip, hellmann',
  'Olives': 'olive, pickle, relish, pepperoncini, capers, sauerkraut, banana pepper, roasted pepper, artichoke heart',
  'Salad Dressing': 'salad dressing, dressing, ranch, italian dressing, caesar dressing, vinaigrette, blue cheese dressing, thousand island',
  'Vinegar': 'vinegar, balsamic, apple cider vinegar, red wine vinegar',
  'Oil: Olive-Vegetable': 'olive oil, vegetable oil, cooking spray, pam, avocado oil, coconut oil',
  'Oil: Canola-Cooking-Corn': 'canola oil, cooking oil, corn oil, frying oil, peanut oil',
  'Sauce: BBQ-Chili-Steak': 'bbq sauce, barbecue, a1, steak sauce, worcestershire, marinade, wing sauce, buffalo sauce',
  'Sauce: Tartar/Tabasco': 'hot sauce, tabasco, sriracha, franks red hot, tartar sauce, cocktail sauce',
  'Sauce: Tartar': 'hot sauce, tabasco, sriracha, tartar sauce, cocktail sauce',
  'Mexican Food': 'salsa, taco seasoning, refried bean, tortilla, flour tortilla, corn tortilla, enchilada sauce, queso, nacho cheese, jalapeno slices, green chile, old el paso, fajita, tostada',
  'Taco: Sauce-Shells': 'taco, taco shell, taco sauce, taco kit',
  'Beans: Baked': 'baked bean, bush baked bean, b&m',
  'Croutons': 'crouton, bacon bits, salad topping',
  'Shortening': 'shortening, crisco, lard',
  'Canning Supplies': 'mason jar, canning jar, pectin',

  // Breakfast
  'Cereal': 'cereal, oatmeal, oats, quaker, cheerios, frosted flakes, corn flakes, raisin bran, special k, granola, instant oatmeal, cream of wheat, life cereal, lucky charms, froot loops, rice krispie, rice chex, corn chex',
  'Pancake Mix': 'pancake, pancake mix, syrup, maple syrup, aunt jemima, waffle mix, log cabin',
  'Pop Tarts': 'pop tart, poptart, toaster pastry, toaster strudel',
  'Granola Bars': 'granola bar, protein bar, cereal bar, nature valley, clif bar, kind bar, nutrigrain',
  'Honey': 'honey, agave',
  'Rice: Cakes': 'rice cake, rice crisp',
  'Grits': 'grits, cream of rice',

  // Pasta / tomato / rice
  'Pasta': 'pasta, spaghetti, macaroni, elbow, lasagna, penne, ziti, rigatoni, linguine, fettuccine, angel hair, rotini, farfalle, bowtie, orzo, tortellini, ravioli, gnocchi, egg noodle',
  'Noodles': 'noodle, egg noodles',
  'Spaghetti Sauce': 'spaghetti sauce, pasta sauce, pizza sauce, marinara, alfredo, alfredo sauce, ragu, prego, vodka sauce, pesto',
  'Tomato: Canned': 'canned tomato, diced tomato, crushed tomato, whole tomato, stewed tomato, rotel',
  'Tomato: Sauce': 'tomato sauce',
  'Tomato: Paste': 'tomato paste',
  'Rice: Packaged': 'rice, white rice, brown rice, jasmine rice, basmati, rice a roni, minute rice, couscous, quinoa, uncle ben',
  'Mac & Cheese: Packaged': 'mac and cheese, macaroni and cheese, kraft dinner, velveeta shells',
  'Hamburger Helper': 'hamburger helper, tuna helper',

  // Juice / canned veg / beans / gravy
  'Juice': 'juice, apple juice, orange juice, cranberry juice, grape juice, lemonade, capri sun, juice box, v8, tomato juice, lemon juice, lime juice, ocean spray, tropicana, minute maid, simply orange',
  'Vegetables: Canned': 'canned vegetable, canned corn, canned green bean, canned peas, canned carrots, creamed corn, canned beet, pumpkin puree, canned pumpkin, chickpea, garbanzo, black bean, kidney bean, pinto bean, cannellini, canned bean',
  'Beans: Dry': 'dry bean, dried bean, lentil, split pea, dried pea',
  'Mushrooms: Canned': 'canned mushroom',
  'Gravy': 'gravy, gravy mix, gravy packet',
  'Potatoes: Canned-Instant': 'instant potato, mashed potato mix, potato flakes, au gratin, scalloped potato, idahoan',

  // Baking / spices / coffee / tea
  'Sugar': 'sugar, brown sugar, powdered sugar, confectioners sugar, splenda, sweetener, stevia, sweet n low, equal',
  'Flour': 'flour, all purpose flour, bread flour, cornmeal, cornstarch',
  'Baking Needs': 'baking soda, baking powder, yeast, vanilla, vanilla extract, extract, chocolate chip, baking chocolate, cocoa, cocoa powder, sprinkles, marshmallow, graham cracker crust, pie crust, shredded coconut, condensed milk, sweetened condensed milk, baking',
  'Cake Mix': 'cake mix, brownie mix, muffin mix, cookie mix, frosting, icing, cornbread mix, betty crocker, duncan hines',
  'Pudding Mix': 'pudding, pudding mix, instant pudding, pudding cup, snack pack',
  'Jello': 'jello, jell o, gelatin',
  'Pie Filling': 'pie filling, pumpkin pie filling',
  'Food Coloring': 'food coloring, food dye',
  'Milk: Evaporated-Powdered': 'evaporated milk, powdered milk, dry milk, carnation milk',
  'Salt': 'salt, sea salt, kosher salt',
  'Spices': 'spice, seasoning, pepper grinder, black pepper, cinnamon, paprika, cumin, oregano, garlic powder, onion powder, chili powder, italian seasoning, bay leaf, nutmeg, red pepper flake, crushed red pepper, adobo, sazon, old bay, everything bagel seasoning, garlic salt, season salt, lawrys, mccormick',
  'Coffee': 'coffee, ground coffee, coffee bean, k cup, kcup, keurig, coffee pod, instant coffee, dunkin coffee, coffee filter, espresso, folgers, maxwell house',
  'Tea Bags': 'tea, tea bag, green tea, herbal tea, chamomile, lipton, tetley, red rose',
  'Nuts: Baking': 'baking nuts, walnut, pecan, chopped nuts, sliced almond',

  // Asian
  'Chinese Food: Canned': 'asian, chinese, water chestnut, bamboo shoot, la choy, chow mein noodle, ramen, top ramen, rice noodle, coconut milk, curry paste, hoisin, teriyaki, sesame oil, fish sauce, stir fry sauce, oyster sauce, duck sauce, sweet and sour',
  'Sauce: Soy': 'soy sauce, soya sauce, kikkoman, tamari',

  // Soup / PB / jam / canned fruit / candy / dried fruit
  'Soup': 'soup, broth, stock, chicken broth, beef broth, vegetable broth, chicken noodle soup, tomato soup, campbell, progresso, cream of mushroom, cream of chicken, bone broth',
  'Bouillon Cubes': 'bouillon, better than bouillon',
  'Chowder: Clam-Corn-Potato': 'chowder, clam chowder, corn chowder',
  'Peanut Butter': 'peanut butter, pb, almond butter, nutella, sunbutter, jif, skippy, fluff, marshmallow fluff',
  'Jam & Jelly': 'jam, jelly, preserves, marmalade, smuckers',
  'Fruit: Canned': 'canned fruit, canned peach, canned pear, fruit cup, mandarin orange, canned pineapple, fruit cocktail',
  'Applesauce': 'applesauce, apple sauce, mott',
  'Cranberry Sauce': 'cranberry sauce',
  'Dried Fruit: Currants-Dates': 'date, dates, medjool, currant',
  'Dried Fruit: Prunes-Raisins': 'dried fruit, prune, dried cranberry, craisin, dried apricot, dried mango',
  'Raisins': 'raisin',
  'Candy': 'candy, chocolate, chocolate bar, m&m, m&ms, mm, snickers, reese, reeses, kit kat, hershey, skittles, starburst, gummy, gummy bear, licorice, twizzler, lollipop, jelly bean, peppermint, hard candy, candy bar, sour patch',

  // Snacks
  'Potato Chips': 'chip, potato chip, tortilla chip, doritos, lays, ruffles, pringles, cheetos, fritos, tostitos, sun chips, kettle chips, cape cod chips, pretzel, cheese puff, pork rind, snack, veggie straw, pita chip',
  'Popping Corn': 'popcorn, popping corn, microwave popcorn, pop secret, orville',
  'Nuts: Snack Nuts': 'nut, nuts, peanut, cashew, almond, pistachio, trail mix, mixed nuts, sunflower seed, pumpkin seed, beef jerky, jerky',
  'Crackers': 'cracker, saltine, ritz, triscuit, wheat thins, goldfish, cheez it, cheezit, graham cracker, club cracker, oyster cracker, rice cracker, pita cracker, animal cracker',
  'Cookies': 'cookie, oreo, chips ahoy, nutter butter, fig newton, biscotti, wafer, vanilla wafer, pepperidge farm cookie',
  'Bread': 'bread, sandwich bread, white bread, wheat bread, rye, bun, hamburger bun, hot dog bun, roll, dinner roll, english muffin, pita, naan, wrap, tortilla wrap, flatbread, hawaiian roll, sourdough, texas toast',
  'Bread Crumbs': 'bread crumb, breadcrumb, panko',
  'Stuffing Mix': 'stuffing, stove top',
  'Shake & Bake': 'shake and bake, coating mix',

  // Drinks
  'Soda': 'soda, pop, coke, coca cola, diet coke, coke zero, pepsi, diet pepsi, sprite, dr pepper, root beer, ginger ale, mountain dew, fanta, 7up, seven up, canada dry, schweppes, club soda, tonic, tonic water, moxie',
  'Water: Distilled-Spring': 'water, bottled water, spring water, distilled water, sparkling water, seltzer, poland spring, polar, lacroix, smartwater, fiji, flavored water',
  'Iced Tea Mix': 'iced tea, iced tea mix, lemonade mix, drink mix, crystal light, gatorade, powerade, sports drink, arizona, snapple, energy drink, red bull, monster',
  'Kool Aid': 'kool aid, koolaid, hawaiian punch',

  // Health & beauty / pharmacy
  'Toothbrushes-Toothpaste': 'toothpaste, toothbrush, floss, dental floss, crest, colgate, oral care',
  'Mouthwash': 'mouthwash, listerine, scope',
  'Deodorant': 'deodorant, antiperspirant, degree, dove deodorant, old spice',
  'Vitamins': 'vitamin, multivitamin, supplement, fish oil, vitamin d, vitamin c, melatonin, probiotic, protein powder',
  'Feminine Needs': 'tampon, pad, maxi pad, panty liner, feminine, always pad, tampax, playtex',
  'Eye Care': 'eye drop, contact solution, saline, visine, reading glasses',
  'Shoe Care': 'shoe polish, shoe lace, insole',
  'Batteries': 'battery, aa battery, aaa battery, duracell, energizer',
  'Lightbulbs': 'lightbulb, light bulb, bulb, led bulb',
  'Electrical Supplies': 'extension cord, electrical tape, outlet, power strip, fuse',
  'Soap: Bar-Body-Hand-Liquid': 'soap, body wash, hand soap, bar soap, shower gel, dove, dial, irish spring, shampoo, conditioner, lotion, hand lotion, body lotion, hand sanitizer, sunscreen, face wash, cotton ball, q tip, qtip, cotton swab',
  'Shaving Needs': 'shaving cream, shave gel, razor, disposable razor, aftershave',
  'Razor Blades': 'razor blade, gillette blade',
  'Baby Food': 'baby, baby food, formula, baby formula, similac, enfamil, gerber, baby cereal, puffs',
  'Diapers': 'diaper, pull up, huggies, pampers, wipe, baby wipe, wet wipe',
  'Baby Powder': 'baby powder, baby oil, baby lotion, desitin',
  'Cold Remedies': 'cold medicine, cough, cough drop, cough syrup, nyquil, dayquil, mucinex, allergy, claritin, zyrtec, benadryl, tylenol, advil, motrin, ibuprofen, aspirin, aleve, pain reliever, acetaminophen, tums, antacid, pepto, heartburn, thermometer, bandaid, band aid, bandage, first aid, neosporin',
  'Laxative': 'laxative, fiber, metamucil, miralax, stool softener, dulcolax',
  'Rubbing Alcohol': 'rubbing alcohol, peroxide, hydrogen peroxide, witch hazel, epsom salt',
  'Stationery': 'pen, pencil, marker, notebook, stationery, tape, scotch tape, envelope, card, greeting card, birthday card, stamp, glue, scissors, crayon, printer paper, index card, sharpie',

  // Paper / plastic / wraps
  'Paper: Towels': 'paper towel, bounty, viva',
  'Bath Tissue': 'toilet paper, bath tissue, tp, charmin, cottonelle, scott tissue, angel soft',
  'Facial Tissue': 'kleenex, tissue, facial tissue, puffs tissue',
  'Napkins': 'napkin, paper napkin',
  'Paper: Cups-Plates': 'paper plate, paper cup, plastic cup, solo cup, plate, cup, bowl, paper bowl, chinet, dixie',
  'Straws': 'straw, drinking straw',
  'Toothpicks': 'toothpick, skewer',
  'Plasticware': 'fork, spoon, plastic fork, plastic spoon, plastic utensil, plasticware, cutlery, plastic knife',
  'Aluminum Foil': 'foil, aluminum foil, tin foil, reynolds wrap, foil pan, aluminum pan',
  'Wax Paper': 'wax paper, parchment, parchment paper',
  'Freezer Wrap': 'plastic wrap, saran wrap, cling wrap, freezer wrap, glad wrap',
  'Bags: Lunch-Sandwich': 'ziploc, ziplock, sandwich bag, storage bag, freezer bag, snack bag, lunch bag, gallon bag, paper bag',
  'Bags: Garbage-Trash': 'trash bag, garbage bag, hefty, glad bag, kitchen bag, contractor bag, lawn bag, compactor bag',
  'Rubbermaid': 'rubbermaid, tupperware, food storage, storage container, food container',
  'Bakeware': 'bakeware, baking pan, baking dish, cookie sheet, muffin tin, pie plate, cake pan, cupcake liner, muffin liner',
  'Kitchen Utensils': 'kitchen utensil, kitchen gadget, spatula, can opener, measuring cup, whisk, peeler, oven mitt, pot holder, dish towel',
  'Kitchen Gadgets': 'kitchen utensil, kitchen gadget, spatula, can opener, measuring cup, whisk, peeler, oven mitt, pot holder, dish towel',

  // Cleaning / laundry / household
  'Detergent: Laundry': 'laundry, laundry detergent, tide, gain, all detergent, persil, arm and hammer detergent, laundry pod, tide pod, oxiclean, stain remover, shout, spray n wash',
  'Fabric Softener': 'fabric softener, dryer sheet, bounce, downy, snuggle',
  'Detergent: Dish-Dishwasher': 'dish soap, dish detergent, dishwashing liquid, dawn, palmolive, joy dish, dishwasher detergent, dishwasher pod, dishwasher tab, cascade, finish, jet dry, rinse aid',
  'Bleach': 'bleach, clorox, clorox bleach',
  'Ammonia': 'ammonia',
  'Household Cleaners': 'cleaner, all purpose cleaner, cleaning, windex, glass cleaner, lysol, clorox wipe, lysol wipe, disinfecting wipe, cleaning wipe, 409, fantastik, mr clean, pine sol, soft scrub, comet, bar keepers friend, scrubbing bubbles, toilet bowl cleaner, bathroom cleaner, oven cleaner, furniture polish, pledge, swiffer, magic eraser, goo gone, murphy oil',
  'Disinfectant Spray': 'disinfectant, disinfectant spray, lysol spray',
  'Air Freshener': 'air freshener, febreze, glade, air wick, room spray, plug in',
  'Sponges': 'sponge, scrub sponge, scotch brite, dish scrubber, scrub brush',
  'Steel Wool': 'steel wool, brillo, sos pad',
  'Brooms': 'broom, dustpan, dust pan',
  'Mops': 'mop, mop head, swiffer refill',
  'Drain Cleaner': 'drain cleaner, drano, liquid plumber',
  'Gloves: Work': 'glove, rubber glove, dish glove, work glove, latex glove',
  'Candles: Household': 'candle, tea light, votive, matches, lighter, long lighter',
  'Dye: Fabric': 'fabric dye, rit dye',
  'Vacuum Cleaner Bags': 'vacuum bag, vacuum cleaner bag',

  // Pets
  'Cat Food-Cat Litter-Cat Needs': 'cat, cat food, cat litter, kitty litter, litter, cat treat, friskies, fancy feast, meow mix, purina cat, tidy cats',
  'Dog Food-Dog Needs': 'dog, dog food, dog treat, dog biscuit, milk bone, rawhide, pedigree, purina dog, beggin, dentastix, pet, pet food, puppy chow',

  // Outdoor / automotive
  'Charcoal': 'charcoal, lighter fluid, kingsford, grill, grilling',
  'Bug Spray': 'bug spray, insect repellent, deet, raid, ant trap, roach, fly swatter, mouse trap, citronella',
  'Oil: Motor': 'motor oil, car oil',
  'Windshield Washer Fluid': 'windshield washer fluid, washer fluid, windshield fluid, wiper fluid',
  'Automotive': 'automotive, car, antifreeze, car air freshener, car wash',

  // Front end
  'Magazines': 'magazine, newspaper, tv guide, gum, chewing gum, bubble gum, trident, extra gum, tic tac, breath mint',
  'Kosher Foods': 'kosher, matzo, matzah, manischewitz, gefilte fish'
};
