import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Logo({ size = 48 }: { size?: number }) {
  const { resolvedTheme } = useTheme();

  // Velg riktig logo basert på tema. Fallback til lys logo hvis ukjent.
  // Viktig: android-chrome-512x512-dark.png må være mørk (for LYST tema),
  //         web-app-manifest-512x512.png må være LYS (for MØRKT tema)
  const logoSrc = '/static/favicons/android-chrome-512x512-dark.png';

  // Tving re-render på theme-bytte
  const logoKey = resolvedTheme;


  // Alt-tekst for SEO og tilgjengelighet
  return (
    <div
      style={{
        background: resolvedTheme === 'dark' ? '#111' : '#fff',
        borderRadius: 8,
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: resolvedTheme === 'dark' ? '0 1px 3px #0008' : '0 1px 3px #0002',
        width: size + 8,
        height: size + 8,
        transition: 'background 0.2s',
      }}
    >
      <Image
        src={logoSrc}
        alt="Henrik Logo"
        width={size}
        height={size}
        priority
        style={{ display: 'block' }}
      />
    </div>
  );
}
