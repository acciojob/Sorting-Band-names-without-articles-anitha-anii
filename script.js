//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots.sort((a, b) => {
    const articles = /^(The|A|An)\s+/i; 

    const spotA = a.replace(articles, '');
    const spotB = b.replace(articles, '');
  
    return spotA.localeCompare(spotB);
  });
  
  console.log(touristSpots);
