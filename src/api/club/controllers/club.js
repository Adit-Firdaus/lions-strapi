"use strict";

/**
 * club controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::club.club", ({ strapi }) => ({
  async find(ctx) {
    return await strapi.entityService.findMany("api::club.club", {
      populate: "*",
    });
  },
}));
