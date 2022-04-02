'use strict';

/**
 * home-background service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-background.home-background');
