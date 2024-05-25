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
        like: false,
      },
      {
        id: 2,
        name: '서비스이름2',
        price: 20000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
      {
        id: 3,
        name: '서비스이름3',
        price: 35000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
      {
        id: 4,
        name: '서비스이름4',
        price: 26000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        like: false,
      },
    ])
  }),
  http.get(`/api/services/:id`, ({ request }) => {
    console.log('서비스상세')
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    // 가격을 한국 원 단위로 변환하는 함수
    const formatPriceToKRW = (price: string) => {
      return `${parseInt(price, 10).toLocaleString('ko-KR')}`
    }

    // faker에서 가격을 생성하고 원 단위로 변환
    const price = faker.commerce.price()
    const priceInKRW = formatPriceToKRW(price)
    return HttpResponse.json({
      id,
      name: faker.commerce.productName(),
      price: priceInKRW,
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
    console.log(id)
    console.log('서비스 좋아요')
    return HttpResponse.json('ok')
  }),
  http.delete('/api/services/:id', async ({ params }) => {
    const { id } = params
    console.log(id)
    console.log('서비스 좋아요 취소')
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
  http.get('/api/history', () => {
    console.log('구매 내역')
    return HttpResponse.json([
      {
        id: 1,
        name: '서비스이름1',
        price: 2000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.recent(),
      },
      {
        id: 2,
        name: '서비스이름2',
        price: 20000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
      {
        id: 3,
        name: '서비스이름3',
        price: 35000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
      {
        id: 4,
        name: '서비스이름4',
        price: 26000,
        image: faker.image.urlLoremFlickr({ category: 'Goods' }),
        date: faker.date.past(),
      },
    ])
  }),
]
