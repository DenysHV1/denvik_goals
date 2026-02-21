import { Outlet, Link } from "react-router-dom";

export function RootLayout() {
  return (
    <div>
      <header style={{ padding: 16 }}>
        <Link to="/">Home</Link>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}