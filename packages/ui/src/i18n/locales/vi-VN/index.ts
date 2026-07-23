import enUS from '../en-US'
import core from './core'
// Khi dịch thêm file nào thì bỏ comment dòng import + dòng spread tương ứng bên dưới
// import favorites from './favorites'
import prompt from './prompt'
// import models from './models'
// import templates from './templates'
import testing from './testing'
// import context from './context'
// import image from './image'
// import errors from './errors'

const messages = {
  ...enUS,   // nền tiếng Anh — phần nào chưa dịch sẽ dùng cái này
  ...core,   // chồng bản tiếng Việt của core lên
  // ...favorites,
  ...prompt,
  // ...models,
  // ...templates,
  ...testing,
  // ...context,
  // ...image,
  // ...errors,
} as const;

export default messages;
