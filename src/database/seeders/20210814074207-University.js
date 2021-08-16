module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Universities',
      [
        {
          name: 'University of Rwanda',
          website: 'www.ur.ac.rw',
          location: 'Kicukiro, Kigali, Rwanda',
          fees: '2000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Carnegie Mellon University - Africa',
          website: 'www.africa.engineering.cmu.edu',
          location: 'Gasabo, Kigali, Rwanda',
          fees: '16000',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'African Institute for Mathematical Sciences',
          website: 'www.aims.ac.rw',
          location: 'Gasabo, Kigali, Rwanda',
          fees: '4500',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Universities', null, {}),
};
