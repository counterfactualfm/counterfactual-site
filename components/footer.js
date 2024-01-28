import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-accent-2 bg-accent-1">
      <Container>
        <div className="flex flex-col items-center py-28 lg:flex-row">
          <h3 className="mb-10 text-center text-4xl font-semibold leading-tight tracking-tighter text-teal-800 lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
            We read together. And it is good.
          </h3>
          <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
            {" "}
            <a
              href="mailto:hello@counterfactual.fm"
              className="mx-3 font-semibold hover:underline"
            >
              hello@counterfactual.fm
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
