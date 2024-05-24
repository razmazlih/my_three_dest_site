let myDestinations = JSON.parse(localStorage.getItem(locations))
console.log(myDestinations)
displayDestinations()

function addDestination() {
    let destinationName = document.getElementById('destinationName');
    let score = document.getElementById('score');
    let imageLink = document.getElementById('imageLink');
    let restaurantName = document.getElementById('restaurantName');
    let type = document.getElementById('type');
    let location = document.getElementById('location');
    let description = document.getElementById('description');

    let newDest = {
        name: destinationName.value,
        score: Number(score.value),
        image: imageLink.value,
        restaurants: [
            {
                name: restaurantName.value,
                type: type.value,
                location: location.value,
                description: description.value
            }
        ]
    }
    myDestinations.push(newDest)

    destinationName.value = '';
    score.value = '';
    imageLink.value = '';
    restaurantName.value = '';
    type.value = '';
    location.value = '';
    description.value = '';

    localStorage.setItem("locations", JSON.stringify(myDestinations))
}

function displayDestinations() {
    let finalStr = ''
    for (let i = 0; i < myDestinations.length; i++) {
        const destination = myDestinations[i];
        let finalRestaurantsStr = ''
        for (let idx = 0; idx < destination.restaurants.length; idx++) {
            const restaurant = destination.restaurants[idx];
            finalRestaurantsStr +=
                `
                <div class="restaurant">
                    <h2>${restaurant.name}</h2>
                    <span class="type">${restaurant.type}</span>
                    <br>
                    <p class="description">${restaurant.description}</p>
                    <span class="location"><a href="${restaurant.location}">Location Link</a></span>
                </div>
                <br>
                `
        }
        finalStr +=
            `
            <div class="destination">
            <h1>${destination.name}</h1>
            <h3>score - ${destination.score}</h3>
            <p>${destination.description}<br>
            <img src="${destination.image}" class="dest-img">
            <h4>Restaurants in This Place:</h4>
            ${finalRestaurantsStr}
            </div>
            `
    }
    display.innerHTML = finalStr
}