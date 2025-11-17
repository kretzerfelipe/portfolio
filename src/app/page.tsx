import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/page/header";

export default function Home() {
  return (
    <div className="flex-container p-4">
      <TopBar />
      <Header />
    </div>
  );
}
