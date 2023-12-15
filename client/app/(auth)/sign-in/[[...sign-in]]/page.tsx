import { SignIn } from "@clerk/nextjs";
import Logo from "@/app/_components/Logo";

const LoginPage = () => {
  return (
    <div className="max-w-screen-xl m-0 sm:m-6 sm:rounded-lg flex justify-center flex-1 bg-background border dark:border-secondary">
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:px-12">
        <Logo />

        <div className="flex items-center pt-3">
          <SignIn />
        </div>
      </div>

      <div className="flex-1 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
