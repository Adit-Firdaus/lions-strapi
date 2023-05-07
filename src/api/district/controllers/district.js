"use strict";

/**
 * district controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::district.district",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany("api::district.district", {
        populate: "*",
      });
    },
  })
);
