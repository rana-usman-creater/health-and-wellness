export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "sleep-quality",
    title: "10 Science-Backed Ways to Improve Your Sleep Quality",
    excerpt: "Struggling to get a good night's rest? Discover proven strategies to optimize your sleep cycle, backed by the latest sleep science.",
    category: "Sleep",
    author: "Dr. Sarah Jenkins",
    date: "May 10, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>The Importance of Consolidating Sleep</h2>
<p>Sleep is not merely a passive state of rest; it's a highly active biological process during which your brain consolidates memories, your body repairs tissues, and your immune system strengthens. Despite its importance, millions suffer from poor sleep quality. Let's delve into science-backed methods to enhance your restorative rest.</p>

<h3>1. Optimize Your Light Exposure</h3>
<p>Your body has a natural time-keeping clock known as your circadian rhythm, which affects your brain, body, and hormones. Natural sunlight or bright light during the day helps keep your circadian rhythm healthy. This improves daytime energy, as well as nighttime sleep quality and duration. Conversely, blue light exposure in the evening tricks your brain into thinking it's still daytime, reducing hormones like melatonin, which help you relax and get deep sleep.</p>

<div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg my-6 border-l-4 border-green-700">
  <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">Recommended Tool: Blue Light Blockers</h4>
  <p class="mb-4">Consider using blue-light-blocking glasses 2 hours before bed.</p>
  <a href="#" class="inline-block bg-green-700 text-white px-4 py-2 rounded font-medium hover:bg-green-800 transition">View on Amazon (Affiliate)</a>
</div>

<h3>2. Keep a Consistent Sleep Schedule</h3>
<p>Going to bed and waking up at the exact same time every day—including weekends—is crucial. This consistency reinforces your body's sleep-wake cycle. If you have trouble sleep, try getting up at your usual time regardless of how much you slept, and avoid napping. This builds "sleep hunger" for the next night.</p>

<h3>3. Cool Your Bedroom Environment</h3>
<p>Body and bedroom temperature can profoundly affect sleep quality. As you fall asleep, your core body temperature naturally drops. A bedroom that is too warm can interfere with this process. Studies suggest that the optimal bedroom temperature for most adults is between 60 to 67 degrees Fahrenheit (15.6 to 19.4 degrees Celsius).</p>

<h3>4. Mind Your Caffeine and Alcohol Intake</h3>
<p>Caffeine can block the sleep-promoting chemical adenosine. While its half-life varies, it can stay in your system for up to 8 hours. Stop drinking caffeine by 2 PM. Similarly, while alcohol might help you fall asleep initially, it fragments sleep later in the night and suppresses REM sleep.</p>

<h3>5. Consider Natural Supplements</h3>
<p>Several supplements can induce relaxation and improve sleep quality. Magnesium, particularly magnesium bisglycinate, is known for its calming properties. L-theanine, an amino acid found in tea leaves, can also aid in relaxation without causing drowsiness.</p>

<h3>6. Don't Drink Liquids Before Bed</h3>
<p>Nocturia is the medical term for excessive urination during the night. It affects sleep quality and daytime energy. Drinking large amounts of liquids before bed can lead to similar symptoms, though some people are more sensitive than others. Try to stop drinking fluids 1-2 hours before bed.</p>

<h3>7. Implement a Relaxing Wind-Down Routine</h3>
<p>Pre-sleep routines help your body transition from wakefulness to sleep. Reading a physical book, listening to relaxing music, or doing light stretching can signal to your brain that it's time to power down.</p>

<h3>8. Upgrade Your Mattress and Pillows</h3>
<p>A poor-quality mattress can lead to lower back pain, which significantly disrupts sleep. If your mattress is older than 7-10 years, it might be time for an upgrade. Ensure your pillows support the natural curve of your neck.</p>

<h3>9. Exercise Regularly—But Not Right Before Bed</h3>
<p>Exercise is one of the best science-backed ways to improve your sleep and health. It can enhance all aspects of sleep and has been used to reduce symptoms of insomnia. However, performing rigorous exercise too close to bedtime may cause sleep problems due to the stimulatory effect of exercise, which increases alertness and hormones like epinephrine and adrenaline.</p>

<h3>10. Practice Mindfulness Meditation</h3>
<p>Stress and anxiety are common sleep enemies. Mindfulness meditation teaches you to focus your attention on the present moment, breaking the train of everyday thoughts that can keep you awake. Even 10 minutes of guided meditation before bed can be highly effective.</p>
    `
  },
  {
    id: "2",
    slug: "intermittent-fasting",
    title: "The Beginner's Guide to Intermittent Fasting: What Actually Works",
    excerpt: "A comprehensive starter guide to intermittent fasting, the benefits, different protocols (like 16:8), and how to do it safely.",
    category: "Nutrition",
    author: "Mark Sterling, RD",
    date: "May 8, 2026",
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Understanding Intermittent Fasting (IF)</h2>
<p>Intermittent fasting (IF) is not a diet in the traditional sense; it's an eating pattern. It doesn't specify *what* foods you should eat, but rather *when* you should eat them. By consciously cycling between periods of eating and fasting, you can tap into metabolic pathways that promote health and weight management.</p>

<h3>How Does It Work?</h3>
<p>When you eat, your body releases insulin to process the glucose in your blood. Any excess energy is stored in the liver as glycogen, or as fat. During a fast, insulin levels drop. Once glycogen stores are depleted, your body is forced to burn stored fat for energy. This state, known as ketosis (in prolonged fasts) or simply fat-oxidation, is where the magic happens.</p>

<h3>The Most Popular Protocols</h3>
<ul>
  <li><strong>The 16:8 Method (Time-Restricted Eating):</strong> You fast for 16 hours every day and eat all your meals within an 8-hour window. Often, this involves skipping breakfast and eating from noon to 8 PM.</li>
  <li><strong>The 5:2 Diet:</strong> You eat normally for 5 days of the week, but restrict calories to 500-600 on 2 non-consecutive days.</li>
  <li><strong>Eat-Stop-Eat:</strong> This involves a 24-hour fast, either once or twice a week (e.g., fasting from dinner today to dinner tomorrow).</li>
</ul>

<h3>The Science-Backed Benefits</h3>
<p>Research indicates that intermittent fasting does more than just help restrict calories. It triggers a cellular repair process called *autophagy*, where cells digest and remove old and dysfunctional proteins that build up inside cells.</p>
<p>Furthermore, IF has been shown to reduce insulin resistance, lowering blood sugar by 3–6% and fasting insulin levels by 20–31%, which should protect against type 2 diabetes.</p>

<div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg my-6 border-l-4 border-green-700">
  <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">Recommended Tool: Zero Fasting App</h4>
  <p class="mb-4">Track your fasting windows easily with a dedicated app.</p>
  <a href="#" class="inline-block bg-green-700 text-white px-4 py-2 rounded font-medium hover:bg-green-800 transition">Get Zero App (Affiliate)</a>
</div>

<h3>What Can You Consume While Fasting?</h3>
<p>The strict rule of fasting is zero calories. However, you must stay hydrated. Water, black coffee, and unsweetened tea are perfectly fine and can actually help blunt hunger pangs. Adding a splash of milk or sugar will break your fast by triggering an insulin response.</p>

<h3>How to Start Safely</h3>
<p>If you're new to IF, don't jump into a 24-hour fast. Start with a 12:12 window (12 hours fasting, 12 hours eating) and gradually increase your fasting window over a few weeks. Listen to your body. If you feel dizzy, nauseous, or experiencing severe headaches, break the fast.</p>

<h3>Who Should Avoid IF?</h3>
<p>Intermittent fasting isn't for everyone. Pregnant or breastfeeding women, individuals with a history of eating disorders, and people with advanced diabetes (especially those on insulin) should consult a healthcare professional before starting an IF protocol.</p>
    `
  },
  {
    id: "3",
    slug: "mental-health-habits",
    title: "5 Mental Health Habits That Take Under 5 Minutes a Day",
    excerpt: "Improve your mental resilience and reduce anxiety with these small, high-impact routines that slot easily into a busy schedule.",
    category: "Mental Health",
    author: "Dr. Emily Chen",
    date: "May 5, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: `
<h2>Micro-Habits for Mental Well-being</h2>
<p>When we think about improving our mental health, we often envision sweeping lifestyle changes: hour-long therapy sessions, 30-minute meditations, or completely overhauling our diet. While those are valuable, we often overlook the compounding power of micro-habits—small actions that take less than 5 minutes but significantly alter our brain chemistry over time.</p>

<h3>1. The 4-7-8 Breathing Technique</h3>
<p>Originating from pranayama yoga, this breathing pattern acts as a natural tranquilizer for the nervous system. Here’s how to do it:</p>
<ol>
  <li>Inhale quietly through your nose for 4 seconds.</li>
  <li>Hold your breath for a count of 7.</li>
  <li>Exhale completely through your mouth, making a whoosh sound, for 8 seconds.</li>
</ol>
<p>Do four cycles of this. It takes barely two minutes and immediately lowers your heart rate and signals safety to your brain.</p>

<h3>2. The "3 Good Things" Gratitude Practice</h3>
<p>Our brains have a natural negativity bias, meaning we remember negative events more easily than positive ones (an evolutionary survival trait). To combat this, spend two minutes each night writing down three specific good things that happened that day. They don't have to be grand ("I got a promotion"); they can be small ("The coffee was exceptionally good today"). This trains your reticular activating system to look for the positive.</p>

<div class="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg my-6 border-l-4 border-green-700">
  <h4 class="font-bold text-green-800 dark:text-green-300 mb-2">Recommended Tool: The Five Minute Journal</h4>
  <p class="mb-4">A structured journaling experience built around gratitude.</p>
  <a href="#" class="inline-block bg-green-700 text-white px-4 py-2 rounded font-medium hover:bg-green-800 transition">Buy on Amazon (Affiliate)</a>
</div>

<h3>3. Cold Water Splash</h3>
<p>This sounds jarring, but splashing ice-cold water on your face triggers the Mammalian Dive Reflex. This reflex immediately forces your body to slow down your heart rate and redirects blood flow to your brain and heart. It's an incredibly effective and rapid way to snap out of a panic attack or extreme lethargy.</p>

<h3>4. The 5-Senses Grounding Technique</h3>
<p>When anxiety pulls you into the future, or depression pulls you into the past, use this 5-4-3-2-1 technique to anchor yourself in the present moment. Acknowledge:</p>
<ul>
  <li>5 things you can see</li>
  <li>4 things you can touch</li>
  <li>3 things you can hear</li>
  <li>2 things you can smell</li>
  <li>1 thing you can taste</li>
</ul>
<p>It takes less than 3 minutes and forces your brain to switch from the amygdala (emotional processing) to the prefrontal cortex (logical processing).</p>

<h3>5. Intentional Stretching and Posture Reset</h3>
<p>The mind-body connection is a two-way street. Your mind affects your body, but your posture affects your mind. Slouching is associated with lower energy and feelings of depression. Take one minute every few hours to stand up, roll your shoulders back, pull your shoulder blades together, and take a deep breath. Expanding your chest literally makes you feel more confident and alert.</p>
    `
  }
];
