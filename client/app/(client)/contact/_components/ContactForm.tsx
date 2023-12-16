import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
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
          <Label htmlFor="terms" className="text-sm leading-6 text-foreground">
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
  );
};

export default ContactForm;
