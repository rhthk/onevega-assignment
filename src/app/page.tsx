import Home from "@/components/ui/Home";

export default async function HomePage() {
  const BOARDS = await fetch("https://demo6396395.mockable.io/bcf-boards")
    .then((r) => r.json())
    .catch(console.log);
  const PROMPT = await fetch("https://demo6396395.mockable.io/prompts")
    .then((r) => r.json())
    .catch(console.log);
  console.log(BOARDS, PROMPT);
  return <Home BOARDS={BOARDS} PROMPT={PROMPT} />;
}
