module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
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
    users.belongsToMany(models.users, {through: models.user_subscribers, foreignKey: "user_id", onDelete: "cascade", as: 'subscribers' });
  }
  return users;
};
