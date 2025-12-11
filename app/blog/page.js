
import Link from "next/link";
import { format } from "date-fns";

export const metadata = {
  title: "CoachCraft Blog | Tips & Insights for Coaches",
  description:
    "Explore CoachCraft's expert insights on coaching, website design for coaches, and strategies to attract clients online.",
  openGraph: {
    title: "CoachCraft Blog | Coaching Tips & Insights",
    description:
      "Learn how to build high-conversion websites for coaches, attract clients, and grow your coaching business online.",
    url: "https://coachcraft.space/blog",
    siteName: "CoachCraft",
    type: "website",
    images: [
      {
        url: "https://coachcraft.space/bg-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoachCraft Blog Preview",
      },
    ],
  },
};

// Static blog posts data
export const posts = [
  {
    title: "5 Ways to Make Your Coaching Sessions More Effective",
    slug: "effective-coaching-sessions",
    excerpt:
      "Maximize the impact of your coaching sessions with practical strategies that every coach can apply immediately.",
    content: `
      <p>Every coaching session is an opportunity to create transformation. To ensure your sessions are productive and meaningful, follow these strategies:</p>
      
      <h3>1. Set Clear Session Goals</h3>
      <p>Start each session by agreeing with your client on what they want to achieve. Use a simple framework like SMART goals to keep progress measurable and trackable.</p>

      <h3>2. Active Listening</h3>
      <p>Truly listen to your client without planning your next response. Reflect their words back, ask clarifying questions, and validate their emotions.</p>

      <h3>3. Ask Powerful Questions</h3>
      <p>Questions drive insight. Instead of telling clients what to do, ask questions that guide them to discover solutions themselves.</p>

      <h3>4. Summarize and Confirm</h3>
      <p>At the end of each session, recap key takeaways and confirm the client’s understanding. This ensures alignment and reinforces learning.</p>

      <h3>5. Follow-Up Between Sessions</h3>
      <p>Send quick check-ins or homework tasks to maintain accountability and momentum. This shows you care about their progress.</p>

      <h3>Bonus Tip: Personalize Your Approach</h3>
      <p>No two clients are the same. Adapt your methods to their learning style, personality, and goals to maximize impact.</p>
    `,
    date: "2025-12-01",
  },
  {
    title: "How to Attract Your Ideal Coaching Clients",
    slug: "attract-ideal-clients",
    excerpt:
      "Learn how to identify, attract, and convert clients who are the perfect fit for your coaching services.",
    content: `
      <p>Attracting the right clients is essential for building a sustainable coaching business. Here’s how to do it effectively:</p>

      <h3>1. Define Your Ideal Client</h3>
      <p>Be specific about your client’s goals, challenges, and values. The clearer your profile, the easier it is to reach them.</p>

      <h3>2. Share Valuable Content</h3>
      <p>Publish blog posts, videos, or tips that solve your client’s problems. Content demonstrates your expertise and builds trust.</p>

      <h3>3. Leverage Social Media Strategically</h3>
      <p>Engage in conversations, answer questions, and provide free advice in your niche. Build authority without overselling.</p>

      <h3>4. Offer Complimentary Sessions</h3>
      <p>Free mini-coaching sessions allow potential clients to experience your style, making them more likely to sign up for full programs.</p>

      <h3>5. Showcase Client Success Stories</h3>
      <p>Share testimonials and case studies to demonstrate real-world results. This builds confidence and credibility.</p>

      <h3>6. Create a Clear Call-to-Action</h3>
      <p>Every piece of content should guide the client toward the next step, whether booking a session, downloading a guide, or subscribing to your newsletter.</p>

      <h3>Pro Tip: Networking Works</h3>
      <p>Partner with complementary professionals (therapists, fitness coaches, or business mentors) to gain referrals.</p>
    `,
    date: "2025-12-03",
  },
  {
    title: "Personal Development Tips Every Coach Should Practice",
    slug: "personal-development-for-coaches",
    excerpt:
      "Grow yourself to grow your clients. Practical habits for coaches to enhance effectiveness and wellbeing.",
    content: `
      <p>Coaching is about transformation—but you can’t help clients grow without growing yourself. Here are actionable personal development tips:</p>

      <h3>1. Daily Reflection</h3>
      <p>Spend 10–15 minutes reflecting on your actions, thoughts, and progress. Use a journal to track patterns and insights.</p>

      <h3>2. Continuous Learning</h3>
      <p>Read books, attend workshops, or enroll in advanced coaching courses. Keep up with trends and new methodologies.</p>

      <h3>3. Mindfulness & Self-Care</h3>
      <p>Meditation, yoga, or even short breathing exercises can reduce stress and improve focus during sessions.</p>

      <h3>4. Seek Mentorship</h3>
      <p>Engage with a more experienced coach who can provide guidance, perspective, and accountability.</p>

      <h3>5. Set Personal Goals</h3>
      <p>Apply coaching principles to your own life. Pursue professional and personal goals to maintain credibility and motivation.</p>

      <h3>6. Reflect on Client Feedback</h3>
      <p>Regularly ask for feedback from clients and peers. Use it to refine your approach and grow as a coach.</p>
    `,
    date: "2025-12-05",
  },
  {
    title: "Time Management Strategies for Coaches",
    slug: "time-management-for-coaches",
    excerpt:
      "Boost productivity and avoid burnout with these practical time management tips designed specifically for coaches.",
    content: `
      <p>Coaches juggle client sessions, marketing, admin work, and personal life. Effective time management is key:</p>

      <h3>1. Prioritize Client Sessions</h3>
      <p>Your highest-value work is client interaction. Schedule sessions when you are most focused and energetic.</p>

      <h3>2. Batch Similar Tasks</h3>
      <p>Group admin tasks, content creation, and follow-ups into blocks to increase efficiency.</p>

      <h3>3. Automate Where Possible</h3>
      <p>Use scheduling software, automated emails, and invoicing tools to save hours every week.</p>

      <h3>4. Plan Weekly Goals</h3>
      <p>Set aside time for coaching, business development, and self-care. Stick to your plan to avoid distractions.</p>

      <h3>5. Learn to Say No</h3>
      <p>Protect your time by declining low-value requests or tasks that don’t align with your priorities.</p>

      <h3>Bonus: Track Your Time</h3>
      <p>Use simple time-tracking tools to see where your hours go and optimize for maximum impact.</p>
    `,
    date: "2025-12-07",
  },
  {
    title: "Building Trust with Your Coaching Clients",
    slug: "building-trust-with-clients",
    excerpt:
      "Trust is the foundation of coaching success. Learn practical strategies to strengthen your client relationships.",
    content: `
      <p>Without trust, even the best coaching techniques fall flat. Here’s how to foster deep client trust:</p>

      <h3>1. Be Consistent and Reliable</h3>
      <p>Show up on time, follow through on promises, and maintain a steady approach.</p>

      <h3>2. Demonstrate Empathy</h3>
      <p>Listen without judgment, validate feelings, and show understanding in every session.</p>

      <h3>3. Protect Confidentiality</h3>
      <p>Ensure clients feel safe sharing personal and professional struggles with you.</p>

      <h3>4. Celebrate Wins</h3>
      <p>Recognize milestones and progress to reinforce positive behavior and motivation.</p>

      <h3>5. Give Constructive Feedback</h3>
      <p>Be honest, respectful, and solution-focused when offering feedback.</p>

      <h3>6. Maintain Professional Boundaries</h3>
      <p>Respect personal limits to create a safe and structured coaching environment.</p>
    `,
    date: "2025-12-09",
  },
  {
    title: "Effective Coaching Exercises to Engage Clients",
    slug: "coaching-exercises-engagement",
    excerpt:
      "Interactive exercises can dramatically improve engagement and outcomes. Here are practical examples you can use in sessions.",
    content: `
      <p>Engagement is critical for coaching success. Exercises can make sessions memorable and actionable:</p>

      <h3>1. Goal Mapping</h3>
      <p>Help clients visually map out short-term and long-term goals. Use diagrams, charts, or mind maps.</p>

      <h3>2. Role-Playing Scenarios</h3>
      <p>Simulate real-life challenges to practice decision-making, communication, and problem-solving.</p>

      <h3>3. Reflection Journals</h3>
      <p>Encourage clients to write down insights, progress, and lessons learned after each session.</p>

      <h3>4. Accountability Checklists</h3>
      <p>Create weekly tasks to help clients track progress and maintain momentum.</p>

      <h3>5. Visualization Techniques</h3>
      <p>Guide clients through imagining successful outcomes to increase motivation and clarity.</p>

      <h3>6. Peer Coaching Exercises</h3>
      <p>If appropriate, pair clients to practice skills and provide feedback, enhancing engagement and learning.</p>
    `,
    date: "2025-12-11",
  },
];


export default function BlogPage() {
  return (
    <section className="bg-[#F4ECDE] min-h-screen px-4 sm:px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--cc-primary)] mb-4">
          CoachCraft Blog
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl">
          Expert insights, tips, and strategies to help coaches build websites that convert and grow their business online.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="bg-white rounded-md p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-[var(--cc-primary)] mb-3">
              {post.title}
            </h2>
            <p className="text-gray-700 mb-3">{post.excerpt}</p>
            <p className="text-gray-400 text-sm">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
