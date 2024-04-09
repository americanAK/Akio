document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("sectionData_depart")) {
      fetch("Departmentofwildlife.json")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("sectionData_depart", JSON.stringify(data));
          loadDataIntoPage(data);
        })
        .catch((error) => console.error("Error fetching data: ", error));
    } else {
      const storedData = JSON.parse(localStorage.getItem("sectionData_depart"));
      loadDataIntoPage(storedData);
    }
  });

const jsonFilePath = 'Departmentofwildlife.json'; 


function handleJSONData(jsonData) {
  
  console.log('Page Title:', jsonData.pageTitle);

  
  console.log('Menu Items:');
  jsonData.menuItems.forEach(item => {
    console.log('Label:', item.label);
    console.log('Link:', item.link);
  });

  
  console.log('Main Intro 1:');
  console.log('Title:', jsonData.mainIntro1.title);
  console.log('Content:', jsonData.mainIntro1.content);

  
  console.log('Main Intro 2:');
  console.log('Title:', jsonData.mainIntro2.title);
  console.log('Address:', jsonData.mainIntro2.address);
  console.log('Map URL:', jsonData.mainIntro2.mapUrl);
}


fetchJSONFile(jsonFilePath)
  .then(data => {
    if (data) {
      handleJSONData(data);
    } else {
      console.error('No data fetched.');
    }
  });