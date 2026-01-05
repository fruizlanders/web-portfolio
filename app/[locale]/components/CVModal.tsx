"use client";

import { useCVModal } from "@/app/[locale]/components/useCVModal";
import { useLocale } from "next-intl";

export default function CVModal() {
  const { isOpen, close } = useCVModal();
  const locale = useLocale();

  if (!isOpen) return null;

  const cvUrl =
    locale === "es" ? "/cv/Franco-Ruiz-CV-ES.pdf" : "/cv/Franco-Ruiz-CV-EN.pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={close}
      />

      {/* MODAL */}
      <div className="relative z-10 w-[90%] max-w-md rounded-xl border border-neutral-800 bg-neutral-900 p-6 space-y-6">
        <h3 className="text-xl font-semibold">
          {locale === "es" ? "Currículum" : "Resume"}
        </h3>

        <p className="text-neutral-400 text-sm">
          {locale === "es"
            ? "Selecciona cómo deseas ver o descargar el CV."
            : "Choose how you want to view or download the resume."}
        </p>

        <div className="flex flex-col gap-3">
          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-neutral-700 px-4 py-3 text-center hover:bg-neutral-800 transition"
          >
            {locale === "es" ? "Abrir en nueva pestaña" : "Open in new tab"}
          </a>

          <a
            href={cvUrl}
            download
            className="rounded-lg bg-sky-500 text-neutral-900 px-4 py-3 text-center font-medium hover:bg-sky-400 transition"
          >
            {locale === "es" ? "Descargar PDF" : "Download PDF"}
          </a>
        </div>

        <button
          onClick={close}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-200"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
