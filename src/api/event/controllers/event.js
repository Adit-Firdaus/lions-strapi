"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async find(ctx) {
    return await strapi.entityService.findMany("api::event.event", {
      populate: "*",
    });
  },
}));
