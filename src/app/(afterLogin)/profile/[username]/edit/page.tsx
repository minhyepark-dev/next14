import Button from '@/components/button/Button'
import Input from '@/components/input/Input'
import InnerLayout from '@/components/layouts/InnerLayout'

export default function Home() {
  return (
    <main>
      <InnerLayout>
        <h1 className="h1 marginBottom32">Profile Edit</h1>
        <div className="profileBox content2">
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
            수정
          </Button>
        </div>
      </InnerLayout>
    </main>
  )
}
