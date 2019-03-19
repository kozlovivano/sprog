const initState = {
    stories: [
        { 
            id: 1, 
            title: "Our story", 
            img: "https://picsum.photos/360/240?random", 
            content: [
                "We began in 2018, I had been reconnecting with my eldest son over the past few years and felt he was really struggling to from a relationship with him. I found he was often breaking the bank when seeing him and just doing the same things every time as I really didn't know the area well.", 
                " I would discuss this frustration usually the next day at work with Courtney and we both questioned why there couldn't be something so simple? Something that could take all this into account and provide you with places to go? ",
                " After months of working on various ideas we founded this platform and now hopefully sprog helps you like its helped us." 
            ]
        },
        {
            id: 2, 
            title: "Our vision", 
            img: "https://source.unsplash.com/360x240", 
            content: [
                "We founded Sprog in the hop of reconnecting with our children and creating great memories together. So, like the simplicity of our app, our vision at sprog is simple. ",
                " To connect others and inspire people to realize that 'Whatever the situation, you can create the best outcome.' ",
                " founded this platform and now hopefully sprog helps you like its helped us." 
            ]
        }
    ]
}

const aboutus = (state = initState, action) => {
    return state;
}

export default aboutus;