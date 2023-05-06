"use strict";

/**
 * member controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::member.member", ({ strapi }) => ({
  async find() {
    const member = await strapi.plugins[
      "users-permissions"
      // only dislay the avatar id
    ].services.user.fetchAll({
      populate: {
        avatar: true,
      },
    });

    const sanitizedMember = member.map((entity) => {
      const {
        username,
        name,
        avatar,
        address,
        phone,
        achivements,
        awards,
        social,
        districts,
        clubs,
      } = entity;

      return {
        username,
        name,
        avatar,
        address,
        phone,
        achivements,
        awards,
        social,
        districts,
        clubs,
      };
    });

    return sanitizedMember;
  },
}));
