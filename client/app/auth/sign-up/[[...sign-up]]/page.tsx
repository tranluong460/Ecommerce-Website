import { Metadata } from "next";
import SignUpForm from "../_components/SignUpForm";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Đăng ký",
    description: "Đăng ký",
  };
};

const RegisterPage = () => {
  return (
    <section className="max-w-screen-xl m-0 sm:m-3 sm:rounded-lg flex justify-center flex-1 bg-background border dark:border-secondary min-h-screen">
      <SignUpForm />

      <div className="flex-1 text-center hidden lg:flex">
        <div
          className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        />
      </div>
    </section>
  );
};

export default RegisterPage;
