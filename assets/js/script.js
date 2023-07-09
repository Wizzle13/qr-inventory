var inventorySection = document.querySelector("#inventory");
var modalInventory = document.getElementById("inventory");

const myKeysValues = window.location.search;
console.log("values: ", myKeysValues);

const urlParams = new URLSearchParams(myKeysValues);

const paramCat =urlParams.get('cat');
const paramId =urlParams.get('id');

var QRCat= paramCat;
var QRId = paramId;
console.log(paramCat);
if (paramId === null) {
    $(inventorySection).empty();
    $(inventorySection).append(
        "<div>OOPS</div>"
    );
}
else {
    var getInventory =function() {
        modalInventory.style.display="block";
        
        const apiUrl = "./assets/api/inventory.json";
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                
                console.log(data); // do something with the data here
                const Rinv = data.inventory[QRId];
                console.log(Rinv);
                // extract the quote and name properties
                const { Rinv: qr, qrcode, type, connectors, description, usedfor } = Rinv;
                

                $(inventorySection).empty();
                $(inventorySection).append(
                   
                    "<div class='container'>"+
                        "<div class='container--title'>"+ 
                        `${usedfor}`+
                        "</div>"+ 
                        "<img class='container--img' src='../assets/images/items/cables/"+`${usedfor}`+".jpg' />" + 
                        "<div class='container--details'>"+
                            "<div class='connector'>"+
                                `Connector Type: ${connectors}` + 
                            "</div>"+
                            "<div class='description'>"+    
                                 `Description: ${description}` + 
                            "</div>"+
                        "</div>"
                    );
            })
            .catch(error => {
            console.error('Error fetching JSON data:', error);
            
        });
    }

getInventory();
}