// src/pages/InsightDetails.tsx
import { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, ChevronLeft, ChevronRight } from "lucide-react";
import { INSIGHTS } from "@/data/insights";

const InsightDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const idx = useMemo(() => {
    const n = Number(id);
    return INSIGHTS.findIndex((a) => a.id === n);
  }, [id]);

  const article = idx >= 0 ? INSIGHTS[idx] : null;
  const prev = idx > 0 ? INSIGHTS[idx - 1] : null;
  const next = idx >= 0 && idx < INSIGHTS.length - 1 ? INSIGHTS[idx + 1] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Articles
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">The article you’re looking for doesn’t exist.</p>
          <Button onClick={() => navigate("/articles")}>Go to Articles</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="inline-flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span>{article.readTime}</span>
              </div>
              <CardTitle className="text-3xl md:text-4xl">
                <span className="bg-gradient-primary bg-clip-text text-transparent">{article.title}</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              {/* Article HTML */}
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Divider */}
              <div className="my-10 h-px bg-border/60" />

              {/* Prev / Next */}
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="flex-1">
                  {prev ? (
                    <Link
                      to={`/articles/${prev.id}`}
                      className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                      <span className="truncate max-w-[22rem]">Previous: {prev.title}</span>
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/60">—</span>
                  )}
                </div>
                <div className="flex-1 text-right">
                  {next ? (
                    <Link
                      to={`/articles/${next.id}`}
                      className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                    >
                      <span className="truncate max-w-[22rem]">Next: {next.title}</span>
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ) : (
                    <span className="text-muted-foreground/60">—</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InsightDetails;
