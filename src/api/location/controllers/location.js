"use strict";

/**
 * location controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::location.location",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::location.location", {
        populate: "*",
      });
    },
  })
);
