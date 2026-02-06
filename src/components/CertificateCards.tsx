import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CertificateModal from "./CertificateModal";
import CertificateCard from "./CertificateCard";
import type { AchievementItem } from "../types/ui.types";

interface Props {
  data: AchievementItem[];
}

export default function CertificateCards({ data }: Props) {
  const [selectedCert, setSelectedCert] = useState<AchievementItem | null>(
    null,
  );

  if (!data || data.length === 0) {
    return (
      <div className="text-zinc-500 italic py-10">No achievements found.</div>
    );
  }

  return (
    <section className="mt-4 pb-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 font-sans text-md">
            Total: {data.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            data={cert}
            index={index}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <CertificateModal
            data={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
