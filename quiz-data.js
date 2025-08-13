// Hematology & Immunohematology Quiz Data
const quizData = [
    {
        question: "Which term describes a low white blood cell count?",
        options: ["Leukopenia", "Leukocytosis", "Leukemia", "Anemia"],
        answer: "Leukopenia"
    },
    {
        question: "Which term means high platelet count?",
        options: ["Thrombocytopenia", "Thrombocytosis", "Pancytopenia", "Anemia"],
        answer: "Thrombocytosis"
    },
    {
        question: "What is the first step of hemostasis after injury?",
        options: ["Coagulation cascade", "Platelet aggregation", "Vascular spasm", "Fibrinolysis"],
        answer: "Vascular spasm"
    },
    {
        question: "Which natural anticoagulant is produced by the body?",
        options: ["Antithrombin III", "Fibrinogen", "Collagen", "Plasmin"],
        answer: "Antithrombin III"
    },
    {
        question: "Which pathway is measured by PT/INR?",
        options: ["Intrinsic", "Extrinsic", "Common", "Fibrinolytic"],
        answer: "Extrinsic"
    },
    {
        question: "Which drug mainly prolongs APTT?",
        options: ["Warfarin", "Aspirin", "Heparin", "Clopidogrel"],
        answer: "Heparin"
    },
    {
        question: "What is the correct blood to anticoagulant ratio for a light blue tube?",
        options: ["9:1", "5:1", "3:1", "10:1"],
        answer: "9:1"
    },
    {
        question: "Platelet adhesion involves binding to which protein?",
        options: ["Collagen via vWF", "Fibrin", "Hemoglobin", "Albumin"],
        answer: "Collagen via vWF"
    },
    {
        question: "Which suffix is used for immature blood cells?",
        options: ["-cyte", "-blast", "-phage", "-globin"],
        answer: "-blast"
    },
    {
        question: "Which cell becomes a macrophage in tissues?",
        options: ["Neutrophil", "Monocyte", "Eosinophil", "Basophil"],
        answer: "Monocyte"
    },
    {
        question: "Which type of anemia is the most common worldwide?",
        options: ["Iron deficiency anemia", "Aplastic anemia", "Megaloblastic anemia", "Hemolytic anemia"],
        answer: "Iron deficiency anemia"
    },
    {
        question: "Thalassemia is caused by a defect in the production of which component?",
        options: ["Globin chains", "Heme group", "Platelet membrane", "WBC enzymes"],
        answer: "Globin chains"
    },
    {
        question: "Which class of antibody can cross the placenta?",
        options: ["IgG", "IgM", "IgA", "IgE"],
        answer: "IgG"
    },
    {
        question: "Which is a normal adult hemoglobin type?",
        options: ["HbA", "HbS", "HbC", "HbE"],
        answer: "HbA"
    },
    {
        question: "Which test is used to identify different hemoglobins?",
        options: ["Hemoglobin electrophoresis", "CBC", "ESR", "APTT"],
        answer: "Hemoglobin electrophoresis"
    },
    {
        question: "What does ESR measure?",
        options: ["RBC settling rate", "Oxygen binding", "Clotting time", "Plasma viscosity"],
        answer: "RBC settling rate"
    },
    {
        question: "Which malaria parasite species is most deadly?",
        options: ["P. falciparum", "P. vivax", "P. ovale", "P. malariae"],
        answer: "P. falciparum"
    },
    {
        question: "Where are RBCs recycled?",
        options: ["Spleen", "Kidneys", "Thymus", "Bone marrow"],
        answer: "Spleen"
    },
    {
        question: "What is the main oxygen-carrying protein in RBCs?",
        options: ["Hemoglobin", "Myoglobin", "Albumin", "Globulin"],
        answer: "Hemoglobin"
    },
    {
        question: "Which part of the coagulation cascade does warfarin affect?",
        options: ["Extrinsic", "Intrinsic", "Common", "Fibrinolysis"],
        answer: "Extrinsic"
    },
    {
        question: "Which part of the coagulation cascade does heparin affect?",
        options: ["Intrinsic", "Extrinsic", "Common", "Fibrinolysis"],
        answer: "Intrinsic"
    },
    {
        question: "What is the INR range for a patient on warfarin?",
        options: ["2.0–3.0", "0.8–1.2", "1.5–2.0", "3.5–4.0"],
        answer: "2.0–3.0"
    },
    {
        question: "What is the normal platelet count in adults?",
        options: ["150–400 ×10⁹/L", "4.0–11.0 ×10⁹/L", "4.5–5.9 ×10¹²/L", "0.5–2.0%"],
        answer: "150–400 ×10⁹/L"
    },
    {
        question: "Which WBC is most abundant in adults?",
        options: ["Neutrophils", "Lymphocytes", "Monocytes", "Basophils"],
        answer: "Neutrophils"
    },
    {
        question: "What is the fixative in Wright-Giemsa stain?",
        options: ["Methanol", "Acetone", "Ethanol", "Formalin"],
        answer: "Methanol"
    },
    {
        question: "Which stain is used for reticulocytes?",
        options: ["New methylene blue", "Eosin", "Hematoxylin", "Giemsa"],
        answer: "New methylene blue"
    },
    {
        question: "Which blood type has no ABO antibodies?",
        options: ["AB", "O", "A", "B"],
        answer: "AB"
    },
    {
        question: "Which blood type is the universal donor?",
        options: ["O-", "O+", "AB-", "AB+"],
        answer: "O-"
    },
    {
        question: "Which blood product is given for fibrinogen deficiency?",
        options: ["Cryoprecipitate", "Platelets", "RBCs", "Plasma"],
        answer: "Cryoprecipitate"
    },
    {
        question: "Which organ produces T lymphocytes?",
        options: ["Thymus", "Spleen", "Liver", "Lymph nodes"],
        answer: "Thymus"
    },
    {
        question: "Which antibody class is a pentamer?",
        options: ["IgM", "IgG", "IgA", "IgE"],
        answer: "IgM"
    },
    {
        question: "Which test monitors the intrinsic pathway?",
        options: ["APTT", "PT/INR", "Bleeding Time", "ESR"],
        answer: "APTT"
    },
    {
        question: "Which tube color is used for hematology tests?",
        options: ["Lavender", "Light blue", "Green", "Red"],
        answer: "Lavender"
    },
    {
        question: "Which protein binds platelets during aggregation?",
        options: ["Fibrinogen", "Collagen", "Albumin", "Hemoglobin"],
        answer: "Fibrinogen"
    },
    {
        question: "What condition shows variation in RBC size?",
        options: ["Anisocytosis", "Poikilocytosis", "Microcytosis", "Hypochromia"],
        answer: "Anisocytosis"
    },
    {
        question: "What condition shows variation in RBC shape?",
        options: ["Poikilocytosis", "Anisocytosis", "Macrocytosis", "Microcytosis"],
        answer: "Poikilocytosis"
    },
    {
        question: "Which coagulation factor is also called fibrin stabilizing factor?",
        options: ["XIII", "X", "I", "II"],
        answer: "XIII"
    },
    {
        question: "What is the normal adult hemoglobin range for women?",
        options: ["120–160 g/L", "140–180 g/L", "100–140 g/L", "160–200 g/L"],
        answer: "120–160 g/L"
    },
    {
        question: "What can cause a decreased ESR?",
        options: ["Polycythemia", "Infection", "Anemia", "Pregnancy"],
        answer: "Polycythemia"
    },
    {
        question: "Which blood product is given for thrombocytopenia?",
        options: ["Platelets", "Plasma", "RBCs", "Cryoprecipitate"],
        answer: "Platelets"
    },
    {
        question: "Which abnormal hemoglobin causes sickle cell disease?",
        options: ["HbS", "HbC", "HbE", "HbA2"],
        answer: "HbS"
    },
    {
        question: "What is the universal plasma donor type?",
        options: ["AB", "O", "A", "B"],
        answer: "AB"
    },
    {
        question: "What test is used to detect clot breakdown products?",
        options: ["D-Dimer", "APTT", "INR", "CBC"],
        answer: "D-Dimer"
    },
    {
        question: "Which organ filters blood and recycles RBCs?",
        options: ["Spleen", "Liver", "Kidney", "Thymus"],
        answer: "Spleen"
    },
    {
        question: "What is the main function of WBCs?",
        options: ["Immunity", "Oxygen transport", "Clotting", "Nutrient transport"],
        answer: "Immunity"
    },
    {
        question: "What is the main function of platelets?",
        options: ["Clotting", "Oxygen transport", "Immunity", "Hormone transport"],
        answer: "Clotting"
    },
    {
        question: "What is the medical term for high WBC count?",
        options: ["Leukocytosis", "Leukopenia", "Leukemia", "Pancytopenia"],
        answer: "Leukocytosis"
    },
    // New Blood Donation & Transfusion Questions
    {
        question: "How often can someone donate whole blood (WB) or components?",
        options: ["WB males: 56 days, WB females: 84 days, plasma: 7 days, platelets: 14 days", "WB males: 84 days, WB females: 56 days, plasma: 14 days, platelets: 7 days", "WB males: 30 days, WB females: 60 days, plasma: 7 days, platelets: 14 days", "WB males: 56 days, WB females: 84 days, plasma: 14 days, platelets: 28 days"],
        answer: "WB males: 56 days, WB females: 84 days, plasma: 7 days, platelets: 14 days"
    },
    {
        question: "Which of the following is a temporary deferral? (Select the best example)",
        options: ["Exposure to vCJD", "Chronic fatigue syndrome", "Recent tattoo or piercing", "High-risk activities"],
        answer: "Recent tattoo or piercing"
    },
    {
        question: "Which of the following is an indefinite deferral?",
        options: ["Low hemoglobin", "Pregnancy", "Epilepsy", "Exposure to vCJD"],
        answer: "Exposure to vCJD"
    },
    {
        question: "Which tests are performed on all donated units?",
        options: ["ABO & Rh, alloantibodies, syphilis, Hepatitis B & C, HIV 1 & 2", "ABO & Rh, vitamin D, liver enzymes, uric acid", "ABO & Rh, Hepatitis A, cholesterol, malaria", "ABO & Rh, tuberculosis, dengue, rubella"],
        answer: "ABO & Rh, alloantibodies, syphilis, Hepatitis B & C, HIV 1 & 2"
    },
    {
        question: "Which are the three methods of blood collection?",
        options: ["WB, plasmapheresis, plateletpheresis", "WB, leukopheresis, plasma exchange", "WB, cryoprecipitate extraction, plasma washing", "WB, autologous transfusion, plasma exchange"],
        answer: "WB, plasmapheresis, plateletpheresis"
    },
    {
        question: "How is the risk of bacterial contamination from donor skin reduced during collection?",
        options: ["Using antibiotics before donation", "Diverting first 40 mL of blood for testing", "Sterilizing all blood with UV light before transfusion", "Adding anticoagulants immediately"],
        answer: "Diverting first 40 mL of blood for testing"
    },
    {
        question: "What is the process of WB processing?",
        options: ["Filter WBCs first, freeze plasma, store RBCs in CPD", "Centrifuge WB, separate plasma/BC/RBC, add SAGM, leukoreduce", "Mix WB with SAGM, freeze whole unit, thaw before transfusion", "Freeze whole WB, separate during thaw"],
        answer: "Centrifuge WB, separate plasma/BC/RBC, add SAGM, leukoreduce"
    },
    {
        question: "What are irradiated products used for?",
        options: ["To kill bacteria in blood", "To prevent graft-vs-host disease", "To extend blood shelf life", "To prevent hemolysis"],
        answer: "To prevent graft-vs-host disease"
    },
    {
        question: "What is leukoreduction?",
        options: ["Freezing the blood to remove plasma", "Filtering the unit to remove WBCs", "Removing platelets from whole blood", "Irradiating the blood"],
        answer: "Filtering the unit to remove WBCs"
    },
    {
        question: "Which components can be made from whole blood?",
        options: ["RBCs, platelets, plasma, cryoprecipitate", "RBCs, plasma, stem cells, albumin", "RBCs, WBCs, fibrin glue", "RBCs, granulocytes, IVIG"],
        answer: "RBCs, platelets, plasma, cryoprecipitate"
    },
    {
        question: "Which are fractionated blood products?",
        options: ["Albumin, IVIG, prothrombin complex concentrate, Rh immune globulin", "RBCs, plasma, cryoprecipitate", "Platelets, stem cells, granulocytes", "Fibrinogen, fibrin glue, serum"],
        answer: "Albumin, IVIG, prothrombin complex concentrate, Rh immune globulin"
    },
    {
        question: "What additive is in a WB collection pack?",
        options: ["EDTA", "CPD anticoagulant", "Heparin", "Sodium citrate only"],
        answer: "CPD anticoagulant"
    },
    {
        question: "What is the use of SAGM additive?",
        options: ["Prevents clotting during storage", "Maintains RBC lifespan", "Increases plasma protein concentration", "Preserves platelets"],
        answer: "Maintains RBC lifespan"
    },
    {
        question: "What does RBC concentrate contain?",
        options: ["100 mL plasma, 50 mg SAGM", "29 mL plasma, 110 mg SAGM", "50 mL plasma, 100 mg CPD", "29 mL plasma, 50 mg SAGM"],
        answer: "29 mL plasma, 110 mg SAGM"
    },
    {
        question: "Storage requirements:",
        options: ["RBCs 1-6°C 42 days; Platelets 20-24°C 7 days; Plasma -18°C 12 months", "RBCs 4°C 28 days; Platelets room temp 3 days; Plasma frozen 6 months", "RBCs 1-6°C 60 days; Platelets 20°C 10 days; Plasma frozen 24 months", "RBCs 2°C 40 days; Platelets 25°C 5 days; Plasma frozen 1 year"],
        answer: "RBCs 1-6°C 42 days; Platelets 20-24°C 7 days; Plasma -18°C 12 months"
    },
    {
        question: "When are washed RBCs used?",
        options: ["For patients allergic to plasma proteins", "For HLA-matched patients", "For reversal of anticoagulation", "For platelet replacement"],
        answer: "For patients allergic to plasma proteins"
    },
    {
        question: "When are deglycerolized RBCs used?",
        options: ["For allergic patients", "For rare blood types or multiple antibodies", "For emergency transfusion only", "For massive hemorrhage"],
        answer: "For rare blood types or multiple antibodies"
    },
    {
        question: "When use apheresis platelets over pooled platelets?",
        options: ["Always for children", "For HLA-matched patients", "When platelet count is >150", "When leukoreduction is not possible"],
        answer: "For HLA-matched patients"
    },
    {
        question: "Indications for albumin:",
        options: ["To treat hemophilia", "Plasma volume expander in shock, hemorrhage", "Treat low platelet count", "Replace coagulation factors"],
        answer: "Plasma volume expander in shock, hemorrhage"
    },
    {
        question: "Indications for IVIG or SCIG:",
        options: ["Immunoglobulin deficiency, ITP, Guillain-Barré", "Hemophilia, aplastic anemia", "Chronic liver disease", "Autoimmune hemolytic anemia"],
        answer: "Immunoglobulin deficiency, ITP, Guillain-Barré"
    },
    {
        question: "What does PCC contain?",
        options: ["Factors II, VII, IX, X", "Factors I, V, VIII, XIII", "Only factor VIII", "Platelets and fibrinogen"],
        answer: "Factors II, VII, IX, X"
    },
    {
        question: "When to use PCC?",
        options: ["Volume expansion", "Reversal of warfarin, hemorrhage, surgery", "Treat anemia", "Immune suppression"],
        answer: "Reversal of warfarin, hemorrhage, surgery"
    },
    {
        question: "Indications for Rh immune globulin:",
        options: ["Prevent mom from developing anti-D antibodies", "Treat hemophilia", "Prevent graft-vs-host disease", "Boost immunity after measles exposure"],
        answer: "Prevent mom from developing anti-D antibodies"
    },
    {
        question: "What do stem cells do?",
        options: ["Repair damaged liver cells", "Repopulate bone marrow and form mature cells", "Produce plasma proteins", "Stimulate clot formation"],
        answer: "Repopulate bone marrow and form mature cells"
    },
    {
        question: "How is cord blood collected?",
        options: ["From mother's vein after delivery", "From placenta or umbilical cord after delivery", "From newborn heel stick", "From father's blood after birth"],
        answer: "From placenta or umbilical cord after delivery"
    },
    // New Laboratory & Immunohematology Questions
    {
        question: "Blood smears should be prepared from ____________ that is _____________ hours old.",
        options: ["Serum; 24 hrs", "EDTA blood; less than 2 hrs", "Heparin blood; less than 6 hrs", "Capillary blood; less than 8 hrs"],
        answer: "EDTA blood; less than 2 hrs"
    },
    {
        question: "The vacutainer collected for CBC is:",
        options: ["Blue top (sodium citrate)", "Lavender top (EDTA)", "Green top (heparin)", "Red top (no additive)"],
        answer: "Lavender top (EDTA)"
    },
    {
        question: "A WBC differential indicates:",
        options: ["Percentage of each type of WBC", "Hemoglobin concentration", "Platelet function", "Plasma protein levels"],
        answer: "Percentage of each type of WBC"
    },
    {
        question: "The test that detects abnormal hemoglobin molecules is:",
        options: ["Sickledex", "ESR", "MCV", "PT/INR"],
        answer: "Sickledex"
    },
    {
        question: "The test that measures average size of RBC is:",
        options: ["MCV", "MCH", "Hct", "ESR"],
        answer: "MCV"
    },
    {
        question: "Hct indicates:",
        options: ["% of blood volume occupied by RBC", "Plasma protein concentration", "RBC shape variation", "Oxygen-carrying capacity"],
        answer: "% of blood volume occupied by RBC"
    },
    {
        question: "The test indicating the ratio of RBC size to hemoglobin content is:",
        options: ["MCH", "MCHC", "Hgb", "MCV"],
        answer: "MCH"
    },
    {
        question: "The test that counts immature RBC in a liter of blood is:",
        options: ["Reticulocyte count", "ESR", "Hemoglobin", "Hematocrit"],
        answer: "Reticulocyte count"
    },
    {
        question: "The test that helps diagnose hemophilia B is:",
        options: ["Factor IX assay", "PT", "APTT", "Bleeding time"],
        answer: "Factor IX assay"
    },
    {
        question: "The test measuring multiple parameters including WBC and RBC is:",
        options: ["CBC", "ESR", "PT/INR", "Reticulocyte count"],
        answer: "CBC"
    },
    {
        question: "The test often ordered for patients on anticoagulants is:",
        options: ["PT/INR", "CBC", "ESR", "MCV"],
        answer: "PT/INR"
    },
    {
        question: "Why is heparin NOT used as an anticoagulant for hematology?",
        options: ["Interferes with staining and morphology", "Causes RBC destruction", "Destroys WBC", "Alters hemoglobin"],
        answer: "Interferes with staining and morphology"
    },
    {
        question: "A WBC count and APTT require which tubes?",
        options: ["Lavender & Blue", "Red & Green", "Blue & Yellow", "Lavender & Red"],
        answer: "Lavender & Blue"
    },
    {
        question: "Another name for HDN is:",
        options: ["Hemolytic disease of the newborn", "Sickle cell anemia", "Hemophilia", "Anemia of prematurity"],
        answer: "Hemolytic disease of the newborn"
    },
    {
        question: "Four routine tests in immunohematology include:",
        options: ["ABO, Rh, antibody screen, crossmatch", "ESR, MCV, MCH, Hct", "PT, APTT, INR, TT", "CBC, retic count, ESR, sickledex"],
        answer: "ABO, Rh, antibody screen, crossmatch"
    },
    {
        question: "Tests incubated at 37°C immediately after collection include:",
        options: ["DAT, antibody screen", "CBC, ESR", "PT/INR, APTT", "Osmotic fragility, MCV"],
        answer: "DAT, antibody screen"
    },
    {
        question: "Tube collected for crossmatch:",
        options: ["Pink top (EDTA)", "Blue top", "Green top", "Red top"],
        answer: "Pink top (EDTA)"
    },
    {
        question: "If stain deposits are seen on a film, you should:",
        options: ["Filter the stain", "Use new buffer only", "Make new film without staining", "Wash slide with water"],
        answer: "Filter the stain"
    },
    {
        question: "If a film is too long, next film should:",
        options: ["Use smaller drop and faster spread", "Larger drop and slower spread", "Use coverslip", "Delay drying"],
        answer: "Use smaller drop and faster spread"
    },
    {
        question: "Advantage & disadvantage of coverslip film technique:",
        options: ["Advantage – better morphology; Disadvantage – fragile", "Advantage – faster drying; Disadvantage – poor staining", "Advantage – lasts longer; Disadvantage – too thick", "Advantage – easy to store; Disadvantage – uneven cell distribution"],
        answer: "Advantage – better morphology; Disadvantage – fragile"
    },
    // Additional Comprehensive Hematology & Laboratory Questions
    {
        question: "Five characteristics of a good blood film include:",
        options: ["Even thickness, feathered edge, no streaks, covers 2/3 slide, cells evenly distributed", "Thick center, rough edges, visible streaks, covers full slide, cells clustered", "Variable thickness, smooth edges, some streaks, covers 1/2 slide, cells scattered", "Uniform thickness, jagged edges, no streaks, covers 1/3 slide, cells grouped"],
        answer: "Even thickness, feathered edge, no streaks, covers 2/3 slide, cells evenly distributed"
    },
    {
        question: "Old blood film cells appear:",
        options: ["Crenated and distorted", "Normal and healthy", "Larger and swollen", "Smaller and shrunken"],
        answer: "Crenated and distorted"
    },
    {
        question: "Giemsa stain films are prefixed because it:",
        options: ["Preserves cell morphology", "Speeds up staining", "Reduces cost", "Prevents contamination"],
        answer: "Preserves cell morphology"
    },
    {
        question: "If a film appears too pink after staining, you should:",
        options: ["Increase buffer or decrease staining time", "Decrease buffer or increase staining time", "Use different stain", "Make a new film"],
        answer: "Increase buffer or decrease staining time"
    },
    {
        question: "Three Romanowsky stains include:",
        options: ["Wright's, Giemsa, Leishman", "Hematoxylin, Eosin, Methylene blue", "Crystal violet, Safranin, Gram's iodine", "Acid-fast, Ziehl-Neelsen, Kinyoun"],
        answer: "Wright's, Giemsa, Leishman"
    },
    {
        question: "Reticulocytopenia indicates:",
        options: ["Bone marrow suppression or failure", "Increased RBC production", "Normal bone marrow function", "Iron deficiency"],
        answer: "Bone marrow suppression or failure"
    },
    {
        question: "Conditions monitored by ESR include:",
        options: ["Inflammatory diseases, infections, malignancy", "Diabetes, hypertension, heart disease", "Liver disease, kidney failure, anemia", "Obesity, smoking, alcohol use"],
        answer: "Inflammatory diseases, infections, malignancy"
    },
    {
        question: "Westergren method anticoagulants are:",
        options: ["Sodium citrate in tubes; EDTA in racks", "Heparin in tubes; EDTA in racks", "EDTA in tubes; citrate in racks", "Heparin in tubes; citrate in racks"],
        answer: "Sodium citrate in tubes; EDTA in racks"
    },
    {
        question: "Three ESR errors include:",
        options: ["Tilted tube, bubbles, vibration", "Wrong temperature, wrong time, wrong tube", "Old blood, wrong anticoagulant, wrong technique", "Wrong patient, wrong test, wrong result"],
        answer: "Tilted tube, bubbles, vibration"
    },
    {
        question: "Centrifugation settings for MicroHct are:",
        options: ["5 min @ 11,000–12,000 rpm", "10 min @ 3,000 rpm", "15 min @ 5,000 rpm", "20 min @ 1,000 rpm"],
        answer: "5 min @ 11,000–12,000 rpm"
    },
    {
        question: "MicroHct alignment - 100% is at:",
        options: ["Top of plasma", "Bottom of RBC", "Middle of buffy coat", "Top of buffy coat"],
        answer: "Top of plasma"
    },
    {
        question: "Three disorders with low Hct include:",
        options: ["Anemia, hemorrhage, leukemia", "Polycythemia, dehydration, heart disease", "Hypertension, diabetes, obesity", "Liver disease, kidney failure, cancer"],
        answer: "Anemia, hemorrhage, leukemia"
    },
    {
        question: "Two malaria errors include:",
        options: ["Too thick film, contaminated reagents", "Too thin film, clean reagents", "Wrong stain, wrong technique", "Wrong patient, wrong diagnosis"],
        answer: "Too thick film, contaminated reagents"
    },
    {
        question: "Two good thick film characteristics are:",
        options: ["Even layer, no streaks", "Thick center, rough edges", "Variable thickness, some streaks", "Thin edges, thick middle"],
        answer: "Even layer, no streaks"
    },
    {
        question: "MCH is measured in:",
        options: ["pg (picograms)", "fL (femtoliters)", "g/dL (grams per deciliter)", "mg/dL (milligrams per deciliter)"],
        answer: "pg (picograms)"
    },
    {
        question: "Coulter principle uses:",
        options: ["Electrical impedance to count/size cells; used in automated counters", "Light scattering to count cells; used in manual counts", "Fluorescence to identify cells; used in flow cytometry", "Colorimetry to measure hemoglobin; used in spectrophotometers"],
        answer: "Electrical impedance to count/size cells; used in automated counters"
    },
    {
        question: "FDP are:",
        options: ["Fibrin degradation products; used for DIC diagnosis", "Fibrinogen degradation products; used for hemophilia diagnosis", "Fibrinolytic drugs; used for clot prevention", "Fibrin stabilizing factors; used for clot formation"],
        answer: "Fibrin degradation products; used for DIC diagnosis"
    },
    {
        question: "Disorder mistaken for CML is:",
        options: ["Leukemoid reaction – because of high WBC with left shift", "Leukemia – because of low WBC with right shift", "Lymphoma – because of normal WBC count", "Anemia – because of low RBC count"],
        answer: "Leukemoid reaction – because of high WBC with left shift"
    },
    {
        question: "Result for ALL shows:",
        options: ["↑ lymphoblasts in blood/bone marrow", "↓ lymphocytes in blood/bone marrow", "↑ neutrophils in blood/bone marrow", "↓ neutrophils in blood/bone marrow"],
        answer: "↑ lymphoblasts in blood/bone marrow"
    },
    {
        question: "Diluting solution for blood cells is:",
        options: ["Isotonic saline", "Distilled water", "Hypotonic saline", "Hypertonic saline"],
        answer: "Isotonic saline"
    },
    {
        question: "Lysing reagent for Sickledex is:",
        options: ["Saponin", "Sodium hydroxide", "Acetic acid", "Formaldehyde"],
        answer: "Saponin"
    },
    {
        question: "AB+ blood has:",
        options: ["A, B, and D antigens; no antibodies", "A and B antigens only; no antibodies", "A, B, and D antigens; anti-O antibodies", "A and B antigens; anti-D antibodies"],
        answer: "A, B, and D antigens; no antibodies"
    },
    {
        question: "B antibodies and Rh factor indicate blood type:",
        options: ["A+", "B+", "AB+", "O+"],
        answer: "A+"
    },
    {
        question: "Four permanent donor deferrals include:",
        options: ["HIV, hepatitis, vCJD, IV drug use", "Diabetes, hypertension, heart disease, cancer", "Allergies, asthma, eczema, psoriasis", "Broken bones, surgery, pregnancy, tattoos"],
        answer: "HIV, hepatitis, vCJD, IV drug use"
    },
    {
        question: "Blood pH is:",
        options: ["7.35–7.45", "6.8–7.2", "7.0–7.4", "7.4–7.6"],
        answer: "7.35–7.45"
    },
    {
        question: "RBCs are described as:",
        options: ["Biconcave discs", "Spherical cells", "Oval cells", "Irregular shapes"],
        answer: "Biconcave discs"
    },
    {
        question: "Hemoglobin function is to:",
        options: ["Transport oxygen", "Fight infection", "Form clots", "Produce antibodies"],
        answer: "Transport oxygen"
    },
    {
        question: "Hgb + oxygen =",
        options: ["Oxyhemoglobin", "Carboxyhemoglobin", "Methemoglobin", "Deoxyhemoglobin"],
        answer: "Oxyhemoglobin"
    },
    {
        question: "Erythropoietin is a hormone that:",
        options: ["Stimulates RBC production", "Inhibits RBC production", "Destroys RBCs", "Transports RBCs"],
        answer: "Stimulates RBC production"
    },
    {
        question: "Heme breakdown produces:",
        options: ["Bilirubin", "Biliverdin", "Urobilinogen", "Stercobilin"],
        answer: "Bilirubin"
    },
    {
        question: "Iron from Hgb breakdown is:",
        options: ["Recycled to bone marrow", "Excreted in urine", "Stored in liver only", "Lost in feces"],
        answer: "Recycled to bone marrow"
    },
    {
        question: "Anucleate means:",
        options: ["No nucleus; applies to mature RBC", "Small nucleus; applies to immature RBC", "Large nucleus; applies to WBC", "Multiple nuclei; applies to megakaryocyte"],
        answer: "No nucleus; applies to mature RBC"
    },
    {
        question: "Platelet production is called:",
        options: ["Thrombopoiesis", "Erythropoiesis", "Leukopoiesis", "Megakaryopoiesis"],
        answer: "Thrombopoiesis"
    },
    {
        question: "Mast cell function is:",
        options: ["Histamine release; precursor: Basophil", "Antibody production; precursor: B cell", "Phagocytosis; precursor: Monocyte", "Oxygen transport; precursor: Erythroblast"],
        answer: "Histamine release; precursor: Basophil"
    },
    {
        question: "Macrophage function is:",
        options: ["Phagocytosis; precursor: Monocyte", "Antibody production; precursor: B cell", "Histamine release; precursor: Basophil", "Oxygen transport; precursor: Erythroblast"],
        answer: "Phagocytosis; precursor: Monocyte"
    },
    {
        question: "Anemia is defined as:",
        options: ["Low RBC, Hgb, or Hct", "High RBC, Hgb, or Hct", "Normal RBC, Hgb, or Hct", "Variable RBC, Hgb, or Hct"],
        answer: "Low RBC, Hgb, or Hct"
    },
    {
        question: "Hemoglobinopathy vs Thalassemia:",
        options: ["Hemoglobinopathy = Structural Hgb defect (e.g., sickle cell); Thalassemia = Reduced Hgb synthesis", "Hemoglobinopathy = Reduced Hgb synthesis; Thalassemia = Structural Hgb defect", "Both are structural defects", "Both are synthesis defects"],
        answer: "Hemoglobinopathy = Structural Hgb defect (e.g., sickle cell); Thalassemia = Reduced Hgb synthesis"
    },
    {
        question: "Microcytosis + hypochromasia indicates:",
        options: ["Iron deficiency anemia", "Vitamin B12 deficiency", "Folate deficiency", "Hemolytic anemia"],
        answer: "Iron deficiency anemia"
    },
    {
        question: "Three checks before auto-counter include:",
        options: ["Calibrate, controls, correct tubes", "Patient ID, test order, result", "Sample collection, processing, analysis", "Quality control, validation, reporting"],
        answer: "Calibrate, controls, correct tubes"
    },
    {
        question: "DIC tests include:",
        options: ["PT, APTT, fibrinogen; Tubes: Blue top", "CBC, ESR, CRP; Tubes: Lavender top", "Glucose, BUN, creatinine; Tubes: Red top", "Lipids, cholesterol, triglycerides; Tubes: Gray top"],
        answer: "PT, APTT, fibrinogen; Tubes: Blue top"
    },
    {
        question: "Factor assays require:",
        options: ["Blue top tubes", "Lavender top tubes", "Red top tubes", "Green top tubes"],
        answer: "Blue top tubes"
    },
    {
        question: "Hgb fractions test is:",
        options: ["Hemoglobin electrophoresis", "Complete blood count", "Reticulocyte count", "Osmotic fragility"],
        answer: "Hemoglobin electrophoresis"
    },
    {
        question: "Two reagents for APTT are:",
        options: ["Partial thromboplastin + calcium chloride", "Complete thromboplastin + calcium chloride", "Partial thromboplastin + sodium citrate", "Complete thromboplastin + sodium citrate"],
        answer: "Partial thromboplastin + calcium chloride"
    },
    {
        question: "Manual cell count reasons include:",
        options: ["Low count, instrument failure", "High count, instrument working", "Normal count, routine check", "Emergency count, fast result"],
        answer: "Low count, instrument failure"
    },
    {
        question: "Manual count errors include:",
        options: ["Dirty hemocytometer, wrong dilution, bubbles", "Clean hemocytometer, correct dilution, no bubbles", "Proper technique, good counting", "Accurate results, proper validation"],
        answer: "Dirty hemocytometer, wrong dilution, bubbles"
    },
    {
        question: "Sickledex reading time is:",
        options: ["6–20 minutes", "1–5 minutes", "21–30 minutes", "31–60 minutes"],
        answer: "6–20 minutes"
    },
    {
        question: "Donor unit needle is:",
        options: ["16-gauge; 450–500 mL blood", "18-gauge; 300–350 mL blood", "20-gauge; 200–250 mL blood", "22-gauge; 100–150 mL blood"],
        answer: "16-gauge; 450–500 mL blood"
    },
    {
        question: "Pernicious anemia treatment is:",
        options: ["Vitamin B12 injections", "Iron supplements", "Folate supplements", "Blood transfusions"],
        answer: "Vitamin B12 injections"
    },
    {
        question: "Chelation therapy:",
        options: ["Removes excess iron; used in iron overload", "Adds iron; used in iron deficiency", "Removes excess copper; used in Wilson's disease", "Adds copper; used in copper deficiency"],
        answer: "Removes excess iron; used in iron overload"
    },
    {
        question: "Water artefact shows:",
        options: ["Refractive rings in RBC; avoid by using dry slides", "Clear cells; avoid by using wet slides", "Stained cells; avoid by using clean slides", "Damaged cells; avoid by using new slides"],
        answer: "Refractive rings in RBC; avoid by using dry slides"
    },
    {
        question: "Plasmodium life cycle is:",
        options: ["Mosquito → liver → RBC → gametocytes", "Mosquito → RBC → liver → gametocytes", "Liver → mosquito → RBC → gametocytes", "RBC → liver → mosquito → gametocytes"],
        answer: "Mosquito → liver → RBC → gametocytes"
    },
    {
        question: "Malaria special steps include:",
        options: ["Thick & thin films, Giemsa stain", "Thin film only, Wright's stain", "Thick film only, Leishman stain", "No special steps needed"],
        answer: "Thick & thin films, Giemsa stain"
    },
    {
        question: "Sickle trait vs disease:",
        options: ["Trait = HbAS; Disease = HbSS; test: Hemoglobin electrophoresis", "Trait = HbSS; Disease = HbAS; test: Sickledex", "Trait = HbAA; Disease = HbSS; test: CBC", "Trait = HbSS; Disease = HbAA; test: Reticulocyte count"],
        answer: "Trait = HbAS; Disease = HbSS; test: Hemoglobin electrophoresis"
    },
    {
        question: "Test for RBC size range is:",
        options: ["RDW", "MCV", "MCH", "MCHC"],
        answer: "RDW"
    },
    {
        question: "Wright's stain colors - Red:",
        options: ["Eosinophil granules", "Nucleus", "Neutrophil granules", "Basophil granules"],
        answer: "Eosinophil granules"
    },
    {
        question: "Granulocyte precursors include:",
        options: ["Myeloblast, promyelocyte, myelocyte", "Lymphoblast, prolymphocyte, lymphocyte", "Monoblast, promonocyte, monocyte", "Erythroblast, normoblast, reticulocyte"],
        answer: "Myeloblast, promyelocyte, myelocyte"
    },
    {
        question: "Agranulocytes are:",
        options: ["Lymphocytes, monocytes", "Neutrophils, eosinophils", "Basophils, mast cells", "All WBCs"],
        answer: "Lymphocytes, monocytes"
    },
    {
        question: "Not from myeloid stem cell:",
        options: ["Lymphocyte", "Neutrophil", "Eosinophil", "Basophil"],
        answer: "Lymphocyte"
    },
    {
        question: "Neutrophils are active in:",
        options: ["Bacterial infections", "Viral infections", "Parasitic infections", "Fungal infections"],
        answer: "Bacterial infections"
    },
    {
        question: "Lymphocytes are active in:",
        options: ["Viral infections", "Bacterial infections", "Parasitic infections", "Fungal infections"],
        answer: "Viral infections"
    },
    {
        question: "Atypical lymphocytes are seen in:",
        options: ["Infectious mononucleosis", "Bacterial pneumonia", "Viral hepatitis", "Fungal infection"],
        answer: "Infectious mononucleosis"
    },
    {
        question: "WBCs performing phagocytosis include:",
        options: ["Neutrophils, monocytes/macrophages", "Lymphocytes, plasma cells", "Basophils, mast cells", "Eosinophils, basophils"],
        answer: "Neutrophils, monocytes/macrophages"
    },
    {
        question: "WBC acting as suppressor is:",
        options: ["T-suppressor lymphocyte", "B lymphocyte", "Natural killer cell", "Plasma cell"],
        answer: "T-suppressor lymphocyte"
    },
    {
        question: "WBC secreting heparin is:",
        options: ["Basophil", "Neutrophil", "Eosinophil", "Monocyte"],
        answer: "Basophil"
    },
    {
        question: "% blood plasma is:",
        options: ["55%", "45%", "65%", "35%"],
        answer: "55%"
    },
    {
        question: "Plasma proteins include:",
        options: ["Albumin (osmotic pressure), globulins (immunity), fibrinogen (clotting)", "Hemoglobin (oxygen transport), myoglobin (muscle oxygen), transferrin (iron transport)", "Insulin (glucose control), glucagon (glucose release), cortisol (stress response)", "Thyroxine (metabolism), calcitonin (calcium), parathyroid hormone (calcium)"],
        answer: "Albumin (osmotic pressure), globulins (immunity), fibrinogen (clotting)"
    },
    {
        question: "Extravascular coagulation components include:",
        options: ["Tissue factor, vessel wall", "Platelets, fibrinogen", "Calcium, vitamin K", "Heparin, antithrombin"],
        answer: "Tissue factor, vessel wall"
    },
    {
        question: "Test for vascular coagulation issues is:",
        options: ["Bleeding time", "PT/INR", "APTT", "Fibrinogen"],
        answer: "Bleeding time"
    },
    {
        question: "Platelets are produced by:",
        options: ["Megakaryocyte", "Erythroblast", "Myeloblast", "Lymphoblast"],
        answer: "Megakaryocyte"
    },
    {
        question: "Platelet functions include:",
        options: ["Clot formation, vessel repair, growth factor release", "Oxygen transport, carbon dioxide removal, pH regulation", "Antibody production, cell-mediated immunity, cytokine release", "Hormone production, enzyme secretion, waste removal"],
        answer: "Clot formation, vessel repair, growth factor release"
    },
    {
        question: "Platelet secretions include:",
        options: ["ADP, thromboxane A2", "Insulin, glucagon", "Thyroxine, calcitonin", "Epinephrine, norepinephrine"],
        answer: "ADP, thromboxane A2"
    },
    {
        question: "TTP occurs in:",
        options: ["Adults; HUS occurs in children", "Children; HUS occurs in adults", "Both adults and children", "Neither adults nor children"],
        answer: "Adults; HUS occurs in children"
    },
    {
        question: "Hemophilia A is:",
        options: ["Factor VIII deficiency; test: APTT", "Factor IX deficiency; test: PT", "Factor VII deficiency; test: PT", "Factor V deficiency; test: APTT"],
        answer: "Factor VIII deficiency; test: APTT"
    },
    {
        question: "Hemophilia treatment is:",
        options: ["Factor VIII concentrate", "Vitamin K", "Fresh frozen plasma", "Platelets"],
        answer: "Factor VIII concentrate"
    },
    {
        question: "Plasminolytic system is:",
        options: ["Breakdown of fibrin clots", "Formation of fibrin clots", "Prevention of clot formation", "Stabilization of clots"],
        answer: "Breakdown of fibrin clots"
    },
    {
        question: "Hemostasis is:",
        options: ["Stopping bleeding", "Starting bleeding", "Preventing clotting", "Dissolving clots"],
        answer: "Stopping bleeding"
    },
    {
        question: "Vitamin K role is:",
        options: ["Synthesis of factors II, VII, IX, X", "Synthesis of factors I, V, VIII, XIII", "Synthesis of factors XI, XII, prekallikrein, HMWK", "Synthesis of fibrinogen, prothrombin, antithrombin"],
        answer: "Synthesis of factors II, VII, IX, X"
    },
    {
        question: "Serum = plasma:",
        options: ["Without fibrinogen", "With fibrinogen", "Without albumin", "With albumin"],
        answer: "Without fibrinogen"
    },
    {
        question: "Plasma cells =",
        options: ["Mature B lymphocytes producing antibodies", "Immature B lymphocytes", "T lymphocytes", "Natural killer cells"],
        answer: "Mature B lymphocytes producing antibodies"
    },
    {
        question: "Reverse grouping agglutination with A cells & B cells =",
        options: ["AB blood group", "O blood group", "A blood group", "B blood group"],
        answer: "AB blood group"
    },
    {
        question: "Rh+ antigen is:",
        options: ["D antigen; Rh- may have anti-D antibody", "C antigen; Rh- may have anti-C antibody", "E antigen; Rh- may have anti-E antibody", "c antigen; Rh- may have anti-c antibody"],
        answer: "D antigen; Rh- may have anti-D antibody"
    },
    {
        question: "Coagulation cascade includes factors:",
        options: ["I–XIII with alternate names", "I–X with no alternate names", "I–VIII with some alternate names", "I–XII with few alternate names"],
        answer: "I–XIII with alternate names"
    }
];
