import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="isolate bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Hỗ trợ
        </h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Hãy cho chúng tôi biết một chút về bản thân bạn và chúng tôi sẽ liên
          lạc lại ngay khi có thể.
        </p>
      </div>

      <div className="mx-auto max-w-xl mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <Label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Họ
            </Label>

            <div className="mt-2.5">
              <Input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="off"
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <Label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Họ
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="off"
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Email
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label
              htmlFor="address"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Địa chỉ
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                id="address"
                name="address"
                autoComplete="off"
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Số điện thoại
            </Label>
            <div className="mt-2.5">
              <Input
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <Label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-foreground"
            >
              Tin nhắn
            </Label>
            <div className="mt-2.5">
              <Textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border dark:border-secondary px-3.5 py-2 text-muted-foreground shadow-sm placeholder:text-muted-foreground focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="flex gap-x-2 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Checkbox id="terms" />
            </div>
            <Label
              htmlFor="terms"
              className="text-sm leading-6 text-foreground"
            >
              Bằng cách chọn mục này, bạn đồng ý với&nbsp;
              <Link
                href="#"
                className="font-semibold text-primary hover:underline"
              >
                chính sách quyền riêng tư
              </Link>
              &nbsp;của chúng tôi.
            </Label>
          </div>
        </div>

        <div className="mt-10">
          <Button className="w-full" size="lg">
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
