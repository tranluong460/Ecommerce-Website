"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const ProfilePage = () => {
  const { theme } = useTheme();

  return (
    <section className="flex justify-center items-center py-8 sm:py-16">
      <UserProfile
        appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
      />
    </section>
  );
};

export default ProfilePage;
