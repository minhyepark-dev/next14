'use client'

import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

const schema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .min(8, '최소 8자 이상 입력해야합니다.')
    .max(16, '비밀번호는 16자 이하로 입력해주세요')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
      '비밀번호는 영어, 숫자, 특수문자만 가능합니다.',
    )
    .required('비밀번호를 입력해주세요'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
})

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })

  // 비밀번호 변경
  const postNewPassword = async (password: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/password`,
        {
          method: 'post',
          body: JSON.stringify({ password }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const data = await response.json()
      console.log(data)
      if (data === 'ok') {
        alert('비밀번호가 변경되었습니다.')
        reset()
      }
    } catch (error) {
      console.error(error)
    }
  }

  const onClickSubmit = (data: FormData) => {
    postNewPassword(data.password)
  }

  interface FormData {
    password: string
    passwordConfirm?: string
  }
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Profile Edit</h1>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <div className="profileBox content2">
            <Input
              label="비밀번호"
              type="password"
              placeHolder="비밀번호"
              isRequired
              isError={!!errors.password?.message}
              bottomText={errors.password?.message}
              {...register('password')}
            />
            <Input
              label="비밀번호 확인"
              type="password"
              placeHolder="비밀번호 확인"
              isRequired
              isError={!!errors.passwordConfirm?.message}
              bottomText={errors.passwordConfirm?.message}
              {...register('passwordConfirm')}
            />
            <Button
              type="submit"
              width="default"
              btnStyle="bgGreen"
              className="bold"
              disabled={!isValid}
            >
              수정
            </Button>
          </div>
        </form>
      </InnerLayout>
    </main>
  )
}
