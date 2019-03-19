const initState = {
    businesses: [
        {
            id: 1,
            name: "Jungle Mania",
            face: "https://loremflickr.com/g/320/240/paris,girl/all",
            age_range: ["B", "C", "D"],
            status: "Open now",
            distance: "3.42 km"
        },
        {
            id: 2,
            name: "Clip & climb",
            face: "https://loremflickr.com/320/240/brazil,rio",
            age_range: ["B", "C", "D"],
            status: "Open now",
            distance: "4.42 km"
        },
        {
            id: 3,
            name: "Slough Ice Arena",
            face: "https://loremflickr.com/g/320/240/paris",
            age_range: ["B", "C", "D"],
            status: "Open now",
            distance: "5.42 km"
        },
        {
            id: 4,
            name: "The Natural History Museum",
            face: "https://loremflickr.com/320/240",
            age_range: ["A", "B", "C", "D"],
            status: "Open now",
            distance: "6.42 km"
        },
    ]
}

const home = (state = initState, action) => {
    return state;
}

export default home;