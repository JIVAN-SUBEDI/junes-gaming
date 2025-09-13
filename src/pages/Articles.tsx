import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import { INSIGHTS } from "@/data/insights";

const Articles = () => {
  // newest → oldest (expects INSIGHTS[].date to be ISO or parseable)
  const articles = [...INSIGHTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gaming Articles
            </span>
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            Stay updated with the latest tips, guides, and insights from the world of online gaming.
          </p>

          <div className="grid gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.date}
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{article.title}</CardTitle>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardHeader>

                <CardContent>
                  {/* Read More button to details page */}
                  <Link to={`/articles/${article.id}`}>
                    <Button variant="gaming-secondary" size="sm">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
