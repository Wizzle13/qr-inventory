var inventorySection = document.querySelector("#inventory");

var QRId = 0;

var getInventroy =function() {
    const apiUrl = "../assets/api/inventory.json" ;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            console.log(data); // do something with the data here
            const Rinv = data.inventory[QRId];
            console.log(Rinv);
            // extract the quote and name properties
            const { Rinv: qr, type, connectors, description, usedfor } = Rinv;
             

            $(inventorySection).empty();
            $(inventorySection).append(
                // "<div><br>Hello<br></div>"
                "<div><br>" + `"${qr}"` + "<br>" + `${type}` + "<br>" + `${connectors}` + "<br>" +`${description}` + "<br>" +`${usedfor}` + "<br></div>"
                );
        })
        .catch(error => {
        console.error('Error fetching JSON data:', error);
        
    });
}



getInventroy();