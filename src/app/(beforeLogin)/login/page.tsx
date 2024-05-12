import React from 'react'
import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Login</h1>
        <form>
          <Input label="이메일" type="email" placeHolder="이메일" isRequired />
          <Input
            label="비밀번호"
            type="password"
            placeHolder="비밀번호"
            isRequired
          />
          <Button width="default" btnStyle="bgGreen" className="bold">
            로그인
          </Button>
          {/* 추후 소셜 로그인 구글, 카카오 추가 */}
        </form>
      </InnerLayout>
    </main>
  )
}
