import { getSession } from "next-auth/react";

export async function isAdmin() {
  const session = await getSession();
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const allowedUsernames = ["EmmaBjerknes"];
  if (!allowedUsernames.includes(session.user.name as string)) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  }

  return {};
}
