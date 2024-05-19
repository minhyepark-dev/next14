'use client'

import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'
import Button from '@/components/button/Button'

const schema = yup.object().shape({
  id: yup
    .string()
    .trim()
    .min(4, '최소 4자 이상 입력해야합니다.')
    .matches(/^[a-zA-Z0-9]*$/, '아이디는 숫자와 영문자만 가능합니다.')
    .required('아이디를 입력해주세요'),
  email: yup
    .string()
    .email('이메일 형식이 아닙니다')
    .required('이메일을 입력해주세요'),
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
  numberConfirm: yup.string().required('인증번호를 입력해주세요'),
})

export default function Home() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  })
  const [showVerificationInput, setShowVerificationInput] = useState(false)

  const onClickButton = () => {
    setShowVerificationInput(true)
  }

  const onClickSubmit = async (formData: FormData) => {
    'use server'

    let shouldRedirect = false
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          method: 'post',
          body: JSON.stringify(formData),
          credentials: 'include',
        },
      )
      if (response.status === 403) {
        return { message: 'user_exists' }
      }
      shouldRedirect = true
    } catch (err) {
      console.error(err)
      return null
    }
    if (shouldRedirect) {
      router.push('/')
    }
    return null
  }

  interface FormData {
    id: string
    email: string
    password: string
    passwordConfirm?: string
    numberConfirm: string
  }

  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Sign Up</h1>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <Input
            label="아이디"
            type="text"
            placeHolder="아이디"
            isRequired
            isError={!!errors.id?.message}
            bottomText={errors.id?.message}
            {...register('id')}
          />
          <Input
            label="이메일"
            type="email"
            placeHolder="이메일"
            isRequired
            className="withSmallButton"
            isButton="인증"
            onClick={onClickButton}
            isError={!!errors.email?.message}
            bottomText={errors.email?.message}
            {...register('email')}
          />
          {showVerificationInput && (
            <Input
              label="인증번호"
              type="text"
              placeHolder="인증번호"
              isRequired
              className="withSmallButton"
              isButton="확인"
              onClick={onClickButton}
              isError={!!errors.numberConfirm?.message}
              bottomText={errors.numberConfirm?.message}
              {...register('numberConfirm')}
            />
          )}
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
            회원가입
          </Button>
        </form>
      </InnerLayout>
    </main>
  )
}
