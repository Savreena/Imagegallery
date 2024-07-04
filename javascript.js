const images = [
    { src: 'nature1.jpeg',alt: 'Nature Image 1', category: 'Nature' },
    { src: 'nature2.jpeg',alt:' Nature Image 2', category: 'Nature' },
    { src: 'city1.jpeg' ,alt : 'City Image 1', category: 'City' },
    { src: 'city2.jpeg' ,alt : 'City Image 2',category: 'City'},
    { src: 'animal1.jpeg',alt : 'Animal Image 1',category:'Animals'},
    { src: 'animal2.jpeg',alt : 'Animal Image 2',category:'Animals'}
    ];

    function renderImages(category)
    {
        const gallery = document.querySelector('.Gallery');
        gallery.innerHTML = '';

        const filteredImages = category ==='All'? images : images.filter(img=> img.category===category);
        filteredImages.forEach(image=> {
          const imgElement = document.createElement('img');
          imgElement.src = image.src;
          imgElement.alt = image.alt;
          gallery.appendChild(imgElement);
        });
    }
    document.querySelectorAll('nav ul li').forEach(navItem =>{
           navItem.addEventListener('click',()=>{
                
         const category = navItem.textContent.trim();
         renderImages(category);

         document.querySelectorAll('nav ul li').forEach(item=>item.style.backgroundColor='');
         navItem.style.backgroundColor = '#444';
           });
        });
        
        renderImages('All');
