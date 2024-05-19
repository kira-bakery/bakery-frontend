"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

function Login() {
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log(session ? session : "");

  return (
    <nav className="flex items-center justify-between px-6">
      {session ? (
        <button onClick={() => signOut()}> 로그아욱</button>
      ) : (
        //세션 정보가 없으면 signIn()호출
        <>
          <button onClick={() => signIn("google")}> 구글 로그인</button>
          <button onClick={() => signIn("naver")}> 네이버 로그인</button>
          <button onClick={() => signIn("kakao")}> 카카오 로그인</button>
        </>
      )}
    </nav>
  );
}

export default Login;
