import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { getUserByClerkId } from "./libs/users";

export default authMiddleware({
  async afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (auth.userId && !auth.isPublicRoute) {
      const url = req.nextUrl.clone();
      const privateRoutes = ["/admin", "/admin/products"];
      const user = await getUserByClerkId(auth.userId);

      if (
        privateRoutes.includes(url.pathname) &&
        user.role !== "Administrator"
      ) {
        url.pathname = "/unauthorized";
        return NextResponse.redirect(url);
      }

      return NextResponse.next();
    }

    return NextResponse.next();
  },
  publicRoutes: [
    "/",
    "/products(.*)",
    "/cart",
    "/contact",
    "/questions",
    "/api/webhooks(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
