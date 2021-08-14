module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Universities',
      [
        {
          name: 'University of Rwanda',
          website: 'www.ur.ac.rw',
          location: 'Rwanda - Kigali',
          fees: '2000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'University of Kigali',
          website: 'www.uk.ac.rw',
          location: 'Rwanda - Kigali',
          fees: '400',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Universities', null, {}),
};
