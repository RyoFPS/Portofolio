"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

export function PortfolioDrawer({ id, labelledBy, className, children }: { id: string; labelledBy?: string; className?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateDesktop = () => setDesktop(media.matches);
    const openDrawer = (event: Event) => {
      if ((event as CustomEvent<string>).detail === id) setOpen(true);
    };
    updateDesktop();
    media.addEventListener("change", updateDesktop);
    window.addEventListener("portfolio:drawer-open", openDrawer);
    return () => {
      media.removeEventListener("change", updateDesktop);
      window.removeEventListener("portfolio:drawer-open", openDrawer);
    };
  }, [id]);

  const closeFromButton = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element && event.target.closest("[data-close]")) setOpen(false);
  };

  if (desktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-labelledby={labelledBy} onClick={closeFromButton} showCloseButton={false} className={`portfolio-dialog-content ${className ?? ""}`}>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent aria-labelledby={labelledBy} onClick={closeFromButton} className={`portfolio-drawer-content ${className ?? ""}`}>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
