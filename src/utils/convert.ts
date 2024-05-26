import dayjs from 'dayjs'

// 가격을 한국 원 단위로 변환하는 함수
export const formatPriceToKRW = (price: number) => {
  return `${parseInt(String(price), 10).toLocaleString('ko-KR')}`
}

export const formatDateYYMMDD = (date: string) => {
  return dayjs(date).format('YY-MM-DD')
}

export const formatDateYYMMDDtoKorean = (date: string) => {
  return dayjs(date).format('YY년 MM월 DD일')
}
