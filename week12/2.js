function getCoffeeDetail(id) {
    return fetch('https://api.sampleapis.com/coffee/hot')
    .then(response => response.json())
    .then(data => console.log(data));
    
    }
    getCoffeeDetail(6).then(coffeeDetail => {
    if (coffeeDetail.title === "Doppio") {
    alert("Done")
    } else {
    alert("There is some problems")
    }
    })