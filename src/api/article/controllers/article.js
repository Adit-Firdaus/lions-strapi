"use strict";

/**
 * article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async find(ctx) {
    return await strapi.entityService.findMany("api::article.article", {
      populate: "*",
    });
  },
}));
