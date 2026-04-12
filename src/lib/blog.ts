// ============================================================
// Blog data — structured posts for easy addition
// To add a new post: add an entry to the `blogPosts` array below.
// ============================================================

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage?: string;
  readingTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-a-newspaper-article-led-me-to-ai",
    title: "How a Newspaper Article Led Me to AI Research",
    date: "2026-03-20",
    tags: ["Personal", "AI", "Research"],
    excerpt:
      "It started with brainstorming ideas for a national newspaper column. Then I stumbled on Neuralink — and everything changed.",
    readingTime: "5 min read",
    content: `
<p>People often ask me how I ended up in AI research with an Electrical Engineering degree. The honest answer is: it started with writing for a newspaper.</p>

<p>During my junior year at the Islamic University of Technology, I was working as a trainee at The Financial Express Bangladesh, writing articles for the Sci-Tech section. One afternoon, while brainstorming ideas for my next piece, I came across Elon Musk's Neuralink — a brain-computer interface that aimed to bridge the gap between human cognition and machine intelligence.</p>

<p>It was as if someone had flipped a switch in my mind. The idea wasn't just interesting — it was exhilarating. I couldn't stop imagining the boundless ways AI could transform our world. That article never got written the way I originally planned, because I fell down a rabbit hole of research papers, YouTube lectures, and Python tutorials that would eventually reshape my entire career.</p>

<h2>From Curiosity to Commitment</h2>
<p>In my senior year, I enrolled in a course on Artificial Intelligence and Machine Learning. That's when fascination turned into something deeper — a commitment. I started uncovering how AI could do more than just amaze; it could solve problems that actually matter. The DSP lab and AI/ML lab at IUT gave me hands-on experience with Python, and I began to see how my signal processing background could complement machine learning in ways I hadn't expected.</p>

<p>Then I asked myself a question that changed everything: <em>What if I combine machine learning and healthcare together?</em></p>

<h2>A Personal Reason</h2>
<p>This question wasn't purely academic. During my second year, my father was diagnosed with a brain tumor, and my mother suffered a serious knee injury while managing diabetes. My life became a balancing act — carrying the weight of my family's struggles while studying at one of Bangladesh's most competitive engineering universities, where the acceptance rate was less than 10%.</p>

<p>There were moments when I wondered if I could keep going. My grades slipped during those tough years. But giving up wasn't an option. By my final year, my father's health improved, and I managed to bounce back — finishing my last semester with a CGPA of 3.82.</p>

<p>That experience didn't just test my resilience. It gave me a deeply personal reason to pursue AI in healthcare. When I later worked on MRI-based brain tumor detection using pre-trained CNN models, the research wasn't abstract to me. It was personal.</p>

<h2>Where It Led</h2>
<p>That single afternoon of reading about Neuralink eventually led to twelve published and ongoing research papers, spanning medical imaging, power systems optimization, cybersecurity, and explainable AI. It led to building VisionEdge — a cataract detection app — with a childhood friend. It led to presenting at IEEE and Springer conferences across four countries.</p>

<p>None of it was planned. All of it started with curiosity and a newspaper column.</p>

<p>If there's one thing I've learned, it's this: even in the hardest of times, there's a way forward if you hold on and keep pushing. And sometimes, the most significant turning points in your career come from the most unexpected places.</p>
`,
  },
  {
    id: "what-i-learned-publishing-medical-imaging-papers",
    title: "What I Learned Publishing Multiple Medical Imaging Papers",
    date: "2026-02-28",
    tags: ["Deep Learning", "Medical Imaging", "Research"],
    excerpt:
      "From brain tumors to colorectal cancer — practical lessons from building CNN-based diagnostic frameworks across five different clinical domains.",
    readingTime: "7 min read",
    content: `
<p>Over the past two years, I've worked on medical image classification across five distinct clinical domains: brain tumor detection, colorectal cancer diagnostics, bone fracture identification, cataract screening, and diabetic retinopathy diagnosis. Each project taught me something different. Here's what I wish I'd known when I started.</p>

<h2>Start With the Problem, Not the Architecture</h2>
<p>My first project was brain tumor classification using MRI scans. I compared five pre-trained CNN architectures — InceptionV3, ResNet-50, VGG-16, MobileNetV2, and DenseNet121. The natural instinct is to start by picking the "best" model. But I quickly learned that the right architecture depends entirely on the problem constraints.</p>

<p>For example, when my childhood friend and I built VisionEdge — a smartphone app for real-time cataract detection — we needed a model that could run on edge devices. MobileNetV2 was the clear choice, not because it had the highest accuracy in benchmarks, but because it could achieve 99.11% accuracy while fitting on a phone. The constraint shaped the solution.</p>

<h2>Preprocessing Is Where the Real Work Happens</h2>
<p>In our bone fracture detection paper, we used a modified VGG19 architecture. But the accuracy jump didn't come from the model — it came from the preprocessing pipeline. Applying CLAHE for contrast enhancement, Otsu's thresholding for segmentation, and Canny edge detection to highlight fracture lines made more difference than any architectural change.</p>

<p>This pattern repeated across every project. For histopathological images in colorectal cancer detection, an advanced preprocessing pipeline paired with a modified MobileNetV2 achieved 99.95% accuracy on the LC25000 dataset. The model matters, but the data preparation matters more.</p>

<h2>Explainability Is Not Optional</h2>
<p>One of the most important lessons came from our work on antibiotic resistance prediction and maternal risk assessment. We used LIME and Grad-CAM to make model decisions interpretable. This wasn't just an academic exercise — in clinical settings, a doctor won't trust a black-box prediction. They need to see <em>why</em> the model flagged something.</p>

<p>Our maternal risk prediction system achieved 98.21% accuracy with a 0.9903 AUC score, but what made it practically useful was the LIME-based explainability layer and the real-time web app we built for clinical stratification. The GA-driven feature selection didn't just improve accuracy — it made the model's reasoning transparent.</p>

<h2>The Hybrid Approach</h2>
<p>For diabetic retinopathy diagnosis, we built a hybrid EfficientNet-B3 + ResNet-50 architecture with Coordinate Attention. This taught me that combining architectures — taking the feature extraction strengths of one and the classification strengths of another — often outperforms either alone. We achieved 83.61% accuracy with a 0.9051 Kappa score on the APTOS 2019 dataset, which is competitive for a five-class grading problem.</p>

<h2>What Ties It All Together</h2>
<p>Across all these projects, the common thread isn't any particular technique — it's the motivation. Every percentage point of accuracy matters when the output influences a real diagnosis. Working in medical AI has taught me that engineering rigor and human empathy aren't separate concerns. They're the same concern, viewed from different angles.</p>
`,
  },
  {
    id: "why-power-systems-still-matter-in-the-age-of-ai",
    title: "Why Power Systems Still Matter in the Age of AI",
    date: "2026-01-15",
    tags: ["Power Systems", "Machine Learning", "Optimization"],
    excerpt:
      "What truly remains indispensable even after AI transforms everything? The answer is simpler than you think: power.",
    readingTime: "6 min read",
    content: `
<p>Everyone's talking about AI. And for good reason — it's reshaping industries, automating workflows, and enabling things that seemed impossible a decade ago. But here's a question I keep coming back to: <em>What truly remains indispensable even after AI advances all over the world?</em></p>

<p>The answer is simple: power. Electrical power. The grids that keep the lights on, the infrastructure that charges the data centers running these AI models, the energy systems that developing nations like Bangladesh desperately need to scale.</p>

<h2>Where My Interest Began</h2>
<p>As an EEE student at IUT, power systems were core to my curriculum. But it was during an Economic Load Dispatch project — where I used Python and MATLAB to calculate optimal generation dispatch for Bangladeshi power grid data — that something clicked. I started thinking about what happens when you apply machine learning to these classical optimization problems.</p>

<p>The AC Optimal Power Flow problem is a cornerstone of power engineering. It determines the most economical generation dispatch while satisfying network constraints — voltage limits, line flow limits, generator bounds. Traditionally, it's solved using interior-point methods or sequential quadratic programming. These work, but they're slow for real-time applications.</p>

<h2>What We Found</h2>
<p>In our comparative study, we benchmarked four approaches on standard IEEE test systems: classical interior-point methods, Random Forest regression, deep neural networks, and Particle Swarm Optimization.</p>

<p>The results were instructive. Classical methods remain the gold standard for safety-critical applications — you can't compromise on constraint satisfaction when grid stability is at stake. But the DNN approach achieved less than 0.5% cost deviation from the classical solution with inference times under 10 milliseconds. For scenarios where speed matters — real-time market clearing, contingency analysis — that trade-off is compelling.</p>

<p>Random Forest was surprisingly effective on smaller systems and offered interpretable feature importances. PSO was good for solution space exploration but slower to converge.</p>

<h2>The Bigger Picture</h2>
<p>I envision a future where AI-enhanced smart grid technologies can efficiently integrate renewable energy sources, optimize power distribution, and ensure grid stability — especially in regions that need it most. South Asia and the Middle East face critical energy challenges that classical approaches alone can't solve at scale.</p>

<p>The future likely lies in hybrid approaches: using ML for fast initial estimates refined by classical solvers. This combines neural network speed with optimization algorithm guarantees.</p>

<p>As someone trained in both electrical engineering and machine learning, I find this convergence deeply compelling. AI gets the headlines, but power systems keep the world running. The most impactful work happens where these fields meet.</p>
`,
  },
  {
    id: "from-brainstorming-articles-to-building-ai-systems",
    title: "From Writing Sci-Tech Articles to Building AI Systems",
    date: "2025-12-05",
    tags: ["Personal", "Career", "Technical Writing"],
    excerpt:
      "How my time as a technical writer at The Financial Express Bangladesh shaped the way I think about research communication and interdisciplinary thinking.",
    readingTime: "5 min read",
    content: `
<p>Before I ever trained a neural network, I was writing about technology for a national newspaper. During my time at The Financial Express Bangladesh, I wrote biweekly articles for the Sci-Tech section — researching topics, generating keywords, and pitching ideas aligned with editorial themes.</p>

<p>At the time, it felt like a side activity. In hindsight, it was one of the most formative experiences of my career.</p>

<h2>Learning to Explain Complex Ideas</h2>
<p>Writing for a general audience forces you to understand something well enough to strip away the jargon. You can't hide behind technical language. If you don't truly understand the concept, the reader will know — and in a newspaper, the reader has no patience for confusion.</p>

<p>This skill has carried directly into my research. When I write a paper abstract, when I present at a conference, when I explain my work to collaborators from different fields — I'm drawing on the same muscle I developed writing Sci-Tech articles at 20 years old.</p>

<h2>Interdisciplinary Thinking</h2>
<p>Journalism forced me to think broadly. One week I'd be writing about blockchain in supply chains, the next about medical devices. This breadth of exposure is exactly what led me to AI in the first place — reading about Neuralink while brainstorming article ideas.</p>

<p>Today, my research spans medical imaging, power systems, and cybersecurity. People sometimes ask how I work across such different domains. The answer is that I never saw them as separate. They're all problems where data meets engineering meets human impact. The journalism mindset — always looking for connections, always asking "why does this matter?" — is what makes interdisciplinary research feel natural rather than scattered.</p>

<h2>Content Writing as a Transferable Skill</h2>
<p>I also worked as a trainee at RankWizards LLC, doing SEO and content writing. That taught me something about discoverability — how to structure information so people can find it and understand it quickly. This directly influenced how I structure my research papers: clear abstracts, logical section flow, front-loaded key findings.</p>

<p>If you're an engineering student wondering whether non-technical experience matters — it does. More than you might expect. The ability to communicate clearly, think across disciplines, and tell a compelling story about your work is just as important as the technical execution.</p>

<p>Some of the most important skills in my research toolkit didn't come from a lab. They came from a newsroom.</p>
`,
  },
  {
    id: "building-ai-for-communities-that-need-it-most",
    title: "Building AI for Communities That Need It Most",
    date: "2025-11-10",
    tags: ["AI", "Healthcare", "Bangladesh"],
    excerpt:
      "Why my long-term goal isn't just publishing papers — it's bringing AI-driven solutions back to Bangladesh and underserved communities.",
    readingTime: "6 min read",
    content: `
<p>When I think about where I want to be in ten years, the picture is clear: leading a research lab in Bangladesh, creating AI-driven solutions for underserved communities. Not in the abstract, not as a bullet point on a grant application — but as the actual daily work.</p>

<p>This isn't idealism. It comes from seeing, firsthand, what gaps exist.</p>

<h2>The Reality on the Ground</h2>
<p>Bangladesh has a population of over 170 million people. The ratio of doctors to patients is staggeringly low, particularly outside major cities. When my father was diagnosed with a brain tumor, we had access to decent healthcare in Chattogram. Many families don't.</p>

<p>Medical imaging AI — the kind I've been working on — has the potential to change that equation. A modified MobileNetV2 running on a smartphone can screen for cataracts with 99.11% accuracy. That's not a research curiosity. In a country where ophthalmologists are concentrated in urban centers, that's a tool that could reach villages where no specialist exists.</p>

<p>VisionEdge, the cataract detection app I co-developed, was designed with exactly this in mind: pairing deep learning with software that works in real-world conditions, not just on benchmark datasets.</p>

<h2>Beyond Healthcare</h2>
<p>The same principle applies to power systems. Bangladesh faces critical energy challenges — unreliable grids, growing demand, and the need to integrate renewable sources. My research on AC optimal power flow using machine learning isn't just an academic exercise. Faster-than-real-time OPF solutions could help grid operators manage the complexity of modern power systems in developing nations where infrastructure is still being built.</p>

<p>Cybersecurity is another area where the impact could be enormous. As Bangladesh digitizes — banking, government services, telecommunications — the attack surface grows. Our work on intrusion detection in software-defined networks and malware classification addresses threats that are particularly acute in countries with rapidly expanding but under-protected digital infrastructure.</p>

<h2>The Mentorship Goal</h2>
<p>I want to be the kind of mentor who doesn't just pass on knowledge but ignites curiosity and passion in others. I've been profoundly shaped by my own advisors — they didn't just give me project-specific advice, they shaped the way I think. From a long-term perspective, I hope to pay forward that kind of positive influence by mentoring future researchers.</p>

<p>Pursuing advanced research isn't just about achieving milestones. It's about equipping myself with the tools, perspectives, and confidence to make this vision a reality. Every paper I publish, every conference I attend, every collaboration I pursue — it's all building toward the same goal.</p>

<p>AI research is global, but its impact should be local. That's the work I want to do.</p>
`,
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getRecentPosts(count: number = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
