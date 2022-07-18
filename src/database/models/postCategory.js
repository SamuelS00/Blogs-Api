module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      }
    }, {
      tableName: 'PostCategories',
      timestamps: false
    });
  
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'BlogPosts',
        through: PostCategory,
        foreignKey: 'id',
        otherKey: 'id'
      });
  
      models.BlogPost.belongsToMany(models.Category, {
        as: 'Categories',
        through: PostCategory,
        foreignKey: 'id',
        otherKey: 'id'
      });
    }
  
    return PostCategory;
};