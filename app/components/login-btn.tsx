import { useSession, signIn, signOut } from "next-auth/react";
import { MdAdminPanelSettings } from "react-icons/md";

export default function SignInAdmin() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button
        title="Logga in"
        onClick={() => signIn(undefined, { callbackUrl: "/admin" })}
      >
        <MdAdminPanelSettings size={"1.2rem"} />
      </button>
    </>
  );
}
