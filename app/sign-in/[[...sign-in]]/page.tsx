import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="grid h-screen place-items-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: "scale-180 transform-gpu",
          },
        }}
      />
    </div>
  );
}
