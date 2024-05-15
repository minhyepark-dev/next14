import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Sign Up</h1>
        <form>
          <Input label="이메일" type="email" placeHolder="이메일" isRequired />
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
