import { Metadata } from "next";
import SignUpForm from "../_components/SignUpForm";
import "@/styles/auth/sign-up.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Đăng ký",
    description: "Đăng ký",
  };
};

const RegisterPage = () => {
  return (
    <section className="sup-section">
      <SignUpForm />

      <div className="sup-div-2">
        <div
          className="sup-div-3"
          style={{
            backgroundImage: "url('/background.svg')",
          }}
        />
      </div>
    </section>
  );
};

export default RegisterPage;
