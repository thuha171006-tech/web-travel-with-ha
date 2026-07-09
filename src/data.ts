import { Destination, Itinerary, CostBreakdown, Album, Comment } from './types';
const HERO_BANNER_IMAGE = '/anh-ha.jpg';

export { HERO_BANNER_IMAGE };
export const PROFILE_IMAGE = '/anh-toi.jpg';

export const DESTINATIONS: Destination[] = [
  {
    id: 'sapa',
    name: 'Sa Pa',
    region: 'North',
    regionVi: 'Miền Bắc',
    image: '/anh-sapa.jpg',
    intro: 'Nằm ở phía Tây Bắc của Việt Nam, Sa Pa là một thị trấn vùng cao xinh đẹp ẩn chứa nhiều điều kỳ diệu của tự nhiên. Với khí hậu cận nhiệt đới ẩm và ôn đới mát mẻ quanh năm, nơi đây hấp dẫn du khách bởi những thửa ruộng bậc thang kỳ vĩ trải dài như những nấc thang lên thiên đường, những đỉnh núi mờ sương và nét văn hóa độc đáo của các đồng bào dân tộc thiểu số vùng cao.',
    bestTime: 'Tháng 9 - Tháng 11 (Mùa lúa chín vàng óng) hoặc Tháng 3 - Tháng 5 (Mùa hoa nở khoe sắc)',
    estimatedCost: '2.500.000đ - 4.500.000đ',
    mapUrl: 'Thị xã Sa Pa, Tỉnh Lào Cai, Việt Nam',
    coordinates: { lat: 22.3364, lng: 103.8438 },
    highlights: [
      { title: 'Đỉnh Fansipan', description: 'Nóc nhà Đông Dương ở độ cao 3.143m, nơi bạn có thể săn mây bồng bềnh tuyệt đẹp bằng cáp treo hiện đại.' },
      { title: 'Thung lũng Mường Hoa', description: 'Nơi hội tụ những thửa ruộng bậc thang đẹp nhất Sa Pa và bãi đá cổ kỳ bí đan xen giữa dòng suối mát lành.' },
      { title: 'Bản Cát Cát', description: 'Ngôi làng cổ kính của người Mông với những nếp nhà gỗ mộc mạc, cối giã nước bằng tre và những dòng thác róc rách.' },
      { title: 'Đèo Ô Quy Hồ', description: 'Một trong "tứ đại đỉnh đèo" hùng vĩ của Việt Nam, điểm ngắm hoàng hôn đỏ rực buông xuống thung lũng mờ sương.' }
    ]
  },
  {
    id: 'halong',
    name: 'Hạ Long',
    region: 'North',
    regionVi: 'Miền Bắc',
    image: '/anh-halong.jpg',
    intro: 'Vịnh Hạ Long được UNESCO công nhận là Di sản Thiên nhiên Thế giới với hàng ngàn hòn đảo đá vôi kỳ vĩ nhô lên từ làn nước màu xanh lục bảo. Đây là thiên đường nghỉ dưỡng tuyệt vời, nơi du khách có thể hòa mình vào không gian kỳ quan thiên nhiên, trải nghiệm du thuyền sang trọng xuyên qua các hòn đảo kỳ thú và khám phá những hang động thạch nhũ hàng triệu năm tuổi tuyệt mỹ.',
    bestTime: 'Tháng 4 - Tháng 6 (Thời tiết nắng ấm hoàn hảo để tắm biển) hoặc Tháng 9 - Tháng 11',
    estimatedCost: '3.000.000đ - 6.000.000đ',
    mapUrl: 'Thành phố Hạ Long, Tỉnh Quảng Ninh, Việt Nam',
    coordinates: { lat: 20.9756, lng: 107.0437 },
    highlights: [
      { title: 'Vịnh Lan Hạ & Vịnh Bái Tử Long', description: 'Hai khu vực lân cận tuyệt đẹp, hoang sơ với những bãi cát nhỏ nằm ẩn mình dưới chân các núi đá vôi dựng đứng.' },
      { title: 'Hang Sửng Sốt', description: 'Hang động rộng lớn và lộng lẫy bậc nhất vịnh Hạ Long, với hàng ngàn khối thạch nhũ lung linh mang nhiều hình thù kỳ diệu.' },
      { title: 'Đảo Ti Tốp', description: 'Nơi có bãi tắm hình vầng trăng khuyết nước trong vắt và đỉnh núi cao để thu trọn toàn cảnh vịnh Hạ Long 360 độ cực kỳ choáng ngợp.' },
      { title: 'Chèo thuyền Kayak ở Hang Luồn', description: 'Tự tay khua mái chèo luồn qua vòm hang đá mát lạnh để ngắm nhìn những đàn khỉ hoang nghịch ngợm leo trèo trên vách núi.' }
    ]
  },
  {
    id: 'dalat',
    name: 'Đà Lạt',
    region: 'South',
    regionVi: 'Miền Nam',
    image: '/anh-dalat.jpg',
    intro: 'Được mệnh danh là "Thành phố ngàn hoa" hay "Thành phố sương mù", Đà Lạt là điểm đến lãng mạn nằm trên cao nguyên Lâm Viên mát mẻ quanh năm. Với rừng thông xanh bạt ngàn, những ngôi biệt thự kiến trúc Pháp cổ kính, những đồi chè ẩn hiện trong sương mờ và những quán cà phê mang phong cách cực thơ, Đà Lạt luôn là chốn bình yên để chữa lành và thư giãn tâm hồn.',
    bestTime: 'Tháng 11 - Tháng 3 (Mùa hoa dã quỳ nở rộ, thời tiết se lạnh, trời hanh khô rất lãng mạn)',
    estimatedCost: '2.000.000đ - 4.000.000đ',
    mapUrl: 'Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam',
    coordinates: { lat: 11.9404, lng: 108.4583 },
    highlights: [
      { title: 'Hồ Xuân Hương & Quảng trường Lâm Viên', description: 'Trái tim của Đà Lạt với biểu tượng bông hoa dã quỳ và búp hoa Atiso bằng kính màu khổng lồ soi bóng nước yên ả.' },
      { title: 'Đồi chè Cầu Đất', description: 'Thảm trà xanh mướt trải dài mênh mông đón ánh bình minh lấp lánh và hàng quạt gió khổng lồ quay đều trong gió núi.' },
      { title: 'Đỉnh LangBiang', description: 'Mái nhà của Đà Lạt, nơi bạn có thể đi xe Jeep vượt qua dốc cao để ngắm nhìn trọn vẹn suối Vàng suối Bạc thơ mộng từ trên cao.' },
      { title: 'Puppy Farm & Quán Cà Phê Mơ Màng', description: 'Nơi vui đùa cùng những chú cún siêu đáng yêu và thưởng thức ly trà ấm áp giữa khung cảnh thung lũng thông reo rì rào.' }
    ]
  },
  {
    id: 'hoian',
    name: 'Hội An',
    region: 'Central',
    regionVi: 'Miền Trung',
    image: '/anh-hoian.jpg',
    intro: 'Hội An là một đô thị cổ kính nằm ở hạ lưu sông Thu Bồn, nơi thời gian như ngừng lại trên những bức tường vàng rêu phong, những mái ngói âm dương xám màu và hàng trăm chiếc đèn lồng thủ công rực rỡ sắc màu về đêm. Nơi đây từng là thương cảng quốc tế sầm uất thế kỷ 17, giao thoa tinh hoa văn hóa Việt - Hoa - Nhật - Tây phương độc đáo.',
    bestTime: 'Tháng 2 - Tháng 4 (Thời tiết mát mẻ, trời nắng dịu, nước sông Thu Bồn trong vắt hiền hòa)',
    estimatedCost: '2.200.000đ - 4.200.000đ',
    mapUrl: 'Thành phố Hội An, Tỉnh Quảng Nam, Việt Nam',
    coordinates: { lat: 15.8801, lng: 108.3380 },
    highlights: [
      { title: 'Chùa Cầu Nhật Bản', description: 'Biểu tượng trăm tuổi của Hội An với kiến trúc mái vòm bằng gỗ uốn cong độc đáo giao hòa văn hóa Nhật Bản và Việt Nam.' },
      { title: 'Sông Hoài lung linh đèn hoa đăng', description: 'Đi thuyền gỗ mộc mạc trôi theo dòng nước đêm tĩnh lặng và thả chiếc đèn hoa đăng ước nguyện mang theo may mắn.' },
      { title: 'Rừng dừa Bảy Mẫu', description: 'Trải nghiệm chèo thuyền thúng tròn độc đáo xuyên qua những lạch dừa nước rợp bóng xanh mát và xem múa thúng xoay vòng cảm giác mạnh.' },
      { title: 'Ẩm thực phố cổ', description: 'Thưởng thức những món ngon gia truyền trứ danh thế giới như Cao lầu thơm ngon, Cơm gà Hội An béo ngọt hay Bánh mì Phượng giòn rụm.' }
    ]
  },
  {
    id: 'phuquoc',
    name: 'Phú Quốc',
    region: 'South',
    regionVi: 'Miền Nam',
    image: '/anh-phuquoc.jpg',
    intro: 'Đảo Ngọc Phú Quốc là hòn đảo lớn nhất Việt Nam, nằm trong vịnh Thái Lan với vẻ đẹp hoang sơ tựa thiên đường hạ giới. Nơi đây nổi tiếng với những bãi cát trắng mịn như kem ôm lấy làn nước màu xanh ngọc lam trong vắt, những rặng san hô sặc sỡ đầy sức sống dưới đáy đại dương và những hoàng hôn rực sắc cam đỏ buông xuống biển rộng tuyệt mỹ.',
    bestTime: 'Tháng 11 - Tháng 4 (Mùa khô, biển lặng sóng êm, làn nước mát lành xanh ngắt vô cùng lý tưởng)',
    estimatedCost: '3.500.000đ - 7.000.000đ',
    mapUrl: 'Thành phố Phú Quốc, Tỉnh Kiên Giang, Việt Nam',
    coordinates: { lat: 10.2899, lng: 103.9840 },
    highlights: [
      { title: 'Bãi Sao & Bãi Khem', description: 'Hai bãi biển thiên đường với dải cát trắng mịn màng như bột, hàng dừa nghiêng bóng mát rượi soi dòng nước ngọc bích.' },
      { title: 'Hòn Thơm bằng cáp treo 3 dây vượt biển', description: 'Tận hưởng chuyến cáp treo vượt biển dài nhất thế giới để thu vào tầm mắt biển trời Phú Quốc bao la kỳ vĩ tuyệt vời.' },
      { title: 'Rạn san hô ngọc trai Nam Đảo', description: 'Đi cano lặn ngắm san hô tự nhiên nhiều màu sắc, khám phá cuộc sống muôn màu rực rỡ của các sinh vật biển.' },
      { title: 'Grand World - Thành phố không ngủ', description: 'Khu tổ hợp giải trí mua sắm sầm uất mang đậm kiến trúc Venice cổ kính lãng mạn bên dòng sông kênh đào mộng mơ.' }
    ]
  },
  {
    id: 'ninhbinh',
    name: 'Ninh Bình',
    region: 'North',
    regionVi: 'Miền Bắc',
    image: '/anh-ninhbinh.jpg',
    intro: 'Nằm cách Hà Nội khoảng 90km, Ninh Bình được mệnh danh là "Vịnh Hạ Long trên cạn" với cảnh quan karst thạch đá vôi hùng vĩ dựng đứng đan xen giữa những đồng lúa uốn lượn hiền hòa và dòng suối nhỏ xanh mướt. Đây là vùng đất linh thiêng cố đô, giao hòa hoàn hảo giữa lịch sử hào hùng ngàn năm và cảnh sắc thiên nhiên kỳ quan hoang sơ thanh bình.',
    bestTime: 'Tháng 5 - Tháng 6 (Mùa lúa chín vàng óng dọc hai bên dòng sông Ngô Đồng) hoặc Tháng 1 - Tháng 3 (Mùa lễ hội tâm linh xuân ấm)',
    estimatedCost: '1.500.000đ - 2.800.000đ',
    mapUrl: 'Tỉnh Ninh Bình, Việt Nam',
    coordinates: { lat: 20.2522, lng: 105.9754 },
    highlights: [
      { title: 'Quần thể danh thắng Tràng An', description: 'Di sản Văn hóa và Thiên nhiên thế giới đôi, đi thuyền chèo tay luồn qua những hang động xuyên thủy kỳ bí rêu phong mát rượi.' },
      { title: 'Tam Cốc - Bích Động', description: 'Hành trình lướt nhẹ trên dòng sông Ngô Đồng uốn lượn xuyên qua núi đá đá vôi cổ xưa giữa thảm lúa vàng rực thơm ngát.' },
      { title: 'Hang Múa', description: 'Thử thách leo 486 bậc đá lên đỉnh núi hình rồng ngự trị để phóng tầm mắt chiêm ngưỡng toàn cảnh thung lũng Tam Cốc lộng lẫy.' },
      { title: 'Chùa Bái Đính', description: 'Ngôi đại tự linh thiêng bậc nhất Đông Nam Á sở hữu nhiều kỷ lục châu lục với hàng trăm bức tượng Phật bằng đồng uy nghi.' }
    ]
  }
];

export const ITINERARIES: Itinerary[] = [
  {
    id: 'dalat-3n2d',
    destinationId: 'dalat',
    title: 'Đà Lạt 3 Ngày 2 Đêm - Chữa Lành Nơi Phố Sương Mờ',
    duration: '3 Ngày 2 Đêm',
    summary: 'Lịch trình chi tiết, nhẹ nhàng giúp bạn tận hưởng trọn vẹn khí hậu mát lạnh, ngắm đồi chè thơ mộng, thưởng thức những góc cà phê cực chill và vui chơi gắn kết.',
    days: [
      {
        dayNumber: 1,
        title: 'Khám phá Trung tâm & Thơ mộng Phố Sương',
        activities: [
          { time: '08:00', activity: 'Check-in khách sạn, nghỉ ngơi sau chuyến đi.', notes: 'Nên thuê xe máy ngay tại homestay để tiện di chuyển (khoảng 120k - 150k/ngày).' },
          { time: '09:30', activity: 'Check-in Quảng trường Lâm Viên', notes: 'Chụp hình kỷ niệm với bông hoa Dã Quỳ và búp Atiso kính màu khổng lồ - biểu tượng của Đà Lạt.' },
          { time: '11:00', activity: 'Dạo quanh Hồ Xuân Hương hiền hòa', notes: 'Thưởng thức làn gió se se lạnh mát rượi, đi bộ dưới những rặng thông rì rào.' },
          { time: '12:30', activity: 'Ăn trưa lẩu gà lá é trứ danh', notes: 'Lẩu gà lá é Tao Ngộ (đường 3/4) là gợi ý tuyệt vời, nước dùng ngọt lịm cay nồng ấm lòng.' },
          { time: '15:00', activity: 'Ghé quán cà phê view thung lũng mộng mơ', notes: 'Tận hưởng ly cà phê trứng nóng hổi, ngắm nhìn thung lũng thông reo rì rào thơ mộng dưới ánh nắng chiều.' },
          { time: '18:30', activity: 'Ăn tối bánh ướt lòng gà Long', notes: 'Vị dẻo của bánh ướt hòa cùng vị béo thơm của lòng và thịt gà xé phay giòn dai đậm đà.' },
          { time: '20:00', activity: 'Khám phá Chợ Đêm Đà Lạt náo nhiệt', notes: 'Thưởng thức bánh tráng nướng giòn rụm, sữa đậu nành nóng hổi, dâu tây lắc muối ớt cay ngọt và mua sắm đồ len ấm.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Bình Minh Đồi Chè & Khám Phá Núi Rừng LangBiang',
        activities: [
          { time: '05:00', activity: 'Săn mây & đón bình minh tại Đồi chè Cầu Đất', notes: 'Nên xuất phát sớm từ 4h30 sáng để kịp đón biển mây trắng bồng bềnh phủ lấy đồi chè bát ngát.' },
          { time: '08:30', activity: 'Ăn sáng bánh mì xíu mại chén nóng hổi', notes: 'Bánh mì xíu mại Hoàng Diệu giòn rụm, nước xíu mại ngọt từ xương kèm chút ớt sa tế cay tê ngon khó cưỡng.' },
          { time: '10:00', activity: 'Ghé thăm Vườn hoa cẩm tú cầu rực rỡ', notes: 'Những quả cầu hoa xanh lam tím khổng lồ nở rộ giữa núi rừng chụp ảnh vô cùng lãng mạn.' },
          { time: '12:00', activity: 'Ăn trưa cơm lam gà nướng Tây Nguyên', notes: 'Gà nướng thơm phức da giòn sần sật, ăn kèm cơm lam ống tre dẻo ngọt chấm muối vừng đậm vị vùng cao.' },
          { time: '14:30', activity: 'Chinh phục Đỉnh núi LangBiang huyền thoại', notes: 'Đi xe Jeep chuyên dụng leo lên đỉnh núi rậm rạp mờ sương, ngắm nhìn toàn cảnh Suối Vàng, Suối Bạc thơ mộng.' },
          { time: '18:00', activity: 'Ăn tối lẩu bò tơ Atiso thanh mát', notes: 'Nước dùng ninh từ hoa Atiso tươi và thịt bò tơ mềm ngon bổ dưỡng, cực kỳ hợp cho buổi tối lạnh.' },
          { time: '20:30', activity: 'Trải nghiệm cà phê acoustic ấm cúng', notes: 'Nghe nhạc mộc mạc bên ánh nến lung linh và bếp than ấm áp trong căn nhà gỗ nhỏ xinh xắn.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Nông Trại Puppy Farm & Mua Đặc Sản Làm Quà',
        activities: [
          { time: '08:00', activity: 'Ăn sáng hủ tiếu Nam Vang hoặc phở ấm', notes: 'Nạp năng lượng chuẩn bị cho ngày cuối tràn đầy niềm vui.' },
          { time: '09:00', activity: 'Vui chơi tại Nông trại cún Puppy Farm', notes: 'Gặp gỡ và cưng nựng hơn 100 chú cún siêu thân thiện (Corgi, Husky, Alaska...), tham quan vườn dâu tây công nghệ cao chín mọng.' },
          { time: '11:30', activity: 'Mua sắm đặc sản mứt dâu, hồng treo gió làm quà', notes: 'Nên mua tại các cơ sở uy tín như L’angfarm để đảm bảo vệ sinh an toàn thực phẩm và giá cả niêm yết.' },
          { time: '12:30', activity: 'Ăn trưa nhẹ nhàng, dạo phố lần cuối', notes: 'Dọn dẹp hành lý, check-out khách sạn và chuẩn bị xe về lại nhà ấm áp.' }
        ]
      }
    ]
  },
  {
    id: 'sapa-3n2d',
    destinationId: 'sapa',
    title: 'Sa Pa 3 Ngày 2 Đêm - Săn Mây Trên Đỉnh Fansipan',
    duration: '3 Ngày 2 Đêm',
    summary: 'Khám phá vẻ đẹp kỳ vĩ của núi rừng Hoàng Liên Sơn, trải nghiệm văn hóa bản địa mộc mạc và chinh phục Nóc nhà Đông Dương bồng bềnh mây phủ.',
    days: [
      {
        dayNumber: 1,
        title: 'Check-in Sa Pa - Bản Cát Cát Cổ Kính',
        activities: [
          { time: '09:00', activity: 'Đặt chân đến trung tâm Sa Pa bằng xe giường nằm', notes: 'Check-in khách sạn, hít thở bầu không khí se se mát rượi trong trẻo.' },
          { time: '11:30', activity: 'Ăn trưa cơm lam và thịt lợn bản nướng', notes: 'Thịt lợn cắp nách thơm ngon, da giòn ngậy đặc trưng Tây Bắc.' },
          { time: '14:00', activity: 'Khám phá Bản Cát Cát yên bình', notes: 'Thuê trang phục truyền thống của đồng bào Mông, chụp ảnh bên suối Tiên, guồng nước tre khổng lồ.' },
          { time: '18:30', activity: 'Ăn tối lẩu cá hồi / cá tầm tươi nóng', notes: 'Nước lẩu chua cay ăn cùng rau rừng vùng cao giòn ngọt, cá hồi tươi rói ngon quên sầu.' },
          { time: '20:30', activity: 'Dạo chơi Nhà thờ Đá & Chợ tình Sa Pa', notes: 'Nhà thờ đá cổ kiến trúc Pháp được chiếu sáng rực rỡ, thưởng thức đồ nướng ngô khoai nóng hổi ven đường.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Chinh Phục Đỉnh Fansipan - Cáp Treo Vượt Mây',
        activities: [
          { time: '07:30', activity: 'Ăn sáng phở cống sườn sụn ấm nóng', notes: 'Nước dùng phở đậm vị ngọt thanh kết hợp thảo mộc núi rừng hấp dẫn.' },
          { time: '08:30', activity: 'Đi tàu hỏa Mường Hoa sang ga cáp treo', notes: 'Ngắm nhìn toàn cảnh thung lũng Mường Hoa xanh mướt từ cửa kính toa tàu hoài cổ.' },
          { time: '09:30', activity: 'Đi cáp treo chinh phục đỉnh Fansipan 3.143m', notes: 'Trải nghiệm bay qua thung lũng mây trắng bồng bềnh, dạo bước tâm linh qua Đại Tượng Phật uy nghiêm lên đỉnh cột cờ Tổ Quốc.' },
          { time: '13:00', activity: 'Ăn trưa tiệc buffet trên ga Fansipan', notes: 'Rất nhiều món ăn phong phú đa dạng giúp nạp lại năng lượng sau hành trình leo bậc đá dốc.' },
          { time: '15:30', activity: 'Ghé Bản Tả Van - Tả Phìn yên ả', notes: 'Thư giãn tuyệt đối với dịch vụ tắm lá thuốc người Dao Đỏ gia truyền giúp xua tan mệt mỏi.' },
          { time: '19:00', activity: 'Ăn tối lẩu thắng cố hoặc đồ nướng ngói ngon lành', notes: 'Thưởng thức ẩm thực dân tộc vùng cao độc đáo nhâm nhi chút rượu ngô Bản Phố ấm nồng.' }
        ]
      },
      {
        dayNumber: 3,
        title: 'Check-In Đèo Ô Quy Hồ Hùng Vĩ - Trở Về',
        activities: [
          { time: '08:00', activity: 'Ăn sáng, nhâm nhâm ly cà phê sương sớm', notes: 'Ngắm nhìn sương mờ dần tan lướt nhẹ qua những rặng tre xanh mát.' },
          { time: '09:00', activity: 'Ngắm đèo Ô Quy Hồ hùng vĩ tráng lệ', notes: 'Chụp hình tại cổng trời Sa Pa, ngắm vực sâu hun hút ôm trọn dãy Hoàng Liên Sơn trùng điệp.' },
          { time: '12:00', activity: 'Check-out khách sạn, mua hạt dẻ, nấm hương', notes: 'Chuẩn bị lên xe khách trở về Hà Nội ấm áp, kết thúc hành trình vùng cao đầy nhớ thương.' }
        ]
      }
    ]
  },
  {
    id: 'halong-2n1d',
    destinationId: 'halong',
    title: 'Hạ Long 2 Ngày 1 Đêm - Du Thuyền Giữa Kỳ Quan',
    duration: '2 Ngày 1 Đêm',
    summary: 'Trải nghiệm ngủ đêm trên du thuyền 5 sao sang trọng đẳng cấp, chèo thuyền kayak qua hang luồn và ngắm hoàng hôn rực rỡ buông xuống vịnh đảo đá vôi.',
    days: [
      {
        dayNumber: 1,
        title: 'Du Thuyền Sang Trọng - Hang Luồn & Đảo Ti Tốp',
        activities: [
          { time: '11:30', activity: 'Có mặt tại cảng tàu quốc tế Tuần Châu', notes: 'Lên xuồng cao tốc ra du thuyền lớn đón tiếp nồng hậu bằng trà mát lành.' },
          { time: '12:30', activity: 'Ăn trưa hải sản tươi ngon trên tàu', notes: 'Vừa thưởng thức tôm cá vịnh vừa ngắm những hòn đảo đá vôi lướt nhẹ qua ô cửa kính.' },
          { time: '14:30', activity: 'Chèo thuyền Kayak tại Hang Luồn hoang sơ', notes: 'Tự chèo luồn qua vòm đá ngắm khỉ hoang dã hoặc chọn đi đò tre do người dân chèo tay nhịp nhàng.' },
          { time: '16:00', activity: 'Tắm biển & ngắm cảnh trên đỉnh Đảo Ti Tốp', notes: 'Leo 200 bậc đá lên đỉnh đảo ngắm trọn vẹn vịnh kỳ vĩ lấp lánh như bức tranh sơn dầu khổng lồ.' },
          { time: '18:00', activity: 'Tiệc hoàng hôn Sunset Party trên boong tàu', notes: 'Thưởng thức cocktail nhẹ nhàng, giao lưu âm nhạc ngắm mặt trời lặn dần sau núi.' },
          { time: '19:30', activity: 'Ăn tối buffet Âu-Á sang trọng', notes: 'Các món ăn được chế biến cầu kỳ, decor tinh tế bởi bếp trưởng chuyên nghiệp.' },
          { time: '21:00', activity: 'Câu mực đêm cùng thủy thủ đoàn tinh nghịch', notes: 'Thử tài câu mực đêm lấp lánh dưới làn nước vịnh mặn mòi rôm rả tiếng cười.' }
        ]
      },
      {
        dayNumber: 2,
        title: 'Bình Minh Taichi - Hang Sửng Sốt Kỳ Vĩ',
        activities: [
          { time: '06:15', activity: 'Tập dưỡng sinh Taichi đón ánh ngày mới trên sundeck', notes: 'Hít căng phổi gió biển trong lành dẻo dai cơ thể căng tràn năng lượng.' },
          { time: '07:30', activity: 'Ăn sáng nhẹ với trà, cà phê và bánh ngọt thơm phức', notes: 'Nạp năng lượng chuẩn bị leo núi khám phá lòng hang lớn.' },
          { time: '08:30', activity: 'Khám phá Hang Sửng Sốt tráng lệ vô song', notes: 'Leo bộ dưới những tán lá rừng xanh mát vào lòng hang rộng hàng ngàn m2 ngỡ ngàng trước vẻ đẹp thạch nhũ lung linh.' },
          { time: '10:00', activity: 'Tham gia lớp học gói bánh chưng / nem cuốn truyền thống', notes: 'Tự tay làm chiếc nem cuốn giòn rụm và thưởng thức thành quả nóng hổi.' },
          { time: '11:00', activity: 'Ăn trưa sớm, thanh toán hóa đơn hành lý', notes: 'Tàu cập bến Tuần Châu an toàn, chào tạm biệt thủy thủ đoàn dễ mến lên xe trở về.' }
        ]
      }
    ]
  }
];

export const COST_BREAKDOWNS: CostBreakdown[] = [
  {
    destinationId: 'dalat',
    title: 'Chi Phí Tham Khảo Đà Lạt 3N2Đ (Tiết kiệm - Hợp lý)',
    total: 3300000,
    tier: 'Medium',
    tierVi: 'Tiết kiệm & Trải nghiệm',
    items: [
      { category: 'Vé xe khách giường nằm', amount: 700000, description: 'Vé xe khứ hồi TP.HCM - Đà Lạt (xe Thành Bưởi hoặc Phương Trang).' },
      { category: 'Khách sạn / Homestay', amount: 1200000, description: 'Homestay xinh xắn trung tâm 2 đêm (chia đôi phòng 600k/người).' },
      { category: 'Ăn uống thả ga', amount: 900000, description: 'Lẩu gà lá é, bánh mì xíu mại, lẩu bò dã ngoại, ăn vặt chợ đêm.' },
      { category: 'Vé tham quan & Thuê xe', amount: 500000, description: 'Vé Puppy Farm, vé xe Jeep LangBiang, thuê xe máy và xăng xe di chuyển.' }
    ]
  },
  {
    destinationId: 'sapa',
    title: 'Chi Phí Tham Khảo Sa Pa 3N2Đ (Trải nghiệm trọn vẹn)',
    total: 3850000,
    tier: 'Medium',
    tierVi: 'Trải nghiệm phong phú',
    items: [
      { category: 'Vé xe giường nằm Cabin', amount: 800000, description: 'Vé khứ hồi Hà Nội - Sa Pa cabin đôi cực kỳ êm ái.' },
      { category: 'Khách sạn 3 sao view núi', amount: 1400000, description: 'Khách sạn trung tâm có cửa sổ ngắm mây 2 đêm (700k/người).' },
      { category: 'Ăn uống ẩm thực vùng cao', amount: 1000000, description: 'Lẩu cá hồi sapa, lợn cắp nách nướng, đồ nướng ngói thơm ngon.' },
      { category: 'Vé cáp treo Fansipan & Cát Cát', amount: 650000, description: 'Vé cáp treo Fansipan (chưa gồm tàu điện đỉnh) và vé vào bản Cát Cát.' }
    ]
  },
  {
    destinationId: 'halong',
    title: 'Chi Phí Tham Khảo Du Thuyền Hạ Long 2N1Đ (Trải nghiệm Cao Cấp)',
    total: 5100000,
    tier: 'High',
    tierVi: 'Sang trọng & Nghỉ dưỡng',
    items: [
      { category: 'Xe Limousine đón tiễn tận nơi', amount: 600000, description: 'Xe đưa đón khứ hồi Hà Nội - Hạ Long limousine cực êm.' },
      { category: 'Du thuyền 5 sao đẳng cấp', amount: 3500000, description: 'Tour trọn gói cabin ban công riêng, 4 bữa ăn sang trọng, vé tham quan.' },
      { category: 'Chi phí mua sắm & Đồ uống cá nhân', amount: 1000000, description: 'Đồ uống cocktail tại quầy bar du thuyền, hải sản mua mang về làm quà.' }
    ]
  },
  {
    destinationId: 'hoian',
    title: 'Chi Phí Tham Khảo Hội An 3N2Đ (Nhẹ nhàng - Cổ kính)',
    total: 2900000,
    tier: 'Low',
    tierVi: 'Siêu tiết kiệm & Thảnh thơi',
    items: [
      { category: 'Vé xe / Tàu hỏa di chuyển', amount: 600000, description: 'Vé tàu hỏa / xe khách khứ hồi đến Đà Nẵng rồi đi bus vào Hội An.' },
      { category: 'Homestay trong phố cổ', amount: 1000000, description: 'Phòng homestay xinh xắn kiến trúc hoài cổ mộc mạc 2 đêm.' },
      { category: 'Ăn uống tinh hoa phố cổ', amount: 800000, description: 'Cơm gà Bà Buội, bánh mì Phượng, cao lầu, chè phố cổ ngọt mát.' },
      { category: 'Vé tham quan & Thuyền hoa đăng', description: 'Vé rừng dừa Bảy Mẫu, đi thuyền thả hoa đăng ước nguyện trên sông Hoài.', amount: 500000 }
    ]
  },
  {
    destinationId: 'phuquoc',
    title: 'Chi Phí Tham Khảo Phú Quốc 3N2Đ (Khám phá Đảo Ngọc)',
    total: 4800000,
    tier: 'High',
    tierVi: 'Khám phá & Nghỉ dưỡng biển',
    items: [
      { category: 'Vé máy bay khứ hồi', amount: 2000000, description: 'Vé máy bay khứ hồi khuyên săn sớm từ Vietjet / Bamboo.' },
      { category: 'Resort view biển 3 sao', amount: 1500000, description: 'Resort hồ bơi gần biển 2 đêm ấm áp thư thái.' },
      { category: 'Tour 3 đảo Cano ngắm san hô', amount: 800000, description: 'Cano ghép đoàn lặn ngắm san hô, chụp ảnh flycam chuyên nghiệp.' },
      { category: 'Ẩm thực hải sản Phú Quốc', amount: 500000, description: 'Bún quậy Kiến Xây, hải sản chợ đêm, lẩu cá bớp béo ngậy.' }
    ]
  },
  {
    destinationId: 'ninhbinh',
    title: 'Chi Phí Tham Khảo Ninh Bình 2N1Đ (Vịnh Hạ Long trên cạn)',
    total: 1950000,
    tier: 'Low',
    tierVi: 'Giá rẻ & Gần gũi thiên nhiên',
    items: [
      { category: 'Vé xe limousine khứ hồi', amount: 3500000 / 10, description: 'Xe đưa đón khứ hồi Hà Nội - Ninh Bình limousine.' },
      { category: 'Homestay vườn lúa thanh bình', amount: 700000, description: 'Bungalow nhỏ xinh mộc mạc view sông núi ruộng lúa.' },
      { category: 'Ăn uống đặc sản dê núi', amount: 500000, description: 'Cơm cháy ruốc thơm giòn, thịt dê tái chanh cay ngọt đậm vị.' },
      { category: 'Vé đò Tràng An & Hang Múa', amount: 400000, description: 'Vé thuyền Tràng An mát rượi và vé tham quan đỉnh núi rồng Hang Múa.' }
    ]
  }
];

export const ALBUMS: Album[] = [
  {
    id: 'album-halong',
    name: 'Tuyệt Tác Vịnh Hạ Long',
    coverImage: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    description: 'Khoảnh khắc kỳ quan thiên nhiên thế giới rực rỡ với làn nước màu lục bảo kỳ vĩ soi bóng hàng ngàn đảo đá karst cổ xưa hoành tráng.',
    photos: [
      { id: 'hl-1', albumId: 'album-halong', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80', caption: 'Hoàng hôn dát vàng óng ánh trên làn nước Vịnh Hạ Long bình yên.', location: 'Vịnh Hạ Long' },
      { id: 'hl-2', albumId: 'album-halong', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80', caption: 'Du thuyền rẽ sóng lướt nhẹ qua những hòn đảo karst sừng sững.', location: 'Hòn Trống Mái' },
      { id: 'hl-3', albumId: 'album-halong', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80', caption: 'Trải nghiệm du ngoạn ngắm vách đá karst hoang sơ mát rượi.', location: 'Hang Luồn' },
      { id: 'hl-4', albumId: 'album-halong', url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80', caption: 'Góc nhìn mộng mơ bao trọn vịnh đảo đón gió mát lành từ boong tàu.', location: 'Vịnh Hạ Long' }
    ]
  },
  {
    id: 'album-dalat',
    name: 'Đà Lạt - Phố Sương Và Hoa',
    coverImage: 'https://images.unsplash.com/photo-1611637576109-b6f76185ec9b?auto=format&fit=crop&w=600&q=80',
    description: 'Nơi mây mù sương phủ quấn quýt rừng thông bạt ngàn, những dải hoa tú cầu nở rộ lãng mạn vô bờ bến ôm trọn từng dốc nhỏ.',
    photos: [
      { id: 'dl-1', albumId: 'album-dalat', url: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80', caption: 'Đồi chè Cầu Đất mướt mát chìm đắm trong sương sớm bình minh lung linh.', location: 'Đồi chè Cầu Đất' },
      { id: 'dl-2', albumId: 'album-dalat', url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80', caption: 'Rừng thông xanh ngắt cao vút rì rào trong nắng ấm chiều rực rỡ.', location: 'Đường đi Trại Mát' },
      { id: 'dl-3', albumId: 'album-dalat', url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80', caption: 'Quán cà phê mộc mạc yên bình view hướng thẳng thung lũng mộng mơ.', location: 'Quán của Thời Thanh Xuân' },
      { id: 'dl-4', albumId: 'album-dalat', url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80', caption: 'Vườn hoa cẩm tú cầu xanh biếc khổng lồ ngậm sương tinh khiết.', location: 'Trại Mát' }
    ]
  },
  {
    id: 'album-hoian',
    name: 'Hội An - Hoài Cổ Từng Góc Nhỏ',
    coverImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80',
    description: 'Nét rêu phong cổ kính trên bức tường vàng nhuốm màu thời gian, ánh lồng đèn lung linh huyền ảo tỏa rạng bến sông hoài cổ mộng mơ.',
    photos: [
      { id: 'ha-1', albumId: 'album-hoian', url: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80', caption: 'Bức tường vàng rực rỡ đặc trưng lấp ló giàn hoa giấy rủ xuống duyên dáng.', location: 'Phố cổ Hội An' },
      { id: 'ha-2', albumId: 'album-hoian', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80', caption: 'Phố cổ về đêm rực rỡ trong ánh đèn lồng thắp sáng kỳ ảo khắp ngả đường.', location: 'Cầu đèn lồng' },
      { id: 'ha-3', albumId: 'album-hoian', url: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1200&q=80', caption: 'Thuyền mộc mạc trôi lững lờ trên sông Thu Bồn đón nắng dịu.', location: 'Sông Thu Bồn' },
      { id: 'ha-4', albumId: 'album-hoian', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80', caption: 'Dòng sông Hoài đêm yên ả lấp lánh lung linh ánh sáng phản chiếu kì diệu.', location: 'Bến sông Hoài' }
    ]
  },
  {
    id: 'album-phuquoc',
    name: 'Thiên Đường Đảo Ngọc Phú Quốc',
    coverImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=80',
    description: 'Bờ cát trắng phau mịn như nhung ôm trọn lấy đại dương ngọc bích lấp lánh dưới ánh chiều đỏ tía tuyệt diệu bậc nhất.',
    photos: [
      { id: 'pq-1', albumId: 'album-phuquoc', url: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1200&q=80', caption: 'Hoàng hôn biển đỏ rực rỡ buông xuống mênh mông bãi biển hoang sơ tuyệt mỹ.', location: 'Bãi Trường' },
      { id: 'pq-2', albumId: 'album-phuquoc', url: 'https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?auto=format&fit=crop&w=1200&q=80', caption: 'Rặng dừa đổ dốc ôm dải cát trắng tinh khôi dưới bóng mây bồng bềnh.', location: 'Bãi Sao' },
      { id: 'pq-3', albumId: 'album-phuquoc', url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', caption: 'Làn nước trong thấu đáy tại hòn Móng Tay tha hồ tung tăng bơi lội.', location: 'Hòn Móng Tay' },
      { id: 'pq-4', albumId: 'album-phuquoc', url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80', caption: 'Khu resort yên bình nép mình dưới rặng dừa xanh mướt mát lạnh đón gió.', location: 'Nam Đảo' }
    ]
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    destinationId: 'dalat',
    author: 'Minh Thư',
    rating: 5,
    content: 'Đà Lạt đúng là nơi chữa lành tốt nhất mình từng ghé! Đọc lịch trình của Hà rất chi tiết, đặc biệt là dặn săn mây từ 4h30 sáng siêu chuẩn. Mình săn được biển mây đẹp xỉu up xỉu down luôn ý, cảm ơn Hà chia sẻ nhé!',
    createdAt: '2026-06-15 14:32',
    likes: 24
  },
  {
    id: 'c2',
    destinationId: 'halong',
    author: 'Hoàng Bách',
    rating: 5,
    content: 'Mình đã đi tour du thuyền 5 sao theo review của Hà, đúng là tiền nào của nấy. Buổi sáng tập Taichi đón bình minh và chèo kayak hang luồn cực kì phê. Trải nghiệm đáng nhớ nhất cuộc đời!',
    createdAt: '2026-06-20 09:15',
    likes: 18
  },
  {
    id: 'c3',
    destinationId: 'hoian',
    author: 'Lan Vy',
    rating: 4,
    content: 'Thích Hội An lắm, không gian rêu phong hoài niệm thật bình yên. Thả đèn hoa đăng sông Hoài siêu lãng mạn. Bài viết của chị Hà dễ thương ghê, chúc chị đi được nhiều nơi hơn nữa và viết thêm nhiều review xịn xò nha!',
    createdAt: '2026-06-28 17:40',
    likes: 15
  },
  {
    id: 'c4',
    destinationId: 'general',
    author: 'Anh Tuấn',
    rating: 5,
    content: 'Blog đẹp xuất sắc luôn Hà ơi! Thiết kế sang trọng, bố cục rõ ràng, hình ảnh và thông tin chi phí cực kỳ hữu ích cho sinh viên tụi mình tham khảo lập kế hoạch đi phượt. Ủng hộ Hà hết mình!',
    createdAt: '2026-07-02 21:05',
    likes: 32
  },
  {
    id: 'c5',
    destinationId: 'sapa',
    author: 'Phương Thảo',
    rating: 5,
    content: 'Tắm lá thuốc người Dao Đỏ ở bản Tả Phìn sau khi leo đỉnh Fansipan đúng là thiên đường cứu rỗi bắp chân ê ẩm! Đọc gợi ý của Hà xong đi thử mà mê tít thò lò luôn á.',
    createdAt: '2026-07-05 11:22',
    likes: 9
  }
];
