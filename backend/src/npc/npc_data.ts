const npcStrengths: Readonly<{ name: string, description: string }>[] = [
    { name: `Charm`, description: `Able to persuade other NPCs and people with their winning ways` },
    { name: `Cunning`, description: `Having plans for any occasion and a backup after that` },
    { name: `Debts`, description: `Being owed favors by one or more important other people` },
    { name: `Deception`, description: `Capable of tricking and misleading others easily` },
    { name: `Fame`, description: `Being known and widely respected in their own social circles` },
    { name: `Family`, description: `Related to someone of greater importance or influence` },
    { name: `Foresight`, description: `Able to clearly predict the likely outcomes of current situations` },
    { name: `Friendship`, description: `Being good friends with someone important or powerful` },
    { name: `Gear`, description: `Possessed of high-quality cyber, weaponry, drones, or other useful equipment` },
    { name: `Inspiration`, description: `Able to goad others to pursue a shared goal as if it were their own` },
    { name: `Luck`, description: `Beyond any ordinary measure to a very noticeable degree` },
    { name: `Money`, description: `Unusually wealthy for someone in their position` },
    { name: `Prowess`, description: `With their physical form somehow dramatically stronger and tougher than most` },
    { name: `Secrets`, description: `Privy to blackmail information or valuable knowledge hidden from most` },
    { name: `Skills`, description: `Possessed of a rare or important skill to an unusual degree` },
    { name: `Stealth`, description: `Very difficult to locate or follow if they don't care to be pursued` },
    { name: `Ties`, description: `Linked professionally to an organization or group that is very dangerous to offend` },
    { name: `Violence`, description: `Either being personally fearsome or having ties to those who are` },
    { name: `Willpower`, description: `Driven to obtain their aim with tireless, ferocious determination` },
    { name: `Wisdom`, description: `Able to discern a practical path to their desires even when all is murky` },
];

const npcVirtues: Readonly<{ name: string, description: string }>[] = [
    { name: `Honor`, description: `Always keeps the spirit of their bargains` },
    { name: `Truthfulness`, description: `Avoids lying in all but dire circumstances` },
    { name: `Idealism`, description: `Cherishes an idealistic dream` },
    { name: `Courage`, description: `Courage of unusual degree` },
    { name: `Family Devotion`, description: `Devoted to their family` },
    { name: `Kindness`, description: `Exceptionally kind to the weak` },
    { name: `Diligence`, description: `Extremely fastidious about their duties` },
    { name: `Loyalty`, description: `Extremely trustworthy to friends` },
    { name: `Forgiveness`, description: `Forgiving temperament, even if unwise` },
    { name: `Generosity`, description: `Generous even when it is difficult` },
    { name: `Sense of Humor`, description: `Has an excellent sense of humor` },
    { name: `Integrity`, description: `Hates underhanded schemes and plots` },
    { name: `Responsibility`, description: `Incorrupt about their given responsibilities` },
    { name: `Leadership`, description: `Is a good, trustworthy leader to minions` },
    { name: `Calmness`, description: `Keeps calm even under intense pressure` },
    { name: `Loyalty`, description: `Loyal subordinate to their chosen leader` },
    { name: `Promise-Keeping`, description: `Never backs down from a promise` },
    { name: `Patience`, description: `Patient when taxed or annoyed` },
    { name: `Self-Sacrifice`, description: `Self-sacrificing for what they believe in` },
    { name: `Thoughtfulness`, description: `Thoughtful and not given to quick anger` }
];

const npcNegativeTraits: Readonly<{ name: string, description: string }>[] = [
    { name: `Bribery`, description: `Accepts bribes or considerations` },
    { name: `Addiction`, description: `Addicted to a drug or indulgence` },
    { name: `Blame-Shifting`, description: `Blames their failures on something else` },
    { name: `Negligence`, description: `Careless and sloppy with their duties` },
    { name: `Unreliability`, description: `Easily breaks promises to others` },
    { name: `Gullibility`, description: `Easily led astray by a pretty face` },
    { name: `Greed`, description: `Exceptionally greedy despite its dangers` },
    { name: `Anger Issues`, description: `Has fits of violent anger` },
    { name: `Bigotry`, description: `Irrational hatred for a class or type` },
    { name: `Abuse`, description: `Leaves a trail of mistreated lovers` },
    { name: `Compulsive Lying`, description: `Lies even when it’s not terribly useful` },
    { name: `Infidelity`, description: `Militantly unfaithful to their partner` },
    { name: `Obession`, description: `Obsessed with a very expensive pastime` },
    { name: `Overpromising`, description: `Promises far more than they actually do` },
    { name: `Disloyalty`, description: `Prone to betraying unprofitable causes` },
    { name: `Cowardice`, description: `Prone to fits of cowardice` },
    { name: `Vanity`, description: `Reckless desire for fame and glory` },
    { name: `Spendthrift`, description: `Spendthrift prone to getting into debt` },
    { name: `Theft`, description: `Steals even when it’s not very convenient` },
    { name: `Thoughtlessness`, description: `Thoughtless with those closest to them` }
];

const npcProblems: Readonly<{ name: string, description: string }>[] = [
    { name: `Family Member or Friend Problem`, description: `A family member or friend has a problem that needs immediate attention.` },
    { name: `Subordinate Wants Job`, description: `A subordinate wants their job, creating tension and conflict in the workplace.` },
    { name: `Kids Doing Something Stupid`, description: `Their kids are doing something reckless or irresponsible, causing concern for their safety and future.` },
    { name: `Furious Spouse or Partner`, description: `Their spouse or partner is livid with them, leading to a tense and potentially volatile situation.` },
    { name: `Displeased Superior`, description: `Their superior is extremely dissatisfied with their performance, putting their career advancement at risk.` },
    { name: `Botched Last Responsibility`, description: `They failed to deliver on their previous commitment, damaging their reputation and credibility.` },
    { name: `Hate Current Job or Boss`, description: `They despise their current job or supervisor, leading to low morale and poor productivity.` },
    { name: `Need Rare or Costly Medical Aid`, description: `They require expensive or hard-to-find medical treatment, posing financial and logistical challenges.` },
    { name: `In Debt`, description: `They owe a significant amount of money, jeopardizing their financial stability and security.` },
    { name: `Being Blackmailed or Coerced`, description: `They're being threatened or manipulated into doing something they don't want to do, placing them in a difficult ethical dilemma.` },
    { name: `Pursued by Dire Nemesis`, description: `They're being relentlessly pursued by a formidable adversary, endangering their personal and professional life.` },
    { name: `Dire Need of Money`, description: `They're facing a desperate financial crisis, requiring immediate intervention to avoid severe consequences.` },
    { name: `Stifled and Bored in Job`, description: `They feel suffocated and unfulfilled in their current role, longing for change and growth.` },
    { name: `Struggling with Mental Trauma`, description: `They're grappling with psychological scars from past experiences, impacting their daily functioning and well-being.` },
    { name: `Job Too Big`, description: `They've been assigned a role that's beyond their capabilities, setting them up for failure and stress.` },
    { name: `Dangerous Foe`, description: `They've attracted the attention of a powerful and hostile enemy, imperiling their safety and success.` },
    { name: `Addiction`, description: `They've developed a harmful dependence on substances or behaviors, compromising their health and relationships.` },
    { name: `Inherited Problem`, description: `They've inherited a complex issue from a predecessor or family member, burdening them with a difficult challenge.` },
    { name: `Lost or Stolen Vital Thing`, description: `They've misplaced or had stolen a crucial item or document, jeopardizing their ability to complete tasks or meet obligations.` },
    { name: `Broken Promises`, description: `They've made promises they can't keep, damaging their reputation and trust with others.` }
];

const npcMotivations: Readonly<{ name: string, description: string }>[] = [
    { name: `Attract New Lover`, description: `They want an appealing new lover` },
    { name: `More Leisure Time`, description: `They want more leisure time to themselves` },
    { name: `More Money`, description: `They want more money` },
    { name: `Respect and Admiration`, description: `They want respect and admiration` },
    { name: `New Job`, description: `They want to acquire a different job` },
    { name: `Boost Friend's Career`, description: `They want to boost a friend’s career` },
    { name: `Secret Command`, description: `They want to carry out a secret command` },
    { name: `Depose Boss`, description: `They want to depose their boss` },
    { name: `Earn Forgiveness`, description: `They want to earn forgiveness` },
    { name: `Escape Past Choices`, description: `They want to escape their past choices` },
    { name: `Harm Enemy Organization`, description: `They want to harm an enemy organization` },
    { name: `Indulge in Pleasures`, description: `They want to indulge in pleasures` },
    { name: `Kill Enemy`, description: `They want to kill some enemy` },
    { name: `Leave Current Life`, description: `They want to leave their current life` },
    { name: `Live in Different Place`, description: `They want to live in a different place` },
    { name: `Obtain Item`, description: `They want to obtain a particular item` },
    { name: `Prove Themselves`, description: `They want to prove themselves to others` },
    { name: `Pursue Tempting Secret`, description: `They want to pursue a tempting secret` },
    { name: `Rescue Someone`, description: `They want to rescue someone from trouble` },
    { name: `Take Revenge`, description: `They want to take revenge on a foe` }
];

// List of good jobs to include in professions table
// Cybernetic engineer
// Artificial intelligence programmer
// Virtual reality designer
// Nanotechnology specialist
// Biomechanical technician
// Neural network architect
// Advanced materials scientist
// Quantum computer programmer
// Augmented reality developer
// Digital forensics expert
// Cybersecurity consultant
// Personalized medicine practitioner
// Robotics engineer
// Energy storage researcher
// Space colonization specialist
// Environmental remediation expert
// Advanced manufacturing technologist
// Synthetic biologist
// Telepresence operator
// Brain-computer interface developer
// Smart city planner
// Human-robot interaction designer
// Bioinformatics analyst
// High-energy physics researcher
// Cyberwarfare strategist
// Personal assistant AI programmer
// Virtual reality therapist
// Blockchain security auditor
// Internet of Things (IoT) architect
// Autonomous vehicle engineer
// Medical robotics specialist
// Renewable energy project manager
// Space tourism guide
// AI ethicist
// Privacy lawyer
// Cyber insurance broker
// Virtual world creator
// E-sports coach
// Digital art conservator
// Biometric identification specialist
// Environmental monitoring expert
// Disaster response coordinator
// Advanced agriculture technologist
// Cybernetic implant surgeon
// Virtual reality addiction counselor
// Online reputation manager
// Personal finance AI advisor
// Supply chain optimization specialist
// AI-powered healthcare diagnostician
// Urban vertical farm manager
// Cybersecurity threat hunter
// Educational technology specialist
// Digital divide advocate
// Sustainable transportation planner
// Interactive entertainment producer
// Social media influencer manager
// Virtual reality fitness trainer
// Augmented reality artist
// AI-assisted writer
// Ethical hacker
// User experience (UX) designer
// Financial data analyst
// Climate change mitigation specialist
// Digital museum curator
// AI-powered financial advisor
// Health informatics specialist
// Cybersecurity risk assessor
// Wearable technology designer
// Virtual reality journalist
// Personal shopping AI assistant
// Digital marketing strategist
// AI-powered legal researcher
// Web series producer
//TODO: get a bigger list of professions and descriptions for the array.
const npcFuturisticJobs: Readonly<{name: string, description: string}>[] = [
    { name: 'Cybernetic Engineer', description: 'Designs and implements cybernetic systems for enhancing human abilities.' },
    { name: 'Artificial Intelligence Programmer', description: 'Develops intelligent algorithms and software for various industries and applications.' },
    { name: 'Virtual Reality Designer', description: 'Creates immersive virtual reality experiences for gaming, education, and other purposes.' },
    { name: 'Nanotechnology Specialist', description: 'Researches and develops new materials and products using nanotechnology.' },
    { name: 'Biomechanical Technician', description: 'Installs, maintains, and repairs advanced medical equipment and prosthetics.' },
    { name: 'Neural Network Architect', description: 'Designs and trains neural networks to perform tasks like image recognition and natural language processing.' },
    { name: 'Advanced Materials Scientist', description: 'Researches and develops new materials with unique properties for use in various industries.' },
    { name: 'Quantum Computer Programmer', description: 'Programs quantum computers to solve complex problems in fields like cryptography and material science.' },
    { name: 'Augmented Reality Developer', description: 'Creates interactive and immersive AR experiences for various industries and applications.' },
    { name: 'Digital Forensics Expert', description: 'Investigates and analyzes digital evidence for criminal investigations and corporate security breaches.' },
    { name: 'Cybersecurity Consultant', description: 'Provides advice and guidance on protecting computer systems and networks from cyber threats.' },
    { name: 'Personalized Medicine Practitioner', description: 'Develops customized treatment plans based on individual patient needs and genetic profiles.' },
    { name: 'Robotics Engineer', description: 'Designs, builds, and programs robots for various industries and applications.' },
    { name: 'Energy Storage Researcher', description: 'Works on developing new battery technologies and energy storage solutions for renewable energy sources.' },
    { name: 'Space Colonization Specialist', description: 'Plans and prepares for human settlements on other planets and celestial bodies.' },
    { name: 'Environmental Remediation Expert', description: 'Works on cleaning up pollution and restoring ecosystems damaged by human activities.' },
    { name: 'Advanced Manufacturing Technologist', description: 'Develops and implementing cutting-edge manufacturing techniques and tools for various industries.' },
    { name: 'Synthetic Biologist', description: 'Designs and engineers new biological systems and organisms for various applications, such as biofuels and medicines.' },
    { name: 'Telepresence Operator', description: 'Operates remote presence robots and other telepresence technologies for various industries and applications.' },
    { name: 'Brain-Computer Interface Developer', description: 'Designs and develops interfaces between the human brain and electronic devices.' },
    { name: 'Smart City Planner', description: 'Designs and implements smart city infrastructure and technology, such as traffic management and energy efficiency systems.' },
    { name: 'Human-Robot Interaction Designer', description: 'Designs and optimizes interactions between humans and robots in various settings, such as factories and homes.' },
    { name: 'Bioinformatics Analyst', description: 'Analyzes and interprets large amounts of biological data, such as DNA sequences and protein structures.' },
    { name: 'High-Energy Physics Researcher', description: 'Studies the fundamental nature of matter and energy at high energies, such as those found in particle accelerators.' },
    { name: 'Cyberwarfare Strategist', description: 'Develops and implements strategies for defending against and responding to cyber attacks on critical infrastructure and military targets.' },
    { name: 'Personal Assistant AI Programmer', description: 'Develops and trains AI personal assistants for individuals and organizations.' },
    { name: 'Virtual Reality Therapist', description: 'Uses virtual reality to treat mental health conditions such as anxiety disorders and PTSD.' },
    { name: 'Blockchain Security Auditor', description: 'Examines blockchain systems for vulnerabilities and ensures their security and integrity.' }
]

export {npcStrengths, npcVirtues, npcProblems, npcNegativeTraits, npcMotivations, npcFuturisticJobs};