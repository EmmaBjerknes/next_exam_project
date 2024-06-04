interface User {
  delivery?: string;
  firstName: string;
  lastName: string;
  co?: string;
  address: string;
  postnumber?: number;
  city: string;
  phonenumber?: number;
  email: string;
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
}
