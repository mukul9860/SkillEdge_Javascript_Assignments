function myCountry() {
    var country = document.getElementById("country_id").value;
    if (country === "India") {
        var state_array = ["Select State", "Maharashtra", "kerala", "Telangana", "Karnataka"];
    }
    else if (country === "Canada") {
        var state_array = ["Select State", "Alberta", "Ontario", "Quebec", "Manitoba"];
    }
    else if (country === "Australia") {
        var state_array = ["Select State", "Queensland", "NewSouthWales", "Victoria", "Tasmania"];
    }
    var coun = "";
    for (i = 0; i < state_array.length; i++) {
        coun = coun + "<option value=" + state_array[i] + ">" + state_array[i] + "</option>";
    }
    document.getElementById("state_id").innerHTML = coun;
}
function myState() {
    var state = document.getElementById("state_id").value;
    if (state === "Maharashtra") {
        var city_array = ["Select City", "Nagpur", "Pune", "Mumbai", "Amravati"];
    }
    else if (state === "kerala") {
        var city_array = ["Select City", "Kochi", "Kozhikode", "Kannur", "Kollam"];
    }
    else if (state === "Telangana") {
        var city_array = ["Select City", "Hyderabad", "Nizamabad", "Secunderabad", "Adilabad"];
    }
    else if (state === "Karnataka") {
        var city_array = ["Select City", "Bangalore", "Mysore", "Hubli", "Belagavi"];
    }
    else if (state === "Alberta") {
        var city_array = ["Select City", "Calgary", "Lethbridge", "Edmonton", "Leduc"];
    }
    else if (state === "Ontario") {
        var city_array = ["Select City", "Toronto", "Ottawa", "Kingston", "Kitchner"];
    }
    else if (state === "Quebec") {
        var city_array = ["Select City", "Montreal", "Laval", "Levis", "Sherbrooke"];
    }
    else if (state === "Manitoba") {
        var city_array = ["Select City", "Winnipeg", "Brandon", "Morden", "Winkler"];
    }
    else if (state === "Queensland") {
        var city_array = ["Select City", "Brisbane", "Cairns", "Mackay", "Rockhampton"];
    }
    else if (state === "NewSouthWales") {
        var city_array = ["Select City", "Sydney", "Dubbo", "Albury", "Lismore"];
    }
    else if (state === "Victoria") {
        var city_array = ["Select City", "Melbourne", "Geelong", "Bendigo", "Mildura"];
    }
    else if (state === "Tasmania") {
        var city_array = ["Select City", "Hobart", "Burnie", "Devonport", "Strahan"];
    }
    var city = "";
    for (i = 0; i < city_array.length; i++) {
        city = city + "<option value=" + city_array[i] + ">" + city_array[i] + "</option>";
    }
    document.getElementById("city_id").innerHTML = city;
}

$('#city_id').change(function () {
    var city = document.getElementById("city_id").value;
    $("#modal-city").html(city);
    $(".modal").modal("show");
});
