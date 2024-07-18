import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button type="submit" className="text-left w-full">
        Sign Out
      </button>
    </form>
  );
}
