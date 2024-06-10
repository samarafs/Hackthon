import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";

import React from "react";
import ClientProviders from "./ClientProvider";

async function Providers({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <ClientProviders>{children}</ClientProviders>
    </SessionProvider>
  );
}

export default Providers;
