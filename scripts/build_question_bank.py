# -*- coding: utf-8 -*-
"""
Curates verified SIMPIC-grade questions directly from Murray 9th Ed and Jawetz 28th Ed
with exhaustive per-option rationales, high-yield pearls, and Latin binomial tags.
"""
import json

questions = [
    # --- BACTERIOLOGY: GRAM-POSITIVE COCCI ---
    {
        "id": "SIMPIC-BAC-001",
        "stem": "A 23-year-old woman is brought to the emergency department with a 12-hour history of high fever (39.5°C), diffuse macular erythroderma resembling a severe sunburn, vomiting, and profound hypotension (blood pressure 75/40 mmHg). She is currently on day 3 of her menstrual cycle and uses high-absorbency tampons. Laboratory investigations reveal elevated blood urea nitrogen, creatinine, alanine aminotransferase, and a platelet count of 65,000/µL. Blood cultures remain sterile. Which of the following best describes the molecular mechanism of the bacterial toxin primarily responsible for this patient's condition?",
        "options": [
            "Inactivation of eukaryotic elongation factor 2 (EF-2) via ADP-ribosylation",
            "Simultaneous cross-linking of the TCR Vβ domain and MHC class II without antigen processing",
            "Cleavage of desmoglein-1 in the stratum granulosum of the epidermis",
            "Inhibition of presynaptic vesicle fusion via zinc-dependent endopeptidase cleavage of SNARE proteins",
            "Direct degradation of cell membrane phospholipids through lecithinase activity"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. ADP-ribosylation of EF-2 is the mechanism of Diphtheria toxin (Corynebacterium diphtheriae) and Exotoxin A (Pseudomonas aeruginosa), halting eukaryotic ribosomal protein synthesis.",
            1: "Correct. Toxic Shock Syndrome Toxin-1 (TSST-1) produced by Staphylococcus aureus acts as a superantigen that bridges the variable beta (Vβ) domain of the T-cell receptor (TCR) to the alpha chain of MHC class II molecules on antigen-presenting cells outside the normal peptide-binding groove. This leads to massive, uncontrolled activation of up to 20% of peripheral CD4+ T lymphocytes, triggering a systemic cytokine storm of IL-1, IL-2, TNF-alpha, and IFN-gamma that drives refractory distributive shock and multiorgan dysfunction.",
            2: "Incorrect. Cleavage of desmoglein-1 (a cadherin cell adhesion molecule) is mediated by exfoliative toxins A and B of Staphylococcus aureus, resulting in Staphylococcal Scalded Skin Syndrome (SSSS / Ritter disease) or bullous impetigo, rather than hypotension and toxic shock.",
            3: "Incorrect. Cleavage of SNARE complexes (synaptobrevin, SNAP-25, syntaxin) is the mechanism of Botulinum neurotoxin (Clostridium botulinum) and Tetanospasmin (Clostridium tetani).",
            4: "Incorrect. Lecithinase (alpha toxin / phospholipase C) is the primary cytotoxic toxin of Clostridium perfringens causing gas gangrene and massive intravascular hemolysis."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 18: Staphylococcus and Related Gram-Positive Cocci",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "TSST-1 is a superantigen: TCR Vβ + MHC Class II external cross-linking -> massive IL-1, IL-2, TNF-α release.",
            "Blood cultures in staphylococcal TSS are frequently NEGATIVE because disease is caused by toxemia rather than systemic bacteremia.",
            "Desquamation typically occurs 1 to 2 weeks after disease onset, characteristically involving palms and soles."
        ],
        "latinNames": ["Staphylococcus aureus", "Corynebacterium diphtheriae", "Pseudomonas aeruginosa", "Clostridium botulinum", "Clostridium tetani", "Clostridium perfringens"],
        "caseVignette": True,
        "tags": ["TSS", "Superantigen", "Toxicology", "Staphylococcus"}
    },
    {
        "id": "SIMPIC-BAC-002",
        "stem": "Four hours after attending an office picnic where cold potato salad, roasted ham, and custard pastries were served, a 34-year-old man develops abrupt-onset severe nausea, intractable vomiting, and abdominal cramps without fever. He denies hematemesis or diarrhea. Which of the following characteristics best explains why this condition occurred despite reheating the contaminated food prior to consumption?",
        "options": [
            "Formation of heat-resistant endospores that survive boiling and germinate rapidly at room temperature",
            "Production of an 8-kDa preformed enterotoxin that is stable to heating at 100°C for 30 minutes",
            "In vivo colonization and multiplication within small intestinal enterocytes producing heat-labile toxin",
            "Rapid bacterial proliferation in the absence of salt due to obligate stenohaline requirements",
            "Toxin synthesis triggered exclusively by low anaerobic oxidation-reduction potential in meat dishes"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Endospore germination with heat-resistant spores is characteristic of Bacillus cereus and Clostridium perfringens, not Staphylococcus aureus (which is a non-spore-forming coccus).",
            1: "Correct. Staphylococcal food poisoning is caused by ingestion of preformed heat-stable enterotoxins (primarily enterotoxin A). These low-molecular-weight proteins are remarkably resistant to boiling at 100°C for up to 30 minutes as well as gastric acid and duodenal enzymes (pepsin, trypsin). Thus, reheating food will destroy the vegetative staphylococci but leave the heat-stable enterotoxin intact to stimulate vagal afferents and the emetic chemoreceptor trigger zone in the CNS.",
            2: "Incorrect. In vivo colonization with toxin production characterizes Vibrio cholerae and Enterotoxigenic E. coli (ETEC), which have a longer incubation period (12–72 hours), whereas staphylococcal food intoxication has a rapid incubation of 1–6 hours.",
            3: "Incorrect. S. aureus is halotolerant (facultative halophile) and grows robustly in high salt concentrations (up to 7.5–10% NaCl, as utilized in Mannitol Salt Agar), which allows it to overgrow in cured hams and salted meats.",
            4: "Incorrect. S. aureus is a facultative anaerobe, whereas strict low oxidation-reduction potential is required by obligate anaerobes like Clostridium botulinum."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 18: Staphylococcus and Related Gram-Positive Cocci",
        "subject": "Bacteriology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Rapid onset (1–6 hours, average 4h) vomiting after picnic/custard/mayo = S. aureus preformed enterotoxin A.",
            "Antibiotics are completely INEFFECTIVE because the pathology is a pure food intoxication, not an active infection.",
            "Salt tolerance (7.5% NaCl) on Mannitol Salt Agar isolates S. aureus from mixed samples."
        ],
        "latinNames": ["Staphylococcus aureus", "Bacillus cereus", "Clostridium perfringens", "Vibrio cholerae", "Escherichia coli"],
        "caseVignette": True,
        "tags": ["Food Poisoning", "Enterotoxin", "Exotoxin"}
    },
    {
        "id": "SIMPIC-BAC-003",
        "stem": "An isolate of Staphylococcus aureus obtained from a blood culture of a 58-year-old man with septic arthritis demonstrates resistance to oxacillin, nafcillin, and cefazolin. What is the fundamental genetic and biochemical mechanism mediating this broad beta-lactam resistance?",
        "options": [
            "Overexpression of a plasmid-encoded TEM-1 beta-lactamase hydrolyzing the beta-lactam ring",
            "Acquisition of the mecA gene encoding penicillin-binding protein 2a (PBP2a) with low affinity for beta-lactams",
            "Point mutation in the gyrA gene preventing antibiotic binding to DNA topoisomerase II",
            "Methylation of 23S ribosomal RNA mediated by the erm gene causing ribosomal conformational change",
            "Active efflux pump encoded by the tetK determinant pumping lipophilic beta-lactams out of the cytoplasm"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Beta-lactamase (penicillinase) production confers resistance to penicillin G and ampicillin, but oxacillin, nafcillin, and cefazolin are beta-lactamase-resistant penicillins and cephalosporins unaffected by standard TEM-1 beta-lactamase.",
            1: "Correct. Methicillin resistance in S. aureus (MRSA) is mediated by the chromosomal acquisition of the mecA gene (carried on the Staphylococcal Cassette Chromosome mec [SCCmec]). mecA encodes Penicillin-Binding Protein 2a (PBP2a), an altered transpeptidase that possesses exceptionally low binding affinity for virtually all conventional beta-lactams (penicillins, cephalosporins, and carbapenems), enabling ongoing peptidoglycan cell wall cross-linking despite high drug concentrations.",
            2: "Incorrect. gyrA mutations mediate resistance to fluoroquinolones (ciprofloxacin, levofloxacin) by altering the DNA gyrase A subunit.",
            3: "Incorrect. Methylation of the 23S rRNA subunit via erm (erythromycin ribosome methylase) gene encodes the MLSB resistance phenotype (macrolides, lincosamides, streptogramin B).",
            4: "Incorrect. Active efflux via tetK confers resistance to tetracyclines, not beta-lactam antibiotics."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 13: The Staphylococci",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "MRSA = mecA gene on SCCmec -> PBP2a transpeptidase with low affinity for beta-lactams.",
            "5th generation cephalosporins (ceftaroline, ceftobiprole) are specially designed to bind PBP2a.",
            "Vancomycin, daptomycin, and linezolid remain core therapeutic options for invasive MRSA."
        ],
        "latinNames": ["Staphylococcus aureus"],
        "caseVignette": True,
        "tags": ["MRSA", "Antibiotic Resistance", "PBP2a", "mecA"}
    },
    {
        "id": "SIMPIC-BAC-004",
        "stem": "A 9-year-old boy is brought to the clinic due to sudden development of dark 'tea-colored' urine, facial periorbital edema, and elevated blood pressure (135/88 mmHg). Three weeks ago, he had multiple honey-colored crusted pustules on his perioral face that cleared without treatment. Urinalysis demonstrates moderate proteinuria, dysmorphic red blood cells, and RBC casts. What bacterial virulence factor is primarily responsible for the molecular mimicry and immune-complex deposition in this glomerulopathy?",
        "options": [
            "Streptolysin O mediating direct pore-forming lysis of glomerular capillary podocytes",
            "M protein (specifically nephritogenic types 12, 49) eliciting circulating immune complexes and in situ antigen deposition",
            "Pyrogenic exotoxin A acting as a systemic superantigen causing renal endothelial apoptosis",
            "Hyaluronic acid capsule activating alternative complement pathway with consumption of factor B",
            "Streptokinase converting plasminogen to plasmin and degrading the glomerular basement membrane"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Streptolysin O is an oxygen-labile, cholesterol-binding hemolysin that forms pores in erythrocytes and host cells. Antistreptolysin O (ASO) titers are useful after pharyngitis but are often blunted following skin impetigo because skin cholesterol irreversibly inactivates streptolysin O.",
            1: "Correct. Poststreptococcal glomerulonephritis (PSGN) is a Type III hypersensitivity reaction triggered by nephritogenic strains of Streptococcus pyogenes (Group A Strep, expressing specific M protein serotypes such as M types 12 and 49, as well as SpeB and NAPlr). These antigens form immune complexes that deposit subepithelially along the glomerular basement membrane, producing classic 'lumpy-bumpy' starry-sky granular immunofluorescence for IgG and C3, and subepithelial 'humps' on electron microscopy.",
            2: "Incorrect. Streptococcal pyrogenic exotoxin A (SpeA) acts as a superantigen responsible for Streptococcal Toxic Shock Syndrome (STSS) and scarlet fever rash, not immune-complex glomerulonephritis.",
            3: "Incorrect. Hyaluronic acid capsule is non-immunogenic because hyaluronic acid is structurally identical to human connective tissue ground substance, serving as an anti-phagocytic disguise rather than triggering immune complexes.",
            4: "Incorrect. Streptokinase dissolves fibrin clots by converting plasminogen to plasmin; it does not trigger glomerular immune complexes."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 19: Streptococcus and Enterococcus",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "PSGN can occur after BOTH pharyngitis and impetigo; Acute Rheumatic Fever occurs ONLY after pharyngitis.",
            "Antibiotic treatment of impetigo does NOT reliably prevent PSGN (in contrast to ARF, which is prevented by penicillin for pharyngitis).",
            "Anti-DNase B is the most sensitive serologic marker for prior streptococcal skin infections (impetigo)."
        ],
        "latinNames": ["Streptococcus pyogenes"],
        "caseVignette": True,
        "tags": ["Group A Strep", "PSGN", "M Protein", "Glomerulonephritis"}
    },
    {
        "id": "SIMPIC-BAC-005",
        "stem": "A 68-year-old man presents with sudden-onset shaking chills, high fever, pleuritic chest pain, and productive cough with rust-colored sputum. A Gram stain of the sputum demonstrates numerous Gram-positive, lancet-shaped diplococci surrounded by a clear halo. On sheep blood agar, the colonies exhibit alpha-hemolysis. Which pair of laboratory diagnostic tests would definitively confirm this pathogen and distinguish it from viridans group streptococci?",
        "options": [
            "Bacitracin susceptibility and positive PYR (pyrrolidonyl arylamidase) test",
            "Optochin (ethylhydrocupreine) susceptibility and bile solubility (sodium deoxycholate lysis)",
            "Hippurate hydrolysis and positive CAMP test with beta-lysin synergy",
            "Bile esculin hydrolysis and ability to grow in 6.5% sodium chloride broth",
            "Catalase positivity and tube coagulase plasma clot formation"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Bacitracin sensitivity and PYR positive identify Streptococcus pyogenes (Group A Strep).",
            1: "Correct. Streptococcus pneumoniae is alpha-hemolytic, optochin (P disk / ethylhydrocupreine hydrochloride) sensitive (zone of inhibition >= 14 mm), and bile soluble (addition of 10% sodium deoxycholate activates bacterial autolysins, rapidly clearing the turbid suspension). In contrast, viridans group streptococci (e.g., S. mitis, S. mutans) are optochin resistant and bile insoluble.",
            2: "Incorrect. Hippurate hydrolysis positive and CAMP positive identify Streptococcus agalactiae (Group B Strep), which produces an arrowhead zone of synergistic beta-hemolysis when streaked perpendicularly to Staphylococcus aureus on sheep blood agar.",
            3: "Incorrect. Bile esculin positive (black slant) and tolerance to 6.5% NaCl identify Enterococcus faecalis and Enterococcus faecium, distinguishing them from Streptococcus gallolyticus (S. bovis), which is bile esculin positive but fails to grow in 6.5% NaCl.",
            4: "Incorrect. Catalase positive and coagulase positive define Staphylococcus aureus, whereas all streptococci are catalase-negative."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 14: The Streptococci, Enterococci, and Related Genera",
        "subject": "Bacteriology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "S. pneumoniae: Lancet-shaped Gram-positive diplococci, alpha-hemolytic, Optochin sensitive, Bile soluble.",
            "Major virulence factor is its polysaccharide capsule (evaluated via Quellung reaction / capsular swelling).",
            "Rust-colored sputum is due to alveolar intra-alveolar hemorrhage in red hepatization stage."
        ],
        "latinNames": ["Streptococcus pneumoniae", "Streptococcus pyogenes", "Streptococcus agalactiae", "Enterococcus faecalis", "Enterococcus faecium", "Staphylococcus aureus", "Streptococcus gallolyticus", "Streptococcus mitis", "Streptococcus mutans"],
        "caseVignette": True,
        "tags": ["Pneumococcus", "Diagnostics", "Optochin", "Bile Solubility"}
    },

    # --- BACTERIOLOGY: GRAM-POSITIVE BACILLI & SPORE FORMERS ---
    {
        "id": "SIMPIC-BAC-006",
        "stem": "A 42-year-old cattle rancher presents with a painless, rapidly enlarging erythematous papule on his right forearm that has developed into a central 3-cm necrotic ulcer covered by a thick, coal-black eschar surrounded by non-pitting gelatinous edema. Gram stain reveals large Gram-positive, boxcar-shaped bacilli in chains. Culture on blood agar yields non-hemolytic colonies with a tenacious, 'medusa-head' appearance. What unique component of this pathogen's antiphagocytic capsule sets it apart from virtually all other bacterial capsules?",
        "options": [
            "High-molecular-weight hyaluronic acid identical to host ground substance",
            "Poly-D-glutamic acid polypeptide rather than a polysaccharide matrix",
            "Polysialic acid polymers resembling human neural cell adhesion molecules",
            "Polyribosylribitol phosphate (PRP) repeating pentose phosphodiester units",
            "K1 capsular antigen composed of repeating polymers of N-acetylneuraminic acid"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Hyaluronic acid capsule is unique to Streptococcus pyogenes (Group A Strep), allowing it to evade immune surveillance via non-immunogenicity.",
            1: "Correct. Bacillus anthracis possesses a unique capsule composed of poly-D-glutamic acid (a polypeptide polymer encoded on plasmid pXO2), rather than polysaccharide. Because it consists of D-amino acid residues, it resists host proteolytic enzymes and completely inhibits phagocytosis by polymorphonuclear leukocytes.",
            2: "Incorrect. Polysialic acid capsules are found in Neisseria meningitidis serogroup B and E. coli K1.",
            3: "Incorrect. Polyribosylribitol phosphate (PRP) is the type b capsular polysaccharide of Haemophilus influenzae.",
            4: "Incorrect. K1 capsular antigen of neurotropic E. coli is composed of alpha-2,8-linked polysialic acid, responsible for neonatal meningitis."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 11: Spore-Forming Gram-Positive Bacilli: Bacillus and Clostridium Species",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "Bacillus anthracis is the ONLY bacterium with a protein/polypeptide capsule (poly-D-glutamate, plasmid pXO2).",
            "Tripartite exotoxin (plasmid pXO1): Protective Antigen (PA, binding), Edema Factor (EF, adenylate cyclase), Lethal Factor (LF, zinc metalloprotease cleaving MAPKK).",
            "Cutaneous anthrax = painless black eschar ('anthrax' = Greek for coal) with extensive gelatinous edema."
        ],
        "latinNames": ["Bacillus anthracis", "Streptococcus pyogenes", "Neisseria meningitidis", "Haemophilus influenzae", "Escherichia coli"],
        "caseVignette": True,
        "tags": ["Anthrax", "Capsule", "Poly-D-glutamate", "Zoonosis"}
    },
    {
        "id": "SIMPIC-BAC-007",
        "stem": "A 31-year-old pregnant woman at 28 weeks of gestation presents with flu-like illness, unremitting fever, and lower back pain. Blood cultures grow small Gram-positive rods with narrow beta-hemolysis that exhibit end-over-end 'tumbling motility' at 22°C but are non-motile at 37°C. When inoculated into human tissue culture cells, the organism polymerizes host cellular actin to form 'actin rockets' that propel it directly across cell membranes. What is this organism and its primary virulence factor for intracellular motility?",
        "options": [
            "Corynebacterium diphtheriae; Diphtheria toxin",
            "Listeria monocytogenes; ActA protein",
            "Bacillus cereus; Cereulide toxin",
            "Erysipelothrix rhusiopathiae; Neuraminidase",
            "Nocardia asteroides; Cord factor (trehalose 6,6'-dimycolate)"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Corynebacterium diphtheriae is a non-motile, non-spore-forming club-shaped rod causing pseudomembranous pharyngitis via EF-2 inhibition.",
            1: "Correct. Listeria monocytogenes is a facultative intracellular, cold-tolerant (psychrotrophic) Gram-positive rod. It escapes host phagosomes via listeriolysin O (LLO) and uses its surface protein ActA to induce host actin polymerization. This creates 'actin comet tails' or 'actin rockets' that propel the bacterium directly into neighboring cells without exposing it to extracellular antibodies or complement.",
            2: "Incorrect. Bacillus cereus produces cereulide (emetic toxin) and enterotoxins causing food poisoning; it is a spore-former and does not move via actin rockets.",
            3: "Incorrect. Erysipelothrix rhusiopathiae causes erysipeloid in fish/meat handlers (H2S positive on TSI) but is non-motile and lacks ActA.",
            4: "Incorrect. Nocardia asteroides is a branching, beaded, partially acid-fast aerobe that forms brain abscesses; cord factor is a glycolipid of Mycobacterium and Nocardia."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 21: Listeria and Related Gram-Positive Bacteria",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "Listeria: Tumbling motility at 20–25°C, non-motile at 37°C, cold enrichment at 4°C (unpasteurized milk, soft cheeses, deli meats).",
            "ActA surface protein polymerizes host cell actin to spread cell-to-cell (intracellular jet propulsion).",
            "Empiric treatment for neonatal or elderly meningitis MUST include Ampicillin to cover Listeria (inherently resistant to cephalosporins!)."
        ],
        "latinNames": ["Listeria monocytogenes", "Corynebacterium diphtheriae", "Bacillus cereus", "Erysipelothrix rhusiopathiae", "Nocardia asteroides"],
        "caseVignette": True,
        "tags": ["Listeria", "ActA", "Actin Comet", "Intracellular Pathogen"}
    },
    {
        "id": "SIMPIC-BAC-008",
        "stem": "A 52-year-old woman who underwent an allogeneic bone marrow transplantation develops crampy abdominal pain, watery diarrhea (8–10 stools/day), low-grade fever, and leukocytosis (WBC 24,000/µL) two weeks after starting intravenous piperacillin-tazobactam. Colonoscopy reveals multiple discrete, yellowish-white plaques adherent to hyperemic colonic mucosa. Molecular testing confirms Clostridioides difficile. What are the enzymatic activities and targets of Toxin A (enterotoxin) and Toxin B (cytotoxin)?",
        "options": [
            "ADP-ribosylation of elongation factor EF-2, arresting peptide translocation",
            "Glucosyltransferases that transfer glucose onto Rho-family GTPases (Rho, Rac, Cdc42), disrupting the actin cytoskeleton",
            "Constitutive stimulation of membrane guanylate cyclase, increasing intracellular cGMP",
            "Pore-forming cholesterol-dependent cytolysins that perforate tight junctions in colonic crypts",
            "Zinc endopeptidases that selectively cleave complement component C3b"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Inactivation of EF-2 via ADP-ribosylation is the action of Diphtheria toxin and Pseudomonas Exotoxin A.",
            1: "Correct. Clostridioides difficile toxins A (TcdA) and B (TcdB) are large clostridial glucosylating toxins. Both toxins undergo endocytosis and enzymatically monoglucosylate host cytosolic Rho-family small GTPases (RhoA, Rac1, and Cdc42) using UDP-glucose as a donor. Inactivation of Rho GTPases collapses the actin cytoskeleton, dismantles zonula occludens (tight junctions), causes apoptosis of intestinal epithelial cells, and triggers massive neutrophil recruitment forming pseudomembranes.",
            2: "Incorrect. Activation of guanylate cyclase with increased cGMP is the mechanism of heat-stable enterotoxin (STa) of ETEC and guanylin/linaclotide.",
            3: "Incorrect. Cholesterol-dependent cytolysins (CDCs) include streptolysin O and perfringolysin O, not C. difficile toxins.",
            4: "Incorrect. C3b cleavage is mediated by factor I with factor H, or microbial mimics; it is not the mechanism of TcdA/TcdB."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 11: Spore-Forming Gram-Positive Bacilli: Bacillus and Clostridium Species",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "C. difficile pseudomembranous colitis = Toxin A (enterotoxin/fluid secretion) + Toxin B (cytotoxin/actin disruption via Rho glucosylation).",
            "Hypervirulent NAP1/BI/027 ribotype produces 16x more Toxin A, 23x more Toxin B, and binary toxin due to a deletion in the regulatory tcdC gene.",
            "Oral fidaxomicin (RNA polymerase inhibitor) or oral vancomycin is standard 1st-line therapy."
        ],
        "latinNames": ["Clostridioides difficile", "Clostridium difficile", "Corynebacterium diphtheriae", "Pseudomonas aeruginosa"],
        "caseVignette": True,
        "tags": ["C. difficile", "Pseudomembranous Colitis", "Rho GTPase", "Glucosyltransferase"}
    },

    # --- BACTERIOLOGY: GRAM-NEGATIVE RODS & PATHOGENS ---
    {
        "id": "SIMPIC-BAC-009",
        "stem": "A 28-year-old man who recently returned from an aid mission in Haiti presents with sudden, voluminous watery diarrhea that has the consistency of 'rice water' with a faint fishy odor. He has no tenesmus or fever but is severely dehydrated, with sunken eyes, poor skin turgor, and dry mucous membranes. Stool examination is negative for leukocytes and erythrocytes. Vibrio cholerae is isolated on Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar as yellow colonies. How does cholera toxin produce this profound secretory diarrhea?",
        "options": [
            "ADP-ribosylates the Gs alpha subunit, permanently inhibiting GTPase activity and constitutively activating adenylate cyclase",
            "ADP-ribosylates the Gi alpha subunit, preventing it from inhibiting adenylate cyclase",
            "Directly cleaves the 28S rRNA subunit of the 60S ribosome, halting protein synthesis in villus tip enterocytes",
            "Activates cyclic GMP via a heat-stable peptide receptor on the apical brush border",
            "Inserts into the basolateral membrane to form non-specific calcium-conducting cation pores"
        ],
        "correctIndex": 0,
        "rationales": {
            0: "Correct. Cholera toxin (an AB5 exotoxin) enters enterocytes via retrograde transport (binding GM1 ganglioside). The catalytic A1 subunit transfers ADP-ribose from NAD+ to the alpha subunit of the stimulatory G-protein (Gs-alpha). This locks Gs-alpha in its active GTP-bound state by destroying its intrinsic GTPase activity. Constitutively active Gs persistently stimulates membrane-bound adenylate cyclase, skyrocketing intracellular cAMP levels. High cAMP phosphorylates the cystic fibrosis transmembrane conductance regulator (CFTR) channel via protein kinase A, driving massive efflux of chloride and bicarbonate into the intestinal lumen, dragging sodium and water along osmotic gradients (up to 1 liter/hour!).",
            1: "Incorrect. ADP-ribosylation of Gi-alpha is the mechanism of Pertussis toxin (Bordetella pertussis), which inactivates the inhibitory G-protein, also raising cAMP but through a distinct molecular target.",
            2: "Incorrect. Depurination of 28S rRNA in the 60S ribosomal subunit is the mechanism of Shiga toxin (Shigella dysenteriae) and Shiga-like toxin (EHEC / STEC).",
            3: "Incorrect. Stimulation of guanylate cyclase and cGMP is the mechanism of ETEC heat-stable toxin (STa), not cholera toxin.",
            4: "Incorrect. Pore formation is characteristic of cytolysins and hemolysins, not the cholera AB5 toxin."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 17: Vibrios, Campylobacters, and Helicobacter",
        "subject": "Bacteriology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Cholera toxin = AB5 toxin -> ADP-ribosylates Gs-alpha -> prevents GTP hydrolysis -> high cAMP -> CFTR activation -> massive Cl- and water secretion.",
            "TCBS agar: Selective and differential; V. cholerae ferments sucrose -> forms yellow colonies.",
            "Key treatment is oral rehydration therapy (ORT) containing glucose and Na+ (utilizing intact SGLT-1 cotransporters)."
        ],
        "latinNames": ["Vibrio cholerae", "Bordetella pertussis", "Shigella dysenteriae", "Escherichia coli"],
        "caseVignette": True,
        "tags": ["Cholera", "cAMP", "CFTR", "Secretory Diarrhea", "Gs protein"}
    },
    {
        "id": "SIMPIC-BAC-010",
        "stem": "A 45-year-old neutropenic patient undergoing induction chemotherapy for acute myeloid leukemia develops fever, chills, and rapidly evolving skin lesions on his lower extremities. The lesions begin as painless erythematous macules that progress over 24 hours into hemorrhagic bullae with dark, necrotic, gangrenous centers and erythematous borders (ecthyma gangrenosum). Blood cultures yield non-fermenting Gram-negative rods that produce a blue-green pigment and a fruity, grape-like odor. Which virulence factor of this organism functions via the exact same molecular mechanism as Diphtheria toxin?",
        "options": [
            "Pyocyanin",
            "Exotoxin A",
            "Alkaline protease",
            "Exoenzyme S",
            "Elastase (LasB)"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Pyocyanin is a redox-active phenazine pigment that catalyzes the production of superoxide and hydrogen peroxide, impairing ciliary function and causing tissue damage.",
            1: "Correct. Pseudomonas aeruginosa produces Exotoxin A (ETA), an AB toxin that catalyzes the NAD+-dependent ADP-ribosylation of eukaryotic elongation factor 2 (EF-2) at a unique post-translationally modified histidine residue known as diphthamide. This irreversibly arrests ribosomal polypeptide chain elongation and causes host cell death, identical in molecular mechanism to the toxin produced by Corynebacterium diphtheriae (though their tissue tropisms and receptor binding differ).",
            2: "Incorrect. Alkaline protease degrades host fibrin and host immune defense proteins (e.g., antibodies, complement), contributing to tissue invasion.",
            3: "Incorrect. Exoenzyme S is a Type III secretion system effector with ADP-ribosyltransferase and GTPase-activating protein (GAP) activity targeting host Ras and cytoskeletal components, not EF-2.",
            4: "Incorrect. Elastase (LasB) is a zinc metalloprotease that cleaves elastin, collagen, and transferrin, facilitating vascular invasion and hematogenous dissemination."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 16: Pseudomonas, Acinetobacter, Burkholderia, and Stenotrophomonas",
        "subject": "Bacteriology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "Pseudomonas Exotoxin A and Diphtheria toxin share the IDENTICAL mechanism: ADP-ribosylation of EF-2 at diphthamide.",
            "Ecthyma gangrenosum = perivascular bacterial invasion of tunica media/adventitia causing ischemic necrotizing vasculitis in neutropenic patients.",
            "Pyocyanin (blue) + Pyoverdine (green-yellow fluorescing) give Pseudomonas its signature color."
        ],
        "latinNames": ["Pseudomonas aeruginosa", "Corynebacterium diphtheriae"],
        "caseVignette": True,
        "tags": ["Pseudomonas", "Exotoxin A", "Ecthyma Gangrenosum", "EF-2"}
    },

    # --- VIROLOGY ---
    {
        "id": "SIMPIC-VIR-001",
        "stem": "A 3-year-old unimmunized girl is evaluated for a 3-day history of high fever (39.8°C), cough, coryza, and conjunctivitis with photophobia (the '3 Cs'). On physical examination, the physician notes tiny, irregular red spots with bluish-white central specks on the buccal mucosa opposite the lower second molars. Two days later, a maculopapular blanching rash erupts on the hairline and behind the ears, spreading downward to involve the trunk and extremities. What structural component of this virus mediates viral attachment to the host cellular receptor (CD150 / SLAM and CD46)?",
        "options": [
            "Hemagglutinin (H) glycoprotein",
            "Neuraminidase (N) spike",
            "Fusion (F) protein",
            "Matrix (M) protein",
            "Large (L) polymerase subunit"
        ],
        "correctIndex": 0,
        "rationales": {
            0: "Correct. Measles virus (family Paramyxoviridae, genus Morbillivirus) possesses an envelope containing two major surface glycoproteins: Hemagglutinin (H) protein and Fusion (F) protein. The Hemagglutinin (H) protein mediates viral attachment to host cell receptors, specifically CD150 (Signaling Lymphocytic Activation Molecule [SLAM], found on lymphocytes and dendritic cells) and Nectin-4 (on epithelial cells).",
            1: "Incorrect. Unlike Orthomyxoviruses (influenza) and certain Paramyxoviruses (Parainfluenza and Mumps, which possess a combined Hemagglutinin-Neuraminidase [HN] glycoprotein), Measles virus lacks neuraminidase activity.",
            2: "Incorrect. The Fusion (F) protein mediates viral envelope fusion with the host plasma membrane and induces host cell-to-cell fusion, forming multinucleated giant cells (Warthin-Finkeldey cells). It does not mediate initial receptor binding.",
            3: "Incorrect. The Matrix (M) protein lines the inner viral envelope and coordinates virion assembly and budding; it has no receptor-binding function.",
            4: "Incorrect. The Large (L) protein is the viral RNA-dependent RNA polymerase responsible for replication and transcription of the negative-sense single-stranded RNA genome."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 40: Paramyxoviruses and Rubella Virus",
        "subject": "Virology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Measles clinical triad: Cough, Coryza, Conjunctivitis + Koplik spots (pathognomonic, blue-white on red base).",
            "Measles virus has Hemagglutinin (H) and Fusion (F) protein, but NO Neuraminidase (unlike mumps/parainfluenza).",
            "Subacute Sclerosing Panencephalitis (SSPE) is a late fatal complication (years later) due to defective matrix protein (M)."
        ],
        "latinNames": ["Morbillivirus"],
        "caseVignette": True,
        "tags": ["Measles", "Paramyxovirus", "Koplik Spots", "Hemagglutinin"}
    },
    {
        "id": "SIMPIC-VIR-002",
        "stem": "A 19-year-old college student presents with a 2-week history of sore throat, extreme fatigue, fever, and tender posterior cervical lymphadenopathy. Physical examination reveals tonsillar exudates, splenomegaly, and a mild palatal petechial enanthem. A peripheral blood smear demonstrates 65% mononuclear cells with 25% atypical lymphocytes (Downey cells). The Paul-Bunnell heterophile antibody test (Monospot) is strongly positive. Which cell surface molecule serves as the primary attachment receptor for the causative viral envelope glycoprotein gp350/220?",
        "options": [
            "CD4 glycoprotein",
            "CD21 (Complement Receptor 2 / CR2)",
            "CD8 alpha chain",
            "CXCR4 chemokine coreceptor",
            "Intercellular adhesion molecule 1 (ICAM-1)"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. CD4 is the primary receptor for the Human Immunodeficiency Virus (HIV) envelope glycoprotein gp120.",
            1: "Correct. Epstein-Barr Virus (EBV / Human Herpesvirus 4) initiates infection of mature B lymphocytes when its major viral envelope glycoprotein gp350/220 binds specifically to the CD21 molecule (also designated Complement Receptor type 2 [CR2]), which normally binds the C3d fragment of complement. Subsequent fusion requires viral gp42 binding to MHC class II molecules on the B-cell surface.",
            2: "Incorrect. CD8 is expressed on cytotoxic T lymphocytes, which proliferate into the reactive atypical lymphocytes (Downey cells) seen on peripheral smear, but EBV infects B cells via CD21, not CD8.",
            3: "Incorrect. CXCR4 is a chemokine coreceptor utilized by T-tropic (X4) strains of HIV-1.",
            4: "Incorrect. ICAM-1 (CD54) is the primary cellular receptor for the majority of human Rhinoviruses (enterovirus family)."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 44: Herpesviruses",
        "subject": "Virology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "EBV attaches to CD21 (CR2) on B cells via envelope glycoprotein gp350.",
            "Atypical lymphocytes (Downey cells) on peripheral smear are reactive CD8+ T cells fighting the infected B cells.",
            "Administering ampicillin or amoxicillin in EBV mononucleosis characteristically triggers a non-allergic maculopapular rash."
        ],
        "latinNames": ["Epstein-Barr virus", "Herpesvirus"],
        "caseVignette": True,
        "tags": ["EBV", "CD21", "Mononucleosis", "Heterophile Antibody"}
    },
    {
        "id": "SIMPIC-VIR-003",
        "stem": "During an annual influenza outbreak, public health authorities detect a novel Influenza A strain that causes widespread pandemics across multiple continents with high mortality in young adults. Genetic sequencing reveals that the new strain has acquired an entirely novel Hemagglutinin (H2 to H3) and Neuraminidase (N1 to N2) gene segment derived from an avian influenza virus that coinfected a swine intermediate host alongside a human influenza strain. What specific virologic phenomenon explains this dramatic evolutionary leap?",
        "options": [
            "Antigenic drift due to error-prone viral RNA-dependent RNA polymerase accumulation of point mutations",
            "Antigenic shift due to genetic reassortment of segmented negative-sense RNA genomes",
            "Phenotypic mixing resulting in pseudotyped envelopes without genomic alterations",
            "Recombination between non-segmented positive-sense RNA strands via copy-choice polymerase jumping",
            "Complementation of a replication-defective mutant by an active wild-type viral polymerase"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Antigenic drift involves gradual, minor changes in hemagglutinin and neuraminidase resulting from point mutations introduced by the proofreading-deficient RNA-dependent RNA polymerase during replication. Drift causes seasonal epidemics, requiring annual vaccine updates, not major pandemics.",
            1: "Correct. Antigenic shift is an abrupt, major change in the influenza virus genome that occurs when two distinct influenza A strains coinfect the same host cell (such as in pigs or birds) and exchange entire RNA segments during viral packaging. Because Influenza A possesses a segmented genome consisting of 8 individual negative-sense ssRNA segments, reassortment yields a chimeric progeny virion with novel HA and/or NA surface antigens to which the human population has zero pre-existing immunity, precipitating global pandemics.",
            2: "Incorrect. Phenotypic mixing occurs when two viruses exchange surface envelope proteins without genetic change; progeny of subsequent replication rounds revert completely to the parental genotype.",
            3: "Incorrect. Recombination occurs in non-segmented RNA viruses (like Picornaviruses or Coronaviruses) via polymerase template switching ('copy-choice'), rather than reassortment of intact segments.",
            4: "Incorrect. Complementation occurs when one virus produces a functional protein that rescues a defective virus, without altering either viral genome."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 39: Orthomyxoviruses (Influenza Viruses)",
        "subject": "Virology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Antigenic Shift = Segmented genome Reassortment -> Pandemic (BOAR: Bunyavirus, Orthomyxovirus, Arenavirus, Reovirus).",
            "Antigenic Drift = Random point mutations in HA/NA -> Epidemic / Seasonal changes.",
            "Only Influenza A undergoes antigenic shift because it infects animals (swine, waterfowl) in addition to humans; Influenza B is human-restricted."
        ],
        "latinNames": ["Influenzavirus A", "Influenzavirus B"],
        "caseVignette": True,
        "tags": ["Influenza", "Antigenc Shift", "Reassortment", "Pandemic"}
    },

    # --- MYCOLOGY ---
    {
        "id": "SIMPIC-MYC-001",
        "stem": "A 43-year-old spelunker (cave explorer) and construction worker from the Ohio and Mississippi River valleys presents with fever, dry cough, malaise, and night sweats of 3 weeks' duration. Chest radiography reveals patchy bilateral hilar lymphadenopathy and small nodular pulmonary infiltrates. Bone marrow and bronchoalveolar lavage biopsies reveal tiny (2–4 µm) oval, intracellular budding yeast forms packed densely within host reticuloendothelial macrophages. Sputum culture at 25°C yields a mold with large, tuberculate macroconidia. What is the definitive etiologic agent?",
        "options": [
            "Blastomyces dermatitidis",
            "Histoplasma capsulatum",
            "Coccidioides immitis",
            "Paracoccidioides brasiliensis",
            "Cryptococcus neoformans"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Blastomyces dermatitidis forms large (8–15 µm) yeasts with broad-based budding and a thick, doubly refractive cell wall at 37°C, typically in the Great Lakes / Ohio River basin with verrucous skin and bone lesions.",
            1: "Correct. Histoplasma capsulatum is a thermally dimorphic fungus endemic to the Ohio and Mississippi River valleys, where it thrives in soil enriched with bird (starling) or bat guano (caves, spelunking, old chicken coops). At 37°C (tissue phase), it exists as small (2–4 µm), narrow-necked budding yeasts that characteristically survive and multiply inside alveolar macrophages and histiocytes. At 25°C (environmental mold phase), it produces distinctive thick-walled, finger-like tuberculate macroconidia.",
            2: "Incorrect. Coccidioides immitis is endemic to the southwestern US (San Joaquin Valley) and forms large thick-walled spherules (20–100 µm) filled with endospores in tissue, not intracellular yeasts.",
            3: "Incorrect. Paracoccidioides brasiliensis is endemic to Central and South America and produces large yeasts with multiple narrow-necked buds resembling a 'ship's steering wheel' or 'Mickey Mouse ears'.",
            4: "Incorrect. Cryptococcus neoformans is a monomorphic encapsulated yeast (5–10 µm) with unequal narrow-based budding and a prominent mucopolysaccharide capsule visible on India ink; it is not thermally dimorphic."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 45: Medical Mycology",
        "subject": "Mycology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "Histoplasma: 'Histo Hides in Histiocytes' -> tiny (2–4 µm) intracellular yeasts inside macrophages.",
            "Associated with bat/bird droppings, spelunking, caves in Ohio/Mississippi River valleys.",
            "Mold phase (25°C) produces tuberculate chlamydospores/macroconidia."
        ],
        "latinNames": ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Coccidioides immitis", "Paracoccidioides brasiliensis", "Cryptococcus neoformans"],
        "caseVignette": True,
        "tags": ["Histoplasma", "Dimorphic Fungi", "Macrophages", "Mycology"}
    },
    {
        "id": "SIMPIC-MYC-002",
        "stem": "A 36-year-old HIV-infected male with a CD4+ T-cell count of 35/µL presents with a 2-week history of worsening global headache, photophobia, nausea, and low-grade fever. Neurologic examination reveals mild neck stiffness without focal deficits. Lumbar puncture demonstrates an opening pressure of 340 mm H2O. Microscopic examination of the CSF using an India ink negative stain reveals round, budding yeast cells surrounded by wide, clear halos. Mucicarmine staining stains the fungal cell wall bright carmine red. What is the biochemical composition of this diagnostic capsular halo?",
        "options": [
            "Glucuronoxylomannan (GXM) polysaccharide",
            "Ergosterol-phospholipid bilayer",
            "Chitin cross-linked with beta-1,3-glucan",
            "Zymosan alpha-mannan glycoprotein",
            "Galactomannan repeating disaccharides"
        ],
        "correctIndex": 0,
        "rationales": {
            0: "Correct. Cryptococcus neoformans (and C. gattii) is the only clinically significant encapsulated fungal pathogen. Its prominent antiphagocytic capsule is composed primarily of glucuronoxylomannan (GXM, >90%) and galactoxylomannan (GalXM). GXM repels negative charges on phagocytic membranes, downregulates leukocyte migration, inhibits complement deposition, and excludes the dark colloidal carbon particles in India ink, resulting in a luminous halo around the central yeast cell. Mucicarmine specifically stains the acidic mucopolysaccharides of the capsule bright red.",
            1: "Incorrect. Ergosterol is the primary sterol in fungal plasma membranes (the target of polyenes and azoles), not the extracellular capsule.",
            2: "Incorrect. Chitin and beta-1,3-glucan form the structural cell wall beneath the capsule; beta-1,3-glucan is targeted by echinocandins (which are notoriously inactive against Cryptococcus!).",
            3: "Incorrect. Zymosan is a beta-glucan cell wall component of Saccharomyces cerevisiae.",
            4: "Incorrect. Galactomannan is a cell wall carbohydrate released into serum by Aspergillus fumigatus, used as a diagnostic serum biomarker."
        },
        "source": "Murray 9th Ed",
        "chapter": "Ch. 64: Cryptococcus and Related Yeasts",
        "subject": "Mycology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Cryptococcus neoformans = Only encapsulated yeast; capsule = Glucuronoxylomannan (GXM).",
            "Diagnostics: India ink (clear halo), Mucicarmine (red capsule), Latex agglutination (detects GXM capsular antigen), Sabouraud agar with niger seed (caffeic acid -> melanin via laccase).",
            "Echinocandins (caspofungin) have NO activity against Cryptococcus; standard therapy is Amphotericin B + Flucytosine, followed by Fluconazole."
        ],
        "latinNames": ["Cryptococcus neoformans", "Cryptococcus gattii", "Aspergillus fumigatus", "Saccharomyces cerevisiae"],
        "caseVignette": True,
        "tags": ["Cryptococcus", "GXM", "Capsule", "India Ink", "Meningitis"}
    },

    # --- PARASITOLOGY ---
    {
        "id": "SIMPIC-PAR-001",
        "stem": "A 26-year-old traveler returns from a 2-month safari in sub-Saharan Africa. Five days after returning, he develops recurring paroxysms of severe shaking chills, spiking fevers up to 40.5°C, and diaphoresis every 48 hours. Giemsa-stained peripheral blood smears reveal delicate, tiny ring-form trophozoites within normal-sized red blood cells, with multiple rings per erythrocyte, marginal 'appliqué' forms, and banana- or crescent-shaped gametocytes. The patient is diagnosed with Plasmodium falciparum malaria. What parasite-encoded surface protein is responsible for cytoadherence to endothelial CD36 and ICAM-1, mediating microvascular sequestration?",
        "options": [
            "Circumsporozoite protein (CSP)",
            "Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1)",
            "Duffy antigen receptor for chemokines (DARC)",
            "Merozoite surface protein 1 (MSP-1)",
            "Apical membrane antigen 1 (AMA-1)"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Circumsporozoite protein (CSP) coats the surface of the infective sporozoite and mediates binding to heparan sulfate proteoglycans on hepatocytes during the pre-erythrocytic liver stage; it is the target of the RTS,S/AS01 malaria vaccine.",
            1: "Correct. Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1), encoded by the hypervariable var gene family, is exported to the erythrocyte membrane where it clusters in surface 'knobs'. PfEMP1 binds host endothelial receptors including CD36, ICAM-1, and chondroitin sulfate A. This causes cytoadherence and sequestration of parasitized RBCs in deep capillary venules, preventing splenic clearance and triggering cerebral malaria, tissue ischemia, and lactic acidosis.",
            2: "Incorrect. Duffy antigen (DARC) is the human erythrocyte receptor required for Plasmodium vivax merozoite invasion; individuals who are Duffy-negative (Fy(a-b-)) are resistant to P. vivax.",
            3: "Incorrect. Merozoite surface protein 1 (MSP-1) is involved in initial attachment of merozoites to erythrocytes prior to invasion, not endothelial cytoadherence.",
            4: "Incorrect. AMA-1 is an apical organelle protein involved in moving junction formation during erythrocyte invasion by merozoites."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 46: Medical Parasitology",
        "subject": "Parasitology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "P. falciparum: Crescent/banana-shaped gametocytes, multiple rings per RBC, appliqué forms, normal-sized RBCs.",
            "PfEMP1 (var genes) = endothelial cytoadherence (knobs) -> sequestration -> cerebral malaria & renal failure.",
            "P. vivax and P. ovale have hypnozoites in liver (dormant stage requiring primaquine / tafenoquine to prevent relapse)."
        ],
        "latinNames": ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale"],
        "caseVignette": True,
        "tags": ["Malaria", "PfEMP1", "Cytoadherence", "Parasitology"}
    },
    {
        "id": "SIMPIC-PAR-002",
        "stem": "A 32-year-old agricultural worker from rural Southeast Asia presents with recurrent wheezing, transient pulmonary infiltrates, peripheral eosinophilia (28%), epigastric pain, and episodic 'larva currens' (a rapidly advancing, intensely pruritic serpiginous urticarial rash on the perianal area and buttocks, moving up to 5–10 cm/hour). Stool examination reveals rhabditiform larvae rather than helminth eggs. What unique biological characteristic of this nematode enables it to persist within a human host for decades and potentially cause life-threatening hyperinfection syndrome during corticosteroid therapy?",
        "options": [
            "Ability to complete its entire parasitic life cycle and autoinfect the host via transformation of rhabditiform to filariform larvae in the intestinal lumen",
            "Encystation of calcified nurse cells in striated skeletal muscle fibers",
            "Obligate migration through freshwater snails as intermediate hosts with asexual redial multiplication",
            "Release of embryonated operculated eggs requiring ingestion by freshwater copepods",
            "Formation of subcutaneous migratory nodules harboring adult microfilariae surrounded by Onchocerca"
        ],
        "correctIndex": 0,
        "rationales": {
            0: "Correct. Strongyloides stercoralis is unique among intestinal nematodes because its non-infective rhabditiform larvae can molt within the host's intestinal tract into infective filariform larvae. These filariform larvae penetrate the colonic mucosa or perianal skin to re-enter venous circulation and repeat the pulmonary-tracheal-intestinal cycle (internal autoinfection). This autoinfective cycle allows Strongyloides to persist silently for decades. When the host receives immunosuppressants (especially glucocorticoids, which upregulate parasite ecdysteroid receptors), autoinfection explodes into Hyperinfection Syndrome and Disseminated Strongyloidiasis, often leading to Gram-negative bacteremia/meningitis from gut flora carried on larval surfaces.",
            1: "Incorrect. Encystation in striated skeletal muscle (nurse cells) characterizes Trichinella spiralis, acquired from undercooked pork or wild game.",
            2: "Incorrect. Freshwater snail intermediate hosts with redial stages are required by Trematodes (flukes like Schistosoma, Clonorchis, and Fasciola), not nematodes.",
            3: "Incorrect. Operculated eggs ingested by freshwater copepods (Cyclops) characterize the broad fish tapeworm Diphyllobothrium latum.",
            4: "Incorrect. Subcutaneous onchocercomas containing adult worms producing microfilariae characterize Onchocerca volvulus (river blindness), transmitted by the blackfly (Simulium)."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 46: Medical Parasitology",
        "subject": "Parasitology",
        "difficulty": "Round 2 (Clinical Vignettes)",
        "highYieldPearls": [
            "Strongyloides stercoralis: Stool contains RHABDITIFORM LARVAE, NOT eggs!",
            "Autoinfection cycle -> can persist for 30–50+ years without re-exposure.",
            "Steroids / HTLV-1 infection -> catastrophic Hyperinfection syndrome with enteric Gram-negative sepsis.",
            "Drug of choice is Ivermectin (binds glutamate-gated chloride channels)."
        ],
        "latinNames": ["Strongyloides stercoralis", "Trichinella spiralis", "Diphyllobothrium latum", "Onchocerca volvulus"],
        "caseVignette": True,
        "tags": ["Strongyloides", "Autoinfection", "Larva Currens", "Hyperinfection"}
    },

    # --- GENERAL MICROBIOLOGY, IMMUNOLOGY & ANTIMICROBIALS ---
    {
        "id": "SIMPIC-GEN-001",
        "stem": "Which of the following structural components is found exclusively in the cell wall of Gram-positive bacteria, anchoring to either the peptidoglycan matrix or the underlying plasma membrane, and acts as a major surface antigen recognized by human Toll-like Receptor 2 (TLR2)?",
        "options": [
            "Lipopolysaccharide (LPS) lipid A",
            "Lipoteichoic acid (LTA) and wall teichoic acid (WTA)",
            "Porin outer membrane trimers",
            "Periplasmic beta-lactamase storage layer",
            "Lipooligosaccharide (LOS) lacking O-antigen repeating units"
        ],
        "correctIndex": 1,
        "rationales": {
            0: "Incorrect. Lipid A is the toxic, hydrophobic anchor of lipopolysaccharide (LPS) found exclusively in the outer leaflet of Gram-negative bacterial outer membranes; it is recognized by TLR4/MD-2, not TLR2.",
            1: "Correct. Teichoic acids and lipoteichoic acids (LTA) are unique, essential polyol phosphate polymers (ribitol or glycerol phosphate) found exclusively in the thick peptidoglycan envelope of Gram-positive bacteria. Lipoteichoic acid is anchored covalently to the glycolipids of the plasma membrane, whereas wall teichoic acid is anchored to peptidoglycan. LTA provides negative surface charge, binds divalent cations (Mg2+), regulates autolysins, and serves as a pathogen-associated molecular pattern (PAMP) recognized by host TLR2/TLR6 heterodimers.",
            2: "Incorrect. Porins are transmembrane channel proteins located in the outer membrane of Gram-negative bacteria.",
            3: "Incorrect. The periplasmic space is located between the inner and outer membranes of Gram-negative bacteria.",
            4: "Incorrect. Lipooligosaccharide (LOS) is present in mucosal Gram-negative pathogens like Neisseria and Haemophilus."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 2: Cell Structure",
        "subject": "General Microbiology & Immunology",
        "difficulty": "Round 1 (Recall & Basics)",
        "highYieldPearls": [
            "Gram-Positive: Thick peptidoglycan + Teichoic acid / Lipoteichoic acid (TLR2 agonist).",
            "Gram-Negative: Thin peptidoglycan + Outer membrane containing LPS / Endotoxin (Lipid A, TLR4 agonist).",
            "Lysozyme cleaves beta-1,4 glycosidic bonds between NAG and NAM in peptidoglycan."
        ],
        "latinNames": ["Staphylococcus", "Streptococcus", "Neisseria", "Haemophilus"],
        "caseVignette": False,
        "tags": ["Cell Wall", "Teichoic Acid", "Gram Positive", "TLR2"}
    },
    {
        "id": "SIMPIC-GEN-002",
        "stem": "An intensive care unit patient with ventilator-associated pneumonia caused by multi-drug resistant Klebsiella pneumoniae is treated with high-dose intravenous tobramycin. After 7 days, the bacterial isolate develops high-level resistance to tobramycin and gentamicin but remains susceptible to amikacin. What is the most common enzymatic mechanism responsible for this acquired aminoglycoside resistance?",
        "options": [
            "Plasmid-encoded aminoglycoside-modifying enzymes (acetyltransferases, phosphotransferases, adenyltransferases)",
            "Active efflux mediated by the MexAB-OprM tripartite pump system",
            "Mutational loss of the OmpK36 outer membrane porin channel",
            "Enzymatic methylation of the 16S ribosomal RNA decoding A-site",
            "Target site mutation in the rpsL gene encoding 30S ribosomal protein S12"
        ],
        "correctIndex": 0,
        "rationales": {
            0: "Correct. The most common mechanism of acquired aminoglycoside resistance is the enzymatic covalent modification of the antibiotic molecule by plasmid- or transposon-encoded aminoglycoside-modifying enzymes (AMEs). These include Aminoglycoside Acetyltransferases (AAC), Aminoglycoside Phosphotransferases (APH), and Aminoglycoside Nucleotidyl/Adenyltransferases (ANT). These modifications prevent the drug from binding to the 30S ribosomal subunit. Amikacin is less susceptible to many AMEs due to its protective L-hydroxyaminobutyryl amide (HABA) side chain.",
            1: "Incorrect. Efflux pumps like MexAB-OprM are classic in Pseudomonas aeruginosa and confer low-to-moderate multidrug resistance.",
            2: "Incorrect. Porin deletion (OmpK35/36) mediates carbapenem resistance in Klebsiella pneumoniae when paired with ESBL or AmpC, but does not explain selective aminoglycoside resistance.",
            3: "Incorrect. 16S rRNA methyltransferases (e.g., ArmA, RmtB) confer pan-aminoglycoside resistance (including to amikacin and plazomicin).",
            4: "Incorrect. rpsL mutations in protein S12 mediate high-level streptomycin resistance in Mycobacterium tuberculosis."
        },
        "source": "Jawetz 28th Ed",
        "chapter": "Ch. 28: Antimicrobial Chemotherapy",
        "subject": "General Microbiology & Immunology",
        "difficulty": "Finals (Advanced & Triads)",
        "highYieldPearls": [
            "Aminoglycoside resistance: Most common = Enzymatic modification (acetylation, phosphorylation, adenylation).",
            "Amikacin has a bulky HABA side chain that protects it from many modifying enzymes.",
            "Aminoglycosides bind the 30S ribosomal subunit, require O2-dependent uptake (ineffective against anaerobes!), and cause nephrotoxicity and ototoxicity."
        ],
        "latinNames": ["Klebsiella pneumoniae", "Pseudomonas aeruginosa", "Mycobacterium tuberculosis"],
        "caseVignette": True,
        "tags": ["Aminoglycosides", "Resistance Mechanisms", "Pharmacology"}
    }
]

# Write to TypeScript file
ts_output = f"""import {{ Question }} from '../../types/question';

export const microbiologyQuestions: Question[] = {json.dumps(questions, indent=2)};
"""

with open('src/data/questions/microbiologyQuestions.ts', 'w', encoding='utf-8') as f:
    f.write(ts_output)

print(f"Successfully generated {len(questions)} high-yield SIMPIC questions in src/data/questions/microbiologyQuestions.ts")
