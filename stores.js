// Store data — transcribed line-for-line from each store's printed Market Basket Shoppers' Guide PDF
// (82-LYNN-SHOPPERS-GUIDE_0-2.pdf, 45-MIDDLETON-SHOPPERS-GUIDE-SEPT-2022-2.pdf). These PDFs are the
// source of truth: every aisle the app assigns traces back to a line here.
// Format: "Item | Aisle as printed". Sub-entries use "Head: Qualifier" (e.g. "Tomato: Canned").

window.MB_STORES = {
  lynn: {
    id: 'lynn',
    name: 'Lynn',
    number: '82',
    address: '40 Federal Street, Lynn, MA 01905',
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
Windshield Washer Fluid | 13`
  },

  middleton: {
    id: 'middleton',
    name: 'Middleton',
    number: '45',
    address: '230 South Main Street, Middleton, MA 01949',
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
Windshield Washer Fluid | 12`
  }
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
