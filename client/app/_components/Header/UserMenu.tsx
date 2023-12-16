"use client";

import Link from "next/link";
import { SignOutButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  PersonIcon,
  EnterIcon,
  ExitIcon,
  GearIcon,
} from "@radix-ui/react-icons";

const UserMenu = () => {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage
            src={user?.imageUrl || "/user.jpg"}
            alt={user?.primaryEmailAddress?.emailAddress || "User"}
          />
          <AvatarFallback>{user?.fullName || "User"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <SignedIn>
          <DropdownMenuLabel>Thông tin cá nhân</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              Hồ sơ
              <DropdownMenuShortcut>
                <PersonIcon />
              </DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem>
              Cài đặt
              <DropdownMenuShortcut>
                <GearIcon />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <SignOutButton>
            <DropdownMenuItem>
              Đăng xuất
              <DropdownMenuShortcut>
                <ExitIcon />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <DropdownMenuGroup>
            <Link href="/sign-in">
              <DropdownMenuItem>
                Đăng nhập
                <DropdownMenuShortcut>
                  <EnterIcon />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>

            <Link href="/sign-up">
              <DropdownMenuItem>
                Đăng ký
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </SignedOut>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
