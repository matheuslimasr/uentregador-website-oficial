import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/lib/site-config";

function PlayLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false">
      <path
        fill="#EA4335"
        d="M3.6 1.8 13.7 12 3.6 22.2c-.37-.2-.6-.6-.6-1.1V2.9c0-.5.23-.9.6-1.1Z"
      />
      <path fill="#FBBC04" d="m17.4 8.3-3.7 3.7L3.6 1.8c.24-.13.53-.2.83-.18.37.02.73.15 1.05.37l11.92 6.31Z" />
      <path
        fill="#4285F4"
        d="M17.4 8.3 5.48 2c.32.22.63.46.92.72l8.04 8.04 2.96-2.46Z"
        opacity="0"
      />
      <path fill="#34A853" d="m17.4 15.7-11.92 6.3c-.32.23-.68.36-1.05.38-.3.02-.6-.05-.83-.18L13.7 12l3.7 3.7Z" />
      <path
        fill="#FBBC04"
        d="m20.98 10.04-3.58-1.74-3.7 3.7 3.7 3.7 3.58-1.74c1.05-.5 1.05-3.42 0-3.92Z"
      />
    </svg>
  );
}

export function PlayStoreButton({ className = "" }: { className?: string }) {
  const inner = (
    <>
      <PlayLogo />
      <span className="play-store-text">
        <span className="play-store-small">Disponível no</span>
        <span className="play-store-big">Google Play</span>
      </span>
    </>
  );
  const cls = `play-store-btn ${className}`.trim();
  if (siteConfig.appAndroidUrl) {
    return (
      <a
        href={siteConfig.appAndroidUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label="Baixar na Google Play"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to="/baixar-app" className={cls} aria-label="Baixar na Google Play">
      {inner}
    </Link>
  );
}
