import { useState, useRef, ReactNode } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ title }: { title: ReactNode }) {
  const [messageResult, setMessageResult] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setLoading(true);

    if (!form.current) return;

    // Extract form values manually
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        data, // ✅ Send extracted form data
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key
      );

      if (result.status === 200) {
        setMessageResult("Message sent successfully ✅");
        form.current.reset(); // ✅ Clear form after submission
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setMessageResult("There was an error. Please try again later ❌");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
      setTimeout(() => setMessageResult(""), 5000);
    }
  }


  return (
    <section id="contact" className="h-screen min-h-[800px] w-full bg-primary p-8">
      <div className="mx-auto flex h-full max-w-fit flex-col items-center justify-center">
        <form className="text-center sm:w-[500px] md:w-[600px]" ref={form} onSubmit={handleSubmit}>
          {title && (
            <h2 className="inline text-3xl font-bold text-text 2sm:text-4xl lg:text-6xl">
              {title}
            </h2>
          )}

          {/* Name and Email */}
          <div className="mb-3 mt-20 flex flex-wrap justify-between font-medium">
            <input
              className="w-[49%] rounded-lg border-2 border-highlight bg-primary p-4 text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="w-[49%] rounded-lg border-2 border-highlight bg-primary p-4 text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
          </div>

          {/* Message */}
          <textarea
            className="h-[250px] w-full rounded-lg border-2 border-highlight bg-primary p-4 font-medium text-text duration-300 focus:border-text focus:outline-none focus:ring-0"
            placeholder="Message"
            name="message"
            required
          />

          <p className={`mb-4 mt-4 ${messageResult.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {messageResult}
          </p>

          {/* Submit Button */}
          <button
            className={`mx-auto my-8 flex items-center rounded-lg border-2 border-highlight px-4 py-3 font-semibold text-text duration-300 hover:bg-highlight ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
