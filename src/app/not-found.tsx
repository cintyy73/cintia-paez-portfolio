import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-prose text-lg text-muted">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="mt-8">
        <CTAButton href="/">Volver al inicio</CTAButton>
      </div>
    </Container>
  );
}
