import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-accent-1">
      <Container>
        <div className="flex flex-col items-center py-28 align-baseline">
          <h3 className="mb-10 grow text-center text-4xl font-semibold leading-tight tracking-tighter text-teal-600 lg:text-5xl">
            We read together. And it is good.
          </h3>
          <a
            href="mailto:hello@counterfactual.fm"
            className="mx-3 font-semibold text-teal-800 hover:underline"
          >
            hello@counterfactual.fm
          </a>
        </div>
      </Container>
    </footer>
  );
}
