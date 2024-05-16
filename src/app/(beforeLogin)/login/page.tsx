'use client'

import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

const schema = yup.object({
  id: yup
    .string()
    .min(4, '최소 4자 이상 입력해야합니다.')
    .matches(/^[a-zA-Z0-9]*$/, '아이디는 숫자와 영문자만 가능합니다.')
    .required('아이디를 입력해주세요'),
  password: yup
    .string()
    .min(8, '최소 8자 이상 입력해야합니다.')
    .max(16, '비밀번호는 16자 이하로 입력해주세요')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/,
      '비밀번호는 영어, 숫자, 특수문자만 가능합니다.',
    )
    .required('비밀번호를 입력해주세요'),
})

export default function Home() {
  const {
    register,
    // handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      id: '',
      password: '',
    },
  })
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Login</h1>
        <form>
          <Input
            label="이메일"
            type="email"
            placeHolder="이메일"
            isRequired
            isError={!!errors.id?.message}
            {...register('id')}
          />
          <p>{errors.id?.message}</p>
          <Input
            label="비밀번호"
            type="password"
            placeHolder="비밀번호"
            isRequired
            isError={!!errors.password?.message}
            {...register('password')}
          />
          <p>{errors.password?.message}</p>

          <Button
            width="default"
            btnStyle="bgGreen"
            className="bold"
            disabled={!isValid}
          >
            로그인
          </Button>
          {/* 추후 소셜 로그인 구글, 카카오 추가 */}
        </form>
      </InnerLayout>
    </main>
  )
}
