import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-t-3 border-b-3 border-fuchsia-800 border-t-amber-700 bg-amber-100 p-1">
      <Image
        src="/header_logo_ube_registry.png"
        alt="UBE Registry Logo"
        width={333}
        height={333}
        className="h-auto w-auto"
      />
    </header>
  );
}
