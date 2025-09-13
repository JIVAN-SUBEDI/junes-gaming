import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { INSIGHTS } from "@/data/insights";

// Optional: pick an icon per post (by title keywords or index)
function pickIcon(title: string, i: number) {
  const t = title.toLowerCase();
  if (/(secure|security|protect|safe)/.test(t)) return <Shield className="w-5 h-5" />;
  if (/(fast|speed|quick|optimi[sz]e|maximi[sz]e|rate|profit|growth)/.test(t)) return <TrendingUp className="w-5 h-5" />;
  if (/(cash|cash-out|withdraw|payout|boost|power)/.test(t)) return <Zap className="w-5 h-5" />;
  // fallback rotate
  return [<TrendingUp className="w-5 h-5" key="t" />, <Shield className="w-5 h-5" key="s" />, <Zap className="w-5 h-5" key="z" />][i % 3];
}

const Blogs = () => {
  // Sort newest → oldest using the date field from INSIGHTS and take top 3
  const latest = [...INSIGHTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section id="blogs" className="py-20 bg-gaming-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Gaming Insights
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest gaming tips, security guides, and industry news
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {latest.map((post, index) => (
            <Card
              key={post.id}
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gaming group hover:-translate-y-2"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {pickIcon(post.title, index)}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {/* render in the same string format you keep in INSIGHTS */}
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                  <Link to={`/articles/${post.id}`}>
                    <Button variant="gaming-secondary" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/articles">
            <Button variant="gaming" size="lg">View All Articles</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
