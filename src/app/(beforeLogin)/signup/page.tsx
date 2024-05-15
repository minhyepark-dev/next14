'use client'

import { useState } from 'react'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  const [showVerificationInput, setShowVerificationInput] = useState(false)
  const onClickButton = () => {
    setShowVerificationInput(true)
    console.log('이메일 인증')
  }
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Sign Up</h1>
        <form>
          <Input
            label="이메일"
            type="email"
            placeHolder="이메일"
            isRequired
            className="withSmallButton"
            isButton="인증"
            onClick={onClickButton}
          />
          {showVerificationInput && (
            <Input
              label="인증번호"
              type="email"
              placeHolder="인증번호"
              isRequired
              className="withSmallButton"
              isButton="확인"
              onClick={onClickButton}
            />
          )}
          <Input
            label="비밀번호"
            type="password"
            placeHolder="비밀번호"
            isRequired
          />
          <Input
            label="비밀번호 확인"
            type="password"
            placeHolder="비밀번호 확인"
            isRequired
          />
          <Button width="default" btnStyle="bgGreen" className="bold">
            회원가입
          </Button>
        </form>
      </InnerLayout>
    </main>
  )
}
