"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect() {
  const [language, setLanguage] = useState("id");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const nativeSelect = document.querySelector<HTMLSelectElement>("#language-select");
    if (!nativeSelect) return;
    const syncLanguage = () => setLanguage(nativeSelect.value);
    const showSelect = () => {
      syncLanguage();
      setReady(true);
    };
    nativeSelect.addEventListener("portfolio-language-update", syncLanguage);
    nativeSelect.addEventListener("portfolio-language-ready", showSelect);
    syncLanguage();
    if (nativeSelect.dataset.languageReady === "true") showSelect();
    return () => {
      nativeSelect.removeEventListener("portfolio-language-update", syncLanguage);
      nativeSelect.removeEventListener("portfolio-language-ready", showSelect);
    };
  }, []);

  if (!ready) return <Skeleton className="language-select-skeleton" aria-hidden="true" />;

  return (
    <Select
      items={[{ label: "ID", value: "id" }, { label: "EN", value: "en" }]}
      value={language}
      onValueChange={(value) => {
        if (typeof value !== "string") return;
        setLanguage(value);
        const nativeSelect = document.querySelector<HTMLSelectElement>("#language-select");
        if (nativeSelect) {
          nativeSelect.value = value;
          nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }}
    >
      <SelectTrigger
        className="language-select-trigger"
        aria-label={language === "en" ? "Language" : "Bahasa"}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="start">
        <SelectItem value="id">ID</SelectItem>
        <SelectItem value="en">EN</SelectItem>
      </SelectContent>
    </Select>
  );
}
