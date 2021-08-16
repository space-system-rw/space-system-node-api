module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Reviews',
    [
      {
        name: 'Samuel Nayo',
        universityId: 1,
        review: "The University of Rwanda is Rwanda's largest higher education institution. University of Rwanda was formed in 2013 through the merger of previously independent public institutions of higher education, the largest of which was the National University of Rwanda. The UR's vice-chancellor is Alexandre Lyambabaje.",
        rating: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob Bobo',
        universityId: 1,
        review: "The University of Rwanda experience extends well beyond the classroom. Students participate in leadership development, industry internships and practicums, and a suite of career services, including job search workshops and an annual career fair that facilitates formal engagement between prospective employers and students.",
        rating: '3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jon Doe',
        universityId: 2,
        review: 'CMU-Africa’s vision is to educate and empower the next generation of African leaders and innovators by delivering a world-class educational experience.',
        rating: '5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doe',
        universityId: 3,
        review: 'The African Institute for Mathematical Sciences (AIMS) is a pan-African network of centres of excellence enabling Africa’s talented students to become innovators driving the continent’s scientific, educational and economic self-sufficiency.',
        rating: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jane Doe',
        universityId: 3,
        review: 'The African Institute for Mathematical Sciences (AIMS) is a pan-African network of centres of excellence enabling Africa’s talented students to become innovators driving the continent’s scientific, educational and economic self-sufficiency.',
        rating: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Test Doe',
        universityId: 2,
        review: 'Life at CMU-Africa is driven by the interests of the students. You can take ownership of your experience through a number of initiatives on campus such as Toastmasters, Data Science Club or Facebook Developer Circle. You can also practice your entrepreneurship skills and start your own initiatives!',
        rating: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joshua Doe',
        universityId: 2,
        review: 'Life at CMU-Africa is driven by the interests of the students. You can take ownership of your experience through a number of initiatives on campus such as Toastmasters, Data Science Club or Facebook Developer Circle. You can also practice your entrepreneurship skills and start your own initiatives!',
        rating: '4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {}
  ),
  
  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Review', null, {}),
};
