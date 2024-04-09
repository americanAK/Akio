document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_wil")) {
      fetch("wilpathu.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_wil", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_wil"));
      loadDataIntoPage(storedData);
    }
  });

const jsonFilePath = 'wilpathu.json'; 


function handleJSONData(jsonData) {
  
  console.log('Location Description:', jsonData.location.description);
  console.log('Location Latitude:', jsonData.location.coordinates.latitude);
  console.log('Location Longitude:', jsonData.location.coordinates.longitude);

  
  console.log('About Title:', jsonData.about.title);
  console.log('About Description:', jsonData.about.description);

  
  console.log('Wildlife:');
  console.log('Leopard:', jsonData.about.wildlife.leopard);
  console.log('Bear:', jsonData.about.wildlife.bear);
  console.log('Deer:', jsonData.about.wildlife.deer);
  console.log('Elephants:', jsonData.about.wildlife.elephants);
  console.log('Birdlife:', jsonData.about.wildlife.birdlife);

 
  console.log('Unique Feature:', jsonData.about.unique_feature);

  
  console.log('Importance:', jsonData.about.importance);
}


fetchJSONFile(jsonFilePath)
  .then(data => {
    if (data) {
      handleJSONData(data);
    } else {
      console.error('No data fetched.');
    }
  });