"use client";

export default function PlaceOrderButton({
  model,
  className,
  children,
}: {
  model?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    if (model) {
      window.dispatchEvent(new CustomEvent("geyser-model", { detail: { model } }));
    }
    document.getElementById("place-order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
