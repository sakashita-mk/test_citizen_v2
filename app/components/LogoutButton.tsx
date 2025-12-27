"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "isAuthed=; Path=/; Max-Age=0";
    localStorage.removeItem("isAuthed");
    router.push("/auth");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-100"
    >
      Logout
    </button>
  );
}
