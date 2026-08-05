import Section from '../components/Section';
import Button from '../components/Button';
import RulingSwatch from '../components/RulingSwatch';
import { usePageMeta } from '../lib/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found', 'That page is not on this site.');

  return (
    <Section eyebrow="404" tone="surface">
      <div className="max-w-xl">
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-[-0.035em]">
          Blank page
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-graphite">
          There is nothing at this address. The catalogue and the enquiry form are
          both one click away.
        </p>
        <RulingSwatch
          ruling="single"
          className="mt-8 h-28 border-[1.5px] border-ink"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/catalogue">See the catalogue</Button>
          <Button to="/" variant="secondary">
            Back to the start
          </Button>
        </div>
      </div>
    </Section>
  );
}
