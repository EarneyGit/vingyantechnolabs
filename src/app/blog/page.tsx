import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Vingyan Techno Labs",
  description: "Insights on IoT, Industry 4.0, Computer Vision, and automation.",
};

export default function BlogListing() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Premium Light Hero */}
      <section className="bg-slate-50 text-slate-900 pt-32 pb-24 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-accent-orange/30 bg-white tech-mono text-xs text-primary font-bold shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
            ENGINEERING_LOGS
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight">
            Insights & <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange via-accent-yellow to-primary">
              Engineering
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            Thoughts, tutorials, and case studies on building smarter operations with AI and IoT.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        {/* Category filters placeholder (just UI for now) */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Badge variant="default" className="bg-gradient-to-r from-accent-orange to-accent-yellow hover:from-primary hover:to-accent-orange text-white px-4 py-1.5 rounded-full text-sm shadow-sm border-0">All</Badge>
          {categories.map((cat) => (
            <Badge key={cat} variant="outline" className="px-4 py-1.5 rounded-full text-sm bg-white hover:bg-slate-100 cursor-pointer">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col border border-slate-200 hover:border-accent-orange/50 hover:shadow-lg transition-all bg-white overflow-hidden group">
              <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 via-slate-100 to-transparent"></div>
                <span className="text-slate-400 font-medium">Image Placeholder</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary" className="bg-slate-100 text-slate-700">{post.category}</Badge>
                  <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-accent-orange transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base text-slate-600 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter className="text-sm text-slate-500 font-medium border-t border-slate-50 pt-4 mt-auto">
                {post.readTime}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
