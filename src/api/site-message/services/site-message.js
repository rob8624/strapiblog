'use strict';

/**
 * site-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-message.site-message');
