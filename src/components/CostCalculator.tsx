import React, { useState } from 'react';
import { Coins, Calculator, TrendingUp, Plane, Hotel, Utensils, Ticket, PlusCircle, Trash2, CheckCircle } from 'lucide-react';
import { COST_BREAKDOWNS, DESTINATIONS } from '../data';

export default function CostCalculator() {
  // Budget calculator states
  const [selectedDestId, setSelectedDestId] = useState<string>('dalat');
  const [numDays, setNumDays] = useState<number>(3);
  const [travelStyle, setTravelStyle] = useState<'budget' | 'standard' | 'luxury'>('standard');
  const [customExpenseLabel, setCustomExpenseLabel] = useState('');
  const [customExpenseAmount, setCustomExpenseAmount] = useState<number | ''>('');
  const [customExpenses, setCustomExpenses] = useState<{ id: string; label: string; amount: number }[]>([]);

  const selectedDest = DESTINATIONS.find(d => d.id === selectedDestId) || DESTINATIONS[0];
  const staticBreakdown = COST_BREAKDOWNS.find(cb => cb.destinationId === selectedDestId) || COST_BREAKDOWNS[0];

  // Dynamically calculate budget based on choices
  // Let's establish basic multiplier multipliers
  const styleMultiplier = {
    budget: 0.7,
    standard: 1.0,
    luxury: 1.8
  };

  const styleLabels = {
    budget: 'Bình dân / Tiết kiệm',
    standard: 'Trải nghiệm / Hợp lý',
    luxury: 'Nghỉ dưỡng / Sang chảnh'
  };

  // Base daily rates (standard style)
  const baseRates: Record<string, { transport: number; hotel: number; food: number; ticket: number }> = {
    dalat: { transport: 700000, hotel: 600000, food: 300000, ticket: 160000 },
    sapa: { transport: 800000, hotel: 700000, food: 330000, ticket: 220000 },
    halong: { transport: 600000, hotel: 1750000, food: 500000, ticket: 300000 },
    hoian: { transport: 600000, hotel: 500000, food: 270000, ticket: 160000 },
    phuquoc: { transport: 2000000, hotel: 750000, food: 400000, ticket: 250000 },
    ninhbinh: { transport: 350000, hotel: 350000, food: 250000, ticket: 200000 }
  };

  const rates = baseRates[selectedDestId] || baseRates.dalat;
  const mult = styleMultiplier[travelStyle];

  // Calculations
  const transportCost = Math.round(rates.transport * (travelStyle === 'luxury' ? 1.5 : travelStyle === 'budget' ? 0.8 : 1.0));
  const hotelCost = Math.round(rates.hotel * (numDays - 1) * mult);
  const foodCost = Math.round(rates.food * numDays * mult);
  const ticketCost = Math.round(rates.ticket * numDays * (travelStyle === 'budget' ? 0.6 : travelStyle === 'luxury' ? 1.4 : 1.0));

  const customExpensesTotal = customExpenses.reduce((sum, item) => sum + item.amount, 0);
  const totalCalculated = transportCost + hotelCost + foodCost + ticketCost + customExpensesTotal;

  const handleAddCustomExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customExpenseLabel.trim() || !customExpenseAmount) return;

    setCustomExpenses(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        label: customExpenseLabel,
        amount: Number(customExpenseAmount)
      }
    ]);
    setCustomExpenseLabel('');
    setCustomExpenseAmount('');
  };

  const handleRemoveCustomExpense = (id: string) => {
    setCustomExpenses(prev => prev.filter(item => item.id !== id));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <section id="costs" className="py-24 bg-stone-100/50 border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <Coins className="w-3.5 h-3.5 text-amber-700" />
            <span>Kinh Phí Hợp Lý</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
            Chi Phí Tham Khảo & Dự Toán
          </h2>
          <p className="text-stone-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Tìm hiểu bảng chi phí mẫu được Hà tổng hợp sẵn, hoặc tự lên kế hoạch ngân sách chuyến đi với máy tính dự toán thông minh dưới đây.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Static Benchmarks from Blog (Hà's Official Costs) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-amber-500" />
                <span>Bảng Chi Phí Gốc Của Hà</span>
              </h3>
              <p className="text-stone-500 text-xs mb-6">
                Dưới đây là chi phí tham khảo được tính toán trung bình cho một người (chia phòng đôi khách sạn) với các trải nghiệm thoải mái vừa phải.
              </p>

              {/* Destination selector for origin benchmark */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
                  {DESTINATIONS.map(d => (
                    <button
                      id={`cost-dest-selector-${d.id}`}
                      key={d.id}
                      onClick={() => {
                        setSelectedDestId(d.id);
                        setCustomExpenses([]);
                      }}
                      className={`px-2.5 py-2 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        selectedDestId === d.id
                          ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                          : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {d.name}
                    </button>
                  ))}
                </div>

                {/* The Origin Bill Breakdown */}
                <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
                  <div className="flex justify-between items-start border-b border-stone-200 pb-3">
                    <div>
                      <h4 className="font-bold text-stone-800 text-sm">{staticBreakdown.title}</h4>
                      <span className="text-[10px] bg-amber-100 text-amber-800 font-extrabold px-2 py-0.5 rounded uppercase mt-1 inline-block">
                        Hạng: {staticBreakdown.tierVi}
                      </span>
                    </div>
                  </div>

                  {/* Bill Items */}
                  <div className="space-y-3 text-xs">
                    {staticBreakdown.items.map((item, i) => (
                      <div key={i} className="flex justify-between items-start gap-4">
                        <div className="space-y-0.5">
                          <p className="font-semibold text-stone-700">{item.category}</p>
                          <p className="text-stone-400 text-[10px] leading-relaxed">{item.description}</p>
                        </div>
                        <span className="font-mono text-stone-800 font-semibold shrink-0">
                          {formatCurrency(item.amount)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Grand Total */}
                  <div className="border-t border-dashed border-stone-300 pt-3.5 flex justify-between items-center">
                    <span className="font-bold text-stone-900 text-sm">Tổng cộng tham khảo:</span>
                    <span className="font-mono text-amber-600 font-bold text-lg">
                      {formatCurrency(staticBreakdown.total)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-stone-600 leading-relaxed space-y-2">
              <span className="font-bold text-stone-800 block">💡 Kinh nghiệm tiết kiệm chi phí:</span>
              <p>• <strong>Vé máy bay/xe khách:</strong> Săn trước ít nhất 1 tháng, bay đêm hoặc sáng sớm giá sẽ mềm hơn.</p>
              <p>• <strong>Ăn uống:</strong> Đi theo nhóm đông từ 4-6 người sẽ giúp gọi món lẩu, cơm gà, đặc sản chia ra cực kỳ rẻ.</p>
              <p>• <strong>Khách sạn:</strong> Lựa chọn homestay xinh xắn cách trung tâm 1-2km sẽ có view đẹp hơn và giá rẻ hơn 30% so với khu trung tâm sầm uất.</p>
            </div>
          </div>

          {/* Column 2: Interactive Smart Budget Planner */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-stone-900 flex items-center space-x-2">
              <Calculator className="w-6 h-6 text-amber-500" />
              <span>Máy Tính Dự Toán Chi Phí Tự Chọn</span>
            </h3>
            <p className="text-stone-500 text-sm">
              Tự thiết lập các thông số về số ngày đi, hạng du lịch, thêm chi phí quà cáp mua sắm để ước tính ngân sách cho chuyến đi tiếp theo của bạn!
            </p>

            {/* Config Forms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-stone-100 pt-6">
              
              {/* Destination Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">1. Điểm đến du lịch</label>
                <select
                  id="budget-dest-dropdown"
                  value={selectedDestId}
                  onChange={(e) => setSelectedDestId(e.target.value)}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/15"
                >
                  {DESTINATIONS.map(d => (
                    <option key={d.id} value={d.id}>{d.name} ({d.regionVi})</option>
                  ))}
                </select>
              </div>

              {/* Number of Days */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">2. Số ngày đi ({numDays} ngày {numDays > 1 ? `${numDays - 1} đêm` : ''})</label>
                <input
                  id="budget-days-slider"
                  type="range"
                  min="1"
                  max="7"
                  value={numDays}
                  onChange={(e) => setNumDays(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>1 ngày</span>
                  <span>3 ngày</span>
                  <span>5 ngày</span>
                  <span>7 ngày</span>
                </div>
              </div>

              {/* Travel Style Radio Selection */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">3. Phong cách chuyến đi</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['budget', 'standard', 'luxury'] as const).map(style => (
                    <button
                      id={`budget-style-btn-${style}`}
                      key={style}
                      onClick={() => setTravelStyle(style)}
                      className={`px-3 py-3 rounded-xl text-xs font-semibold text-center border transition-all cursor-pointer ${
                        travelStyle === style
                          ? 'bg-amber-500/10 text-amber-800 border-amber-500 font-bold'
                          : 'bg-stone-50 text-stone-500 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {styleLabels[style]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add custom extra expense form */}
              <form onSubmit={handleAddCustomExpense} className="sm:col-span-2 p-4 bg-stone-50 border border-stone-200 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-stone-700">4. Thêm chi phí phát sinh tùy chọn (Quà cáp, mua sắm...)</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="custom-expense-name-input"
                    type="text"
                    placeholder="Tên khoản chi (ví dụ: Mua quà lưu niệm)"
                    value={customExpenseLabel}
                    onChange={(e) => setCustomExpenseLabel(e.target.value)}
                    className="flex-grow px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-800"
                  />
                  <input
                    id="custom-expense-amount-input"
                    type="number"
                    placeholder="Số tiền (đ)"
                    value={customExpenseAmount}
                    onChange={(e) => setCustomExpenseAmount(e.target.value !== '' ? Number(e.target.value) : '')}
                    className="w-full sm:w-36 px-3 py-2 bg-white border border-stone-200 rounded-xl text-xs text-stone-800 font-mono"
                  />
                  <button
                    id="add-custom-expense-btn"
                    type="submit"
                    className="bg-stone-800 hover:bg-stone-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Thêm</span>
                  </button>
                </div>

                {/* Custom expense items list */}
                {customExpenses.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-stone-200">
                    {customExpenses.map((exp) => (
                      <div key={exp.id} className="flex justify-between items-center text-xs text-stone-700 bg-white px-3 py-1.5 rounded-lg border border-stone-100 shadow-sm">
                        <span>• {exp.label}</span>
                        <div className="flex items-center space-x-2">
                          <span className="font-mono font-bold text-stone-800">{formatCurrency(exp.amount)}</span>
                          <button
                            id={`remove-expense-${exp.id}`}
                            type="button"
                            onClick={() => handleRemoveCustomExpense(exp.id)}
                            className="text-stone-400 hover:text-rose-500 p-0.5 rounded transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </form>

            </div>

            {/* CALCULATED Dynamic Receipt Bill Box */}
            <div className="bg-[#1e293b] text-stone-100 p-6 sm:p-8 rounded-3xl space-y-5 border border-stone-800 shadow-lg relative overflow-hidden">
              {/* Receipt stamp overlay */}
              <div className="absolute top-2 right-4 text-[44px] font-bold text-stone-800/10 select-none uppercase tracking-widest font-mono">
                Dự toán
              </div>

              <div className="flex justify-between items-center border-b border-stone-800 pb-3">
                <div>
                  <h4 className="font-serif text-lg font-bold text-amber-400">Bảng Dự Trù Chi Phí Ước Tính</h4>
                  <p className="text-[10px] text-stone-400">Lịch trình: {numDays} ngày | Địa điểm: {selectedDest.name}</p>
                </div>
                <Coins className="w-6 h-6 text-amber-400 animate-pulse" />
              </div>

              {/* Bill Receipts */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-stone-400 flex items-center"><Plane className="w-3.5 h-3.5 mr-1.5" /> Vé xe / Máy bay khứ hồi:</span>
                  <span className="font-semibold">{formatCurrency(transportCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 flex items-center"><Hotel className="w-3.5 h-3.5 mr-1.5" /> Lưu trú ({numDays - 1} đêm):</span>
                  <span className="font-semibold">{formatCurrency(hotelCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 flex items-center"><Utensils className="w-3.5 h-3.5 mr-1.5" /> Ăn uống ăn vặt ({numDays} ngày):</span>
                  <span className="font-semibold">{formatCurrency(foodCost)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400 flex items-center"><Ticket className="w-3.5 h-3.5 mr-1.5" /> Vé tham quan & Đi lại:</span>
                  <span className="font-semibold">{formatCurrency(ticketCost)}</span>
                </div>
                {customExpensesTotal > 0 && (
                  <div className="flex justify-between border-t border-stone-800 pt-2 text-amber-300">
                    <span className="flex items-center">• Chi phí tự thêm ngoài lề:</span>
                    <span className="font-semibold">{formatCurrency(customExpensesTotal)}</span>
                  </div>
                )}
              </div>

              {/* Calculated Total */}
              <div className="border-t border-dashed border-stone-800 pt-4 flex justify-between items-center">
                <span className="font-bold text-stone-100 text-sm font-sans uppercase tracking-wider">Tổng cộng ước tính:</span>
                <span className="font-mono text-2xl font-bold text-amber-400">
                  {formatCurrency(totalCalculated)}
                </span>
              </div>

              {/* Live disclaimer stamp */}
              <div className="text-[10px] text-stone-400 leading-relaxed italic border-t border-stone-800 pt-3.5 flex items-center space-x-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>* Đây là con số dự trù dựa trên mức chi tiêu trung bình thực tế, có thể biến động nhẹ tùy thời giá của thị trường.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
