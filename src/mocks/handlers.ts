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
      {
        id: 'sneakers',
        name: '스니커즈',
        image: faker.image.urlLoremFlickr({ category: 'sneakers' }),
      },
      {
        id: 'sandal',
        name: '샌들',
        image: faker.image.urlLoremFlickr({ category: 'sandal' }),
      },
      {
        id: 'loafer',
        name: '로퍼',
        image: faker.image.urlLoremFlickr({ category: 'loafer' }),
      },
      {
        id: 'uggs',
        name: '어그',
        image: faker.image.urlLoremFlickr({ category: 'uggs' }),
      },
      {
        id: 'slippers',
        name: '슬리퍼',
        image: faker.image.urlLoremFlickr({ category: 'slippers' }),
      },
      {
        id: 'flats',
        name: '단화',
        image: faker.image.urlLoremFlickr({ category: 'flats' }),
      },
      {
        id: 'rainboots',
        name: '장화',
        image: faker.image.urlLoremFlickr({ category: 'rainboots' }),
      },
    ])
  }),
  http.get('/api/:category/lists', ({ params }) => {
    console.log('카테고리 리스트')
    const { category } = params
    return HttpResponse.json([
      {
        id: 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: `${category}` }),
        like: false,
      },
      {
        id: 2,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: `${category}` }),
        like: false,
      },
      {
        id: 3,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: `${category}` }),
        like: false,
      },
      {
        id: 4,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: `${category}` }),
        like: false,
      },
    ])
  }),
  http.get('/api/banners', () => {
    console.log('배너')
    return HttpResponse.json([
      {
        id: 'loafer',
        name: '배너1',
        image: faker.image.urlLoremFlickr({ category: 'advertisement' }),
      },
      {
        id: 'flats',
        name: '배너2',
        image: faker.image.urlLoremFlickr({ category: 'advertisement' }),
      },
      {
        id: 'sneakers',
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
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
      {
        id: 2,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
      {
        id: 3,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
      {
        id: 4,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
    ])
  }),
  http.get('/api/services/like', () => {
    console.log('좋아요 리스트')
    return HttpResponse.json([
      {
        id: 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: true,
      },
      {
        id: 2,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: true,
      },
      {
        id: 3,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: true,
      },
      {
        id: 4,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: true,
      },
    ])
  }),
  http.get(`/api/services/:id`, ({ request }) => {
    console.log('서비스상세')
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    return HttpResponse.json({
      id,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      images: [
        faker.image.urlLoremFlickr({ category: 'Shoes' }),
        faker.image.urlLoremFlickr({ category: 'Shoes' }),
        faker.image.urlLoremFlickr({ category: 'Shoes' }),
        faker.image.urlLoremFlickr({ category: 'Shoes' }),
      ],
    })
  }),
  http.post('/api/services/:id', async ({ params }) => {
    const { id } = params
    console.log(`${id}서비스 좋아요`)
    return HttpResponse.json('ok')
  }),
  http.delete('/api/services/:id', async ({ params }) => {
    const { id } = params
    console.log(`${id}서비스 좋아요 취소`)
    return HttpResponse.json('ok')
  }),
  http.get(`/api/profile`, () => {
    console.log('프로필')
    return HttpResponse.json({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      image: faker.image.avatar(),
    })
  }),
  // 프로필 비밀번호 수정
  http.post('/api/profile/password', async ({ request }) => {
    console.log('비밀번호 수정')
    const { password } = (await request.json()) as { password: string }
    console.log('New password:', password)
    return HttpResponse.json('ok')
  }),
  // 구매 내역 리스트
  http.get('/api/histories', () => {
    console.log('구매 내역')
    return HttpResponse.json([
      {
        id: 1,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.recent(),
      },
      {
        id: 2,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
      {
        id: 3,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
      {
        id: 4,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
    ])
  }),
  // 구매 내역 상세
  http.get('/api/history/:id', ({ params }) => {
    const { id } = params
    console.log('구매 내역 상세')
    return HttpResponse.json({
      id: 1,
      name: `서비스이름 ${id}`,
      price: {
        totalProductPrice: faker.commerce.price(),
        totalDeliveryPrice: faker.commerce.price(),
        totalPrice: faker.commerce.price(),
      },
      date: faker.date.past(),
      products: [
        {
          id: 1,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.urlLoremFlickr({ category: 'Goods' }),
          quantity: 1,
        },
        {
          id: 2,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.urlLoremFlickr({ category: 'Goods' }),
          quantity: 2,
        },
        {
          id: 3,
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
          image: faker.image.urlLoremFlickr({ category: 'Goods' }),
          quantity: 4,
        },
      ],
    })
  }),
]
