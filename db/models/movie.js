const Sequelize = require ('sequelize')

module.exports = (sequelize) => {
    class Movie extends Sequelize.Model {}
    Movie.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty:{
                    msg: "Please provide a value for the title"
                },
                notNull: {
                    msg: "Please provide a value for the title"
                }
            }
        },
        runtime: {
            type: Sequelize.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please provide a value for the title"
                },
                min: {
                    args: 1,
                    msg: "Please add a value higher than 0 to 'runtime'"
                }
            }
        },
        releaseDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Please provide a value for the title"
                }
            }
        },
        isAvailableOnVHS: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {sequelize});
    return Movie
}