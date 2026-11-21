// KALIKHA product catalog.
//
// HOW TO ADD A PRODUCT
// 1. Copy one product block below and paste it at the end of the list.
// 2. Give it a unique id (lowercase-with-dashes). It becomes the page address: /shop/<id>
// 3. Put the photo in public/images/products/ and set image to `${IMAGE_DIR}<file name>`.
//    Leave image out (or empty) and a "Photo coming soon" placeholder is shown instead.
// 4. Set featured: true to also show it on the Home page.
// A new category name is added to the Shop filters automatically.

const IMAGE_DIR = `${import.meta.env.BASE_URL}images/products/`
export const PLACEHOLDER_IMAGE = `${IMAGE_DIR}placeholder.svg`

// Order of the Shop filter buttons. Any category not listed here is added at the end.
const CATEGORY_ORDER = [
  'Reusable Accessories',
  'Kitchen Essentials',
  'Drinkware',
  'Personal Care',
  'Household Essentials',
]

const products = [
  // ===== Reusable Accessories =====
  {
    id: 'bayan-tote-bag',
    name: 'Bayan Tote Bag',
    price: 149,
    category: 'Reusable Accessories',
    image: `${IMAGE_DIR}bayan-tote-bag.jpg`,
    featured: true,
    description: 'A reusable everyday tote bag designed for shopping, school, and daily activities.',
    details:
      'The Bayan Tote Bag is made for the everyday Filipino routine — a trip to the palengke, a day at school, or a quick grocery run. Its sturdy canvas body is roomy enough for groceries, books, or a laptop, and the long handles sit comfortably on your shoulder.',
    benefits: [
      'Replaces dozens of single-use plastic bags',
      'Sturdy canvas with long shoulder handles',
      'Roomy enough for groceries, books, or a laptop',
      'Foldable and easy to wash',
    ],
  },
  {
    id: 'habi-woven-market-bag',
    name: 'Habi Woven Market Bag',
    price: 279,
    category: 'Reusable Accessories',
    image: `${IMAGE_DIR}habi-woven-market-bag.jpg`,
    featured: false,
    description: 'An open-weave natural fiber bag for your palengke and grocery runs.',
    details:
      'Inspired by the Filipino tradition of habi (weaving), this market bag has an open, airy weave that lets fresh fruits and vegetables breathe. It is light to carry, stretches to fit your haul, and looks good enough to bring to the beach.',
    benefits: [
      'Woven natural fiber',
      'Open weave lets produce breathe',
      'Light and roomy',
      'Replaces plastic grocery bags',
    ],
  },
  {
    id: 'zero-waste-shopping-set',
    name: 'Zero-Waste Shopping Bag Set',
    price: 349,
    category: 'Reusable Accessories',
    image: `${IMAGE_DIR}zero-waste-shopping-set.jpg`,
    featured: false,
    description: 'A complete set of a canvas tote, a mesh market bag, and drawstring produce bags.',
    details:
      'Everything you need for a plastic-free grocery trip in one set: a canvas tote for heavier items, a cotton mesh market bag, and drawstring bags in different sizes for fruits, vegetables, rice, or bread.',
    benefits: [
      'Canvas tote and mesh market bag',
      'Drawstring bags in different sizes',
      'Washable cotton materials',
      'Covers a whole grocery trip without plastic',
    ],
  },
  {
    id: 'mesh-produce-bags',
    name: 'Mesh Produce Bags (Set of 3)',
    price: 159,
    category: 'Reusable Accessories',
    image: `${IMAGE_DIR}mesh-produce-bags.jpg`,
    featured: false,
    description: 'Three drawstring cotton mesh bags for fruits and vegetables.',
    details:
      'Skip the thin plastic bags in the produce section. These cotton mesh bags come in three sizes with color-coded drawstring tops, and the see-through mesh makes it easy to check your items at the counter.',
    benefits: [
      'Set of three sizes',
      'Color-coded drawstring tops',
      'See-through cotton mesh',
      'Washable and reusable',
    ],
  },

  // ===== Kitchen Essentials =====
  {
    id: 'bamboo-cooking-utensils',
    name: 'Bamboo Cooking Utensil Set',
    price: 399,
    category: 'Kitchen Essentials',
    image: `${IMAGE_DIR}bamboo-cooking-utensils.jpg`,
    featured: false,
    description: 'A bamboo spatula and spoon set with a matching holder.',
    details:
      'Cook your adobo, sinigang, and pancit with bamboo instead of plastic. This set includes slotted and solid spatulas, spoons, and a slotted fork-spoon, plus a bamboo holder to keep them together on your counter. Bamboo is gentle on non-stick pans.',
    benefits: [
      'Five utensils plus a bamboo holder',
      'Gentle on non-stick cookware',
      'Lightweight bamboo construction',
      'Replaces plastic cooking tools',
    ],
  },
  {
    id: 'bao-coconut-bowl',
    name: 'Bao Coconut Bowl',
    price: 149,
    category: 'Kitchen Essentials',
    image: `${IMAGE_DIR}bao-coconut-bowl.jpg`,
    featured: false,
    description: 'A natural bowl made from a real coconut shell.',
    details:
      'Each Bao bowl is made from a coconut shell that would otherwise be thrown away, so every one has its own shape and pattern. Use it for smoothie bowls, salads, rice, or snacks.',
    benefits: [
      'Made from a real coconut shell',
      'Each bowl is one of a kind',
      'Great for smoothie bowls, rice, or snacks',
      'Gives coconut shells a second life',
    ],
  },
  {
    id: 'coco-coir-dish-brush',
    name: 'Coco Coir Dish Brush',
    price: 129,
    category: 'Kitchen Essentials',
    image: `${IMAGE_DIR}coco-coir-dish-brush.jpg`,
    featured: false,
    description: 'A wooden dish brush with tough coconut-fiber bristles.',
    details:
      'Coconut coir bristles are firm enough for pots and pans yet kind to everyday dishes. The wooden handle keeps your hands out of the water and has a cord loop for hanging to dry.',
    benefits: [
      'Firm coconut-fiber bristles',
      'Wooden handle',
      'Cord loop for hanging',
      'Plastic-free alternative to dish brushes',
    ],
  },
  {
    id: 'coco-coir-sponge',
    name: 'Coco Coir Dish Sponge',
    price: 79,
    category: 'Kitchen Essentials',
    image: `${IMAGE_DIR}coco-coir-sponge.jpg`,
    featured: false,
    description: 'A two-pack of coconut-fiber scrubbing sponges for dishes and kitchen surfaces.',
    details:
      'Made from coconut coir and plant-based sponge, this pair tackles everyday dishwashing without the plastic of conventional sponges. Use the coir pad for tougher scrubbing and the soft sponge for glasses and delicate surfaces.',
    benefits: [
      'Coconut-fiber scrubbing pad',
      'Soft sponge for delicate dishes',
      'An alternative to plastic sponges',
      'Two pieces per pack',
    ],
  },

  // ===== Drinkware =====
  {
    id: 'ecosip-reusable-bottle',
    name: 'EcoSip Reusable Bottle',
    price: 249,
    category: 'Drinkware',
    image: `${IMAGE_DIR}ecosip-reusable-bottle.jpg`,
    featured: true,
    description: 'A reusable drinking bottle that helps reduce reliance on disposable plastic bottles.',
    details:
      'Stay hydrated through hot Philippine days with the EcoSip Reusable Bottle. Refill it at home, at school, or at the office instead of buying bottled water. Its warm wood-grain finish, stainless steel cap, and slim body make it easy to carry in a bag or car cup holder.',
    benefits: [
      'Helps cut down on plastic bottle waste',
      'Stainless steel screw cap',
      'Slim shape fits most bag pockets',
      'Saves money on bottled drinks',
    ],
  },
  {
    id: 'bamboo-cup-set',
    name: 'Bamboo Cup Set',
    price: 229,
    category: 'Drinkware',
    image: `${IMAGE_DIR}bamboo-cup-set.jpg`,
    featured: false,
    description: 'A pair of natural bamboo cups for your daily kape or tea.',
    details:
      'Each cup is shaped from a section of bamboo, so no two look exactly alike. Use them for your morning coffee, afternoon tea, or as a natural touch on your dining table instead of disposable cups.',
    benefits: [
      'Set of two cups',
      'Shaped from natural bamboo',
      'Each cup has its own unique grain',
      'A reusable alternative to paper and plastic cups',
    ],
  },

  // ===== Personal Care =====
  {
    id: 'cococlean-natural-soap',
    name: 'CocoClean Natural Soap',
    price: 89,
    category: 'Personal Care',
    image: `${IMAGE_DIR}cococlean-natural-soap.jpg`,
    featured: true,
    description: 'A coconut-based soap designed for everyday personal care.',
    details:
      'CocoClean is a coconut-based bar soap inspired by one of the Philippines’ most abundant natural resources. It gives a rich, gentle lather for daily use and comes tied with simple twine instead of plastic packaging.',
    benefits: [
      'Made with coconut oil',
      'Gentle lather for daily use',
      'Plastic-free packaging',
      'Long-lasting bar',
    ],
  },
  {
    id: 'bamboo-toothbrush',
    name: 'Bamboo Toothbrush',
    price: 59,
    category: 'Personal Care',
    image: `${IMAGE_DIR}bamboo-toothbrush.jpg`,
    featured: false,
    description: 'A bamboo-handled toothbrush offered as an alternative to conventional plastic toothbrushes.',
    details:
      'Millions of plastic toothbrushes are thrown away every year. Our Bamboo Toothbrush keeps your routine the same while swapping the plastic handle for bamboo, a fast-growing and renewable material.',
    benefits: [
      'Bamboo handle instead of plastic',
      'Soft bristles for everyday brushing',
      'Comfortable, easy-grip shape',
      'An easy first step to a low-waste routine',
    ],
  },
  {
    id: 'bamboo-hair-comb',
    name: 'Bamboo Hair Comb',
    price: 99,
    category: 'Personal Care',
    image: `${IMAGE_DIR}bamboo-hair-comb.jpg`,
    featured: false,
    description: 'A smooth bamboo comb that replaces your plastic one.',
    details:
      'This fine-tooth bamboo comb glides through your hair for everyday grooming. Its smooth, rounded teeth are gentle on the scalp, and its compact size fits easily in a bag or drawer.',
    benefits: [
      'Made from bamboo instead of plastic',
      'Smooth, rounded teeth',
      'Compact and travel-friendly',
      'Lightweight and comfortable to hold',
    ],
  },
  {
    id: 'bamboo-nail-brush',
    name: 'Bamboo Nail Brush',
    price: 89,
    category: 'Personal Care',
    image: `${IMAGE_DIR}bamboo-nail-brush.jpg`,
    featured: false,
    description: 'A double-sided bamboo brush with natural bristles for cleaning hands and nails.',
    details:
      'Keep your hands and nails clean with this compact double-sided brush. The bamboo body and plant-fiber bristles make it a simple, plastic-free addition to your sink or shower.',
    benefits: [
      'Double-sided for hands and nails',
      'Bamboo body with plant-fiber bristles',
      'Compact size for sink or shower',
      'Plastic-free design',
    ],
  },
  {
    id: 'coconut-lip-balm',
    name: 'Coconut Lip Balm',
    price: 129,
    category: 'Personal Care',
    image: `${IMAGE_DIR}coconut-lip-balm.jpg`,
    featured: false,
    description: 'A coconut-infused lip balm in a reusable metal tin.',
    details:
      'Keep your lips soft in hot or air-conditioned days with this coconut-infused balm. It comes in a reusable metal tin instead of a plastic tube, so you can keep the tin long after the balm is gone.',
    benefits: [
      'Infused with coconut',
      'Reusable metal tin',
      'Pocket-sized for everyday use',
      'No plastic tube',
    ],
  },
  {
    id: 'peppermint-lip-balm',
    name: 'Peppermint Lip Balm',
    price: 119,
    category: 'Personal Care',
    image: `${IMAGE_DIR}peppermint-lip-balm.jpg`,
    featured: false,
    description: 'A refreshing peppermint lip balm in a paper push-up tube.',
    details:
      'A cool, minty balm for everyday lip care, packed in a paper push-up tube instead of plastic. Simply push from the bottom to use, and recycle the tube when you are done.',
    benefits: [
      'Refreshing peppermint scent',
      'Paper push-up tube instead of plastic',
      'Slim and easy to carry',
      'For everyday lip care',
    ],
  },
  {
    id: 'reusable-facial-pads',
    name: 'Reusable Facial Pads',
    price: 179,
    category: 'Personal Care',
    image: `${IMAGE_DIR}reusable-facial-pads.jpg`,
    featured: false,
    description: 'Ten soft, washable cotton pads with a mesh laundry bag.',
    details:
      'Remove makeup or apply toner with soft cotton pads you can wash and use again instead of disposable cotton rounds. The set comes with a mesh bag so the pads stay together in the washing machine.',
    benefits: [
      'Set of 10 soft cotton pads',
      'Includes a mesh laundry bag',
      'Washable and reusable',
      'Replaces disposable cotton rounds',
    ],
  },
  {
    id: 'coconut-hair-oil',
    name: 'Coconut Hair Oil',
    price: 199,
    category: 'Personal Care',
    image: `${IMAGE_DIR}coconut-hair-oil.jpg`,
    featured: false,
    description: 'A nourishing coconut hair oil for softer, smoother hair.',
    details:
      'Coconut oil has long been part of Filipino hair care. This lightweight hair oil in a pump bottle makes it easy to apply a few drops to the ends of your hair for softness and shine.',
    benefits: [
      'Made with coconut',
      'Easy-to-use pump bottle',
      'A few drops go a long way',
      'Adds softness and shine',
    ],
  },

  {
    id: 'aloe-vera-herbal-soap',
    name: 'Aloe Vera Herbal Soap',
    price: 99,
    category: 'Personal Care',
    image: `${IMAGE_DIR}aloe-vera-herbal-soap.jpg`,
    featured: false,
    description: 'A soothing aloe vera soap bar for everyday bathing.',
    details:
      'Inspired by the aloe plant found in many Filipino gardens, this herbal soap bar gives a gentle, refreshing wash. It is tied with natural twine instead of wrapped in plastic.',
    benefits: [
      'Made with aloe vera',
      'Gentle, refreshing wash',
      'Tied with natural twine, no plastic wrap',
      'For daily use',
    ],
  },
  {
    id: 'charcoal-detox-soap',
    name: 'Charcoal Detox Soap',
    price: 109,
    category: 'Personal Care',
    image: `${IMAGE_DIR}charcoal-detox-soap.jpg`,
    featured: false,
    description: 'An activated charcoal soap bar for a deep, refreshing clean.',
    details:
      'This activated charcoal bar is made for a deep, refreshing clean, especially after a long, humid day. It is wrapped in a simple paper sleeve instead of plastic.',
    benefits: [
      'Made with activated charcoal',
      'Deep, refreshing clean',
      'Paper sleeve packaging',
      'Long-lasting bar',
    ],
  },
  {
    id: 'natural-loofah-scrubber',
    name: 'Natural Loofah Scrubber',
    price: 79,
    category: 'Personal Care',
    image: `${IMAGE_DIR}natural-loofah-scrubber.jpg`,
    featured: false,
    description: 'A plant-based loofah scrubber for gentle exfoliation in the shower.',
    details:
      'Loofah comes from the dried fruit of the patola plant. This natural scrubber gently exfoliates your skin and has a cotton loop for hanging to dry, replacing plastic shower puffs.',
    benefits: [
      'Made from natural loofah (patola)',
      'Gentle exfoliation',
      'Cotton loop for easy hanging',
      'A plant-based alternative to plastic puffs',
    ],
  },
  {
    id: 'wooden-bath-brush',
    name: 'Wooden Bath Brush',
    price: 249,
    category: 'Personal Care',
    image: `${IMAGE_DIR}wooden-bath-brush.jpg`,
    featured: false,
    description: 'A long-handled wooden brush with natural bristles for your back and body.',
    details:
      'Reach every part of your back with this long-handled bath brush. The wooden handle and plant-fiber bristles make bath time a little more relaxing, and a small hole in the handle lets you hang it up to dry.',
    benefits: [
      'Long handle for hard-to-reach areas',
      'Wooden handle with plant-fiber bristles',
      'Hanging hole for drying',
      'Plastic-free design',
    ],
  },
  {
    id: 'coconut-body-butter',
    name: 'Coconut Body Butter',
    price: 279,
    category: 'Personal Care',
    image: `${IMAGE_DIR}coconut-body-butter.jpg`,
    featured: false,
    description: 'A rich coconut body butter in a reusable glass jar.',
    details:
      'Treat your skin to a rich, creamy coconut body butter after your bath. It comes in an amber glass jar that you can wash and reuse for storage once it is empty.',
    benefits: [
      'Rich, creamy coconut formula',
      'Reusable amber glass jar',
      'A little goes a long way',
      'For after-bath moisture',
    ],
  },
  {
    id: 'reusable-shower-cap',
    name: 'Reusable Shower Cap',
    price: 149,
    category: 'Personal Care',
    image: `${IMAGE_DIR}reusable-shower-cap.jpg`,
    featured: false,
    description: 'A washable fabric shower cap with a leaf print, made to replace disposable caps.',
    details:
      'Keep your hair dry in the shower with this washable fabric cap. The elastic band fits comfortably, and the leaf print adds a touch of nature to your bathroom routine.',
    benefits: [
      'Washable and reusable',
      'Comfortable elastic band',
      'Botanical leaf print',
      'Replaces disposable plastic caps',
    ],
  },
  {
    id: 'bamboo-soap-dish',
    name: 'Bamboo Soap Dish',
    price: 99,
    category: 'Personal Care',
    image: `${IMAGE_DIR}bamboo-soap-dish.jpg`,
    featured: false,
    description: 'A slatted bamboo soap dish that keeps your soap bars dry.',
    details:
      'The raised slats let water drain away so your bar soap stays dry and lasts longer. It is a simple bamboo alternative to plastic soap holders for your sink, tub, or shower.',
    benefits: [
      'Raised slats drain water',
      'Helps soap bars last longer',
      'Made from bamboo',
      'Fits most bar soaps',
    ],
  },

  // ===== Household Essentials =====
  {
    id: 'ecohome-cleaning-kit',
    name: 'EcoHome Cleaning Kit',
    price: 299,
    category: 'Household Essentials',
    image: `${IMAGE_DIR}ecohome-cleaning-kit.jpg`,
    featured: false,
    description: 'A practical collection of reusable household cleaning essentials.',
    details:
      'The EcoHome Cleaning Kit gathers reusable cleaning tools in one box: coconut-fiber and plant-bristle scrub brushes, washable cleaning cloths, a dish soap bar, and a bamboo soap dish. Clean your kitchen and home without piling up disposable sponges and wipes.',
    benefits: [
      'Coconut-fiber and plant-bristle brushes',
      'Washable, reusable cleaning cloths',
      'Includes a dish soap bar and bamboo soap dish',
      'Less waste from sponges and wipes',
    ],
  },
  {
    id: 'woven-storage-basket',
    name: 'Habi Woven Storage Basket',
    price: 349,
    category: 'Household Essentials',
    image: `${IMAGE_DIR}woven-storage-basket.jpg`,
    featured: true,
    description: 'A hand-woven natural fiber basket for tidy, plastic-free storage at home.',
    details:
      'Inspired by the Filipino tradition of habi (weaving), this sturdy basket keeps towels, toys, clothes, or pantry items organized. Cut-out handles make it easy to carry, and its natural texture adds warmth to any room.',
    benefits: [
      'Hand-woven natural fiber',
      'Cut-out handles for easy carrying',
      'A plastic-free storage option',
      'Warm, natural look for any room',
    ],
  },
]

// Fill in a placeholder image for any product without one
products.forEach((p) => {
  if (!p.image) p.image = PLACEHOLDER_IMAGE
})

// Filters are built from the products, so new categories appear automatically
const used = new Set(products.map((p) => p.category))
export const categories = [
  'All Products',
  ...CATEGORY_ORDER.filter((c) => used.has(c)),
  ...[...used].filter((c) => !CATEGORY_ORDER.includes(c)),
]

export default products

export const getProductById = (id) => products.find((p) => p.id === id)

export const formatPeso = (amount) =>
  `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
