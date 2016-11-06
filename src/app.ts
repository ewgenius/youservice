import { config } from 'dotenv'
import * as keystone from 'keystone'

config()

keystone.init({
  name: 'youservice',
  brand: 'youservice',
  'auto update': true,
  'cookie secret': process.env.COOKIE_SECRET,
  session: true,
  auth: true,
  'user model': 'User',
  mongo: process.env.MONGO_URL
});

(keystone as any).import('models')

keystone.set('routes', require('./routes'))

keystone.start({
  onHttpServerCreated() {
    keystone.mongoose.Promise = Promise
  }
})