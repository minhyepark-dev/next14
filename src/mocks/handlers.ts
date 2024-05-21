import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'

// function generateDate() {
//   const lastWeek = new Date(Date.now())
//   lastWeek.setDate(lastWeek.getDate() - 7)
//   return faker.date.between({
//     from: lastWeek,
//     to: Date.now(),
//   })
// }
const User = [
  { id: 'minhye', nickname: 'Elon Musk', image: faker.image.avatar() },
  { id: 'zerohch0', nickname: '제로초', image: faker.image.avatar() },
  { id: 'leoturtle', nickname: '레오', image: faker.image.avatar() },
]

// const Posts = []

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인')
    return HttpResponse.json(User[1], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    })
  }),
  http.post('/api/logout', () => {
    console.log('로그아웃')
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  http.post('/api/users', async () => {
    console.log('회원가입')
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    })
  }),
  http.get('/api/category', () => {
    console.log('카테고리 ')
    return HttpResponse.json([
      { id: 1, name: '카테고리1', image: faker.image.avatar() },
      { id: 2, name: '카테고리2', image: faker.image.avatar() },
      { id: 3, name: '카테고리3', image: faker.image.avatar() },
    ])
  }),
  http.get('/api/banners', () => {
    console.log('배너')
    return HttpResponse.json([
      {
        id: 1,
        name: '배너1',
        image: faker.image.urlLoremFlickr({ category: 'advertisement' }),
      },
      {
        id: 2,
        name: '배너2',
        image: faker.image.urlLoremFlickr({ category: 'advertisement' }),
      },
      {
        id: 3,
        name: '배너3',
        image: faker.image.urlLoremFlickr({ category: 'advertisement' }),
      },
    ])
  }),
  http.get('/api/services', () => {
    console.log('서비스리스트')
    return HttpResponse.json([
      {
        id: 1,
        name: '서비스이름1',
        price: 2000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
      },
      {
        id: 2,
        name: '서비스이름2',
        price: 20000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
      },
      {
        id: 3,
        name: '서비스이름3',
        price: 35000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
      },
      {
        id: 4,
        name: '서비스이름4',
        price: 26000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
      },
    ])
  }),
]
