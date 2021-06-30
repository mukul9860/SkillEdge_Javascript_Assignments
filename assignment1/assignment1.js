var storage = [];
function myFunc() {
    if (localStorage.storage) {
        storage = JSON.parse(localStorage.storage);
        display();
    }
}


function addData() {
    var id = document.getElementById("productId").value;
    var name = document.getElementById("productName").value;
    var price = document.getElementById("productPrice").value;
    var desc = document.getElementById("productDesc").value;
    //to check empty fields
    if (id == "" || name == "" || price == "" || desc == ""){
        alert("Please provide inputs....");
        return false;
    }

    // update details if productId is already present in the table
    for (var i in storage) {
        if (storage[i].ProductId == id) {
            storage[i].ProductName = name;
            storage[i].ProductPrice = price;
            storage[i].ProductDesc = desc;
            display();
            saveProduct();
            return;
        }
    }
    var item = { ProductId: id, ProductName: name, ProductPrice: price, ProductDesc: desc };
    storage.push(item);
    saveProduct();
    display();
}
// delete particular product from storage.
function deleteProduct(index) {
    if(confirm("Are you sure! you want to delete this data...."))
    storage.splice(index, 1);
    display();
    saveProduct();
}

function saveProduct() {
    if (window.localStorage) {
        localStorage.storage = JSON.stringify(storage);
    }
}
// show the details present in storage.
function display() {
    if (storage.length == 0) {
        document.getElementById("tableData").style.visibility = "hidden";
        return;
    }
    document.getElementById("tableData").style.visibility = "visible";
    document.getElementById("tableBody").innerHTML = "";
    for (var i in storage) {
        var item = storage[i];
        var row = "<tr><td>" + item.ProductId + "</td><td>" +
            item.ProductName + "</td><td>" + "RS. " + item.ProductPrice + "</td><td>"
            + item.ProductDesc + "</td><td>"
            + "<button style='background-color: red;font-weight: bold;'onclick='deleteProduct(" + i + ")'>Delete</button></td></tr>";
        document.getElementById("tableBody").insertAdjacentHTML("beforeend", row);
    }
}
// to delete all products from storage.
function clearAll(index) {
    if(confirm("Are you sure! you want to delete all data...."))
    storage.splice(index);
    display();
    saveProduct();
}