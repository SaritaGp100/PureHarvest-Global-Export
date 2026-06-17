import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918369759857"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-5
      right-5
      z-50
      h-14
      w-14
      rounded-full
      bg-green-500
      text-white
      flex
      items-center
      justify-center
      shadow-xl
      hover:scale-110
      transition
      "
    >
      <MessageCircle size={28} />
    </a>
  );
}