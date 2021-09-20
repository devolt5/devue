// eslint-disable-next-line no-unused-vars

// FIXME only works with require, see below
const { Nuxt, Builder } = require('nuxt')
const request = require('supertest')
const nuxtConfig = require('../nuxt.config.js')

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
beforeAll(async () => {
  // const config = {
  //   dev: process.env.NODE_ENV === 'production',
  //   rootDir: resolve(__dirname, '../'),
  //   mode: 'universal',
  //   plugins,
  //   modules
  // }

  // FIXME i18n is missing as a module
  // maybe read https://test-utils.nuxtjs.org/examples/module

  // FIXME this line is a problem, running with nodejs means running the test not(!) as a module
  // we have to run it via babel-node, see https://github.com/mochajs/mocha/issues/4531
  nuxt = new Nuxt({...nuxtConfig, server: { port: 3001}, buildDir: '.nuxt-build-jest'})

  await new Builder(nuxt).build()

  await nuxt.server.listen(3001, 'localhost')
}, 300000)

// Example of testing only generated html
describe('GET /', () => {
  test('Route / exits and render HTML', async () => {
    const { html } = await nuxt.server.renderRoute('/', {})

    expect(html).toContain('Vuetify')
  })
})

describe('GET /', () => {
  test('returns status code 200', async () => {
    const response = await request(nuxt.server.app).get('/')
    expect(response.statusCode).toBe(200)
  })
})

describe('GET /test', () => {
  test('returns status code 404', async () => {
    const response = await request(nuxt.server.app).get('/test')
    expect(response.statusCode).toBe(404)
  })
})

// Close server and ask nuxt to stop listening to file changes
afterAll(() => {
  nuxt.close()
})
