import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import "@/styles/client/contact.css";

const ContactPage = () => {
  return (
    <section className="ct-section">
      <div className="ct-div-1">
        <div
          className="ct-div-2"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="ct-div-3">
        <h2 className="ct-h2">Liên hệ</h2>
        <p className="ct-p">
          Hãy cho chúng tôi biết một chút về bản thân bạn và chúng tôi sẽ liên
          lạc lại ngay khi có thể.
        </p>
      </div>

      {/* Contact Form */}
      <div className="ct-div-4">
        <div className="ct-div-5">
          <div>
            <Label htmlFor="first-name" className="ct-label-1">
              Họ
            </Label>

            <div className="ct-div-6">
              <Input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="off"
                className="ct-input"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="last-name" className="ct-label-1">
              Tên
            </Label>
            <div className="ct-div-6">
              <Input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="off"
                className="ct-input"
              />
            </div>
          </div>

          <div className="ct-div-7">
            <Label htmlFor="email" className="ct-label-1">
              Email
            </Label>
            <div className="ct-div-6">
              <Input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                className="ct-input"
              />
            </div>
          </div>

          <div className="ct-div-7">
            <Label htmlFor="address" className="ct-label-1">
              Địa chỉ
            </Label>
            <div className="ct-div-6">
              <Input
                type="text"
                id="address"
                name="address"
                autoComplete="off"
                className="ct-input"
              />
            </div>
          </div>

          <div className="ct-div-7">
            <Label htmlFor="phone" className="ct-label-1">
              Số điện thoại
            </Label>
            <div className="ct-div-6">
              <Input
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                className="ct-input"
              />
            </div>
          </div>

          <div className="ct-div-7">
            <Label htmlFor="message" className="ct-label-1">
              Tin nhắn
            </Label>
            <div className="ct-div-6">
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="ct-input"
              />
            </div>
          </div>

          <div className="ct-div-8">
            <div className="ct-div-9">
              <Checkbox id="terms" />
            </div>

            <Label htmlFor="terms" className="ct-label-2">
              Bằng cách chọn mục này, bạn đồng ý với&nbsp;
              <Link href="#" className="ct-link">
                chính sách quyền riêng tư
              </Link>
              &nbsp;của chúng tôi.
            </Label>
          </div>
        </div>

        <div className="ct-div-10">
          <Button className="ct-button" size="lg">
            Gửi
          </Button>
        </div>
      </div>
      {/* End Contact Form */}
    </section>
  );
};

export default ContactPage;
