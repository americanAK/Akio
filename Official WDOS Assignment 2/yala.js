document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_yala")) {
      fetch("yala.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_yala", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_yala"));
      loadDataIntoPage(storedData);
    }
  });
  
  
const jsonFilePath = 'yala.json'; 


function handleJSONData(jsonData) {
  
  jsonData.sections.forEach(section => {
    console.log('ID:', section.id);
    console.log('Title:', section.title);
    console.log('Content:', section.content);
    if (section.imageSrc) {
      console.log('Image Source:', section.imageSrc);
    }
    if (section.mapUrl) {
      console.log('Map URL:', section.mapUrl);
    }
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