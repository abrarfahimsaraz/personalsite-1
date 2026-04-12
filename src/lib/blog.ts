// ============================================================
// Blog data — structured posts for easy addition
// To add a new post: add an entry to the `blogPosts` array below.
// ============================================================

export interface BlogPost {
  id: string;
  title: string;
  date: string; // ISO date string
  tags: string[];
  excerpt: string;
  coverImage?: string;
  readingTime: string;
  content: string; // HTML string — supports rich formatting
}

export const blogPosts: BlogPost[] = [
  {
    id: "journey-into-ai-research",
    title: "My Journey into AI Research: From Circuits to Neural Networks",
    date: "2026-03-15",
    tags: ["AI", "Research", "Personal"],
    excerpt:
      "How an electrical engineering student found his way into deep learning, medical imaging, and power systems optimization — and what I learned along the way.",
    readingTime: "6 min read",
    content: `
<p>When I started my B.Sc. in Electrical & Electronic Engineering at IUT, I had little idea that my path would lead me deep into the world of artificial intelligence. Like many EEE students, my early coursework revolved around circuit analysis, signals and systems, and electromagnetic theory. But a single elective on machine learning changed everything.</p>

<h2>The Spark</h2>
<p>It was during a pattern recognition lab that I first experienced the thrill of watching a model learn. We were training a simple classifier on the MNIST dataset — nothing groundbreaking — but seeing the loss curve drop and the accuracy climb felt like witnessing something alive come into being. I was hooked.</p>

<p>I began spending evenings reading papers on arXiv, working through Andrew Ng's courses, and experimenting with TensorFlow. My background in signal processing and linear algebra, core EEE subjects, turned out to be surprisingly relevant to understanding how neural networks operate under the hood.</p>

<h2>Bridging Domains</h2>
<p>What excites me most is applying AI to real-world engineering problems. My research spans three distinct but interconnected areas:</p>

<ul>
<li><strong>Medical Imaging</strong> — Using modified CNN architectures (MobileNetV2, VGG19, EfficientNet) for tasks like colorectal cancer detection, bone fracture identification, and diabetic retinopathy diagnosis.</li>
<li><strong>Power Systems</strong> — Exploring how machine learning and metaheuristic approaches can solve AC optimal power flow problems more efficiently than classical methods.</li>
<li><strong>Cybersecurity</strong> — Applying XGBoost and hybrid feature selection techniques to intrusion detection in software-defined networks.</li>
</ul>

<h2>Lessons Learned</h2>
<p>Three years of research have taught me that the most impactful work happens at the intersection of disciplines. An EEE background gives you intuitions about signal-to-noise ratios, optimization landscapes, and system-level thinking that pure CS researchers sometimes lack. Conversely, modern ML toolkits let engineers tackle problems that were previously intractable.</p>

<p>If you are an engineering student considering research in AI, my advice is simple: start building. Pick a dataset, pick a problem, and iterate. The gap between coursework and publishable research is smaller than you think.</p>
`,
  },
  {
    id: "optimizing-deep-learning-medical-imaging",
    title: "Practical Tips for Optimizing Deep Learning Models in Medical Imaging",
    date: "2026-02-20",
    tags: ["Deep Learning", "Medical Imaging", "Tutorial"],
    excerpt:
      "Lessons from publishing multiple papers on medical image classification — covering preprocessing, architecture selection, and achieving high accuracy on clinical datasets.",
    readingTime: "8 min read",
    content: `
<p>Medical image classification is one of the most rewarding applications of deep learning. Over the past two years, I have worked on projects involving colorectal cancer detection, brain tumor classification, bone fracture identification, cataract detection, and diabetic retinopathy diagnosis. Here are practical takeaways that have consistently improved model performance across these diverse tasks.</p>

<h2>1. Preprocessing Is Half the Battle</h2>
<p>Clinical images are noisy, inconsistently lit, and vary wildly in resolution. Before any model sees a single pixel, I apply a standard pipeline:</p>
<ul>
<li><strong>CLAHE</strong> (Contrast Limited Adaptive Histogram Equalization) — Enhances local contrast without amplifying noise. This was critical for our bone fracture detection work where subtle fracture lines were often obscured.</li>
<li><strong>Otsu's Thresholding</strong> — For segmenting regions of interest, particularly in histopathological images.</li>
<li><strong>Canny Edge Detection</strong> — Adding edge maps as auxiliary channels gave our VGG19-based fracture detector a significant accuracy boost.</li>
<li><strong>Consistent resizing and normalization</strong> — Always resize to the input dimensions your architecture expects, and normalize using ImageNet statistics if using pretrained weights.</li>
</ul>

<h2>2. Transfer Learning Is Your Best Friend</h2>
<p>Training from scratch on medical datasets (which are often small) rarely works well. Every successful project I have worked on leveraged pretrained ImageNet weights as a starting point. The key decisions are:</p>
<ul>
<li>Which layers to freeze initially (typically all but the last 2–3 blocks)</li>
<li>When to unfreeze and fine-tune (after the new head has converged)</li>
<li>Learning rate scheduling — I use cosine annealing with warm restarts</li>
</ul>

<h2>3. Architecture Selection Matters</h2>
<p>After benchmarking InceptionV3, ResNet-50, VGG-16, MobileNetV2, and DenseNet121 across multiple datasets, my general recommendations are:</p>
<ul>
<li><strong>MobileNetV2</strong> — Best for edge deployment and mobile applications (we achieved 99.11% on cataract detection)</li>
<li><strong>EfficientNet-B3</strong> — Best accuracy-to-compute ratio for server-side inference</li>
<li><strong>VGG19</strong> — When interpretability matters, its simpler architecture makes Grad-CAM visualizations more intuitive</li>
</ul>

<h2>4. Explainability Is Non-Negotiable</h2>
<p>In clinical settings, a black-box prediction is not enough. We integrate LIME and Grad-CAM into every pipeline so clinicians can see which regions of an image drove the model's decision. This is not just good practice — many journals and conferences now expect it.</p>

<p>Medical AI is a field where engineering rigor meets real human impact. Every percentage point of accuracy matters when the output influences a diagnosis.</p>
`,
  },
  {
    id: "power-systems-meets-machine-learning",
    title: "When Power Systems Meet Machine Learning: Solving Optimal Power Flow",
    date: "2026-01-10",
    tags: ["Power Systems", "Machine Learning", "Optimization"],
    excerpt:
      "An overview of how classical optimization, random forests, deep neural networks, and particle swarm optimization compare when solving the AC optimal power flow problem.",
    readingTime: "7 min read",
    content: `
<p>The AC Optimal Power Flow (AC-OPF) problem is a cornerstone of power systems engineering. It determines the most economical generation dispatch while satisfying network constraints — voltage limits, line flow limits, and generator operating bounds. Traditionally solved using interior-point methods or sequential quadratic programming, the problem is nonconvex and computationally expensive for large networks.</p>

<h2>Why Machine Learning?</h2>
<p>As power grids become more complex with the integration of renewable energy sources, the need for faster-than-real-time OPF solutions has grown. Classical solvers work well but can be too slow for applications like real-time market clearing or contingency analysis where thousands of scenarios must be evaluated in seconds.</p>

<p>This is where machine learning enters the picture. The idea is straightforward: train a model on historical OPF solutions so it can predict near-optimal dispatch decisions in milliseconds rather than seconds.</p>

<h2>Our Comparative Study</h2>
<p>In our research, we benchmarked four approaches on standard IEEE test systems:</p>

<ol>
<li><strong>Classical Interior-Point Method</strong> — The gold standard. Reliable and accurate but computationally intensive. Serves as our ground truth.</li>
<li><strong>Random Forest Regressor</strong> — Surprisingly effective for smaller systems. Fast inference, interpretable feature importances, but struggles with the nonlinear constraints of larger networks.</li>
<li><strong>Deep Neural Network</strong> — A fully connected architecture trained on thousands of OPF solutions. Achieves near-optimal cost predictions with inference times under 10ms.</li>
<li><strong>Particle Swarm Optimization</strong> — A metaheuristic approach that does not require gradient information. Good for exploration of the solution space but slower to converge than the DNN approach.</li>
</ol>

<h2>Key Takeaways</h2>
<p>No single method dominates across all criteria. Classical methods remain the most reliable for safety-critical applications. ML-based approaches shine when speed is paramount and small optimality gaps are acceptable. The DNN approach offered the best trade-off between speed and accuracy in our experiments, achieving less than 0.5% cost deviation from the classical solution on the IEEE 30-bus system.</p>

<p>The future likely lies in hybrid approaches — using ML for fast initial estimates that are then refined by classical solvers. This combines the speed advantage of neural networks with the constraint satisfaction guarantees of optimization algorithms.</p>

<p>Power systems optimization is entering an exciting era. As someone trained in both electrical engineering and machine learning, I find this convergence deeply compelling.</p>
`,
  },
];

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getRecentPosts(count: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
