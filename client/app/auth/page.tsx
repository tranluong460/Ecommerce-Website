"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const ProfilePage = () => {
  const { theme } = useTheme();

  return (
    <section className="pep-section">
      <UserProfile
        appearance={{ baseTheme: theme === "dark" ? dark : undefined }}
      />
    </section>
  );
};

export default ProfilePage;
