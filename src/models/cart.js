"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Cart.init(
        {
            userId: { 
              type: DataTypes.STRING,
              allowNull: false,
             },
            status: {
              type:DataTypes.ENUM, 
              values: ['Active', 'Abandoned'],
              defaultValue: 'Active',
              allowNull:false
            },
        },
        
        {
            sequelize,
            modelName: "Cart",
        }
    );
    return Cart;
};
