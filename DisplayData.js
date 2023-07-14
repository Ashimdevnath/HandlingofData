fetch('JsonData2.json')
  .then(response => response.json())
  .then(data => {
    const tableTag = document.getElementById("table");
    tableTag.classList.add('border-solid','border-2','border-blue-600');
    for (const key in data[0]) {
      const store = data[0][key];
      // Create table headers
      const menu = document.createElement("th");
      menu.classList.add('border-solid','border-2','border-blue-600');
      menu.textContent = key;
      const Price = document.createElement("th");
      Price.classList.add('border-solid','border-2','border-blue-600');
      Price.textContent = "Price";
      const Description = document.createElement("th");
      Description.classList.add('border-solid','border-2','border-blue-600');
      Description.textContent = "Description";
      tableTag.appendChild(menu);
      tableTag.appendChild(Price);
      tableTag.appendChild(Description);
    
      // Create table rows and cells
      store.forEach((item) => {
        const tableRow = document.createElement("tr");
    
        const nameCell = document.createElement("td");
        nameCell.classList.add('border-solid','border-2','border-blue-600');
        nameCell.textContent = item.name;
    
        const priceCell = document.createElement("td");
        priceCell.classList.add('border-solid','border-2','border-blue-600');
        priceCell.textContent = "$" + item.price;
    
        const descriptionCell = document.createElement("td");
        descriptionCell.classList.add('border-solid','border-2','border-blue-600');
        descriptionCell.textContent = item.description;
    
        tableRow.appendChild(nameCell);
        tableRow.appendChild(priceCell);
        tableRow.appendChild(descriptionCell);
    
        tableTag.appendChild(tableRow);
      });
    }
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

