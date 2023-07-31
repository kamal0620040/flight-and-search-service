'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name: 'Tribhuvan Airport',
      cityId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Pokhara Airport',
      cityId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Random Airport',
      cityId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
