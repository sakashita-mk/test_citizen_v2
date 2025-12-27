"use client";

import { useRouter } from "next/navigation";

const cookieKey = "isAuthed";

function setAuthCookie() {
  document.cookie = `${cookieKey}=1; path=/; max-age=604800`;
  localStorage.setItem(cookieKey, "1");
}

function clearAuthCookie() {
  document.cookie = `${cookieKey}=; path=/; max-age=0`;
  localStorage.removeItem(cookieKey);
}

export default function AuthPage() {
  const router = useRouter();

  const handleLogin = () => {
    setAuthCookie();
    router.push("/");
  };

  const handleLogout = () => {
    clearAuthCookie();
    router.push("/auth");
  };

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Auth</h1>
        <p className="text-sm text-zinc-600">
          Mock login page. Click Log in to set the auth cookie.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleLogin}
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Log in
        </button>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
        >
          Log out
        </button>
      </div>
    </section>
  );
}
