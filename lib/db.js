'use strict'

const Sequelize = require('sequelize')
let sequelize = null

module.exports = function setupDatabase(config) {
  if (!sequelize) {
    console.log({
      config
    })
    sequelize = new Sequelize(config)
    // sequelize = new Sequelize(
    //   'plaziverse',
    //   'plazi',
    //   'plazi',
    //   {
    //     host: process.env.DB_HOST || 'localhost',
    //     dialec: 'postgres',
    //     logging: s => debug(s),
    //     setup: true
    //   }
    // )
  }
  return sequelize
}
