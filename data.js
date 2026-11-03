/*
  Dữ liệu 40 câu lấy từ đề người dùng cung cấp.
  answer = đáp án chốt theo đề gốc.
  option.explanation = giải thích học tập cho từng phương án.
  keyNote dùng để cảnh báo khi câu hỏi có nhiều lựa chọn cũng hợp lý về mặt dược lý.
*/
window.QUESTION_BANK = [
  {
    id: 1,
    question: "Dược động học nghiên cứu vấn đề nào của thuốc?",
    answer: "C",
    options: [
      {key:"A", text:"Tác dụng và cơ chế tác dụng của thuốc", explanation:"Đây chủ yếu là nội dung của dược lực học (pharmacodynamics): thuốc tác động lên cơ thể như thế nào."},
      {key:"B", text:"Cách thuốc tác động lên cơ thể", explanation:"Cũng thuộc dược lực học, tập trung vào hiệu quả, cơ chế và quan hệ liều–đáp ứng."},
      {key:"C", text:"Quá trình hấp thu, phân bố, chuyển hóa và thải trừ của thuốc", explanation:"Đúng. Dược động học mô tả cơ thể xử lý thuốc qua ADME: hấp thu, phân bố, chuyển hóa và thải trừ."},
      {key:"D", text:"Các tác dụng không mong muốn của thuốc", explanation:"Tác dụng không mong muốn được nghiên cứu trong dược lý/an toàn thuốc, không phải định nghĩa cốt lõi của dược động học."}
    ]
  },
  {
    id: 2,
    question: "Thuốc nào thuộc nhóm thuốc lợi tiểu quai?",
    answer: "A",
    options: [
      {key:"A", text:"Furosemide", explanation:"Đúng. Furosemide là lợi tiểu quai, ức chế đồng vận chuyển Na+/K+/2Cl− ở nhánh lên quai Henle."},
      {key:"B", text:"Hydrochlorothiazide", explanation:"Hydrochlorothiazide là lợi tiểu thiazide, tác động chủ yếu ở ống lượn xa."},
      {key:"C", text:"Spironolactone", explanation:"Spironolactone là lợi tiểu giữ kali, đối kháng aldosterone."},
      {key:"D", text:"Amiloride", explanation:"Amiloride là lợi tiểu giữ kali, ức chế kênh Na+ biểu mô (ENaC) ở ống góp."}
    ]
  },
  {
    id: 3,
    question: "Thuốc nào thuộc nhóm thuốc kháng beta-adrenergic không chọn lọc?",
    answer: "A",
    options: [
      {key:"A", text:"Propranolol", explanation:"Đúng. Propranolol chẹn cả thụ thể β1 và β2 nên được xếp là beta-blocker không chọn lọc."},
      {key:"B", text:"Atenolol", explanation:"Atenolol tương đối chọn lọc β1 ở liều điều trị."},
      {key:"C", text:"Metoprolol", explanation:"Metoprolol là beta-blocker ưu tiên β1 (cardioselective)."},
      {key:"D", text:"Bisoprolol", explanation:"Bisoprolol có tính chọn lọc β1 cao hơn nhiều thuốc beta-blocker thế hệ cũ."}
    ]
  },
  {
    id: 4,
    question: "Thuốc nào được dùng trong điều trị tăng huyết áp khẩn cấp?",
    answer: "A",
    options: [
      {key:"A", text:"Sodium nitroprusside", explanation:"Đúng theo đề. Sodium nitroprusside là thuốc giãn mạch đường tĩnh mạch, tác dụng rất nhanh và có thể dùng trong một số tăng huyết áp cấp cứu với theo dõi chặt."},
      {key:"B", text:"Nifedipine", explanation:"Nifedipine tác dụng nhanh đường uống/ngậm dưới lưỡi không được ưu tiên để xử trí tăng huyết áp cấp cứu do nguy cơ hạ áp khó kiểm soát."},
      {key:"C", text:"Enalapril", explanation:"Enalapril đường uống khởi phát không phù hợp cho xử trí cấp cứu; enalaprilat tiêm là một dạng khác và chỉ dùng trong tình huống chọn lọc."},
      {key:"D", text:"Lisinopril", explanation:"Lisinopril là ACEI đường uống, phù hợp điều trị mạn hơn là kiểm soát huyết áp cấp cứu tức thời."}
    ]
  },
  {
    id: 5,
    question: "Thuốc nào là thuốc kháng vitamin K?",
    answer: "A",
    options: [
      {key:"A", text:"Warfarin", explanation:"Đúng. Warfarin ức chế vitamin K epoxide reductase, làm giảm tổng hợp các yếu tố đông máu phụ thuộc vitamin K."},
      {key:"B", text:"Heparin", explanation:"Heparin tăng hoạt tính antithrombin, không phải thuốc kháng vitamin K."},
      {key:"C", text:"Dabigatran", explanation:"Dabigatran là thuốc ức chế trực tiếp thrombin (yếu tố IIa)."},
      {key:"D", text:"Rivaroxaban", explanation:"Rivaroxaban là thuốc ức chế trực tiếp yếu tố Xa."}
    ]
  },
  {
    id: 6,
    question: "Thuốc nào là thuốc hạ đường huyết nhóm sulfonylurea?",
    answer: "A",
    options: [
      {key:"A", text:"Glibenclamide", explanation:"Đúng. Glibenclamide (glyburide) là sulfonylurea, kích thích tế bào beta tụy tiết insulin."},
      {key:"B", text:"Metformin", explanation:"Metformin thuộc nhóm biguanide, chủ yếu giảm tân tạo glucose ở gan và tăng nhạy cảm insulin."},
      {key:"C", text:"Pioglitazone", explanation:"Pioglitazone là thiazolidinedione, hoạt hóa PPAR-γ và tăng nhạy cảm insulin."},
      {key:"D", text:"Sitagliptin", explanation:"Sitagliptin là thuốc ức chế DPP-4, làm tăng tác dụng incretin."}
    ]
  },
  {
    id: 7,
    question: "Thuốc nào là thuốc kháng histamin H2?",
    answer: "A",
    options: [
      {key:"A", text:"Ranitidine", explanation:"Đúng theo phân loại. Ranitidine là thuốc đối kháng thụ thể H2, làm giảm tiết acid dạ dày."},
      {key:"B", text:"Loratadine", explanation:"Loratadine là kháng histamin H1 thế hệ 2, dùng chủ yếu trong dị ứng."},
      {key:"C", text:"Cetirizine", explanation:"Cetirizine là kháng histamin H1 thế hệ 2."},
      {key:"D", text:"Fexofenadine", explanation:"Fexofenadine là kháng histamin H1 thế hệ 2, ít gây buồn ngủ."}
    ]
  },
  {
    id: 8,
    question: "Thuốc nào dùng để điều trị bệnh Parkinson?",
    answer: "A",
    options: [
      {key:"A", text:"Levodopa/Carbidopa", explanation:"Đúng. Levodopa được chuyển thành dopamine trong não; carbidopa giảm chuyển hóa levodopa ở ngoại vi."},
      {key:"B", text:"Haloperidol", explanation:"Haloperidol đối kháng dopamine D2 và có thể làm nặng triệu chứng Parkinson."},
      {key:"C", text:"Diazepam", explanation:"Diazepam là benzodiazepine, không phải điều trị nền cho bệnh Parkinson."},
      {key:"D", text:"Phenytoin", explanation:"Phenytoin là thuốc chống động kinh, không phải thuốc điều trị Parkinson."}
    ]
  },
  {
    id: 9,
    question: "Thuốc nào là thuốc giãn cơ không khử cực?",
    answer: "A",
    keyNote: "Theo đáp án gốc chọn A. Tuy nhiên vecuronium, atracurium và rocuronium đều là thuốc giãn cơ không khử cực; câu này có nhiều lựa chọn đúng về mặt phân loại.",
    options: [
      {key:"A", text:"Vecuronium", explanation:"Đúng theo đáp án đề. Vecuronium là thuốc chẹn thần kinh–cơ không khử cực, đối kháng cạnh tranh tại thụ thể nicotinic Nm."},
      {key:"B", text:"Suxamethonium", explanation:"Suxamethonium (succinylcholine) là thuốc giãn cơ khử cực."},
      {key:"C", text:"Atracurium", explanation:"Atracurium cũng là thuốc giãn cơ không khử cực; vì vậy lựa chọn này đúng về mặt dược lý dù đề không chọn."},
      {key:"D", text:"Rocuronium", explanation:"Rocuronium cũng là thuốc giãn cơ không khử cực; đây là một điểm khiến câu hỏi gốc bị đa đáp án."}
    ]
  },
  {
    id: 10,
    question: "Thuốc nào thuộc nhóm thuốc chống động kinh ức chế kênh Na+?",
    answer: "A",
    options: [
      {key:"A", text:"Phenytoin", explanation:"Đúng. Phenytoin ức chế kênh Na+ phụ thuộc điện thế ở trạng thái bất hoạt và hạn chế phóng điện lặp lại tần số cao."},
      {key:"B", text:"Valproate", explanation:"Valproate có nhiều cơ chế, trong đó có ảnh hưởng kênh Na+ và tăng GABA; nhưng đề đang chọn thuốc điển hình nhất là phenytoin."},
      {key:"C", text:"Gabapentin", explanation:"Gabapentin gắn tiểu đơn vị α2δ của kênh Ca2+ phụ thuộc điện thế, không phải thuốc chẹn kênh Na+ điển hình."},
      {key:"D", text:"Topiramate", explanation:"Topiramate có nhiều cơ chế, gồm ảnh hưởng kênh Na+, tăng GABA và giảm glutamate; không phải lựa chọn đơn cơ chế điển hình của câu."}
    ]
  },
  {
    id: 11,
    question: "Thuốc nào là thuốc kháng nấm polyene?",
    answer: "A",
    options: [
      {key:"A", text:"Amphotericin B", explanation:"Đúng. Amphotericin B là polyene, gắn ergosterol của màng tế bào nấm và tạo lỗ màng."},
      {key:"B", text:"Ketoconazole", explanation:"Ketoconazole là azole, ức chế tổng hợp ergosterol thông qua enzyme 14-α-demethylase."},
      {key:"C", text:"Itraconazole", explanation:"Itraconazole cũng thuộc nhóm azole."},
      {key:"D", text:"Terbinafine", explanation:"Terbinafine là allylamine, ức chế squalene epoxidase."}
    ]
  },
  {
    id: 12,
    question: "Thuốc nào là thuốc kháng sinh nhóm tetracycline?",
    answer: "A",
    options: [
      {key:"A", text:"Doxycycline", explanation:"Đúng. Doxycycline thuộc nhóm tetracycline, ức chế tổng hợp protein bằng cách gắn tiểu đơn vị 30S."},
      {key:"B", text:"Gentamicin", explanation:"Gentamicin là aminoglycoside."},
      {key:"C", text:"Erythromycin", explanation:"Erythromycin là macrolide, gắn tiểu đơn vị 50S."},
      {key:"D", text:"Ciprofloxacin", explanation:"Ciprofloxacin là fluoroquinolone, ức chế DNA gyrase/topoisomerase."}
    ]
  },
  {
    id: 13,
    question: "Thuốc nào thuộc nhóm ức chế men chuyển angiotensin (ACEI)?",
    answer: "A",
    options: [
      {key:"A", text:"Enalapril", explanation:"Đúng. Enalapril là ACEI, làm giảm tạo angiotensin II và giảm phân hủy bradykinin."},
      {key:"B", text:"Losartan", explanation:"Losartan là thuốc chẹn thụ thể angiotensin II (ARB), không ức chế ACE."},
      {key:"C", text:"Valsartan", explanation:"Valsartan là ARB."},
      {key:"D", text:"Telmisartan", explanation:"Telmisartan là ARB."}
    ]
  },
  {
    id: 14,
    question: "Thuốc nào là thuốc kháng virus HIV nhóm protease inhibitor?",
    answer: "A",
    options: [
      {key:"A", text:"Ritonavir", explanation:"Đúng. Ritonavir là thuốc ức chế protease HIV; hiện còn thường được dùng để tăng nồng độ các thuốc khác nhờ ức chế CYP3A."},
      {key:"B", text:"Zidovudine", explanation:"Zidovudine là NRTI, một chất tương tự nucleoside ức chế reverse transcriptase."},
      {key:"C", text:"Efavirenz", explanation:"Efavirenz là NNRTI."},
      {key:"D", text:"Nevirapine", explanation:"Nevirapine là NNRTI."}
    ]
  },
  {
    id: 15,
    question: "Thuốc nào gây tác dụng phụ ù tai, điếc khi dùng liều cao?",
    answer: "A",
    options: [
      {key:"A", text:"Aminoglycoside", explanation:"Đúng. Aminoglycoside có độc tính trên tai (ốc tai/tiền đình) và độc thận, nguy cơ tăng khi liều cao hoặc tích lũy."},
      {key:"B", text:"Tetracycline", explanation:"Tetracycline nổi bật với rối loạn tiêu hóa, nhạy cảm ánh sáng và ảnh hưởng răng/xương ở trẻ, không điển hình gây độc tai."},
      {key:"C", text:"Chloramphenicol", explanation:"Chloramphenicol nổi bật với ức chế tủy xương, thiếu máu bất sản và hội chứng xám ở trẻ sơ sinh."},
      {key:"D", text:"Macrolide", explanation:"Một số macrolide có thể gây giảm thính lực hồi phục ở liều cao, nhưng độc tai kinh điển trong câu hỏi này là aminoglycoside."}
    ]
  },
  {
    id: 16,
    question: "Thuốc nào thuộc nhóm thuốc kháng acid không hấp thu?",
    answer: "A",
    keyNote: "Theo đáp án gốc chọn A. Magnesi hydroxide cũng thường được xếp vào antacid không hấp thu/ít hấp thu; câu gốc có thể gây nhầm vì có hơn một lựa chọn hợp lý.",
    options: [
      {key:"A", text:"Nhôm hydroxide", explanation:"Đúng theo đề. Nhôm hydroxide là antacid tại chỗ, trung hòa acid dạ dày và hấp thu toàn thân rất ít."},
      {key:"B", text:"Natri bicarbonate", explanation:"Natri bicarbonate là antacid hấp thu, có thể gây kiềm chuyển hóa và sinh CO2."},
      {key:"C", text:"Magnesi hydroxide", explanation:"Magnesi hydroxide cũng là antacid tại chỗ, nhìn chung được xem là không hấp thu/ít hấp thu; có thể gây tiêu chảy."},
      {key:"D", text:"Calci carbonate", explanation:"Calci carbonate có thể hấp thu một phần và có nguy cơ tăng calci máu/kiềm sữa khi dùng quá mức."}
    ]
  },
  {
    id: 17,
    question: "Thuốc nào là thuốc giải độc cho ngộ độc paracetamol?",
    answer: "A",
    options: [
      {key:"A", text:"N-acetylcysteine", explanation:"Đúng. N-acetylcysteine phục hồi glutathione và giúp khử độc chất chuyển hóa NAPQI của paracetamol."},
      {key:"B", text:"Naloxone", explanation:"Naloxone là chất đối kháng opioid, dùng trong ngộ độc opioid."},
      {key:"C", text:"Atropine", explanation:"Atropine đối kháng muscarinic, dùng trong ngộ độc cholinergic như phospho hữu cơ cùng phác đồ phù hợp."},
      {key:"D", text:"Flumazenil", explanation:"Flumazenil đối kháng benzodiazepine và không phải thuốc giải độc paracetamol."}
    ]
  },
  {
    id: 18,
    question: "Thuốc nào thuộc nhóm thuốc kháng viêm glucocorticoid?",
    answer: "A",
    options: [
      {key:"A", text:"Prednisone", explanation:"Đúng. Prednisone là glucocorticoid có tác dụng chống viêm và ức chế miễn dịch."},
      {key:"B", text:"Ibuprofen", explanation:"Ibuprofen là NSAID, ức chế cyclooxygenase."},
      {key:"C", text:"Naproxen", explanation:"Naproxen là NSAID."},
      {key:"D", text:"Diclofenac", explanation:"Diclofenac là NSAID."}
    ]
  },
  {
    id: 19,
    question: "Thuốc nào được dùng để điều trị bệnh Basedow?",
    answer: "A",
    options: [
      {key:"A", text:"Methimazole", explanation:"Đúng. Methimazole ức chế thyroid peroxidase, giảm tổng hợp hormon giáp và thường được dùng điều trị cường giáp/Basedow."},
      {key:"B", text:"Levothyroxine", explanation:"Levothyroxine là T4 tổng hợp dùng chủ yếu điều trị suy giáp."},
      {key:"C", text:"Liothyronine", explanation:"Liothyronine là T3 tổng hợp, không phải thuốc kháng giáp."},
      {key:"D", text:"Thyrotropin", explanation:"Thyrotropin/TSH kích thích tuyến giáp, không phải điều trị cường giáp thông thường."}
    ]
  },
  {
    id: 20,
    question: "Thuốc nào là thuốc chẹn alpha-1 dùng trong điều trị phì đại tuyến tiền liệt lành tính?",
    answer: "A",
    keyNote: "Theo đáp án gốc chọn tamsulosin. Doxazosin, prazosin và terazosin cũng chẹn α1; tamsulosin chọn lọc hơn trên α1A ở tuyến tiền liệt và thường được dùng cho BPH.",
    options: [
      {key:"A", text:"Tamsulosin", explanation:"Đúng theo đề. Tamsulosin ưu tiên thụ thể α1A ở tuyến tiền liệt/cổ bàng quang, giúp cải thiện dòng tiểu trong BPH."},
      {key:"B", text:"Doxazosin", explanation:"Doxazosin cũng là chẹn α1 và có thể dùng cho BPH, đồng thời hạ huyết áp."},
      {key:"C", text:"Prazosin", explanation:"Prazosin là chẹn α1; chủ yếu dùng trong tăng huyết áp và một số chỉ định khác, ít được ưu tiên hơn tamsulosin cho BPH."},
      {key:"D", text:"Terazosin", explanation:"Terazosin cũng là chẹn α1 và có thể dùng điều trị BPH."}
    ]
  },
  {
    id: 21,
    question: "Thuốc nào thuộc nhóm kháng sinh carbapenem?",
    answer: "A",
    keyNote: "Imipenem, meropenem, ertapenem và doripenem đều là carbapenem. Đề gốc chọn A nhưng cả bốn phương án đều cùng nhóm.",
    options: [
      {key:"A", text:"Imipenem", explanation:"Đúng theo đề. Imipenem là kháng sinh β-lactam nhóm carbapenem, thường phối hợp cilastatin."},
      {key:"B", text:"Meropenem", explanation:"Meropenem cũng là carbapenem."},
      {key:"C", text:"Ertapenem", explanation:"Ertapenem cũng là carbapenem, có phổ khác và không bao phủ Pseudomonas/Acinetobacter tốt như một số carbapenem khác."},
      {key:"D", text:"Doripenem", explanation:"Doripenem cũng là carbapenem."}
    ]
  },
  {
    id: 22,
    question: "Thuốc nào dùng để điều trị nhiễm HIV thuộc nhóm NNRTI?",
    answer: "A",
    options: [
      {key:"A", text:"Efavirenz", explanation:"Đúng. Efavirenz là non-nucleoside reverse transcriptase inhibitor (NNRTI)."},
      {key:"B", text:"Zidovudine", explanation:"Zidovudine là NRTI."},
      {key:"C", text:"Lamivudine", explanation:"Lamivudine là NRTI/NtRTI nucleoside analogue, không phải NNRTI."},
      {key:"D", text:"Abacavir", explanation:"Abacavir là NRTI."}
    ]
  },
  {
    id: 23,
    question: "Thuốc nào có tác dụng dự phòng huyết khối tĩnh mạch sâu ở bệnh nhân phẫu thuật?",
    answer: "A",
    options: [
      {key:"A", text:"Enoxaparin", explanation:"Đúng theo đề. Enoxaparin là heparin trọng lượng phân tử thấp, thường dùng dự phòng huyết khối tĩnh mạch ở bệnh nhân phẫu thuật theo đánh giá nguy cơ."},
      {key:"B", text:"Warfarin", explanation:"Warfarin có tác dụng chống đông nhưng khởi phát chậm, không phải lựa chọn điển hình cho dự phòng quanh phẫu thuật tức thời."},
      {key:"C", text:"Aspirin", explanation:"Aspirin là kháng kết tập tiểu cầu; có vai trò trong một số bối cảnh chỉnh hình nhưng không phải lựa chọn kinh điển của câu hỏi này."},
      {key:"D", text:"Clopidogrel", explanation:"Clopidogrel là kháng kết tập tiểu cầu P2Y12, chủ yếu dùng dự phòng biến cố huyết khối động mạch."}
    ]
  },
  {
    id: 24,
    question: "Thuốc nào là thuốc điều trị tăng kali máu cấp cứu?",
    answer: "A",
    options: [
      {key:"A", text:"Calcium gluconate", explanation:"Đúng theo đề về xử trí cấp cứu khi có nguy cơ tim: calcium gluconate ổn định màng tế bào cơ tim nhưng không làm giảm nồng độ kali máu."},
      {key:"B", text:"Furosemide", explanation:"Furosemide có thể tăng thải kali qua thận nếu chức năng thận và thể tích tuần hoàn cho phép, nhưng không phải biện pháp ổn định tim tức thời."},
      {key:"C", text:"Spironolactone", explanation:"Spironolactone giữ kali và có thể làm tăng kali máu, nên không dùng để điều trị tăng kali máu."},
      {key:"D", text:"Sodium bicarbonate", explanation:"Natri bicarbonate có thể được dùng trong một số trường hợp có toan chuyển hóa để dịch chuyển kali vào tế bào, nhưng hiệu quả không ổn định và không thay thế calcium khi có biến đổi ECG."}
    ]
  },
  {
    id: 25,
    question: "Thuốc nào gây tác dụng phụ hội chứng Stevens-Johnson?",
    answer: "A",
    keyNote: "Carbamazepine, phenytoin, lamotrigine và allopurinol đều có liên quan đến SJS/TEN. Đáp án gốc chọn carbamazepine, nhưng câu có nhiều phương án đúng về nguy cơ.",
    options: [
      {key:"A", text:"Carbamazepine", explanation:"Đúng theo đề. Carbamazepine là một thuốc kinh điển liên quan SJS/TEN, đặc biệt ở một số kiểu gen HLA nguy cơ."},
      {key:"B", text:"Phenytoin", explanation:"Phenytoin cũng có thể gây SJS/TEN."},
      {key:"C", text:"Lamotrigine", explanation:"Lamotrigine có nguy cơ phát ban nặng, SJS/TEN, nhất là khi tăng liều nhanh hoặc phối hợp valproate."},
      {key:"D", text:"Allopurinol", explanation:"Allopurinol cũng là nguyên nhân quan trọng của SJS/TEN, liên quan HLA-B*58:01 ở một số quần thể."}
    ]
  },
  {
    id: 26,
    question: "Thuốc nào dùng trong điều trị đau thắt ngực Prinzmetal?",
    answer: "A",
    options: [
      {key:"A", text:"Amlodipine", explanation:"Đúng. Đau thắt ngực Prinzmetal do co thắt mạch vành thường đáp ứng với thuốc chẹn kênh calci như amlodipine và nitrate."},
      {key:"B", text:"Propranolol", explanation:"Beta-blocker không chọn lọc có thể làm nặng co thắt mạch vành ở Prinzmetal nên thường tránh."},
      {key:"C", text:"Atenolol", explanation:"Atenolol là beta-blocker; không phải nhóm ưu tiên cho đau thắt ngực do co thắt mạch vành."},
      {key:"D", text:"Metoprolol", explanation:"Metoprolol là beta-blocker β1 chọn lọc, vẫn không phải điều trị nền điển hình của Prinzmetal."}
    ]
  },
  {
    id: 27,
    question: "Thuốc nào là thuốc kháng histamin H1 thế hệ 1?",
    answer: "A",
    options: [
      {key:"A", text:"Diphenhydramine", explanation:"Đúng. Diphenhydramine là H1 thế hệ 1, qua hàng rào máu–não và thường gây buồn ngủ/kháng cholinergic."},
      {key:"B", text:"Loratadine", explanation:"Loratadine là H1 thế hệ 2, ít an thần hơn."},
      {key:"C", text:"Cetirizine", explanation:"Cetirizine là H1 thế hệ 2; vẫn có thể gây buồn ngủ ở một số người."},
      {key:"D", text:"Fexofenadine", explanation:"Fexofenadine là H1 thế hệ 2, rất ít gây an thần."}
    ]
  },
  {
    id: 28,
    question: "Thuốc nào là thuốc giảm đau chống viêm không steroid (NSAIDs)?",
    answer: "A",
    keyNote: "Theo đáp án gốc chọn ibuprofen. Aspirin và celecoxib cũng thuộc NSAID; câu này có nhiều phương án đúng theo phân loại.",
    options: [
      {key:"A", text:"Ibuprofen", explanation:"Đúng theo đề. Ibuprofen là NSAID không chọn lọc COX, có tác dụng giảm đau, hạ sốt và chống viêm."},
      {key:"B", text:"Paracetamol", explanation:"Paracetamol giảm đau/hạ sốt nhưng tác dụng chống viêm ngoại vi yếu, thường không xếp cùng NSAID kinh điển."},
      {key:"C", text:"Aspirin", explanation:"Aspirin cũng là NSAID, ức chế COX không hồi phục."},
      {key:"D", text:"Celecoxib", explanation:"Celecoxib cũng là NSAID, chọn lọc COX-2."}
    ]
  },
  {
    id: 29,
    question: "Thuốc nào thuộc nhóm kháng sinh macrolide?",
    answer: "A",
    options: [
      {key:"A", text:"Azithromycin", explanation:"Đúng. Azithromycin là macrolide, ức chế tổng hợp protein tại tiểu đơn vị 50S."},
      {key:"B", text:"Clindamycin", explanation:"Clindamycin là lincosamide."},
      {key:"C", text:"Vancomycin", explanation:"Vancomycin là glycopeptide, ức chế tổng hợp thành tế bào."},
      {key:"D", text:"Gentamicin", explanation:"Gentamicin là aminoglycoside."}
    ]
  },
  {
    id: 30,
    question: "Thuốc nào là thuốc điều trị suy giáp?",
    answer: "A",
    options: [
      {key:"A", text:"Levothyroxine", explanation:"Đúng. Levothyroxine là T4 tổng hợp và là thuốc thay thế hormon tuyến giáp chủ yếu trong suy giáp."},
      {key:"B", text:"Methimazole", explanation:"Methimazole ức chế tổng hợp hormon giáp, dùng trong cường giáp."},
      {key:"C", text:"Carbimazole", explanation:"Carbimazole chuyển thành methimazole và là thuốc kháng giáp."},
      {key:"D", text:"Propylthiouracil", explanation:"Propylthiouracil là thuốc kháng giáp, không dùng điều trị suy giáp."}
    ]
  },
  {
    id: 31,
    question: "Thuốc nào gây tác dụng phụ hội chứng Cushing khi dùng dài ngày?",
    answer: "A",
    options: [
      {key:"A", text:"Glucocorticoid", explanation:"Đúng. Dùng glucocorticoid toàn thân kéo dài có thể gây hội chứng Cushing do thuốc cùng nhiều biến chứng chuyển hóa/xương."},
      {key:"B", text:"NSAIDs", explanation:"NSAID thường gây tác dụng phụ tiêu hóa, thận và tim mạch, không gây hội chứng Cushing."},
      {key:"C", text:"Statin", explanation:"Statin có thể gây tăng men gan và bệnh cơ, không gây hội chứng Cushing."},
      {key:"D", text:"ACEI", explanation:"ACEI thường liên quan ho khan, tăng kali và phù mạch, không gây hội chứng Cushing."}
    ]
  },
  {
    id: 32,
    question: "Thuốc nào thuộc nhóm thuốc hạ lipid máu fibrate?",
    answer: "A",
    options: [
      {key:"A", text:"Fenofibrate", explanation:"Đúng. Fenofibrate là fibrate, hoạt hóa PPAR-α và đặc biệt làm giảm triglyceride."},
      {key:"B", text:"Atorvastatin", explanation:"Atorvastatin là statin, ức chế HMG-CoA reductase."},
      {key:"C", text:"Ezetimibe", explanation:"Ezetimibe ức chế hấp thu cholesterol ở ruột qua NPC1L1."},
      {key:"D", text:"Niacin", explanation:"Niacin là acid nicotinic, thuộc nhóm hạ lipid khác, không phải fibrate."}
    ]
  },
  {
    id: 33,
    question: "Thuốc nào được dùng điều trị ngộ độc digoxin?",
    answer: "A",
    options: [
      {key:"A", text:"Digoxin immune Fab", explanation:"Đúng. Digoxin immune Fab là kháng thể gắn digoxin, dùng trong ngộ độc nặng hoặc đe dọa tính mạng."},
      {key:"B", text:"Atropine", explanation:"Atropine có thể hỗ trợ nhịp chậm do ngộ độc digoxin nhưng không trung hòa digoxin."},
      {key:"C", text:"Lidocaine", explanation:"Lidocaine có thể dùng cho một số loạn nhịp thất do digoxin nhưng không phải antidote đặc hiệu."},
      {key:"D", text:"Magnesium sulfate", explanation:"Magnesium có vai trò trong một số rối loạn điện giải/loạn nhịp nhưng không phải thuốc giải độc digoxin đặc hiệu."}
    ]
  },
  {
    id: 34,
    question: "Thuốc nào là thuốc chống lao hàng 1?",
    answer: "A",
    keyNote: "Isoniazid, rifampicin, ethambutol và pyrazinamide đều là các thuốc hàng 1 trong phác đồ lao nhạy cảm thuốc; đề gốc chọn A nhưng cả bốn đều thuộc nhóm chính.",
    options: [
      {key:"A", text:"Isoniazid", explanation:"Đúng theo đề. Isoniazid là thuốc chống lao hàng 1, ức chế tổng hợp acid mycolic."},
      {key:"B", text:"Rifampicin", explanation:"Rifampicin cũng là thuốc chống lao hàng 1, ức chế RNA polymerase phụ thuộc DNA."},
      {key:"C", text:"Ethambutol", explanation:"Ethambutol cũng là thuốc chống lao hàng 1; tác dụng phụ quan trọng là viêm thần kinh thị giác."},
      {key:"D", text:"Pyrazinamide", explanation:"Pyrazinamide cũng là thuốc chống lao hàng 1 trong giai đoạn tấn công của nhiều phác đồ."}
    ]
  },
  {
    id: 35,
    question: "Thuốc nào thuộc nhóm thuốc ức chế chọn lọc tái thu hồi serotonin (SSRI)?",
    answer: "A",
    options: [
      {key:"A", text:"Fluoxetine", explanation:"Đúng. Fluoxetine là SSRI, ức chế chọn lọc chất vận chuyển serotonin (SERT)."},
      {key:"B", text:"Amitriptyline", explanation:"Amitriptyline là thuốc chống trầm cảm ba vòng (TCA)."},
      {key:"C", text:"Venlafaxine", explanation:"Venlafaxine là SNRI, ức chế tái thu hồi serotonin và norepinephrine."},
      {key:"D", text:"Duloxetine", explanation:"Duloxetine cũng là SNRI."}
    ]
  },
  {
    id: 36,
    question: "Thuốc nào dùng điều trị ngộ độc sắt?",
    answer: "A",
    options: [
      {key:"A", text:"Deferoxamine", explanation:"Đúng. Deferoxamine là chất tạo phức với sắt, dùng trong ngộ độc sắt cấp và một số tình trạng quá tải sắt."},
      {key:"B", text:"EDTA", explanation:"Calcium disodium EDTA là chất tạo chelate thường dùng trong ngộ độc chì, không phải lựa chọn chuẩn cho ngộ độc sắt."},
      {key:"C", text:"Penicillamine", explanation:"Penicillamine tạo chelate đồng và có vai trò trong bệnh Wilson; không phải thuốc giải độc sắt điển hình."},
      {key:"D", text:"Dimercaprol", explanation:"Dimercaprol tạo chelate một số kim loại nặng như arsenic/mercury và từng dùng trong ngộ độc chì phối hợp; không dùng cho sắt."}
    ]
  },
  {
    id: 37,
    question: "Thuốc nào gây tác dụng phụ cường aldosteron?",
    answer: "A",
    options: [
      {key:"A", text:"Fludrocortisone", explanation:"Đúng. Fludrocortisone có hoạt tính mineralocorticoid mạnh, có thể gây giữ natri/nước, tăng huyết áp, hạ kali — biểu hiện giống cường aldosterone."},
      {key:"B", text:"Prednisone", explanation:"Prednisone chủ yếu là glucocorticoid, hoạt tính mineralocorticoid thấp hơn fludrocortisone."},
      {key:"C", text:"Dexamethasone", explanation:"Dexamethasone gần như không có hoạt tính mineralocorticoid đáng kể."},
      {key:"D", text:"Hydrocortisone", explanation:"Hydrocortisone có một phần hoạt tính mineralocorticoid nhưng yếu hơn rõ so với fludrocortisone."}
    ]
  },
  {
    id: 38,
    question: "Thuốc nào là thuốc giãn phế quản nhóm kháng cholinergic?",
    answer: "A",
    options: [
      {key:"A", text:"Ipratropium", explanation:"Đúng. Ipratropium đối kháng muscarinic đường hít, gây giãn phế quản và giảm tiết dịch."},
      {key:"B", text:"Salbutamol", explanation:"Salbutamol là chất chủ vận β2 tác dụng ngắn (SABA)."},
      {key:"C", text:"Theophylline", explanation:"Theophylline là methylxanthine, ức chế phosphodiesterase và đối kháng adenosine."},
      {key:"D", text:"Montelukast", explanation:"Montelukast là chất đối kháng thụ thể leukotriene CysLT1, không phải thuốc kháng cholinergic."}
    ]
  },
  {
    id: 39,
    question: "Thuốc nào thuộc nhóm thuốc kháng virus viêm gan B nhóm nucleoside analogue?",
    answer: "A",
    keyNote: "Lamivudine và entecavir đều là nucleoside analogue. Tenofovir và adefovir là nucleotide analogue. Đáp án gốc chọn lamivudine.",
    options: [
      {key:"A", text:"Lamivudine", explanation:"Đúng theo đề. Lamivudine là nucleoside analogue ức chế HBV polymerase/reverse transcriptase."},
      {key:"B", text:"Tenofovir", explanation:"Tenofovir là nucleotide analogue (adenosine monophosphate analogue), không phải nucleoside analogue theo phân loại chặt."},
      {key:"C", text:"Entecavir", explanation:"Entecavir cũng là nucleoside analogue và là thuốc có hoạt tính mạnh với HBV; vì vậy phương án này cũng đúng về phân loại."},
      {key:"D", text:"Adefovir", explanation:"Adefovir là nucleotide analogue."}
    ]
  },
  {
    id: 40,
    question: "Thuốc nào dùng điều trị ngộ độc chì?",
    answer: "A",
    keyNote: "EDTA là đáp án của đề. Penicillamine và dimercaprol cũng có thể có vai trò chelation trong một số bối cảnh ngộ độc chì, tùy mức độ và phác đồ.",
    options: [
      {key:"A", text:"EDTA", explanation:"Đúng theo đề. Calcium disodium EDTA là chất tạo chelate được sử dụng trong ngộ độc chì mức độ nặng theo chỉ định."},
      {key:"B", text:"Deferoxamine", explanation:"Deferoxamine chủ yếu dùng cho ngộ độc/quá tải sắt."},
      {key:"C", text:"Penicillamine", explanation:"Penicillamine có thể tạo chelate chì nhưng thường không phải lựa chọn hàng đầu trong xử trí cấp."},
      {key:"D", text:"Dimercaprol", explanation:"Dimercaprol có thể phối hợp với EDTA trong ngộ độc chì nặng, đặc biệt khi có bệnh não do chì; không phải đáp án đơn theo đề."}
    ]
  }
];
