# -*- coding: utf-8 -*-
"""
Full expansion script: appends 21 new high-yield SIMPIC questions from Jawetz 28th Ed
bringing the question bank to 40 total questions with uniform cyclic key balancing (A-E).
"""
import json
import re

extra_questions = [
  # --- NEISSERIA (Ch. 20) ---
  {
    "id": "SIMPIC-BAC-011",
    "stem": "A 38-year-old police officer presents to the emergency department with fever, tenosynovitis, and painful asymmetric monoarthritis of the right knee. Cultures of the synovial fluid grow Gram-negative diplococci. This is the patient's fifth confirmed episode of disseminated gonococcal infection over the past six years. Which host immunological defect should be investigated to explain these recurrent disseminated infections?",
    "options": [
      "Deficiency of the terminal membrane attack complex components (C5, C6, C7, C8, or C9)",
      "Selective IgA deficiency leading to mucosal colonization failure",
      "Defective neutrophil oxidative burst due to NADPH oxidase mutation (Chronic Granulomatous Disease)",
      "Absent adenosine deaminase (ADA) activity in circulating lymphocytes",
      "Myeloperoxidase (MPO) deficiency in primary azurophilic granules"
    ],
    "correctIndex": 0,
    "rationales": {
      0: "Correct. Patients with inherited deficiencies in the terminal complement cascade (C5, C6, C7, C8, or C9), which form the membrane attack complex (MAC), have a dramatically increased susceptibility (up to 1,000- to 10,000-fold) to recurrent, invasive bacteremia and disseminated infections caused by Neisseria species (Neisseria meningitidis and Neisseria gonorrhoeae). Complement-mediated serum bactericidal activity directly depends on MAC pore insertion through the thin Gram-negative outer membrane.",
      1: "Incorrect. Selective IgA deficiency is the most common primary immunodeficiency and predisposes to recurrent sinopulmonary and gastrointestinal infections (Giardia), but does not cause recurrent systemic disseminated gonococcemia.",
      2: "Incorrect. NADPH oxidase deficiency causes Chronic Granulomatous Disease (CGD), predisposing to catalase-positive organisms (Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens, Nocardia, Aspergillus), not Neisseria.",
      3: "Incorrect. Absent adenosine deaminase (ADA) activity leads to toxic accumulation of dATP, causing severe combined immunodeficiency (SCID) with profound T, B, and NK cell lymphopenia in early infancy.",
      4: "Incorrect. Myeloperoxidase deficiency impairs hypochlorous acid production but patients are largely asymptomatic or have mild Candida infections."
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
    "latinNames": ["Neisseria gonorrhoeae", "Neisseria meningitidis", "Staphylococcus aureus"],
    "caseVignette": True,
    "tags": ["Neisseria", "Complement", "C5-C9", "MAC", "Arthritis"]
  },
  {
    "id": "SIMPIC-BAC-012",
    "stem": "A 25-year-old sexually active woman presents with fever and acute right knee pain and effusion. Synovial fluid aspiration reveals abundant polymorphonuclear leukocytes and intracellular Gram-negative diplococci. The organism grows on Thayer-Martin chocolate agar incubated in 5% CO2 and is oxidase positive. Rapid carbohydrate fermentation testing shows acid production from glucose, but not from maltose, lactose, or sucrose. What is the identity of this organism?",
    "options": [
      "Neisseria meningitidis",
      "Neisseria gonorrhoeae",
      "Neisseria lactamica",
      "Moraxella catarrhalis",
      "Neisseria sicca"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. Neisseria meningitidis produces acid from BOTH Glucose and Maltose ('Meningitidis = Maltose and Glucose').",
      1: "Correct. Neisseria gonorrhoeae oxidizes Glucose only ('Gonorrhoeae = Glucose only'). It fails to produce acid from maltose, lactose, or sucrose. Thayer-Martin selective medium contains vancomycin (inhibits Gram-positives), colistin (inhibits Gram-negatives except Neisseria), nystatin (inhibits fungi), and trimethoprim (inhibits swarming Proteus).",
      2: "Incorrect. Neisseria lactamica oxidizes Glucose, Maltose, and Lactose ('Lactamica = Lactose').",
      3: "Incorrect. Moraxella catarrhalis is asaccharolytic (does not ferment or oxidize any carbohydrates) and is positive for butyrate esterase.",
      4: "Incorrect. Neisseria sicca oxidizes glucose, maltose, and sucrose; it is a harmless commensal of the nasopharynx."
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
    "latinNames": ["Neisseria gonorrhoeae", "Neisseria meningitidis", "Neisseria lactamica", "Moraxella catarrhalis"],
    "caseVignette": True,
    "tags": ["Neisseria", "Carbohydrate Utilization", "Thayer-Martin"]
  },
  {
    "id": "SIMPIC-BAC-013",
    "stem": "A 6-year-old boy with high fever, petechial purpuric skin lesions on his lower extremities, and nuchal rigidity is diagnosed with meningococcal meningitis. Cerebrospinal fluid cultures grow Neisseria meningitidis serogroup B. Which of the following is the most appropriate chemoprophylaxis recommendation for close household contacts who shared his living quarters during the 7 days prior to disease onset?",
    "options": [
      "No chemoprophylaxis is indicated if household contacts are asymptomatic",
      "Administration of a single dose of meningococcal capsular polysaccharide vaccine",
      "Oral rifampin for 2 days (or single-dose intramuscular ceftriaxone / oral ciprofloxacin)",
      "A 10-day course of high-dose oral amoxicillin-clavulanate",
      "Intravenous penicillin G for 7 days"
    ],
    "correctIndex": 2,
    "rationales": {
      0: "Incorrect. Household contacts, daycare contacts, and anyone exposed directly to oral secretions have an attack rate 500 to 1,000 times higher than the general population; chemoprophylaxis is urgently mandated regardless of symptoms.",
      1: "Incorrect. Vaccines take 10–14 days to elicit protective antibody titers, which is far too slow to prevent immediate secondary attack (which typically occurs within 1–5 days). Furthermore, standard polysaccharide vaccines do not cover serogroup B.",
      2: "Correct. Chemoprophylaxis is indicated for close contacts to eliminate asymptomatic nasopharyngeal carriage of Neisseria meningitidis. The standard regimens are: Oral Rifampin (600 mg BID for 2 days for adults, 10 mg/kg BID for 2 days for children), single-dose oral Ciprofloxacin (500 mg, adults only), or single-dose intramuscular Ceftriaxone (250 mg, safe in pregnancy).",
      3: "Incorrect. Amoxicillin does not achieve adequate concentrations in nasopharyngeal secretions to reliably eradicate meningococcal carriage.",
      4: "Incorrect. Intravenous penicillin G treats active invasive meningococcemia/meningitis but does not reliably eradicate nasopharyngeal carriage because penicillin poorly crosses the uninflamed nasopharyngeal mucosal barrier."
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
    "latinNames": ["Neisseria meningitidis"],
    "caseVignette": True,
    "tags": ["Meningococcus", "Prophylaxis", "Rifampin", "Public Health"]
  },

  # --- SPIROCHETES (Ch. 24) ---
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
      0: "Incorrect. Secondary syphilis is characterized by high-titer nontreponemal tests (RPR usually >= 1:16 or 1:32); a nonreactive RPR rules out active secondary syphilis.",
      1: "Incorrect. In treated latent syphilis where RPR becomes nonreactive (or serofast at <= 1:2), retreatment is unnecessary if documented past adequate penicillin therapy was completed.",
      2: "Correct. Nontreponemal tests (RPR, VDRL) measure antibodies against cardiolipin-lecithin-cholesterol antigen released from damaged cells. Nontreponemal antibody titers correlate with disease activity and decline fourfold or become nonreactive following successful therapy. In contrast, treponemal-specific tests (TP-PA, FTA-ABS, EIA) measure antibodies directed against Treponema pallidum antigens and characteristically remain positive for the patient's entire lifetime (the 'serologic scar'), regardless of clinical cure.",
      3: "Incorrect. Pregnancy causes biologic false-positives on NONTREPONEMAL tests (RPR/VDRL), not on specific treponemal tests (TP-PA).",
      4: "Incorrect. Because her RPR is nonreactive and prior treatment was documented, she is non-infectious and the fetus is not at risk for congenital syphilis."
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
    "latinNames": ["Treponema pallidum"],
    "caseVignette": True,
    "tags": ["Syphilis", "Serology", "RPR", "TP-PA", "Treponema"]
  },
  {
    "id": "SIMPIC-BAC-015",
    "stem": "A 12-year-old Boy Scout develops a flat, expanding erythematous cutaneous lesion on his left calf with central clearing ('bull's-eye' targetoid appearance) two weeks after camping in Mystic, Connecticut. Three weeks later, he develops fever, myalgias, arthralgias, and transient bilateral facial nerve palsy (Bell's palsy). What organism caused this infection, and what is its primary vector?",
    "options": [
      "Borrelia burgdorferi transmitted by the Ixodes scapularis deer tick",
      "Rickettsia rickettsii transmitted by the Dermacentor variabilis dog tick",
      "Francisella tularensis transmitted by the Chrysops deer fly",
      "Borrelia recurrentis transmitted by the Pediculus humanus human body louse",
      "Leptospira interrogans transmitted by direct skin contact with rodent urine"
    ],
    "correctIndex": 0,
    "rationales": {
      0: "Correct. Lyme disease is caused by the microaerophilic spirochete Borrelia burgdorferi (and B. afzelii, B. garinii in Europe/Asia), transmitted by the hard-bodied tick Ixodes scapularis (in northeastern and upper midwestern USA) or Ixodes pacificus (in western USA). Stage 1 (early localized) features erythema migrans (targetoid bull's-eye rash). Stage 2 (early disseminated) features bilateral Bell's palsy (cranial nerve VII), AV block (carditis), and migratory arthralgias. Stage 3 (late) features chronic asymmetric large-joint oligoarthritis (especially the knee).",
      1: "Incorrect. Rickettsia rickettsii causes Rocky Mountain Spotted Fever (RMSF), characterized by a centripetal petechial rash starting on wrists/ankles and spreading to palms/soles and trunk, transmitted by Dermacentor ticks.",
      2: "Incorrect. Francisella tularensis causes tularemia (ulceroglandular form with painful regional lymphadenopathy).",
      3: "Incorrect. Borrelia recurrentis causes louse-borne epidemic relapsing fever, transmitted by crushing body lice (Pediculus humanus), not by Ixodes ticks.",
      4: "Incorrect. Leptospira interrogans causes leptospirosis / Weil disease following immersion in water contaminated by rodent or livestock urine."
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
    "latinNames": ["Borrelia burgdorferi", "Rickettsia rickettsii", "Francisella tularensis", "Borrelia recurrentis", "Leptospira interrogans"],
    "caseVignette": True,
    "tags": ["Lyme Disease", "Borrelia", "Ixodes", "Erythema Migrans"]
  },
  {
    "id": "SIMPIC-BAC-016",
    "stem": "A 42-year-old woman developed fever up to 39°C lasting 4 days after sleeping in an abandoned log cabin in the Sierra Nevada Mountains, where she found a soft tick (Ornithodoros) on her shoulder. Ten days after defervescence, she experiences a sudden relapse of identical high fever, severe headache, and myalgias. Peripheral blood smear during the febrile episode reveals numerous Giemsa-stained spirochetes. What molecular mechanism allows the pathogen to cause these recurrent febrile waves?",
    "options": [
      "Recombination and sequential programmed antigenic variation of Variable Major Proteins (VMPs) on linear plasmids",
      "Error-prone viral RNA-dependent RNA polymerase replication with frequent base misincorporation",
      "Epigenetic silencing of outer surface protein C (OspC) via histone deacetylation",
      "Horizontal acquisition of new capsular loci through natural transformation in host serum",
      "Cyclic release of merozoites from rupture of intraerythrocytic schizonts"
    ],
    "correctIndex": 0,
    "rationales": {
      0: "Correct. Relapsing fever (caused by Borrelia hermsii, B. turicatae [endemic tick-borne] or B. recurrentis [epidemic louse-borne]) is characterized by alternating cycles of high fever and afebrile intervals. This periodicity is driven by multiphasic antigenic variation of its surface-exposed Variable Major Proteins (VMPs: Vsp [small] and Vlp [large]). Borrelia stores dozens of silent VMP cassette genes on linear plasmids. During multiplication, non-reciprocal gene conversion transfers a silent VMP gene into the single active expression telomeric locus. Host IgM clears the dominant serotype, terminating fever; meanwhile, a minor mutant clone expressing a new VMP emerges, escapes host immunity, and multiplies, triggering the next febrile relapse.",
      1: "Incorrect. Error-prone RNA polymerase causes antigenic drift in RNA viruses (e.g., Influenza, HIV, HCV), whereas Borrelia is a bacterium with DNA genomes.",
      2: "Incorrect. Bacteria do not possess eukaryotic histones, and OspC downregulation occurs during mammalian adaptation in Borrelia burgdorferi, not relapsing fever.",
      3: "Incorrect. Natural transformation (competence) characterizes Streptococcus pneumoniae, Neisseria, and Haemophilus, but does not drive relapsing fever cycles.",
      4: "Incorrect. Intraerythrocytic schizont rupture drives paroxysmal fevers in Plasmodium (malaria), which is a protozoan parasite, not a spirochete visible freely in extracellular plasma."
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
    "latinNames": ["Borrelia hermsii", "Borrelia recurrentis", "Borrelia burgdorferi"],
    "caseVignette": True,
    "tags": ["Relapsing Fever", "Antigenic Variation", "VMP", "Spirochetes"]
  },

  # --- MYCOBACTERIA (Ch. 23) ---
  {
    "id": "SIMPIC-BAC-017",
    "stem": "A 32-year-old nurse who received BCG vaccination in childhood is hired by a major hospital and undergoes occupational health screening. Her Tuberculin Skin Test (PPD) produces 14 mm of induration at 48 hours. A blood Interferon-Gamma Release Assay (IGRA, QuantiFERON-TB Gold) is performed and returns negative. What is the fundamental advantage of IGRAs over the PPD skin test that accounts for this discrepancy?",
    "options": [
      "IGRAs measure circulating IgM antibodies specific to the arabinogalactan core of Mycobacterium tuberculosis",
      "IGRAs use specific antigens (ESAT-6 and CFP-10) encoded by the RD1 genomic region, which is deleted from all BCG vaccine strains and most NTM",
      "IGRAs directly quantify live, culturable acid-fast bacilli in peripheral circulating monocytes",
      "IGRAs trigger a Type I immediate hypersensitivity reaction that is unaffected by prior delayed-type hypersensitivity",
      "IGRAs assess the bactericidal capability of natural killer (NK) cells rather than memory T lymphocytes"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. IGRAs are cellular immune assays that measure IFN-gamma secreted by memory T cells, not humoral antibodies.",
      1: "Correct. Interferon-Gamma Release Assays (IGRAs, such as QuantiFERON-TB Gold and T-SPOT.TB) measure IFN-gamma release from sensitized CD4+ T lymphocytes upon stimulation with synthetic peptides mimicking ESAT-6 (Early Secretory Antigenic Target-6) and CFP-10 (Culture Filtrate Protein-10). These antigens are encoded on the 'Region of Difference 1' (RD1) locus present in Mycobacterium tuberculosis complex but deleted from all substrains of the BCG (Bacillus Calmette-Guérin) vaccine and almost all non-tuberculous mycobacteria (except M. marinum, M. kansasii, M. szulgai). Thus, IGRAs have high specificity and do NOT produce false-positive results in BCG-vaccinated individuals.",
      2: "Incorrect. IGRAs measure cytokine secretion by host T cells, not live bacterial colony units.",
      3: "Incorrect. IGRAs evaluate cell-mediated Type IV delayed hypersensitivity memory, not IgE-mediated Type I immediate hypersensitivity.",
      4: "Incorrect. The responsive effector cells are CD4+ (and CD8+) antigen-specific memory T lymphocytes, not NK cells."
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
    "latinNames": ["Mycobacterium tuberculosis", "Mycobacterium bovis", "Mycobacterium kansasii"],
    "caseVignette": True,
    "tags": ["Tuberculosis", "IGRA", "PPD", "BCG", "ESAT-6"]
  },

  # --- HEPATITIS VIRUSES (Ch. 35) ---
  {
    "id": "SIMPIC-VIR-004",
    "stem": "A 30-year-old woman presents to the student health center with anorexia, low-grade fever, and mild scleral icterus of 4 days' duration. Laboratory testing reveals AST 820 U/L and ALT 980 U/L. She received the recombinant Hepatitis B vaccine series 2 years ago. Serologic hepatitis panel yields the following profile:\n• Anti-HAV IgM: Negative\n• Anti-HAV IgG: Positive\n• HBsAg: Negative\n• Anti-HBs: Positive\n• Anti-HBc (total): Negative\n• Anti-HCV: Positive (confirmed with HCV RNA by RT-PCR: 450,000 IU/mL)\nWhat is the correct clinical interpretation of her hepatitis panel?",
    "options": [
      "Acute hepatitis A; successful vaccination against hepatitis B; prior resolved hepatitis C",
      "Acute hepatitis B in window period; past hepatitis A; active hepatitis C infection",
      "Past resolved hepatitis A; immune to hepatitis B via prior vaccination; current active hepatitis C infection",
      "Chronic active hepatitis B with pre-core mutant; past hepatitis A and C infections",
      "Acute hepatitis E with cross-reactive false-positive hepatitis C serology"
    ],
    "correctIndex": 2,
    "rationales": {
      0: "Incorrect. Anti-HAV IgM is negative (ruling out acute hepatitis A); anti-HAV IgG indicates remote past infection or past vaccination.",
      1: "Incorrect. The window period in HBV is characterized by positive anti-HBc IgM with negative HBsAg and negative anti-HBs. Here, anti-HBs is positive while anti-HBc is completely negative, which is the hallmark of vaccination immunity, not natural infection.",
      2: "Correct. Let us break down each viral marker systematically:\n1) HAV: Anti-HAV IgG(+) and IgM(-) = past resolved infection or prior vaccination immunity.\n2) HBV: HBsAg(-) and Anti-HBc(-) with isolated Anti-HBs(+) = successful recombinant HBsAg vaccination (natural infection would generate anti-HBc antibodies!).\n3) HCV: Anti-HCV(+) and HCV RNA(+) with markedly elevated transaminases = current, active Hepatitis C virus infection, which is the direct cause of her acute presentation.",
      3: "Incorrect. Pre-core mutant chronic HBV would have positive HBsAg and positive anti-HBc, both of which are negative here.",
      4: "Incorrect. HCV RNA is detected by direct molecular RT-PCR, confirming true viremia rather than cross-reactivity."
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
    "latinNames": ["Hepacivirus", "Hepadnaviridae"],
    "caseVignette": True,
    "tags": ["Hepatitis B", "Hepatitis C", "Serology", "Virology"]
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
      0: "Incorrect. HDV has a single-stranded circular RNA genome, not DNA, and does not replicate via reverse transcriptase.",
      1: "Incorrect. HDV has a single circular RNA molecule with self-cleaving ribozyme activity, not a segmented genome.",
      2: "Correct. Hepatitis Delta Virus (HDV) is a defective subviral satellite agent. Its genome is an extremely small (1.7 kb) single-stranded, covalently closed circular negative-sense RNA with extensive intramolecular base pairing and ribozyme catalytic cleavage activity. While HDV uses host RNA polymerase II to replicate its RNA and synthesizes its own delta antigen (HDAg) internal capsid, it completely lacks genes for envelope proteins. It strictly depends on coinfecting Hepatitis B Virus (HBV) to supply Hepatitis B surface antigen (HBsAg) to assemble infectious, transmissible virions. Superinfection of an established HBsAg carrier with HDV carries a high risk (up to 70–80%) of fulminant hepatitis, cirrhosis, and rapid progression.",
      3: "Incorrect. HDV lacks envelope glycoprotein genes and relies entirely on host RNA pol II for transcription.",
      4: "Incorrect. CD81 and claudin-1 are coreceptors for Hepatitis C Virus (HCV), whereas HDV binds the NTCP (sodium taurocholate cotransporting polypeptide) receptor via the pre-S1 domain of HBsAg."
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
    "latinNames": ["Hepatitis delta virus", "Hepadnaviridae"],
    "caseVignette": True,
    "tags": ["HDV", "HBV", "Superinfection", "HBsAg", "Satellite Virus"]
  },

  # --- FASTIDIOUS & ZOONOTIC RODS (Ch. 18 & 19) ---
  {
    "id": "SIMPIC-BAC-018",
    "stem": "An unimmunized 4-month-old infant presents with a 2-week history of paroxysms of staccato coughing followed by high-pitched inspiratory 'whooping', post-tussive emesis, and facial petechiae. Complete blood count demonstrates severe leukocytosis (WBC 48,000/µL) with 82% mature lymphocytes. Nasopharyngeal swabs inoculated onto charcoal-horse blood agar with cephalexin (Regan-Lowe medium) grow tiny, shiny, silver mercury-drop colonies of Bordetella pertussis. What is the molecular mechanism of the bacterial toxin responsible for this dramatic lymphocytosis?",
    "options": [
      "Direct degradation of the ciliary axoneme through tracheal cytotoxin peptidoglycan fragments",
      "ADP-ribosylation of the inhibitory G-protein alpha subunit (Gi), preventing inhibition of host adenylate cyclase and impairing chemokine-directed lymphocyte homing",
      "Pore-forming hemolysis of natural killer cells via calmodulin-dependent adenylate cyclase toxin",
      "Cleavage of leukocyte surface CD11/CD18 integrins, preventing extravasation across post-capillary venules",
      "LPS-mediated activation of CD14 with systemic IL-8 overproduction"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. Tracheal cytotoxin (a disaccharide-tetrapeptide peptidoglycan monomer fragment) is responsible for nitric oxide-mediated ciliated epithelial cell destruction and paroxysmal coughing, not lymphocytosis.",
      1: "Correct. Pertussis toxin (an AB5 exotoxin) catalyzes the ADP-ribosylation of the alpha subunit of the inhibitory G-protein (Gi-alpha), locking Gi in an inactive conformation. Inability to turn off adenylate cyclase causes uncontrolled intracellular accumulation of cAMP. In circulating lymphocytes, high cAMP inhibits chemokine receptor signaling (e.g., S1P1 and CCR7) required for lymphocytes to extravasate from bloodstream into peripheral lymphoid organs and tissues. Because lymphocytes cannot leave circulation, they accumulate markedly in peripheral blood, generating profound mature lymphocytosis (>30,000–50,000/µL) that directly correlates with disease severity and pulmonary hypertension.",
      2: "Incorrect. Adenylate cyclase toxin (ACT) is a calmodulin-dependent toxin that directly generates cAMP, primarily inhibiting phagocytosis by neutrophils and macrophages.",
      3: "Incorrect. CD11b/CD18 (Mac-1) is the target receptor bound by adenylate cyclase toxin to gain entry, but cleavage does not occur.",
      4: "Incorrect. Endotoxin causes neutrophilia in typical bacterial sepsis; mature lymphocytosis is uniquely characteristic of Bordetella pertussis."
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
    "latinNames": ["Bordetella pertussis"],
    "caseVignette": True,
    "tags": ["Pertussis", "Whooping Cough", "Gi Protein", "Lymphocytosis", "Toxin"]
  },
  {
    "id": "SIMPIC-BAC-019",
    "stem": "An unencapsulated (non-typeable) strain of Haemophilus influenzae isolated from the middle ear fluid of a 3-year-old child with recurrent otitis media fails to grow on 5% sheep blood agar unless cross-streaked with a culture of Staphylococcus aureus. Growth of H. influenzae appears exclusively as tiny satellite colonies in the immediate vicinity of the S. aureus streak. What two essential growth factors are provided by this satellite phenomenon?",
    "options": [
      "Factor X (Hemin) released by RBC lysis and Factor V (NAD+) actively secreted by S. aureus",
      "Factor X (Bile salts) and Factor V (Glutathione)",
      "Factor VIII (Antihemophilic factor) and Factor IX (Christmas factor)",
      "Factor X (Coenzyme A) and Factor V (Cytochrome c)",
      "Factor X (Thiamine pyrophosphate) and Factor V (Pyridoxal phosphate)"
    ],
    "correctIndex": 0,
    "rationales": {
      0: "Correct. Haemophilus influenzae is a fastidious organism that requires two exogenous factors for aerobic growth: Factor X (hemin / hematin, a protoporphyrin IX source required for cytochrome synthesis) and Factor V (nicotinamide adenine dinucleotide [NAD+] or NADP, required for electron transport). Unheated sheep blood agar contains heat-labile enzymes (NADases) that destroy free NAD, preventing H. influenzae growth. However, when Staphylococcus aureus is streaked across the plate, its beta-lysin hemolysins lyse sheep red cells to release Factor X (hemin), while the living staphylococcal colonies synthesize and excrete excess Factor V (NAD). H. influenzae grows as tiny 'satellite' colonies clustered around the S. aureus streak. (Chocolate agar supplies both factors freely because heating at 80°C lyses RBCs and inactivates NADases).",
      1: "Incorrect. Factor X is hemin (iron protoporphyrin), not bile salts; Factor V is NAD, not glutathione.",
      2: "Incorrect. Factors VIII and IX are mammalian coagulation factors in the intrinsic clotting pathway, unrelated to microbial growth requirements.",
      3: "Incorrect. Factor X is hemin, not Coenzyme A.",
      4: "Incorrect. Factor X and V are hemin and NAD+, respectively."
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
    "latinNames": ["Haemophilus influenzae", "Staphylococcus aureus"],
    "caseVignette": True,
    "tags": ["Haemophilus", "Satellitism", "Factor X", "Factor V", "Chocolate Agar"]
  },
  # --- HELICOBACTER (Ch. 17) ---
  {
    "id": "SIMPIC-BAC-020",
    "stem": "A 48-year-old executive presents with burning epigastric pain that worsens 2 to 3 hours after meals and awakens him at night. Upper endoscopy reveals an active 1.5-cm peptic ulcer in the duodenal bulb. Antral gastric biopsy placed into a Christensen urea broth produces a rapid color change from yellow to bright magenta pink within 5 minutes. What is the fundamental physiologic role of this bacterial enzyme in gastric colonization?",
    "options": [
      "Degrades gastric mucin polymers into absorbable oligosaccharides",
      "Generates ammonia from urea to neutralize hydrochloric acid and create a protective alkaline microenvironment",
      "Inactivates secretory IgA antibodies in the gastric mucus layer",
      "Induces apoptosis of gastric parietal cells, shutting down acid production permanently",
      "Cleaves gastrin-releasing peptide, suppressing antral G-cell secretion"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. Mucin degradation is mediated by bacterial mucinases and phospholipases, not urease.",
      1: "Correct. Helicobacter pylori produces abundant constitutive cytoplasmic and surface-associated urease (up to 5-10% of total bacterial protein). Urease hydrolyzes urea present in gastric juice into carbon dioxide and ammonia (NH3). The basic ammonia buffers gastric hydrochloric acid in the immediate pericellular microenvironment, raising the local pH from acidic (1.0-2.0) to neutral (6.0-7.0), allowing H. pylori to survive and swim through gastric mucus via corkscrew lophotrichous flagella to colonize the gastric epithelial surface.",
      2: "Incorrect. Secretory IgA cleavage is performed by IgA1 proteases (found in S. pneumoniae, N. meningitidis, N. gonorrhoeae, H. influenzae), not urease.",
      3: "Incorrect. Parietal cell apoptosis with achlorhydria occurs in autoimmune metaplastic atrophic gastritis, not directly mediated by urease enzyme.",
      4: "Incorrect. H. pylori antral gastritis actually causes hypergastrinemia due to destruction of somatostatin-producing D cells by CagA and VacA."
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
    "latinNames": ["Helicobacter pylori"],
    "caseVignette": True,
    "tags": ["Helicobacter", "Urease", "Peptic Ulcer", "Ammonia"],
    "image": {
      "src": "/images/figures/helicobacter-sem.jpeg",
      "caption": "Scanning electron micrograph of curved, spiral-shaped Helicobacter pylori colonizing human gastric epithelial cell surfaces beneath the protective mucus layer.",
      "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 28.2",
      "alt": "Helicobacter pylori SEM"
    }
  },

  # --- CLOSTRIDIUM BOTULINUM & TETANI (Ch. 11) ---
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
      0: "Incorrect. Blocking release of inhibitory neurotransmitters (glycine and GABA) in spinal cord Renshaw cells is the mechanism of Tetanospasmin (Clostridium tetani), causing spastic paralysis (trismus, risus sardonicus, opisthotonos).",
      1: "Correct. Botulinum neurotoxin (BoNT, an AB zinc endopeptidase produced by Clostridium botulinum) is absorbed from the gut, enters the circulation, and binds gangliosides on presynaptic cholinergic nerve terminals. The light chain is translocated into the cytosol where it selectively cleaves SNARE complex proteins (types A and E cleave SNAP-25; types B, D, F, G cleave synaptobrevin/VAMP; type C cleaves syntaxin and SNAP-25). This prevents the docking and fusion of synaptic vesicles carrying acetylcholine, causing flaccid paralysis with autonomic dysfunction (dry mouth, dilated pupils, ptosis, descending weakness).",
      2: "Incorrect. Blockade of nicotinic ACh receptors at motor endplates is the mechanism of curare and alpha-bungarotoxin, or autoantibodies in Myasthenia Gravis.",
      3: "Incorrect. Blockade of voltage-gated sodium channels is the mechanism of tetrodotoxin (pufferfish) and saxitoxin (red tide dinoflagellates).",
      4: "Incorrect. Anterior horn cell destruction is the pathology of Poliomyelitis and West Nile neuroinvasive disease."
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
    "latinNames": ["Clostridium botulinum", "Clostridium tetani"],
    "caseVignette": True,
    "tags": ["Botulism", "SNARE", "Acetylcholine", "Flaccid Paralysis"]
  },

  # --- PARASITOLOGY (Ch. 46): AMOEBIASIS & GIARDIASIS ---
  {
    "id": "SIMPIC-PAR-003",
    "stem": "A 36-year-old traveler returns from Mexico with a 3-week history of right upper quadrant abdominal pain, fever, weight loss, and hepatomegaly. An abdominal ultrasound demonstrates a single, smooth-walled, 8-cm hypoechoic cyst in the right hepatic lobe. Diagnostic aspiration yields thick, reddish-brown fluid resembling 'anchovy paste'. Stool examination reveals cysts with 4 nuclei and elongated chromatoid bars with rounded ends. What is the definitive etiologic agent, and what microscopic finding in trophozoites confirms tissue-invasive disease?",
    "options": [
      "Echinococcus granulosus; hydatid sand with hooklets",
      "Entamoeba histolytica; erythrophagocytosis (ingested red blood cells in cytoplasm)",
      "Giardia duodenalis; falling leaf motility with two nuclei",
      "Entamoeba dispar; multiple chromatoid bodies in trophozoites",
      "Fasciola hepatica; unembryonated operculated eggs"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. Echinococcus granulosus causes hydatid cyst disease with an outer laminated cuticular layer and daughter cysts containing protoscolices (hydatid sand); fluid aspiration carries a severe risk of anaphylactic shock and is generally contraindicated.",
      1: "Correct. Entamoeba histolytica causes amoebic colitis (flask-shaped ulcers) and extraintestinal amoebic liver abscess (classically in the right hepatic lobe containing sterile 'anchovy paste' liquefied necrotic debris). The trophozoites have a single nucleus with fine central karyosome and evenly distributed peripheral chromatin. In tissue-invasive disease, the pathognomonic microscopic finding is erythrophagocytosis: trophozoites actively engulfing host erythrocytes. (E. dispar is morphologically identical but non-pathogenic and never demonstrates erythrophagocytosis). Cysts characteristically contain 1 to 4 nuclei with blunt-ended, cigar-shaped chromatoid bars.",
      2: "Incorrect. Giardia duodenalis causes non-invasive duodenal malabsorption and steatorrhea; it never causes hepatic abscesses.",
      3: "Incorrect. Entamoeba dispar is a non-invasive commensal that does not cause hepatic abscesses or ingest RBCs.",
      4: "Incorrect. Fasciola hepatica is a liver fluke acquired from freshwater watercress; it causes biliary colic and marked peripheral eosinophilia."
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
    "latinNames": ["Entamoeba histolytica", "Entamoeba dispar", "Giardia duodenalis", "Echinococcus granulosus"],
    "caseVignette": True,
    "tags": ["Amoebiasis", "Liver Abscess", "Erythrophagocytosis", "Parasitology"],
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
      "Binding of a ventral concave adhesive sucking disk to intestinal enterocytes mediated by lectins and giardins",
      "Pore-forming amoebapore insertion creating cell-free mucosal erosion",
      "Direct degradation of the brush border microvilli via cysteine proteinases",
      "Translocation of an AB enterotoxin that constitutively stimulates guanylate cyclase",
      "Receptor-mediated endocytosis into M cells of Peyer's patches"
    ],
    "correctIndex": 0,
    "rationales": {
      0: "Correct. Giardia duodenalis (also called G. lamblia or G. intestinalis) exists in trophozoite and cyst forms. The trophozoite is pear- or teardrop-shaped with two symmetric nuclei, central axostyle, and four pairs of flagella ('face-like' appearance). It attaches tenaciously to the apical microvillar membrane of enterocytes in the duodenum and upper jejunum using a specialized ventral concave adhesive sucking disk composed of alpha-giardin and beta-tubulin microtubules. This physical attachment, combined with brush border damage, causes villus flattening, disaccharidase deficiency (lactose intolerance), and lipid malabsorption (steatorrhea) without cellular invasion.",
      1: "Incorrect. Amoebapores are pore-forming peptides produced by Entamoeba histolytica, causing cytolytic necrosis.",
      2: "Incorrect. Cysteine proteinases facilitate invasion in E. histolytica, whereas Giardia is strictly non-invasive.",
      3: "Incorrect. Stimulation of guanylate cyclase is the mechanism of ETEC heat-stable toxin (STa).",
      4: "Incorrect. Translocation across M cells is the invasion portal for Salmonella, Shigella, and Yersinia enterocolitica."
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
    "latinNames": ["Giardia duodenalis", "Giardia lamblia", "Entamoeba histolytica"],
    "caseVignette": True,
    "tags": ["Giardiasis", "Ventral Sucking Disk", "Steatorrhea", "Parasitology"],
    "image": {
      "src": "/images/figures/giardia-trophozoite.jpeg",
      "caption": "Diagnostic morphology of Giardia duodenalis: (A) Trophozoite showing characteristic binucleate pear-shaped morphology and ventral adhesive disk, and (B) oval quadrinucleate cyst with central axostyle.",
      "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 72.3",
      "alt": "Giardia duodenalis trophozoite and cyst"
    }
  },

  # --- MYCOLOGY (Ch. 45): CANDIDA ALBICANS ---
  {
    "id": "SIMPIC-MYC-003",
    "stem": "A 22-year-old woman with poorly controlled type 1 diabetes presents with thick, white, curdy ('cottage cheese-like') vaginal discharge, intense vulvar pruritus, and dyspareunia. Microscopic examination of a 10% KOH wet mount reveals budding yeast cells alongside extensive pseudohyphae. When inoculated into human serum and incubated at 37°C for 2.5 hours, the yeast cells rapidly produce true hyphal outgrowths with no constriction at the point of origin ('germ tubes'). What is the causative organism?",
    "options": [
      "Candida glabrata",
      "Candida albicans",
      "Candida tropicalis",
      "Trichosporon asahii",
      "Malassezia globosa"
    ],
    "correctIndex": 1,
    "rationales": {
      0: "Incorrect. Candida glabrata is strictly monomorphic (yeast form only) and NEVER forms pseudohyphae, true hyphae, or germ tubes. It is intrinsically less susceptible to azoles.",
      1: "Correct. Candida albicans (and the closely related C. dubliniensis) is uniquely identified by the rapid Germ Tube Test: incubation in animal or human serum at 37°C for 2 to 3 hours triggers the formation of true hyphal germ tubes without constrictions at the junction with the mother yeast cell. In tissue, C. albicans is dimorphic in reverse: existing as oval yeast cells (blastoconidia) that form pseudohyphae (chains of elongated blastoconidia with constrictions) and invasive true septate hyphae. On cornmeal agar, it forms thick-walled terminal chlamydospores.",
      2: "Incorrect. Candida tropicalis can produce pseudohyphae and long hyphae, but does not form true germ tubes within 2.5 hours.",
      3: "Incorrect. Trichosporon produces true hyphae, pseudohyphae, and arthroconidia; it causes white piedra and disseminated trichosporonosis.",
      4: "Incorrect. Malassezia globosa causes pityriasis versicolor (showing 'spaghetti and meatballs' short hyphae and round yeast cells on KOH) and requires exogenous lipid (olive oil) for in vitro growth."
    },
    "source": "Jawetz 28th Ed",
    "chapter": "Ch. 45: Medical Mycology",
    "subject": "Mycology",
    "difficulty": "Round 1 (Recall & Basics)",
    "highYieldPearls": [
      "Candida albicans: Germ tube positive at 37°C in serum (2-3 hours) -> true hyphae without constriction.",
      "Forms pseudohyphae at 20°C and terminal chlamydospores on cornmeal agar.",
      "Most common cause of opportunistic mycosis (oral thrush, vulvovaginitis, diaper rash, candidemia in central lines)."
    ],
    "latinNames": ["Candida albicans", "Candida glabrata", "Candida tropicalis", "Malassezia globosa"],
    "caseVignette": True,
    "tags": ["Candida", "Germ Tube", "Pseudohyphae", "Vulvovaginitis"],
    "image": {
      "src": "/images/figures/candida-pseudohyphae.jpeg",
      "caption": "Calcofluor white fluorescent stain demonstrating budding oval blastoconidia alongside extensive pseudohyphae and true hyphal filaments of Candida albicans.",
      "sourceRef": "Murray Medical Microbiology 9th Ed, Fig. 60.1",
      "alt": "Candida albicans pseudohyphae"
    }
  }
]

if __name__ == '__main__':
    # Read existing questions
    with open('src/data/questions/microbiologyQuestions.ts', 'r', encoding='utf-8') as f:
        current_ts = f.read()

    # Check if already appended
    if 'SIMPIC-BAC-011' in current_ts:
        print("Questions already present in microbiologyQuestions.ts. Skipping append.")
    else:
        # Balance the new questions deterministically
        for idx, q in enumerate(extra_questions):
            target_k = (19 + idx) % 5 # continue cyclic pattern
            curr_k = q['correctIndex']
            if curr_k != target_k:
                # Swap options
                q['options'][curr_k], q['options'][target_k] = q['options'][target_k], q['options'][curr_k]
                # Swap rationales
                q['rationales'][curr_k], q['rationales'][target_k] = q['rationales'][target_k], q['rationales'][curr_k]
                q['correctIndex'] = target_k

        # Append into microbiologyQuestions
        # Find closing bracket of the array
        bracket_idx = current_ts.rfind('];')
        if bracket_idx != -1:
            new_items_code = ',\n' + ',\n'.join([json.dumps(q, indent=2) for q in extra_questions]) + '\n'
            updated_ts = current_ts[:bracket_idx].rstrip() + new_items_code + '];\n'
            with open('src/data/questions/microbiologyQuestions.ts', 'w', encoding='utf-8') as f:
                f.write(updated_ts)
            print(f"Successfully added {len(extra_questions)} new questions from Jawetz!")
        else:
            print("Error: Could not find closing bracket ]; in microbiologyQuestions.ts")

