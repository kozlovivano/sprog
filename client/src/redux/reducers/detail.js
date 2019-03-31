const initState = {
    detail:{
        id: 1,
        name: "Pod2 soft play",
        price: "$25",
        facilities: ["home", "baby", "wheelchair"],
        face: ["https://loremflickr.com/320/220/brazil,rio", "https://loremflickr.com/g/320/220/paris,girl/all", "https://loremflickr.com/g/320/220/paris", "https://loremflickr.com/320/220"],
        age_range: ["A", "B", "C", "D"],
        hours: [
            {
                day: "MON",
                open: "09:30",
                close: "17:00"
            },
            {
                day: "TUE",
                open: "09:30",
                close: "17:00"
            },
            {
                day: "WED",
                open: "09:30",
                close: "17:00"
            },
            {
                day: "THR",
                open: "09:30",
                close: "17:00"
            },
            {
                day: "FRI",
                open: "09:30",
                close: "17:00"
            },
            {
                day: "SAT",
                open: "10:30",
                close: "16:00"
            },
            {
                day: "SUN",
                open: "-",
                close: "-"
            }
        ],
        distance: "3.42 Miles",
        location: {
            address: "St. James House",
            address2: "9-15 St Jamse road",
            city: "Kingstone",
            postal_code: "KT6 4OH"
        },
        contact: {
            phone: "0208 445 6334",
            email: "pod2softplay@mail.com",
            site: "https://pod2softplaygroup.org"
        },
        description: "Lorem ipsum dolor sit amet, dolorem eloquentiam pri te, ne malorum fabulas imperdiet ius. Qui ea nobis expetenda adversarium. Ancillae euripidis moderatius ad sit. Iudicabit splendide eu pri, affert albucius explicari in sed. Pri habeo omittam disputationi eu. Lorem ipsum dolor sit amet, dolorem eloquentiam pri te, ne malorum fabulas imperdiet ius. Qui ea nobis expetenda adversarium. Ancillae euripidis moderatius ad sit. Iudicabit splendide eu pri, affert albucius explicari in sed. Pri habeo omittam disputationi eu. Lorem ipsum dolor sit amet, dolorem eloquentiam pri te, ne malorum fabulas imperdiet ius. Qui ea nobis expetenda adversarium. Ancillae euripidis moderatius ad sit. Iudicabit splendide eu pri, affert albucius explicari in sed. Pri habeo omittam disputationi eu."
    },
    facilities: [
        "home", "tree", "wifi", "parking", "utensils", "wheelchair", "restroom", "baby"
    ]
}

const result = (state = initState, action) => {
    return state;
}

export default result;