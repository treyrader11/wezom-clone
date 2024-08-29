import { cn } from "@/lib/utils";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Team from "./Team";

export default function ServicesPage() {
  return (
    <main>
      <Hero>
        <Button>All Services</Button>
      </Hero>
      <Team />
    </main>
  );
}
