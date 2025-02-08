import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6 w-full lg:w-1/3">
      <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="w-6 h-6 text-purple-600" />
          <p>123 Event Street, New York, USA</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-6 h-6 text-purple-600" />
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-6 h-6 text-purple-600" />
          <p>support@eventbooking.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
