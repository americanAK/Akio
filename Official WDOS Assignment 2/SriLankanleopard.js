document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_SLleopard")) {
      fetch("SrilankanLeopard.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_SLleopard", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_SLleopard"));
      loadDataIntoPage(storedData);
    }
  });
  
 
  const jsonFilePath = 'SrilankanLeopard.json';
  
  function handleJSONData(jsonData) {
    
    console.log('Sections:');
    jsonData.sections.forEach(section => {
      console.log('Title:', section.title);
      console.log('Description:', section.description);
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
  