document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData")) {
      fetch("index.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData"));
      loadDataIntoPage(storedData);
    }
  });
  
 
  const jsonFilePath = 'index.json'; 
  
  
  function handleJSONData(jsonData) {
    
    console.log('Homepage:');
    console.log('Title:', jsonData.homepage.title);
    console.log('Content:', jsonData.homepage.content);
  
    
    console.log('\nMangroves:');
    console.log('Title:', jsonData.mangroves.title);
    console.log('Content:', jsonData.mangroves.content);
  
    
    console.log('\nMarine Life:');
    console.log('Title:', jsonData.marine_life.title);
    console.log('Content:', jsonData.marine_life.content);
  
    
    console.log('\nIndigenous Animals:');
    console.log('Title:', jsonData.indigenous_animals.title);
    console.log('Content:', jsonData.indigenous_animals.content);
  }
  
  
  