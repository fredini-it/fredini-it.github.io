// Parse CSV data
function parseCSV(csv) {
    const rows = csv.split('\n').map(row => row.split(','));
    return rows.slice(1).map(row => ({
        name: row[0].trim(),
        link: row[1].trim()
    }));
}

// Function to get image dimensions
async function getImageDimensions(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.onerror = () => resolve({ width: 0, height: 0 });
        img.src = src;
    });
}

// Create gallery items with placeholders and initial sizing
async function createGallery(posters) {
    const gallery = document.getElementById('gallery');
    
    // Load all image dimensions in parallel
    const dimensionsPromises = posters.map(poster => getImageDimensions(poster.link));
    const dimensionsList = await Promise.all(dimensionsPromises);

    // Create gallery items
    posters.forEach((poster, index) => {
        const dimensions = dimensionsList[index];
        const aspectRatio = (dimensions.height / dimensions.width) * 100;

        // Create container with wide class if applicable
        const posterContainer = document.createElement('div');
        posterContainer.className = `poster-container masonry-brick ${dimensions.width / dimensions.height > 1.2 ? 'wide' : ''}`;

        const link = document.createElement('a');
        // Special case for "render"
        if (poster.name === 'render') {
            link.href = '/render.html'; // Link to render
            link.setAttribute('aria-label', 'Go to render');
        } else {
            link.href = `/pin/${Math.floor(Math.random() * 10000000000000000)}/`;
            link.setAttribute('aria-label', `Página do Pin ${poster.name}`);
        }
        link.tabIndex = 0;

        // Poster div with relative positioning for placeholder and image
        const posterDiv = document.createElement('div');
        posterDiv.className = 'poster masonry-content';
        posterDiv.style.position = 'relative';

        // Placeholder to reserve space based on aspect ratio
        const placeholder = document.createElement('div');
        placeholder.style.paddingBottom = `${aspectRatio}%`;
        posterDiv.appendChild(placeholder);

        // Image with absolute positioning to fill the reserved space
        const img = document.createElement('img');
        img.src = poster.link;
        img.alt = poster.name === 'render' ? 'Link to render' : `Contém uma imagem de: ${poster.name}`;
        img.setAttribute('loading', 'lazy');
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';

        posterDiv.appendChild(img);
        link.appendChild(posterDiv);
        posterContainer.appendChild(link);
        gallery.appendChild(posterContainer);

        // Set initial row span based on placeholder height
        resizeMasonryItem(posterContainer);
    });

    // Handle any late image loads
    waitForImages();
}

// Resize masonry item
function resizeMasonryItem(item) {
    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const contentHeight = item.querySelector('.masonry-content').getBoundingClientRect().height;
    const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap)) || 1;
    item.style.gridRowEnd = `span ${rowSpan}`;
}

// Resize all masonry items
function resizeAllMasonryItems() {
    const allItems = document.getElementsByClassName('masonry-brick');
    for (let i = 0; i < allItems.length; i++) {
        resizeMasonryItem(allItems[i]);
    }
}

// Wait for images to load
function waitForImages() {
    const allItems = document.getElementsByClassName('masonry-brick');
    for (let i = 0; i < allItems.length; i++) {
        imagesLoaded(allItems[i], (instance) => {
            resizeMasonryItem(instance.elements[0]);
        });
    }
}

// Event listeners
['load', 'resize'].forEach(event => window.addEventListener(event, resizeAllMasonryItems));

// Fetch and load CSV
fetch('posters.csv')
    .then(response => response.text())
    .then(csv => {
        const posters = parseCSV(csv);
        createGallery(posters);
    })
    .catch(error => console.error('Error loading CSV:', error));