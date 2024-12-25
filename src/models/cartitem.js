"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CartItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Cart,{
                foreignKey:"cartId",
                onDelete: "CASCADE",
            });
        }
    }
    CartItem.init(
        {
            cartId: { type: DataTypes.STRING, allowNull: false },
            productId: { type: DataTypes.STRING, allowNull: false },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
            price: { type: DataTypes.INTEGER, allowNull: false },
            total: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "CartItem",
        }
    );
    return CartItem;
};
