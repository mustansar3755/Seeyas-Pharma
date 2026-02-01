import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactFormSection = ({ formData, setFormData, onSubmit }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Side: Contact Details & Location Intro (40%) */}
        <div className="w-full lg:w-5/12 space-y-10">
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Get in <span className="text-emerald-600">touch.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We're here to help you with your pharmaceutical needs. Reach out
              to us and our experts will get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg">Email Us</h4>
                <p className="text-gray-500">info@seeyaspharma.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-cyan-50 flex items-center justify-center">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg">Call Us</h4>
                <p className="text-gray-500">+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-50 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold text-lg">Main Office</h4>
                <p className="text-gray-500">
                  Seeyas Group Headquarters, U.S.A
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form (60%) */}
        <div
          className="w-full lg:w-7/12 bg-white rounded-xl border-2 border-black/10 
        p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] "
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-2.5 rounded-xl bg-gray-50
                   border border-gray-400 focus:ring-2 focus:ring-emerald-500/20
                    transition-all outline-none text-gray-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-2.5 rounded-xl bg-gray-50
                   border border-gray-400 focus:ring-2 focus:ring-emerald-500/20
                    transition-all outline-none text-gray-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-2.5 rounded-xl bg-gray-50
                   border border-gray-400 focus:ring-2 focus:ring-emerald-500/20
                    transition-all outline-none text-gray-900"
              >
                <option value="">Select a topic</option>
                <option value="distribution">Distribution</option>
                <option value="product">Product Inquiry</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="
                w-full px-5 py-2.5 rounded-xl bg-gray-50
                   border border-gray-400 focus:ring-2 focus:ring-emerald-500/20
                    transition-all outline-none 
                 resize-none text-gray-900"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-gray-200"
            >
              Send Message
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
