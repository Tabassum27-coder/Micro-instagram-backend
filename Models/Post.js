const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const User = require('./User');

const Post = sequelize.define('Post', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.TEXT, allowNull: false },
  description: { type: DataTypes.TEXT },
  userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
  images: { type: DataTypes.JSON },
});

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = Post;
