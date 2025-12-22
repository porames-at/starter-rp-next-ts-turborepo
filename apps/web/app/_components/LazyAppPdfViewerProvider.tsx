"use client";
import dynamic from "next/dynamic";

export const LazyAppPdfViewerProvider = dynamic(
  () => import("@repo/ui/AppPdfViewerProvider").then((mod) => mod.default),
  {
    ssr: false,
  }
);
