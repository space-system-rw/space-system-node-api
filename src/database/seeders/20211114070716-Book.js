module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Books',
    [
      {
        title: "Eloquent JavaScript"
      }
    ]
  )
  // {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  // },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
