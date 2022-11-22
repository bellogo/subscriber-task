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
    users.belongsToMany(models.users, {as: 'subscriptions', through: models.user_subscribers, foreignKey: "subscriber_id", onDelete: "cascade", otherKey: 'user_id'});
    users.hasMany(models.user_subscribers, { as: "userSubscriptions", foreignKey: "subscriber_id"});

  }
  return users;
};