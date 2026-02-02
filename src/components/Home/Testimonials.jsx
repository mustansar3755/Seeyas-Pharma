const testimonials = [
  {
  name: "Dr. Muhammad Asif",
  role: "Pharmacy Owner",
  text: "Seeyas Pharma has been an extremely dependable partner. Their vaccine cold-chain handling meets international standards.",
  avatar: "https://ui-avatars.com/api/?name=Muhammad+Asif&bg=10b981&color=fff"
},
{
  name: "Ayesha Malik",
  role: "Hospital Procurement Manager",
  text: "Their delivery time is outstanding. Emergency medicines usually reach us within a few hours.",
  avatar: "https://ui-avatars.com/api/?name=Ayesha+Malik&bg=0891b2&color=fff"
},
{
  name: "Ahmed Hassan",
  role: "Clinic Operations Manager",
  text: "Authentic medicines and very professional staff. The digital tracking system has made stock management much easier.",
  avatar: "https://ui-avatars.com/api/?name=Ahmed+Hassan&bg=0369a1&color=fff"
}

];

const Testimonials = () => (
  <div className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-900">What Our <span className="text-emerald-600">Partners Say</span></h2>
        <p className="text-gray-500 mt-4">Trusted by 500+ healthcare providers across the country.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full" />
              <div>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-xs text-emerald-600 font-semibold uppercase">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Testimonials