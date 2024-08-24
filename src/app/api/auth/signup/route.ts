import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, username, phoneNumber, password } = await request.json();
  console.log("Request Body:", { email, username, phoneNumber, password });

  const dummyData = {
    email: "user@example.com",
    username: "user",
    phoneNumber: "6212345678",
    password: "Password123!",
  };

  if (email === dummyData.email && username === dummyData.username && phoneNumber === dummyData.phoneNumber && password === dummyData.password) {
    return NextResponse.json({ message: "Success! :)" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Failed :(" }, { status: 400 });
  }
}
