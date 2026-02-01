import { CheckCircle2, Send } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessScreen = ({ onReset }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl text-center">
        <div className="bg-linear-to-r from-emerald-500 to-emerald-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
        <p className="text-xl text-gray-600 mb-8">
          Thank you for contacting Seeyas Pharma. Our team will get back to you within 24 hours.
        </p>
        <button 
          onClick={onReset}
          className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-600 to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg"
        >
          Send Another Message
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;