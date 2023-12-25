import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignUp
        appearance={{
          elements: {
            rootBox: "scale-180 transform-gpu",
          },
        }}
      />
    </div>
  );
}
