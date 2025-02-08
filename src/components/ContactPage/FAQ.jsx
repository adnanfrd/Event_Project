const FAQ = () => {
    return (
      <section className="mt-16">
        <h3 className="text-3xl text-center font-semibold mb-6">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <details className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
            <summary className="font-semibold cursor-pointer">How do I book an event?</summary>
            <p className="mt-2">You can book an event by browsing our listings and clicking the "Book Now" button.</p>
          </details>
          <details className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
            <summary className="font-semibold cursor-pointer">What payment methods do you accept?</summary>
            <p className="mt-2">We accept credit cards, PayPal, and other secure payment methods.</p>
          </details>
          <details className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
            <summary className="font-semibold cursor-pointer">Can I get a refund if I cancel my booking?</summary>
            <p className="mt-2">Refund policies depend on the event organizer. Please check the event details.</p>
          </details>
        </div>
      </section>
    );
  };
  
  export default FAQ;
  