import ContactInfo from "@/components/ContactPage/ContactInfo";
import ContactForm from "@/components/ContactPage/ContactForm";
import FAQ from "@/components/ContactPage/FAQ";

const HeroContact = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 min-h-screen text-white px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg">We're here to assist you with event bookings and management.</p>
      </section>

      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <ContactInfo />
        <ContactForm />
      </div>

      <FAQ />
    </div>
  );
};

export default HeroContact;
