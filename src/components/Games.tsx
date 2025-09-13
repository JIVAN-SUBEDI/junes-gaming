import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TabId = "subdistributor" | "store";

type Game = {
  name: string;
  info: string;
  rate: string;
  playerLink: string;
  adminLink: string;
};

const TABS: { id: TabId; label: string }[] = [
  { id: "subdistributor", label: "Sub Distributor" },
  { id: "store", label: "Store" },
];

// defensive normalizer to handle stray spaces and accidental double-URLs
function normalizeUrl(url: string): string {
  const trimmed = url.trim().replace(/\s+/g, ""); // remove stray spaces
  // handle concatenated http(s)http(s) cases by keeping the last full URL
  const parts = trimmed.split(/(?=https?:\/\/)/i).filter(Boolean);
  const candidate = parts[parts.length - 1] || trimmed;
  try {
    // will throw if invalid
    // biome-ignore lint/style/noNew: URL validation
    new URL(candidate);
    return candidate;
  } catch {
    return "#";
  }
}

const Games = () => {
  const [activeTab, setActiveTab] = useState<TabId>("subdistributor");

  const gameData: Record<TabId, Game[]> = useMemo(
    () => ({
      subdistributor: [
        { name: "Juwa", info: "5k", rate: "$100", playerLink: "https://dl.juwa777.com/", adminLink: "https://ht.juwa777.com/login/" },
        { name: "Fire Kirin", info: "5k", rate: "$100", playerLink: "https://firekirin.com/", adminLink: "https://agent.gamevault999.com/login" },
        { name: "Orion Stars", info: "5k", rate: "$150", playerLink: "http://orionstars.vip:8580/index.html", adminLink: "https://orionstars.vip:8781/" },
        { name: "Milky Way", info: "5k", rate: "$150", playerLink: "https://milkywayapp.xyz/", adminLink: "https://milkywayapp.xyz:8781/" },
        { name: "Cash Machine", info: "5k", rate: "$75", playerLink: "https://www.cashmachine777.com/", adminLink: "https://agentserver.cashmachine777.com/" },
        { name: "Mafia", info: "5k", rate: "$75", playerLink: "https://www.mafia77777.com/", adminLink: "https://agentserver.mafia77777.com/admin/login" },
        { name: "Gameroom", info: "5k", rate: "$75", playerLink: "https://www.gameroom777.com/", adminLink: "https://agentserver1.gameroom777.com/admin/login" },
        { name: "Yolo", info: "5k", rate: "$120", playerLink: "https://yolo777.game/", adminLink: "https://agent.yolo777.game/admin/auth/login" },
        { name: "Mr. All in one", info: "5k", rate: "$75", playerLink: "https://www.mrallinone777.com/", adminLink: "https://agentserver.mrallinone777.com/admin/login" },
        { name: "Vegas Sweeps", info: "5k", rate: "$120", playerLink: "https://m.lasvegassweeps.com/", adminLink: "https://agent.lasvegassweeps.com/" },
        { name: "Cash Frenzy", info: "5k", rate: "$75", playerLink: "https://www.cashfrenzy777.com/", adminLink: "https://agentserver.cashfrenzy777.com/admin" },
        { name: "Vb link", info: "5k", rate: "$120", playerLink: "https://www.vblink777.club/", adminLink: "https://gm.vblink777.club/" },
        { name: "Ultrapanda", info: "5k", rate: "$120", playerLink: "https://www.ultrapanda.mobi/", adminLink: "https://ht.ultrapanda.mobi/" },
        { name: "Panda Master", info: "5k", rate: "$130", playerLink: "https://pandamaster.vip:8888/index.html", adminLink: "https://pandamaster.vip/default.aspx" },
        { name: "Vegas X", info: "5k", rate: "$150", playerLink: "https://www.vegas-x.org/", adminLink: "https://admin.vegas-x.org/login" },
      ],
      store: [
        { name: "Juwa", info: "1k", rate: "$110", playerLink: "https://dl.juwa777.com/", adminLink: "https://ht.juwa777.com/login/" },
        { name: "Fire Kirin", info: "1k", rate: "$110", playerLink: "https://firekirin.com/", adminLink: "https://agent.gamevault999.com/login" },
        { name: "Orion Stars", info: "1k", rate: "$160", playerLink: "http://orionstars.vip:8580/index.html", adminLink: "https://orionstars.vip:8781/" },
        { name: "Milky Way", info: "1k", rate: "$160", playerLink: "https://milkywayapp.xyz/", adminLink: "https://milkywayapp.xyz:8781/" },
        { name: "Cash Machine", info: "1k", rate: "$85", playerLink: "https://www.cashmachine777.com/", adminLink: "https://agentserver.cashmachine777.com/" },
        { name: "Mafia", info: "1k", rate: "$85", playerLink: "https://www.mafia77777.com/", adminLink: "https://agentserver.mafia77777.com/admin/login" },
        { name: "Gameroom", info: "1k", rate: "$85", playerLink: "https://www.gameroom777.com/", adminLink: "https://agentserver1.gameroom777.com/admin/login" },
        { name: "Yolo", info: "1k", rate: "$130", playerLink: "https://yolo777.game/", adminLink: "https://agent.yolo777.game/admin/auth/login" },
        { name: "Mr. All in one", info: "1k", rate: "$85", playerLink: "https://www.mrallinone777.com/", adminLink: "https://agentserver.mrallinone777.com/admin/login" },
        { name: "Vegas Sweeps", info: "1k", rate: "$130", playerLink: "https://m.lasvegassweeps.com/", adminLink: "https://agent.lasvegassweeps.com/" },
        { name: "Cash Frenzy", info: "1k", rate: "$85", playerLink: "https://www.cashfrenzy777.com/", adminLink: "https://agentserver.cashfrenzy777.com/admin" },
        { name: "Vb link", info: "1k", rate: "$130", playerLink: "https://www.vblink777.club/", adminLink: "https://gm.vblink777.club/" },
        { name: "Ultrapanda", info: "1k", rate: "$130", playerLink: "https://www.ultrapanda.mobi/", adminLink: "https://ht.ultrapanda.mobi/" },
        { name: "Panda Master", info: "1k", rate: "$140", playerLink: "https://pandamaster.vip:8888/index.html", adminLink: "https://pandamaster.vip/default.aspx" },
        { name: "Vegas X", info: "1k", rate: "$160", playerLink: "https://www.vegas-x.org/", adminLink: "https://admin.vegas-x.org/login" },
      ],
    }),
    []
  );

  const headerInfoLabel = activeTab === "store" ? "Store Info" : "Sub-Distributor Info";

  return (
    <section id="games" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Games Available
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our wide selection of premium gaming options
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gaming-surface rounded-lg p-1 border border-border/50">
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "gaming" : "ghost"}
                className={`mx-1 ${activeTab === tab.id ? "" : "text-muted-foreground hover:text-foreground"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Games Table */}
        <Card className="bg-gradient-card border-border/50 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {TABS.find((t) => t.id === activeTab)?.label} Games
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gaming-surface-alt">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Game Name</th>
                    <th className="px-6 py-4 text-center font-semibold">{headerInfoLabel}</th>
                    <th className="px-6 py-4 text-center font-semibold">Rate</th>
                    <th className="px-6 py-4 text-center font-semibold">Links</th>
                  </tr>
                </thead>
                <tbody>
                  {gameData[activeTab].map((game, index) => {
                    const player = normalizeUrl(game.playerLink);
                    const admin = normalizeUrl(game.adminLink);
                    const isPlayerValid = player !== "#";
                    const isAdminValid = admin !== "#";

                    return (
                      <tr
                        key={`${game.name}-${index}`}
                        className="border-b border-border/30 hover:bg-gaming-surface/50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium">{game.name}</td>
                        <td className="px-6 py-4 text-center text-primary font-semibold">{game.info}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="bg-gaming-success/20 text-gaming-success px-3 py-1 rounded-full text-sm font-medium">
                            {game.rate}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2 justify-center">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-xs"
                              disabled={!isPlayerValid}
                              onClick={() => window.open(player, "_blank", "noopener,noreferrer")}
                            >
                              Player
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="text-xs"
                              disabled={!isAdminValid}
                              onClick={() => window.open(admin, "_blank", "noopener,noreferrer")}
                            >
                              Admin
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Games;
