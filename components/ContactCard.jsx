'use client';

import { useForm, ValidationError } from '@formspree/react';

const ContactCard = () => {
  const [state, handleSubmit] = useForm('xpzgvork');
  if (state.succeeded) {
    alert('Message Sent. Thanks for reaching out!');

    return <ContactCard />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col items-center justify-evenly gap-5"
    >
      <div className="flex flex-col gap-3 w-full">
        <label className="text-white" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="py-2 px-1 rounded-lg bg-slate-400 w-full text-white"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label className="text-white" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="py-2 px-1 rounded-lg bg-slate-400 w-full text-white"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <label className="text-white" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="py-2 px-1 rounded-lg bg-slate-400 h-[120px] w-full text-white resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="text-white rounded bg-slate-400 px-3 py-0 hover:border"
      >
        Send
      </button>
    </form>
  );
};

export default ContactCard;
