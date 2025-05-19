// Define destination type
interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Destinations data
const destinations: Destination[] = [
  {
    id: 'helsinki',
    name: 'Helsinki',
    description: 'Finland\'s cosmopolitan capital with a vibrant design scene, stunning architecture, and beautiful harbor area.',
    image: 'https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'lapland',
    name: 'Lapland',
    description: 'The magical northern region with reindeer, northern lights, and the home of Santa Claus in Rovaniemi.',
    image: 'https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'lakeland',
    name: 'Finnish Lakeland',
    description: 'Home to thousands of serene lakes, perfect for boating, fishing, and experiencing Finnish cottage life.',
    image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'archipelago',
    name: 'Turku Archipelago',
    description: 'A network of thousands of islands with idyllic landscapes, charming villages, and maritime culture.',
    image: 'https://images.pexels.com/photos/13242641/pexels-photo-13242641.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'koli',
    name: 'Koli National Park',
    description: 'Famous for breathtaking views of forest and lake landscapes that inspired Finnish national art.',
    image: 'https://images.pexels.com/photos/6373361/pexels-photo-6373361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    id: 'tampere',
    name: 'Tampere',
    description: 'Finland\'s industrial heart now transformed into a cultural hub with museums, theaters, and culinary scene.',
    image: 'https://images.pexels.com/photos/459203/pexels-photo-459203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

// Function to create destination cards
const createDestinationCard = (destination: Destination): HTMLElement => {
  const card = document.createElement('div');
  card.className = 'destination-card';
  card.setAttribute('data-animation', 'fade-in');
  
  card.innerHTML = `
    <div class="destination-image">
      <img src="${destination.image}" alt="${destination.name}">
    </div>
    <div class="destination-content">
      <h3>${destination.name}</h3>
      <p>${destination.description}</p>
      <a href="#" class="discover-btn">Discover more 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  `;
  
  return card;
};

// Function to load destinations into the DOM
export const setupDestinations = (): void => {
  const container = document.getElementById('destinations-container');
  
  if (!container) return;
  
  destinations.forEach(destination => {
    const card = createDestinationCard(destination);
    container.appendChild(card);
  });
};