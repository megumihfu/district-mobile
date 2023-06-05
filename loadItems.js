const specs = {
    "brands": [
        { "id": 0, "name": "Brand" },
        { "id": 1, "name": "Apple"},
        { "id": 2, "name": "Samsung" },
        { "id": 3, "name": "Oppo" },
        { "id": 4, "name": "Xiaomi" }
    ],
    
    "camera": [
        { "id": 0, "value": "Camera" },
        { "id": 1, "value": "12 Mpx" },
        { "id": 2, "value": "54 Mpx" },
        { "id": 3, "value": "108 Mpx" },
        { "id": 4, "value": "50 Mpx" }
    ],
    
    "capacities": [
        { "id": 1, "value": "128 GB" },
        { "id": 2, "value": "256 GB" },
        { "id": 3, "value": "512 GB" },
        { "id": 4, "value": "1 TB" }
    ],

    "price": [
        { "id": 0, "value": "Price" },
        { "id": 1, "value": "less than 200€" },
        { "id": 2, "value": "200 ~ 500" },
        { "id": 3, "value": "500 ~ 800" },
        { "id": 4, "value": "more than 800€" }
    ],

    "screen": [
        { "id": 0, "value": "Screen size" },
        { "id": 1, "value": "6.1 inches" },
        { "id": 2, "value": "6.2 inches" },
        { "id": 3, "value": "6.3 inches" },
        { "id": 4, "value": "6.4 inches" },
        { "id": 5, "value": "6.5 inches" },
        { "id": 6, "value": "6.6 inches" },
        { "id": 7, "value": "6.7 inches" },
        { "id": 8, "value": "6.8 inches" },
        { "id": 9, "value": "6.9 inches" }
    ]
}

const smartphones = [
    {
        "id": 1,
        "brandId": 1,
        "model": "iPhone 14",
        "display": ["6.1-inch Super Retina XDR display", 1],
        "processor": "Apple A15 Bionic",
        "ram": "6 GB",
        "storage": [1, 2, 3],
        "battery": "3279 mAh",
        "price": [4, "899€"],
        "cameraId": 1
    },
    {
        "id": 2,
        "brandId": 2,
        "model": "Samsung Galaxy S23",
        "display": ["6.8-inch Super AMOLED", 8],
        "processor": "Qualcomm Snapdragon 8 Gen2 (3,36 GHz)",
        "ram": "12 GB",
        "storage": [2, 3, 4],
        "battery": "5000 mAh",
        "price": [4, "999€"],
        "cameraId": 1
    },
    {
        "id": 3,
        "brandId": 4,
        "model": "Xiaomi 13",
        "display": ["6.36-inch Oled", 3],
        "processor": "Qualcomm Snapdragon 8 Gen2",
        "ram": "8 GB",
        "storage": [2, 3],
        "battery": "4500 mAh",
        "price": [3, "799€"],
        "cameraId": 2
    },
    {
        "id": 4,
        "brandId": 2,
        "model": "Samsung Galaxy S20 Ultra",
        "display": ["6.9-inch AMOLED", 9],
        "processor": "Samsung Exynos 990",
        "ram": "12 GB",
        "storage": [1, 2, 3],
        "battery": "5000 mAh",
        "price": [4, "899€"],
        "cameraId": 3
    },
    {
        "id": 5,
        "brandId": 1,
        "model": "iPhone 13 Pro Max",
        "display": ["6.7-inch Oled", 7],
        "processor": "Apple A15 Bionic",
        "ram": "6 GB",
        "storage": [1, 2, 3, 4],
        "battery": "4373 mAh",
        "price": [3, "799€"],
        "cameraId": 1
    },
    {
        "id": 6,
        "brandId": 4,
        "model": "Xiaomi 12S",
        "display": ["6.28-inch AMOLED", 2],
        "processor": "Qualcomm Snapdragon 8+ Gen1",
        "ram": "8 GB",
        "storage": [1, 2, 3],
        "battery": "4500 mAh",
        "price": [4, "899€"],
        "cameraId": 4
    },
    {
        "id": 7,
        "brandId": 3,
        "model": "Oppo Find X6",
        "display": ["6.74-inch AMOLED", 7],
        "processor": "MediaTek Dimensity 9200",
        "ram": "12 GB",
        "storage": [2, 3],
        "battery": "4800 mAh",
        "price": [3, "779€"],
        "cameraId": 4
    }
]

var html_brand = ""
for (var i = 0; i < specs.brands.length; i++) {
    var currentItem = specs.brands[i]
    html_brand += "<option value=" + currentItem.id + ">" + currentItem.name + "</option>"
}
document.getElementById("Brand").innerHTML = html_brand

var html_camera = ""
for (var i = 0; i < specs.camera.length; i++) {
    var currentItem = specs.camera[i]
    html_camera += "<option value=" + currentItem.id + ">" + currentItem.value + "</option>"
}
document.getElementById("Camera").innerHTML = html_camera

var html_screen = ""
for (var i = 0; i < specs.screen.length; i++) {
    var currentItem = specs.screen[i]
    html_screen += "<option value=" + currentItem.id + ">" + currentItem.value + "</option>"
}
document.getElementById("Screen").innerHTML = html_screen

var html_price = ""
for (var i = 0; i < specs.price.length; i++) {
    var currentItem = specs.price[i]
    html_price += "<option value=" + currentItem.id + ">" + currentItem.value + "</option>"
}
document.getElementById("Price").innerHTML = html_price

var form = document.getElementById("search-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    filterResults();
});

//filtrage
function filterResults() {
    // Récupérer les valeurs sélectionnées dans les menus déroulants
    var selectedBrand = Number(document.getElementById("Brand").value);
    var selectedCamera = Number(document.getElementById("Camera").value);
    var selectedScreen = Number(document.getElementById("Screen").value);
    var selectedPrice = Number(document.getElementById("Price").value);

    console.log("Brand: " + selectedBrand)
    console.log("Camera: " + selectedCamera)
    console.log("Screen: " + selectedScreen)
    console.log("Price: " + selectedPrice)

    var filteredSmartphonesNew = smartphones

    if(selectedBrand !== 0){
      filteredSmartphonesNew = filteredSmartphonesNew.filter(
        phone => phone.brandId === selectedBrand
      )
    }
    if(selectedCamera !== 0) {
      filteredSmartphonesNew = filteredSmartphonesNew.filter(
        phone => phone.cameraId === selectedCamera
      )
    }
    if(selectedScreen !== 0) {
      filteredSmartphonesNew = filteredSmartphonesNew.filter(
        phone => phone.display[1] === selectedScreen
      )
    }
    if(selectedPrice !== 0) {
      filteredSmartphonesNew = filteredSmartphonesNew.filter(
        phone => phone.price[0] === selectedPrice
      )
    }

    console.log(filteredSmartphonesNew)

    // Générer le HTML pour afficher les résultats filtrés
    var resultsHtml = "";
    for (var i = 0; i < filteredSmartphonesNew.length; i++) {
      var smartphone = filteredSmartphonesNew[i];
      resultsHtml += "<div class='smartphoneList'><p>" + smartphone.model + "</p><p>" + smartphone.price + "</p></div>";
    }
    document.getElementById("smartphone-list").innerHTML = resultsHtml;
}

/* var smartphoneHtml = ""

for (var i = 0; i < smartphones.length; i++) {
    var currentItem = smartphones[i]
    smartphoneHtml += "<div class='smartphoneList'><p>" + currentItem.model + "</p><p>" + currentItem.price + "</p></div>"
}

document.getElementById("smartphone-list").innerHTML = smartphoneHtml */