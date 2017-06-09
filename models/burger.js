
module.exports = function(sequelize, DataTypes) {
	var burgersModel = sequelize.define("burgersModel", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return burgersModel;


}