import { Metadata } from "next";
import SignInForm from "../_components/SignInForm";
import "@/styles/auth/sign-in.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Đăng nhập",
    description: "Đăng nhập",
  };
};

const SignInPage = () => {
  return (
    <section className="sip-section">
      <SignInForm />

      <div className="sip-div-2">
        <div
          className="sip-div-3"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        />
      </div>
    </section>
  );
};

export default SignInPage;
