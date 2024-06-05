interface User {
  delivery?: "0" | "149";
  firstName?: string;
  lastName?: string;
  co?: string;
  address?: string;
  postnumber?: number;
  city?: string;
  phonenumber?: number;
  email?: string;
  payment?: "card" | "instore";
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}
