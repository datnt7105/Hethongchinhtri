import type { LocalizedText } from "@/types/common";

export type LeadershipProfileDetails = {
  summary: LocalizedText;
  milestones: LocalizedText[];
};

const t = (vi: string, en: string): LocalizedText => ({ vi, en });
const details = (
  viSummary: string,
  enSummary: string,
  milestones: Array<[vi: string, en: string]>,
): LeadershipProfileDetails => ({
  summary: t(viSummary, enSummary),
  milestones: milestones.map(([vi, en]) => t(vi, en)),
});

export const statePresidentProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Hồ Chí Minh": details(
    "Người đứng đầu Nhà nước Việt Nam Dân chủ Cộng hòa trong giai đoạn hình thành chính quyền cách mạng, kháng chiến và xây dựng miền Bắc. Ông đồng thời là người sáng lập Đảng và lãnh tụ của cách mạng Việt Nam.",
    "Head of the Democratic Republic of Vietnam during the formation of the revolutionary government, the resistance wars and the construction of the North. He was also the Party's founder and leader of the Vietnamese revolution.",
    [
      ["1945: Đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.", "1945: Read the Declaration of Independence, founding the Democratic Republic of Vietnam."],
      ["1946: Được Quốc hội khóa I bầu làm Chủ tịch nước.", "1946: Elected State President by the First National Assembly."],
      ["1969: Qua đời khi đang giữ cương vị Chủ tịch nước.", "1969: Died while serving as State President."],
    ],
  ),
  "Tôn Đức Thắng": details(
    "Nhà cách mạng lâu năm, kế nhiệm Chủ tịch Hồ Chí Minh và giữ cương vị nguyên thủ quốc gia trong giai đoạn kháng chiến chống Mỹ, thống nhất đất nước và những năm đầu sau thống nhất.",
    "A veteran revolutionary who succeeded President Hồ Chí Minh and served as head of state during the resistance against the United States, national reunification and the first post-reunification years.",
    [
      ["1960: Được bầu làm Phó Chủ tịch nước.", "1960: Elected Vice State President."],
      ["1969: Trở thành Chủ tịch nước.", "1969: Became State President."],
      ["1976: Tiếp tục giữ cương vị nguyên thủ của nước Việt Nam thống nhất.", "1976: Continued as head of state of reunified Vietnam."],
    ],
  ),
  "Nguyễn Hữu Thọ": details(
    "Luật sư, nhà hoạt động cách mạng và lãnh đạo Mặt trận Dân tộc Giải phóng miền Nam Việt Nam. Ông đảm nhiệm quyền Chủ tịch nước sau khi Chủ tịch Tôn Đức Thắng qua đời.",
    "A lawyer, revolutionary and leader of the National Liberation Front of South Vietnam. He served as Acting State President after President Tôn Đức Thắng died.",
    [
      ["1962: Giữ vai trò Chủ tịch Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.", "1962: Became Chair of the National Liberation Front of South Vietnam."],
      ["1976: Được bầu làm Phó Chủ tịch nước.", "1976: Elected Vice State President."],
      ["1980–1981: Thực hiện nhiệm vụ Quyền Chủ tịch nước.", "1980–1981: Performed the duties of Acting State President."],
    ],
  ),
  "Trường Chinh": details(
    "Lãnh đạo cấp cao của Đảng và Nhà nước, giữ chức Chủ tịch Hội đồng Nhà nước theo mô hình nguyên thủ tập thể được xác lập bởi Hiến pháp năm 1980.",
    "A senior Party and State leader who chaired the Council of State under the collective head-of-state model established by the 1980 Constitution.",
    [
      ["1981: Được bầu làm Chủ tịch Hội đồng Nhà nước.", "1981: Elected Chair of the Council of State."],
      ["1986: Đồng thời giữ chức Tổng Bí thư trong giai đoạn chuẩn bị Đổi mới.", "1986: Concurrently served as General Secretary during preparations for Đổi Mới."],
      ["1987: Kết thúc nhiệm kỳ Chủ tịch Hội đồng Nhà nước.", "1987: Completed his term as Chair of the Council of State."],
    ],
  ),
  "Võ Chí Công": details(
    "Nhà lãnh đạo cách mạng trưởng thành từ phong trào miền Trung và miền Nam. Ông giữ chức Chủ tịch Hội đồng Nhà nước trong giai đoạn đầu thực hiện đường lối Đổi mới.",
    "A revolutionary leader who emerged from movements in Central and Southern Vietnam. He chaired the Council of State during the early implementation of Đổi Mới.",
    [
      ["1976: Giữ nhiều trọng trách trong bộ máy nhà nước sau thống nhất.", "1976: Held major responsibilities in the post-reunification State apparatus."],
      ["1987: Được bầu làm Chủ tịch Hội đồng Nhà nước.", "1987: Elected Chair of the Council of State."],
      ["1992: Kết thúc nhiệm kỳ khi Hiến pháp mới khôi phục chức danh Chủ tịch nước.", "1992: Completed his term when the new Constitution restored the office of State President."],
    ],
  ),
  "Lê Đức Anh": details(
    "Đại tướng, từng giữ chức Bộ trưởng Bộ Quốc phòng trước khi trở thành Chủ tịch nước. Nhiệm kỳ của ông gắn với quá trình mở rộng quan hệ đối ngoại và hội nhập khu vực.",
    "An army general and former Minister of National Defence before becoming State President. His term was associated with expanding foreign relations and regional integration.",
    [
      ["1987–1991: Giữ chức Bộ trưởng Bộ Quốc phòng.", "1987–1991: Served as Minister of National Defence."],
      ["1992: Được Quốc hội bầu làm Chủ tịch nước.", "1992: Elected State President by the National Assembly."],
      ["1995: Việt Nam gia nhập ASEAN và bình thường hóa quan hệ với Hoa Kỳ.", "1995: Vietnam joined ASEAN and normalized relations with the United States."],
    ],
  ),
  "Trần Đức Lương": details(
    "Lãnh đạo trưởng thành từ lĩnh vực địa chất và quản lý nhà nước. Ông giữ chức Chủ tịch nước trong hai nhiệm kỳ, gắn với quá trình đẩy mạnh hội nhập và mở rộng quan hệ quốc tế.",
    "A leader with a background in geology and State administration. He served two terms as State President during a period of deeper integration and expanding international relations.",
    [
      ["1997: Được bầu làm Chủ tịch nước.", "1997: Elected State President."],
      ["2001: Được Quốc hội bầu tiếp tục nhiệm kỳ mới.", "2001: Re-elected by the National Assembly for a new term."],
      ["2006: Kết thúc gần chín năm giữ cương vị nguyên thủ quốc gia.", "2006: Completed nearly nine years as head of state."],
    ],
  ),
  "Nguyễn Minh Triết": details(
    "Từng giữ chức Bí thư Thành ủy Thành phố Hồ Chí Minh trước khi trở thành Chủ tịch nước. Nhiệm kỳ gắn với việc Việt Nam gia nhập WTO và tăng cường hội nhập quốc tế.",
    "Former Secretary of the Hồ Chí Minh City Party Committee before becoming State President. His term coincided with Vietnam joining the WTO and deepening international integration.",
    [
      ["2000: Giữ chức Bí thư Thành ủy Thành phố Hồ Chí Minh.", "2000: Became Secretary of the Hồ Chí Minh City Party Committee."],
      ["2006: Được Quốc hội bầu làm Chủ tịch nước.", "2006: Elected State President by the National Assembly."],
      ["2007: Thực hiện nhiều hoạt động đối ngoại sau khi Việt Nam gia nhập WTO.", "2007: Conducted extensive foreign affairs after Vietnam joined the WTO."],
    ],
  ),
  "Trương Tấn Sang": details(
    "Lãnh đạo từng công tác lâu năm tại Thành phố Hồ Chí Minh và Trung ương. Trên cương vị Chủ tịch nước, ông tập trung vào đối ngoại, cải cách tư pháp và các nhiệm vụ quốc phòng, an ninh.",
    "A leader with extensive experience in Hồ Chí Minh City and at the central level. As State President, he focused on foreign affairs, judicial reform, national defence and security.",
    [
      ["2006: Được phân công làm Thường trực Ban Bí thư.", "2006: Assigned as Permanent Member of the Party Secretariat."],
      ["2011: Được Quốc hội bầu làm Chủ tịch nước.", "2011: Elected State President by the National Assembly."],
      ["2013: Công bố Hiến pháp năm 2013.", "2013: Promulgated the 2013 Constitution."],
    ],
  ),
  "Trần Đại Quang": details(
    "Đại tướng Công an nhân dân, từng giữ chức Bộ trưởng Bộ Công an. Ông đảm nhiệm cương vị Chủ tịch nước trong giai đoạn Việt Nam tăng cường đối ngoại đa phương.",
    "A People's Public Security general and former Minister of Public Security. He served as State President as Vietnam strengthened its multilateral diplomacy.",
    [
      ["2011–2016: Giữ chức Bộ trưởng Bộ Công an.", "2011–2016: Served as Minister of Public Security."],
      ["2016: Được Quốc hội bầu làm Chủ tịch nước.", "2016: Elected State President by the National Assembly."],
      ["2017: Chủ trì nhiều hoạt động cấp cao trong Năm APEC Việt Nam.", "2017: Chaired major high-level events during Vietnam's APEC Year."],
    ],
  ),
  "Đặng Thị Ngọc Thịnh": details(
    "Phó Chủ tịch nước được giao thực hiện quyền Chủ tịch nước sau khi Chủ tịch Trần Đại Quang qua đời. Bà là người phụ nữ đầu tiên thực hiện nhiệm vụ nguyên thủ quốc gia tại Việt Nam.",
    "The Vice State President assigned to act as State President after President Trần Đại Quang died. She was the first woman to perform the duties of Vietnam's head of state.",
    [
      ["2016: Được bầu làm Phó Chủ tịch nước.", "2016: Elected Vice State President."],
      ["09/2018: Thực hiện quyền Chủ tịch nước.", "09/2018: Began serving as Acting State President."],
      ["10/2018: Kết thúc thời gian quyền Chủ tịch nước.", "10/2018: Completed her period as Acting State President."],
    ],
  ),
  "Nguyễn Phú Trọng": details(
    "Tổng Bí thư đồng thời giữ chức Chủ tịch nước trong hơn hai năm. Giai đoạn này nhấn mạnh sự phối hợp giữa công tác lãnh đạo của Đảng và hoạt động của Nhà nước.",
    "The General Secretary concurrently served as State President for more than two years, emphasizing coordination between Party leadership and State activities.",
    [
      ["2011: Được bầu làm Tổng Bí thư.", "2011: Elected General Secretary."],
      ["2018: Được Quốc hội bầu làm Chủ tịch nước.", "2018: Elected State President by the National Assembly."],
      ["2021: Kết thúc nhiệm kỳ Chủ tịch nước sau Đại hội XIII.", "2021: Completed his presidential term after the Thirteenth Party Congress."],
    ],
  ),
  "Nguyễn Xuân Phúc": details(
    "Từng giữ chức Thủ tướng Chính phủ trước khi được bầu làm Chủ tịch nước. Nhiệm kỳ gắn với ngoại giao cấp cao, vận động nguồn lực quốc tế và giai đoạn phục hồi sau đại dịch.",
    "Former Prime Minister before being elected State President. His term involved high-level diplomacy, mobilizing international resources and post-pandemic recovery.",
    [
      ["2016–2021: Giữ chức Thủ tướng Chính phủ.", "2016–2021: Served as Prime Minister."],
      ["04/2021: Được Quốc hội bầu làm Chủ tịch nước.", "04/2021: Elected State President by the National Assembly."],
      ["01/2023: Thôi giữ chức Chủ tịch nước.", "01/2023: Stepped down as State President."],
    ],
  ),
  "Võ Thị Ánh Xuân": details(
    "Phó Chủ tịch nước hai lần được giao thực hiện quyền Chủ tịch nước trong thời gian khuyết chức danh nguyên thủ quốc gia.",
    "The Vice State President who was twice assigned to act as State President while the head-of-state office was vacant.",
    [
      ["2021: Được bầu làm Phó Chủ tịch nước.", "2021: Elected Vice State President."],
      ["2023: Lần thứ nhất thực hiện quyền Chủ tịch nước.", "2023: First served as Acting State President."],
      ["2024: Lần thứ hai thực hiện quyền Chủ tịch nước.", "2024: Served as Acting State President for a second time."],
    ],
  ),
  "Võ Văn Thưởng": details(
    "Lãnh đạo từng phụ trách công tác tuyên giáo và thường trực Ban Bí thư. Ông giữ chức Chủ tịch nước trong khoảng một năm, tập trung vào đối ngoại và các hoạt động đại diện Nhà nước.",
    "A leader formerly responsible for communication and education work and the Party Secretariat. He served about one year as State President, focusing on foreign affairs and State representation.",
    [
      ["2021: Được phân công làm Thường trực Ban Bí thư.", "2021: Assigned as Permanent Member of the Party Secretariat."],
      ["03/2023: Được Quốc hội bầu làm Chủ tịch nước.", "03/2023: Elected State President by the National Assembly."],
      ["03/2024: Thôi giữ chức Chủ tịch nước.", "03/2024: Stepped down as State President."],
    ],
  ),
  "Tô Lâm": details(
    "Đại tướng Công an nhân dân, từng giữ chức Bộ trưởng Bộ Công an. Ông được bầu làm Chủ tịch nước năm 2024, sau đó giữ chức Tổng Bí thư và tiếp tục đảm nhiệm lại cương vị Chủ tịch nước từ năm 2026.",
    "A People's Public Security general and former Minister of Public Security. He was elected State President in 2024, later became General Secretary and resumed the presidency in 2026.",
    [
      ["2016–2024: Giữ chức Bộ trưởng Bộ Công an.", "2016–2024: Served as Minister of Public Security."],
      ["05/2024: Được bầu làm Chủ tịch nước; 08/2024 được bầu làm Tổng Bí thư.", "05/2024: Elected State President; elected General Secretary in 08/2024."],
      ["04/2026: Tiếp tục đảm nhiệm chức Chủ tịch nước.", "04/2026: Resumed the office of State President."],
    ],
  ),
  "Lương Cường": details(
    "Đại tướng Quân đội nhân dân, từng giữ chức Chủ nhiệm Tổng cục Chính trị và Thường trực Ban Bí thư. Ông giữ cương vị Chủ tịch nước từ cuối năm 2024 đến tháng 4/2026.",
    "A Vietnam People's Army general and former Chair of the General Political Department and Permanent Member of the Party Secretariat. He served as State President from late 2024 to April 2026.",
    [
      ["2016–2024: Giữ chức Chủ nhiệm Tổng cục Chính trị.", "2016–2024: Served as Chair of the General Political Department."],
      ["2024: Được phân công làm Thường trực Ban Bí thư, sau đó được bầu làm Chủ tịch nước.", "2024: Assigned as Permanent Member of the Party Secretariat, then elected State President."],
      ["04/2026: Kết thúc nhiệm kỳ Chủ tịch nước.", "04/2026: Completed his term as State President."],
    ],
  ),
};

export const nationalAssemblyChairProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Nguyễn Văn Tố": details(
    "Học giả và nhà hoạt động xã hội, được bầu làm người đứng đầu cơ quan thường trực của Quốc hội khóa I trong những tháng đầu của Nhà nước Việt Nam Dân chủ Cộng hòa.",
    "A scholar and social activist elected to head the standing body of the First National Assembly during the first months of the Democratic Republic of Vietnam.",
    [
      ["01/1946: Trúng cử đại biểu Quốc hội khóa I.", "01/1946: Elected to the First National Assembly."],
      ["03/1946: Đứng đầu Ban Thường trực Quốc hội.", "03/1946: Became head of the National Assembly Standing Board."],
      ["11/1946: Kết thúc nhiệm vụ Trưởng ban Thường trực.", "11/1946: Completed his service as Head of the Standing Board."],
    ],
  ),
  "Bùi Bằng Đoàn": details(
    "Nhân sĩ yêu nước, từng làm quan dưới triều Nguyễn và tham gia chính quyền cách mạng. Ông lãnh đạo Ban Thường trực Quốc hội trong phần lớn thời kỳ kháng chiến chống Pháp.",
    "A patriotic scholar-official who had served under the Nguyễn dynasty and joined the revolutionary government. He led the National Assembly Standing Board through most of the resistance against France.",
    [
      ["1945: Tham gia chính quyền cách mạng.", "1945: Joined the revolutionary government."],
      ["11/1946: Giữ chức Trưởng ban Thường trực Quốc hội.", "11/1946: Became Head of the National Assembly Standing Board."],
      ["1955: Kết thúc nhiệm kỳ sau nhiều năm công tác trong điều kiện kháng chiến.", "1955: Completed his term after years of work under wartime conditions."],
    ],
  ),
  "Tôn Đức Thắng": details(
    "Nhà cách mạng lâu năm, đứng đầu cơ quan thường trực của Quốc hội trước khi được bầu làm Phó Chủ tịch nước.",
    "A veteran revolutionary who headed the National Assembly's standing body before being elected Vice State President.",
    [
      ["1955: Giữ chức Trưởng ban Thường trực Quốc hội.", "1955: Became Head of the National Assembly Standing Board."],
      ["1959: Tham gia hoạt động của Quốc hội thông qua Hiến pháp mới.", "1959: Participated in the National Assembly's adoption of a new Constitution."],
      ["1960: Được bầu làm Phó Chủ tịch nước.", "1960: Elected Vice State President."],
    ],
  ),
  "Trường Chinh": details(
    "Lãnh đạo cấp cao của Đảng, giữ chức Chủ tịch Ủy ban Thường vụ Quốc hội trong hơn hai thập niên, gắn với thời kỳ chiến tranh và thống nhất đất nước.",
    "A senior Party leader who chaired the National Assembly Standing Committee for more than two decades through wartime and national reunification.",
    [
      ["1960: Được bầu làm Chủ tịch Ủy ban Thường vụ Quốc hội.", "1960: Elected Chair of the National Assembly Standing Committee."],
      ["1976: Tiếp tục lãnh đạo cơ quan thường trực của Quốc hội nước thống nhất.", "1976: Continued leading the standing body of the reunified country's National Assembly."],
      ["1980: Tham gia quá trình thông qua Hiến pháp năm 1980.", "1980: Participated in the adoption of the 1980 Constitution."],
    ],
  ),
  "Nguyễn Hữu Thọ": details(
    "Luật sư, lãnh đạo Mặt trận Dân tộc Giải phóng miền Nam Việt Nam và nguyên Quyền Chủ tịch nước. Ông là Chủ tịch Quốc hội trong nhiệm kỳ khóa VII.",
    "A lawyer, leader of the National Liberation Front of South Vietnam and former Acting State President. He chaired the Seventh National Assembly.",
    [
      ["1980–1981: Thực hiện quyền Chủ tịch nước.", "1980–1981: Served as Acting State President."],
      ["1981: Được bầu làm Chủ tịch Quốc hội.", "1981: Elected Chair of the National Assembly."],
      ["1987: Kết thúc nhiệm kỳ khóa VII.", "1987: Completed the Seventh National Assembly term."],
    ],
  ),
  "Lê Quang Đạo": details(
    "Lãnh đạo từng phụ trách công tác chính trị trong Quân đội và công tác tư tưởng của Đảng. Ông lãnh đạo Quốc hội trong giai đoạn đầu Đổi mới.",
    "A leader formerly responsible for political work in the military and ideological work in the Party. He led the National Assembly in the early Đổi Mới period.",
    [
      ["1987: Được bầu làm Chủ tịch Quốc hội.", "1987: Elected Chair of the National Assembly."],
      ["1987–1992: Lãnh đạo hoạt động lập pháp trong giai đoạn chuyển đổi cơ chế quản lý.", "1987–1992: Led legislative work during the transition in management mechanisms."],
      ["1992: Quốc hội thông qua Hiến pháp mới.", "1992: The National Assembly adopted a new Constitution."],
    ],
  ),
  "Nông Đức Mạnh": details(
    "Lãnh đạo Quốc hội khóa IX và khóa X, góp phần thúc đẩy hoạt động lập pháp, giám sát và đổi mới tổ chức của Quốc hội trong giai đoạn hội nhập.",
    "Chair of the Ninth and Tenth National Assemblies who helped advance legislation, oversight and organizational reform during a period of integration.",
    [
      ["1992: Được bầu làm Chủ tịch Quốc hội khóa IX.", "1992: Elected Chair of the Ninth National Assembly."],
      ["1997: Tiếp tục giữ chức Chủ tịch Quốc hội khóa X.", "1997: Continued as Chair of the Tenth National Assembly."],
      ["2001: Được bầu làm Tổng Bí thư.", "2001: Elected General Secretary."],
    ],
  ),
  "Nguyễn Văn An": details(
    "Lãnh đạo từng phụ trách công tác tổ chức của Đảng. Trên cương vị Chủ tịch Quốc hội, ông thúc đẩy cải tiến kỳ họp và nâng cao tính công khai của hoạt động nghị trường.",
    "A leader formerly responsible for Party organization work. As National Assembly Chair, he promoted improvements to sessions and greater openness in parliamentary activities.",
    [
      ["2001: Được bầu làm Chủ tịch Quốc hội.", "2001: Elected Chair of the National Assembly."],
      ["2002: Lãnh đạo Quốc hội khóa XI.", "2002: Led the Eleventh National Assembly."],
      ["2006: Kết thúc nhiệm kỳ Chủ tịch Quốc hội.", "2006: Completed his term as National Assembly Chair."],
    ],
  ),
  "Nguyễn Phú Trọng": details(
    "Lãnh đạo Quốc hội khóa XII trong giai đoạn Việt Nam gia nhập WTO và tiếp tục hoàn thiện hệ thống pháp luật phục vụ hội nhập.",
    "Chair of the Twelfth National Assembly as Vietnam joined the WTO and continued improving the legal framework for integration.",
    [
      ["2006: Được bầu làm Chủ tịch Quốc hội.", "2006: Elected Chair of the National Assembly."],
      ["2007: Lãnh đạo Quốc hội khóa XII.", "2007: Led the Twelfth National Assembly."],
      ["2011: Được bầu làm Tổng Bí thư.", "2011: Elected General Secretary."],
    ],
  ),
  "Nguyễn Sinh Hùng": details(
    "Từng giữ chức Phó Thủ tướng Thường trực Chính phủ trước khi lãnh đạo Quốc hội khóa XIII. Nhiệm kỳ gắn với quá trình xây dựng và thông qua Hiến pháp năm 2013.",
    "Former Permanent Deputy Prime Minister before leading the Thirteenth National Assembly. His term was associated with drafting and adopting the 2013 Constitution.",
    [
      ["2011: Được bầu làm Chủ tịch Quốc hội.", "2011: Elected Chair of the National Assembly."],
      ["2013: Chủ trì hoạt động Quốc hội thông qua Hiến pháp mới.", "2013: Presided over the National Assembly's adoption of the new Constitution."],
      ["2016: Kết thúc nhiệm kỳ Chủ tịch Quốc hội.", "2016: Completed his term as National Assembly Chair."],
    ],
  ),
  "Nguyễn Thị Kim Ngân": details(
    "Người phụ nữ đầu tiên giữ chức Chủ tịch Quốc hội Việt Nam. Bà lãnh đạo Quốc hội khóa XIV, chú trọng đổi mới hoạt động lập pháp và giám sát.",
    "The first woman to serve as Chair of Vietnam's National Assembly. She led the Fourteenth National Assembly with a focus on reforming legislative and oversight work.",
    [
      ["2016: Được bầu làm Chủ tịch Quốc hội.", "2016: Elected Chair of the National Assembly."],
      ["2016–2021: Lãnh đạo Quốc hội khóa XIV.", "2016–2021: Led the Fourteenth National Assembly."],
      ["2021: Kết thúc nhiệm kỳ.", "2021: Completed her term."],
    ],
  ),
  "Vương Đình Huệ": details(
    "Lãnh đạo từng giữ chức Phó Thủ tướng và Bí thư Thành ủy Hà Nội. Ông lãnh đạo Quốc hội khóa XV trong giai đoạn phục hồi kinh tế và tăng cường hoàn thiện thể chế.",
    "A former Deputy Prime Minister and Secretary of the Hà Nội Party Committee. He led the Fifteenth National Assembly during economic recovery and intensified institutional reform.",
    [
      ["2021: Được bầu làm Chủ tịch Quốc hội.", "2021: Elected Chair of the National Assembly."],
      ["2021–2024: Lãnh đạo hoạt động của Quốc hội khóa XV.", "2021–2024: Led the work of the Fifteenth National Assembly."],
      ["04/2024: Thôi giữ chức Chủ tịch Quốc hội.", "04/2024: Stepped down as National Assembly Chair."],
    ],
  ),
  "Trần Thanh Mẫn": details(
    "Từng giữ chức Chủ tịch Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và Phó Chủ tịch Thường trực Quốc hội. Ông được bầu làm Chủ tịch Quốc hội từ tháng 5/2024.",
    "Former Chair of the Central Committee of the Vietnam Fatherland Front and Permanent Vice Chair of the National Assembly. He was elected National Assembly Chair in May 2024.",
    [
      ["2017–2021: Giữ chức Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "2017–2021: Chaired the Central Committee of the Vietnam Fatherland Front."],
      ["2021: Được bầu làm Phó Chủ tịch Thường trực Quốc hội.", "2021: Elected Permanent Vice Chair of the National Assembly."],
      ["05/2024: Được bầu làm Chủ tịch Quốc hội.", "05/2024: Elected Chair of the National Assembly."],
    ],
  ),
};

export const primeMinisterProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Hồ Chí Minh": details(
    "Người đứng đầu Nhà nước đồng thời trực tiếp lãnh đạo Chính phủ trong giai đoạn đầu xây dựng chính quyền cách mạng và kháng chiến chống thực dân Pháp.",
    "The head of state who also directly led the Government during the early construction of the revolutionary administration and the resistance against French colonial rule.",
    [
      ["1945: Thành lập Chính phủ lâm thời.", "1945: Established the Provisional Government."],
      ["1946: Tiếp tục đứng đầu Chính phủ sau Tổng tuyển cử.", "1946: Continued to head the Government after the general election."],
      ["1955: Bàn giao chức Thủ tướng Chính phủ cho Phạm Văn Đồng.", "1955: Transferred the premiership to Phạm Văn Đồng."],
    ],
  ),
  "Phạm Văn Đồng": details(
    "Người giữ chức Thủ tướng lâu nhất trong lịch sử Việt Nam hiện đại. Ông lãnh đạo Chính phủ qua các giai đoạn xây dựng miền Bắc, kháng chiến, thống nhất và những năm đầu cả nước đi lên chủ nghĩa xã hội.",
    "The longest-serving Prime Minister in modern Vietnamese history. He led the Government through the construction of the North, wartime, reunification and the first years of nationwide socialist development.",
    [
      ["1954: Trưởng đoàn Chính phủ tại Hội nghị Genève.", "1954: Headed the Government delegation to the Geneva Conference."],
      ["1955: Được giao giữ chức Thủ tướng Chính phủ.", "1955: Appointed Prime Minister."],
      ["1976: Tiếp tục đứng đầu Chính phủ của nước Việt Nam thống nhất.", "1976: Continued heading the Government of reunified Vietnam."],
    ],
  ),
  "Huỳnh Tấn Phát": details(
    "Kiến trúc sư, nhà hoạt động cách mạng và người đứng đầu Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam trong giai đoạn đấu tranh thống nhất đất nước.",
    "An architect and revolutionary who headed the Provisional Revolutionary Government of the Republic of South Vietnam during the struggle for national reunification.",
    [
      ["1962: Được bầu làm Phó Chủ tịch Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.", "1962: Elected Vice Chair of the National Liberation Front of South Vietnam."],
      ["1969: Trở thành Chủ tịch Chính phủ Cách mạng lâm thời.", "1969: Became President of the Provisional Revolutionary Government."],
      ["1976: Hoàn thành nhiệm vụ khi đất nước thống nhất về mặt nhà nước.", "1976: Completed the role as the country achieved State reunification."],
    ],
  ),
  "Phạm Hùng": details(
    "Nhà cách mạng từng lãnh đạo phong trào miền Nam và giữ nhiều chức vụ quan trọng. Ông đứng đầu Hội đồng Bộ trưởng trong giai đoạn đầu triển khai đường lối Đổi mới.",
    "A revolutionary who led the movement in the South and held many senior posts. He headed the Council of Ministers during the early implementation of Đổi Mới.",
    [
      ["1976: Giữ chức Phó Thủ tướng Chính phủ.", "1976: Became Deputy Prime Minister."],
      ["1980–1987: Đồng thời phụ trách Bộ Nội vụ.", "1980–1987: Concurrently oversaw the Ministry of Home Affairs."],
      ["1987: Được bầu làm Chủ tịch Hội đồng Bộ trưởng.", "1987: Elected Chair of the Council of Ministers."],
    ],
  ),
  "Đỗ Mười": details(
    "Lãnh đạo Chính phủ trong giai đoạn chuyển đổi mạnh từ cơ chế kế hoạch hóa tập trung sang nền kinh tế hàng hóa nhiều thành phần.",
    "Head of Government during the strong transition from centralized planning to a multi-sector commodity economy.",
    [
      ["1988: Được bầu làm Chủ tịch Hội đồng Bộ trưởng.", "1988: Elected Chair of the Council of Ministers."],
      ["1989: Lãnh đạo thực hiện các biện pháp ổn định kinh tế vĩ mô.", "1989: Led the implementation of macroeconomic stabilization measures."],
      ["1991: Được bầu làm Tổng Bí thư.", "1991: Elected General Secretary."],
    ],
  ),
  "Võ Văn Kiệt": details(
    "Lãnh đạo có dấu ấn mạnh trong thúc đẩy Đổi mới, phát triển hạ tầng và mở cửa nền kinh tế. Nhiệm kỳ gắn với nhiều quyết sách về năng lượng, giao thông và hội nhập.",
    "A leader noted for advancing Đổi Mới, infrastructure development and economic opening. His tenure involved major decisions on energy, transport and integration.",
    [
      ["1991: Giữ chức Chủ tịch Hội đồng Bộ trưởng, sau đó là Thủ tướng Chính phủ.", "1991: Became Chair of the Council of Ministers and later Prime Minister."],
      ["1994: Thúc đẩy các dự án hạ tầng và năng lượng quy mô lớn.", "1994: Advanced major infrastructure and energy projects."],
      ["1995: Việt Nam gia nhập ASEAN và bình thường hóa quan hệ với Hoa Kỳ.", "1995: Vietnam joined ASEAN and normalized relations with the United States."],
    ],
  ),
  "Phan Văn Khải": details(
    "Lãnh đạo Chính phủ trong giai đoạn cải cách kinh tế, phát triển khu vực doanh nghiệp và chuẩn bị cho việc Việt Nam gia nhập WTO.",
    "Head of Government during economic reform, private-sector development and preparations for Vietnam's accession to the WTO.",
    [
      ["1997: Được bầu làm Thủ tướng Chính phủ.", "1997: Elected Prime Minister."],
      ["2000: Luật Doanh nghiệp đi vào thực tiễn, thúc đẩy môi trường kinh doanh.", "2000: The Enterprise Law took effect, improving the business environment."],
      ["2005: Thực hiện chuyến thăm chính thức Hoa Kỳ của Thủ tướng Việt Nam sau chiến tranh.", "2005: Made the first official post-war visit to the United States by a Vietnamese Prime Minister."],
    ],
  ),
  "Nguyễn Tấn Dũng": details(
    "Lãnh đạo Chính phủ trong hai nhiệm kỳ, gắn với hội nhập sâu rộng, phát triển hạ tầng, cải cách hành chính và ứng phó nhiều biến động kinh tế trong nước và quốc tế.",
    "Head of Government for two terms marked by deeper integration, infrastructure development, administrative reform and responses to domestic and global economic volatility.",
    [
      ["2006: Được bầu làm Thủ tướng Chính phủ.", "2006: Elected Prime Minister."],
      ["2007: Việt Nam gia nhập WTO.", "2007: Vietnam joined the WTO."],
      ["2011: Tiếp tục được Quốc hội bầu giữ chức Thủ tướng.", "2011: Re-elected Prime Minister by the National Assembly."],
    ],
  ),
  "Nguyễn Xuân Phúc": details(
    "Lãnh đạo Chính phủ với định hướng xây dựng Chính phủ kiến tạo, cải thiện môi trường kinh doanh và thúc đẩy hội nhập. Cuối nhiệm kỳ, Chính phủ tập trung ứng phó đại dịch COVID-19.",
    "Led the Government with an emphasis on an enabling administration, a better business environment and integration. Near the end of his term, the Government focused on responding to COVID-19.",
    [
      ["2016: Được bầu làm Thủ tướng Chính phủ.", "2016: Elected Prime Minister."],
      ["2017: Chủ trì Năm APEC Việt Nam.", "2017: Presided over Vietnam's APEC Year."],
      ["2020–2021: Chỉ đạo giai đoạn đầu phòng, chống đại dịch COVID-19.", "2020–2021: Directed the initial response to the COVID-19 pandemic."],
    ],
  ),
  "Phạm Minh Chính": details(
    "Lãnh đạo Chính phủ trong giai đoạn kiểm soát đại dịch, mở cửa phục hồi kinh tế và thúc đẩy chuyển đổi số, phát triển hạ tầng chiến lược.",
    "Led the Government through pandemic control, economic reopening and recovery, digital transformation and strategic infrastructure development.",
    [
      ["04/2021: Được bầu làm Thủ tướng Chính phủ.", "04/2021: Elected Prime Minister."],
      ["2021–2022: Chỉ đạo chuyển sang thích ứng an toàn và phục hồi sau đại dịch.", "2021–2022: Directed the shift to safe adaptation and post-pandemic recovery."],
      ["2021–2026: Thúc đẩy đầu tư hạ tầng, chuyển đổi số và cải cách hành chính.", "2021–2026: Advanced infrastructure investment, digital transformation and administrative reform."],
    ],
  ),
  "Lê Minh Hưng": details(
    "Lãnh đạo từng giữ chức Thống đốc Ngân hàng Nhà nước, Chánh Văn phòng Trung ương Đảng và Trưởng Ban Tổ chức Trung ương trước khi được bầu làm Thủ tướng Chính phủ.",
    "A leader who served as Governor of the State Bank, Chief of the Party Central Committee Office and Head of the Central Organization Commission before being elected Prime Minister.",
    [
      ["2016–2020: Giữ chức Thống đốc Ngân hàng Nhà nước.", "2016–2020: Served as Governor of the State Bank."],
      ["2024: Giữ chức Trưởng Ban Tổ chức Trung ương.", "2024: Became Head of the Central Organization Commission."],
      ["04/2026: Được bầu làm Thủ tướng Chính phủ.", "04/2026: Elected Prime Minister."],
    ],
  ),
};

export const publicSecurityMinisterProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Lê Giản": details(
    "Người đứng đầu cơ quan công an trung ương trong giai đoạn đầu của Nhà nước Việt Nam Dân chủ Cộng hòa. Đây là chức danh lịch sử tiền thân, không nên đổi thành Bộ trưởng Bộ Công an.",
    "Head of the central police authority in the early Democratic Republic of Vietnam. This was a historical predecessor office and should not be renamed Minister of Public Security.",
    [
      ["1946: Được giao phụ trách Việt Nam Công an vụ.", "1946: Assigned to lead the Vietnam Police Department."],
      ["1946–1952: Tổ chức lực lượng công an trong điều kiện kháng chiến.", "1946–1952: Organized the police force under wartime conditions."],
      ["Sau nhiệm kỳ: Tiếp tục đảm nhiệm nhiều nhiệm vụ cách mạng.", "After his term: Continued to carry out revolutionary duties."],
    ],
  ),
  "Trần Quốc Hoàn": details(
    "Bộ trưởng đầu tiên và là người giữ cương vị người đứng đầu Bộ Công an lâu nhất. Ông có vai trò quan trọng trong xây dựng lực lượng Công an nhân dân và bảo vệ an ninh quốc gia.",
    "The first and longest-serving head of the Ministry of Public Security. He played an important role in building the People's Public Security forces and safeguarding national security.",
    [
      ["1953: Được giao giữ chức Bộ trưởng Bộ Công an.", "1953: Appointed Minister of Public Security."],
      ["1960: Được bầu vào Bộ Chính trị.", "1960: Elected to the Politburo."],
      ["1980: Kết thúc gần 28 năm lãnh đạo ngành Công an.", "1980: Completed nearly 28 years leading the public security sector."],
    ],
  ),
  "Phạm Hùng": details(
    "Nhà cách mạng và lãnh đạo cấp cao của Đảng, trực tiếp phụ trách Bộ Nội vụ trong giai đoạn sau thống nhất, trước khi trở thành Chủ tịch Hội đồng Bộ trưởng.",
    "A revolutionary and senior Party leader who directly oversaw the Ministry of Home Affairs after reunification before becoming Chair of the Council of Ministers.",
    [
      ["1976: Giữ chức Phó Thủ tướng Chính phủ.", "1976: Became Deputy Prime Minister."],
      ["1980: Được giao phụ trách Bộ Nội vụ.", "1980: Assigned to oversee the Ministry of Home Affairs."],
      ["1987: Trở thành Chủ tịch Hội đồng Bộ trưởng.", "1987: Became Chair of the Council of Ministers."],
    ],
  ),
  "Mai Chí Thọ": details(
    "Đại tướng Công an nhân dân, trưởng thành từ phong trào cách mạng miền Nam. Ông lãnh đạo Bộ Nội vụ trong giai đoạn đầu Đổi mới.",
    "A People's Public Security general who emerged from the revolutionary movement in the South. He led the Ministry of Home Affairs in the early Đổi Mới period.",
    [
      ["1975: Giữ vai trò lãnh đạo Công an tại Thành phố Hồ Chí Minh.", "1975: Held a leadership role in Hồ Chí Minh City's public security force."],
      ["1987: Được bổ nhiệm làm Bộ trưởng Bộ Nội vụ.", "1987: Appointed Minister of Home Affairs."],
      ["1991: Kết thúc nhiệm kỳ Bộ trưởng.", "1991: Completed his ministerial term."],
    ],
  ),
  "Bùi Thiện Ngộ": details(
    "Thượng tướng Công an nhân dân, lãnh đạo Bộ Nội vụ trong giai đoạn tăng cường bảo vệ an ninh quốc gia và hoàn thiện tổ chức lực lượng sau Đổi mới.",
    "A People's Public Security senior lieutenant general who led the Ministry of Home Affairs as national security protection and force organization were strengthened after Đổi Mới.",
    [
      ["1991: Được bổ nhiệm làm Bộ trưởng Bộ Nội vụ.", "1991: Appointed Minister of Home Affairs."],
      ["1991–1996: Lãnh đạo công tác bảo vệ an ninh, trật tự trong bối cảnh mới.", "1991–1996: Led security and public-order work in a new context."],
      ["1996: Kết thúc nhiệm kỳ.", "1996: Completed his term."],
    ],
  ),
  "Lê Minh Hương": details(
    "Thượng tướng Công an nhân dân, giữ chức Bộ trưởng trong giai đoạn cơ quan được đổi tên từ Bộ Nội vụ trở lại thành Bộ Công an.",
    "A People's Public Security senior lieutenant general who served as minister when the institution was renamed from the Ministry of Home Affairs back to the Ministry of Public Security.",
    [
      ["1996: Được bổ nhiệm làm Bộ trưởng Bộ Nội vụ.", "1996: Appointed Minister of Home Affairs."],
      ["1998: Tiếp tục giữ chức khi cơ quan đổi tên thành Bộ Công an.", "1998: Continued in office when the institution was renamed the Ministry of Public Security."],
      ["2002: Kết thúc nhiệm kỳ Bộ trưởng.", "2002: Completed his ministerial term."],
    ],
  ),
  "Lê Hồng Anh": details(
    "Đại tướng Công an nhân dân, lãnh đạo Bộ Công an trong gần một thập niên, gắn với quá trình hiện đại hóa lực lượng và tăng cường hợp tác quốc tế về an ninh.",
    "A People's Public Security general who led the Ministry for nearly a decade during force modernization and expanded international security cooperation.",
    [
      ["2002: Được bổ nhiệm làm Bộ trưởng Bộ Công an.", "2002: Appointed Minister of Public Security."],
      ["2007: Tiếp tục giữ chức trong nhiệm kỳ Chính phủ mới.", "2007: Continued in office under the new Government term."],
      ["2011: Được phân công làm Thường trực Ban Bí thư.", "2011: Assigned as Permanent Member of the Party Secretariat."],
    ],
  ),
  "Trần Đại Quang": details(
    "Đại tướng Công an nhân dân, từng công tác lâu năm trong lĩnh vực an ninh. Ông lãnh đạo Bộ Công an trước khi được bầu làm Chủ tịch nước.",
    "A People's Public Security general with long experience in the security field. He led the Ministry before being elected State President.",
    [
      ["2011: Được bổ nhiệm làm Bộ trưởng Bộ Công an.", "2011: Appointed Minister of Public Security."],
      ["2012: Được thăng quân hàm Đại tướng.", "2012: Promoted to the rank of general."],
      ["2016: Được Quốc hội bầu làm Chủ tịch nước.", "2016: Elected State President by the National Assembly."],
    ],
  ),
  "Tô Lâm": details(
    "Đại tướng Công an nhân dân, lãnh đạo Bộ Công an trong giai đoạn sắp xếp tổ chức bộ máy, phát triển cơ sở dữ liệu dân cư và thúc đẩy chuyển đổi số trong quản lý nhà nước.",
    "A People's Public Security general who led the Ministry through organizational restructuring, development of the population database and digital transformation in State administration.",
    [
      ["2016: Được bổ nhiệm làm Bộ trưởng Bộ Công an.", "2016: Appointed Minister of Public Security."],
      ["2021–2024: Chỉ đạo triển khai cơ sở dữ liệu quốc gia về dân cư và Đề án 06.", "2021–2024: Directed the national population database and Project 06."],
      ["2024: Được bầu làm Chủ tịch nước, sau đó là Tổng Bí thư.", "2024: Elected State President and later General Secretary."],
    ],
  ),
  "Lương Tam Quang": details(
    "Đại tướng Công an nhân dân, từng giữ chức Thứ trưởng trước khi được bổ nhiệm làm Bộ trưởng. Ông tiếp tục định hướng tinh gọn tổ chức và nâng cao hiệu quả bảo đảm an ninh, trật tự.",
    "A People's Public Security general and former deputy minister before becoming minister. He has continued organizational streamlining and efforts to improve security and public-order effectiveness.",
    [
      ["2019: Được bổ nhiệm làm Thứ trưởng Bộ Công an.", "2019: Appointed Deputy Minister of Public Security."],
      ["06/2024: Được bổ nhiệm làm Bộ trưởng Bộ Công an.", "06/2024: Appointed Minister of Public Security."],
      ["2025–2026: Tiếp tục chỉ đạo sắp xếp tổ chức và hiện đại hóa lực lượng.", "2025–2026: Continued directing organizational restructuring and force modernization."],
    ],
  ),
};

export const defenceMinisterProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Chu Văn Tấn": details(
    "Nhà chỉ huy Cứu quốc quân và là người đầu tiên giữ chức Bộ trưởng Bộ Quốc phòng của Chính phủ cách mạng sau Cách mạng Tháng Tám.",
    "A commander of the National Salvation Army and the first Minister of National Defence in the revolutionary Government after the August Revolution.",
    [
      ["1940–1945: Lãnh đạo lực lượng du kích và Cứu quốc quân ở Bắc Sơn.", "1940–1945: Led guerrilla and National Salvation Army forces in Bắc Sơn."],
      ["09/1945: Được cử làm Bộ trưởng Bộ Quốc phòng.", "09/1945: Appointed Minister of National Defence."],
      ["1946: Chuyển sang đảm nhiệm các nhiệm vụ quân sự khác.", "1946: Moved to other military responsibilities."],
    ],
  ),
  "Phan Anh": details(
    "Luật sư, trí thức yêu nước tham gia Chính phủ Liên hiệp. Ông giữ chức Bộ trưởng Bộ Quốc phòng trong giai đoạn củng cố chính quyền và chuẩn bị kháng chiến.",
    "A lawyer and patriotic intellectual who joined the Coalition Government. He served as Minister of National Defence while the administration was consolidated and preparations for resistance were made.",
    [
      ["1945–1946: Tham gia Chính phủ cách mạng.", "1945–1946: Participated in the revolutionary Government."],
      ["03/1946: Giữ chức Bộ trưởng Bộ Quốc phòng.", "03/1946: Became Minister of National Defence."],
      ["Sau nhiệm kỳ: Tiếp tục hoạt động trong Chính phủ và Mặt trận.", "After his term: Continued working in the Government and the Front."],
    ],
  ),
  "Võ Nguyên Giáp": details(
    "Đại tướng, Tổng Tư lệnh Quân đội nhân dân Việt Nam, gắn với những thắng lợi quân sự lớn trong kháng chiến chống Pháp và chống Mỹ.",
    "A general and Commander-in-Chief of the Vietnam People's Army associated with major military victories in the resistance wars against France and the United States.",
    [
      ["1946: Giữ chức Bộ trưởng Bộ Quốc phòng và Tổng Chỉ huy.", "1946: Became Minister of National Defence and Commander-in-Chief."],
      ["1954: Chỉ huy Chiến dịch Điện Biên Phủ.", "1954: Commanded the Điện Biên Phủ Campaign."],
      ["1975: Tham gia lãnh đạo cuộc kháng chiến kết thúc bằng thắng lợi thống nhất đất nước.", "1975: Helped lead the resistance to victory and national reunification."],
    ],
  ),
  "Tạ Quang Bửu": details(
    "Nhà khoa học và trí thức lớn, phụ trách Bộ Quốc phòng trong một giai đoạn đầu của cuộc kháng chiến chống Pháp.",
    "A prominent scientist and intellectual who led the Ministry of National Defence during an early phase of the resistance against France.",
    [
      ["1946: Tham gia đoàn đàm phán Việt Nam tại Hội nghị Fontainebleau.", "1946: Joined the Vietnamese delegation to the Fontainebleau Conference."],
      ["1947: Giữ chức Bộ trưởng Bộ Quốc phòng.", "1947: Became Minister of National Defence."],
      ["Sau nhiệm kỳ: Có nhiều đóng góp trong khoa học và giáo dục.", "After his term: Made major contributions to science and education."],
    ],
  ),
  "Văn Tiến Dũng": details(
    "Đại tướng, Tổng Tham mưu trưởng trong nhiều năm và là một trong những chỉ huy chủ chốt của cuộc Tổng tiến công năm 1975.",
    "A general, long-serving Chief of the General Staff and one of the principal commanders of the 1975 General Offensive.",
    [
      ["1953: Được bổ nhiệm làm Tổng Tham mưu trưởng.", "1953: Appointed Chief of the General Staff."],
      ["1975: Là Tư lệnh Chiến dịch Hồ Chí Minh.", "1975: Commanded the Hồ Chí Minh Campaign."],
      ["1980: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "1980: Appointed Minister of National Defence."],
    ],
  ),
  "Lê Đức Anh": details(
    "Đại tướng, từng chỉ huy nhiều chiến trường và giữ chức Bộ trưởng Bộ Quốc phòng trước khi trở thành Chủ tịch nước.",
    "A general who commanded several theatres of war and served as Minister of National Defence before becoming State President.",
    [
      ["1970–1980: Đảm nhiệm nhiều chức vụ chỉ huy cấp cao.", "1970–1980: Held several senior command positions."],
      ["1987: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "1987: Appointed Minister of National Defence."],
      ["1992: Được bầu làm Chủ tịch nước.", "1992: Elected State President."],
    ],
  ),
  "Đoàn Khuê": details(
    "Đại tướng trưởng thành từ chiến trường miền Trung, lãnh đạo Bộ Quốc phòng trong giai đoạn điều chỉnh tổ chức quân đội sau Chiến tranh Lạnh.",
    "A general who rose through the central Vietnam theatre and led the Ministry during post-Cold War adjustments to the military organization.",
    [
      ["1987: Giữ chức Tổng Tham mưu trưởng.", "1987: Became Chief of the General Staff."],
      ["1991: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "1991: Appointed Minister of National Defence."],
      ["1997: Kết thúc nhiệm kỳ Bộ trưởng.", "1997: Completed his ministerial term."],
    ],
  ),
  "Phạm Văn Trà": details(
    "Đại tướng, Anh hùng Lực lượng vũ trang nhân dân, từng giữ chức Tổng Tham mưu trưởng. Ông lãnh đạo Bộ Quốc phòng trong giai đoạn củng cố quốc phòng toàn dân và mở rộng đối ngoại quốc phòng.",
    "A general, Hero of the People's Armed Forces and former Chief of the General Staff. He led the Ministry while all-people national defence and defence diplomacy were strengthened.",
    [
      ["1995: Giữ chức Tổng Tham mưu trưởng.", "1995: Became Chief of the General Staff."],
      ["1997: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "1997: Appointed Minister of National Defence."],
      ["2006: Kết thúc nhiệm kỳ.", "2006: Completed his term."],
    ],
  ),
  "Phùng Quang Thanh": details(
    "Đại tướng, Anh hùng Lực lượng vũ trang nhân dân. Ông lãnh đạo Bộ Quốc phòng trong hai nhiệm kỳ, thúc đẩy hiện đại hóa quân đội và đối ngoại quốc phòng.",
    "A general and Hero of the People's Armed Forces. He led the Ministry for two terms, advancing military modernization and defence diplomacy.",
    [
      ["2001: Giữ chức Tổng Tham mưu trưởng.", "2001: Became Chief of the General Staff."],
      ["2006: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "2006: Appointed Minister of National Defence."],
      ["2013: Tham gia tham mưu xây dựng Chiến lược bảo vệ Tổ quốc trong tình hình mới.", "2013: Helped formulate the Strategy for Safeguarding the Fatherland in the New Situation."],
    ],
  ),
  "Ngô Xuân Lịch": details(
    "Đại tướng, từng giữ chức Chủ nhiệm Tổng cục Chính trị. Ông lãnh đạo Bộ Quốc phòng trong giai đoạn tiếp tục xây dựng quân đội chính quy, tinh nhuệ và từng bước hiện đại.",
    "A general and former Chair of the General Political Department. He led the Ministry as the military continued becoming regular, elite and progressively modern.",
    [
      ["2011: Giữ chức Chủ nhiệm Tổng cục Chính trị.", "2011: Became Chair of the General Political Department."],
      ["2016: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "2016: Appointed Minister of National Defence."],
      ["2021: Kết thúc nhiệm kỳ Bộ trưởng.", "2021: Completed his ministerial term."],
    ],
  ),
  "Phan Văn Giang": details(
    "Đại tướng, từng giữ chức Tổng Tham mưu trưởng và Thứ trưởng Bộ Quốc phòng. Ông lãnh đạo Bộ trong giai đoạn đẩy mạnh điều chỉnh tổ chức lực lượng và hiện đại hóa quân đội.",
    "A general and former Chief of the General Staff and Deputy Minister of National Defence. He leads the Ministry during accelerated force restructuring and military modernization.",
    [
      ["2016: Giữ chức Tổng Tham mưu trưởng, Thứ trưởng Bộ Quốc phòng.", "2016: Became Chief of the General Staff and Deputy Minister of National Defence."],
      ["2021: Được bổ nhiệm làm Bộ trưởng Bộ Quốc phòng.", "2021: Appointed Minister of National Defence."],
      ["2024–2026: Tiếp tục chỉ đạo sắp xếp tổ chức lực lượng và phát triển công nghiệp quốc phòng.", "2024–2026: Continued directing force restructuring and defence-industry development."],
    ],
  ),
};

export const frontChairProfileDetails: Record<string, LeadershipProfileDetails> = {
  "Nguyễn Lương Bằng": details(
    "Nhà cách mạng thuộc thế hệ đầu, tham gia xây dựng Việt Minh và được giao làm Chủ nhiệm đầu tiên của Tổng bộ Việt Minh. Ông góp phần tổ chức khối đoàn kết phục vụ sự nghiệp giành độc lập.",
    "An early-generation revolutionary who helped build the Việt Minh and became the first Head of its General Headquarters. He contributed to organizing the unity bloc for national independence.",
    [
      ["1929: Tham gia những tổ chức cộng sản đầu tiên.", "1929: Joined the earliest communist organizations."],
      ["05/1941: Được giao làm Chủ nhiệm Tổng bộ Việt Minh.", "05/1941: Became Head of the Việt Minh General Headquarters."],
      ["1945: Tham gia xây dựng chính quyền cách mạng.", "1945: Helped establish the revolutionary administration."],
    ],
  ),
  "Huỳnh Thúc Kháng": details(
    "Nhà chí sĩ yêu nước, học giả và lãnh đạo Hội Liên hiệp quốc dân Việt Nam. Ông là gương mặt tiêu biểu trong việc tập hợp nhân sĩ, trí thức và các lực lượng yêu nước.",
    "A patriotic scholar and leader of the Vietnam National Union Association. He was a prominent figure in bringing together intellectuals and patriotic forces.",
    [
      ["1926: Sáng lập và làm chủ nhiệm báo Tiếng Dân.", "1926: Founded and directed the Tiếng Dân newspaper."],
      ["05/1946: Giữ vai trò Hội trưởng Hội Liên hiệp quốc dân Việt Nam.", "05/1946: Became President of the Vietnam National Union Association."],
      ["1946: Thực hiện nhiệm vụ Quyền Chủ tịch nước trong thời gian Chủ tịch Hồ Chí Minh công tác ở nước ngoài.", "1946: Served as Acting State President while President Hồ Chí Minh was abroad."],
    ],
  ),
  "Tôn Đức Thắng": details(
    "Nhà cách mạng lâu năm và Chủ tịch đầu tiên của Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam. Ông góp phần củng cố khối đại đoàn kết trong kháng chiến và xây dựng đất nước.",
    "A veteran revolutionary and the first Chair of the Central Committee of the Vietnam Fatherland Front. He helped consolidate national unity during resistance and national construction.",
    [
      ["1955: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "1955: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["1960: Được bầu làm Phó Chủ tịch nước.", "1960: Elected Vice State President."],
      ["1969: Trở thành Chủ tịch nước.", "1969: Became State President."],
    ],
  ),
  "Hoàng Quốc Việt": details(
    "Lãnh đạo lâu năm của Đảng, Công đoàn và Mặt trận. Ông giữ chức Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa I sau khi các tổ chức Mặt trận được thống nhất.",
    "A long-serving Party, trade-union and Front leader. He chaired the First Central Committee of the Vietnam Fatherland Front after the Front organizations were unified.",
    [
      ["1977: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa I.", "1977: Elected Chair of the First Central Committee of the Vietnam Fatherland Front."],
      ["1977–1983: Lãnh đạo công tác Mặt trận trong những năm đầu sau thống nhất.", "1977–1983: Led Front work in the first post-reunification years."],
      ["1983: Kết thúc nhiệm kỳ Chủ tịch.", "1983: Completed his term as Chair."],
    ],
  ),
  "Huỳnh Tấn Phát": details(
    "Kiến trúc sư, nhà hoạt động cách mạng và nguyên Chủ tịch Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam. Ông lãnh đạo Mặt trận trong giai đoạn đầu Đổi mới.",
    "An architect, revolutionary and former President of the Provisional Revolutionary Government of the Republic of South Vietnam. He led the Front into the early Đổi Mới period.",
    [
      ["1969: Trở thành Chủ tịch Chính phủ Cách mạng lâm thời.", "1969: Became President of the Provisional Revolutionary Government."],
      ["1983: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa II.", "1983: Elected Chair of the Second Central Committee of the Vietnam Fatherland Front."],
      ["1988: Kết thúc nhiệm kỳ Chủ tịch Mặt trận.", "1988: Completed his term as Front Chair."],
    ],
  ),
  "Nguyễn Hữu Thọ": details(
    "Luật sư, lãnh đạo Mặt trận Dân tộc Giải phóng miền Nam Việt Nam và nguyên Chủ tịch Quốc hội. Ông tiếp tục đóng góp cho khối đại đoàn kết trên cương vị Chủ tịch MTTQ Việt Nam.",
    "A lawyer, leader of the National Liberation Front of South Vietnam and former National Assembly Chair. He continued contributing to national unity as Chair of the Vietnam Fatherland Front.",
    [
      ["1962: Giữ vai trò Chủ tịch Mặt trận Dân tộc Giải phóng miền Nam Việt Nam.", "1962: Became Chair of the National Liberation Front of South Vietnam."],
      ["1988: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa III.", "1988: Elected Chair of the Third Central Committee of the Vietnam Fatherland Front."],
      ["1994: Kết thúc nhiệm kỳ Chủ tịch Mặt trận.", "1994: Completed his term as Front Chair."],
    ],
  ),
  "Lê Quang Đạo": details(
    "Lãnh đạo từng phụ trách công tác chính trị trong Quân đội và giữ chức Chủ tịch Quốc hội. Trên cương vị Chủ tịch Mặt trận, ông chú trọng củng cố đồng thuận xã hội và đại đoàn kết.",
    "A former military political-work leader and National Assembly Chair. As Front Chair, he focused on strengthening social consensus and national unity.",
    [
      ["1987–1992: Giữ chức Chủ tịch Quốc hội.", "1987–1992: Served as Chair of the National Assembly."],
      ["1994: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam khóa IV.", "1994: Elected Chair of the Fourth Central Committee of the Vietnam Fatherland Front."],
      ["1999: Kết thúc nhiệm kỳ Chủ tịch Mặt trận.", "1999: Completed his term as Front Chair."],
    ],
  ),
  "Phạm Thế Duyệt": details(
    "Lãnh đạo từng phụ trách công tác dân vận và công tác Đảng tại Hà Nội. Ông giữ chức Chủ tịch MTTQ Việt Nam qua hai khóa, thúc đẩy các cuộc vận động cộng đồng.",
    "A leader formerly responsible for mass mobilization and Party work in Hà Nội. He chaired the Vietnam Fatherland Front across two terms and promoted community campaigns.",
    [
      ["1996: Được phân công làm Trưởng Ban Dân vận Trung ương.", "1996: Became Head of the Central Commission for Mass Mobilization."],
      ["1999: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "1999: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["2007: Kết thúc nhiệm kỳ Chủ tịch Mặt trận.", "2007: Completed his term as Front Chair."],
    ],
  ),
  "Huỳnh Đảm": details(
    "Cán bộ gắn bó lâu năm với công tác Mặt trận, từng giữ chức Phó Chủ tịch kiêm Tổng Thư ký. Ông lãnh đạo MTTQ Việt Nam trong giai đoạn mở rộng các phong trào thi đua và giám sát xã hội.",
    "A long-serving Front official and former Vice Chair and Secretary-General. He led the Vietnam Fatherland Front as patriotic movements and social oversight expanded.",
    [
      ["2000: Giữ chức Phó Chủ tịch kiêm Tổng Thư ký Ủy ban Trung ương MTTQ Việt Nam.", "2000: Became Vice Chair and Secretary-General of the Central Committee of the Vietnam Fatherland Front."],
      ["2008: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "2008: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["2013: Kết thúc nhiệm kỳ Chủ tịch Mặt trận.", "2013: Completed his term as Front Chair."],
    ],
  ),
  "Nguyễn Thiện Nhân": details(
    "Giáo sư, từng giữ chức Phó Thủ tướng Chính phủ trước khi lãnh đạo MTTQ Việt Nam. Ông chú trọng đổi mới phương thức hoạt động, giám sát và phản biện xã hội.",
    "A professor and former Deputy Prime Minister before leading the Vietnam Fatherland Front. He emphasized operational reform, social oversight and policy consultation.",
    [
      ["2007–2013: Giữ chức Phó Thủ tướng Chính phủ.", "2007–2013: Served as Deputy Prime Minister."],
      ["2013: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "2013: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["2017: Được phân công làm Bí thư Thành ủy Thành phố Hồ Chí Minh.", "2017: Assigned as Secretary of the Hồ Chí Minh City Party Committee."],
    ],
  ),
  "Trần Thanh Mẫn": details(
    "Lãnh đạo trưởng thành từ công tác địa phương và Mặt trận, từng giữ chức Bí thư Thành ủy Cần Thơ. Ông lãnh đạo MTTQ Việt Nam trước khi chuyển sang công tác Quốc hội.",
    "A leader with experience in local government and Front work and former Secretary of the Cần Thơ Party Committee. He led the Vietnam Fatherland Front before moving to the National Assembly.",
    [
      ["2015: Tham gia lãnh đạo Ủy ban Trung ương MTTQ Việt Nam.", "2015: Joined the leadership of the Central Committee of the Vietnam Fatherland Front."],
      ["2017: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "2017: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["2021: Được bầu làm Phó Chủ tịch Quốc hội.", "2021: Elected Vice Chair of the National Assembly."],
    ],
  ),
  "Đỗ Văn Chiến": details(
    "Lãnh đạo từng phụ trách công tác dân tộc và giữ chức Bộ trưởng, Chủ nhiệm Ủy ban Dân tộc. Ông lãnh đạo MTTQ Việt Nam với trọng tâm đại đoàn kết, giám sát và vận động xã hội.",
    "A leader formerly responsible for ethnic affairs and former Minister-Chair of the Committee for Ethnic Minority Affairs. He leads the Front with a focus on national unity, oversight and social mobilization.",
    [
      ["2016–2021: Giữ chức Bộ trưởng, Chủ nhiệm Ủy ban Dân tộc.", "2016–2021: Served as Minister-Chair of the Committee for Ethnic Minority Affairs."],
      ["04/2021: Được bầu làm Chủ tịch Ủy ban Trung ương MTTQ Việt Nam.", "04/2021: Elected Chair of the Central Committee of the Vietnam Fatherland Front."],
      ["2024: Tiếp tục lãnh đạo Mặt trận trong nhiệm kỳ khóa X.", "2024: Continued leading the Front in its Tenth term."],
    ],
  ),
};
