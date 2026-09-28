/*
  Dữ liệu tổng hợp 156 câu từ 2 file người dùng cung cấp.
  answer = file 1 dùng đáp án chốt theo đề; file 2 dùng đáp án bổ sung theo kiến thức dược lý vì tài liệu không kèm đáp án.
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
  },
{
  "id": 41,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 1,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Trình tự xảy ra khi thuốc vào cơ thể",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Hấp thu, phân bố, chuyển hóa, thải trừ",
      "explanation": "Đúng. Trình tự dược động học kinh điển là hấp thu → phân bố → chuyển hóa → thải trừ (ADME)."
    },
    {
      "key": "B",
      "text": "Phân bố, hấp thu, chuyển hóa, thải trừ",
      "explanation": "Sai. “Phân bố, hấp thu, chuyển hóa, thải trừ” không phải lựa chọn phù hợp nhất cho câu này. Trình tự dược động học kinh điển là hấp thu → phân bố → chuyển hóa → thải trừ (ADME)."
    },
    {
      "key": "C",
      "text": "Hấp thu, chuyển hóa, tích lũy, thải trừ",
      "explanation": "Sai. “Hấp thu, chuyển hóa, tích lũy, thải trừ” không phải lựa chọn phù hợp nhất cho câu này. Trình tự dược động học kinh điển là hấp thu → phân bố → chuyển hóa → thải trừ (ADME)."
    },
    {
      "key": "D",
      "text": "Hấp thu, chuyển hóa, phân bố, thải trừ",
      "explanation": "Sai. “Hấp thu, chuyển hóa, phân bố, thải trừ” không phải lựa chọn phù hợp nhất cho câu này. Trình tự dược động học kinh điển là hấp thu → phân bố → chuyển hóa → thải trừ (ADME)."
    }
  ]
},
{
  "id": 42,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 2,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Trong quá trình sử dụng thuốc, việc xác định đúng thời điểm uống thuốc quan trọng vì?",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Giúp tăng tính hấp thu, hiệu quả điều trị của thuốc",
      "explanation": "Đúng. Thời điểm dùng thuốc có thể ảnh hưởng hấp thu, nồng độ thuốc và hiệu quả điều trị."
    },
    {
      "key": "B",
      "text": "Không làm thay đổi tác dụng sinh học của thuốc",
      "explanation": "Sai. “Không làm thay đổi tác dụng sinh học của thuốc” không phải lựa chọn phù hợp nhất cho câu này. Thời điểm dùng thuốc có thể ảnh hưởng hấp thu, nồng độ thuốc và hiệu quả điều trị."
    },
    {
      "key": "C",
      "text": "Chỉ cần đảm bảo số lần uống trong ngày là đủ",
      "explanation": "Sai. “Chỉ cần đảm bảo số lần uống trong ngày là đủ” không phải lựa chọn phù hợp nhất cho câu này. Thời điểm dùng thuốc có thể ảnh hưởng hấp thu, nồng độ thuốc và hiệu quả điều trị."
    },
    {
      "key": "D",
      "text": "Thời điểm không ảnh hưởng đến kết quả điều trị",
      "explanation": "Sai. “Thời điểm không ảnh hưởng đến kết quả điều trị” không phải lựa chọn phù hợp nhất cho câu này. Thời điểm dùng thuốc có thể ảnh hưởng hấp thu, nồng độ thuốc và hiệu quả điều trị."
    }
  ]
},
{
  "id": 43,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 3,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Khi dùng chung 2 thuốc chuyển hóa gan thì",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Có thể cạnh tranh nhau",
      "explanation": "Đúng. Hai thuốc cùng được chuyển hóa ở gan có thể cạnh tranh enzym hoặc làm thay đổi chuyển hóa của nhau."
    },
    {
      "key": "B",
      "text": "Không gây ảnh hưởng gì",
      "explanation": "Sai. “Không gây ảnh hưởng gì” không phải lựa chọn phù hợp nhất cho câu này. Hai thuốc cùng được chuyển hóa ở gan có thể cạnh tranh enzym hoặc làm thay đổi chuyển hóa của nhau."
    },
    {
      "key": "C",
      "text": "Thuốc tác dụng mạnh hơn",
      "explanation": "Sai. “Thuốc tác dụng mạnh hơn” không phải lựa chọn phù hợp nhất cho câu này. Hai thuốc cùng được chuyển hóa ở gan có thể cạnh tranh enzym hoặc làm thay đổi chuyển hóa của nhau."
    },
    {
      "key": "D",
      "text": "Thuốc phát huy tối đa tác dụng",
      "explanation": "Sai. “Thuốc phát huy tối đa tác dụng” không phải lựa chọn phù hợp nhất cho câu này. Hai thuốc cùng được chuyển hóa ở gan có thể cạnh tranh enzym hoặc làm thay đổi chuyển hóa của nhau."
    }
  ]
},
{
  "id": 44,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 4,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Bệnh nhân có tiền sử suy tim, cần thận trọng với các thuốc hạ huyết áp vì sẽ làm",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Tăng nguy cơ loét dạ dày",
      "explanation": "Sai. “Tăng nguy cơ loét dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Hạ huyết áp quá mức có thể làm giảm tưới máu cơ quan, trong đó có lưu lượng máu tới gan."
    },
    {
      "key": "B",
      "text": "Tăng chức năng thận tốt hơn",
      "explanation": "Sai. “Tăng chức năng thận tốt hơn” không phải lựa chọn phù hợp nhất cho câu này. Hạ huyết áp quá mức có thể làm giảm tưới máu cơ quan, trong đó có lưu lượng máu tới gan."
    },
    {
      "key": "C",
      "text": "Tăng chức năng gan tốt hơn",
      "explanation": "Sai. “Tăng chức năng gan tốt hơn” không phải lựa chọn phù hợp nhất cho câu này. Hạ huyết áp quá mức có thể làm giảm tưới máu cơ quan, trong đó có lưu lượng máu tới gan."
    },
    {
      "key": "D",
      "text": "Giảm lượng máu tới gan",
      "explanation": "Đúng. Hạ huyết áp quá mức có thể làm giảm tưới máu cơ quan, trong đó có lưu lượng máu tới gan."
    }
  ]
},
{
  "id": 45,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 5,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "những thuốc dùng một lần một ngày ưu tiên sử dụng thuốc có",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Tác dụng nhanh",
      "explanation": "Sai. “Tác dụng nhanh” không phải lựa chọn phù hợp nhất cho câu này. Thuốc dùng một lần mỗi ngày thường cần thời gian tác dụng đủ dài để duy trì hiệu quả trong 24 giờ."
    },
    {
      "key": "B",
      "text": "Có khả năng tích lũy nhiều",
      "explanation": "Sai. “Có khả năng tích lũy nhiều” không phải lựa chọn phù hợp nhất cho câu này. Thuốc dùng một lần mỗi ngày thường cần thời gian tác dụng đủ dài để duy trì hiệu quả trong 24 giờ."
    },
    {
      "key": "C",
      "text": "Có khả năng thải trừ nhanh",
      "explanation": "Sai. “Có khả năng thải trừ nhanh” không phải lựa chọn phù hợp nhất cho câu này. Thuốc dùng một lần mỗi ngày thường cần thời gian tác dụng đủ dài để duy trì hiệu quả trong 24 giờ."
    },
    {
      "key": "D",
      "text": "Tác dụng kéo dài",
      "explanation": "Đúng. Thuốc dùng một lần mỗi ngày thường cần thời gian tác dụng đủ dài để duy trì hiệu quả trong 24 giờ."
    }
  ]
},
{
  "id": 46,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 6,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "bệnh nhân đang sử dụng hai thuốc làm giảm tác dụng từng thuốc, đây là tương tác",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Đối kháng",
      "explanation": "Đúng. Khi hai thuốc làm giảm tác dụng của nhau, đó là tương tác đối kháng."
    },
    {
      "key": "B",
      "text": "Hiệp đồng",
      "explanation": "Sai. “Hiệp đồng” không phải lựa chọn phù hợp nhất cho câu này. Khi hai thuốc làm giảm tác dụng của nhau, đó là tương tác đối kháng."
    },
    {
      "key": "C",
      "text": "Đảo",
      "explanation": "Sai. “Đảo” không phải lựa chọn phù hợp nhất cho câu này. Khi hai thuốc làm giảm tác dụng của nhau, đó là tương tác đối kháng."
    },
    {
      "key": "D",
      "text": "Chuyển hóa",
      "explanation": "Sai. “Chuyển hóa” không phải lựa chọn phù hợp nhất cho câu này. Khi hai thuốc làm giảm tác dụng của nhau, đó là tương tác đối kháng."
    }
  ]
},
{
  "id": 47,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 7,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "ưu điểm của thuốc đặc so với dạng bào chế khác",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Sử dụng và dễ bảo quản",
      "explanation": "Sai. “Sử dụng và dễ bảo quản” không phải lựa chọn phù hợp nhất cho câu này. Câu có khả năng muốn nói “thuốc đặt”; thuốc đặt trực tràng có thể hấp thu qua niêm mạc trực tràng và hữu ích khi khó dùng đường uống."
    },
    {
      "key": "B",
      "text": "Tác dụng nhanh qua niêm mạc trực tràng",
      "explanation": "Đúng. Câu có khả năng muốn nói “thuốc đặt”; thuốc đặt trực tràng có thể hấp thu qua niêm mạc trực tràng và hữu ích khi khó dùng đường uống."
    },
    {
      "key": "C",
      "text": "Có thể điều chỉnh liều dễ dàng hơn",
      "explanation": "Sai. “Có thể điều chỉnh liều dễ dàng hơn” không phải lựa chọn phù hợp nhất cho câu này. Câu có khả năng muốn nói “thuốc đặt”; thuốc đặt trực tràng có thể hấp thu qua niêm mạc trực tràng và hữu ích khi khó dùng đường uống."
    },
    {
      "key": "D",
      "text": "Không gây tác dụng phụ ngoài da",
      "explanation": "Sai. “Không gây tác dụng phụ ngoài da” không phải lựa chọn phù hợp nhất cho câu này. Câu có khả năng muốn nói “thuốc đặt”; thuốc đặt trực tràng có thể hấp thu qua niêm mạc trực tràng và hữu ích khi khó dùng đường uống."
    }
  ],
  "keyNote": "File ghi “thuốc đặc”; dựa vào phương án “niêm mạc trực tràng”, nhiều khả năng đề muốn nói “thuốc đặt”."
},
{
  "id": 48,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 8,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc dạ dày để chữa loét ưu tiên sử dụng khi",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Sau bữa ăn",
      "explanation": "Sai. “Sau bữa ăn” không phải lựa chọn phù hợp nhất cho câu này. Nhiều thuốc điều trị loét/giảm tiết acid như PPI được ưu tiên dùng lúc dạ dày rỗng, thường trước bữa ăn."
    },
    {
      "key": "B",
      "text": "Lúc no",
      "explanation": "Sai. “Lúc no” không phải lựa chọn phù hợp nhất cho câu này. Nhiều thuốc điều trị loét/giảm tiết acid như PPI được ưu tiên dùng lúc dạ dày rỗng, thường trước bữa ăn."
    },
    {
      "key": "C",
      "text": "Lúc đói",
      "explanation": "Đúng. Nhiều thuốc điều trị loét/giảm tiết acid như PPI được ưu tiên dùng lúc dạ dày rỗng, thường trước bữa ăn."
    },
    {
      "key": "D",
      "text": "Uống lúc nào cũng được",
      "explanation": "Sai. “Uống lúc nào cũng được” không phải lựa chọn phù hợp nhất cho câu này. Nhiều thuốc điều trị loét/giảm tiết acid như PPI được ưu tiên dùng lúc dạ dày rỗng, thường trước bữa ăn."
    }
  ],
  "keyNote": "Câu hỏi nói chung “thuốc dạ dày” nên thời điểm dùng thực tế phụ thuộc từng thuốc; đáp án C phù hợp nhất với thuốc giảm tiết acid thường dùng trước ăn."
},
{
  "id": 49,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 9,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "các thuốc kém bền trong môi trường acid ở lâu dạ dày sẽ",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng cường hấp thu",
      "explanation": "Sai. “Tăng cường hấp thu” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kém bền trong môi trường acid có thể bị acid dạ dày phá hủy khi lưu lại lâu."
    },
    {
      "key": "B",
      "text": "Bị phá hủy nhiều",
      "explanation": "Đúng. Thuốc kém bền trong môi trường acid có thể bị acid dạ dày phá hủy khi lưu lại lâu."
    },
    {
      "key": "C",
      "text": "Tăng sinh khả dụng",
      "explanation": "Sai. “Tăng sinh khả dụng” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kém bền trong môi trường acid có thể bị acid dạ dày phá hủy khi lưu lại lâu."
    },
    {
      "key": "D",
      "text": "Không ảnh hưởng đến hoạt tính thuốc",
      "explanation": "Sai. “Không ảnh hưởng đến hoạt tính thuốc” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kém bền trong môi trường acid có thể bị acid dạ dày phá hủy khi lưu lại lâu."
    }
  ]
},
{
  "id": 50,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 10,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "khi sử dụng Tertracyclin nên uống cùng với",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Nước cam",
      "explanation": "Sai. “Nước cam” không phải lựa chọn phù hợp nhất cho câu này. Tetracyclin nên uống với nước lọc; sữa/khoáng có ion kim loại có thể tạo phức và làm giảm hấp thu."
    },
    {
      "key": "B",
      "text": "Nước lọc",
      "explanation": "Đúng. Tetracyclin nên uống với nước lọc; sữa/khoáng có ion kim loại có thể tạo phức và làm giảm hấp thu."
    },
    {
      "key": "C",
      "text": "Sữa",
      "explanation": "Sai. “Sữa” không phải lựa chọn phù hợp nhất cho câu này. Tetracyclin nên uống với nước lọc; sữa/khoáng có ion kim loại có thể tạo phức và làm giảm hấp thu."
    },
    {
      "key": "D",
      "text": "Nước khoáng kiềm",
      "explanation": "Sai. “Nước khoáng kiềm” không phải lựa chọn phù hợp nhất cho câu này. Tetracyclin nên uống với nước lọc; sữa/khoáng có ion kim loại có thể tạo phức và làm giảm hấp thu."
    }
  ]
},
{
  "id": 51,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 11,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Khi sử dụng các thuốc tan trong ruột cần lưu ý",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Uống liền trước ăn",
      "explanation": "Sai. “Uống liền trước ăn” không phải lựa chọn phù hợp nhất cho câu này. Viên bao tan trong ruột thường không nên dùng cùng thức ăn và không được nhai/nghiền; đáp án của đề hướng tới dùng cách bữa ăn."
    },
    {
      "key": "B",
      "text": "Ngay sau ăn",
      "explanation": "Sai. “Ngay sau ăn” không phải lựa chọn phù hợp nhất cho câu này. Viên bao tan trong ruột thường không nên dùng cùng thức ăn và không được nhai/nghiền; đáp án của đề hướng tới dùng cách bữa ăn."
    },
    {
      "key": "C",
      "text": "Cách bữa ăn ít nhất 1 giờ",
      "explanation": "Đúng. Viên bao tan trong ruột thường không nên dùng cùng thức ăn và không được nhai/nghiền; đáp án của đề hướng tới dùng cách bữa ăn."
    },
    {
      "key": "D",
      "text": "Uống cùng với cà phê",
      "explanation": "Sai. “Uống cùng với cà phê” không phải lựa chọn phù hợp nhất cho câu này. Viên bao tan trong ruột thường không nên dùng cùng thức ăn và không được nhai/nghiền; đáp án của đề hướng tới dùng cách bữa ăn."
    }
  ]
},
{
  "id": 52,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 12,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Chất độc có phân tử lượng cao , tan trong lipid thải trừ qua",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Thận",
      "explanation": "Sai. “Thận” không phải lựa chọn phù hợp nhất cho câu này. Chất có phân tử lượng lớn, tan trong lipid có thể được bài tiết qua mật rồi theo phân ra ngoài."
    },
    {
      "key": "B",
      "text": "Phổi",
      "explanation": "Sai. “Phổi” không phải lựa chọn phù hợp nhất cho câu này. Chất có phân tử lượng lớn, tan trong lipid có thể được bài tiết qua mật rồi theo phân ra ngoài."
    },
    {
      "key": "C",
      "text": "Mồ hôi",
      "explanation": "Sai. “Mồ hôi” không phải lựa chọn phù hợp nhất cho câu này. Chất có phân tử lượng lớn, tan trong lipid có thể được bài tiết qua mật rồi theo phân ra ngoài."
    },
    {
      "key": "D",
      "text": "Mật",
      "explanation": "Đúng. Chất có phân tử lượng lớn, tan trong lipid có thể được bài tiết qua mật rồi theo phân ra ngoài."
    }
  ]
},
{
  "id": 53,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 13,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc lợi tiểu thiazid có tác dụng",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tăng thải kali",
      "explanation": "Sai. “Tăng thải kali” không phải lựa chọn phù hợp nhất cho câu này. Thiazid làm tăng thải Na+ và nước ở ống lượn xa; giảm thể tích dịch giúp hạ huyết áp."
    },
    {
      "key": "B",
      "text": "Giữ kali",
      "explanation": "Sai. “Giữ kali” không phải lựa chọn phù hợp nhất cho câu này. Thiazid làm tăng thải Na+ và nước ở ống lượn xa; giảm thể tích dịch giúp hạ huyết áp."
    },
    {
      "key": "C",
      "text": "Tăng thải natri và nước",
      "explanation": "Đúng. Thiazid làm tăng thải Na+ và nước ở ống lượn xa; giảm thể tích dịch giúp hạ huyết áp."
    },
    {
      "key": "D",
      "text": "Giữ natri và nước",
      "explanation": "Sai. “Giữ natri và nước” không phải lựa chọn phù hợp nhất cho câu này. Thiazid làm tăng thải Na+ và nước ở ống lượn xa; giảm thể tích dịch giúp hạ huyết áp."
    }
  ],
  "keyNote": "Thiazid cũng có thể làm tăng thải K+. C được chọn vì mô tả tác dụng lợi tiểu chính: tăng thải Na+ và nước."
},
{
  "id": 54,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 14,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc chẹn kênh canxi có tác dụng làm",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tăng nhịp tim",
      "explanation": "Sai. “Tăng nhịp tim” không phải lựa chọn phù hợp nhất cho câu này. Chẹn kênh canxi trên cơ trơn mạch làm giảm Ca2+ đi vào tế bào và gây giãn mạch."
    },
    {
      "key": "B",
      "text": "Tăng co bóp của tim",
      "explanation": "Sai. “Tăng co bóp của tim” không phải lựa chọn phù hợp nhất cho câu này. Chẹn kênh canxi trên cơ trơn mạch làm giảm Ca2+ đi vào tế bào và gây giãn mạch."
    },
    {
      "key": "C",
      "text": "Giãn mạch máu",
      "explanation": "Đúng. Chẹn kênh canxi trên cơ trơn mạch làm giảm Ca2+ đi vào tế bào và gây giãn mạch."
    },
    {
      "key": "D",
      "text": "Co mạch máu",
      "explanation": "Sai. “Co mạch máu” không phải lựa chọn phù hợp nhất cho câu này. Chẹn kênh canxi trên cơ trơn mạch làm giảm Ca2+ đi vào tế bào và gây giãn mạch."
    }
  ]
},
{
  "id": 55,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 15,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Huyết áp là số đo phản ánh",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Nhịp tim co bóp trong buồng tâm thất",
      "explanation": "Sai. “Nhịp tim co bóp trong buồng tâm thất” không phải lựa chọn phù hợp nhất cho câu này. Huyết áp phản ánh áp lực của máu tác động lên thành động mạch."
    },
    {
      "key": "B",
      "text": "Lực máu tác động lên thành động mạch",
      "explanation": "Đúng. Huyết áp phản ánh áp lực của máu tác động lên thành động mạch."
    },
    {
      "key": "C",
      "text": "Lượng oxy lưu thông trong tĩnh mạch",
      "explanation": "Sai. “Lượng oxy lưu thông trong tĩnh mạch” không phải lựa chọn phù hợp nhất cho câu này. Huyết áp phản ánh áp lực của máu tác động lên thành động mạch."
    },
    {
      "key": "D",
      "text": "Lực máu của thành co tim khi nghỉ",
      "explanation": "Sai. “Lực máu của thành co tim khi nghỉ” không phải lựa chọn phù hợp nhất cho câu này. Huyết áp phản ánh áp lực của máu tác động lên thành động mạch."
    }
  ]
},
{
  "id": 56,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 16,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Bệnh nhân Trần Thanh T 62 tuổi bị tăng huyết áp kèm suy thận mạn, thường xuyên ăn trứng rán mỡ, bắp rang bơ. Với SBP: tâm thu; DBP: tâm trương. Huyết áp mục tiêu của bệnh nhân cần được theo JNC VIII",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "SBP < 150 mmHg hoặc DBP < 90 mmHg",
      "explanation": "Sai. “SBP < 150 mmHg hoặc DBP < 90 mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, người trưởng thành có bệnh thận mạn được điều trị tới mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "B",
      "text": "SBP < 150mmHg và DBP < 90 mmHg",
      "explanation": "Sai. “SBP < 150mmHg và DBP < 90 mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, người trưởng thành có bệnh thận mạn được điều trị tới mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "C",
      "text": "SBP <= 150 mmHg và DBP <= 90 mmHg",
      "explanation": "Sai. “SBP <= 150 mmHg và DBP <= 90 mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, người trưởng thành có bệnh thận mạn được điều trị tới mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "D",
      "text": "SBP < 140mmHg và DBP < 90mmHg",
      "explanation": "Đúng. Theo JNC 8, người trưởng thành có bệnh thận mạn được điều trị tới mục tiêu dưới 140/90 mmHg."
    }
  ],
  "keyNote": "JNC 8 là hướng dẫn năm 2014; câu này đang hỏi theo JNC 8 chứ không phải mục tiêu huyết áp hiện hành."
},
{
  "id": 57,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 17,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Ưu điểm của Losartan so với Captopril",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Hầu như không gây tác dụng phụ",
      "explanation": "Sai. “Hầu như không gây tác dụng phụ” không phải lựa chọn phù hợp nhất cho câu này. ARB như losartan ít gây ho khan hơn ACEI vì không làm tăng bradykinin theo cơ chế như captopril."
    },
    {
      "key": "B",
      "text": "Hầu như không gây ho khan",
      "explanation": "Đúng. ARB như losartan ít gây ho khan hơn ACEI vì không làm tăng bradykinin theo cơ chế như captopril."
    },
    {
      "key": "C",
      "text": "Không làm phù mạch",
      "explanation": "Sai. “Không làm phù mạch” không phải lựa chọn phù hợp nhất cho câu này. ARB như losartan ít gây ho khan hơn ACEI vì không làm tăng bradykinin theo cơ chế như captopril."
    },
    {
      "key": "D",
      "text": "Không tăng kali máu",
      "explanation": "Sai. “Không tăng kali máu” không phải lựa chọn phù hợp nhất cho câu này. ARB như losartan ít gây ho khan hơn ACEI vì không làm tăng bradykinin theo cơ chế như captopril."
    }
  ]
},
{
  "id": 58,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 18,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc ức chế men chuyến gây tác dụng phụ ho khan do làm ứ đọng",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Bradykinin",
      "explanation": "Đúng. ACEI làm giảm phân hủy bradykinin; bradykinin tích tụ liên quan ho khan."
    },
    {
      "key": "B",
      "text": "Angiotensin",
      "explanation": "Sai. “Angiotensin” không phải lựa chọn phù hợp nhất cho câu này. ACEI làm giảm phân hủy bradykinin; bradykinin tích tụ liên quan ho khan."
    },
    {
      "key": "C",
      "text": "Renin",
      "explanation": "Sai. “Renin” không phải lựa chọn phù hợp nhất cho câu này. ACEI làm giảm phân hủy bradykinin; bradykinin tích tụ liên quan ho khan."
    },
    {
      "key": "D",
      "text": "Histamin",
      "explanation": "Sai. “Histamin” không phải lựa chọn phù hợp nhất cho câu này. ACEI làm giảm phân hủy bradykinin; bradykinin tích tụ liên quan ho khan."
    }
  ]
},
{
  "id": 59,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 19,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Bệnh nhân Trần đức B 65 tuổi bị tăng huyết áp kèm đái tháo đường,máu nhiễm mỡ t. Với SBP: HA tâm thu; DBP:HA tâm trương. Huyết áp mục tiêu của bệnh nhân cần được theo JNC VIII",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "SBP < 150 mmHg hoặc DBP < 90 mmHg",
      "explanation": "Sai. “SBP < 150 mmHg hoặc DBP < 90 mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, bệnh nhân tăng huyết áp kèm đái tháo đường có mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "B",
      "text": "SBP < 140mmHg và DBP < 90 mmHg",
      "explanation": "Đúng. Theo JNC 8, bệnh nhân tăng huyết áp kèm đái tháo đường có mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "C",
      "text": "SBP <= 150 mmHg và DBP <= 90 mmHg",
      "explanation": "Sai. “SBP <= 150 mmHg và DBP <= 90 mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, bệnh nhân tăng huyết áp kèm đái tháo đường có mục tiêu dưới 140/90 mmHg."
    },
    {
      "key": "D",
      "text": "SBP < 150mmHg và DBP < 90mmHg",
      "explanation": "Sai. “SBP < 150mmHg và DBP < 90mmHg” không phải lựa chọn phù hợp nhất cho câu này. Theo JNC 8, bệnh nhân tăng huyết áp kèm đái tháo đường có mục tiêu dưới 140/90 mmHg."
    }
  ],
  "keyNote": "JNC 8 là hướng dẫn năm 2014; câu này đang hỏi theo JNC 8 chứ không phải mục tiêu huyết áp hiện hành."
},
{
  "id": 60,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 20,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc lợi tiểu và vị trí tác động tương ứng",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Furosenide – quai henle",
      "explanation": "Đúng. Furosemide là lợi tiểu quai, tác động chủ yếu ở nhánh lên dày quai Henle."
    },
    {
      "key": "B",
      "text": "Spriranolacton - ống lượn gần",
      "explanation": "Sai. “Spriranolacton - ống lượn gần” không phải lựa chọn phù hợp nhất cho câu này. Furosemide là lợi tiểu quai, tác động chủ yếu ở nhánh lên dày quai Henle."
    },
    {
      "key": "C",
      "text": "Captopril - ống lượn xa",
      "explanation": "Sai. “Captopril - ống lượn xa” không phải lựa chọn phù hợp nhất cho câu này. Furosemide là lợi tiểu quai, tác động chủ yếu ở nhánh lên dày quai Henle."
    },
    {
      "key": "D",
      "text": "Sprionolacton – quai henle",
      "explanation": "Sai. “Sprionolacton – quai henle” không phải lựa chọn phù hợp nhất cho câu này. Furosemide là lợi tiểu quai, tác động chủ yếu ở nhánh lên dày quai Henle."
    }
  ]
},
{
  "id": 61,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 21,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nguyên nhân gây tăng huyết áp",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Bệnh thận",
      "explanation": "Sai. “Bệnh thận” không phải lựa chọn phù hợp nhất cho câu này. Phần lớn tăng huyết áp ở người lớn là tăng huyết áp nguyên phát, không xác định được một nguyên nhân đơn lẻ."
    },
    {
      "key": "B",
      "text": "Bệnh gan",
      "explanation": "Sai. “Bệnh gan” không phải lựa chọn phù hợp nhất cho câu này. Phần lớn tăng huyết áp ở người lớn là tăng huyết áp nguyên phát, không xác định được một nguyên nhân đơn lẻ."
    },
    {
      "key": "C",
      "text": "Không rõ nguyên nhân",
      "explanation": "Đúng. Phần lớn tăng huyết áp ở người lớn là tăng huyết áp nguyên phát, không xác định được một nguyên nhân đơn lẻ."
    },
    {
      "key": "D",
      "text": "Bệnh tim mạch",
      "explanation": "Sai. “Bệnh tim mạch” không phải lựa chọn phù hợp nhất cho câu này. Phần lớn tăng huyết áp ở người lớn là tăng huyết áp nguyên phát, không xác định được một nguyên nhân đơn lẻ."
    }
  ],
  "keyNote": "Bệnh thận có thể gây tăng huyết áp thứ phát; C được chọn vì tăng huyết áp nguyên phát/không rõ nguyên nhân chiếm đa số."
},
{
  "id": 62,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 22,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Để tốt cho tim mạch cần lựa chọn thực phẩm",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Chừa mỡ động vật",
      "explanation": "Sai. “Chừa mỡ động vật” không phải lựa chọn phù hợp nhất cho câu này. Rau xanh và hoa quả phù hợp chế độ ăn tốt cho tim mạch hơn thực phẩm chiên xào, quá mặn hoặc nhiều mỡ."
    },
    {
      "key": "B",
      "text": "Chiên xào nhiều",
      "explanation": "Sai. “Chiên xào nhiều” không phải lựa chọn phù hợp nhất cho câu này. Rau xanh và hoa quả phù hợp chế độ ăn tốt cho tim mạch hơn thực phẩm chiên xào, quá mặn hoặc nhiều mỡ."
    },
    {
      "key": "C",
      "text": "Rau xanh, hoa quả",
      "explanation": "Đúng. Rau xanh và hoa quả phù hợp chế độ ăn tốt cho tim mạch hơn thực phẩm chiên xào, quá mặn hoặc nhiều mỡ."
    },
    {
      "key": "D",
      "text": "Rất ngọt hoặc rất mặn",
      "explanation": "Sai. “Rất ngọt hoặc rất mặn” không phải lựa chọn phù hợp nhất cho câu này. Rau xanh và hoa quả phù hợp chế độ ăn tốt cho tim mạch hơn thực phẩm chiên xào, quá mặn hoặc nhiều mỡ."
    }
  ]
},
{
  "id": 63,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 23,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế không phải của thuốc kháng viêm",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "ức chế tổng hợp Protaglandin",
      "explanation": "Sai. “ức chế tổng hợp Protaglandin” không phải lựa chọn phù hợp nhất cho câu này. Tăng sinh hồng cầu không phải cơ chế kháng viêm điển hình."
    },
    {
      "key": "B",
      "text": "Giảm giải phóng các enzyme gây viêm",
      "explanation": "Sai. “Giảm giải phóng các enzyme gây viêm” không phải lựa chọn phù hợp nhất cho câu này. Tăng sinh hồng cầu không phải cơ chế kháng viêm điển hình."
    },
    {
      "key": "C",
      "text": "Tăng sinh hồng cầu",
      "explanation": "Đúng. Tăng sinh hồng cầu không phải cơ chế kháng viêm điển hình."
    },
    {
      "key": "D",
      "text": "Giảm sự di truyền và hoạt hóa của bạch cầu",
      "explanation": "Sai. “Giảm sự di truyền và hoạt hóa của bạch cầu” không phải lựa chọn phù hợp nhất cho câu này. Tăng sinh hồng cầu không phải cơ chế kháng viêm điển hình."
    }
  ]
},
{
  "id": 64,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 24,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Tác dụng phụ thường gặp của NSAIDs là:",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng huyết áp",
      "explanation": "Sai. “Tăng huyết áp” không phải lựa chọn phù hợp nhất cho câu này. NSAID ức chế prostaglandin bảo vệ niêm mạc nên có thể gây viêm/loét và xuất huyết dạ dày–tá tràng."
    },
    {
      "key": "B",
      "text": "Loét dạ dày – tá tràng",
      "explanation": "Đúng. NSAID ức chế prostaglandin bảo vệ niêm mạc nên có thể gây viêm/loét và xuất huyết dạ dày–tá tràng."
    },
    {
      "key": "C",
      "text": "Tăng cholesterol máu",
      "explanation": "Sai. “Tăng cholesterol máu” không phải lựa chọn phù hợp nhất cho câu này. NSAID ức chế prostaglandin bảo vệ niêm mạc nên có thể gây viêm/loét và xuất huyết dạ dày–tá tràng."
    },
    {
      "key": "D",
      "text": "Suy giảm trí nhớ",
      "explanation": "Sai. “Suy giảm trí nhớ” không phải lựa chọn phù hợp nhất cho câu này. NSAID ức chế prostaglandin bảo vệ niêm mạc nên có thể gây viêm/loét và xuất huyết dạ dày–tá tràng."
    }
  ]
},
{
  "id": 65,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 25,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Enzyme gây viêm",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "NSAIDs",
      "explanation": "Sai. “NSAIDs” không phải lựa chọn phù hợp nhất cho câu này. COX-2 thường được cảm ứng mạnh tại mô viêm và tạo prostaglandin liên quan đau, sốt, viêm."
    },
    {
      "key": "B",
      "text": "COX – 1",
      "explanation": "Sai. “COX – 1” không phải lựa chọn phù hợp nhất cho câu này. COX-2 thường được cảm ứng mạnh tại mô viêm và tạo prostaglandin liên quan đau, sốt, viêm."
    },
    {
      "key": "C",
      "text": "COX – 2",
      "explanation": "Đúng. COX-2 thường được cảm ứng mạnh tại mô viêm và tạo prostaglandin liên quan đau, sốt, viêm."
    },
    {
      "key": "D",
      "text": "LOX",
      "explanation": "Sai. “LOX” không phải lựa chọn phù hợp nhất cho câu này. COX-2 thường được cảm ứng mạnh tại mô viêm và tạo prostaglandin liên quan đau, sốt, viêm."
    }
  ]
},
{
  "id": 66,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 26,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Dạng muối diclofenac ƯU TIÊN hỗ trợ giảm đau bụng kinh",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Diclofenac natri",
      "explanation": "Sai. “Diclofenac natri” không phải lựa chọn phù hợp nhất cho câu này. Diclofenac kali thường hấp thu nhanh hơn một số dạng muối khác, phù hợp tình huống cần giảm đau khởi phát nhanh như đau bụng kinh."
    },
    {
      "key": "B",
      "text": "Diclofenac magie",
      "explanation": "Sai. “Diclofenac magie” không phải lựa chọn phù hợp nhất cho câu này. Diclofenac kali thường hấp thu nhanh hơn một số dạng muối khác, phù hợp tình huống cần giảm đau khởi phát nhanh như đau bụng kinh."
    },
    {
      "key": "C",
      "text": "Diclofenac kali",
      "explanation": "Đúng. Diclofenac kali thường hấp thu nhanh hơn một số dạng muối khác, phù hợp tình huống cần giảm đau khởi phát nhanh như đau bụng kinh."
    },
    {
      "key": "D",
      "text": "Diclofenac canxi",
      "explanation": "Sai. “Diclofenac canxi” không phải lựa chọn phù hợp nhất cho câu này. Diclofenac kali thường hấp thu nhanh hơn một số dạng muối khác, phù hợp tình huống cần giảm đau khởi phát nhanh như đau bụng kinh."
    }
  ]
},
{
  "id": 67,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 27,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Biểu hiện tại chỗ của viêm gồm những triệu chứng",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Sốt, rét run, đau mỏi cơ",
      "explanation": "Sai. “Sốt, rét run, đau mỏi cơ” không phải lựa chọn phù hợp nhất cho câu này. Dấu hiệu tại chỗ kinh điển của viêm là sưng, nóng, đỏ và đau."
    },
    {
      "key": "B",
      "text": "Mệt mỏi, chán ăn, khó ngủ",
      "explanation": "Sai. “Mệt mỏi, chán ăn, khó ngủ” không phải lựa chọn phù hợp nhất cho câu này. Dấu hiệu tại chỗ kinh điển của viêm là sưng, nóng, đỏ và đau."
    },
    {
      "key": "C",
      "text": "Ho, khó thở, tức ngực",
      "explanation": "Sai. “Ho, khó thở, tức ngực” không phải lựa chọn phù hợp nhất cho câu này. Dấu hiệu tại chỗ kinh điển của viêm là sưng, nóng, đỏ và đau."
    },
    {
      "key": "D",
      "text": "Sưng, nóng, đỏ, đau",
      "explanation": "Đúng. Dấu hiệu tại chỗ kinh điển của viêm là sưng, nóng, đỏ và đau."
    }
  ]
},
{
  "id": 68,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 28,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc kháng viêm NASAID có T1/2 dài",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Diclofenac",
      "explanation": "Sai. “Diclofenac” không phải lựa chọn phù hợp nhất cho câu này. Piroxicam có thời gian bán thải dài, khoảng vài chục giờ, dài hơn diclofenac hay ibuprofen."
    },
    {
      "key": "B",
      "text": "Aspirin 81 mg",
      "explanation": "Sai. “Aspirin 81 mg” không phải lựa chọn phù hợp nhất cho câu này. Piroxicam có thời gian bán thải dài, khoảng vài chục giờ, dài hơn diclofenac hay ibuprofen."
    },
    {
      "key": "C",
      "text": "Piroxicam",
      "explanation": "Đúng. Piroxicam có thời gian bán thải dài, khoảng vài chục giờ, dài hơn diclofenac hay ibuprofen."
    },
    {
      "key": "D",
      "text": "Ibuprofen",
      "explanation": "Sai. “Ibuprofen” không phải lựa chọn phù hợp nhất cho câu này. Piroxicam có thời gian bán thải dài, khoảng vài chục giờ, dài hơn diclofenac hay ibuprofen."
    }
  ]
},
{
  "id": 69,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 29,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Enzyme COX – 2 thường xuất hiện nhiều nhất ở đâu",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Tế bào bình thường ở thành mạch máu",
      "explanation": "Sai. “Tế bào bình thường ở thành mạch máu” không phải lựa chọn phù hợp nhất cho câu này. COX-2 tăng biểu hiện rõ ở mô/tổ chức khi có kích thích viêm hoặc tổn thương."
    },
    {
      "key": "B",
      "text": "Thận",
      "explanation": "Sai. “Thận” không phải lựa chọn phù hợp nhất cho câu này. COX-2 tăng biểu hiện rõ ở mô/tổ chức khi có kích thích viêm hoặc tổn thương."
    },
    {
      "key": "C",
      "text": "Mọi cơ quan",
      "explanation": "Sai. “Mọi cơ quan” không phải lựa chọn phù hợp nhất cho câu này. COX-2 tăng biểu hiện rõ ở mô/tổ chức khi có kích thích viêm hoặc tổn thương."
    },
    {
      "key": "D",
      "text": "Mô, tổ chức khi bị tổn thương",
      "explanation": "Đúng. COX-2 tăng biểu hiện rõ ở mô/tổ chức khi có kích thích viêm hoặc tổn thương."
    }
  ]
},
{
  "id": 70,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 30,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Khi bị đau răng , để giảm đau nên ưu tiên sử dụng",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Vitamin B12",
      "explanation": "Sai. “Vitamin B12” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol hoặc ibuprofen là lựa chọn giảm đau thông dụng cho đau răng nếu không có chống chỉ định."
    },
    {
      "key": "B",
      "text": "Telmisartan",
      "explanation": "Sai. “Telmisartan” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol hoặc ibuprofen là lựa chọn giảm đau thông dụng cho đau răng nếu không có chống chỉ định."
    },
    {
      "key": "C",
      "text": "Paracetamol hoặc Ibuprofen",
      "explanation": "Đúng. Paracetamol hoặc ibuprofen là lựa chọn giảm đau thông dụng cho đau răng nếu không có chống chỉ định."
    },
    {
      "key": "D",
      "text": "Levocetirizin",
      "explanation": "Sai. “Levocetirizin” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol hoặc ibuprofen là lựa chọn giảm đau thông dụng cho đau răng nếu không có chống chỉ định."
    }
  ]
},
{
  "id": 71,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 31,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Sự dụng thuốc NSAID cần tuân thủ nguyên tắc",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Liều thấp và thời gian ngắn nhất",
      "explanation": "Đúng. Nguyên tắc an toàn của NSAID là dùng liều thấp nhất có hiệu quả trong thời gian ngắn nhất cần thiết."
    },
    {
      "key": "B",
      "text": "Liều cao, thời gian dài",
      "explanation": "Sai. “Liều cao, thời gian dài” không phải lựa chọn phù hợp nhất cho câu này. Nguyên tắc an toàn của NSAID là dùng liều thấp nhất có hiệu quả trong thời gian ngắn nhất cần thiết."
    },
    {
      "key": "C",
      "text": "Uống thuốc lúc đói",
      "explanation": "Sai. “Uống thuốc lúc đói” không phải lựa chọn phù hợp nhất cho câu này. Nguyên tắc an toàn của NSAID là dùng liều thấp nhất có hiệu quả trong thời gian ngắn nhất cần thiết."
    },
    {
      "key": "D",
      "text": "Phối hợp với thuốc chống đông máu",
      "explanation": "Sai. “Phối hợp với thuốc chống đông máu” không phải lựa chọn phù hợp nhất cho câu này. Nguyên tắc an toàn của NSAID là dùng liều thấp nhất có hiệu quả trong thời gian ngắn nhất cần thiết."
    }
  ]
},
{
  "id": 72,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 32,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nhóm thuốc có thể gây loét dạ dày",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Paracetamol",
      "explanation": "Sai. “Paracetamol” không phải lựa chọn phù hợp nhất cho câu này. NSAID làm giảm prostaglandin bảo vệ niêm mạc và là nhóm có nguy cơ gây loét dạ dày–tá tràng."
    },
    {
      "key": "B",
      "text": "NSAIDs",
      "explanation": "Đúng. NSAID làm giảm prostaglandin bảo vệ niêm mạc và là nhóm có nguy cơ gây loét dạ dày–tá tràng."
    },
    {
      "key": "C",
      "text": "Augmentin",
      "explanation": "Sai. “Augmentin” không phải lựa chọn phù hợp nhất cho câu này. NSAID làm giảm prostaglandin bảo vệ niêm mạc và là nhóm có nguy cơ gây loét dạ dày–tá tràng."
    },
    {
      "key": "D",
      "text": "Captopril",
      "explanation": "Sai. “Captopril” không phải lựa chọn phù hợp nhất cho câu này. NSAID làm giảm prostaglandin bảo vệ niêm mạc và là nhóm có nguy cơ gây loét dạ dày–tá tràng."
    }
  ]
},
{
  "id": 73,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 33,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Paracetamol được ưa chuộng hơn so với một số thuốc giảm đau, hạ sốt khác đo",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Có tác dụng kháng viêm mạnh",
      "explanation": "Sai. “Có tác dụng kháng viêm mạnh” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol được dùng rộng rãi vì ở liều điều trị thường ít tác dụng phụ trên dạ dày và tiểu cầu hơn nhiều NSAID."
    },
    {
      "key": "B",
      "text": "Tác dụng nhanh hơn",
      "explanation": "Sai. “Tác dụng nhanh hơn” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol được dùng rộng rãi vì ở liều điều trị thường ít tác dụng phụ trên dạ dày và tiểu cầu hơn nhiều NSAID."
    },
    {
      "key": "C",
      "text": "Ít tác dụng phụ và an toàn hơn",
      "explanation": "Đúng. Paracetamol được dùng rộng rãi vì ở liều điều trị thường ít tác dụng phụ trên dạ dày và tiểu cầu hơn nhiều NSAID."
    },
    {
      "key": "D",
      "text": "Giá thành rẻ hơn",
      "explanation": "Sai. “Giá thành rẻ hơn” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol được dùng rộng rãi vì ở liều điều trị thường ít tác dụng phụ trên dạ dày và tiểu cầu hơn nhiều NSAID."
    }
  ]
},
{
  "id": 74,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 34,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc điều trị hạ lipid máu",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Losartan",
      "explanation": "Sai. “Losartan” không phải lựa chọn phù hợp nhất cho câu này. Rosuvastatin là statin dùng điều trị rối loạn lipid máu."
    },
    {
      "key": "B",
      "text": "Rosuvastatin",
      "explanation": "Đúng. Rosuvastatin là statin dùng điều trị rối loạn lipid máu."
    },
    {
      "key": "C",
      "text": "Natri nitrit",
      "explanation": "Sai. “Natri nitrit” không phải lựa chọn phù hợp nhất cho câu này. Rosuvastatin là statin dùng điều trị rối loạn lipid máu."
    },
    {
      "key": "D",
      "text": "Captopril",
      "explanation": "Sai. “Captopril” không phải lựa chọn phù hợp nhất cho câu này. Rosuvastatin là statin dùng điều trị rối loạn lipid máu."
    }
  ]
},
{
  "id": 75,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 35,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế của statin",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng tổng hợp Cholesterol",
      "explanation": "Sai. “Tăng tổng hợp Cholesterol” không phải lựa chọn phù hợp nhất cho câu này. Statin ức chế HMG-CoA reductase, enzym giới hạn tốc độ trong tổng hợp cholesterol ở gan."
    },
    {
      "key": "B",
      "text": "Ức chế HMG-CoA reductase",
      "explanation": "Đúng. Statin ức chế HMG-CoA reductase, enzym giới hạn tốc độ trong tổng hợp cholesterol ở gan."
    },
    {
      "key": "C",
      "text": "Làm giảm hấp thu cholesterol",
      "explanation": "Sai. “Làm giảm hấp thu cholesterol” không phải lựa chọn phù hợp nhất cho câu này. Statin ức chế HMG-CoA reductase, enzym giới hạn tốc độ trong tổng hợp cholesterol ở gan."
    },
    {
      "key": "D",
      "text": "Chuyển hóa cholesterol",
      "explanation": "Sai. “Chuyển hóa cholesterol” không phải lựa chọn phù hợp nhất cho câu này. Statin ức chế HMG-CoA reductase, enzym giới hạn tốc độ trong tổng hợp cholesterol ở gan."
    }
  ]
},
{
  "id": 76,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 36,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Triệu chứng không thường gặp ở bệnh nhân suy tim",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Mệt",
      "explanation": "Sai. “Mệt” không phải lựa chọn phù hợp nhất cho câu này. Mệt, khó thở và phù/ứ dịch thường gặp ở suy tim; sưng viêm khớp không phải triệu chứng điển hình."
    },
    {
      "key": "B",
      "text": "Khó thở",
      "explanation": "Sai. “Khó thở” không phải lựa chọn phù hợp nhất cho câu này. Mệt, khó thở và phù/ứ dịch thường gặp ở suy tim; sưng viêm khớp không phải triệu chứng điển hình."
    },
    {
      "key": "C",
      "text": "ứ dịch, phù",
      "explanation": "Sai. “ứ dịch, phù” không phải lựa chọn phù hợp nhất cho câu này. Mệt, khó thở và phù/ứ dịch thường gặp ở suy tim; sưng viêm khớp không phải triệu chứng điển hình."
    },
    {
      "key": "D",
      "text": "sưng viêm các khớp",
      "explanation": "Đúng. Mệt, khó thở và phù/ứ dịch thường gặp ở suy tim; sưng viêm khớp không phải triệu chứng điển hình."
    }
  ]
},
{
  "id": 77,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 37,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Tăng huyết áp lại có thể gây suy tim do làm",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "giảm lưu lượng máu đến tim",
      "explanation": "Sai. “giảm lưu lượng máu đến tim” không phải lựa chọn phù hợp nhất cho câu này. Tăng huyết áp làm tăng hậu tải, khiến tim phải làm việc nhiều hơn lâu dài và có thể tiến triển thành suy tim."
    },
    {
      "key": "B",
      "text": "Việc quá sức để bơm máu đi",
      "explanation": "Đúng. Tăng huyết áp làm tăng hậu tải, khiến tim phải làm việc nhiều hơn lâu dài và có thể tiến triển thành suy tim."
    },
    {
      "key": "C",
      "text": "Thay đổi chức năng của van tim",
      "explanation": "Sai. “Thay đổi chức năng của van tim” không phải lựa chọn phù hợp nhất cho câu này. Tăng huyết áp làm tăng hậu tải, khiến tim phải làm việc nhiều hơn lâu dài và có thể tiến triển thành suy tim."
    },
    {
      "key": "D",
      "text": "Tim bị thiếu máu",
      "explanation": "Sai. “Tim bị thiếu máu” không phải lựa chọn phù hợp nhất cho câu này. Tăng huyết áp làm tăng hậu tải, khiến tim phải làm việc nhiều hơn lâu dài và có thể tiến triển thành suy tim."
    }
  ]
},
{
  "id": 78,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 38,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Định nghĩa về tình trạng rối loạn lipid máu",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Chỉ số cholesterol HDL tăng cao",
      "explanation": "Sai. “Chỉ số cholesterol HDL tăng cao” không phải lựa chọn phù hợp nhất cho câu này. Rối loạn lipid máu là sự bất thường/mất cân bằng của các thành phần lipid máu như LDL-C, HDL-C và triglycerid."
    },
    {
      "key": "B",
      "text": "Mất cân bằng các thành phần lipid máu",
      "explanation": "Đúng. Rối loạn lipid máu là sự bất thường/mất cân bằng của các thành phần lipid máu như LDL-C, HDL-C và triglycerid."
    },
    {
      "key": "C",
      "text": "Tình trạng đường huyết trong máu tăng",
      "explanation": "Sai. “Tình trạng đường huyết trong máu tăng” không phải lựa chọn phù hợp nhất cho câu này. Rối loạn lipid máu là sự bất thường/mất cân bằng của các thành phần lipid máu như LDL-C, HDL-C và triglycerid."
    },
    {
      "key": "D",
      "text": "Các cholesterol trong máu tăng cao",
      "explanation": "Sai. “Các cholesterol trong máu tăng cao” không phải lựa chọn phù hợp nhất cho câu này. Rối loạn lipid máu là sự bất thường/mất cân bằng của các thành phần lipid máu như LDL-C, HDL-C và triglycerid."
    }
  ]
},
{
  "id": 79,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 39,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế tác dụng của các Nittrat hữu cơ",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Ức chế enzyme phosphodiesterase",
      "explanation": "Sai. “Ức chế enzyme phosphodiesterase” không phải lựa chọn phù hợp nhất cho câu này. Nitrat hữu cơ được chuyển hóa giải phóng NO, hoạt hóa guanylyl cyclase và làm giãn cơ trơn mạch."
    },
    {
      "key": "B",
      "text": "Gây giãn trực tiếp tĩnh mạch",
      "explanation": "Sai. “Gây giãn trực tiếp tĩnh mạch” không phải lựa chọn phù hợp nhất cho câu này. Nitrat hữu cơ được chuyển hóa giải phóng NO, hoạt hóa guanylyl cyclase và làm giãn cơ trơn mạch."
    },
    {
      "key": "C",
      "text": "Vào cơ thể giải phóng NO",
      "explanation": "Đúng. Nitrat hữu cơ được chuyển hóa giải phóng NO, hoạt hóa guanylyl cyclase và làm giãn cơ trơn mạch."
    },
    {
      "key": "D",
      "text": "Thuốc ức chế dòng Ca2+ /cơ trơn",
      "explanation": "Sai. “Thuốc ức chế dòng Ca2+ /cơ trơn” không phải lựa chọn phù hợp nhất cho câu này. Nitrat hữu cơ được chuyển hóa giải phóng NO, hoạt hóa guanylyl cyclase và làm giãn cơ trơn mạch."
    }
  ]
},
{
  "id": 80,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 40,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Trong điều trị suy tim nhóm thuốc được lựa chọn đầu tay khi bệnh nhân có triệu chứng phù, ứ dịch",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Lợi tiểu thiazid",
      "explanation": "Sai. “Lợi tiểu thiazid” không phải lựa chọn phù hợp nhất cho câu này. Khi suy tim có phù, ứ dịch, lợi tiểu quai thường được dùng để giảm sung huyết nhanh và mạnh."
    },
    {
      "key": "B",
      "text": "Lợi tiểu quai",
      "explanation": "Đúng. Khi suy tim có phù, ứ dịch, lợi tiểu quai thường được dùng để giảm sung huyết nhanh và mạnh."
    },
    {
      "key": "C",
      "text": "Lợi tiểu tiết kiệm kali",
      "explanation": "Sai. “Lợi tiểu tiết kiệm kali” không phải lựa chọn phù hợp nhất cho câu này. Khi suy tim có phù, ứ dịch, lợi tiểu quai thường được dùng để giảm sung huyết nhanh và mạnh."
    },
    {
      "key": "D",
      "text": "Lợi tiểu thẩm thấu",
      "explanation": "Sai. “Lợi tiểu thẩm thấu” không phải lựa chọn phù hợp nhất cho câu này. Khi suy tim có phù, ứ dịch, lợi tiểu quai thường được dùng để giảm sung huyết nhanh và mạnh."
    }
  ]
},
{
  "id": 81,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 41,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Triệu chứng không thường gặp ở bệnh nhân suy tim",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Mệt",
      "explanation": "Sai. “Mệt” không phải lựa chọn phù hợp nhất cho câu này. Sưng viêm khớp không phải biểu hiện điển hình của suy tim, khác với mệt, khó thở và phù."
    },
    {
      "key": "B",
      "text": "Khó thở",
      "explanation": "Sai. “Khó thở” không phải lựa chọn phù hợp nhất cho câu này. Sưng viêm khớp không phải biểu hiện điển hình của suy tim, khác với mệt, khó thở và phù."
    },
    {
      "key": "C",
      "text": "ứ dịch, phù",
      "explanation": "Sai. “ứ dịch, phù” không phải lựa chọn phù hợp nhất cho câu này. Sưng viêm khớp không phải biểu hiện điển hình của suy tim, khác với mệt, khó thở và phù."
    },
    {
      "key": "D",
      "text": "sưng viêm các khớp",
      "explanation": "Đúng. Sưng viêm khớp không phải biểu hiện điển hình của suy tim, khác với mệt, khó thở và phù."
    }
  ]
},
{
  "id": 82,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 42,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nên sử dụng nhóm thuốc stasin vào thời gian",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "sáng sớm",
      "explanation": "Sai. “sáng sớm” không phải lựa chọn phù hợp nhất cho câu này. Với statin thời gian bán thải ngắn, dùng buổi tối phù hợp vì tổng hợp cholesterol ở gan tăng về đêm; statin tác dụng dài linh hoạt hơn."
    },
    {
      "key": "B",
      "text": "buổi trưa",
      "explanation": "Sai. “buổi trưa” không phải lựa chọn phù hợp nhất cho câu này. Với statin thời gian bán thải ngắn, dùng buổi tối phù hợp vì tổng hợp cholesterol ở gan tăng về đêm; statin tác dụng dài linh hoạt hơn."
    },
    {
      "key": "C",
      "text": "Tầm 5g chiều",
      "explanation": "Sai. “Tầm 5g chiều” không phải lựa chọn phù hợp nhất cho câu này. Với statin thời gian bán thải ngắn, dùng buổi tối phù hợp vì tổng hợp cholesterol ở gan tăng về đêm; statin tác dụng dài linh hoạt hơn."
    },
    {
      "key": "D",
      "text": "Buổi tối",
      "explanation": "Đúng. Với statin thời gian bán thải ngắn, dùng buổi tối phù hợp vì tổng hợp cholesterol ở gan tăng về đêm; statin tác dụng dài linh hoạt hơn."
    }
  ],
  "keyNote": "Không phải mọi statin đều bắt buộc uống buổi tối. Quy tắc này quan trọng hơn với statin thời gian bán thải ngắn."
},
{
  "id": 83,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 43,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thực phẩm có nhiều histidine",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Rau xanh",
      "explanation": "Sai. “Rau xanh” không phải lựa chọn phù hợp nhất cho câu này. Histidine có nhiều trong thực phẩm giàu protein; thịt bò là một nguồn giàu histidine trong các lựa chọn."
    },
    {
      "key": "B",
      "text": "Thịt bò",
      "explanation": "Đúng. Histidine có nhiều trong thực phẩm giàu protein; thịt bò là một nguồn giàu histidine trong các lựa chọn."
    },
    {
      "key": "C",
      "text": "Trái cây",
      "explanation": "Sai. “Trái cây” không phải lựa chọn phù hợp nhất cho câu này. Histidine có nhiều trong thực phẩm giàu protein; thịt bò là một nguồn giàu histidine trong các lựa chọn."
    },
    {
      "key": "D",
      "text": "Hải sản",
      "explanation": "Sai. “Hải sản” không phải lựa chọn phù hợp nhất cho câu này. Histidine có nhiều trong thực phẩm giàu protein; thịt bò là một nguồn giàu histidine trong các lựa chọn."
    }
  ],
  "keyNote": "Cả thịt và hải sản đều có histidine; B được chọn vì thịt bò là nguồn giàu histidine rõ trong các lựa chọn. Câu hỏi không hoàn toàn đơn nhất."
},
{
  "id": 84,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 44,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Trong phác đồ sốc phản vệ, thuốc được sử dụng cùng với thuốc kháng histamin H1",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Aspirin",
      "explanation": "Sai. “Aspirin” không phải lựa chọn phù hợp nhất cho câu này. Adrenaline là thuốc hàng đầu trong sốc phản vệ; kháng histamin H1 chỉ đóng vai trò hỗ trợ triệu chứng."
    },
    {
      "key": "B",
      "text": "Adrenaline",
      "explanation": "Đúng. Adrenaline là thuốc hàng đầu trong sốc phản vệ; kháng histamin H1 chỉ đóng vai trò hỗ trợ triệu chứng."
    },
    {
      "key": "C",
      "text": "Paracetamol",
      "explanation": "Sai. “Paracetamol” không phải lựa chọn phù hợp nhất cho câu này. Adrenaline là thuốc hàng đầu trong sốc phản vệ; kháng histamin H1 chỉ đóng vai trò hỗ trợ triệu chứng."
    },
    {
      "key": "D",
      "text": "Insulin",
      "explanation": "Sai. “Insulin” không phải lựa chọn phù hợp nhất cho câu này. Adrenaline là thuốc hàng đầu trong sốc phản vệ; kháng histamin H1 chỉ đóng vai trò hỗ trợ triệu chứng."
    }
  ]
},
{
  "id": 85,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 45,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Histamin được tổng hợp từ",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Lysine",
      "explanation": "Sai. “Lysine” không phải lựa chọn phù hợp nhất cho câu này. Histamine được tổng hợp từ acid amin histidine nhờ enzym histidine decarboxylase."
    },
    {
      "key": "B",
      "text": "Alanine",
      "explanation": "Sai. “Alanine” không phải lựa chọn phù hợp nhất cho câu này. Histamine được tổng hợp từ acid amin histidine nhờ enzym histidine decarboxylase."
    },
    {
      "key": "C",
      "text": "Arginine",
      "explanation": "Sai. “Arginine” không phải lựa chọn phù hợp nhất cho câu này. Histamine được tổng hợp từ acid amin histidine nhờ enzym histidine decarboxylase."
    },
    {
      "key": "D",
      "text": "Histidine",
      "explanation": "Đúng. Histamine được tổng hợp từ acid amin histidine nhờ enzym histidine decarboxylase."
    }
  ]
},
{
  "id": 86,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 46,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc kháng histamin H1 có cơ chế",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Giảm viêm",
      "explanation": "Sai. “Giảm viêm” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kháng histamin H1 đối kháng/inverse agonist tại thụ thể H1, làm giảm biểu hiện do histamine."
    },
    {
      "key": "B",
      "text": "Tăng cường hệ miễn dịch",
      "explanation": "Sai. “Tăng cường hệ miễn dịch” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kháng histamin H1 đối kháng/inverse agonist tại thụ thể H1, làm giảm biểu hiện do histamine."
    },
    {
      "key": "C",
      "text": "ức chế sản xuất histamin",
      "explanation": "Sai. “ức chế sản xuất histamin” không phải lựa chọn phù hợp nhất cho câu này. Thuốc kháng histamin H1 đối kháng/inverse agonist tại thụ thể H1, làm giảm biểu hiện do histamine."
    },
    {
      "key": "D",
      "text": "đối kháng thụ thể histamin H1",
      "explanation": "Đúng. Thuốc kháng histamin H1 đối kháng/inverse agonist tại thụ thể H1, làm giảm biểu hiện do histamine."
    }
  ]
},
{
  "id": 87,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 47,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc kháng histamin H1 có tác dụng",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Ngăn ngừa dị ứng",
      "explanation": "Sai. “Ngăn ngừa dị ứng” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 chủ yếu điều trị triệu chứng dị ứng như ngứa, hắt hơi, chảy mũi; không loại bỏ nguyên nhân dị ứng."
    },
    {
      "key": "B",
      "text": "Chữa trị hoàn toàn dị ứng",
      "explanation": "Sai. “Chữa trị hoàn toàn dị ứng” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 chủ yếu điều trị triệu chứng dị ứng như ngứa, hắt hơi, chảy mũi; không loại bỏ nguyên nhân dị ứng."
    },
    {
      "key": "C",
      "text": "Tăng cường hệ miễn dịch",
      "explanation": "Sai. “Tăng cường hệ miễn dịch” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 chủ yếu điều trị triệu chứng dị ứng như ngứa, hắt hơi, chảy mũi; không loại bỏ nguyên nhân dị ứng."
    },
    {
      "key": "D",
      "text": "Điều trị triệu chứng của dị ứng",
      "explanation": "Đúng. Kháng histamin H1 chủ yếu điều trị triệu chứng dị ứng như ngứa, hắt hơi, chảy mũi; không loại bỏ nguyên nhân dị ứng."
    }
  ]
},
{
  "id": 88,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 48,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Các thụ thể histamin có mặt ở",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Trên toàn cơ thể",
      "explanation": "Đúng. Các thụ thể histamine phân bố ở nhiều mô/cơ quan trên toàn cơ thể, không chỉ ở một cơ quan riêng lẻ."
    },
    {
      "key": "B",
      "text": "Tim",
      "explanation": "Sai. “Tim” không phải lựa chọn phù hợp nhất cho câu này. Các thụ thể histamine phân bố ở nhiều mô/cơ quan trên toàn cơ thể, không chỉ ở một cơ quan riêng lẻ."
    },
    {
      "key": "C",
      "text": "Gan",
      "explanation": "Sai. “Gan” không phải lựa chọn phù hợp nhất cho câu này. Các thụ thể histamine phân bố ở nhiều mô/cơ quan trên toàn cơ thể, không chỉ ở một cơ quan riêng lẻ."
    },
    {
      "key": "D",
      "text": "Dạ dày",
      "explanation": "Sai. “Dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Các thụ thể histamine phân bố ở nhiều mô/cơ quan trên toàn cơ thể, không chỉ ở một cơ quan riêng lẻ."
    }
  ]
},
{
  "id": 89,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 49,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Phản ứng dị ứng xảy ra khi cơ thể",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tiếp xúc lần đầu với kháng nguyên",
      "explanation": "Sai. “Tiếp xúc lần đầu với kháng nguyên” không phải lựa chọn phù hợp nhất cho câu này. Phản ứng dị ứng qua miễn dịch thường xuất hiện sau giai đoạn mẫn cảm, tức khi tái tiếp xúc kháng nguyên."
    },
    {
      "key": "B",
      "text": "Bị sốt cao",
      "explanation": "Sai. “Bị sốt cao” không phải lựa chọn phù hợp nhất cho câu này. Phản ứng dị ứng qua miễn dịch thường xuất hiện sau giai đoạn mẫn cảm, tức khi tái tiếp xúc kháng nguyên."
    },
    {
      "key": "C",
      "text": "Tiếp xúc từ lần thứ hai về sau với kháng nguyên",
      "explanation": "Đúng. Phản ứng dị ứng qua miễn dịch thường xuất hiện sau giai đoạn mẫn cảm, tức khi tái tiếp xúc kháng nguyên."
    },
    {
      "key": "D",
      "text": "Tiếp xúc với vi khuẩn",
      "explanation": "Sai. “Tiếp xúc với vi khuẩn” không phải lựa chọn phù hợp nhất cho câu này. Phản ứng dị ứng qua miễn dịch thường xuất hiện sau giai đoạn mẫn cảm, tức khi tái tiếp xúc kháng nguyên."
    }
  ]
},
{
  "id": 90,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 50,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Tác dụng KHÔNG MONG MUỐN thường gặp ở thuốc kháng histamin cổ điển",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Buồn ngủ",
      "explanation": "Đúng. Kháng histamin H1 thế hệ 1 qua hàng rào máu–não nên buồn ngủ/an thần là tác dụng không mong muốn rất thường gặp."
    },
    {
      "key": "B",
      "text": "Tăng cân",
      "explanation": "Sai. “Tăng cân” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 thế hệ 1 qua hàng rào máu–não nên buồn ngủ/an thần là tác dụng không mong muốn rất thường gặp."
    },
    {
      "key": "C",
      "text": "Tăng huyết áp",
      "explanation": "Sai. “Tăng huyết áp” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 thế hệ 1 qua hàng rào máu–não nên buồn ngủ/an thần là tác dụng không mong muốn rất thường gặp."
    },
    {
      "key": "D",
      "text": "Táo báo",
      "explanation": "Sai. “Táo báo” không phải lựa chọn phù hợp nhất cho câu này. Kháng histamin H1 thế hệ 1 qua hàng rào máu–não nên buồn ngủ/an thần là tác dụng không mong muốn rất thường gặp."
    }
  ]
},
{
  "id": 91,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 51,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc kháng histamin H1 được chỉ định trong trường hợp",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Viêm loét dạ dày",
      "explanation": "Sai. “Viêm loét dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Chỉ định điển hình của kháng histamin H1 là điều trị các triệu chứng dị ứng."
    },
    {
      "key": "B",
      "text": "Hạ huyết áp",
      "explanation": "Sai. “Hạ huyết áp” không phải lựa chọn phù hợp nhất cho câu này. Chỉ định điển hình của kháng histamin H1 là điều trị các triệu chứng dị ứng."
    },
    {
      "key": "C",
      "text": "Tiểu đường",
      "explanation": "Sai. “Tiểu đường” không phải lựa chọn phù hợp nhất cho câu này. Chỉ định điển hình của kháng histamin H1 là điều trị các triệu chứng dị ứng."
    },
    {
      "key": "D",
      "text": "Dị ứng",
      "explanation": "Đúng. Chỉ định điển hình của kháng histamin H1 là điều trị các triệu chứng dị ứng."
    }
  ]
},
{
  "id": 92,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 52,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc nào sau đây thuộc nhóm giảm nhu động ruột dùng trong chữa tiêu chảy",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Than hoạt tính",
      "explanation": "Sai. “Than hoạt tính” không phải lựa chọn phù hợp nhất cho câu này. Loperamide làm giảm nhu động ruột và được dùng điều trị triệu chứng tiêu chảy trong các trường hợp phù hợp."
    },
    {
      "key": "B",
      "text": "Loperamid",
      "explanation": "Đúng. Loperamide làm giảm nhu động ruột và được dùng điều trị triệu chứng tiêu chảy trong các trường hợp phù hợp."
    },
    {
      "key": "C",
      "text": "Diosmectite",
      "explanation": "Sai. “Diosmectite” không phải lựa chọn phù hợp nhất cho câu này. Loperamide làm giảm nhu động ruột và được dùng điều trị triệu chứng tiêu chảy trong các trường hợp phù hợp."
    },
    {
      "key": "D",
      "text": "Oresol",
      "explanation": "Sai. “Oresol” không phải lựa chọn phù hợp nhất cho câu này. Loperamide làm giảm nhu động ruột và được dùng điều trị triệu chứng tiêu chảy trong các trường hợp phù hợp."
    }
  ]
},
{
  "id": 93,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 53,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Theo nguyên tắc sử dụng, thuốc nhuận tẩy KHÔNG nên dùng quá bao lâu?",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "1 ngày",
      "explanation": "Sai. “1 ngày” không phải lựa chọn phù hợp nhất cho câu này. Thuốc nhuận tẩy không nên tự dùng kéo dài; câu hỏi hướng tới giới hạn khoảng 1 tuần nếu không có chỉ định y tế."
    },
    {
      "key": "B",
      "text": "3 ngày",
      "explanation": "Sai. “3 ngày” không phải lựa chọn phù hợp nhất cho câu này. Thuốc nhuận tẩy không nên tự dùng kéo dài; câu hỏi hướng tới giới hạn khoảng 1 tuần nếu không có chỉ định y tế."
    },
    {
      "key": "C",
      "text": "1 tuần",
      "explanation": "Đúng. Thuốc nhuận tẩy không nên tự dùng kéo dài; câu hỏi hướng tới giới hạn khoảng 1 tuần nếu không có chỉ định y tế."
    },
    {
      "key": "D",
      "text": "1 tháng",
      "explanation": "Sai. “1 tháng” không phải lựa chọn phù hợp nhất cho câu này. Thuốc nhuận tẩy không nên tự dùng kéo dài; câu hỏi hướng tới giới hạn khoảng 1 tuần nếu không có chỉ định y tế."
    }
  ],
  "keyNote": "Thời gian tự dùng nhuận tẩy tùy hoạt chất và hướng dẫn; nếu táo bón kéo dài cần đánh giá nguyên nhân thay vì tự dùng kéo dài."
},
{
  "id": 94,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 54,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nhóm thuốc nào sau đây có tác dụng co thắt cơ trơn, giúp giảm đau trong co thắt đương tiêu hóa hoặc đường mật",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Antacid",
      "explanation": "Sai. “Antacid” không phải lựa chọn phù hợp nhất cho câu này. Drotaverine/alverine là thuốc chống co thắt cơ trơn, giúp giảm đau do co thắt đường tiêu hóa hoặc đường mật."
    },
    {
      "key": "B",
      "text": "Proton pump inhibitors (PPIs)",
      "explanation": "Sai. “Proton pump inhibitors (PPIs)” không phải lựa chọn phù hợp nhất cho câu này. Drotaverine/alverine là thuốc chống co thắt cơ trơn, giúp giảm đau do co thắt đường tiêu hóa hoặc đường mật."
    },
    {
      "key": "C",
      "text": "Drotaverin ( hoặc alverin )",
      "explanation": "Đúng. Drotaverine/alverine là thuốc chống co thắt cơ trơn, giúp giảm đau do co thắt đường tiêu hóa hoặc đường mật."
    },
    {
      "key": "D",
      "text": "Loperamid",
      "explanation": "Sai. “Loperamid” không phải lựa chọn phù hợp nhất cho câu này. Drotaverine/alverine là thuốc chống co thắt cơ trơn, giúp giảm đau do co thắt đường tiêu hóa hoặc đường mật."
    }
  ]
},
{
  "id": 95,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 55,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Khi sử dụng thuốc kháng acid chứa nhôm hydroxyd ( AL(OH)3) kéo dài, tác dụng phụ thường gặp nhất ở bệnh nhân là gì?",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Táo bón",
      "explanation": "Đúng. Muối nhôm như Al(OH)3 thường gây táo bón; muối magnesi lại dễ gây tiêu chảy hơn."
    },
    {
      "key": "B",
      "text": "Tiêu chảy",
      "explanation": "Sai. “Tiêu chảy” không phải lựa chọn phù hợp nhất cho câu này. Muối nhôm như Al(OH)3 thường gây táo bón; muối magnesi lại dễ gây tiêu chảy hơn."
    },
    {
      "key": "C",
      "text": "Buồn nôn",
      "explanation": "Sai. “Buồn nôn” không phải lựa chọn phù hợp nhất cho câu này. Muối nhôm như Al(OH)3 thường gây táo bón; muối magnesi lại dễ gây tiêu chảy hơn."
    },
    {
      "key": "D",
      "text": "Buồn ngủ",
      "explanation": "Sai. “Buồn ngủ” không phải lựa chọn phù hợp nhất cho câu này. Muối nhôm như Al(OH)3 thường gây táo bón; muối magnesi lại dễ gây tiêu chảy hơn."
    }
  ]
},
{
  "id": 96,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 56,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc nào sau đây là thuốc nhuận tẩy cơ thể thẩm thấu được chỉ định trong điều trị táo bón và bệnh lý não do gan ( giảm NH3)",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Bisacodyl",
      "explanation": "Sai. “Bisacodyl” không phải lựa chọn phù hợp nhất cho câu này. Lactulose là nhuận tràng thẩm thấu và còn làm giảm hấp thu NH3 trong bệnh não gan."
    },
    {
      "key": "B",
      "text": "Lactulose",
      "explanation": "Đúng. Lactulose là nhuận tràng thẩm thấu và còn làm giảm hấp thu NH3 trong bệnh não gan."
    },
    {
      "key": "C",
      "text": "Senna",
      "explanation": "Sai. “Senna” không phải lựa chọn phù hợp nhất cho câu này. Lactulose là nhuận tràng thẩm thấu và còn làm giảm hấp thu NH3 trong bệnh não gan."
    },
    {
      "key": "D",
      "text": "Paraffin lỏng",
      "explanation": "Sai. “Paraffin lỏng” không phải lựa chọn phù hợp nhất cho câu này. Lactulose là nhuận tràng thẩm thấu và còn làm giảm hấp thu NH3 trong bệnh não gan."
    }
  ]
},
{
  "id": 97,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 57,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc nhuận tràng Bisacodyl thuộc nhóm cơ chế tác dụng nào ?",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Nhuận tràng tạo khối",
      "explanation": "Sai. “Nhuận tràng tạo khối” không phải lựa chọn phù hợp nhất cho câu này. Bisacodyl là nhuận tràng kích thích, làm tăng nhu động và bài tiết ở đại tràng."
    },
    {
      "key": "B",
      "text": "Nhuận tràng thẩm thấu",
      "explanation": "Sai. “Nhuận tràng thẩm thấu” không phải lựa chọn phù hợp nhất cho câu này. Bisacodyl là nhuận tràng kích thích, làm tăng nhu động và bài tiết ở đại tràng."
    },
    {
      "key": "C",
      "text": "Nhuận tràng kích thích nhu động ruột",
      "explanation": "Đúng. Bisacodyl là nhuận tràng kích thích, làm tăng nhu động và bài tiết ở đại tràng."
    },
    {
      "key": "D",
      "text": "Nhuận tràng làm mềm phân",
      "explanation": "Sai. “Nhuận tràng làm mềm phân” không phải lựa chọn phù hợp nhất cho câu này. Bisacodyl là nhuận tràng kích thích, làm tăng nhu động và bài tiết ở đại tràng."
    }
  ]
},
{
  "id": 98,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 59,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc kháng histamin cổ điển",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Loratadin",
      "explanation": "Sai. “Loratadin” không phải lựa chọn phù hợp nhất cho câu này. Chlorpheniramine là kháng histamin H1 thế hệ 1/cổ điển; các lựa chọn còn lại thường xếp thế hệ 2."
    },
    {
      "key": "B",
      "text": "Fexofenadin",
      "explanation": "Sai. “Fexofenadin” không phải lựa chọn phù hợp nhất cho câu này. Chlorpheniramine là kháng histamin H1 thế hệ 1/cổ điển; các lựa chọn còn lại thường xếp thế hệ 2."
    },
    {
      "key": "C",
      "text": "Cetirizin",
      "explanation": "Sai. “Cetirizin” không phải lựa chọn phù hợp nhất cho câu này. Chlorpheniramine là kháng histamin H1 thế hệ 1/cổ điển; các lựa chọn còn lại thường xếp thế hệ 2."
    },
    {
      "key": "D",
      "text": "Chlorpheniramin",
      "explanation": "Đúng. Chlorpheniramine là kháng histamin H1 thế hệ 1/cổ điển; các lựa chọn còn lại thường xếp thế hệ 2."
    }
  ]
},
{
  "id": 99,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 60,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế tác dụng chính của Omeprazol là gì ?",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Trung hòa acid dịch vị dạ dày",
      "explanation": "Sai. “Trung hòa acid dịch vị dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Omeprazole ức chế không hồi phục bơm proton H+/K+-ATPase ở tế bào thành dạ dày."
    },
    {
      "key": "B",
      "text": "Kháng thụ thể H2 của histamin",
      "explanation": "Sai. “Kháng thụ thể H2 của histamin” không phải lựa chọn phù hợp nhất cho câu này. Omeprazole ức chế không hồi phục bơm proton H+/K+-ATPase ở tế bào thành dạ dày."
    },
    {
      "key": "C",
      "text": "Bao phủ và bảo vệ niêm mạc dạ dày",
      "explanation": "Sai. “Bao phủ và bảo vệ niêm mạc dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Omeprazole ức chế không hồi phục bơm proton H+/K+-ATPase ở tế bào thành dạ dày."
    },
    {
      "key": "D",
      "text": "Ức chế không hồi phục bơm pronton H+/K+ATPase",
      "explanation": "Đúng. Omeprazole ức chế không hồi phục bơm proton H+/K+-ATPase ở tế bào thành dạ dày."
    }
  ]
},
{
  "id": 100,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 61,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc nào sau đây thuộc nhóm kháng thụ thể H2 của histamin?",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Cimetidin",
      "explanation": "Đúng. Cimetidine là thuốc đối kháng thụ thể histamine H2, làm giảm tiết acid dạ dày."
    },
    {
      "key": "B",
      "text": "Esomeprazol",
      "explanation": "Sai. “Esomeprazol” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine là thuốc đối kháng thụ thể histamine H2, làm giảm tiết acid dạ dày."
    },
    {
      "key": "C",
      "text": "Sucralfat",
      "explanation": "Sai. “Sucralfat” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine là thuốc đối kháng thụ thể histamine H2, làm giảm tiết acid dạ dày."
    },
    {
      "key": "D",
      "text": "Maalox",
      "explanation": "Sai. “Maalox” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine là thuốc đối kháng thụ thể histamine H2, làm giảm tiết acid dạ dày."
    }
  ]
},
{
  "id": 101,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 62,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Tác dụng phụ gây ra hội chứng vú to ở nam giới và bất lực là đặc điểm cần lưu ý của thuốc nào?",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Ranitidin",
      "explanation": "Sai. “Ranitidin” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine có tác dụng kháng androgen và có thể gây vú to ở nam, giảm chức năng tình dục."
    },
    {
      "key": "B",
      "text": "Famotidin",
      "explanation": "Sai. “Famotidin” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine có tác dụng kháng androgen và có thể gây vú to ở nam, giảm chức năng tình dục."
    },
    {
      "key": "C",
      "text": "Cimetidin",
      "explanation": "Đúng. Cimetidine có tác dụng kháng androgen và có thể gây vú to ở nam, giảm chức năng tình dục."
    },
    {
      "key": "D",
      "text": "Nizatidin",
      "explanation": "Sai. “Nizatidin” không phải lựa chọn phù hợp nhất cho câu này. Cimetidine có tác dụng kháng androgen và có thể gây vú to ở nam, giảm chức năng tình dục."
    }
  ]
},
{
  "id": 102,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 63,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc bảo vệ niêm mạc dạ dày nào hoạt động theo cơ chế tạo hàng rào bảo vệ (gel gắn kết) tại vị trí loét trong môi trường acid ?",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Nhôm hydroxyd",
      "explanation": "Sai. “Nhôm hydroxyd” không phải lựa chọn phù hợp nhất cho câu này. Sucralfate tạo lớp gel bám lên ổ loét trong môi trường acid, bảo vệ niêm mạc khỏi acid và pepsin."
    },
    {
      "key": "B",
      "text": "Sucralfat",
      "explanation": "Đúng. Sucralfate tạo lớp gel bám lên ổ loét trong môi trường acid, bảo vệ niêm mạc khỏi acid và pepsin."
    },
    {
      "key": "C",
      "text": "Misoprostol",
      "explanation": "Sai. “Misoprostol” không phải lựa chọn phù hợp nhất cho câu này. Sucralfate tạo lớp gel bám lên ổ loét trong môi trường acid, bảo vệ niêm mạc khỏi acid và pepsin."
    },
    {
      "key": "D",
      "text": "Magnesi hydroxyd",
      "explanation": "Sai. “Magnesi hydroxyd” không phải lựa chọn phù hợp nhất cho câu này. Sucralfate tạo lớp gel bám lên ổ loét trong môi trường acid, bảo vệ niêm mạc khỏi acid và pepsin."
    }
  ]
},
{
  "id": 103,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 64,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Theo nguyên tắc điều trị loét dạ dày – tá tràng, biện pháp nào sau đây thuộc nhóm “Hạn chế yếu tố gây loét”?",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng cường yếu tố bảo vệ",
      "explanation": "Sai. “Tăng cường yếu tố bảo vệ” không phải lựa chọn phù hợp nhất cho câu này. Loại trừ Helicobacter pylori là biện pháp loại bỏ một yếu tố gây loét quan trọng."
    },
    {
      "key": "B",
      "text": "Loại trừ vi khuẩn Helicobacter pylori",
      "explanation": "Đúng. Loại trừ Helicobacter pylori là biện pháp loại bỏ một yếu tố gây loét quan trọng."
    },
    {
      "key": "C",
      "text": "Trung hòa acid dịch vị",
      "explanation": "Sai. “Trung hòa acid dịch vị” không phải lựa chọn phù hợp nhất cho câu này. Loại trừ Helicobacter pylori là biện pháp loại bỏ một yếu tố gây loét quan trọng."
    },
    {
      "key": "D",
      "text": "Kích thích tiết chất nhầy",
      "explanation": "Sai. “Kích thích tiết chất nhầy” không phải lựa chọn phù hợp nhất cho câu này. Loại trừ Helicobacter pylori là biện pháp loại bỏ một yếu tố gây loét quan trọng."
    }
  ]
},
{
  "id": 104,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 65,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc vitamin nào có thể gây ra máu hồng cầu to?",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Vitamin B12 và acid folic",
      "explanation": "Đúng. Thiếu vitamin B12 hoặc acid folic gây thiếu máu hồng cầu to/megaloblastic; câu hỏi diễn đạt chưa chuẩn nhưng hướng tới cặp này."
    },
    {
      "key": "B",
      "text": "Vitamin k",
      "explanation": "Sai. “Vitamin k” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin B12 hoặc acid folic gây thiếu máu hồng cầu to/megaloblastic; câu hỏi diễn đạt chưa chuẩn nhưng hướng tới cặp này."
    },
    {
      "key": "C",
      "text": "Vitamin C",
      "explanation": "Sai. “Vitamin C” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin B12 hoặc acid folic gây thiếu máu hồng cầu to/megaloblastic; câu hỏi diễn đạt chưa chuẩn nhưng hướng tới cặp này."
    },
    {
      "key": "D",
      "text": "Vitamin D",
      "explanation": "Sai. “Vitamin D” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin B12 hoặc acid folic gây thiếu máu hồng cầu to/megaloblastic; câu hỏi diễn đạt chưa chuẩn nhưng hướng tới cặp này."
    }
  ],
  "keyNote": "Câu hỏi dùng từ “thuốc vitamin … gây ra máu hồng cầu to” chưa chuẩn; đúng về kiến thức là thiếu B12/folate gây thiếu máu hồng cầu to."
},
{
  "id": 105,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 66,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Trong cơ thể, acid folic được dự trữ chủ yếu ở dạng nào trong tế bào",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Dạng tự do không biến đổi",
      "explanation": "Sai. “Dạng tự do không biến đổi” không phải lựa chọn phù hợp nhất cho câu này. Folate trong tế bào được giữ chủ yếu dưới dạng polyglutamate."
    },
    {
      "key": "B",
      "text": "Dạng kết hợp với hemoglobin",
      "explanation": "Sai. “Dạng kết hợp với hemoglobin” không phải lựa chọn phù hợp nhất cho câu này. Folate trong tế bào được giữ chủ yếu dưới dạng polyglutamate."
    },
    {
      "key": "C",
      "text": "Polyglutamat",
      "explanation": "Đúng. Folate trong tế bào được giữ chủ yếu dưới dạng polyglutamate."
    },
    {
      "key": "D",
      "text": "Monoglutamat",
      "explanation": "Sai. “Monoglutamat” không phải lựa chọn phù hợp nhất cho câu này. Folate trong tế bào được giữ chủ yếu dưới dạng polyglutamate."
    }
  ]
},
{
  "id": 106,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 67,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Dịch truyền KHÔNG thể bù đắp khi",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Mất nước",
      "explanation": "Sai. “Mất nước” không phải lựa chọn phù hợp nhất cho câu này. Dịch truyền tinh thể/keo thông thường không thay thế được các yếu tố đông máu bị thiếu."
    },
    {
      "key": "B",
      "text": "Mất chất điện giải",
      "explanation": "Sai. “Mất chất điện giải” không phải lựa chọn phù hợp nhất cho câu này. Dịch truyền tinh thể/keo thông thường không thay thế được các yếu tố đông máu bị thiếu."
    },
    {
      "key": "C",
      "text": "Mất máu",
      "explanation": "Sai. “Mất máu” không phải lựa chọn phù hợp nhất cho câu này. Dịch truyền tinh thể/keo thông thường không thay thế được các yếu tố đông máu bị thiếu."
    },
    {
      "key": "D",
      "text": "Thiếu các yếu tố đông máu",
      "explanation": "Đúng. Dịch truyền tinh thể/keo thông thường không thay thế được các yếu tố đông máu bị thiếu."
    }
  ]
},
{
  "id": 107,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 68,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "thuốc điều trị quá liều Warfarin",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Vitamin K liều cao",
      "explanation": "Đúng. Vitamin K đối kháng tác dụng của warfarin trong quá liều/chảy máu; trường hợp nặng có thể cần thêm chế phẩm yếu tố đông máu."
    },
    {
      "key": "B",
      "text": "Heparin",
      "explanation": "Sai. “Heparin” không phải lựa chọn phù hợp nhất cho câu này. Vitamin K đối kháng tác dụng của warfarin trong quá liều/chảy máu; trường hợp nặng có thể cần thêm chế phẩm yếu tố đông máu."
    },
    {
      "key": "C",
      "text": "Vitamin C liều cao",
      "explanation": "Sai. “Vitamin C liều cao” không phải lựa chọn phù hợp nhất cho câu này. Vitamin K đối kháng tác dụng của warfarin trong quá liều/chảy máu; trường hợp nặng có thể cần thêm chế phẩm yếu tố đông máu."
    },
    {
      "key": "D",
      "text": "Protamins",
      "explanation": "Sai. “Protamins” không phải lựa chọn phù hợp nhất cho câu này. Vitamin K đối kháng tác dụng của warfarin trong quá liều/chảy máu; trường hợp nặng có thể cần thêm chế phẩm yếu tố đông máu."
    }
  ],
  "keyNote": "Trong chảy máu nặng do warfarin, xử trí có thể cần PCC/FFP ngoài vitamin K; câu chỉ hỏi trong các lựa chọn hiện có."
},
{
  "id": 108,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 69,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "phát biểu KHÔNG là nguyên nhân gây thiếu máu",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Mất máu mạn tính do rong kinh, loét tiêu hóa, nhiễm giun",
      "explanation": "Sai. “Mất máu mạn tính do rong kinh, loét tiêu hóa, nhiễm giun” không phải lựa chọn phù hợp nhất cho câu này. Dư thừa nguyên liệu tạo máu không phải nguyên nhân gây thiếu máu; mất máu, thiếu nguyên liệu và giảm sinh tủy đều có thể gây thiếu máu."
    },
    {
      "key": "B",
      "text": "Cung cấp dư thừa nguyên liệu (protein, sắt, vitamin)",
      "explanation": "Đúng. Dư thừa nguyên liệu tạo máu không phải nguyên nhân gây thiếu máu; mất máu, thiếu nguyên liệu và giảm sinh tủy đều có thể gây thiếu máu."
    },
    {
      "key": "C",
      "text": "Ăn uống thiếu protein, thiếu sắt, thiếu vitamin",
      "explanation": "Sai. “Ăn uống thiếu protein, thiếu sắt, thiếu vitamin” không phải lựa chọn phù hợp nhất cho câu này. Dư thừa nguyên liệu tạo máu không phải nguyên nhân gây thiếu máu; mất máu, thiếu nguyên liệu và giảm sinh tủy đều có thể gây thiếu máu."
    },
    {
      "key": "D",
      "text": "Tủy xương giảm sản xuất hồng cầu",
      "explanation": "Sai. “Tủy xương giảm sản xuất hồng cầu” không phải lựa chọn phù hợp nhất cho câu này. Dư thừa nguyên liệu tạo máu không phải nguyên nhân gây thiếu máu; mất máu, thiếu nguyên liệu và giảm sinh tủy đều có thể gây thiếu máu."
    }
  ]
},
{
  "id": 109,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 70,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Phát biển đúng về hydroxocobalamin",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Chỉ dùng trong điều trị thiếu acid folic",
      "explanation": "Sai. “Chỉ dùng trong điều trị thiếu acid folic” không phải lựa chọn phù hợp nhất cho câu này. Hydroxocobalamin là dạng vitamin B12 lưu giữ lâu trong cơ thể hơn cyanocobalamin."
    },
    {
      "key": "B",
      "text": "Hoàn toàn không có tác dụng trong điều trị thiếu vitamin B12",
      "explanation": "Sai. “Hoàn toàn không có tác dụng trong điều trị thiếu vitamin B12” không phải lựa chọn phù hợp nhất cho câu này. Hydroxocobalamin là dạng vitamin B12 lưu giữ lâu trong cơ thể hơn cyanocobalamin."
    },
    {
      "key": "C",
      "text": "Kém bền vững hơn cynacobalamin",
      "explanation": "Sai. “Kém bền vững hơn cynacobalamin” không phải lựa chọn phù hợp nhất cho câu này. Hydroxocobalamin là dạng vitamin B12 lưu giữ lâu trong cơ thể hơn cyanocobalamin."
    },
    {
      "key": "D",
      "text": "Vững bền và tồn tại lâu hơn trong cơ thể so với cynacobalamin",
      "explanation": "Đúng. Hydroxocobalamin là dạng vitamin B12 lưu giữ lâu trong cơ thể hơn cyanocobalamin."
    }
  ]
},
{
  "id": 110,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 71,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Điều KHÔNG ĐÚNG về tình trạng thiếu acid folic",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Người nghiện rượu mạn tính có nguy cơ thiếu acid folic do gan bị ảnh hưởng",
      "explanation": "Sai. “Người nghiện rượu mạn tính có nguy cơ thiếu acid folic do gan bị ảnh hưởng” không phải lựa chọn phù hợp nhất cho câu này. Tổn thương gan không làm “tăng cường” tái chế folate; ngược lại rượu/gan bệnh có thể góp phần gây thiếu folate."
    },
    {
      "key": "B",
      "text": "Thường là hậu quả của bệnh đường ruột làm cản trở hấp thu",
      "explanation": "Sai. “Thường là hậu quả của bệnh đường ruột làm cản trở hấp thu” không phải lựa chọn phù hợp nhất cho câu này. Tổn thương gan không làm “tăng cường” tái chế folate; ngược lại rượu/gan bệnh có thể góp phần gây thiếu folate."
    },
    {
      "key": "C",
      "text": "Chu kỳ gan – ruột đóng vai trò quan trọng trong việc duy trì lưu trữ acid folic",
      "explanation": "Sai. “Chu kỳ gan – ruột đóng vai trò quan trọng trong việc duy trì lưu trữ acid folic” không phải lựa chọn phù hợp nhất cho câu này. Tổn thương gan không làm “tăng cường” tái chế folate; ngược lại rượu/gan bệnh có thể góp phần gây thiếu folate."
    },
    {
      "key": "D",
      "text": "Gan nhiễm độc giúp tăng cường tái chế acid folic qua chu kỳ gan – ruột",
      "explanation": "Đúng. Tổn thương gan không làm “tăng cường” tái chế folate; ngược lại rượu/gan bệnh có thể góp phần gây thiếu folate."
    }
  ]
},
{
  "id": 111,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 72,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "sắt fumarat chứa lượng sắt nguyên tố là ?",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "25%",
      "explanation": "Sai. “25%” không phải lựa chọn phù hợp nhất cho câu này. Ferrous fumarate chứa khoảng một phần ba khối lượng là sắt nguyên tố, xấp xỉ 33%."
    },
    {
      "key": "B",
      "text": "20%",
      "explanation": "Sai. “20%” không phải lựa chọn phù hợp nhất cho câu này. Ferrous fumarate chứa khoảng một phần ba khối lượng là sắt nguyên tố, xấp xỉ 33%."
    },
    {
      "key": "C",
      "text": "33%",
      "explanation": "Đúng. Ferrous fumarate chứa khoảng một phần ba khối lượng là sắt nguyên tố, xấp xỉ 33%."
    },
    {
      "key": "D",
      "text": "50%",
      "explanation": "Sai. “50%” không phải lựa chọn phù hợp nhất cho câu này. Ferrous fumarate chứa khoảng một phần ba khối lượng là sắt nguyên tố, xấp xỉ 33%."
    }
  ]
},
{
  "id": 112,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 73,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc vitamin B12 được chỉ định",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Chống đông máu",
      "explanation": "Sai. “Chống đông máu” không phải lựa chọn phù hợp nhất cho câu này. Vitamin B12 được dùng trong thiếu B12 và một số biểu hiện thần kinh liên quan; đáp án D phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "B",
      "text": "Rối loạn lipid máu",
      "explanation": "Sai. “Rối loạn lipid máu” không phải lựa chọn phù hợp nhất cho câu này. Vitamin B12 được dùng trong thiếu B12 và một số biểu hiện thần kinh liên quan; đáp án D phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "C",
      "text": "Tăng huyết áp",
      "explanation": "Sai. “Tăng huyết áp” không phải lựa chọn phù hợp nhất cho câu này. Vitamin B12 được dùng trong thiếu B12 và một số biểu hiện thần kinh liên quan; đáp án D phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "D",
      "text": "Viêm đau dây thần kinh, rối loạn tâm thần",
      "explanation": "Đúng. Vitamin B12 được dùng trong thiếu B12 và một số biểu hiện thần kinh liên quan; đáp án D phù hợp nhất trong các lựa chọn."
    }
  ],
  "keyNote": "B12 còn có chỉ định chính trong thiếu vitamin B12/thiếu máu nguyên hồng cầu khổng lồ; lựa chọn D là phù hợp nhất trong bộ đáp án đã cho."
},
{
  "id": 113,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 74,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Sự hấp thu vitamin B12, chọn phát biểu ĐÚNG",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Phức hợp vitamin B12 – yếu tố tại được hấp thu ở hồi tràng",
      "explanation": "Sai. “Phức hợp vitamin B12 – yếu tố tại được hấp thu ở hồi tràng” không phải lựa chọn phù hợp nhất cho câu này. Phức hợp vitamin B12–yếu tố nội tại được hấp thu chủ yếu ở hồi tràng tận."
    },
    {
      "key": "B",
      "text": "Phức hợp vitamin B12 – yếu tố nội tại được hấp thu ở hồi tràng",
      "explanation": "Đúng. Phức hợp vitamin B12–yếu tố nội tại được hấp thu chủ yếu ở hồi tràng tận."
    },
    {
      "key": "C",
      "text": "Phức hợp vitamin B12 – yếu tố nội tại được hấp thu tại tá tràng",
      "explanation": "Sai. “Phức hợp vitamin B12 – yếu tố nội tại được hấp thu tại tá tràng” không phải lựa chọn phù hợp nhất cho câu này. Phức hợp vitamin B12–yếu tố nội tại được hấp thu chủ yếu ở hồi tràng tận."
    },
    {
      "key": "D",
      "text": "Vitamin B12 được hấp thu trực tiếp ở dạ dày mà không cần yếu tố nội tại",
      "explanation": "Sai. “Vitamin B12 được hấp thu trực tiếp ở dạ dày mà không cần yếu tố nội tại” không phải lựa chọn phù hợp nhất cho câu này. Phức hợp vitamin B12–yếu tố nội tại được hấp thu chủ yếu ở hồi tràng tận."
    }
  ]
},
{
  "id": 114,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 75,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "triệu chứng KHÔNG PHẢI do thiếu vitamin K",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tiểu ra máu",
      "explanation": "Sai. “Tiểu ra máu” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin K gây xu hướng chảy máu như bầm tím, chảy máu cam, tiểu máu; tiêu chảy không phải triệu chứng trực tiếp đặc trưng."
    },
    {
      "key": "B",
      "text": "Bệnh nhân dễ bị bầm tím",
      "explanation": "Sai. “Bệnh nhân dễ bị bầm tím” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin K gây xu hướng chảy máu như bầm tím, chảy máu cam, tiểu máu; tiêu chảy không phải triệu chứng trực tiếp đặc trưng."
    },
    {
      "key": "C",
      "text": "Tiêu chảy",
      "explanation": "Đúng. Thiếu vitamin K gây xu hướng chảy máu như bầm tím, chảy máu cam, tiểu máu; tiêu chảy không phải triệu chứng trực tiếp đặc trưng."
    },
    {
      "key": "D",
      "text": "Chảy máu cam",
      "explanation": "Sai. “Chảy máu cam” không phải lựa chọn phù hợp nhất cho câu này. Thiếu vitamin K gây xu hướng chảy máu như bầm tím, chảy máu cam, tiểu máu; tiêu chảy không phải triệu chứng trực tiếp đặc trưng."
    }
  ]
},
{
  "id": 115,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 76,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "lượng acid folic khuyến nghị hăng ngày cho người lớn",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "200 mcg",
      "explanation": "Sai. “200 mcg” không phải lựa chọn phù hợp nhất cho câu này. Nhu cầu folate khuyến nghị ở người lớn thường khoảng 400 microgam DFE mỗi ngày."
    },
    {
      "key": "B",
      "text": "300 mcg",
      "explanation": "Sai. “300 mcg” không phải lựa chọn phù hợp nhất cho câu này. Nhu cầu folate khuyến nghị ở người lớn thường khoảng 400 microgam DFE mỗi ngày."
    },
    {
      "key": "C",
      "text": "400 mcg",
      "explanation": "Đúng. Nhu cầu folate khuyến nghị ở người lớn thường khoảng 400 microgam DFE mỗi ngày."
    },
    {
      "key": "D",
      "text": "500 mcg",
      "explanation": "Sai. “500 mcg” không phải lựa chọn phù hợp nhất cho câu này. Nhu cầu folate khuyến nghị ở người lớn thường khoảng 400 microgam DFE mỗi ngày."
    }
  ]
},
{
  "id": 116,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 77,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thiếu máu là",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Giam số lượng bạch cầu (WBC) dưới mức bình thường",
      "explanation": "Sai. “Giam số lượng bạch cầu (WBC) dưới mức bình thường” không phải lựa chọn phù hợp nhất cho câu này. Thiếu máu là tình trạng hemoglobin/hematocrit hoặc khối hồng cầu dưới mức bình thường, làm giảm khả năng vận chuyển oxy."
    },
    {
      "key": "B",
      "text": "Giảm số lượng hồng cầu (RBC), hemoglobin hoặc hematocrit dưới mức bình thường",
      "explanation": "Đúng. Thiếu máu là tình trạng hemoglobin/hematocrit hoặc khối hồng cầu dưới mức bình thường, làm giảm khả năng vận chuyển oxy."
    },
    {
      "key": "C",
      "text": "Tăng huyết sắc tố (hemoglobin) trên mức bình thường",
      "explanation": "Sai. “Tăng huyết sắc tố (hemoglobin) trên mức bình thường” không phải lựa chọn phù hợp nhất cho câu này. Thiếu máu là tình trạng hemoglobin/hematocrit hoặc khối hồng cầu dưới mức bình thường, làm giảm khả năng vận chuyển oxy."
    },
    {
      "key": "D",
      "text": "Giảm tiểu cầu (PLT) dưới mức bình thường",
      "explanation": "Sai. “Giảm tiểu cầu (PLT) dưới mức bình thường” không phải lựa chọn phù hợp nhất cho câu này. Thiếu máu là tình trạng hemoglobin/hematocrit hoặc khối hồng cầu dưới mức bình thường, làm giảm khả năng vận chuyển oxy."
    }
  ]
},
{
  "id": 117,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 78,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Khi nào nên sử dụng Gelatin đã biến chất",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Khi bệnh nhân không ăn đủ chất dinh dưỡng",
      "explanation": "Sai. “Khi bệnh nhân không ăn đủ chất dinh dưỡng” không phải lựa chọn phù hợp nhất cho câu này. Gelatin biến chất là dịch keo thay thế huyết tương dùng khi cần bù thể tích tuần hoàn, chẳng hạn mất máu nhưng chưa cần truyền máu toàn phần."
    },
    {
      "key": "B",
      "text": "Khi bệnh nhân bị mất nước",
      "explanation": "Sai. “Khi bệnh nhân bị mất nước” không phải lựa chọn phù hợp nhất cho câu này. Gelatin biến chất là dịch keo thay thế huyết tương dùng khi cần bù thể tích tuần hoàn, chẳng hạn mất máu nhưng chưa cần truyền máu toàn phần."
    },
    {
      "key": "C",
      "text": "Không có đáp án đúng",
      "explanation": "Sai. “Không có đáp án đúng” không phải lựa chọn phù hợp nhất cho câu này. Gelatin biến chất là dịch keo thay thế huyết tương dùng khi cần bù thể tích tuần hoàn, chẳng hạn mất máu nhưng chưa cần truyền máu toàn phần."
    },
    {
      "key": "D",
      "text": "Khi bệnh nhân bị mất máu, nhưng không cần truyền máu",
      "explanation": "Đúng. Gelatin biến chất là dịch keo thay thế huyết tương dùng khi cần bù thể tích tuần hoàn, chẳng hạn mất máu nhưng chưa cần truyền máu toàn phần."
    }
  ]
},
{
  "id": 118,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 79,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "sử dụng kháng sinh lại ảnh hưởng tới hệ tạp khuẩn do kháng sinh",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Chỉ diệt vi khuẩn gây bệnh",
      "explanation": "Sai. “Chỉ diệt vi khuẩn gây bệnh” không phải lựa chọn phù hợp nhất cho câu này. Kháng sinh có thể làm rối loạn hệ vi sinh bình thường vì ngoài vi khuẩn gây bệnh còn có thể tiêu diệt vi khuẩn có lợi nhạy cảm."
    },
    {
      "key": "B",
      "text": "Diệt cả các vi khuẩn có lợi",
      "explanation": "Đúng. Kháng sinh có thể làm rối loạn hệ vi sinh bình thường vì ngoài vi khuẩn gây bệnh còn có thể tiêu diệt vi khuẩn có lợi nhạy cảm."
    },
    {
      "key": "C",
      "text": "Kích thích vi khuẩn",
      "explanation": "Sai. “Kích thích vi khuẩn” không phải lựa chọn phù hợp nhất cho câu này. Kháng sinh có thể làm rối loạn hệ vi sinh bình thường vì ngoài vi khuẩn gây bệnh còn có thể tiêu diệt vi khuẩn có lợi nhạy cảm."
    },
    {
      "key": "D",
      "text": "Kết hợp với tác nhân gây bệnh tấn công cơ thể",
      "explanation": "Sai. “Kết hợp với tác nhân gây bệnh tấn công cơ thể” không phải lựa chọn phù hợp nhất cho câu này. Kháng sinh có thể làm rối loạn hệ vi sinh bình thường vì ngoài vi khuẩn gây bệnh còn có thể tiêu diệt vi khuẩn có lợi nhạy cảm."
    }
  ]
},
{
  "id": 119,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 80,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "khi dùng chung loại kháng sinh có cùng tác động với nhau",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Hiệu quả tăng lên",
      "explanation": "Đúng. Phối hợp kháng sinh có tác động tương hỗ phù hợp có thể làm tăng hiệu quả; câu gốc diễn đạt khá chung nên cần hiểu theo ý “tăng tác dụng”."
    },
    {
      "key": "B",
      "text": "Bị đẩy nhau ra khỏi địch tác động",
      "explanation": "Sai. “Bị đẩy nhau ra khỏi địch tác động” không phải lựa chọn phù hợp nhất cho câu này. Phối hợp kháng sinh có tác động tương hỗ phù hợp có thể làm tăng hiệu quả; câu gốc diễn đạt khá chung nên cần hiểu theo ý “tăng tác dụng”."
    },
    {
      "key": "C",
      "text": "Kháng sinh sẽ phát huy tối đa tác dụng",
      "explanation": "Sai. “Kháng sinh sẽ phát huy tối đa tác dụng” không phải lựa chọn phù hợp nhất cho câu này. Phối hợp kháng sinh có tác động tương hỗ phù hợp có thể làm tăng hiệu quả; câu gốc diễn đạt khá chung nên cần hiểu theo ý “tăng tác dụng”."
    },
    {
      "key": "D",
      "text": "Vi khuẩn sẽ nhanh chết hơn",
      "explanation": "Sai. “Vi khuẩn sẽ nhanh chết hơn” không phải lựa chọn phù hợp nhất cho câu này. Phối hợp kháng sinh có tác động tương hỗ phù hợp có thể làm tăng hiệu quả; câu gốc diễn đạt khá chung nên cần hiểu theo ý “tăng tác dụng”."
    }
  ],
  "keyNote": "Câu diễn đạt “cùng tác động” khá mơ hồ; phối hợp kháng sinh có thể hiệp đồng, cộng hoặc đối kháng tùy cặp thuốc."
},
{
  "id": 120,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 81,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "yếu tố không góp phần vào sự lây lan của vi khuẩn kháng sinh",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Sử dụng kháng sinh không đúng cách",
      "explanation": "Sai. “Sử dụng kháng sinh không đúng cách” không phải lựa chọn phù hợp nhất cho câu này. Vaccin phòng bệnh giúp giảm nhiễm trùng và nhu cầu dùng kháng sinh, không phải yếu tố làm lan truyền vi khuẩn kháng thuốc."
    },
    {
      "key": "B",
      "text": "Vệ sinh cá nhân kém",
      "explanation": "Sai. “Vệ sinh cá nhân kém” không phải lựa chọn phù hợp nhất cho câu này. Vaccin phòng bệnh giúp giảm nhiễm trùng và nhu cầu dùng kháng sinh, không phải yếu tố làm lan truyền vi khuẩn kháng thuốc."
    },
    {
      "key": "C",
      "text": "Sự dụng vaccin phòng bệnh",
      "explanation": "Đúng. Vaccin phòng bệnh giúp giảm nhiễm trùng và nhu cầu dùng kháng sinh, không phải yếu tố làm lan truyền vi khuẩn kháng thuốc."
    },
    {
      "key": "D",
      "text": "Sử dụng kháng sinh trong chăn nuôi",
      "explanation": "Sai. “Sử dụng kháng sinh trong chăn nuôi” không phải lựa chọn phù hợp nhất cho câu này. Vaccin phòng bệnh giúp giảm nhiễm trùng và nhu cầu dùng kháng sinh, không phải yếu tố làm lan truyền vi khuẩn kháng thuốc."
    }
  ]
},
{
  "id": 121,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 82,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "để kháng sinh phát huy được tối đa tác dụng, thì cần",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Uống sau khi ăn",
      "explanation": "Sai. “Uống sau khi ăn” không phải lựa chọn phù hợp nhất cho câu này. Muốn kháng sinh đạt hiệu quả và hạn chế kháng thuốc cần đúng chỉ định, đúng thuốc, liều và đủ thời gian."
    },
    {
      "key": "B",
      "text": "Uống ngay sau khi chế biến",
      "explanation": "Sai. “Uống ngay sau khi chế biến” không phải lựa chọn phù hợp nhất cho câu này. Muốn kháng sinh đạt hiệu quả và hạn chế kháng thuốc cần đúng chỉ định, đúng thuốc, liều và đủ thời gian."
    },
    {
      "key": "C",
      "text": "Ăn nhiều rau xanh",
      "explanation": "Sai. “Ăn nhiều rau xanh” không phải lựa chọn phù hợp nhất cho câu này. Muốn kháng sinh đạt hiệu quả và hạn chế kháng thuốc cần đúng chỉ định, đúng thuốc, liều và đủ thời gian."
    },
    {
      "key": "D",
      "text": "Dùng đúng loại, liều lượng và thời gian quy định",
      "explanation": "Đúng. Muốn kháng sinh đạt hiệu quả và hạn chế kháng thuốc cần đúng chỉ định, đúng thuốc, liều và đủ thời gian."
    }
  ]
},
{
  "id": 122,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 83,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Theo cơ chế tác động, kháng sinh có thể được phân loại dựa trên",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Nguồn gốc và cấu trúc hóa học",
      "explanation": "Sai. “Nguồn gốc và cấu trúc hóa học” không phải lựa chọn phù hợp nhất cho câu này. Phân loại theo cơ chế tác động dựa vào đích/vị trí tác động như vách tế bào, ribosome, acid nucleic hay chuyển hóa folate."
    },
    {
      "key": "B",
      "text": "Phổ kháng khuẩn và tác dụng phụ",
      "explanation": "Sai. “Phổ kháng khuẩn và tác dụng phụ” không phải lựa chọn phù hợp nhất cho câu này. Phân loại theo cơ chế tác động dựa vào đích/vị trí tác động như vách tế bào, ribosome, acid nucleic hay chuyển hóa folate."
    },
    {
      "key": "C",
      "text": "Vị trí tác động trên vi khuẩn",
      "explanation": "Đúng. Phân loại theo cơ chế tác động dựa vào đích/vị trí tác động như vách tế bào, ribosome, acid nucleic hay chuyển hóa folate."
    },
    {
      "key": "D",
      "text": "Thời gian tác dụng và liều lượng",
      "explanation": "Sai. “Thời gian tác dụng và liều lượng” không phải lựa chọn phù hợp nhất cho câu này. Phân loại theo cơ chế tác động dựa vào đích/vị trí tác động như vách tế bào, ribosome, acid nucleic hay chuyển hóa folate."
    }
  ]
},
{
  "id": 123,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 84,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nhóm kháng sinh ức chế tổng hợp vách tế bào vi khuẩn",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Aminoglycosid",
      "explanation": "Sai. “Aminoglycosid” không phải lựa chọn phù hợp nhất cho câu này. Penicillin thuộc beta-lactam, ức chế tổng hợp peptidoglycan của vách tế bào vi khuẩn."
    },
    {
      "key": "B",
      "text": "Totracyclin",
      "explanation": "Sai. “Totracyclin” không phải lựa chọn phù hợp nhất cho câu này. Penicillin thuộc beta-lactam, ức chế tổng hợp peptidoglycan của vách tế bào vi khuẩn."
    },
    {
      "key": "C",
      "text": "Penicillin",
      "explanation": "Đúng. Penicillin thuộc beta-lactam, ức chế tổng hợp peptidoglycan của vách tế bào vi khuẩn."
    },
    {
      "key": "D",
      "text": "Ocinoin",
      "explanation": "Sai. “Ocinoin” không phải lựa chọn phù hợp nhất cho câu này. Penicillin thuộc beta-lactam, ức chế tổng hợp peptidoglycan của vách tế bào vi khuẩn."
    }
  ]
},
{
  "id": 124,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 85,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Aminosld có tác động lên tổng hợp protein nhờ cơ chế",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Gắn vào ribosome 30s",
      "explanation": "Đúng. Aminoglycoside gắn không hồi phục vào tiểu đơn vị 30S của ribosome và làm sai đọc mRNA."
    },
    {
      "key": "B",
      "text": "Gắn vào ribosome 50s",
      "explanation": "Sai. “Gắn vào ribosome 50s” không phải lựa chọn phù hợp nhất cho câu này. Aminoglycoside gắn không hồi phục vào tiểu đơn vị 30S của ribosome và làm sai đọc mRNA."
    },
    {
      "key": "C",
      "text": "ức chế enzyme phiên mã",
      "explanation": "Sai. “ức chế enzyme phiên mã” không phải lựa chọn phù hợp nhất cho câu này. Aminoglycoside gắn không hồi phục vào tiểu đơn vị 30S của ribosome và làm sai đọc mRNA."
    },
    {
      "key": "D",
      "text": "thay đổi cấu trúc màng tế bào",
      "explanation": "Sai. “thay đổi cấu trúc màng tế bào” không phải lựa chọn phù hợp nhất cho câu này. Aminoglycoside gắn không hồi phục vào tiểu đơn vị 30S của ribosome và làm sai đọc mRNA."
    }
  ]
},
{
  "id": 125,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 86,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Các nhóm kháng sinh tác động lên tiểu đơn vị 50s của ribosome",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Macrolid, phenicol",
      "explanation": "Đúng. Macrolide và phenicol tác động chủ yếu lên tiểu đơn vị 50S ribosome."
    },
    {
      "key": "B",
      "text": "Aminosid, tetracyclin",
      "explanation": "Sai. “Aminosid, tetracyclin” không phải lựa chọn phù hợp nhất cho câu này. Macrolide và phenicol tác động chủ yếu lên tiểu đơn vị 50S ribosome."
    },
    {
      "key": "C",
      "text": "Aminosid, macrolid",
      "explanation": "Sai. “Aminosid, macrolid” không phải lựa chọn phù hợp nhất cho câu này. Macrolide và phenicol tác động chủ yếu lên tiểu đơn vị 50S ribosome."
    },
    {
      "key": "D",
      "text": "Phenicol, tetracyclin",
      "explanation": "Sai. “Phenicol, tetracyclin” không phải lựa chọn phù hợp nhất cho câu này. Macrolide và phenicol tác động chủ yếu lên tiểu đơn vị 50S ribosome."
    }
  ]
},
{
  "id": 126,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 87,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Sulfamethoxazol thường phối hợp với hoạt chất để tăng hiệu quả điều trị",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Cilastatin",
      "explanation": "Sai. “Cilastatin” không phải lựa chọn phù hợp nhất cho câu này. Sulfamethoxazole thường phối hợp trimethoprim để ức chế liên tiếp hai bước tổng hợp folate của vi khuẩn."
    },
    {
      "key": "B",
      "text": "Acid clavulanic",
      "explanation": "Sai. “Acid clavulanic” không phải lựa chọn phù hợp nhất cho câu này. Sulfamethoxazole thường phối hợp trimethoprim để ức chế liên tiếp hai bước tổng hợp folate của vi khuẩn."
    },
    {
      "key": "C",
      "text": "Trimethoprim",
      "explanation": "Đúng. Sulfamethoxazole thường phối hợp trimethoprim để ức chế liên tiếp hai bước tổng hợp folate của vi khuẩn."
    },
    {
      "key": "D",
      "text": "Sulbactam",
      "explanation": "Sai. “Sulbactam” không phải lựa chọn phù hợp nhất cho câu này. Sulfamethoxazole thường phối hợp trimethoprim để ức chế liên tiếp hai bước tổng hợp folate của vi khuẩn."
    }
  ]
},
{
  "id": 127,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 88,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế tác dụng của tetracyclin",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Gắn vào 50s của ribosome",
      "explanation": "Sai. “Gắn vào 50s của ribosome” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline gắn vào tiểu đơn vị 30S và ngăn aminoacyl-tRNA gắn vào ribosome."
    },
    {
      "key": "B",
      "text": "ức chế tổng hợp vách tế bào",
      "explanation": "Sai. “ức chế tổng hợp vách tế bào” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline gắn vào tiểu đơn vị 30S và ngăn aminoacyl-tRNA gắn vào ribosome."
    },
    {
      "key": "C",
      "text": "gắn vào 30s của ribosome",
      "explanation": "Đúng. Tetracycline gắn vào tiểu đơn vị 30S và ngăn aminoacyl-tRNA gắn vào ribosome."
    },
    {
      "key": "D",
      "text": "ức chế DNA gyrase",
      "explanation": "Sai. “ức chế DNA gyrase” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline gắn vào tiểu đơn vị 30S và ngăn aminoacyl-tRNA gắn vào ribosome."
    }
  ]
},
{
  "id": 128,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 89,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "cơ chế tác dụng của nhóm beta – lactam",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "gắn vào 50s của ribosome",
      "explanation": "Sai. “gắn vào 50s của ribosome” không phải lựa chọn phù hợp nhất cho câu này. Beta-lactam ức chế các protein gắn penicillin và quá trình tạo liên kết chéo peptidoglycan của thành tế bào."
    },
    {
      "key": "B",
      "text": "tác động lên thành tế bào",
      "explanation": "Đúng. Beta-lactam ức chế các protein gắn penicillin và quá trình tạo liên kết chéo peptidoglycan của thành tế bào."
    },
    {
      "key": "C",
      "text": "gắn vào 30s của ribosome",
      "explanation": "Sai. “gắn vào 30s của ribosome” không phải lựa chọn phù hợp nhất cho câu này. Beta-lactam ức chế các protein gắn penicillin và quá trình tạo liên kết chéo peptidoglycan của thành tế bào."
    },
    {
      "key": "D",
      "text": "ức chế tổng hợp acid nucleic",
      "explanation": "Sai. “ức chế tổng hợp acid nucleic” không phải lựa chọn phù hợp nhất cho câu này. Beta-lactam ức chế các protein gắn penicillin và quá trình tạo liên kết chéo peptidoglycan của thành tế bào."
    }
  ]
},
{
  "id": 129,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 90,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế đề kháng kháng sinh của vi khuẩn",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng cường khả năng hấp thu thuốc",
      "explanation": "Sai. “Tăng cường khả năng hấp thu thuốc” không phải lựa chọn phù hợp nhất cho câu này. Vi khuẩn có thể kháng thuốc bằng enzym bất hoạt/biến đổi kháng sinh, ví dụ beta-lactamase hoặc enzym biến đổi aminoglycoside."
    },
    {
      "key": "B",
      "text": "Sản xuất enzyme biến đổi và vô hoạt kháng sinh",
      "explanation": "Đúng. Vi khuẩn có thể kháng thuốc bằng enzym bất hoạt/biến đổi kháng sinh, ví dụ beta-lactamase hoặc enzym biến đổi aminoglycoside."
    },
    {
      "key": "C",
      "text": "Giảm tốc độ nhân lên của vi khuẩn",
      "explanation": "Sai. “Giảm tốc độ nhân lên của vi khuẩn” không phải lựa chọn phù hợp nhất cho câu này. Vi khuẩn có thể kháng thuốc bằng enzym bất hoạt/biến đổi kháng sinh, ví dụ beta-lactamase hoặc enzym biến đổi aminoglycoside."
    },
    {
      "key": "D",
      "text": "Tăng tính thấm của thành tế bào",
      "explanation": "Sai. “Tăng tính thấm của thành tế bào” không phải lựa chọn phù hợp nhất cho câu này. Vi khuẩn có thể kháng thuốc bằng enzym bất hoạt/biến đổi kháng sinh, ví dụ beta-lactamase hoặc enzym biến đổi aminoglycoside."
    }
  ]
},
{
  "id": 130,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 91,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "kháng sinh kìm khuẩn và diệt khuẩn được phân biệt dựa trên",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Phổ tác dụng",
      "explanation": "Sai. “Phổ tác dụng” không phải lựa chọn phù hợp nhất cho câu này. Tỷ lệ MBC/MIC giúp phân biệt xu hướng diệt khuẩn và kìm khuẩn trong đánh giá vi sinh."
    },
    {
      "key": "B",
      "text": "Tỉ lệ MBC/MIC",
      "explanation": "Đúng. Tỷ lệ MBC/MIC giúp phân biệt xu hướng diệt khuẩn và kìm khuẩn trong đánh giá vi sinh."
    },
    {
      "key": "C",
      "text": "Cấu trúc hóa học",
      "explanation": "Sai. “Cấu trúc hóa học” không phải lựa chọn phù hợp nhất cho câu này. Tỷ lệ MBC/MIC giúp phân biệt xu hướng diệt khuẩn và kìm khuẩn trong đánh giá vi sinh."
    },
    {
      "key": "D",
      "text": "Nồng độ gây độc trên tế bào người",
      "explanation": "Sai. “Nồng độ gây độc trên tế bào người” không phải lựa chọn phù hợp nhất cho câu này. Tỷ lệ MBC/MIC giúp phân biệt xu hướng diệt khuẩn và kìm khuẩn trong đánh giá vi sinh."
    }
  ]
},
{
  "id": 131,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 92,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "phản ứng phát ban dạng hồng ban dát sẩn ( dạng sởi) là tác dụng phụ điển hình của nhóm kháng sinh",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Penicllin",
      "explanation": "Đúng. Penicillin, đặc biệt aminopenicillin, có thể gây ban dát sẩn kiểu sởi; sulfamide cũng có thể gây ban nên câu cần học theo đáp án dự kiến."
    },
    {
      "key": "B",
      "text": "Tetracyclin",
      "explanation": "Sai. “Tetracyclin” không phải lựa chọn phù hợp nhất cho câu này. Penicillin, đặc biệt aminopenicillin, có thể gây ban dát sẩn kiểu sởi; sulfamide cũng có thể gây ban nên câu cần học theo đáp án dự kiến."
    },
    {
      "key": "C",
      "text": "Sulfamid",
      "explanation": "Sai. “Sulfamid” không phải lựa chọn phù hợp nhất cho câu này. Penicillin, đặc biệt aminopenicillin, có thể gây ban dát sẩn kiểu sởi; sulfamide cũng có thể gây ban nên câu cần học theo đáp án dự kiến."
    },
    {
      "key": "D",
      "text": "Aminoglycosid",
      "explanation": "Sai. “Aminoglycosid” không phải lựa chọn phù hợp nhất cho câu này. Penicillin, đặc biệt aminopenicillin, có thể gây ban dát sẩn kiểu sởi; sulfamide cũng có thể gây ban nên câu cần học theo đáp án dự kiến."
    }
  ],
  "keyNote": "Ban dát sẩn có thể gặp với nhiều kháng sinh, trong đó penicillin/aminopenicillin và sulfonamide đều có thể gây. A là đáp án chọn theo ý câu."
},
{
  "id": 132,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 93,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cơ chế kháng của vi khuẩn đối với kháng sinh Aminoglycosid",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Thay đổi điểm tích tác động",
      "explanation": "Đúng. Kháng aminoglycoside có thể do thay đổi đích ribosome; cơ chế thường gặp khác là enzym bất hoạt thuốc nhưng không có trong lựa chọn."
    },
    {
      "key": "B",
      "text": "Tăng hấp thu thuốc",
      "explanation": "Sai. “Tăng hấp thu thuốc” không phải lựa chọn phù hợp nhất cho câu này. Kháng aminoglycoside có thể do thay đổi đích ribosome; cơ chế thường gặp khác là enzym bất hoạt thuốc nhưng không có trong lựa chọn."
    },
    {
      "key": "C",
      "text": "Tăng tính thấm của tế bào",
      "explanation": "Sai. “Tăng tính thấm của tế bào” không phải lựa chọn phù hợp nhất cho câu này. Kháng aminoglycoside có thể do thay đổi đích ribosome; cơ chế thường gặp khác là enzym bất hoạt thuốc nhưng không có trong lựa chọn."
    },
    {
      "key": "D",
      "text": "Tăng tốc độ nhân lên",
      "explanation": "Sai. “Tăng tốc độ nhân lên” không phải lựa chọn phù hợp nhất cho câu này. Kháng aminoglycoside có thể do thay đổi đích ribosome; cơ chế thường gặp khác là enzym bất hoạt thuốc nhưng không có trong lựa chọn."
    }
  ]
},
{
  "id": 133,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 94,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Beta-lactam thường phối hợp với hợp chất để tăng hiệu quả điều trị",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Cilastatin",
      "explanation": "Đúng. Imipenem (một beta-lactam carbapenem) được phối hợp cilastatin để ức chế dehydropeptidase I ở thận, làm tăng độ bền của imipenem."
    },
    {
      "key": "B",
      "text": "Aminosid",
      "explanation": "Sai. “Aminosid” không phải lựa chọn phù hợp nhất cho câu này. Imipenem (một beta-lactam carbapenem) được phối hợp cilastatin để ức chế dehydropeptidase I ở thận, làm tăng độ bền của imipenem."
    },
    {
      "key": "C",
      "text": "Trimethoprim",
      "explanation": "Sai. “Trimethoprim” không phải lựa chọn phù hợp nhất cho câu này. Imipenem (một beta-lactam carbapenem) được phối hợp cilastatin để ức chế dehydropeptidase I ở thận, làm tăng độ bền của imipenem."
    },
    {
      "key": "D",
      "text": "Sulfametthoxazol",
      "explanation": "Sai. “Sulfametthoxazol” không phải lựa chọn phù hợp nhất cho câu này. Imipenem (một beta-lactam carbapenem) được phối hợp cilastatin để ức chế dehydropeptidase I ở thận, làm tăng độ bền của imipenem."
    }
  ]
},
{
  "id": 134,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 95,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "phối hợp tetracyclin + penicillin mang lại tác dụng",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Hiệp đồng",
      "explanation": "Sai. “Hiệp đồng” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline kìm khuẩn có thể làm giảm hiệu quả của penicillin diệt vi khuẩn đang tăng trưởng, nên phối hợp có thể đối kháng."
    },
    {
      "key": "B",
      "text": "Cộng",
      "explanation": "Sai. “Cộng” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline kìm khuẩn có thể làm giảm hiệu quả của penicillin diệt vi khuẩn đang tăng trưởng, nên phối hợp có thể đối kháng."
    },
    {
      "key": "C",
      "text": "Đối kháng",
      "explanation": "Đúng. Tetracycline kìm khuẩn có thể làm giảm hiệu quả của penicillin diệt vi khuẩn đang tăng trưởng, nên phối hợp có thể đối kháng."
    },
    {
      "key": "D",
      "text": "Không tương tác",
      "explanation": "Sai. “Không tương tác” không phải lựa chọn phù hợp nhất cho câu này. Tetracycline kìm khuẩn có thể làm giảm hiệu quả của penicillin diệt vi khuẩn đang tăng trưởng, nên phối hợp có thể đối kháng."
    }
  ]
},
{
  "id": 135,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 96,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Dung dịch có thể gây ra nhiễm toan máu nếu dùng với số lượng lớn",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Riners lacintn",
      "explanation": "Sai. “Riners lacintn” không phải lựa chọn phù hợp nhất cho câu này. Giáo trình thường nêu NaCl 0,9% truyền nhiều dễ gây toan tăng clo; file ghi “NaCl 0.5%” có khả năng là lỗi đánh máy nên chọn phương án muối NaCl gần ý này."
    },
    {
      "key": "B",
      "text": "Nacl 0.5%",
      "explanation": "Đúng. Giáo trình thường nêu NaCl 0,9% truyền nhiều dễ gây toan tăng clo; file ghi “NaCl 0.5%” có khả năng là lỗi đánh máy nên chọn phương án muối NaCl gần ý này."
    },
    {
      "key": "C",
      "text": "Nacl 10%",
      "explanation": "Sai. “Nacl 10%” không phải lựa chọn phù hợp nhất cho câu này. Giáo trình thường nêu NaCl 0,9% truyền nhiều dễ gây toan tăng clo; file ghi “NaCl 0.5%” có khả năng là lỗi đánh máy nên chọn phương án muối NaCl gần ý này."
    },
    {
      "key": "D",
      "text": "Glucid",
      "explanation": "Sai. “Glucid” không phải lựa chọn phù hợp nhất cho câu này. Giáo trình thường nêu NaCl 0,9% truyền nhiều dễ gây toan tăng clo; file ghi “NaCl 0.5%” có khả năng là lỗi đánh máy nên chọn phương án muối NaCl gần ý này."
    }
  ],
  "keyNote": "Tài liệu file ghi NaCl 0.5%, trong khi giáo trình Dược lý thường nêu NaCl 0,9% truyền nhiều dễ gây toan tăng clo. Đây có khả năng là lỗi đánh máy của đề."
},
{
  "id": 136,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 97,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "dung dịch nacl ưu trương nên được pha loãng với",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Glucose 5%",
      "explanation": "Đúng. NaCl ưu trương thường được pha với glucose 5% để đạt nồng độ mong muốn trước khi truyền."
    },
    {
      "key": "B",
      "text": "Galatin",
      "explanation": "Sai. “Galatin” không phải lựa chọn phù hợp nhất cho câu này. NaCl ưu trương thường được pha với glucose 5% để đạt nồng độ mong muốn trước khi truyền."
    },
    {
      "key": "C",
      "text": "Ringer laciatan",
      "explanation": "Sai. “Ringer laciatan” không phải lựa chọn phù hợp nhất cho câu này. NaCl ưu trương thường được pha với glucose 5% để đạt nồng độ mong muốn trước khi truyền."
    },
    {
      "key": "D",
      "text": "PVP",
      "explanation": "Sai. “PVP” không phải lựa chọn phù hợp nhất cho câu này. NaCl ưu trương thường được pha với glucose 5% để đạt nồng độ mong muốn trước khi truyền."
    }
  ]
},
{
  "id": 137,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 98,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Chọn ý đúng về dung dịch đẳng trương",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Nacl 20%",
      "explanation": "Sai. “Nacl 20%” không phải lựa chọn phù hợp nhất cho câu này. Ringer lactate là dung dịch điện giải gần đẳng trương; các NaCl 10–20% là ưu trương rõ."
    },
    {
      "key": "B",
      "text": "Nacl 15%",
      "explanation": "Sai. “Nacl 15%” không phải lựa chọn phù hợp nhất cho câu này. Ringer lactate là dung dịch điện giải gần đẳng trương; các NaCl 10–20% là ưu trương rõ."
    },
    {
      "key": "C",
      "text": "Nacl 10%",
      "explanation": "Sai. “Nacl 10%” không phải lựa chọn phù hợp nhất cho câu này. Ringer lactate là dung dịch điện giải gần đẳng trương; các NaCl 10–20% là ưu trương rõ."
    },
    {
      "key": "D",
      "text": "Ringer laciaia",
      "explanation": "Đúng. Ringer lactate là dung dịch điện giải gần đẳng trương; các NaCl 10–20% là ưu trương rõ."
    }
  ]
},
{
  "id": 138,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 99,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "dịch truyền cần có",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tính axit",
      "explanation": "Sai. “Tính axit” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch truyền phải bảo đảm vô khuẩn để tránh đưa vi sinh vật trực tiếp vào tuần hoàn."
    },
    {
      "key": "B",
      "text": "Tính kiềm",
      "explanation": "Sai. “Tính kiềm” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch truyền phải bảo đảm vô khuẩn để tránh đưa vi sinh vật trực tiếp vào tuần hoàn."
    },
    {
      "key": "C",
      "text": "Vô trùng",
      "explanation": "Đúng. Dung dịch truyền phải bảo đảm vô khuẩn để tránh đưa vi sinh vật trực tiếp vào tuần hoàn."
    },
    {
      "key": "D",
      "text": "Nhớt",
      "explanation": "Sai. “Nhớt” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch truyền phải bảo đảm vô khuẩn để tránh đưa vi sinh vật trực tiếp vào tuần hoàn."
    }
  ]
},
{
  "id": 139,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 100,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Cần lưu ý sử dụng dịch truyền có chứa glucose",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Dùng loại có nồng độ thấp",
      "explanation": "Sai. “Dùng loại có nồng độ thấp” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch glucose ưu trương cần truyền chậm vì có thể gây kích ứng và viêm tắc tĩnh mạch tại chỗ."
    },
    {
      "key": "B",
      "text": "Truyền chậm để tránh làm viêm tắc",
      "explanation": "Đúng. Dung dịch glucose ưu trương cần truyền chậm vì có thể gây kích ứng và viêm tắc tĩnh mạch tại chỗ."
    },
    {
      "key": "C",
      "text": "Pha thêm muối để hấp thụ tốt hơn",
      "explanation": "Sai. “Pha thêm muối để hấp thụ tốt hơn” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch glucose ưu trương cần truyền chậm vì có thể gây kích ứng và viêm tắc tĩnh mạch tại chỗ."
    },
    {
      "key": "D",
      "text": "Bỏ dịch ra để bớt đặc",
      "explanation": "Sai. “Bỏ dịch ra để bớt đặc” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch glucose ưu trương cần truyền chậm vì có thể gây kích ứng và viêm tắc tĩnh mạch tại chỗ."
    }
  ]
},
{
  "id": 140,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 101,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "dịch cần truyền chậm để tránh gây viêm tắc tĩnh mạch",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Dịch đẳng trương",
      "explanation": "Sai. “Dịch đẳng trương” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch ưu trương cần truyền thận trọng/chậm do áp lực thẩm thấu cao và nguy cơ kích ứng tĩnh mạch."
    },
    {
      "key": "B",
      "text": "Dịch ưu trương",
      "explanation": "Đúng. Dung dịch ưu trương cần truyền thận trọng/chậm do áp lực thẩm thấu cao và nguy cơ kích ứng tĩnh mạch."
    },
    {
      "key": "C",
      "text": "Dịch nhược trương",
      "explanation": "Sai. “Dịch nhược trương” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch ưu trương cần truyền thận trọng/chậm do áp lực thẩm thấu cao và nguy cơ kích ứng tĩnh mạch."
    },
    {
      "key": "D",
      "text": "Dịch vitamin B12",
      "explanation": "Sai. “Dịch vitamin B12” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch ưu trương cần truyền thận trọng/chậm do áp lực thẩm thấu cao và nguy cơ kích ứng tĩnh mạch."
    }
  ]
},
{
  "id": 141,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 102,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "cần truyền dịch thay thế huyết tương khi",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Bị mất nước",
      "explanation": "Sai. “Bị mất nước” không phải lựa chọn phù hợp nhất cho câu này. Dịch thay thế huyết tương được dùng khi giảm thể tích tuần hoàn do mất máu/huyết tương; “mất máu nhẹ” phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "B",
      "text": "Bị sốc phản vệ",
      "explanation": "Sai. “Bị sốc phản vệ” không phải lựa chọn phù hợp nhất cho câu này. Dịch thay thế huyết tương được dùng khi giảm thể tích tuần hoàn do mất máu/huyết tương; “mất máu nhẹ” phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "C",
      "text": "Sốt cao liên tục",
      "explanation": "Sai. “Sốt cao liên tục” không phải lựa chọn phù hợp nhất cho câu này. Dịch thay thế huyết tương được dùng khi giảm thể tích tuần hoàn do mất máu/huyết tương; “mất máu nhẹ” phù hợp nhất trong các lựa chọn."
    },
    {
      "key": "D",
      "text": "Khi bị mất máu nhẹ",
      "explanation": "Đúng. Dịch thay thế huyết tương được dùng khi giảm thể tích tuần hoàn do mất máu/huyết tương; “mất máu nhẹ” phù hợp nhất trong các lựa chọn."
    }
  ]
},
{
  "id": 142,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 103,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nhược điểm khi sử dụng gelatin đã biến chất",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Cần xác định nhóm máu trước khi truyền",
      "explanation": "Sai. “Cần xác định nhóm máu trước khi truyền” không phải lựa chọn phù hợp nhất cho câu này. Một nhược điểm kinh điển của gelatin biến chất là không lưu giữ lâu trong tuần hoàn; phần lớn bị thải qua nước tiểu trong 24 giờ."
    },
    {
      "key": "B",
      "text": "Dễ gây phản ứng dị ứng",
      "explanation": "Sai. “Dễ gây phản ứng dị ứng” không phải lựa chọn phù hợp nhất cho câu này. Một nhược điểm kinh điển của gelatin biến chất là không lưu giữ lâu trong tuần hoàn; phần lớn bị thải qua nước tiểu trong 24 giờ."
    },
    {
      "key": "C",
      "text": "Thời gian lưu lại trong cơ thể ngắn",
      "explanation": "Đúng. Một nhược điểm kinh điển của gelatin biến chất là không lưu giữ lâu trong tuần hoàn; phần lớn bị thải qua nước tiểu trong 24 giờ."
    },
    {
      "key": "D",
      "text": "Khó bảo quản",
      "explanation": "Sai. “Khó bảo quản” không phải lựa chọn phù hợp nhất cho câu này. Một nhược điểm kinh điển của gelatin biến chất là không lưu giữ lâu trong tuần hoàn; phần lớn bị thải qua nước tiểu trong 24 giờ."
    }
  ],
  "keyNote": "Gelatin biến chất còn có thể gây phản ứng dị ứng/kháng nguyên, nên B cũng mô tả một nhược điểm. C được chọn vì khớp trực tiếp với nhược điểm “không giữ được lâu trong cơ thể” trong giáo trình."
},
{
  "id": 143,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 104,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "vai trò của việc truyền dung dịch dinh dưỡng",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Cân bằng điện giải",
      "explanation": "Sai. “Cân bằng điện giải” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch dinh dưỡng cung cấp năng lượng và chất nền khi người bệnh không thể được nuôi dưỡng đầy đủ qua đường tiêu hóa."
    },
    {
      "key": "B",
      "text": "Thay thế thể tích máu",
      "explanation": "Sai. “Thay thế thể tích máu” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch dinh dưỡng cung cấp năng lượng và chất nền khi người bệnh không thể được nuôi dưỡng đầy đủ qua đường tiêu hóa."
    },
    {
      "key": "C",
      "text": "Ngăn chặn chảy máu",
      "explanation": "Sai. “Ngăn chặn chảy máu” không phải lựa chọn phù hợp nhất cho câu này. Dung dịch dinh dưỡng cung cấp năng lượng và chất nền khi người bệnh không thể được nuôi dưỡng đầy đủ qua đường tiêu hóa."
    },
    {
      "key": "D",
      "text": "Cung cấp năng lượng khi bệnh nhân khổng thể ăn",
      "explanation": "Đúng. Dung dịch dinh dưỡng cung cấp năng lượng và chất nền khi người bệnh không thể được nuôi dưỡng đầy đủ qua đường tiêu hóa."
    }
  ]
},
{
  "id": 144,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 105,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Số câu đúng trong các câu sau đây\n(1) Chống chỉ định của thuốc celirlzine là quá mẫn với thuốc, phụ nữ có thai và cho con bú, trẻ em < 6 tuổi, suy thận\n(2) Nguyên tắc chung khi sử dụng thuốc chống dị ứng không được nhai, không tiêm dưới da, hạn chế tiêm tĩnh mạch, nếu cần nên tiêm bắp sâu\n(3) Cơ chế tác dụng của thuốc kháng histamin: tác dụng hiệp đồng với histamin",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "3",
      "explanation": "Sai. “3” không phải lựa chọn phù hợp nhất cho câu này. Theo bộ câu hỏi cùng nguồn: mệnh đề (1) và (2) được xem là đúng, còn (3) sai vì kháng histamin đối kháng chứ không hiệp đồng với histamin; vậy có 2 mệnh đề đúng."
    },
    {
      "key": "B",
      "text": "1",
      "explanation": "Sai. “1” không phải lựa chọn phù hợp nhất cho câu này. Theo bộ câu hỏi cùng nguồn: mệnh đề (1) và (2) được xem là đúng, còn (3) sai vì kháng histamin đối kháng chứ không hiệp đồng với histamin; vậy có 2 mệnh đề đúng."
    },
    {
      "key": "C",
      "text": "2",
      "explanation": "Đúng. Theo bộ câu hỏi cùng nguồn: mệnh đề (1) và (2) được xem là đúng, còn (3) sai vì kháng histamin đối kháng chứ không hiệp đồng với histamin; vậy có 2 mệnh đề đúng."
    },
    {
      "key": "D",
      "text": "0",
      "explanation": "Sai. “0” không phải lựa chọn phù hợp nhất cho câu này. Theo bộ câu hỏi cùng nguồn: mệnh đề (1) và (2) được xem là đúng, còn (3) sai vì kháng histamin đối kháng chứ không hiệp đồng với histamin; vậy có 2 mệnh đề đúng."
    }
  ],
  "keyNote": "File gốc không có đáp án. Đáp án C (2 mệnh đề đúng) được suy ra theo bộ câu hỏi nguồn tương tự và cơ chế kháng histamin."
},
{
  "id": 145,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 106,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "số câu đúng trong các phát biểu sau đây\n(1) Histamin nội sinh chứa trong tế bào mast, basophil.\n(2) Histidin khi vào cơ thể loại bỏ 1 nhóm CO2 tạo histamin\n(3) Cơ chế của thuốc kháng histamin đối kháng tương tranh thuận nghịch trên histamin tại thụ thể H1",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "3",
      "explanation": "Đúng. Cả ba phát biểu đều phù hợp: histamin dự trữ ở mast cell/basophil, tạo từ histidine bằng khử carboxyl, và thuốc H1 đối kháng cạnh tranh/ổn định thụ thể H1."
    },
    {
      "key": "B",
      "text": "1",
      "explanation": "Sai. “1” không phải lựa chọn phù hợp nhất cho câu này. Cả ba phát biểu đều phù hợp: histamin dự trữ ở mast cell/basophil, tạo từ histidine bằng khử carboxyl, và thuốc H1 đối kháng cạnh tranh/ổn định thụ thể H1."
    },
    {
      "key": "C",
      "text": "2",
      "explanation": "Sai. “2” không phải lựa chọn phù hợp nhất cho câu này. Cả ba phát biểu đều phù hợp: histamin dự trữ ở mast cell/basophil, tạo từ histidine bằng khử carboxyl, và thuốc H1 đối kháng cạnh tranh/ổn định thụ thể H1."
    },
    {
      "key": "D",
      "text": "0",
      "explanation": "Sai. “0” không phải lựa chọn phù hợp nhất cho câu này. Cả ba phát biểu đều phù hợp: histamin dự trữ ở mast cell/basophil, tạo từ histidine bằng khử carboxyl, và thuốc H1 đối kháng cạnh tranh/ổn định thụ thể H1."
    }
  ],
  "keyNote": "Cách diễn đạt “đối kháng tương tranh thuận nghịch” là cách trình bày giáo trình cổ điển; dược lý hiện đại thường mô tả nhiều H1 antihistamine là inverse agonist."
},
{
  "id": 146,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 107,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Bệnh nhân N. H. T bị ho khan vào ban đêm nên sử dụng thuốc kháng histamin H1",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Alimemazine",
      "explanation": "Đúng. Alimemazine (trimeprazine) là H1 thế hệ 1 có tác dụng an thần và giảm ho, được dùng cho ho khan chủ yếu về đêm trong một số chế phẩm."
    },
    {
      "key": "B",
      "text": "Promethazine",
      "explanation": "Sai. “Promethazine” không phải lựa chọn phù hợp nhất cho câu này. Alimemazine (trimeprazine) là H1 thế hệ 1 có tác dụng an thần và giảm ho, được dùng cho ho khan chủ yếu về đêm trong một số chế phẩm."
    },
    {
      "key": "C",
      "text": "Clorpheniramine",
      "explanation": "Sai. “Clorpheniramine” không phải lựa chọn phù hợp nhất cho câu này. Alimemazine (trimeprazine) là H1 thế hệ 1 có tác dụng an thần và giảm ho, được dùng cho ho khan chủ yếu về đêm trong một số chế phẩm."
    },
    {
      "key": "D",
      "text": "Cetirizine",
      "explanation": "Sai. “Cetirizine” không phải lựa chọn phù hợp nhất cho câu này. Alimemazine (trimeprazine) là H1 thế hệ 1 có tác dụng an thần và giảm ho, được dùng cho ho khan chủ yếu về đêm trong một số chế phẩm."
    }
  ]
},
{
  "id": 147,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 108,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "chỉ định khác của Cinnarizin ngoài dị ứng",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Kích thích thèm ăn",
      "explanation": "Sai. “Kích thích thèm ăn” không phải lựa chọn phù hợp nhất cho câu này. Cinnarizine còn được dùng trong chóng mặt/rối loạn tiền đình nhờ tác dụng trên hệ tiền đình và chẹn kênh canxi yếu."
    },
    {
      "key": "B",
      "text": "Rối loạn tiền đình",
      "explanation": "Đúng. Cinnarizine còn được dùng trong chóng mặt/rối loạn tiền đình nhờ tác dụng trên hệ tiền đình và chẹn kênh canxi yếu."
    },
    {
      "key": "C",
      "text": "Bệnh não gan",
      "explanation": "Sai. “Bệnh não gan” không phải lựa chọn phù hợp nhất cho câu này. Cinnarizine còn được dùng trong chóng mặt/rối loạn tiền đình nhờ tác dụng trên hệ tiền đình và chẹn kênh canxi yếu."
    },
    {
      "key": "D",
      "text": "Giảm mỡ máu",
      "explanation": "Sai. “Giảm mỡ máu” không phải lựa chọn phù hợp nhất cho câu này. Cinnarizine còn được dùng trong chóng mặt/rối loạn tiền đình nhờ tác dụng trên hệ tiền đình và chẹn kênh canxi yếu."
    }
  ]
},
{
  "id": 148,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 109,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "chỉ định của Fexofenadine",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Viêm mũi dị ứng",
      "explanation": "Đúng. Fexofenadine là H1 thế hệ 2 dùng cho viêm mũi dị ứng và mày đay."
    },
    {
      "key": "B",
      "text": "Kích thích thèm ăn",
      "explanation": "Sai. “Kích thích thèm ăn” không phải lựa chọn phù hợp nhất cho câu này. Fexofenadine là H1 thế hệ 2 dùng cho viêm mũi dị ứng và mày đay."
    },
    {
      "key": "C",
      "text": "Loét dạ dày",
      "explanation": "Sai. “Loét dạ dày” không phải lựa chọn phù hợp nhất cho câu này. Fexofenadine là H1 thế hệ 2 dùng cho viêm mũi dị ứng và mày đay."
    },
    {
      "key": "D",
      "text": "Sốt",
      "explanation": "Sai. “Sốt” không phải lựa chọn phù hợp nhất cho câu này. Fexofenadine là H1 thế hệ 2 dùng cho viêm mũi dị ứng và mày đay."
    }
  ]
},
{
  "id": 149,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 110,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Thuốc giảm đau là dẫn chất para-amino phenol",
  "answer": "D",
  "options": [
    {
      "key": "A",
      "text": "Meloxicam",
      "explanation": "Sai. “Meloxicam” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol (acetaminophen) là dẫn chất para-aminophenol có tác dụng giảm đau, hạ sốt."
    },
    {
      "key": "B",
      "text": "Methyl salicylat",
      "explanation": "Sai. “Methyl salicylat” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol (acetaminophen) là dẫn chất para-aminophenol có tác dụng giảm đau, hạ sốt."
    },
    {
      "key": "C",
      "text": "Diclofenac natri",
      "explanation": "Sai. “Diclofenac natri” không phải lựa chọn phù hợp nhất cho câu này. Paracetamol (acetaminophen) là dẫn chất para-aminophenol có tác dụng giảm đau, hạ sốt."
    },
    {
      "key": "D",
      "text": "Paracetamol",
      "explanation": "Đúng. Paracetamol (acetaminophen) là dẫn chất para-aminophenol có tác dụng giảm đau, hạ sốt."
    }
  ]
},
{
  "id": 150,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 111,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "meloxicam có thể dùng liều duy nhất trong ngày giúp thuận tiện cho bệnh nhân vì",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Tan nhiều trong mỡ",
      "explanation": "Sai. “Tan nhiều trong mỡ” không phải lựa chọn phù hợp nhất cho câu này. Meloxicam có thời gian bán thải tương đối dài nên thường có thể dùng một lần mỗi ngày."
    },
    {
      "key": "B",
      "text": "Thời gian bán thải ngắn",
      "explanation": "Sai. “Thời gian bán thải ngắn” không phải lựa chọn phù hợp nhất cho câu này. Meloxicam có thời gian bán thải tương đối dài nên thường có thể dùng một lần mỗi ngày."
    },
    {
      "key": "C",
      "text": "Thời gian bán thải dài",
      "explanation": "Đúng. Meloxicam có thời gian bán thải tương đối dài nên thường có thể dùng một lần mỗi ngày."
    },
    {
      "key": "D",
      "text": "Tác dụng chống viêm ít",
      "explanation": "Sai. “Tác dụng chống viêm ít” không phải lựa chọn phù hợp nhất cho câu này. Meloxicam có thời gian bán thải tương đối dài nên thường có thể dùng một lần mỗi ngày."
    }
  ]
},
{
  "id": 151,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 112,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "methyl saliclat được sử dụng dưới dạng cao dán, chủ yếu là do đặc tính:",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Có tác dụng làm mát da",
      "explanation": "Sai. “Có tác dụng làm mát da” không phải lựa chọn phù hợp nhất cho câu này. Methyl salicylate dùng ngoài da vì thấm qua da và tạo tác dụng giảm đau tại chỗ/counterirritant."
    },
    {
      "key": "B",
      "text": "Có khả năng gây kích ứng da",
      "explanation": "Sai. “Có khả năng gây kích ứng da” không phải lựa chọn phù hợp nhất cho câu này. Methyl salicylate dùng ngoài da vì thấm qua da và tạo tác dụng giảm đau tại chỗ/counterirritant."
    },
    {
      "key": "C",
      "text": "Dễ thấm qua da",
      "explanation": "Đúng. Methyl salicylate dùng ngoài da vì thấm qua da và tạo tác dụng giảm đau tại chỗ/counterirritant."
    },
    {
      "key": "D",
      "text": "Giúp bảo vệ da khỏi tác động của môi trường",
      "explanation": "Sai. “Giúp bảo vệ da khỏi tác động của môi trường” không phải lựa chọn phù hợp nhất cho câu này. Methyl salicylate dùng ngoài da vì thấm qua da và tạo tác dụng giảm đau tại chỗ/counterirritant."
    }
  ]
},
{
  "id": 152,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 113,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "tác dụng của INDOMETHACIN:",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Hạ acid uric",
      "explanation": "Sai. “Hạ acid uric” không phải lựa chọn phù hợp nhất cho câu này. Indomethacin là NSAID có tác dụng chống viêm, giảm đau và hạ sốt."
    },
    {
      "key": "B",
      "text": "Hạ sốt, giảm đau, chống viêm",
      "explanation": "Đúng. Indomethacin là NSAID có tác dụng chống viêm, giảm đau và hạ sốt."
    },
    {
      "key": "C",
      "text": "Diệt khuẩn",
      "explanation": "Sai. “Diệt khuẩn” không phải lựa chọn phù hợp nhất cho câu này. Indomethacin là NSAID có tác dụng chống viêm, giảm đau và hạ sốt."
    },
    {
      "key": "D",
      "text": "An thần, gây ngủ, chống co giật",
      "explanation": "Sai. “An thần, gây ngủ, chống co giật” không phải lựa chọn phù hợp nhất cho câu này. Indomethacin là NSAID có tác dụng chống viêm, giảm đau và hạ sốt."
    }
  ]
},
{
  "id": 153,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 114,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Tác dụng phụ của paracetamol khi dùng liều cao, kéo dài:",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "Hoại tử tế bào gan",
      "explanation": "Đúng. Quá liều hoặc dùng paracetamol liều cao kéo dài có thể gây độc gan và hoại tử tế bào gan."
    },
    {
      "key": "B",
      "text": "Viêm thận kẽ",
      "explanation": "Sai. “Viêm thận kẽ” không phải lựa chọn phù hợp nhất cho câu này. Quá liều hoặc dùng paracetamol liều cao kéo dài có thể gây độc gan và hoại tử tế bào gan."
    },
    {
      "key": "C",
      "text": "Rối loạn tiêu hóa",
      "explanation": "Sai. “Rối loạn tiêu hóa” không phải lựa chọn phù hợp nhất cho câu này. Quá liều hoặc dùng paracetamol liều cao kéo dài có thể gây độc gan và hoại tử tế bào gan."
    },
    {
      "key": "D",
      "text": "Giảm tiểu cầu",
      "explanation": "Sai. “Giảm tiểu cầu” không phải lựa chọn phù hợp nhất cho câu này. Quá liều hoặc dùng paracetamol liều cao kéo dài có thể gây độc gan và hoại tử tế bào gan."
    }
  ]
},
{
  "id": 154,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 115,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Ngộ độc cấp khi dùng paracetamol liều cao thường được điều trị đặc hiệu bằng:",
  "answer": "A",
  "options": [
    {
      "key": "A",
      "text": "N-Acetylcystenin",
      "explanation": "Đúng. N-acetylcysteine bổ sung glutathione và là thuốc giải độc đặc hiệu quan trọng trong ngộ độc paracetamol."
    },
    {
      "key": "B",
      "text": "Than hoạt tính",
      "explanation": "Sai. “Than hoạt tính” không phải lựa chọn phù hợp nhất cho câu này. N-acetylcysteine bổ sung glutathione và là thuốc giải độc đặc hiệu quan trọng trong ngộ độc paracetamol."
    },
    {
      "key": "C",
      "text": "Tanin",
      "explanation": "Sai. “Tanin” không phải lựa chọn phù hợp nhất cho câu này. N-acetylcysteine bổ sung glutathione và là thuốc giải độc đặc hiệu quan trọng trong ngộ độc paracetamol."
    },
    {
      "key": "D",
      "text": "Dầu parafin",
      "explanation": "Sai. “Dầu parafin” không phải lựa chọn phù hợp nhất cho câu này. N-acetylcysteine bổ sung glutathione và là thuốc giải độc đặc hiệu quan trọng trong ngộ độc paracetamol."
    }
  ]
},
{
  "id": 155,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 116,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "Nếu một người bị viêm khớp, acid uric máu tăng cao, nguyên nhân gây viêm thuộc loại:",
  "answer": "C",
  "options": [
    {
      "key": "A",
      "text": "Ngoại sinh",
      "explanation": "Sai. “Ngoại sinh” không phải lựa chọn phù hợp nhất cho câu này. Viêm do tinh thể urat hình thành từ rối loạn chuyển hóa acid uric là nguyên nhân nội sinh."
    },
    {
      "key": "B",
      "text": "Tự miễn",
      "explanation": "Sai. “Tự miễn” không phải lựa chọn phù hợp nhất cho câu này. Viêm do tinh thể urat hình thành từ rối loạn chuyển hóa acid uric là nguyên nhân nội sinh."
    },
    {
      "key": "C",
      "text": "Nội sinh",
      "explanation": "Đúng. Viêm do tinh thể urat hình thành từ rối loạn chuyển hóa acid uric là nguyên nhân nội sinh."
    },
    {
      "key": "D",
      "text": "Vật lý",
      "explanation": "Sai. “Vật lý” không phải lựa chọn phù hợp nhất cho câu này. Viêm do tinh thể urat hình thành từ rối loạn chuyển hóa acid uric là nguyên nhân nội sinh."
    }
  ]
},
{
  "id": 156,
  "source": "File 2: CÂU HỎI ÔN TẬP DƯỢC LÝ",
  "sourceQuestion": 117,
  "answerBasis": "Bổ sung theo kiến thức dược lý; file gốc không kèm đáp án",
  "question": "khi bị viêm không được",
  "answer": "B",
  "options": [
    {
      "key": "A",
      "text": "Tăng cường sức đề kháng",
      "explanation": "Sai. “Tăng cường sức đề kháng” không phải lựa chọn phù hợp nhất cho câu này. Không nên tự ý dùng kháng sinh liều cao khi bị viêm vì viêm không đồng nghĩa với nhiễm khuẩn và việc dùng sai làm tăng tác dụng phụ/kháng thuốc."
    },
    {
      "key": "B",
      "text": "Tự ý dùng kháng sinh liều cao",
      "explanation": "Đúng. Không nên tự ý dùng kháng sinh liều cao khi bị viêm vì viêm không đồng nghĩa với nhiễm khuẩn và việc dùng sai làm tăng tác dụng phụ/kháng thuốc."
    },
    {
      "key": "C",
      "text": "Diệt yếu tố gây viêm",
      "explanation": "Sai. “Diệt yếu tố gây viêm” không phải lựa chọn phù hợp nhất cho câu này. Không nên tự ý dùng kháng sinh liều cao khi bị viêm vì viêm không đồng nghĩa với nhiễm khuẩn và việc dùng sai làm tăng tác dụng phụ/kháng thuốc."
    },
    {
      "key": "D",
      "text": "Theo dõi và kìm hãm viêm khi cần",
      "explanation": "Sai. “Theo dõi và kìm hãm viêm khi cần” không phải lựa chọn phù hợp nhất cho câu này. Không nên tự ý dùng kháng sinh liều cao khi bị viêm vì viêm không đồng nghĩa với nhiễm khuẩn và việc dùng sai làm tăng tác dụng phụ/kháng thuốc."
    }
  ]
}
];
