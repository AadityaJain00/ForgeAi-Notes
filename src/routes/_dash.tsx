import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { useAppStore } from "@/lib/store";

export const Route = createFileRoute("/_dash")({ component: DashLayout });

function DashLayout() {
  const user = useAppStore((s) => s.user);
  const hydrated = useAppStore((s) => s.hydrated);
  const setHydrated = useAppStore((s) => s.setHydrated);

  useEffect(() => {
    const finish = () => setHydrated();
    const unsub = useAppStore.persist.onFinishHydration(finish);
    if (useAppStore.persist.hasHydrated()) finish();
    return unsub;
  }, [setHydrated]);

  if (!hydrated) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-bg text-sm text-muted">
        Loading workspace
      </div>
    );
  }
  if (!user) return <Navigate to="/" />;

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
