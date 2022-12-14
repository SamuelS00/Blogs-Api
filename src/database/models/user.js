module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    timestamps: false,
    tablename: 'Users'
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, 
      { foreignKey: 'userId', as: 'blogpost' });
  };

  return User;
};