document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_sl")) {
      fetch("SriLankanwildlifeintroduction.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_sl", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_sl"));
      loadDataIntoPage(storedData);
    }
  });
  
  
  
  const jsonFilePath = 'SriLankanwildlifeintroduction.json'; 
  
  function handleJSONData(jsonData) {
    
    console.log('Wildlife Highlights:');
    console.log('Title:', jsonData.wildlife_highlights.title);
    console.log('Subtitle:', jsonData.wildlife_highlights.subtitle);
    console.log('Content:', jsonData.wildlife_highlights.content);
  
    
    console.log('\nNational Parks:');
    jsonData.national_parks.forEach(park => {
      console.log('Name:', park.name);
      console.log('Description:', park.description);
      console.log('Images:', park.images);
      console.log('Map URL:', park.map_url);
    });
  }
  
  
  fetchJSONFile(jsonFilePath)
    .then(data => {
      if (data) {
        handleJSONData(data);
      } else {
        console.error('No data fetched.');
      }
    });
