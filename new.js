let myDestinations = [
    {
        name: "Barcelona",
        score: 8.5,
        description: "Barcelona is the capital of Catalunya.",
        image: "https://media.timeout.com/images/105992807/750/422/image.webp",
        restaurants: [
            {
                name: "Nine",
                type: "Carvery",
                location: "https://maps.app.goo.gl/JNaPnbF8Hbb1bjS96",
                description: "Nine offers a unique carvery experience with a modern twist on traditional dishes."
            },
            {
                name: "Restaurant Prado De Flores",
                type: "Mediterranean restaurant",
                location: "https://maps.app.goo.gl/CjPXnRvwvFLHp5jp6",
                description: "Restaurant Prado De Flores serves fresh Mediterranean cuisine with an emphasis on local ingredients."
            },
            {
                name: "El Nacional",
                type: "Spanish restaurant",
                location: "https://maps.app.goo.gl/N4BQrMCENK1vxgZ86",
                description: "El Nacional features a variety of Spanish cuisines under one roof, providing a comprehensive culinary tour."
            }
        ]
    },
    {
        name: "Los Angeles",
        score: 7.9,
        description: "Los Angeles is in the west coast of the USA.",
        image: "https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg",
        restaurants: [
            {
                name: "Pico Cafe",
                type: "Kosher restaurant",
                location: "https://maps.app.goo.gl/jPiACPaA6RnSHvHp8",
                description: "Pico Cafe offers a delightful array of kosher dishes with a contemporary twist."
            },
            {
                name: "Angelini Osteria",
                type: "Italian restaurant",
                location: "https://maps.app.goo.gl/hyg1Usp6cbiTkRESA",
                description: "Angelini Osteria is renowned for its authentic Italian cuisine and warm, welcoming atmosphere."
            },
            {
                name: "Habayit",
                type: "Israeli restaurant",
                location: "https://maps.app.goo.gl/Mdupr54NbkQPn6aFA",
                description: "Habayit specializes in traditional Israeli dishes made with fresh, locally sourced ingredients."
            }
        ]
    },
    {
        name: "New York",
        score: 8.2,
        description: "New York is the biggest city in the USA.",
        image: "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
        restaurants: [
            {
                name: "Jerusalem Cafe",
                type: "Kosher restaurant",
                location: "https://maps.app.goo.gl/SaZZWsfbns6zqz4p6",
                description: "Jerusalem Cafe offers a rich menu of kosher Middle Eastern dishes in a cozy setting."
            },
            {
                name: "Club A",
                type: "Steak house",
                location: "https://maps.app.goo.gl/YrhBohnkcpuYmJMz5",
                description: "Club A is a top-notch steakhouse known for its prime cuts and elegant dining experience."
            },
            {
                name: "Boucherie West Village",
                type: "French restaurant",
                location: "https://maps.app.goo.gl/C6o3EhssptbonQmb9",
                description: "Boucherie West Village serves classic French cuisine in a charming, rustic setting."
            }
        ]
    }
]

localStorage.setItem("locations", JSON.stringify(myDestinations))