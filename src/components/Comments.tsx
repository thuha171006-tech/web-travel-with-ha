import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, ThumbsUp, Calendar, Send, Filter, CheckCircle } from 'lucide-react';
import { INITIAL_COMMENTS, DESTINATIONS } from '../data';
import { Comment } from '../types';

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'likes'>('newest');

  // Form states
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [formDest, setFormDest] = useState<string>('general');
  const [formSuccess, setFormSuccess] = useState(false);

  // Load comments from localStorage or initialize with defaults
  useEffect(() => {
    const saved = localStorage.getItem('travel_ha_comments');
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (err) {
        setComments(INITIAL_COMMENTS);
      }
    } else {
      setComments(INITIAL_COMMENTS);
      localStorage.setItem('travel_ha_comments', JSON.stringify(INITIAL_COMMENTS));
    }
  }, []);

  const handleLike = (id: string) => {
    const updated = comments.map(c => {
      if (c.id === id) {
        return { ...c, likes: c.likes + 1 };
      }
      return c;
    });
    setComments(updated);
    localStorage.setItem('travel_ha_comments', JSON.stringify(updated));
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    // Get current date time formatted
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10) + ' ' + now.toTimeString().slice(0, 5);

    const newComment: Comment = {
      id: Math.random().toString(36).substring(2, 9),
      destinationId: formDest,
      author: author.trim(),
      rating: rating,
      content: content.trim(),
      createdAt: dateStr,
      likes: 0
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('travel_ha_comments', JSON.stringify(updated));

    // Reset Form & Show Success Notification
    setAuthor('');
    setContent('');
    setRating(5);
    setFormSuccess(true);
    setTimeout(() => setFormSuccess(false), 4000);
  };

  // Get name of destination
  const getDestName = (destId: string) => {
    if (destId === 'general') return 'Góp Ý Chung';
    return DESTINATIONS.find(d => d.id === destId)?.name || 'Khác';
  };

  // Filter & Sort logic
  const filteredComments = comments.filter(c => {
    if (selectedFilter === 'all') return true;
    return c.destinationId === selectedFilter;
  });

  const sortedComments = [...filteredComments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.likes - a.likes;
    }
  });

  return (
    <section id="comments" className="py-24 bg-[#faf9f6] border-b border-stone-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-700" />
            <span>Góc Chia Sẻ</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Bình Luận & Chia Sẻ Trải Nghiệm
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Viết cảm nhận của bạn, chia sẻ các kinh nghiệm hay hoặc đánh giá về những địa danh mà bạn đã từng đặt chân tới để kết nối cùng cộng đồng xê dịch nhé!
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid: Left is Form, Right is comment lists */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Submit Comment Form (5 columns) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Gửi Bình Luận Của Bạn
            </h3>

            {formSuccess && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center space-x-2 animate-fade-in">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Bình luận của bạn đã được đăng thành công lên blog!</span>
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="space-y-4">
              
              {/* Destination selector */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-widest block">Địa điểm liên quan</label>
                <select
                  id="comment-dest-dropdown"
                  value={formDest}
                  onChange={(e) => setFormDest(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/15"
                >
                  <option value="general">Góp ý / Cảm nhận chung</option>
                  {DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              {/* Rating Star Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-widest block">Đánh giá của bạn</label>
                <div className="flex items-center space-x-1.5 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      id={`rating-star-btn-${star}`}
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 rounded hover:bg-stone-50 transition-colors"
                    >
                      <Star
                        className={`w-6.5 h-6.5 ${
                          star <= rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-stone-500 text-xs font-semibold ml-2">
                    {rating === 5 ? 'Tuyệt vời!' : rating === 4 ? 'Rất thích' : rating === 3 ? 'Bình thường' : rating === 2 ? 'Tạm ổn' : 'Cần cải thiện'}
                  </span>
                </div>
              </div>

              {/* Author name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-widest block">Tên / Biệt danh</label>
                <input
                  id="comment-author-input"
                  type="text"
                  required
                  placeholder="Nhập tên của bạn (ví dụ: Hà Linh)"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/15"
                />
              </div>

              {/* Content feedback */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-widest block">Nội dung chia sẻ</label>
                <textarea
                  id="comment-content-textarea"
                  required
                  rows={4}
                  placeholder="Chia sẻ trải nghiệm thực tế hoặc gửi lời chúc ngọt ngào đến blog..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/15 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="submit-comment-form-btn"
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-stone-900 hover:text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md shadow-amber-500/10 cursor-pointer transform active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Bình Luận Ngay</span>
              </button>

            </form>
          </div>

          {/* Column 2: Comments List (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Filter and sorting controls */}
            <div className="bg-white p-5 rounded-3xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Category selector */}
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <Filter className="w-4.5 h-4.5 text-stone-400 shrink-0" />
                <select
                  id="comment-filter-dropdown"
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3.5 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-semibold text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500/15"
                >
                  <option value="all">Tất cả bình luận ({comments.length})</option>
                  <option value="general">Cảm nhận chung</option>
                  {DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id}>Chỉ xem {d.name}</option>
                  ))}
                </select>
              </div>

              {/* Sorting options */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <button
                  id="sort-newest-btn"
                  onClick={() => setSortBy('newest')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    sortBy === 'newest'
                      ? 'bg-stone-800 text-white'
                      : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  Mới nhất
                </button>
                <button
                  id="sort-likes-btn"
                  onClick={() => setSortBy('likes')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    sortBy === 'likes'
                      ? 'bg-stone-800 text-white'
                      : 'text-stone-500 hover:bg-stone-100'
                  }`}
                >
                  Yêu thích nhất
                </button>
              </div>
            </div>

            {/* Render items */}
            {sortedComments.length > 0 ? (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {sortedComments.map((comment) => (
                  <div
                    id={`comment-item-card-${comment.id}`}
                    key={comment.id}
                    className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-3 hover:border-amber-500/15 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-200 text-amber-800 font-extrabold flex items-center justify-center text-sm">
                          {comment.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">{comment.author}</h4>
                          <span className="text-[10px] bg-stone-100 text-stone-500 font-bold px-2 py-0.5 rounded-md">
                            Địa điểm: {getDestName(comment.destinationId)}
                          </span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-3.5 h-3.5 ${
                              star <= comment.rating
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-stone-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content text */}
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
                      {comment.content}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-stone-100 pt-3 text-[11px] text-stone-400">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-stone-400" />
                        <span>{comment.createdAt}</span>
                      </div>

                      {/* Like button */}
                      <button
                        id={`like-comment-${comment.id}-btn`}
                        onClick={() => handleLike(comment.id)}
                        className="flex items-center space-x-1 hover:text-amber-600 p-1 rounded-md hover:bg-amber-50/50 transition-all cursor-pointer"
                      >
                        <ThumbsUp className="w-3.5 h-3.5" />
                        <span className="font-bold font-mono text-xs">{comment.likes}</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-16 text-center border border-stone-200">
                <MessageSquare className="w-12 h-12 text-stone-300 mx-auto mb-3 animate-pulse" />
                <p className="text-stone-500 font-medium">Chưa có bình luận nào cho địa mục này</p>
                <p className="text-stone-400 text-xs mt-0.5">Hãy là người đầu tiên viết cảm nhận chia sẻ nhé!</p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
