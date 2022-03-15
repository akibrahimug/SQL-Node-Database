
const db = require('./db');
const { Movie } = db.models;

(async() => {
    await db.sequelize.sync({force: true});
    try{
        await Promise.all([
            await Movie.create({
                title: "Toy Story",
                runtime: 112,
                releaseDate: "1995-01-12",
                isAvailableOnVHS: true
            }),
            await Movie.create({
                title: "Spider Man",
                runtime: 43,
                releaseDate: "2021-07-05",
                isAvailableOnVHS: false
            }),
            await Movie.create({
                title: "Iron Man",
                runtime: 78,
                releaseDate: "1895-10-08",
                isAvailableOnVHS: true
            }),
            await Movie.create({
                title: "Beauty and the beast",
                runtime: 155,
                releaseDate: "2010-04-02",
                isAvailableOnVHS: false
            })
        ])
        
    }catch (error){
        console.log("Error", error)
    }
}) ();

