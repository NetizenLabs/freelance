import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { useSeo } from "@/lib/seo";
import { POSTS, getAllCategories } from "@/lib/blog";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  useSeo({
    title: "Freelance Tax Insights | Blog",
    description: "Guides, tips, and insights on managing freelance taxes, deductions, and platform fees."
  });

  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory 
    ? POSTS.filter(p => p.category === activeCategory)
    : POSTS;

  return (
    <Layout 
      title="Freelance Tax Insights" 
      description="Guides, tips, and strategies for managing your self-employment taxes and keeping more of what you earn."
    >
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-10 not-prose">
        <Badge 
          variant={activeCategory === null ? "default" : "secondary"}
          className="cursor-pointer hover:bg-primary/80 transition-colors text-sm py-1 px-3"
          onClick={() => setActiveCategory(null)}
        >
          All
        </Badge>
        {categories.map(cat => (
          <Badge 
            key={cat}
            variant={activeCategory === cat ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary/80 transition-colors text-sm py-1 px-3"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 not-prose mb-16">
        {filteredPosts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-300 border-border/60 bg-card cursor-pointer group overflow-hidden">
              <CardHeader className="pb-4">
                <div className="mb-2">
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{post.category}</Badge>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
              </CardContent>
              <CardFooter className="pt-0 flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 px-6 py-4 mt-auto">
                <div className="flex items-center gap-3">
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{post.readTime} min read</span>
                </div>
                <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <Card className="bg-primary/5 border-primary/20 not-prose text-center p-8 sm:p-12 mt-16">
        <CardContent className="space-y-4 p-0">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold">Skip the reading — calculate your take-home now.</h3>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            Find out exactly how much you'll owe in self-employment and income taxes on your next project.
          </p>
          <Link href="/">
            <Button size="lg" className="px-8 shadow-sm">
              Open Calculator
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Layout>
  );
}
