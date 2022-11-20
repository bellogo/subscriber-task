module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    underscored: true,
  });
  users.associate = (models) => {
    users.hasMany(models.user_subscribers, { as: "subscribers", foreignKey: "user_id"});
  }
  return users;
};
