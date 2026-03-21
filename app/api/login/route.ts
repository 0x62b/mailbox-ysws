import { NextRequest, NextResponse } from "next/server";

import wildcardMatch from "wildcard-match";

const isValidEmail = wildcardMatch("*@*.*");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email :(" }, { status: 400 });
    } // To provide an EmOtIoNaL eNgAgEmEnT wItH tHe ReAdEr To EnHaNcE USER EXPERIENCE!!1!!!111!

    // TODO: send login link / token
    return NextResponse.json({ message: `Login link sent to ${email} :D` });
  } catch (err) {
    return NextResponse.json({ message: "Invalid JSON... what" }, { status: 400 });
  }
}