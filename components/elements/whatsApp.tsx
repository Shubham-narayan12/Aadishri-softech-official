'use client';

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 left-5 z-[9999]">
      <Link
        href="https://wa.me/919810262354?text=Hello%20I%20want%20to%20know%20more"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
}
