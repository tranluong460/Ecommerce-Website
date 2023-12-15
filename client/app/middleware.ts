import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/products",
    "/products/:id",
    "/cart",
    "/contact",
    "/questions",
  ],
  ignoredRoutes: [],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
