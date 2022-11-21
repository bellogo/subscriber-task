module.exports = function(sequelize, DataTypes) {
  const user_subscribers = sequelize.define('user_subscribers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subscriber_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
  }, {
    sequelize,
    tableName: 'user_subscribers',
    timestamps: true,
    underscored: true,
    
  });
  user_subscribers.associate = (models) => {
    user_subscribers.belongsTo(models.users, { as: "user", foreignKey: "user_id"});
    user_subscribers.belongsTo(models.users, { foreignKey: "subscriber_id"});

  }
  return user_subscribers;
};
