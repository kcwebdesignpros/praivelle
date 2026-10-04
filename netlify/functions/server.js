'use strict';
/**
 * Netlify runs no long-lived Node process, so the whole Express app is mounted
 * inside a single catch-all function via serverless-http.
 *
 * Requires `included_files` in netlify.toml — the template engine reads views
 * from disk at runtime, which a bundler cannot discover on its own.
 */

const serverless = require('serverless-http');
const app = require('../../server');

module.exports.handler = serverless(app);
