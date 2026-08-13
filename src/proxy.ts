import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(request: NextRequest) {
	const token = await getToken({ req: request });
	const { pathname } = request.nextUrl;

	if (
		token &&
		(pathname === "/login" ||
			pathname === "/register" ||
			pathname === "/verify-account")
	) {
		return NextResponse.redirect(new URL("/dashboard", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/login", "/register", "/verify-account/:path*"],
};
