"use strict";

/**
 * member-rank controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::member-rank.member-rank",
  ({ strapi }) => ({
    async find(ctx) {
      return await strapi.entityService.findMany(
        "api::member-rank.member-rank",
        {
          populate: "*",
        }
      );
    },
  })
);
