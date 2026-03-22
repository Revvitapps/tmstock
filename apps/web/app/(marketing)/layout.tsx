import Link from "next/link";

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/pricing", label: "Pricing" },
  { href: "/licensing", label: "Licensing" },
  { href: "/contributors", label: "Contributors" }
] as const;

export default function MarketingLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="route-shell">
      <div className="shell">
        <header className="topbar">
          <Link href="/" className="brand">
            TMStock
          </Link>
          <nav className="nav" aria-label="Primary">
            {marketingLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/account">Account</Link>
          </nav>
        </header>
        {children}
      </div>
    </div>
  );
}
