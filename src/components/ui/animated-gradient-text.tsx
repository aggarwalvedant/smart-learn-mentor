export default function AnimatedGradientText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex animate-text-gradient bg-gradient-to-r from-[#b4d4ff] via-[#86b6f6] to-[#176b87] bg-[200%_auto] text-transparent bg-clip-text ${className}`}>
      {text}
    </span>
  );
}
