// Define gallery item type
interface GalleryItem {
  id: number;
  image: string;
  caption: string;
  alt: string;
}

// Gallery data
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Aurora Borealis over Lapland',
    alt: 'Northern Lights in Finnish Lapland'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5677011/pexels-photo-5677011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Winter Forest in Finland',
    alt: 'Snow-covered forest'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Summer Lake View',
    alt: 'Beautiful Finnish lake in summer'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/2832045/pexels-photo-2832045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Midnight Sun Phenomenon',
    alt: 'Midnight sun over Finnish landscape'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Helsinki Cathedral',
    alt: 'Famous white Helsinki Cathedral'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Autumn Colors in Finland',
    alt: 'Finnish forest during autumn'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Traditional Finnish Sauna',
    alt: 'Traditional wooden sauna by the lake'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/3715436/pexels-photo-3715436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    caption: 'Husky Sled in Lapland',
    alt: 'Husky dog sled in snowy Lapland'
  }
];

// Function to create gallery items
const createGalleryItem = (item: GalleryItem): HTMLElement => {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  galleryItem.setAttribute('data-animation', 'fade-in');
  galleryItem.setAttribute('data-id', item.id.toString());
  
  galleryItem.innerHTML = `
    <img src="${item.image}" alt="${item.alt}" class="gallery-image">
    <div class="gallery-caption">
      <p>${item.caption}</p>
    </div>
  `;
  
  return galleryItem;
};

// Function to create lightbox
const createLightbox = (): HTMLElement => {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.id = 'gallery-lightbox';
  
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="" alt="" class="lightbox-image">
      <div class="lightbox-caption"></div>
      <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&lsaquo;</button>
      <button class="lightbox-nav lightbox-next" aria-label="Next image">&rsaquo;</button>
    </div>
  `;
  
  return lightbox;
};

// Function to load gallery into the DOM
export const setupGallery = (): void => {
  const container = document.getElementById('gallery-container');
  
  if (!container) return;
  
  // Add gallery items
  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    container.appendChild(galleryItem);
  });
  
  // Add lightbox to the body
  const lightbox = createLightbox();
  document.body.appendChild(lightbox);
  
  // Get lightbox elements
  const lightboxElement = document.getElementById('gallery-lightbox');
  const lightboxImage = lightboxElement?.querySelector('.lightbox-image') as HTMLImageElement;
  const lightboxCaption = lightboxElement?.querySelector('.lightbox-caption') as HTMLElement;
  const lightboxClose = lightboxElement?.querySelector('.lightbox-close') as HTMLButtonElement;
  const lightboxPrev = lightboxElement?.querySelector('.lightbox-prev') as HTMLButtonElement;
  const lightboxNext = lightboxElement?.querySelector('.lightbox-next') as HTMLButtonElement;
  
  // Current item index
  let currentIndex = 0;
  
  // Function to open lightbox
  const openLightbox = (index: number): void => {
    if (!lightboxElement || !lightboxImage || !lightboxCaption) return;
    
    currentIndex = index;
    const item = galleryItems[index];
    
    lightboxImage.src = item.image;
    lightboxImage.alt = item.alt;
    lightboxCaption.textContent = item.caption;
    
    lightboxElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close lightbox
  const closeLightbox = (): void => {
    if (!lightboxElement) return;
    
    lightboxElement.classList.remove('active');
    document.body.style.overflow = '';
  };
  
  // Function to navigate to previous image
  const prevImage = (): void => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    openLightbox(currentIndex);
  };
  
  // Function to navigate to next image
  const nextImage = (): void => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    openLightbox(currentIndex);
  };
  
  // Add event listeners to gallery items
  const galleryElements = container.querySelectorAll('.gallery-item');
  galleryElements.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });
  
  // Add event listeners to lightbox controls
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', prevImage);
  }
  
  if (lightboxNext) {
    lightboxNext.addEventListener('click', nextImage);
  }
  
  // Close lightbox when clicking outside the content
  if (lightboxElement) {
    lightboxElement.addEventListener('click', (e) => {
      if (e.target === lightboxElement) {
        closeLightbox();
      }
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxElement?.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  });
};