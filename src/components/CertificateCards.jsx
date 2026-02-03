import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { certificatesData } from "../data/CertificatesData";
import CertificateModal from "./CertificateModal";
import CertificateCard from "./CertificateCard";

export default function CertificateCards() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="mt-4 pb-3">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 font-sans text-md">
            Total: {certificatesData.length}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert, index) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            index={index}
            onClick={() => setSelectedCertificate(cert)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
