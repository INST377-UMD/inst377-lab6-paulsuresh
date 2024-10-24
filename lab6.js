
function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
    }

    const latitude_1 = getRandomInRange(30, 35, 3);
    const longitude_1 = getRandomInRange(-90, -100, 3);

    const latitude_2 = getRandomInRange(30, 35, 3);
    const longitude_2 = getRandomInRange(-90, -100, 3);

    const latitude_3 = getRandomInRange(30, 35, 3);
    const longitude_3 = getRandomInRange(-90, -100, 3);

    console.log(latitude_1, longitude_1, latitude_2, longitude_2, latitude_3, longitude_3)





function fetch_locatlity(latitude, longitude, h4_id){
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`

    fetch(url)
        .then((res)=> res.json())
        .then(data => {
            const locality = data.locality
            console.log(`Element: ${h4_id} Locality: ${locality}`)
            document.getElementById(h4_id).innerHTML = `Locality: ${locality}`

        })
        

}





function create_map() {
    var map = L.map('map').setView([38.9869, -76.9426], 3.2);  // coords, and zoom = 17

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker_1 = L.marker([latitude_1, longitude_1]).addTo(map);
    var marker_2 = L.marker([latitude_2, longitude_2]).addTo(map);
    var marker_3 = L.marker([latitude_3, longitude_3]).addTo(map);

    document.getElementById('marker_1_text').innerHTML = `Marker 1-  Latitude: ${latitude_1}, Longitude: ${longitude_1}` 
    document.getElementById('marker_2_text').innerHTML = `Marker 2-  Latitude: ${latitude_2}, Longitude: ${longitude_2}` 
    document.getElementById('marker_3_text').innerHTML = `Marker 3-  Latitude: ${latitude_3}, Longitude: ${longitude_3}` 

    fetch_locatlity(latitude_1,longitude_1,'Locality_1_text')
    fetch_locatlity(latitude_2,longitude_2,'Locality_2_text')
    fetch_locatlity(latitude_3,longitude_3,'Locality_3_text')


}



window.onload = create_map