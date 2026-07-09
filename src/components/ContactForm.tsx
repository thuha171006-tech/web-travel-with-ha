import React, { useState, useEffect } from 'react';
import { Send, Mail, User, Inbox, Trash2, CheckCircle, Eye, EyeOff, MessageSquare } from 'lucide-react';
import { ContactFeedback } from '../types';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState<ContactFeedback[]>([]);

  // Load received feedback messages from localStorage for review/admin demonstration
  useEffect(() => {
    const saved = localStorage.getItem('travel_ha_contact_feedback');
    if (saved) {
      try {
        setFeedbacks(JSON.parse(saved));
      } catch (err) {
        setFeedbacks([]);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);

    const newFeedback: ContactFeedback = {
      id: Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: dateStr
    };

    const updated = [newFeedback, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem('travel_ha_contact_feedback', JSON.stringify(updated));

    // Reset Form
    setName('');
    setEmail('');
    setMessage('');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleDeleteFeedback = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = feedbacks.filter(f => f.id !== id);
    setFeedbacks(updated);
    localStorage.setItem('travel_ha_contact_feedback', JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-700" />
            <span>Kết Nối Góp Ý</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Liên Hệ & Góp Ý
          </h2>
          <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Mọi ý kiến đóng góp, chia sẻ hoặc lời nhắn gửi thương yêu, bạn hãy gửi qua biểu mẫu bên dưới nhé! Hà sẽ phản hồi bạn sớm nhất có thể.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Form Container */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/80 shadow-md space-y-6">
          {success && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start space-x-3.5 animate-fade-in">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold">Gửi góp ý thành công!</h4>
                <p className="text-xs text-emerald-600 mt-1">Cảm ơn bạn đã đóng góp những ý kiến quý báu. Thông tin này đã được lưu trữ an toàn trong hộp thư của Hà!</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center">
                  <User className="w-3.5 h-3.5 text-stone-400 mr-1.5" />
                  <span>Họ và tên của bạn</span>
                </label>
                <input
                  id="contact-name-input"
                  type="text"
                  required
                  placeholder="Nhập họ và tên (ví dụ: Nguyễn Văn A)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/15 focus:border-amber-500 transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center">
                  <Mail className="w-3.5 h-3.5 text-stone-400 mr-1.5" />
                  <span>Địa chỉ Email</span>
                </label>
                <input
                  id="contact-email-input"
                  type="email"
                  required
                  placeholder="Nhập email (ví dụ: gmail@example.com)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/15 focus:border-amber-500 transition-all"
                />
              </div>
            </div>

            {/* Message Suggestion */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center">
                <MessageSquare className="w-3.5 h-3.5 text-stone-400 mr-1.5" />
                <span>Nội dung góp ý / lời nhắn</span>
              </label>
              <textarea
                id="contact-message-textarea"
                required
                rows={5}
                placeholder="Nội dung ý kiến đóng góp, lời nhắn khích lệ, chia sẻ kinh nghiệm của bạn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/15 focus:border-amber-500 transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-between items-center pt-3 border-t border-stone-100">
              {/* Optional Demo Inbox trigger so viewers can verify the message storing */}
              <button
                id="toggle-demo-inbox-btn"
                type="button"
                onClick={() => setInboxOpen(!inboxOpen)}
                className="flex items-center space-x-1.5 text-xs text-stone-500 hover:text-amber-600 transition-colors cursor-pointer font-medium p-2 rounded-lg hover:bg-stone-100"
              >
                {inboxOpen ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>Ẩn hộp thư demo</span>
                  </>
                ) : (
                  <>
                    <Inbox className="w-4 h-4" />
                    <span>Hộp thư góp ý ({feedbacks.length})</span>
                  </>
                )}
              </button>

              <button
                id="submit-contact-form-btn"
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-stone-900 hover:text-white px-6 py-3.5 rounded-xl font-bold text-xs flex items-center space-x-2 shadow-md shadow-amber-500/10 cursor-pointer transform active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4 animate-pulse" />
                <span>Gửi Góp Ý Ngay</span>
              </button>
            </div>
          </form>

          {/* Demostration Received Mail Box */}
          {inboxOpen && (
            <div
              id="admin-received-inbox"
              className="mt-6 border-t border-stone-200 pt-6 space-y-4 animate-slide-down"
            >
              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-stone-800 text-sm flex items-center space-x-1.5">
                    <Inbox className="w-4.5 h-4.5 text-amber-500" />
                    <span>Hộp Thư Bản Tin Của Hà (Admin Demo Dashboard)</span>
                  </h4>
                  <p className="text-[10px] text-stone-400">Các lời nhắn của độc giả gửi đến blog sẽ hiển thị tại đây để bạn kiểm chứng.</p>
                </div>
                <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                  {feedbacks.length} Lời nhắn
                </span>
              </div>

              {feedbacks.length > 0 ? (
                <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1">
                  {feedbacks.map((f) => (
                    <div
                      id={`feedback-message-${f.id}`}
                      key={f.id}
                      className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs space-y-2 relative group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-stone-800">{f.name}</p>
                          <p className="text-stone-400 text-[10px] font-mono">{f.email} • {f.createdAt}</p>
                        </div>
                        <button
                          id={`delete-feedback-btn-${f.id}`}
                          onClick={(e) => handleDeleteFeedback(f.id, e)}
                          className="text-stone-400 hover:text-rose-500 p-1 rounded hover:bg-stone-100 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-stone-600 bg-white p-3 rounded-lg border border-stone-100 leading-relaxed text-justify">
                        {f.message}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center bg-stone-50 rounded-xl border border-stone-150">
                  <Mail className="w-8 h-8 text-stone-300 mx-auto mb-2" />
                  <p className="text-stone-400 text-xs">Hộp thư trống trơn. Hãy gửi thử một biểu mẫu để xem kết quả!</p>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
