import { Question } from '../../types/question';

export const microbiologyQuestions: Question[] = [
  // ==========================================
  // BACTERIOLOGY: GRAM-POSITIVE COCCI
  // ==========================================
  {
    id: "SIMPIC-BAC-001",
    stem: "A 23-year-old woman is brought to the emergency department with a 12-hour history of high fever (39.5°C), diffuse macular erythroderma resembling a severe sunburn, vomiting, and profound hypotension (blood pressure 75/40 mmHg). She is currently on day 3 of her menstrual cycle and uses high-absorbency tampons. Laboratory investigations reveal elevated blood urea nitrogen, creatinine, alanine aminotransferase, and a platelet count of 65,000/µL. Blood cultures remain sterile. Which of the following best describes the molecular mechanism of the bacterial toxin primarily responsible for this patient's condition?",
    options: [
      "Simultaneous cross-linking of the TCR Vβ domain and MHC class II without antigen processing",
      "Inactivation of eukaryotic elongation factor 2 (EF-2) via ADP-ribosylation",
      "Cleavage of desmoglein-1 in the stratum granulosum of the epidermis",
      "Inhibition of presynaptic vesicle fusion via zinc-dependent endopeptidase cleavage of SNARE proteins",
      "Direct degradation of cell membrane phospholipids through lecithinase activity"
    ],
    correctIndex: 0,
    rationales: {
      0: "Correct. Toxic Shock Syndrome Toxin-1 (TSST-1) produced by Staphylococcus aureus acts as a superantigen that bridges the variable beta (Vβ) domain of the T-cell receptor (TCR) to the alpha chain of MHC class II molecules on antigen-presenting cells outside the normal peptide-binding groove. This leads to massive, uncontrolled activation of up to 20% of peripheral CD4+ T lymphocytes, triggering a systemic cytokine storm of IL-1, IL-2, TNF-alpha, and IFN-gamma that drives refractory distributive shock and multiorgan dysfunction.",
      1: "Incorrect. ADP-ribosylation of EF-2 is the mechanism of Diphtheria toxin (Corynebacterium diphtheriae) and Exotoxin A (Pseudomonas aeruginosa), halting eukaryotic ribosomal protein synthesis.",
      2: "Incorrect. Cleavage of desmoglein-1 (a cadherin cell adhesion molecule) is mediated by exfoliative toxins A and B of Staphylococcus aureus, resulting in Staphylococcal Scalded Skin Syndrome (SSSS / Ritter disease) or bullous impetigo, rather than hypotension and toxic shock.",
      3: "Incorrect. Cleavage of SNARE complexes (synaptobrevin, SNAP-25, syntaxin) is the mechanism of Botulinum neurotoxin (Clostridium botulinum) and Tetanospasmin (Clostridium tetani).",
      4: "Incorrect. Lecithinase (alpha toxin / phospholipase C) is the primary cytotoxic toxin of Clostridium perfringens causing gas gangrene and massive intravascular hemolysis."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 18: Staphylococcus and Related Gram-Positive Cocci",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "TSST-1 is a superantigen: TCR Vβ + MHC Class II external cross-linking -> massive IL-1, IL-2, TNF-α release.",
      "Blood cultures in staphylococcal TSS are frequently NEGATIVE because disease is caused by toxemia rather than systemic bacteremia.",
      "Desquamation typically occurs 1 to 2 weeks after disease onset, characteristically involving palms and soles."
    ],
    latinNames: ["Staphylococcus aureus", "Corynebacterium diphtheriae", "Pseudomonas aeruginosa", "Clostridium botulinum", "Clostridium tetani", "Clostridium perfringens"],
    caseVignette: true,
    tags: ["TSS", "Superantigen", "Toxicology", "Staphylococcus"],
    image: {
      src: "/images/figures/staph-tss-rash.jpeg",
      caption: "Cutaneous manifestation and soft-tissue involvement in fatal Staphylococcal Toxic Shock Syndrome, showing diffuse erythematous macular rash.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 18.5",
      alt: "Toxic Shock Syndrome rash"
    }
  },
  {
    id: "SIMPIC-BAC-002",
    stem: "Four hours after attending an office picnic where cold potato salad, roasted ham, and custard pastries were served, a 34-year-old man develops abrupt-onset severe nausea, intractable vomiting, and abdominal cramps without fever. He denies hematemesis or diarrhea. Which of the following characteristics best explains why this condition occurred despite reheating the contaminated food prior to consumption?",
    options: [
      "Formation of heat-resistant endospores that survive boiling and germinate rapidly at room temperature",
      "Production of an 8-kDa preformed enterotoxin that is stable to heating at 100°C for 30 minutes",
      "In vivo colonization and multiplication within small intestinal enterocytes producing heat-labile toxin",
      "Rapid bacterial proliferation in the absence of salt due to obligate stenohaline requirements",
      "Toxin synthesis triggered exclusively by low anaerobic oxidation-reduction potential in meat dishes"
    ],
    correctIndex: 1,
    rationales: {
      0: "Incorrect. Endospore germination with heat-resistant spores is characteristic of Bacillus cereus and Clostridium perfringens, not Staphylococcus aureus (which is a non-spore-forming coccus).",
      1: "Correct. Staphylococcal food poisoning is caused by ingestion of preformed heat-stable enterotoxins (primarily enterotoxin A). These low-molecular-weight proteins are remarkably resistant to boiling at 100°C for up to 30 minutes as well as gastric acid and duodenal enzymes (pepsin, trypsin). Thus, reheating food will destroy the vegetative staphylococci but leave the heat-stable enterotoxin intact to stimulate vagal afferents and the emetic chemoreceptor trigger zone in the CNS.",
      2: "Incorrect. In vivo colonization with toxin production characterizes Vibrio cholerae and Enterotoxigenic E. coli (ETEC), which have a longer incubation period (12–72 hours), whereas staphylococcal food intoxication has a rapid incubation of 1–6 hours.",
      3: "Incorrect. S. aureus is halotolerant (facultative halophile) and grows robustly in high salt concentrations (up to 7.5–10% NaCl, as utilized in Mannitol Salt Agar), which allows it to overgrow in cured hams and salted meats.",
      4: "Incorrect. S. aureus is a facultative anaerobe, whereas strict low oxidation-reduction potential is required by obligate anaerobes like Clostridium botulinum."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 18: Staphylococcus and Related Gram-Positive Cocci",
    subject: "Bacteriology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Rapid onset (1–6 hours, average 4h) vomiting after picnic/custard/mayo = S. aureus preformed enterotoxin A.",
      "Antibiotics are completely INEFFECTIVE because the pathology is a pure food intoxication, not an active infection.",
      "Salt tolerance (7.5% NaCl) on Mannitol Salt Agar isolates S. aureus from mixed samples."
    ],
    latinNames: ["Staphylococcus aureus", "Bacillus cereus", "Clostridium perfringens", "Vibrio cholerae", "Escherichia coli"],
    caseVignette: true,
    tags: ["Food Poisoning", "Enterotoxin", "Exotoxin"],
    image: {
      src: "/images/figures/staph-blood-agar.jpeg",
      caption: "Staphylococcus aureus colonies on sheep blood agar exhibiting large, smooth, beta-hemolytic colonies with characteristic golden carotenoid pigment (staphyloxanthin).",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 18.8",
      alt: "Staphylococcus aureus on sheep blood agar"
    }
  },
  {
    id: "SIMPIC-BAC-003",
    stem: "An isolate of Staphylococcus aureus obtained from a blood culture of a 58-year-old man with septic arthritis demonstrates resistance to oxacillin, nafcillin, and cefazolin. What is the fundamental genetic and biochemical mechanism mediating this broad beta-lactam resistance?",
    options: [
      "Overexpression of a plasmid-encoded TEM-1 beta-lactamase hydrolyzing the beta-lactam ring",
      "Point mutation in the gyrA gene preventing antibiotic binding to DNA topoisomerase II",
      "Acquisition of the mecA gene encoding penicillin-binding protein 2a (PBP2a) with low affinity for beta-lactams",
      "Methylation of 23S ribosomal RNA mediated by the erm gene causing ribosomal conformational change",
      "Active efflux pump encoded by the tetK determinant pumping lipophilic beta-lactams out of the cytoplasm"
    ],
    correctIndex: 2,
    rationales: {
      0: "Incorrect. Beta-lactamase (penicillinase) production confers resistance to penicillin G and ampicillin, but oxacillin, nafcillin, and cefazolin are beta-lactamase-resistant penicillins and cephalosporins unaffected by standard TEM-1 beta-lactamase.",
      1: "Incorrect. gyrA mutations mediate resistance to fluoroquinolones (ciprofloxacin, levofloxacin) by altering the DNA gyrase A subunit.",
      2: "Correct. Methicillin resistance in S. aureus (MRSA) is mediated by the chromosomal acquisition of the mecA gene (carried on the Staphylococcal Cassette Chromosome mec [SCCmec]). mecA encodes Penicillin-Binding Protein 2a (PBP2a), an altered transpeptidase that possesses exceptionally low binding affinity for virtually all conventional beta-lactams (penicillins, cephalosporins, and carbapenems), enabling ongoing peptidoglycan cell wall cross-linking despite high drug concentrations.",
      3: "Incorrect. Methylation of the 23S rRNA subunit via erm (erythromycin ribosome methylase) gene encodes the MLSB resistance phenotype (macrolides, lincosamides, streptogramin B).",
      4: "Incorrect. Active efflux via tetK confers resistance to tetracyclines, not beta-lactam antibiotics."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 13: The Staphylococci",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "MRSA = mecA gene on SCCmec -> PBP2a transpeptidase with low affinity for beta-lactams.",
      "5th generation cephalosporins (ceftaroline, ceftobiprole) are specially designed to bind PBP2a.",
      "Vancomycin, daptomycin, and linezolid remain core therapeutic options for invasive MRSA."
    ],
    latinNames: ["Staphylococcus aureus"],
    caseVignette: true,
    tags: ["MRSA", "Antibiotic Resistance", "PBP2a", "mecA"]
  },
  {
    id: "SIMPIC-BAC-004",
    stem: "A 9-year-old boy is brought to the clinic due to sudden development of dark 'tea-colored' urine, facial periorbital edema, and elevated blood pressure (135/88 mmHg). Three weeks ago, he had multiple honey-colored crusted pustules on his perioral face that cleared without treatment. Urinalysis demonstrates moderate proteinuria, dysmorphic red blood cells, and RBC casts. What bacterial virulence factor is primarily responsible for the molecular mimicry and immune-complex deposition in this glomerulopathy?",
    options: [
      "Streptolysin O mediating direct pore-forming lysis of glomerular capillary podocytes",
      "Hyaluronic acid capsule activating alternative complement pathway with consumption of factor B",
      "Pyrogenic exotoxin A acting as a systemic superantigen causing renal endothelial apoptosis",
      "M protein (specifically nephritogenic types 12, 49) eliciting circulating immune complexes and in situ antigen deposition",
      "Streptokinase converting plasminogen to plasmin and degrading the glomerular basement membrane"
    ],
    correctIndex: 3,
    rationales: {
      0: "Incorrect. Streptolysin O is an oxygen-labile, cholesterol-binding hemolysin that forms pores in erythrocytes and host cells. Antistreptolysin O (ASO) titers are useful after pharyngitis but are often blunted following skin impetigo because skin cholesterol irreversibly inactivates streptolysin O.",
      1: "Incorrect. Hyaluronic acid capsule is non-immunogenic because hyaluronic acid is structurally identical to human connective tissue ground substance, serving as an anti-phagocytic disguise rather than triggering immune complexes.",
      2: "Incorrect. Streptococcal pyrogenic exotoxin A (SpeA) acts as a superantigen responsible for Streptococcal Toxic Shock Syndrome (STSS) and scarlet fever rash, not immune-complex glomerulonephritis.",
      3: "Correct. Poststreptococcal glomerulonephritis (PSGN) is a Type III hypersensitivity reaction triggered by nephritogenic strains of Streptococcus pyogenes (Group A Strep, expressing specific M protein serotypes such as M types 12 and 49, as well as SpeB and NAPlr). These antigens form immune complexes that deposit subepithelially along the glomerular basement membrane, producing classic 'lumpy-bumpy' starry-sky granular immunofluorescence for IgG and C3, and subepithelial 'humps' on electron microscopy.",
      4: "Incorrect. Streptokinase dissolves fibrin clots by converting plasminogen to plasmin; it does not trigger glomerular immune complexes."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 19: Streptococcus and Enterococcus",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "PSGN can occur after BOTH pharyngitis and impetigo; Acute Rheumatic Fever occurs ONLY after pharyngitis.",
      "Antibiotic treatment of impetigo does NOT reliably prevent PSGN (in contrast to ARF, which is prevented by penicillin for pharyngitis).",
      "Anti-DNase B is the most sensitive serologic marker for prior streptococcal skin infections (impetigo)."
    ],
    latinNames: ["Streptococcus pyogenes"],
    caseVignette: true,
    tags: ["Group A Strep", "PSGN", "M Protein", "Glomerulonephritis"],
    image: {
      src: "/images/figures/strep-erysipelas.jpeg",
      caption: "Acute stage of erysipelas of the leg caused by Streptococcus pyogenes (Group A Strep), demonstrating distinct raised erythema, advancing well-demarcated margins, and superficial bullae formation.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 19.3",
      alt: "Streptococcus pyogenes erysipelas"
    }
  },
  {
    id: "SIMPIC-BAC-005",
    stem: "A 68-year-old man presents with sudden-onset shaking chills, high fever, pleuritic chest pain, and productive cough with rust-colored sputum. A Gram stain of the sputum demonstrates numerous Gram-positive, lancet-shaped diplococci surrounded by a clear halo. On sheep blood agar, the colonies exhibit alpha-hemolysis. Which pair of laboratory diagnostic tests would definitively confirm this pathogen and distinguish it from viridans group streptococci?",
    options: [
      "Bacitracin susceptibility and positive PYR (pyrrolidonyl arylamidase) test",
      "Catalase positivity and tube coagulase plasma clot formation",
      "Hippurate hydrolysis and positive CAMP test with beta-lysin synergy",
      "Bile esculin hydrolysis and ability to grow in 6.5% sodium chloride broth",
      "Optochin (ethylhydrocupreine) susceptibility and bile solubility (sodium deoxycholate lysis)"
    ],
    correctIndex: 4,
    rationales: {
      0: "Incorrect. Bacitracin sensitivity and PYR positive identify Streptococcus pyogenes (Group A Strep).",
      1: "Incorrect. Catalase positive and coagulase positive define Staphylococcus aureus, whereas all streptococci are catalase-negative.",
      2: "Incorrect. Hippurate hydrolysis positive and CAMP positive identify Streptococcus agalactiae (Group B Strep), which produces an arrowhead zone of synergistic beta-hemolysis when streaked perpendicularly to Staphylococcus aureus on sheep blood agar.",
      3: "Incorrect. Bile esculin positive (black slant) and tolerance to 6.5% NaCl identify Enterococcus faecalis and Enterococcus faecium, distinguishing them from Streptococcus gallolyticus (S. bovis), which is bile esculin positive but fails to grow in 6.5% NaCl.",
      4: "Correct. Streptococcus pneumoniae is alpha-hemolytic, optochin (P disk / ethylhydrocupreine hydrochloride) sensitive (zone of inhibition >= 14 mm), and bile soluble (addition of 10% sodium deoxycholate activates bacterial autolysins, rapidly clearing the turbid suspension). In contrast, viridans group streptococci (e.g., S. mitis, S. mutans) are optochin resistant and bile insoluble."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 14: The Streptococci, Enterococci, and Related Genera",
    subject: "Bacteriology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "S. pneumoniae: Lancet-shaped Gram-positive diplococci, alpha-hemolytic, Optochin sensitive, Bile soluble.",
      "Major virulence factor is its polysaccharide capsule (evaluated via Quellung reaction / capsular swelling).",
      "Rust-colored sputum is due to alveolar intra-alveolar hemorrhage in red hepatization stage."
    ],
    latinNames: ["Streptococcus pneumoniae", "Streptococcus pyogenes", "Streptococcus agalactiae", "Enterococcus faecalis", "Enterococcus faecium", "Staphylococcus aureus", "Streptococcus gallolyticus", "Streptococcus mitis", "Streptococcus mutans"],
    caseVignette: true,
    tags: ["Pneumococcus", "Diagnostics", "Optochin", "Bile Solubility"],
    image: {
      src: "/images/figures/strep-pneumo-gram.jpeg",
      caption: "Gram stain of Streptococcus pneumoniae in sputum, revealing distinctive Gram-positive, lancet-shaped diplococci surrounded by prominent unstained clear capsular halos.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 19.7",
      alt: "Gram stain of Streptococcus pneumoniae"
    }
  },

  // ==========================================
  // BACTERIOLOGY: SPORE-FORMERS & INTRACELLULAR BACILLI
  // ==========================================
  {
    id: "SIMPIC-BAC-006",
    stem: "A 42-year-old cattle rancher presents with a painless, rapidly enlarging erythematous papule on his right forearm that has developed into a central 3-cm necrotic ulcer covered by a thick, coal-black eschar surrounded by non-pitting gelatinous edema. Gram stain reveals large Gram-positive, boxcar-shaped bacilli in chains. Culture on blood agar yields non-hemolytic colonies with a tenacious, 'medusa-head' appearance. What unique component of this pathogen's antiphagocytic capsule sets it apart from virtually all other bacterial capsules?",
    options: [
      "Poly-D-glutamic acid polypeptide rather than a polysaccharide matrix",
      "High-molecular-weight hyaluronic acid identical to host ground substance",
      "Polysialic acid polymers resembling human neural cell adhesion molecules",
      "Polyribosylribitol phosphate (PRP) repeating pentose phosphodiester units",
      "K1 capsular antigen composed of repeating polymers of N-acetylneuraminic acid"
    ],
    correctIndex: 0,
    rationales: {
      0: "Correct. Bacillus anthracis possesses a unique capsule composed of poly-D-glutamic acid (a polypeptide polymer encoded on plasmid pXO2), rather than polysaccharide. Because it consists of D-amino acid residues, it resists host proteolytic enzymes and completely inhibits phagocytosis by polymorphonuclear leukocytes.",
      1: "Incorrect. Hyaluronic acid capsule is unique to Streptococcus pyogenes (Group A Strep), allowing it to evade immune surveillance via non-immunogenicity.",
      2: "Incorrect. Polysialic acid capsules are found in Neisseria meningitidis serogroup B and E. coli K1.",
      3: "Incorrect. Polyribosylribitol phosphate (PRP) is the type b capsular polysaccharide of Haemophilus influenzae.",
      4: "Incorrect. K1 capsular antigen of neurotropic E. coli is composed of alpha-2,8-linked polysialic acid, responsible for neonatal meningitis."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 11: Spore-Forming Gram-Positive Bacilli: Bacillus and Clostridium Species",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "Bacillus anthracis is the ONLY bacterium with a protein/polypeptide capsule (poly-D-glutamate, plasmid pXO2).",
      "Tripartite exotoxin (plasmid pXO1): Protective Antigen (PA, binding), Edema Factor (EF, adenylate cyclase), Lethal Factor (LF, zinc metalloprotease cleaving MAPKK).",
      "Cutaneous anthrax = painless black eschar ('anthrax' = Greek for coal) with extensive gelatinous edema."
    ],
    latinNames: ["Bacillus anthracis", "Streptococcus pyogenes", "Neisseria meningitidis", "Haemophilus influenzae", "Escherichia coli"],
    caseVignette: true,
    tags: ["Anthrax", "Capsule", "Poly-D-glutamate", "Zoonosis"],
    image: {
      src: "/images/figures/anthrax-eschar.png",
      caption: "Cutaneous anthrax presenting as a pathognomonic painless, depressed coal-black necrotic eschar surrounded by extensive non-pitting gelatinous edema and erythematous induration.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 20.3",
      alt: "Cutaneous anthrax eschar"
    }
  },
  {
    id: "SIMPIC-BAC-007",
    stem: "A 31-year-old pregnant woman at 28 weeks of gestation presents with flu-like illness, unremitting fever, and lower back pain. Blood cultures grow small Gram-positive rods with narrow beta-hemolysis that exhibit end-over-end 'tumbling motility' at 22°C but are non-motile at 37°C. When inoculated into human tissue culture cells, the organism polymerizes host cellular actin to form 'actin rockets' that propel it directly across cell membranes. What is this organism and its primary virulence factor for intracellular motility?",
    options: [
      "Corynebacterium diphtheriae; Diphtheria toxin",
      "Listeria monocytogenes; ActA protein",
      "Bacillus cereus; Cereulide toxin",
      "Erysipelothrix rhusiopathiae; Neuraminidase",
      "Nocardia asteroides; Cord factor (trehalose 6,6'-dimycolate)"
    ],
    correctIndex: 1,
    rationales: {
      0: "Incorrect. Corynebacterium diphtheriae is a non-motile, non-spore-forming club-shaped rod causing pseudomembranous pharyngitis via EF-2 inhibition.",
      1: "Correct. Listeria monocytogenes is a facultative intracellular, cold-tolerant (psychrotrophic) Gram-positive rod. It escapes host phagosomes via listeriolysin O (LLO) and uses its surface protein ActA to induce host actin polymerization. This creates 'actin comet tails' or 'actin rockets' that propel the bacterium directly into neighboring cells without exposing it to extracellular antibodies or complement.",
      2: "Incorrect. Bacillus cereus produces cereulide (emetic toxin) and enterotoxins causing food poisoning; it is a spore-former and does not move via actin rockets.",
      3: "Incorrect. Erysipelothrix rhusiopathiae causes erysipeloid in fish/meat handlers (H2S positive on TSI) but is non-motile and lacks ActA.",
      4: "Incorrect. Nocardia asteroides is a branching, beaded, partially acid-fast aerobe that forms brain abscesses; cord factor is a glycolipid of Mycobacterium and Nocardia."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 21: Listeria and Related Gram-Positive Bacteria",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "Listeria: Tumbling motility at 20–25°C, non-motile at 37°C, cold enrichment at 4°C (unpasteurized milk, soft cheeses, deli meats).",
      "ActA surface protein polymerizes host cell actin to spread cell-to-cell (intracellular jet propulsion).",
      "Empiric treatment for neonatal or elderly meningitis MUST include Ampicillin to cover Listeria (inherently resistant to cephalosporins!)."
    ],
    latinNames: ["Listeria monocytogenes", "Corynebacterium diphtheriae", "Bacillus cereus", "Erysipelothrix rhusiopathiae", "Nocardia asteroides"],
    caseVignette: true,
    tags: ["Listeria", "ActA", "Actin Comet", "Intracellular Pathogen"],
    image: {
      src: "/images/figures/listeria-gram.jpeg",
      caption: "Gram stain of Listeria monocytogenes in culture, showing short, regular, non-spore-forming Gram-positive bacilli appearing as single cells, pairs, or short chains resembling corynebacteria.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 21.1",
      alt: "Listeria monocytogenes Gram stain"
    }
  },
  {
    id: "SIMPIC-BAC-008",
    stem: "A 52-year-old woman who underwent an allogeneic bone marrow transplantation develops crampy abdominal pain, watery diarrhea (8–10 stools/day), low-grade fever, and leukocytosis (WBC 24,000/µL) two weeks after starting intravenous piperacillin-tazobactam. Colonoscopy reveals multiple discrete, yellowish-white plaques adherent to hyperemic colonic mucosa. Molecular testing confirms Clostridioides difficile. What are the enzymatic activities and targets of Toxin A (enterotoxin) and Toxin B (cytotoxin)?",
    options: [
      "ADP-ribosylation of elongation factor EF-2, arresting peptide translocation",
      "Constitutive stimulation of membrane guanylate cyclase, increasing intracellular cGMP",
      "Glucosyltransferases that transfer glucose onto Rho-family GTPases (Rho, Rac, Cdc42), disrupting the actin cytoskeleton",
      "Pore-forming cholesterol-dependent cytolysins that perforate tight junctions in colonic crypts",
      "Zinc endopeptidases that selectively cleave complement component C3b"
    ],
    correctIndex: 2,
    rationales: {
      0: "Incorrect. Inactivation of EF-2 via ADP-ribosylation is the action of Diphtheria toxin and Pseudomonas Exotoxin A.",
      1: "Incorrect. Activation of guanylate cyclase with increased cGMP is the mechanism of heat-stable enterotoxin (STa) of ETEC and guanylin/linaclotide.",
      2: "Correct. Clostridioides difficile toxins A (TcdA) and B (TcdB) are large clostridial glucosylating toxins. Both toxins undergo endocytosis and enzymatically monoglucosylate host cytosolic Rho-family small GTPases (RhoA, Rac1, and Cdc42) using UDP-glucose as a donor. Inactivation of Rho GTPases collapses the actin cytoskeleton, dismantles zonula occludens (tight junctions), causes apoptosis of intestinal epithelial cells, and triggers massive neutrophil recruitment forming pseudomembranes.",
      3: "Incorrect. Cholesterol-dependent cytolysins (CDCs) include streptolysin O and perfringolysin O, not C. difficile toxins.",
      4: "Incorrect. C3b cleavage is mediated by factor I with factor H, or microbial mimics; it is not the mechanism of TcdA/TcdB."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 11: Spore-Forming Gram-Positive Bacilli: Bacillus and Clostridium Species",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "C. difficile pseudomembranous colitis = Toxin A (enterotoxin/fluid secretion) + Toxin B (cytotoxin/actin disruption via Rho glucosylation).",
      "Hypervirulent NAP1/BI/027 ribotype produces 16x more Toxin A, 23x more Toxin B, and binary toxin due to a deletion in the regulatory tcdC gene.",
      "Oral fidaxomicin (RNA polymerase inhibitor) or oral vancomycin is standard 1st-line therapy."
    ],
    latinNames: ["Clostridioides difficile", "Clostridium difficile", "Corynebacterium diphtheriae", "Pseudomonas aeruginosa"],
    caseVignette: true,
    tags: ["C. difficile", "Pseudomembranous Colitis", "Rho GTPase", "Glucosyltransferase"]
  },

  // ==========================================
  // BACTERIOLOGY: GRAM-NEGATIVE RODS & PATHOGENS
  // ==========================================
  {
    id: "SIMPIC-BAC-009",
    stem: "A 28-year-old man who recently returned from an aid mission in Haiti presents with sudden, voluminous watery diarrhea that has the consistency of 'rice water' with a faint fishy odor. He has no tenesmus or fever but is severely dehydrated, with sunken eyes, poor skin turgor, and dry mucous membranes. Stool examination is negative for leukocytes and erythrocytes. Vibrio cholerae is isolated on Thiosulfate-Citrate-Bile Salts-Sucrose (TCBS) agar as yellow colonies. How does cholera toxin produce this profound secretory diarrhea?",
    options: [
      "Activates cyclic GMP via a heat-stable peptide receptor on the apical brush border",
      "ADP-ribosylates the Gi alpha subunit, preventing it from inhibiting adenylate cyclase",
      "Directly cleaves the 28S rRNA subunit of the 60S ribosome, halting protein synthesis in villus tip enterocytes",
      "ADP-ribosylates the Gs alpha subunit, permanently inhibiting GTPase activity and constitutively activating adenylate cyclase",
      "Inserts into the basolateral membrane to form non-specific calcium-conducting cation pores"
    ],
    correctIndex: 3,
    rationales: {
      0: "Incorrect. Stimulation of guanylate cyclase and cGMP is the mechanism of ETEC heat-stable toxin (STa), not cholera toxin.",
      1: "Incorrect. ADP-ribosylation of Gi-alpha is the mechanism of Pertussis toxin (Bordetella pertussis), which inactivates the inhibitory G-protein, also raising cAMP but through a distinct molecular target.",
      2: "Incorrect. Depurination of 28S rRNA in the 60S ribosomal subunit is the mechanism of Shiga toxin (Shigella dysenteriae) and Shiga-like toxin (EHEC / STEC).",
      3: "Correct. Cholera toxin (an AB5 exotoxin) enters enterocytes via retrograde transport (binding GM1 ganglioside). The catalytic A1 subunit transfers ADP-ribose from NAD+ to the alpha subunit of the stimulatory G-protein (Gs-alpha). This locks Gs-alpha in its active GTP-bound state by destroying its intrinsic GTPase activity. Constitutively active Gs persistently stimulates membrane-bound adenylate cyclase, skyrocketing intracellular cAMP levels. High cAMP phosphorylates the cystic fibrosis transmembrane conductance regulator (CFTR) channel via protein kinase A, driving massive efflux of chloride and bicarbonate into the intestinal lumen, dragging sodium and water along osmotic gradients (up to 1 liter/hour!).",
      4: "Incorrect. Pore formation is characteristic of cytolysins and hemolysins, not the cholera AB5 toxin."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 17: Vibrios, Campylobacters, and Helicobacter",
    subject: "Bacteriology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Cholera toxin = AB5 toxin -> ADP-ribosylates Gs-alpha -> prevents GTP hydrolysis -> high cAMP -> CFTR activation -> massive Cl- and water secretion.",
      "TCBS agar: Selective and differential; V. cholerae ferments sucrose -> forms yellow colonies.",
      "Key treatment is oral rehydration therapy (ORT) containing glucose and Na+ (utilizing intact SGLT-1 cotransporters)."
    ],
    latinNames: ["Vibrio cholerae", "Bordetella pertussis", "Shigella dysenteriae", "Escherichia coli"],
    caseVignette: true,
    tags: ["Cholera", "cAMP", "CFTR", "Secretory Diarrhea", "Gs protein"]
  },
  {
    id: "SIMPIC-BAC-010",
    stem: "A 45-year-old neutropenic patient undergoing induction chemotherapy for acute myeloid leukemia develops fever, chills, and rapidly evolving skin lesions on his lower extremities. The lesions begin as painless erythematous macules that progress over 24 hours into hemorrhagic bullae with dark, necrotic, gangrenous centers and erythematous borders (ecthyma gangrenosum). Blood cultures yield non-fermenting Gram-negative rods that produce a blue-green pigment and a fruity, grape-like odor. Which virulence factor of this organism functions via the exact same molecular mechanism as Diphtheria toxin?",
    options: [
      "Pyocyanin",
      "Elastase (LasB)",
      "Alkaline protease",
      "Exoenzyme S",
      "Exotoxin A"
    ],
    correctIndex: 4,
    rationales: {
      0: "Incorrect. Pyocyanin is a redox-active phenazine pigment that catalyzes the production of superoxide and hydrogen peroxide, impairing ciliary function and causing tissue damage.",
      1: "Incorrect. Elastase (LasB) is a zinc metalloprotease that cleaves elastin, collagen, and transferrin, facilitating vascular invasion and hematogenous dissemination.",
      2: "Incorrect. Alkaline protease degrades host fibrin and host immune defense proteins (e.g., antibodies, complement), contributing to tissue invasion.",
      3: "Incorrect. Exoenzyme S is a Type III secretion system effector with ADP-ribosyltransferase and GTPase-activating protein (GAP) activity targeting host Ras and cytoskeletal components, not EF-2.",
      4: "Correct. Pseudomonas aeruginosa produces Exotoxin A (ETA), an AB toxin that catalyzes the NAD+-dependent ADP-ribosylation of eukaryotic elongation factor 2 (EF-2) at a unique post-translationally modified histidine residue known as diphthamide. This irreversibly arrests ribosomal polypeptide chain elongation and causes host cell death, identical in molecular mechanism to the toxin produced by Corynebacterium diphtheriae (though their tissue tropisms and receptor binding differ)."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 16: Pseudomonas, Acinetobacter, Burkholderia, and Stenotrophomonas",
    subject: "Bacteriology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "Pseudomonas Exotoxin A and Diphtheria toxin share the IDENTICAL mechanism: ADP-ribosylation of EF-2 at diphthamide.",
      "Ecthyma gangrenosum = perivascular bacterial invasion of tunica media/adventitia causing ischemic necrotizing vasculitis in neutropenic patients.",
      "Pyocyanin (blue) + Pyoverdine (green-yellow fluorescing) give Pseudomonas its signature color."
    ],
    latinNames: ["Pseudomonas aeruginosa", "Corynebacterium diphtheriae"],
    caseVignette: true,
    tags: ["Pseudomonas", "Exotoxin A", "Ecthyma Gangrenosum", "EF-2"],
    image: {
      src: "/images/figures/pseudomonas-burn.jpeg",
      caption: "Pseudomonas aeruginosa wound infection and ecthyma gangrenosum in a burn patient, showing dark hemorrhagic necrosis and signature blue-green pyocyanin purulence.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 27.3",
      alt: "Pseudomonas aeruginosa burn infection"
    }
  },

  // ==========================================
  // VIROLOGY
  // ==========================================
  {
    id: "SIMPIC-VIR-001",
    stem: "A 3-year-old unimmunized girl is evaluated for a 3-day history of high fever (39.8°C), cough, coryza, and conjunctivitis with photophobia (the '3 Cs'). On physical examination, the physician notes tiny, irregular red spots with bluish-white central specks on the buccal mucosa opposite the lower second molars. Two days later, a maculopapular blanching rash erupts on the hairline and behind the ears, spreading downward to involve the trunk and extremities. What structural component of this virus mediates viral attachment to the host cellular receptor (CD150 / SLAM and CD46)?",
    options: [
      "Hemagglutinin (H) glycoprotein",
      "Neuraminidase (N) spike",
      "Fusion (F) protein",
      "Matrix (M) protein",
      "Large (L) polymerase subunit"
    ],
    correctIndex: 0,
    rationales: {
      0: "Correct. Measles virus (family Paramyxoviridae, genus Morbillivirus) possesses an envelope containing two major surface glycoproteins: Hemagglutinin (H) protein and Fusion (F) protein. The Hemagglutinin (H) protein mediates viral attachment to host cell receptors, specifically CD150 (Signaling Lymphocytic Activation Molecule [SLAM], found on lymphocytes and dendritic cells) and Nectin-4 (on epithelial cells).",
      1: "Incorrect. Unlike Orthomyxoviruses (influenza) and certain Paramyxoviruses (Parainfluenza and Mumps, which possess a combined Hemagglutinin-Neuraminidase [HN] glycoprotein), Measles virus lacks neuraminidase activity.",
      2: "Incorrect. The Fusion (F) protein mediates viral envelope fusion with the host plasma membrane and induces host cell-to-cell fusion, forming multinucleated giant cells (Warthin-Finkeldey cells). It does not mediate initial receptor binding.",
      3: "Incorrect. The Matrix (M) protein lines the inner viral envelope and coordinates virion assembly and budding; it has no receptor-binding function.",
      4: "Incorrect. The Large (L) protein is the viral RNA-dependent RNA polymerase responsible for replication and transcription of the negative-sense single-stranded RNA genome."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 40: Paramyxoviruses and Rubella Virus",
    subject: "Virology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Measles clinical triad: Cough, Coryza, Conjunctivitis + Koplik spots (pathognomonic, blue-white on red base).",
      "Measles virus has Hemagglutinin (H) and Fusion (F) protein, but NO Neuraminidase (unlike mumps/parainfluenza).",
      "Subacute Sclerosing Panencephalitis (SSPE) is a late fatal complication (years later) due to defective matrix protein (M)."
    ],
    latinNames: ["Morbillivirus"],
    caseVignette: true,
    tags: ["Measles", "Paramyxovirus", "Koplik Spots", "Hemagglutinin"],
    image: {
      src: "/images/figures/measles-koplik.jpeg",
      caption: "Pathognomonic Koplik spots on buccal mucosa in a pediatric patient with measles, appearing as tiny, irregular red spots with central bluish-white specks opposite the molars.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 48.5",
      alt: "Measles Koplik spots"
    }
  },
  {
    id: "SIMPIC-VIR-002",
    stem: "A 19-year-old college student presents with a 2-week history of sore throat, extreme fatigue, fever, and tender posterior cervical lymphadenopathy. Physical examination reveals tonsillar exudates, splenomegaly, and a mild palatal petechial enanthem. A peripheral blood smear demonstrates 65% mononuclear cells with 25% atypical lymphocytes (Downey cells). The Paul-Bunnell heterophile antibody test (Monospot) is strongly positive. Which cell surface molecule serves as the primary attachment receptor for the causative viral envelope glycoprotein gp350/220?",
    options: [
      "CD4 glycoprotein",
      "CD21 (Complement Receptor 2 / CR2)",
      "CD8 alpha chain",
      "CXCR4 chemokine coreceptor",
      "Intercellular adhesion molecule 1 (ICAM-1)"
    ],
    correctIndex: 1,
    rationales: {
      0: "Incorrect. CD4 is the primary receptor for the Human Immunodeficiency Virus (HIV) envelope glycoprotein gp120.",
      1: "Correct. Epstein-Barr Virus (EBV / Human Herpesvirus 4) initiates infection of mature B lymphocytes when its major viral envelope glycoprotein gp350/220 binds specifically to the CD21 molecule (also designated Complement Receptor type 2 [CR2]), which normally binds the C3d fragment of complement. Subsequent fusion requires viral gp42 binding to MHC class II molecules on the B-cell surface.",
      2: "Incorrect. CD8 is expressed on cytotoxic T lymphocytes, which proliferate into the reactive atypical lymphocytes (Downey cells) seen on peripheral smear, but EBV infects B cells via CD21, not CD8.",
      3: "Incorrect. CXCR4 is a chemokine coreceptor utilized by T-tropic (X4) strains of HIV-1.",
      4: "Incorrect. ICAM-1 (CD54) is the primary cellular receptor for the majority of human Rhinoviruses (enterovirus family)."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 44: Herpesviruses",
    subject: "Virology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "EBV attaches to CD21 (CR2) on B cells via envelope glycoprotein gp350.",
      "Atypical lymphocytes (Downey cells) on peripheral smear are reactive CD8+ T cells fighting the infected B cells.",
      "Administering ampicillin or amoxicillin in EBV mononucleosis characteristically triggers a non-allergic maculopapular rash."
    ],
    latinNames: ["Epstein-Barr virus", "Herpesvirus"],
    caseVignette: true,
    tags: ["EBV", "CD21", "Mononucleosis", "Heterophile Antibody"],
    image: {
      src: "/images/figures/ebv-downey-cell.jpeg",
      caption: "Reactive atypical CD8+ cytotoxic T lymphocyte (Downey cell) on peripheral blood smear of an infectious mononucleosis patient, showing abundant cytoplasm scalloping around adjacent red blood cells.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 43.13",
      alt: "EBV Downey cell atypical lymphocyte"
    }
  },
  {
    id: "SIMPIC-VIR-003",
    stem: "During an annual influenza outbreak, public health authorities detect a novel Influenza A strain that causes widespread pandemics across multiple continents with high mortality in young adults. Genetic sequencing reveals that the new strain has acquired an entirely novel Hemagglutinin (H2 to H3) and Neuraminidase (N1 to N2) gene segment derived from an avian influenza virus that coinfected a swine intermediate host alongside a human influenza strain. What specific virologic phenomenon explains this dramatic evolutionary leap?",
    options: [
      "Antigenic drift due to error-prone viral RNA-dependent RNA polymerase accumulation of point mutations",
      "Phenotypic mixing resulting in pseudotyped envelopes without genomic alterations",
      "Antigenic shift due to genetic reassortment of segmented negative-sense RNA genomes",
      "Recombination between non-segmented positive-sense RNA strands via copy-choice polymerase jumping",
      "Complementation of a replication-defective mutant by an active wild-type viral polymerase"
    ],
    correctIndex: 2,
    rationales: {
      0: "Incorrect. Antigenic drift involves gradual, minor changes in hemagglutinin and neuraminidase resulting from point mutations introduced by the proofreading-deficient RNA-dependent RNA polymerase during replication. Drift causes seasonal epidemics, requiring annual vaccine updates, not major pandemics.",
      1: "Incorrect. Phenotypic mixing occurs when two viruses exchange surface envelope proteins without genetic change; progeny of subsequent replication rounds revert completely to the parental genotype.",
      2: "Correct. Antigenic shift is an abrupt, major change in the influenza virus genome that occurs when two distinct influenza A strains coinfect the same host cell (such as in pigs or birds) and exchange entire RNA segments during viral packaging. Because Influenza A possesses a segmented genome consisting of 8 individual negative-sense ssRNA segments, reassortment yields a chimeric progeny virion with novel HA and/or NA surface antigens to which the human population has zero pre-existing immunity, precipitating global pandemics.",
      3: "Incorrect. Recombination occurs in non-segmented RNA viruses (like Picornaviruses or Coronaviruses) via polymerase template switching ('copy-choice'), rather than reassortment of intact segments.",
      4: "Incorrect. Complementation occurs when one virus produces a functional protein that rescues a defective virus, without altering either viral genome."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 39: Orthomyxoviruses (Influenza Viruses)",
    subject: "Virology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Antigenic Shift = Segmented genome Reassortment -> Pandemic (BOAR: Bunyavirus, Orthomyxovirus, Arenavirus, Reovirus).",
      "Antigenic Drift = Random point mutations in HA/NA -> Epidemic / Seasonal changes.",
      "Only Influenza A undergoes antigenic shift because it infects animals (swine, waterfowl) in addition to humans; Influenza B is human-restricted."
    ],
    latinNames: ["Influenzavirus A", "Influenzavirus B"],
    caseVignette: true,
    tags: ["Influenza", "Antigenc Shift", "Reassortment", "Pandemic"]
  },

  // ==========================================
  // MYCOLOGY
  // ==========================================
  {
    id: "SIMPIC-MYC-001",
    stem: "A 43-year-old spelunker (cave explorer) and construction worker from the Ohio and Mississippi River valleys presents with fever, dry cough, malaise, and night sweats of 3 weeks' duration. Chest radiography reveals patchy bilateral hilar lymphadenopathy and small nodular pulmonary infiltrates. Bone marrow and bronchoalveolar lavage biopsies reveal tiny (2–4 µm) oval, intracellular budding yeast forms packed densely within host reticuloendothelial macrophages. Sputum culture at 25°C yields a mold with large, tuberculate macroconidia. What is the definitive etiologic agent?",
    options: [
      "Blastomyces dermatitidis",
      "Paracoccidioides brasiliensis",
      "Coccidioides immitis",
      "Histoplasma capsulatum",
      "Cryptococcus neoformans"
    ],
    correctIndex: 3,
    rationales: {
      0: "Incorrect. Blastomyces dermatitidis forms large (8–15 µm) yeasts with broad-based budding and a thick, doubly refractive cell wall at 37°C, typically in the Great Lakes / Ohio River basin with verrucous skin and bone lesions.",
      1: "Incorrect. Paracoccidioides brasiliensis is endemic to Central and South America and produces large yeasts with multiple narrow-necked buds resembling a 'ship's steering wheel' or 'Mickey Mouse ears'.",
      2: "Incorrect. Coccidioides immitis is endemic to the southwestern US (San Joaquin Valley) and forms large thick-walled spherules (20–100 µm) filled with endospores in tissue, not intracellular yeasts.",
      3: "Correct. Histoplasma capsulatum is a thermally dimorphic fungus endemic to the Ohio and Mississippi River valleys, where it thrives in soil enriched with bird (starling) or bat guano (caves, spelunking, old chicken coops). At 37°C (tissue phase), it exists as small (2–4 µm), narrow-necked budding yeasts that characteristically survive and multiply inside alveolar macrophages and histiocytes. At 25°C (environmental mold phase), it produces distinctive thick-walled, finger-like tuberculate macroconidia.",
      4: "Incorrect. Cryptococcus neoformans is a monomorphic encapsulated yeast (5–10 µm) with unequal narrow-based budding and a prominent mucopolysaccharide capsule visible on India ink; it is not thermally dimorphic."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 45: Medical Mycology",
    subject: "Mycology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "Histoplasma: 'Histo Hides in Histiocytes' -> tiny (2–4 µm) intracellular yeasts inside macrophages.",
      "Associated with bat/bird droppings, spelunking, caves in Ohio/Mississippi River valleys.",
      "Mold phase (25°C) produces tuberculate chlamydospores/macroconidia."
    ],
    latinNames: ["Histoplasma capsulatum", "Blastomyces dermatitidis", "Coccidioides immitis", "Paracoccidioides brasiliensis", "Cryptococcus neoformans"],
    caseVignette: true,
    tags: ["Histoplasma", "Dimorphic Fungi", "Macrophages", "Mycology"],
    image: {
      src: "/images/figures/histo-intracellular.jpeg",
      caption: "Giemsa stain of a bone marrow biopsy showing tiny (2–4 µm) oval intracellular budding yeast forms of Histoplasma capsulatum densely packed within host reticuloendothelial macrophages.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 60.4",
      alt: "Histoplasma capsulatum in macrophages"
    }
  },
  {
    id: "SIMPIC-MYC-002",
    stem: "A 36-year-old HIV-infected male with a CD4+ T-cell count of 35/µL presents with a 2-week history of worsening global headache, photophobia, nausea, and low-grade fever. Neurologic examination reveals mild neck stiffness without focal deficits. Lumbar puncture demonstrates an opening pressure of 340 mm H2O. Microscopic examination of the CSF using an India ink negative stain reveals round, budding yeast cells surrounded by wide, clear halos. Mucicarmine staining stains the fungal cell wall bright carmine red. What is the biochemical composition of this diagnostic capsular halo?",
    options: [
      "Galactomannan repeating disaccharides",
      "Ergosterol-phospholipid bilayer",
      "Chitin cross-linked with beta-1,3-glucan",
      "Zymosan alpha-mannan glycoprotein",
      "Glucuronoxylomannan (GXM) polysaccharide"
    ],
    correctIndex: 4,
    rationales: {
      0: "Incorrect. Galactomannan is a cell wall carbohydrate released into serum by Aspergillus fumigatus, used as a diagnostic serum biomarker.",
      1: "Incorrect. Ergosterol is the primary sterol in fungal plasma membranes (the target of polyenes and azoles), not the extracellular capsule.",
      2: "Incorrect. Chitin and beta-1,3-glucan form the structural cell wall beneath the capsule; beta-1,3-glucan is targeted by echinocandins (which are notoriously inactive against Cryptococcus!).",
      3: "Incorrect. Zymosan is a beta-glucan cell wall component of Saccharomyces cerevisiae.",
      4: "Correct. Cryptococcus neoformans (and C. gattii) is the only clinically significant encapsulated fungal pathogen. Its prominent antiphagocytic capsule is composed primarily of glucuronoxylomannan (GXM, >90%) and galactoxylomannan (GalXM). GXM repels negative charges on phagocytic membranes, downregulates leukocyte migration, inhibits complement deposition, and excludes the dark colloidal carbon particles in India ink, resulting in a luminous halo around the central yeast cell. Mucicarmine specifically stains the acidic mucopolysaccharides of the capsule bright red."
    },
    source: "Murray 9th Ed",
    chapter: "Ch. 64: Cryptococcus and Related Yeasts",
    subject: "Mycology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Cryptococcus neoformans = Only encapsulated yeast; capsule = Glucuronoxylomannan (GXM).",
      "Diagnostics: India ink (clear halo), Mucicarmine (red capsule), Latex agglutination (detects GXM capsular antigen), Sabouraud agar with niger seed (caffeic acid -> melanin via laccase).",
      "Echinocandins (caspofungin) have NO activity against Cryptococcus; standard therapy is Amphotericin B + Flucytosine, followed by Fluconazole."
    ],
    latinNames: ["Cryptococcus neoformans", "Cryptococcus gattii", "Aspergillus fumigatus", "Saccharomyces cerevisiae"],
    caseVignette: true,
    tags: ["Cryptococcus", "GXM", "Capsule", "India Ink", "Meningitis"],
    image: {
      src: "/images/figures/crypto-gram-halo.jpeg",
      caption: "Gram stain of Cryptococcus neoformans exhibiting round, budding yeast cells surrounded by wide, unstained clear halos created by the prominent glucuronoxylomannan (GXM) polysaccharide capsule.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 60.2",
      alt: "Cryptococcus neoformans capsule halo"
    }
  },

  // ==========================================
  // PARASITOLOGY
  // ==========================================
  {
    id: "SIMPIC-PAR-001",
    stem: "A 26-year-old traveler returns from a 2-month safari in sub-Saharan Africa. Five days after returning, he develops recurring paroxysms of severe shaking chills, spiking fevers up to 40.5°C, and diaphoresis every 48 hours. Giemsa-stained peripheral blood smears reveal delicate, tiny ring-form trophozoites within normal-sized red blood cells, with multiple rings per erythrocyte, marginal 'appliqué' forms, and banana- or crescent-shaped gametocytes. The patient is diagnosed with Plasmodium falciparum malaria. What parasite-encoded surface protein is responsible for cytoadherence to endothelial CD36 and ICAM-1, mediating microvascular sequestration?",
    options: [
      "Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1)",
      "Circumsporozoite protein (CSP)",
      "Duffy antigen receptor for chemokines (DARC)",
      "Merozoite surface protein 1 (MSP-1)",
      "Apical membrane antigen 1 (AMA-1)"
    ],
    correctIndex: 0,
    rationales: {
      0: "Correct. Plasmodium falciparum erythrocyte membrane protein 1 (PfEMP1), encoded by the hypervariable var gene family, is exported to the erythrocyte membrane where it clusters in surface 'knobs'. PfEMP1 binds host endothelial receptors including CD36, ICAM-1, and chondroitin sulfate A. This causes cytoadherence and sequestration of parasitized RBCs in deep capillary venules, preventing splenic clearance and triggering cerebral malaria, tissue ischemia, and lactic acidosis.",
      1: "Incorrect. Circumsporozoite protein (CSP) coats the surface of the infective sporozoite and mediates binding to heparan sulfate proteoglycans on hepatocytes during the pre-erythrocytic liver stage; it is the target of the RTS,S/AS01 malaria vaccine.",
      2: "Incorrect. Duffy antigen (DARC) is the human erythrocyte receptor required for Plasmodium vivax merozoite invasion; individuals who are Duffy-negative (Fy(a-b-)) are resistant to P. vivax.",
      3: "Incorrect. Merozoite surface protein 1 (MSP-1) is involved in initial attachment of merozoites to erythrocytes prior to invasion, not endothelial cytoadherence.",
      4: "Incorrect. AMA-1 is an apical organelle protein involved in moving junction formation during erythrocyte invasion by merozoites."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 46: Medical Parasitology",
    subject: "Parasitology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "P. falciparum: Crescent/banana-shaped gametocytes, multiple rings per RBC, appliqué forms, normal-sized RBCs.",
      "PfEMP1 (var genes) = endothelial cytoadherence (knobs) -> sequestration -> cerebral malaria & renal failure.",
      "P. vivax and P. ovale have hypnozoites in liver (dormant stage requiring primaquine / tafenoquine to prevent relapse)."
    ],
    latinNames: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale"],
    caseVignette: true,
    tags: ["Malaria", "PfEMP1", "Cytoadherence", "Parasitology"],
    image: {
      src: "/images/figures/plasmodium-gametocyte.jpeg",
      caption: "Thin Giemsa blood smear showing the pathognomonic diagnostic crescent- or sausage-shaped mature gametocyte of Plasmodium falciparum with central chromatin and hemozoin pigment.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 73.3",
      alt: "Plasmodium falciparum gametocyte"
    }
  },
  {
    id: "SIMPIC-PAR-002",
    stem: "A 32-year-old agricultural worker from rural Southeast Asia presents with recurrent wheezing, transient pulmonary infiltrates, peripheral eosinophilia (28%), epigastric pain, and episodic 'larva currens' (a rapidly advancing, intensely pruritic serpiginous urticarial rash on the perianal area and buttocks, moving up to 5–10 cm/hour). Stool examination reveals rhabditiform larvae rather than helminth eggs. What unique biological characteristic of this nematode enables it to persist within a human host for decades and potentially cause life-threatening hyperinfection syndrome during corticosteroid therapy?",
    options: [
      "Encystation of calcified nurse cells in striated skeletal muscle fibers",
      "Ability to complete its entire parasitic life cycle and autoinfect the host via transformation of rhabditiform to filariform larvae in the intestinal lumen",
      "Obligate migration through freshwater snails as intermediate hosts with asexual redial multiplication",
      "Release of embryonated operculated eggs requiring ingestion by freshwater copepods",
      "Formation of subcutaneous migratory nodules harboring adult microfilariae surrounded by Onchocerca"
    ],
    correctIndex: 1,
    rationales: {
      0: "Incorrect. Encystation in striated skeletal muscle (nurse cells) characterizes Trichinella spiralis, acquired from undercooked pork or wild game.",
      1: "Correct. Strongyloides stercoralis is unique among intestinal nematodes because its non-infective rhabditiform larvae can molt within the host's intestinal tract into infective filariform larvae. These filariform larvae penetrate the colonic mucosa or perianal skin to re-enter venous circulation and repeat the pulmonary-tracheal-intestinal cycle (internal autoinfection). This autoinfective cycle allows Strongyloides to persist silently for decades. When the host receives immunosuppressants (especially glucocorticoids, which upregulate parasite ecdysteroid receptors), autoinfection explodes into Hyperinfection Syndrome and Disseminated Strongyloidiasis, often leading to Gram-negative bacteremia/meningitis from gut flora carried on larval surfaces.",
      2: "Incorrect. Freshwater snail intermediate hosts with redial stages are required by Trematodes (flukes like Schistosoma, Clonorchis, and Fasciola), not nematodes.",
      3: "Incorrect. Operculated eggs ingested by freshwater copepods (Cyclops) characterize the broad fish tapeworm Diphyllobothrium latum.",
      4: "Incorrect. Subcutaneous onchocercomas containing adult worms producing microfilariae characterize Onchocerca volvulus (river blindness), transmitted by the blackfly (Simulium)."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 46: Medical Parasitology",
    subject: "Parasitology",
    difficulty: "Round 2 (Clinical Vignettes)",
    highYieldPearls: [
      "Strongyloides stercoralis: Stool contains RHABDITIFORM LARVAE, NOT eggs!",
      "Autoinfection cycle -> can persist for 30–50+ years without re-exposure.",
      "Steroids / HTLV-1 infection -> catastrophic Hyperinfection syndrome with enteric Gram-negative sepsis.",
      "Drug of choice is Ivermectin (binds glutamate-gated chloride channels)."
    ],
    latinNames: ["Strongyloides stercoralis", "Trichinella spiralis", "Diphyllobothrium latum", "Onchocerca volvulus"],
    caseVignette: true,
    tags: ["Strongyloides", "Autoinfection", "Larva Currens", "Hyperinfection"],
    image: {
      src: "/images/figures/strongyloides-larva.jpeg",
      caption: "Wet mount of stool revealing an active rhabditiform larva of Strongyloides stercoralis with a short buccal cavity and prominent genital primordium, distinguishing it from hookworm larvae.",
      sourceRef: "Murray Medical Microbiology 9th Ed, Fig. 74.12",
      alt: "Strongyloides stercoralis rhabditiform larva"
    }
  },

  // ==========================================
  // GENERAL MICROBIOLOGY, IMMUNOLOGY & ANTIMICROBIALS
  // ==========================================
  {
    id: "SIMPIC-GEN-001",
    stem: "Which of the following structural components is found exclusively in the cell wall of Gram-positive bacteria, anchoring to either the peptidoglycan matrix or the underlying plasma membrane, and acts as a major surface antigen recognized by human Toll-like Receptor 2 (TLR2)?",
    options: [
      "Lipopolysaccharide (LPS) lipid A",
      "Porin outer membrane trimers",
      "Lipoteichoic acid (LTA) and wall teichoic acid (WTA)",
      "Periplasmic beta-lactamase storage layer",
      "Lipooligosaccharide (LOS) lacking O-antigen repeating units"
    ],
    correctIndex: 2,
    rationales: {
      0: "Incorrect. Lipid A is the toxic, hydrophobic anchor of lipopolysaccharide (LPS) found exclusively in the outer leaflet of Gram-negative bacterial outer membranes; it is recognized by TLR4/MD-2, not TLR2.",
      1: "Incorrect. Porins are transmembrane channel proteins located in the outer membrane of Gram-negative bacteria.",
      2: "Correct. Teichoic acids and lipoteichoic acids (LTA) are unique, essential polyol phosphate polymers (ribitol or glycerol phosphate) found exclusively in the thick peptidoglycan envelope of Gram-positive bacteria. Lipoteichoic acid is anchored covalently to the glycolipids of the plasma membrane, whereas wall teichoic acid is anchored to peptidoglycan. LTA provides negative surface charge, binds divalent cations (Mg2+), regulates autolysins, and serves as a pathogen-associated molecular pattern (PAMP) recognized by host TLR2/TLR6 heterodimers.",
      3: "Incorrect. The periplasmic space is located between the inner and outer membranes of Gram-negative bacteria.",
      4: "Incorrect. Lipooligosaccharide (LOS) is present in mucosal Gram-negative pathogens like Neisseria and Haemophilus."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 2: Cell Structure",
    subject: "General Microbiology & Immunology",
    difficulty: "Round 1 (Recall & Basics)",
    highYieldPearls: [
      "Gram-Positive: Thick peptidoglycan + Teichoic acid / Lipoteichoic acid (TLR2 agonist).",
      "Gram-Negative: Thin peptidoglycan + Outer membrane containing LPS / Endotoxin (Lipid A, TLR4 agonist).",
      "Lysozyme cleaves beta-1,4 glycosidic bonds between NAG and NAM in peptidoglycan."
    ],
    latinNames: ["Staphylococcus", "Streptococcus", "Neisseria", "Haemophilus"],
    caseVignette: false,
    tags: ["Cell Wall", "Teichoic Acid", "Gram Positive", "TLR2"]
  },
  {
    id: "SIMPIC-GEN-002",
    stem: "An intensive care unit patient with ventilator-associated pneumonia caused by multi-drug resistant Klebsiella pneumoniae is treated with high-dose intravenous tobramycin. After 7 days, the bacterial isolate develops high-level resistance to tobramycin and gentamicin but remains susceptible to amikacin. What is the most common enzymatic mechanism responsible for this acquired aminoglycoside resistance?",
    options: [
      "Enzymatic methylation of the 16S ribosomal RNA decoding A-site",
      "Active efflux mediated by the MexAB-OprM tripartite pump system",
      "Mutational loss of the OmpK36 outer membrane porin channel",
      "Plasmid-encoded aminoglycoside-modifying enzymes (acetyltransferases, phosphotransferases, adenyltransferases)",
      "Target site mutation in the rpsL gene encoding 30S ribosomal protein S12"
    ],
    correctIndex: 3,
    rationales: {
      0: "Incorrect. 16S rRNA methyltransferases (e.g., ArmA, RmtB) confer pan-aminoglycoside resistance (including to amikacin and plazomicin).",
      1: "Incorrect. Efflux pumps like MexAB-OprM are classic in Pseudomonas aeruginosa and confer low-to-moderate multidrug resistance.",
      2: "Incorrect. Porin deletion (OmpK35/36) mediates carbapenem resistance in Klebsiella pneumoniae when paired with ESBL or AmpC, but does not explain selective aminoglycoside resistance.",
      3: "Correct. The most common mechanism of acquired aminoglycoside resistance is the enzymatic covalent modification of the antibiotic molecule by plasmid- or transposon-encoded aminoglycoside-modifying enzymes (AMEs). These include Aminoglycoside Acetyltransferases (AAC), Aminoglycoside Phosphotransferases (APH), and Aminoglycoside Nucleotidyl/Adenyltransferases (ANT). These modifications prevent the drug from binding to the 30S ribosomal subunit. Amikacin is less susceptible to many AMEs due to its protective L-hydroxyaminobutyryl amide (HABA) side chain.",
      4: "Incorrect. rpsL mutations in protein S12 mediate high-level streptomycin resistance in Mycobacterium tuberculosis."
    },
    source: "Jawetz 28th Ed",
    chapter: "Ch. 28: Antimicrobial Chemotherapy",
    subject: "General Microbiology & Immunology",
    difficulty: "Finals (Advanced & Triads)",
    highYieldPearls: [
      "Aminoglycoside resistance: Most common = Enzymatic modification (acetylation, phosphorylation, adenylation).",
      "Amikacin has a bulky HABA side chain that protects it from many modifying enzymes.",
      "Aminoglycosides bind the 30S ribosomal subunit, require O2-dependent uptake (ineffective against anaerobes!), and cause nephrotoxicity and ototoxicity."
    ],
    latinNames: ["Klebsiella pneumoniae", "Pseudomonas aeruginosa", "Mycobacterium tuberculosis"],
    caseVignette: true,
    tags: ["Aminoglycosides", "Resistance Mechanisms", "Pharmacology"]
  },
{
  "id": "SIMPIC-BAC-011",
  "stem": "A 38-year-old police officer presents to the emergency department with fever, tenosynovitis, and painful asymmetric monoarthritis of the right knee. Cultures of the synovial fluid grow Gram-negative diplococci. This is the patient's fifth confirmed episode of disseminated gonococcal infection over the past six years. Which host immunological defect should be investigated to explain these recurrent disseminated infections?",
  "options": [
    "Myeloperoxidase (MPO) deficiency in primary azurophilic granules",
    "Selective IgA deficiency leading to mucosal colonization failure",
    "Defective neutrophil oxidative burst due to NADPH oxidase mutation (Chronic Granulomatous Disease)",
    "Absent adenosine deaminase (ADA) activity in circulating lymphocytes",
    "Deficiency of the terminal membrane attack complex components (C5, C6, C7, C8, or C9)"
  ],
  "correctIndex": 4,
  "rationales": {
    "0": "Incorrect. Myeloperoxidase deficiency impairs hypochlorous acid production but patients are largely asymptomatic or have mild Candida infections.",
    "1": "Incorrect. Selective IgA deficiency is the most common primary immunodeficiency and predisposes to recurrent sinopulmonary and gastrointestinal infections (Giardia), but does not cause recurrent systemic disseminated gonococcemia.",
    "2": "Incorrect. NADPH oxidase deficiency causes Chronic Granulomatous Disease (CGD), predisposing to catalase-positive organisms (Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens, Nocardia, Aspergillus), not Neisseria.",
    "3": "Incorrect. Absent adenosine deaminase (ADA) activity leads to toxic accumulation of dATP, causing severe combined immunodeficiency (SCID) with profound T, B, and NK cell lymphopenia in early infancy.",
    "4": "Correct. Patients with inherited deficiencies in the terminal complement cascade (C5, C6, C7, C8, or C9), which form the membrane attack complex (MAC), have a dramatically increased susceptibility (up to 1,000- to 10,000-fold) to recurrent, invasive bacteremia and disseminated infections caused by Neisseria species (Neisseria meningitidis and Neisseria gonorrhoeae). Complement-mediated serum bactericidal activity directly depends on MAC pore insertion through the thin Gram-negative outer membrane."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 20: The Neisseriae",
  "subject": "Bacteriology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Recurrent Neisseria bacteremia/DGI = MAC (C5-C9) deficiency.",
    "Disseminated Gonococcal Infection (DGI) classic triad: Tenosynovitis, Dermatitis (painless pustules), and migratory Polyarthralgia / purulent monoarthritis.",
    "Screen for complement deficiency using the CH50 hemolytic complement assay."
  ],
  "latinNames": [
    "Neisseria gonorrhoeae",
    "Neisseria meningitidis",
    "Staphylococcus aureus"
  ],
  "caseVignette": true,
  "tags": [
    "Neisseria",
    "Complement",
    "C5-C9",
    "MAC",
    "Arthritis"
  ]
},
{
  "id": "SIMPIC-BAC-012",
  "stem": "A 25-year-old sexually active woman presents with fever and acute right knee pain and effusion. Synovial fluid aspiration reveals abundant polymorphonuclear leukocytes and intracellular Gram-negative diplococci. The organism grows on Thayer-Martin chocolate agar incubated in 5% CO2 and is oxidase positive. Rapid carbohydrate fermentation testing shows acid production from glucose, but not from maltose, lactose, or sucrose. What is the identity of this organism?",
  "options": [
    "Neisseria gonorrhoeae",
    "Neisseria meningitidis",
    "Neisseria lactamica",
    "Moraxella catarrhalis",
    "Neisseria sicca"
  ],
  "correctIndex": 0,
  "rationales": {
    "0": "Correct. Neisseria gonorrhoeae oxidizes Glucose only ('Gonorrhoeae = Glucose only'). It fails to produce acid from maltose, lactose, or sucrose. Thayer-Martin selective medium contains vancomycin (inhibits Gram-positives), colistin (inhibits Gram-negatives except Neisseria), nystatin (inhibits fungi), and trimethoprim (inhibits swarming Proteus).",
    "1": "Incorrect. Neisseria meningitidis produces acid from BOTH Glucose and Maltose ('Meningitidis = Maltose and Glucose').",
    "2": "Incorrect. Neisseria lactamica oxidizes Glucose, Maltose, and Lactose ('Lactamica = Lactose').",
    "3": "Incorrect. Moraxella catarrhalis is asaccharolytic (does not ferment or oxidize any carbohydrates) and is positive for butyrate esterase.",
    "4": "Incorrect. Neisseria sicca oxidizes glucose, maltose, and sucrose; it is a harmless commensal of the nasopharynx."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 20: The Neisseriae",
  "subject": "Bacteriology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "N. gonorrhoeae: Glucose (+), Maltose (-).",
    "N. meningitidis: Glucose (+), Maltose (+).",
    "Thayer-Martin agar components: Vancomycin, Colistin, Nystatin, Trimethoprim (VPN / VCN-T)."
  ],
  "latinNames": [
    "Neisseria gonorrhoeae",
    "Neisseria meningitidis",
    "Neisseria lactamica",
    "Moraxella catarrhalis"
  ],
  "caseVignette": true,
  "tags": [
    "Neisseria",
    "Carbohydrate Utilization",
    "Thayer-Martin"
  ]
},
{
  "id": "SIMPIC-BAC-013",
  "stem": "A 6-year-old boy with high fever, petechial purpuric skin lesions on his lower extremities, and nuchal rigidity is diagnosed with meningococcal meningitis. Cerebrospinal fluid cultures grow Neisseria meningitidis serogroup B. Which of the following is the most appropriate chemoprophylaxis recommendation for close household contacts who shared his living quarters during the 7 days prior to disease onset?",
  "options": [
    "No chemoprophylaxis is indicated if household contacts are asymptomatic",
    "Oral rifampin for 2 days (or single-dose intramuscular ceftriaxone / oral ciprofloxacin)",
    "Administration of a single dose of meningococcal capsular polysaccharide vaccine",
    "A 10-day course of high-dose oral amoxicillin-clavulanate",
    "Intravenous penicillin G for 7 days"
  ],
  "correctIndex": 1,
  "rationales": {
    "0": "Incorrect. Household contacts, daycare contacts, and anyone exposed directly to oral secretions have an attack rate 500 to 1,000 times higher than the general population; chemoprophylaxis is urgently mandated regardless of symptoms.",
    "1": "Correct. Chemoprophylaxis is indicated for close contacts to eliminate asymptomatic nasopharyngeal carriage of Neisseria meningitidis. The standard regimens are: Oral Rifampin (600 mg BID for 2 days for adults, 10 mg/kg BID for 2 days for children), single-dose oral Ciprofloxacin (500 mg, adults only), or single-dose intramuscular Ceftriaxone (250 mg, safe in pregnancy).",
    "2": "Incorrect. Vaccines take 10\u201314 days to elicit protective antibody titers, which is far too slow to prevent immediate secondary attack (which typically occurs within 1\u20135 days). Furthermore, standard polysaccharide vaccines do not cover serogroup B.",
    "3": "Incorrect. Amoxicillin does not achieve adequate concentrations in nasopharyngeal secretions to reliably eradicate meningococcal carriage.",
    "4": "Incorrect. Intravenous penicillin G treats active invasive meningococcemia/meningitis but does not reliably eradicate nasopharyngeal carriage because penicillin poorly crosses the uninflamed nasopharyngeal mucosal barrier."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 20: The Neisseriae",
  "subject": "Bacteriology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Meningococcal contacts chemoprophylaxis: Rifampin (BID x 2 days), Ceftriaxone (single IM), or Ciprofloxacin.",
    "Rifampin causes harmless orange-red discoloration of body fluids (urine, tears, sweat) and strongly induces CYP450 enzymes.",
    "Serogroup B capsule consists of polysialic acid (identical to human NCAM), rendering it poorly immunogenic."
  ],
  "latinNames": [
    "Neisseria meningitidis"
  ],
  "caseVignette": true,
  "tags": [
    "Meningococcus",
    "Prophylaxis",
    "Rifampin",
    "Public Health"
  ]
},
{
  "id": "SIMPIC-BAC-014",
  "stem": "A 28-year-old pregnant woman at 10 weeks of gestation presents for her first prenatal visit. She was treated for primary syphilis with intramuscular benzathine penicillin 7 years ago. Routine prenatal serologic screening yields the following results: Rapid Plasma Reagin (RPR): Nonreactive; Treponema pallidum Particle Agglutination (TP-PA): Reactive. What is the most accurate clinical interpretation of these serologic findings?",
  "options": [
    "She has active secondary syphilis and requires immediate lumbar puncture to rule out neurosyphilis",
    "She has active latent syphilis and requires three weekly doses of benzathine penicillin G",
    "Her prior treatment was effective; the reactive TP-PA represents persistent lifetime treponemal antibody seropositivity",
    "The positive TP-PA is an antiphospholipid cross-reaction caused by pregnancy",
    "The fetus is at acute risk for congenital syphilis and urgent amniocentesis is indicated"
  ],
  "correctIndex": 2,
  "rationales": {
    "0": "Incorrect. Secondary syphilis is characterized by high-titer nontreponemal tests (RPR usually >= 1:16 or 1:32); a nonreactive RPR rules out active secondary syphilis.",
    "1": "Incorrect. In treated latent syphilis where RPR becomes nonreactive (or serofast at <= 1:2), retreatment is unnecessary if documented past adequate penicillin therapy was completed.",
    "2": "Correct. Nontreponemal tests (RPR, VDRL) measure antibodies against cardiolipin-lecithin-cholesterol antigen released from damaged cells. Nontreponemal antibody titers correlate with disease activity and decline fourfold or become nonreactive following successful therapy. In contrast, treponemal-specific tests (TP-PA, FTA-ABS, EIA) measure antibodies directed against Treponema pallidum antigens and characteristically remain positive for the patient's entire lifetime (the 'serologic scar'), regardless of clinical cure.",
    "3": "Incorrect. Pregnancy causes biologic false-positives on NONTREPONEMAL tests (RPR/VDRL), not on specific treponemal tests (TP-PA).",
    "4": "Incorrect. Because her RPR is nonreactive and prior treatment was documented, she is non-infectious and the fetus is not at risk for congenital syphilis."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 24: Spirochetes: Treponema, Borrelia, and Leptospira",
  "subject": "Bacteriology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Nontreponemal tests (VDRL, RPR): Quantitative, correlates with disease activity, turns negative after cure.",
    "Treponemal tests (FTA-ABS, TP-PA): Qualitative, remains POSITIVE for life ('serologic scar').",
    "Drug of choice for ALL stages of syphilis is Penicillin G (desensitize if allergic in pregnancy!)."
  ],
  "latinNames": [
    "Treponema pallidum"
  ],
  "caseVignette": true,
  "tags": [
    "Syphilis",
    "Serology",
    "RPR",
    "TP-PA",
    "Treponema"
  ]
},
{
  "id": "SIMPIC-BAC-015",
  "stem": "A 12-year-old Boy Scout develops a flat, expanding erythematous cutaneous lesion on his left calf with central clearing ('bull's-eye' targetoid appearance) two weeks after camping in Mystic, Connecticut. Three weeks later, he develops fever, myalgias, arthralgias, and transient bilateral facial nerve palsy (Bell's palsy). What organism caused this infection, and what is its primary vector?",
  "options": [
    "Borrelia recurrentis transmitted by the Pediculus humanus human body louse",
    "Rickettsia rickettsii transmitted by the Dermacentor variabilis dog tick",
    "Francisella tularensis transmitted by the Chrysops deer fly",
    "Borrelia burgdorferi transmitted by the Ixodes scapularis deer tick",
    "Leptospira interrogans transmitted by direct skin contact with rodent urine"
  ],
  "correctIndex": 3,
  "rationales": {
    "0": "Incorrect. Borrelia recurrentis causes louse-borne epidemic relapsing fever, transmitted by crushing body lice (Pediculus humanus), not by Ixodes ticks.",
    "1": "Incorrect. Rickettsia rickettsii causes Rocky Mountain Spotted Fever (RMSF), characterized by a centripetal petechial rash starting on wrists/ankles and spreading to palms/soles and trunk, transmitted by Dermacentor ticks.",
    "2": "Incorrect. Francisella tularensis causes tularemia (ulceroglandular form with painful regional lymphadenopathy).",
    "3": "Correct. Lyme disease is caused by the microaerophilic spirochete Borrelia burgdorferi (and B. afzelii, B. garinii in Europe/Asia), transmitted by the hard-bodied tick Ixodes scapularis (in northeastern and upper midwestern USA) or Ixodes pacificus (in western USA). Stage 1 (early localized) features erythema migrans (targetoid bull's-eye rash). Stage 2 (early disseminated) features bilateral Bell's palsy (cranial nerve VII), AV block (carditis), and migratory arthralgias. Stage 3 (late) features chronic asymmetric large-joint oligoarthritis (especially the knee).",
    "4": "Incorrect. Leptospira interrogans causes leptospirosis / Weil disease following immersion in water contaminated by rodent or livestock urine."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 24: Spirochetes: Treponema, Borrelia, and Leptospira",
  "subject": "Bacteriology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "Lyme disease triad: Erythema migrans (Stage 1), Bilateral Bell's palsy / AV block (Stage 2), Chronic monoarthritis (Stage 3).",
    "Vector: Ixodes scapularis (nymph stage feeds for >=36-48 hours to transmit spirochetes).",
    "Treatment: Doxycycline (oral, 1st-line for adults/children), Amoxicillin (pregnancy), Ceftriaxone (IV for neuroborreliosis/carditis)."
  ],
  "latinNames": [
    "Borrelia burgdorferi",
    "Rickettsia rickettsii",
    "Francisella tularensis",
    "Borrelia recurrentis",
    "Leptospira interrogans"
  ],
  "caseVignette": true,
  "tags": [
    "Lyme Disease",
    "Borrelia",
    "Ixodes",
    "Erythema Migrans"
  ]
},
{
  "id": "SIMPIC-BAC-016",
  "stem": "A 42-year-old woman developed fever up to 39\u00b0C lasting 4 days after sleeping in an abandoned log cabin in the Sierra Nevada Mountains, where she found a soft tick (Ornithodoros) on her shoulder. Ten days after defervescence, she experiences a sudden relapse of identical high fever, severe headache, and myalgias. Peripheral blood smear during the febrile episode reveals numerous Giemsa-stained spirochetes. What molecular mechanism allows the pathogen to cause these recurrent febrile waves?",
  "options": [
    "Cyclic release of merozoites from rupture of intraerythrocytic schizonts",
    "Error-prone viral RNA-dependent RNA polymerase replication with frequent base misincorporation",
    "Epigenetic silencing of outer surface protein C (OspC) via histone deacetylation",
    "Horizontal acquisition of new capsular loci through natural transformation in host serum",
    "Recombination and sequential programmed antigenic variation of Variable Major Proteins (VMPs) on linear plasmids"
  ],
  "correctIndex": 4,
  "rationales": {
    "0": "Incorrect. Intraerythrocytic schizont rupture drives paroxysmal fevers in Plasmodium (malaria), which is a protozoan parasite, not a spirochete visible freely in extracellular plasma.",
    "1": "Incorrect. Error-prone RNA polymerase causes antigenic drift in RNA viruses (e.g., Influenza, HIV, HCV), whereas Borrelia is a bacterium with DNA genomes.",
    "2": "Incorrect. Bacteria do not possess eukaryotic histones, and OspC downregulation occurs during mammalian adaptation in Borrelia burgdorferi, not relapsing fever.",
    "3": "Incorrect. Natural transformation (competence) characterizes Streptococcus pneumoniae, Neisseria, and Haemophilus, but does not drive relapsing fever cycles.",
    "4": "Correct. Relapsing fever (caused by Borrelia hermsii, B. turicatae [endemic tick-borne] or B. recurrentis [epidemic louse-borne]) is characterized by alternating cycles of high fever and afebrile intervals. This periodicity is driven by multiphasic antigenic variation of its surface-exposed Variable Major Proteins (VMPs: Vsp [small] and Vlp [large]). Borrelia stores dozens of silent VMP cassette genes on linear plasmids. During multiplication, non-reciprocal gene conversion transfers a silent VMP gene into the single active expression telomeric locus. Host IgM clears the dominant serotype, terminating fever; meanwhile, a minor mutant clone expressing a new VMP emerges, escapes host immunity, and multiplies, triggering the next febrile relapse."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 24: Spirochetes: Treponema, Borrelia, and Leptospira",
  "subject": "Bacteriology",
  "difficulty": "Finals (Advanced & Triads)",
  "highYieldPearls": [
    "Relapsing fever = Antigenic variation of Variable Major Proteins (VMP / Vsp / Vlp) via DNA recombination into expression locus.",
    "Blood smears MUST be obtained during the FEBRILE episode (when high-titer spirochetemia is present; smears are negative during afebrile periods).",
    "Rapid lysis during initial antibiotic administration frequently triggers a severe Jarisch-Herxheimer reaction (fever, chills, rigors, hypotension)."
  ],
  "latinNames": [
    "Borrelia hermsii",
    "Borrelia recurrentis",
    "Borrelia burgdorferi"
  ],
  "caseVignette": true,
  "tags": [
    "Relapsing Fever",
    "Antigenic Variation",
    "VMP",
    "Spirochetes"
  ]
},
{
  "id": "SIMPIC-BAC-017",
  "stem": "A 32-year-old nurse who received BCG vaccination in childhood is hired by a major hospital and undergoes occupational health screening. Her Tuberculin Skin Test (PPD) produces 14 mm of induration at 48 hours. A blood Interferon-Gamma Release Assay (IGRA, QuantiFERON-TB Gold) is performed and returns negative. What is the fundamental advantage of IGRAs over the PPD skin test that accounts for this discrepancy?",
  "options": [
    "IGRAs use specific antigens (ESAT-6 and CFP-10) encoded by the RD1 genomic region, which is deleted from all BCG vaccine strains and most NTM",
    "IGRAs measure circulating IgM antibodies specific to the arabinogalactan core of Mycobacterium tuberculosis",
    "IGRAs directly quantify live, culturable acid-fast bacilli in peripheral circulating monocytes",
    "IGRAs trigger a Type I immediate hypersensitivity reaction that is unaffected by prior delayed-type hypersensitivity",
    "IGRAs assess the bactericidal capability of natural killer (NK) cells rather than memory T lymphocytes"
  ],
  "correctIndex": 0,
  "rationales": {
    "0": "Correct. Interferon-Gamma Release Assays (IGRAs, such as QuantiFERON-TB Gold and T-SPOT.TB) measure IFN-gamma release from sensitized CD4+ T lymphocytes upon stimulation with synthetic peptides mimicking ESAT-6 (Early Secretory Antigenic Target-6) and CFP-10 (Culture Filtrate Protein-10). These antigens are encoded on the 'Region of Difference 1' (RD1) locus present in Mycobacterium tuberculosis complex but deleted from all substrains of the BCG (Bacillus Calmette-Gu\u00e9rin) vaccine and almost all non-tuberculous mycobacteria (except M. marinum, M. kansasii, M. szulgai). Thus, IGRAs have high specificity and do NOT produce false-positive results in BCG-vaccinated individuals.",
    "1": "Incorrect. IGRAs are cellular immune assays that measure IFN-gamma secreted by memory T cells, not humoral antibodies.",
    "2": "Incorrect. IGRAs measure cytokine secretion by host T cells, not live bacterial colony units.",
    "3": "Incorrect. IGRAs evaluate cell-mediated Type IV delayed hypersensitivity memory, not IgE-mediated Type I immediate hypersensitivity.",
    "4": "Incorrect. The responsive effector cells are CD4+ (and CD8+) antigen-specific memory T lymphocytes, not NK cells."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 23: Mycobacteria",
  "subject": "Bacteriology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "IGRA antigens: ESAT-6 and CFP-10 (from RD1 locus) -> NO cross-reaction with BCG vaccine or most NTM!",
    "Unlike PPD skin test, IGRAs require only a single blood draw visit, eliminating reader subjectivity.",
    "Neither IGRA nor PPD can differentiate between Latent TB Infection (LTBI) and Active TB disease."
  ],
  "latinNames": [
    "Mycobacterium tuberculosis",
    "Mycobacterium bovis",
    "Mycobacterium kansasii"
  ],
  "caseVignette": true,
  "tags": [
    "Tuberculosis",
    "IGRA",
    "PPD",
    "BCG",
    "ESAT-6"
  ]
},
{
  "id": "SIMPIC-VIR-004",
  "stem": "A 30-year-old woman presents to the student health center with anorexia, low-grade fever, and mild scleral icterus of 4 days' duration. Laboratory testing reveals AST 820 U/L and ALT 980 U/L. She received the recombinant Hepatitis B vaccine series 2 years ago. Serologic hepatitis panel yields the following profile:\n\u2022 Anti-HAV IgM: Negative\n\u2022 Anti-HAV IgG: Positive\n\u2022 HBsAg: Negative\n\u2022 Anti-HBs: Positive\n\u2022 Anti-HBc (total): Negative\n\u2022 Anti-HCV: Positive (confirmed with HCV RNA by RT-PCR: 450,000 IU/mL)\nWhat is the correct clinical interpretation of her hepatitis panel?",
  "options": [
    "Acute hepatitis A; successful vaccination against hepatitis B; prior resolved hepatitis C",
    "Past resolved hepatitis A; immune to hepatitis B via prior vaccination; current active hepatitis C infection",
    "Acute hepatitis B in window period; past hepatitis A; active hepatitis C infection",
    "Chronic active hepatitis B with pre-core mutant; past hepatitis A and C infections",
    "Acute hepatitis E with cross-reactive false-positive hepatitis C serology"
  ],
  "correctIndex": 1,
  "rationales": {
    "0": "Incorrect. Anti-HAV IgM is negative (ruling out acute hepatitis A); anti-HAV IgG indicates remote past infection or past vaccination.",
    "1": "Correct. Let us break down each viral marker systematically:\n1) HAV: Anti-HAV IgG(+) and IgM(-) = past resolved infection or prior vaccination immunity.\n2) HBV: HBsAg(-) and Anti-HBc(-) with isolated Anti-HBs(+) = successful recombinant HBsAg vaccination (natural infection would generate anti-HBc antibodies!).\n3) HCV: Anti-HCV(+) and HCV RNA(+) with markedly elevated transaminases = current, active Hepatitis C virus infection, which is the direct cause of her acute presentation.",
    "2": "Incorrect. The window period in HBV is characterized by positive anti-HBc IgM with negative HBsAg and negative anti-HBs. Here, anti-HBs is positive while anti-HBc is completely negative, which is the hallmark of vaccination immunity, not natural infection.",
    "3": "Incorrect. Pre-core mutant chronic HBV would have positive HBsAg and positive anti-HBc, both of which are negative here.",
    "4": "Incorrect. HCV RNA is detected by direct molecular RT-PCR, confirming true viremia rather than cross-reactivity."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 35: Hepatitis Viruses",
  "subject": "Virology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Vaccinated for HBV: ONLY anti-HBs is positive (anti-HBc is NEGATIVE).",
    "Resolved past HBV infection: BOTH anti-HBs AND anti-HBc IgG are positive.",
    "Window period: anti-HBc IgM is the ONLY positive serologic marker.",
    "HBeAg indicates high infectivity, active viral replication, and high transmission risk."
  ],
  "latinNames": [
    "Hepacivirus",
    "Hepadnaviridae"
  ],
  "caseVignette": true,
  "tags": [
    "Hepatitis B",
    "Hepatitis C",
    "Serology",
    "Virology"
  ]
},
{
  "id": "SIMPIC-VIR-005",
  "stem": "A 35-year-old intravenous drug user who has been a known chronic HBsAg carrier for 8 years experiences abrupt clinical deterioration with profound jaundice, encephalopathy, and coagulopathy (INR 3.2), dying of fulminant hepatic necrosis within 10 days. Autopsy confirms coinfection with Hepatitis Delta Virus (HDV). What essential biological property characterizes HDV virion packaging and replication?",
  "options": [
    "HDV is a replication-competent DNA pararetrovirus requiring reverse transcriptase",
    "HDV contains a segmented negative-sense RNA genome that undergoes reassortment with HBV",
    "HDV is a defective subviral agent with a circular negative-sense single-stranded RNA genome that requires HBsAg as its outer envelope coat",
    "HDV encodes its own functional RNA polymerase and envelope glycoproteins but lacks a capsid",
    "HDV utilizes human CD81 and claudin-1 to enter hepatocytes independently of HBV"
  ],
  "correctIndex": 2,
  "rationales": {
    "0": "Incorrect. HDV has a single-stranded circular RNA genome, not DNA, and does not replicate via reverse transcriptase.",
    "1": "Incorrect. HDV has a single circular RNA molecule with self-cleaving ribozyme activity, not a segmented genome.",
    "2": "Correct. Hepatitis Delta Virus (HDV) is a defective subviral satellite agent. Its genome is an extremely small (1.7 kb) single-stranded, covalently closed circular negative-sense RNA with extensive intramolecular base pairing and ribozyme catalytic cleavage activity. While HDV uses host RNA polymerase II to replicate its RNA and synthesizes its own delta antigen (HDAg) internal capsid, it completely lacks genes for envelope proteins. It strictly depends on coinfecting Hepatitis B Virus (HBV) to supply Hepatitis B surface antigen (HBsAg) to assemble infectious, transmissible virions. Superinfection of an established HBsAg carrier with HDV carries a high risk (up to 70\u201380%) of fulminant hepatitis, cirrhosis, and rapid progression.",
    "3": "Incorrect. HDV lacks envelope glycoprotein genes and relies entirely on host RNA pol II for transcription.",
    "4": "Incorrect. CD81 and claudin-1 are coreceptors for Hepatitis C Virus (HCV), whereas HDV binds the NTCP (sodium taurocholate cotransporting polypeptide) receptor via the pre-S1 domain of HBsAg."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 35: Hepatitis Viruses",
  "subject": "Virology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "HDV is a defective satellite virus: needs HBsAg coat from HBV for packaging and transmission.",
    "Coinfection (HBV + HDV simultaneously) = severe acute illness, but low rate of chronic infection (<5%).",
    "Superinfection (HDV in existing chronic HBV carrier) = high rate of fulminant hepatitis and rapid cirrhosis (>80%).",
    "HDV RNA possesses intrinsic ribozyme activity."
  ],
  "latinNames": [
    "Hepatitis delta virus",
    "Hepadnaviridae"
  ],
  "caseVignette": true,
  "tags": [
    "HDV",
    "HBV",
    "Superinfection",
    "HBsAg",
    "Satellite Virus"
  ]
},
{
  "id": "SIMPIC-BAC-018",
  "stem": "An unimmunized 4-month-old infant presents with a 2-week history of paroxysms of staccato coughing followed by high-pitched inspiratory 'whooping', post-tussive emesis, and facial petechiae. Complete blood count demonstrates severe leukocytosis (WBC 48,000/\u00b5L) with 82% mature lymphocytes. Nasopharyngeal swabs inoculated onto charcoal-horse blood agar with cephalexin (Regan-Lowe medium) grow tiny, shiny, silver mercury-drop colonies of Bordetella pertussis. What is the molecular mechanism of the bacterial toxin responsible for this dramatic lymphocytosis?",
  "options": [
    "Direct degradation of the ciliary axoneme through tracheal cytotoxin peptidoglycan fragments",
    "Cleavage of leukocyte surface CD11/CD18 integrins, preventing extravasation across post-capillary venules",
    "Pore-forming hemolysis of natural killer cells via calmodulin-dependent adenylate cyclase toxin",
    "ADP-ribosylation of the inhibitory G-protein alpha subunit (Gi), preventing inhibition of host adenylate cyclase and impairing chemokine-directed lymphocyte homing",
    "LPS-mediated activation of CD14 with systemic IL-8 overproduction"
  ],
  "correctIndex": 3,
  "rationales": {
    "0": "Incorrect. Tracheal cytotoxin (a disaccharide-tetrapeptide peptidoglycan monomer fragment) is responsible for nitric oxide-mediated ciliated epithelial cell destruction and paroxysmal coughing, not lymphocytosis.",
    "1": "Incorrect. CD11b/CD18 (Mac-1) is the target receptor bound by adenylate cyclase toxin to gain entry, but cleavage does not occur.",
    "2": "Incorrect. Adenylate cyclase toxin (ACT) is a calmodulin-dependent toxin that directly generates cAMP, primarily inhibiting phagocytosis by neutrophils and macrophages.",
    "3": "Correct. Pertussis toxin (an AB5 exotoxin) catalyzes the ADP-ribosylation of the alpha subunit of the inhibitory G-protein (Gi-alpha), locking Gi in an inactive conformation. Inability to turn off adenylate cyclase causes uncontrolled intracellular accumulation of cAMP. In circulating lymphocytes, high cAMP inhibits chemokine receptor signaling (e.g., S1P1 and CCR7) required for lymphocytes to extravasate from bloodstream into peripheral lymphoid organs and tissues. Because lymphocytes cannot leave circulation, they accumulate markedly in peripheral blood, generating profound mature lymphocytosis (>30,000\u201350,000/\u00b5L) that directly correlates with disease severity and pulmonary hypertension.",
    "4": "Incorrect. Endotoxin causes neutrophilia in typical bacterial sepsis; mature lymphocytosis is uniquely characteristic of Bordetella pertussis."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 18: Haemophilus, Bordetella, Brucella, and Francisella",
  "subject": "Bacteriology",
  "difficulty": "Finals (Advanced & Triads)",
  "highYieldPearls": [
    "Pertussis toxin = ADP-ribosylates Gi -> disables Gi -> high cAMP -> blocks lymphocyte homing -> marked lymphocytosis.",
    "Clinical phases: Catarrhal (most infectious, 1-2 wk) -> Paroxysmal (whooping cough, 2-6 wk) -> Convalescent (months).",
    "Culture medium: Bordet-Gengou (potato-blood-glycerol) or Regan-Lowe (charcoal-horse blood) yielding 'mercury-drop' colonies.",
    "Macrolides (Azithromycin) eradicate carriage and are effective clinically only during the early catarrhal phase."
  ],
  "latinNames": [
    "Bordetella pertussis"
  ],
  "caseVignette": true,
  "tags": [
    "Pertussis",
    "Whooping Cough",
    "Gi Protein",
    "Lymphocytosis",
    "Toxin"
  ]
},
{
  "id": "SIMPIC-BAC-019",
  "stem": "An unencapsulated (non-typeable) strain of Haemophilus influenzae isolated from the middle ear fluid of a 3-year-old child with recurrent otitis media fails to grow on 5% sheep blood agar unless cross-streaked with a culture of Staphylococcus aureus. Growth of H. influenzae appears exclusively as tiny satellite colonies in the immediate vicinity of the S. aureus streak. What two essential growth factors are provided by this satellite phenomenon?",
  "options": [
    "Factor X (Thiamine pyrophosphate) and Factor V (Pyridoxal phosphate)",
    "Factor X (Bile salts) and Factor V (Glutathione)",
    "Factor VIII (Antihemophilic factor) and Factor IX (Christmas factor)",
    "Factor X (Coenzyme A) and Factor V (Cytochrome c)",
    "Factor X (Hemin) released by RBC lysis and Factor V (NAD+) actively secreted by S. aureus"
  ],
  "correctIndex": 4,
  "rationales": {
    "0": "Incorrect. Factor X and V are hemin and NAD+, respectively.",
    "1": "Incorrect. Factor X is hemin (iron protoporphyrin), not bile salts; Factor V is NAD, not glutathione.",
    "2": "Incorrect. Factors VIII and IX are mammalian coagulation factors in the intrinsic clotting pathway, unrelated to microbial growth requirements.",
    "3": "Incorrect. Factor X is hemin, not Coenzyme A.",
    "4": "Correct. Haemophilus influenzae is a fastidious organism that requires two exogenous factors for aerobic growth: Factor X (hemin / hematin, a protoporphyrin IX source required for cytochrome synthesis) and Factor V (nicotinamide adenine dinucleotide [NAD+] or NADP, required for electron transport). Unheated sheep blood agar contains heat-labile enzymes (NADases) that destroy free NAD, preventing H. influenzae growth. However, when Staphylococcus aureus is streaked across the plate, its beta-lysin hemolysins lyse sheep red cells to release Factor X (hemin), while the living staphylococcal colonies synthesize and excrete excess Factor V (NAD). H. influenzae grows as tiny 'satellite' colonies clustered around the S. aureus streak. (Chocolate agar supplies both factors freely because heating at 80\u00b0C lyses RBCs and inactivates NADases)."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 18: Haemophilus, Bordetella, Brucella, and Francisella",
  "subject": "Bacteriology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "H. influenzae requires Factor X (Hemin) and Factor V (NAD).",
    "Satellitism: S. aureus releases Factor X (hemolysis) and excretes Factor V (NAD) on sheep blood agar.",
    "Chocolate agar provides both X and V factors directly (heating lyses RBCs and destroys NADases).",
    "Typeable strains (type b) have polyribosylribitol phosphate (PRP) capsule; non-typeable strains cause otitis media, sinusitis, bronchitis."
  ],
  "latinNames": [
    "Haemophilus influenzae",
    "Staphylococcus aureus"
  ],
  "caseVignette": true,
  "tags": [
    "Haemophilus",
    "Satellitism",
    "Factor X",
    "Factor V",
    "Chocolate Agar"
  ]
},
{
  "id": "SIMPIC-BAC-020",
  "stem": "A 48-year-old executive presents with burning epigastric pain that worsens 2 to 3 hours after meals and awakens him at night. Upper endoscopy reveals an active 1.5-cm peptic ulcer in the duodenal bulb. Antral gastric biopsy placed into a Christensen urea broth produces a rapid color change from yellow to bright magenta pink within 5 minutes. What is the fundamental physiologic role of this bacterial enzyme in gastric colonization?",
  "options": [
    "Generates ammonia from urea to neutralize hydrochloric acid and create a protective alkaline microenvironment",
    "Degrades gastric mucin polymers into absorbable oligosaccharides",
    "Inactivates secretory IgA antibodies in the gastric mucus layer",
    "Induces apoptosis of gastric parietal cells, shutting down acid production permanently",
    "Cleaves gastrin-releasing peptide, suppressing antral G-cell secretion"
  ],
  "correctIndex": 0,
  "rationales": {
    "0": "Correct. Helicobacter pylori produces abundant constitutive cytoplasmic and surface-associated urease (up to 5-10% of total bacterial protein). Urease hydrolyzes urea present in gastric juice into carbon dioxide and ammonia (NH3). The basic ammonia buffers gastric hydrochloric acid in the immediate pericellular microenvironment, raising the local pH from acidic (1.0-2.0) to neutral (6.0-7.0), allowing H. pylori to survive and swim through gastric mucus via corkscrew lophotrichous flagella to colonize the gastric epithelial surface.",
    "1": "Incorrect. Mucin degradation is mediated by bacterial mucinases and phospholipases, not urease.",
    "2": "Incorrect. Secretory IgA cleavage is performed by IgA1 proteases (found in S. pneumoniae, N. meningitidis, N. gonorrhoeae, H. influenzae), not urease.",
    "3": "Incorrect. Parietal cell apoptosis with achlorhydria occurs in autoimmune metaplastic atrophic gastritis, not directly mediated by urease enzyme.",
    "4": "Incorrect. H. pylori antral gastritis actually causes hypergastrinemia due to destruction of somatostatin-producing D cells by CagA and VacA."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 17: Vibrios, Campylobacters, and Helicobacter",
  "subject": "Bacteriology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "H. pylori urease: Urea -> NH3 + CO2 -> buffers gastric acid, allowing survival in stomach.",
    "Diagnostic tests: Rapid urease test (CLO test), 13C/14C Urea Breath Test, Stool antigen test.",
    "Triple therapy: PPI + Clarithromycin + Amoxicillin (or Metronidazole)."
  ],
  "latinNames": [
    "Helicobacter pylori"
  ],
  "caseVignette": true,
  "tags": [
    "Helicobacter",
    "Urease",
    "Peptic Ulcer",
    "Ammonia"
  ],
  "image": {
    "src": "/images/figures/helicobacter-sem.jpeg",
    "caption": "Scanning electron micrograph of curved, spiral-shaped Helicobacter pylori colonizing human gastric epithelial cell surfaces beneath the protective mucus layer.",
    "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 28.2",
    "alt": "Helicobacter pylori SEM"
  }
},
{
  "id": "SIMPIC-BAC-021",
  "stem": "A 54-year-old woman is brought to the emergency department complaining of bilateral blurred vision, dry mouth, and difficulty swallowing (dysphagia). Within 6 hours, she develops symmetrical descending flaccid paralysis affecting the cranial nerves, neck, and upper extremities. She recently consumed home-canned asparagus that was not boiled before serving. She remains alert and afebrile. Which of the following best describes the molecular site of action of the causative toxin?",
  "options": [
    "Inhibition of glycine and GABA release at Renshaw inhibitory interneurons in the spinal cord",
    "Endopeptidase cleavage of SNARE proteins (synaptobrevin, SNAP-25) preventing acetylcholine exocytosis at peripheral neuromuscular junctions",
    "Irreversible blockade of nicotinic acetylcholine receptors at the motor endplate",
    "Depolarizing blockade of voltage-gated sodium channels along motor axons",
    "Destruction of anterior horn motor neurons in the cervical spinal cord"
  ],
  "correctIndex": 1,
  "rationales": {
    "0": "Incorrect. Blocking release of inhibitory neurotransmitters (glycine and GABA) in spinal cord Renshaw cells is the mechanism of Tetanospasmin (Clostridium tetani), causing spastic paralysis (trismus, risus sardonicus, opisthotonos).",
    "1": "Correct. Botulinum neurotoxin (BoNT, an AB zinc endopeptidase produced by Clostridium botulinum) is absorbed from the gut, enters the circulation, and binds gangliosides on presynaptic cholinergic nerve terminals. The light chain is translocated into the cytosol where it selectively cleaves SNARE complex proteins (types A and E cleave SNAP-25; types B, D, F, G cleave synaptobrevin/VAMP; type C cleaves syntaxin and SNAP-25). This prevents the docking and fusion of synaptic vesicles carrying acetylcholine, causing flaccid paralysis with autonomic dysfunction (dry mouth, dilated pupils, ptosis, descending weakness).",
    "2": "Incorrect. Blockade of nicotinic ACh receptors at motor endplates is the mechanism of curare and alpha-bungarotoxin, or autoantibodies in Myasthenia Gravis.",
    "3": "Incorrect. Blockade of voltage-gated sodium channels is the mechanism of tetrodotoxin (pufferfish) and saxitoxin (red tide dinoflagellates).",
    "4": "Incorrect. Anterior horn cell destruction is the pathology of Poliomyelitis and West Nile neuroinvasive disease."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 11: Spore-Forming Gram-Positive Bacilli: Bacillus and Clostridium Species",
  "subject": "Bacteriology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Botulinum toxin: Cleaves SNAREs -> blocks ACh release at peripheral NMJ -> flaccid descending paralysis.",
    "Infant botulism: Ingestion of SPORES (e.g., raw honey) with in vivo germination ('floppy baby syndrome').",
    "Foodborne adult botulism: Ingestion of PREFORMED toxin in home-canned alkaline foods."
  ],
  "latinNames": [
    "Clostridium botulinum",
    "Clostridium tetani"
  ],
  "caseVignette": true,
  "tags": [
    "Botulism",
    "SNARE",
    "Acetylcholine",
    "Flaccid Paralysis"
  ]
},
{
  "id": "SIMPIC-PAR-003",
  "stem": "A 36-year-old traveler returns from Mexico with a 3-week history of right upper quadrant abdominal pain, fever, weight loss, and hepatomegaly. An abdominal ultrasound demonstrates a single, smooth-walled, 8-cm hypoechoic cyst in the right hepatic lobe. Diagnostic aspiration yields thick, reddish-brown fluid resembling 'anchovy paste'. Stool examination reveals cysts with 4 nuclei and elongated chromatoid bars with rounded ends. What is the definitive etiologic agent, and what microscopic finding in trophozoites confirms tissue-invasive disease?",
  "options": [
    "Echinococcus granulosus; hydatid sand with hooklets",
    "Giardia duodenalis; falling leaf motility with two nuclei",
    "Entamoeba histolytica; erythrophagocytosis (ingested red blood cells in cytoplasm)",
    "Entamoeba dispar; multiple chromatoid bodies in trophozoites",
    "Fasciola hepatica; unembryonated operculated eggs"
  ],
  "correctIndex": 2,
  "rationales": {
    "0": "Incorrect. Echinococcus granulosus causes hydatid cyst disease with an outer laminated cuticular layer and daughter cysts containing protoscolices (hydatid sand); fluid aspiration carries a severe risk of anaphylactic shock and is generally contraindicated.",
    "1": "Incorrect. Giardia duodenalis causes non-invasive duodenal malabsorption and steatorrhea; it never causes hepatic abscesses.",
    "2": "Correct. Entamoeba histolytica causes amoebic colitis (flask-shaped ulcers) and extraintestinal amoebic liver abscess (classically in the right hepatic lobe containing sterile 'anchovy paste' liquefied necrotic debris). The trophozoites have a single nucleus with fine central karyosome and evenly distributed peripheral chromatin. In tissue-invasive disease, the pathognomonic microscopic finding is erythrophagocytosis: trophozoites actively engulfing host erythrocytes. (E. dispar is morphologically identical but non-pathogenic and never demonstrates erythrophagocytosis). Cysts characteristically contain 1 to 4 nuclei with blunt-ended, cigar-shaped chromatoid bars.",
    "3": "Incorrect. Entamoeba dispar is a non-invasive commensal that does not cause hepatic abscesses or ingest RBCs.",
    "4": "Incorrect. Fasciola hepatica is a liver fluke acquired from freshwater watercress; it causes biliary colic and marked peripheral eosinophilia."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 46: Medical Parasitology",
  "subject": "Parasitology",
  "difficulty": "Round 2 (Clinical Vignettes)",
  "highYieldPearls": [
    "Entamoeba histolytica: Flask-shaped colonic ulcers + Amebic liver abscess ('anchovy paste' pus).",
    "Trophozoites: Erythrophagocytosis (ingested RBCs) is pathognomonic for E. histolytica vs non-invasive E. dispar.",
    "Treatment: Metronidazole (tissue amoebicide) followed by Paromomycin or Iodoquinol (luminal amoebicide) to eradicate cysts."
  ],
  "latinNames": [
    "Entamoeba histolytica",
    "Entamoeba dispar",
    "Giardia duodenalis",
    "Echinococcus granulosus"
  ],
  "caseVignette": true,
  "tags": [
    "Amoebiasis",
    "Liver Abscess",
    "Erythrophagocytosis",
    "Parasitology"
  ],
  "image": {
    "src": "/images/figures/entamoeba-trophozoite.jpeg",
    "caption": "Microscopic morphology of Entamoeba histolytica: (A) Trophozoite actively exhibiting erythrophagocytosis with ingested red blood cells in the cytoplasm, and (B) mature infective quadrinucleate cyst with blunt chromatoid bars.",
    "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 72.2",
    "alt": "Entamoeba histolytica trophozoite and cyst"
  }
},
{
  "id": "SIMPIC-PAR-004",
  "stem": "A 24-year-old backpacker presents with foul-smelling, greasy, floating diarrhea, flatulence, sulfurous eructations (belching), and abdominal cramps two weeks after drinking untreated stream water during a hiking trip in the Rocky Mountains. Stool microscopy reveals teardrop-shaped binucleate flagellated trophozoites that exhibit a classic 'falling leaf' tumbling motility. How does this organism adhere to the duodenal and jejunal brush border to produce malabsorption without invading the mucosal epithelium?",
  "options": [
    "Translocation of an AB enterotoxin that constitutively stimulates guanylate cyclase",
    "Pore-forming amoebapore insertion creating cell-free mucosal erosion",
    "Direct degradation of the brush border microvilli via cysteine proteinases",
    "Binding of a ventral concave adhesive sucking disk to intestinal enterocytes mediated by lectins and giardins",
    "Receptor-mediated endocytosis into M cells of Peyer's patches"
  ],
  "correctIndex": 3,
  "rationales": {
    "0": "Incorrect. Stimulation of guanylate cyclase is the mechanism of ETEC heat-stable toxin (STa).",
    "1": "Incorrect. Amoebapores are pore-forming peptides produced by Entamoeba histolytica, causing cytolytic necrosis.",
    "2": "Incorrect. Cysteine proteinases facilitate invasion in E. histolytica, whereas Giardia is strictly non-invasive.",
    "3": "Correct. Giardia duodenalis (also called G. lamblia or G. intestinalis) exists in trophozoite and cyst forms. The trophozoite is pear- or teardrop-shaped with two symmetric nuclei, central axostyle, and four pairs of flagella ('face-like' appearance). It attaches tenaciously to the apical microvillar membrane of enterocytes in the duodenum and upper jejunum using a specialized ventral concave adhesive sucking disk composed of alpha-giardin and beta-tubulin microtubules. This physical attachment, combined with brush border damage, causes villus flattening, disaccharidase deficiency (lactose intolerance), and lipid malabsorption (steatorrhea) without cellular invasion.",
    "4": "Incorrect. Translocation across M cells is the invasion portal for Salmonella, Shigella, and Yersinia enterocolitica."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 46: Medical Parasitology",
  "subject": "Parasitology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "Giardia duodenalis: Non-invasive flagellate -> ventral sucking disk attachment -> malabsorption, steatorrhea, sulfur burps.",
    "Trophozoite: Pear-shaped, 2 nuclei, 4 pairs of flagella ('falling leaf' motility, old man eyeglasses look).",
    "Associated with wilderness hiking, beaver dams ('beaver fever'), daycare outbreaks.",
    "Treatment: Metronidazole, Tinidazole, or Nitazoxanide."
  ],
  "latinNames": [
    "Giardia duodenalis",
    "Giardia lamblia",
    "Entamoeba histolytica"
  ],
  "caseVignette": true,
  "tags": [
    "Giardiasis",
    "Ventral Sucking Disk",
    "Steatorrhea",
    "Parasitology"
  ],
  "image": {
    "src": "/images/figures/giardia-trophozoite.jpeg",
    "caption": "Diagnostic morphology of Giardia duodenalis: (A) Trophozoite showing characteristic binucleate pear-shaped morphology and ventral adhesive disk, and (B) oval quadrinucleate cyst with central axostyle.",
    "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 72.3",
    "alt": "Giardia duodenalis trophozoite and cyst"
  }
},
{
  "id": "SIMPIC-MYC-003",
  "stem": "A 22-year-old woman with poorly controlled type 1 diabetes presents with thick, white, curdy ('cottage cheese-like') vaginal discharge, intense vulvar pruritus, and dyspareunia. Microscopic examination of a 10% KOH wet mount reveals budding yeast cells alongside extensive pseudohyphae. When inoculated into human serum and incubated at 37\u00b0C for 2.5 hours, the yeast cells rapidly produce true hyphal outgrowths with no constriction at the point of origin ('germ tubes'). What is the causative organism?",
  "options": [
    "Candida glabrata",
    "Malassezia globosa",
    "Candida tropicalis",
    "Trichosporon asahii",
    "Candida albicans"
  ],
  "correctIndex": 4,
  "rationales": {
    "0": "Incorrect. Candida glabrata is strictly monomorphic (yeast form only) and NEVER forms pseudohyphae, true hyphae, or germ tubes. It is intrinsically less susceptible to azoles.",
    "1": "Incorrect. Malassezia globosa causes pityriasis versicolor (showing 'spaghetti and meatballs' short hyphae and round yeast cells on KOH) and requires exogenous lipid (olive oil) for in vitro growth.",
    "2": "Incorrect. Candida tropicalis can produce pseudohyphae and long hyphae, but does not form true germ tubes within 2.5 hours.",
    "3": "Incorrect. Trichosporon produces true hyphae, pseudohyphae, and arthroconidia; it causes white piedra and disseminated trichosporonosis.",
    "4": "Correct. Candida albicans (and the closely related C. dubliniensis) is uniquely identified by the rapid Germ Tube Test: incubation in animal or human serum at 37\u00b0C for 2 to 3 hours triggers the formation of true hyphal germ tubes without constrictions at the junction with the mother yeast cell. In tissue, C. albicans is dimorphic in reverse: existing as oval yeast cells (blastoconidia) that form pseudohyphae (chains of elongated blastoconidia with constrictions) and invasive true septate hyphae. On cornmeal agar, it forms thick-walled terminal chlamydospores."
  },
  "source": "Jawetz 28th Ed",
  "chapter": "Ch. 45: Medical Mycology",
  "subject": "Mycology",
  "difficulty": "Round 1 (Recall & Basics)",
  "highYieldPearls": [
    "Candida albicans: Germ tube positive at 37\u00b0C in serum (2-3 hours) -> true hyphae without constriction.",
    "Forms pseudohyphae at 20\u00b0C and terminal chlamydospores on cornmeal agar.",
    "Most common cause of opportunistic mycosis (oral thrush, vulvovaginitis, diaper rash, candidemia in central lines)."
  ],
  "latinNames": [
    "Candida albicans",
    "Candida glabrata",
    "Candida tropicalis",
    "Malassezia globosa"
  ],
  "caseVignette": true,
  "tags": [
    "Candida",
    "Germ Tube",
    "Pseudohyphae",
    "Vulvovaginitis"
  ],
  "image": {
    "src": "/images/figures/candida-pseudohyphae.jpeg",
    "caption": "Calcofluor white fluorescent stain demonstrating budding oval blastoconidia alongside extensive pseudohyphae and true hyphal filaments of Candida albicans.",
    "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 60.1",
    "alt": "Candida albicans pseudohyphae"
  }
}
];
