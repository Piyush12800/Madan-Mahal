import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import Plate from '../components/Plate';
import { business } from '../data/site';
import {
  formsKey,
  generalEnquiry,
  isFormLive,
  mailLink,
  mapsLink,
  telLink,
} from '../lib/contact';
import { usePageMeta } from '../lib/usePageMeta';
import type { EnquiryForm } from '../types';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const blank: EnquiryForm = {
  name: '',
  organisation: '',
  phone: '',
  email: '',
  requirement: '',
};

const fieldClass =
  'w-full rounded-[3px] border-[1.5px] border-ink bg-surface px-4 py-3 font-sans text-[0.9375rem] text-ink placeholder:text-pencil focus:bg-white disabled:cursor-not-allowed disabled:bg-paper disabled:text-pencil';

const labelClass =
  'block font-mono text-[0.625rem] uppercase tracking-[0.18em] text-graphite';

export default function Enquire() {
  usePageMeta(
    'Enquire — get a quote',
    `Send Madan Mahal your notebook requirement: size, ruling, page count and quantity. WhatsApp ${business.phones[0].number} or use the enquiry form.`,
  );

  const [form, setForm] = useState<EnquiryForm>(blank);
  const [status, setStatus] = useState<Status>('idle');
  const [errorText, setErrorText] = useState('');

  const update =
    (field: keyof EnquiryForm) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('sending');
    setErrorText('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: formsKey,
          subject: `Notebook enquiry from ${form.name || 'the website'}`,
          from_name: `${business.brand} website`,
          name: form.name,
          organisation: form.organisation,
          phone: form.phone,
          email: form.email,
          requirement: form.requirement,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? `Request failed (${response.status})`);
      }

      setStatus('sent');
      setForm(blank);
    } catch (error) {
      setStatus('error');
      setErrorText(error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return (
    <Section eyebrow="Enquire" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_minmax(0,1fr)] lg:gap-16">
        {/* ---------- The form ---------- */}
        <div>
          <h1 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.5rem)] font-black uppercase leading-[1.02] tracking-[-0.035em]">
            Get a quote
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            Size, ruling, page count and quantity is enough to start. WhatsApp is
            fastest — you can send a photo of a book you already stock and we will
            match it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={generalEnquiry()}>Message on WhatsApp</Button>
            <Button href={mailLink('Notebook enquiry')} variant="secondary">
              Email us
            </Button>
          </div>

          <hr className="my-12 border-t-[1.5px] border-ink/15" />

          <h2 className="font-display text-xl font-extrabold uppercase tracking-[-0.02em]">
            Or write it out here
          </h2>

          {status === 'sent' ? (
            <div className="mt-6 max-w-xl rounded-[3px] border-[1.5px] border-ink bg-mark p-6">
              <h3 className="font-display text-xl font-extrabold uppercase tracking-[-0.02em] text-ink">
                Enquiry sent
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink">
                It has gone to {business.email}. If you need an answer today,
                WhatsApp {business.phones[0].number} as well.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink underline underline-offset-4"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <>
              {/* The old site reported "Message Sent!" while sending nothing at
                  all. This form refuses to run until it can actually deliver. */}
              {!isFormLive ? (
                <div className="mt-6 max-w-xl rounded-[3px] border-[1.5px] border-brand bg-brand/8 p-5">
                  <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-brand-dark">
                    Form not connected yet
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-graphite">
                    This form has no delivery address configured, so it is
                    switched off rather than pretending to send. Use WhatsApp or
                    email above — both reach us now. See{' '}
                    <code className="font-mono text-[0.8125rem] text-ink">
                      README.md
                    </code>{' '}
                    to switch it on.
                  </p>
                </div>
              ) : null}

              <form onSubmit={submit} className="mt-6 max-w-xl space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Your name
                    </label>
                    <input
                      id="name"
                      className={`mt-2 ${fieldClass}`}
                      value={form.name}
                      onChange={update('name')}
                      disabled={!isFormLive}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="organisation" className={labelClass}>
                      Shop or school
                    </label>
                    <input
                      id="organisation"
                      className={`mt-2 ${fieldClass}`}
                      value={form.organisation}
                      onChange={update('organisation')}
                      disabled={!isFormLive}
                      autoComplete="organization"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={`mt-2 ${fieldClass}`}
                      value={form.phone}
                      onChange={update('phone')}
                      disabled={!isFormLive}
                      required
                      autoComplete="tel"
                      inputMode="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`mt-2 ${fieldClass}`}
                      value={form.email}
                      onChange={update('email')}
                      disabled={!isFormLive}
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="requirement" className={labelClass}>
                    What you need
                  </label>
                  <textarea
                    id="requirement"
                    rows={6}
                    className={`mt-2 resize-y ${fieldClass}`}
                    value={form.requirement}
                    onChange={update('requirement')}
                    disabled={!isFormLive}
                    required
                    placeholder="e.g. 2,000 books — A4, single ruled, 172 pages, our own cover artwork. Needed before the March session."
                  />
                  <p className="mt-2 text-sm text-pencil">
                    Sizes, rulings, page counts and quantities. Rough numbers are
                    fine.
                  </p>
                </div>

                {status === 'error' ? (
                  <div
                    role="alert"
                    className="rounded-[3px] border-[1.5px] border-brand bg-brand/8 p-4"
                  >
                    <p className="text-[0.9375rem] leading-relaxed text-ink">
                      The enquiry did not go through
                      {errorText ? ` (${errorText})` : ''}. Nothing was sent.
                      WhatsApp {business.phones[0].number} or email{' '}
                      {business.email} and we will pick it up from there.
                    </p>
                  </div>
                ) : null}

                <Button
                  type="submit"
                  disabled={!isFormLive || status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </Button>
              </form>
            </>
          )}
        </div>

        {/* ---------- Reach us ---------- */}
        <div>
          <Plate
            title="Reach us"
            rows={[
              ...business.phones.map((p) => ({ label: p.label, value: p.number })),
              { label: 'WhatsApp', value: business.phones[0].number },
              { label: 'Email', value: business.email },
            ]}
          />

          <div className="mt-8 rounded-[3px] border-[1.5px] border-ink bg-paper p-5">
            <h2 className="font-mono text-[0.625rem] uppercase tracking-[0.22em] text-graphite">
              The works
            </h2>
            <address className="mt-3 not-italic leading-relaxed text-graphite">
              {business.address.line1},
              <br />
              {business.address.line2}, {business.address.city},
              <br />
              {business.address.state} {business.address.pin}
            </address>
            <a
              href={mapsLink()}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-block font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-brand-dark underline-offset-4 hover:underline"
            >
              Open directions →
            </a>
          </div>

          <ul className="mt-8 space-y-2">
            {business.phones.map((p) => (
              <li key={p.e164}>
                <a
                  href={telLink(p.e164)}
                  className="font-mono text-sm tracking-[0.06em] text-graphite underline-offset-4 hover:text-brand-dark hover:underline"
                >
                  <span className="uppercase text-pencil">{p.label} </span>
                  {p.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
