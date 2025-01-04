const app = require('./app');
const sequelize = require('./db/connection');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database connected!');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});
