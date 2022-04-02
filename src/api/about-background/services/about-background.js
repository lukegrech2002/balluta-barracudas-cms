'use strict';

/**
 * about-background service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-background.about-background');
