import SignInClient from "./SignInClient";

export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-100 to-cyan-300">
        <div className="max-w-md w-full space-y-8">
          <SignInClient />
        </div>
      </div>
    </>
  );
}
