// Terra Incognita — Content Data


export const DESTINATIONS = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Grecja',
    continent: 'Europa',
    duration: '10 dni',
    tagline: 'Białe domy na skałach, zachód słońca w Oia',
    description:
      'Wulkaniczna wyspa z widokami, które zatrzymują czas. Błękitne kopuły, klifowe wioski i jedno z najpiękniejszych świateł na Ziemi.',
    price: 8900,
    currency: 'PLN',
    rating: 4.9,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sky: '#FFEAA7',
      horizon: '#E17055',
      sea: '#2980B9',
      deep: '#1A4F72',
    },
    tag: null,
  },
  {
    id: 'kioto',
    name: 'Kioto',
    country: 'Japonia',
    continent: 'Azja',
    duration: '14 dni',
    tagline: 'Tysiąc świątyń w cieniu wiśni',
    description:
      'Dawna cesarska stolica żyje między tradycją a nowoczesnością. Herbaciane ceremonie, geishe, aleje bambusów i wiśnie kwitnące w marcu.',
    price: 14200,
    currency: 'PLN',
    rating: 5.0,
    reviews: 204,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sky: '#FFF0F3',
      bloom: '#FFB7C5',
      dusk: '#D7BDE2',
      deep: '#1A2035',
    },
    tag: 'BESTSELLER',
  },
  {
    id: 'malediwy',
    name: 'Malediwy',
    country: 'Malediwy',
    continent: 'Azja',
    duration: '12 dni',
    tagline: 'Krystaliczne wody, nieskończona cisza',
    description:
      'Koralowe atole na Oceanie Indyjskim. Szklana woda, bungalowy na palach i podwodny świat, który znika na naszych oczach.',
    price: 16500,
    currency: 'PLN',
    rating: 4.8,
    reviews: 97,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sky: '#87CEEB',
      shallow: '#26C6DA',
      deep: '#006064',
      sand: '#F5E6C8',
    },
    tag: 'LUKSUS',
  },
  {
    id: 'patagonia',
    name: 'Patagonia',
    country: 'Chile',
    continent: 'Ameryka Płd.',
    duration: '16 dni',
    tagline: 'Koniec świata, gdzie czas się zatrzymał',
    description:
      'Torres del Paine, lodowiec Perito Moreno, Tierra del Fuego. Dzikie, nietkniete, niepokojąco piękne.',
    price: 12800,
    currency: 'PLN',
    rating: 4.9,
    reviews: 63,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sky: '#DFE9F3',
      glacier: '#A8D8EA',
      rock: '#627D98',
      deep: '#2B3A47',
    },
    tag: 'WYPRAWA',
  },
  {
    id: 'amalfi',
    name: 'Wybrzeże Amalfi',
    country: 'Włochy',
    continent: 'Europa',
    duration: '10 dni',
    tagline: 'Kolory południa, smak dolce vita',
    description:
      'Pionowe klify opadające do morza, kolorowe miasteczka przyklejone do skał i cytryny wielkie jak pięść.',
    price: 9400,
    currency: 'PLN',
    rating: 4.7,
    reviews: 175,
    image: 'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sun: '#FFFDE7',
      warm: '#FF6F00',
      sea: '#1565C0',
      deep: '#0D47A1',
    },
    tag: null,
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'Ameryka Płd.',
    duration: '15 dni',
    tagline: 'Zagubione miasto nad chmurami',
    description:
      'Inkaskie miasto nad przepaścią, otulone chmurami na 2 430 m n.p.m. Jeden z cudów świata, który robi wrażenie nawet na zdjęciach.',
    price: 11200,
    currency: 'PLN',
    rating: 4.9,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1200&auto=format&fit=crop',
    colorScheme: {
      sky: '#E8F5E9',
      jungle: '#81C784',
      stone: '#388E3C',
      deep: '#1B5E20',
    },
    tag: 'UNESCO',
  },
];

export const TOURS = [
  {
    id: 'grand-asia',
    name: 'Grand Asia Tour',
    route: 'Tokio · Kioto · Bangkok · Bali',
    description:
      'Trzydziestodniowa podróż przez kulturowe serce Azji — od neonów Tokio po rytualne zachody słońca w Ubud. Program łączy metropolie, świątynie i dżunglę.',
    duration: '30 dni',
    groupSize: 'do 12 osób',
    price: 24900,
    currency: 'PLN',
    tag: 'BESTSELLER',
    difficulty: 'Umiarkowana',
    includes: ['Loty', 'Hotele 5★', 'Wyżywienie', 'Przewodnik'],
    mapPoints: [
      { x: 110, y: 90,  label: 'Tokio' },
      { x: 165, y: 148, label: 'Kioto' },
      { x: 235, y: 188, label: 'Bangkok' },
      { x: 295, y: 250, label: 'Bali' },
    ],
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean Dream',
    route: 'Barcelona · Amalfi · Santorini · Dubrownik',
    description:
      'Rejs i noclegi w najpiękniejszych miejscach Morza Śródziemnego. Błogość słońca, wino, historia i widoki, które trwają wiecznie.',
    duration: '21 dni',
    groupSize: 'do 16 osób',
    price: 18500,
    currency: 'PLN',
    tag: 'NOWOŚĆ',
    difficulty: 'Łatwa',
    includes: ['Rejs', 'Hotele boutique', 'Śniadania', 'Przewodnik'],
    mapPoints: [
      { x: 80,  y: 100, label: 'Barcelona' },
      { x: 155, y: 178, label: 'Amalfi' },
      { x: 248, y: 128, label: 'Santorini' },
      { x: 325, y: 202, label: 'Dubrownik' },
    ],
  },
  {
    id: 'patagonia-exp',
    name: 'Patagonia Expedition',
    route: 'Santiago · Torres del Paine · Ushuaia · El Calafate',
    description:
      'Wyprawa na kraniec świata — lodowce, puma, andyjskie szczyty i cisza jakiej nie ma nigdzie indziej. Tylko dla odważnych.',
    duration: '22 dni',
    groupSize: 'do 8 osób',
    price: 21200,
    currency: 'PLN',
    tag: 'EXPEDITION',
    difficulty: 'Wymagająca',
    includes: ['Loty', 'Ecolodge', 'Pełne wyżywienie', 'Sprzęt trekkingowy'],
    mapPoints: [
      { x: 100, y: 80,  label: 'Santiago' },
      { x: 155, y: 155, label: 'Torres del Paine' },
      { x: 195, y: 242, label: 'Ushuaia' },
      { x: 308, y: 192, label: 'El Calafate' },
    ],
  },
];

export const STATS = [
  { value: 24,    suffix: '',     label: 'Lat doświadczenia' },
  { value: 87,    suffix: '+',    label: 'Kierunków wycieczek' },
  { value: 14800, suffix: '+',    label: 'Zadowolonych podróżników' },
  { value: 98,    suffix: '%',    label: 'Ocena klientów' },
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: 'Wyjazd do Japonii był absolutnym spełnieniem marzeń. Każdy detal perfekcyjnie zaplanowany — od ryokanu w Kioto po randori z Fuji.',
    name: 'Marta K.',
    trip: 'Grand Asia Tour, 2024',
    rating: 5,
  },
  {
    id: 2,
    text: 'Patagonia mnie rozbiła emocjonalnie w najpiękniejszy sposób. Widoki, cisza, poczucie absolutnej wolności. Polecam każdemu.',
    name: 'Tomasz R.',
    trip: 'Patagonia Expedition, 2024',
    rating: 5,
  },
  {
    id: 3,
    text: 'Obsługa na najwyższym poziomie. Poczułam się jakbym miała własnego concierge\'a przez cały wyjazd. Wróciłam i już planuję następny.',
    name: 'Agnieszka W.',
    trip: 'Mediterranean Dream, 2023',
    rating: 5,
  },
];

export const TICKER_ITEMS = [
  'Santorini', 'Kioto', 'Malediwy', 'Patagonia',
  'Amalfi', 'Machu Picchu', 'Bali', 'Dubrownik',
  'Kappadokja', 'Marrakesz', 'Islandia', 'Safari Kenya',
];
