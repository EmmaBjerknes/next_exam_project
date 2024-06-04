import { UserProvider } from "../utils/UserContext";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserProvider>{children}</UserProvider>;
}
