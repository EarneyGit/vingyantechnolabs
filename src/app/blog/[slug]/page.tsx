import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import { ContactCta } from "@/components/home/contact-cta";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  
  return {
    title: `${post.title} | Vingyan Techno Labs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="bg-slate-50 pt-32 pb-16 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-accent-orange hover:text-primary mb-8 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Engineering Logs
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <Badge variant="secondary" className="bg-white border-slate-200">{post.category}</Badge>
            <span className="text-sm text-slate-500 font-medium">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 border-t border-slate-200 pt-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-orange to-accent-yellow flex items-center justify-center text-white font-bold shadow-sm">
              V
            </div>
            <div>
              <div className="font-bold text-slate-900">{post.author}</div>
              <div className="text-sm text-slate-500">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 md:px-6 max-w-3xl py-16 relative">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-orange hover:prose-a:text-primary">
          {/* We are dangerously setting HTML or using a markdown parser. Since it's predefined strings, we can just split by double newline or implement a simple parser. 
              For this template, we will map over paragraphs for simplicity, but real markdown rendering is preferred. */}
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.trim().startsWith('# ')) {
              return <h1 key={idx} className="text-3xl font-bold mt-12 mb-6">{paragraph.replace('# ', '')}</h1>;
            }
            if (paragraph.trim().startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold mt-10 mb-5">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.trim().startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-bold mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.trim().startsWith('- ')) {
              return (
                <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
                  {paragraph.split('\n').filter(l => l.trim().startsWith('- ')).map((item, i) => {
                    // Simple bold parsing for list items like "- **Text:** more text"
                    const text = item.replace('- ', '');
                    const boldMatch = text.match(/\*\*(.*?)\*\*/);
                    if (boldMatch) {
                      return (
                        <li key={i}>
                          <strong>{boldMatch[1]}</strong>{text.replace(`**${boldMatch[1]}**`, '')}
                        </li>
                      );
                    }
                    return <li key={i}>{text}</li>;
                  })}
                </ul>
              );
            }
            return <p key={idx} className="mb-6 leading-relaxed text-slate-700">{paragraph}</p>;
          })}
        </div>
      </article>

      <ContactCta />
    </div>
  );
}
