"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "../lib/auth";
import Spinner from "../components/Spinner";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAdminAccess() {
      const result = await isAdmin();
      if (result.redirect) {
        router.push(result.redirect.destination);
      } else {
        setLoading(false);
      }
    }
    checkAdminAccess();
  }, [router]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1>Admin Page</h1>
      {/* Innehåll för admin-sidan */}
    </div>
  );
}
