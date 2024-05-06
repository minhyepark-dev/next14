import React from "react";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className="innerLayout">
      <h1 className="h1 marginBottom32">Login</h1>
      <form>
        <div className="inputWrap">
          <label htmlFor="email" className="content2">
            이메일
          </label>
          <input id="email" type="email" placeholder="이메일" required />
        </div>
        <div className="inputWrap">
          <label htmlFor="password" className="content2">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호"
            required
          />
        </div>
        <Button width="default" style="bgGreen" className="bold">
          로그인
        </Button>
        {/* 추후 소셜 로그인 구글, 카카오 추가 */}
      </form>
    </main>
  );
}
