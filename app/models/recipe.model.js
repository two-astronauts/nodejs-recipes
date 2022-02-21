module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      detail: {
        type: Sequelize.TEXT
      }
    });
  
    return Recipe;
  };