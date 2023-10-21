//For the given JSON iterate over all for loops(for,for in,for of)

    const biodata ={
        Name: 'Ajith Kumar',
        Age: 24,
        DOB: "17-06-1999",
        Nationality: 'Indian',      
    };

    
        //for in

        for (let key in biodata){
            console.log(key,biodata[key]);
            }


        //for of

            const keys= Object.keys(biodata)
        for (let key of keys){
        console.log(key,biodata[key]);
        }