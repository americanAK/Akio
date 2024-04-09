document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_in")) {
      fetch("indeginous.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_in", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_in"));
      loadDataIntoPage(storedData);
    }
  });
  
  
  const jsonFilePath = 'indeginous.json'; 
  
  
  function handleJSONData(jsonData) {
    
    console.log('Animals:');
    jsonData.animals.forEach(animal => {
      console.log('Name:', animal.name);
      console.log('Scientific Name:', animal.scientificName);
      console.log('Habitat:', animal.habitat);
      console.log('Description:', animal.description);
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
