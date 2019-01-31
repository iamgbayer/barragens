const { join } = require('path')

module.exports = {
  source: join(process.cwd(), `src`),
  build: join(process.cwd(), 'build'),
  public: join(process.cwd(), 'public'),
  data: join(process.cwd(), 'data/data.json')
}
