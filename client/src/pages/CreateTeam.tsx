import { useEffect, useState } from "react";
import { useLocation, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/hooks/useAuth";
import { Users, Search, CheckCircle2, AlertCircle, Trophy } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

interface PlayerSelection {
  pid: string;
  name: string;
  role: string;
  roleStr: string;
}

export default function CreateTeam() {
  const params = useParams();
  const matchId = params.matchId as string;
  const [, setLocation] = useLocation();
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [selectedPlayers, setSelectedPlayers] = useState<PlayerSelection[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("all");

  // Note: Removed auto-redirect - CreateTeam should not force redirect
  // The page will show loading state if not authenticated

  // Fetch match details
  const { data: matchData, isLoading: matchLoading } = trpc.matches.getById.useQuery(
    { matchId },
    { enabled: !!matchId && isAuthenticated }
  );

  // Fetch squad
  const { data: squadData, isLoading: squadLoading } = trpc.matches.getSquad.useQuery(
    { matchId },
    { enabled: !!matchId && isAuthenticated }
  );

  // Check if user already has a team
  const { data: existingTeam } = trpc.teams.getByMatch.useQuery(
    { matchId },
    { enabled: !!matchId && isAuthenticated }
  );

  // Create team mutation
  const createTeamMutation = trpc.teams.create.useMutation({
    onSuccess: () => {
      toast.success("Team created successfully!");
      setLocation("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create team");
    },
  });

  if (authLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (existingTeam?.team) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <Card className="glossy-card max-w-md">
            <CardContent className="pt-8 text-center">
              <AlertCircle className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
              <h2 className="text-2xl font-bold mb-4">Team Already Created</h2>
              <p className="text-muted-foreground mb-6">
                You already have a team for this match. You can only create one team per match.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setLocation("/dashboard")} className="flex-1">
                  Go to Dashboard
                </Button>
                <Button onClick={() => setLocation("/matches")} className="flex-1">
                  Browse Matches
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const players = squadData?.squad || [];
  
  // Filter players
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = roleFilter === "all" || player.role.toLowerCase().includes(roleFilter.toLowerCase());
    return matchesSearch && matchesRole;
  });

  // Count players by role
  const roleCounts = {
    wk: selectedPlayers.filter(p => p.role.toLowerCase().includes('wk')).length,
    bat: selectedPlayers.filter(p => p.role.toLowerCase().includes('bat') && !p.role.toLowerCase().includes('wk')).length,
    all: selectedPlayers.filter(p => p.role.toLowerCase().includes('all')).length,
    bowl: selectedPlayers.filter(p => p.role.toLowerCase().includes('bowl')).length,
  };

  const isPlayerSelected = (pid: string) => {
    return selectedPlayers.some(p => p.pid === pid);
  };

  const togglePlayer = (player: any) => {
    if (isPlayerSelected(player.pid)) {
      setSelectedPlayers(selectedPlayers.filter(p => p.pid !== player.pid));
    } else {
      if (selectedPlayers.length >= 11) {
        toast.error("You can only select 11 players");
        return;
      }
      setSelectedPlayers([...selectedPlayers, {
        pid: player.pid,
        name: player.name,
        role: player.role,
        roleStr: player.roleStr
      }]);
    }
  };

  const validateTeam = () => {
    if (selectedPlayers.length !== 11) {
      return { valid: false, message: "Please select exactly 11 players" };
    }

    if (roleCounts.wk < 1 || roleCounts.wk > 2) {
      return { valid: false, message: "Select 1-2 wicket-keepers" };
    }

    if (roleCounts.bat < 3 || roleCounts.bat > 5) {
      return { valid: false, message: "Select 3-5 batsmen" };
    }

    if (roleCounts.all < 1 || roleCounts.all > 3) {
      return { valid: false, message: "Select 1-3 all-rounders" };
    }

    if (roleCounts.bowl < 3 || roleCounts.bowl > 5) {
      return { valid: false, message: "Select 3-5 bowlers" };
    }

    return { valid: true, message: "" };
  };

  const handleCreateTeam = () => {
    const validation = validateTeam();
    if (!validation.valid) {
      toast.error(validation.message);
      return;
    }

    createTeamMutation.mutate({
      matchId,
      playerIds: selectedPlayers.map(p => p.pid),
      playerDetails: selectedPlayers
    });
  };

  const validation = validateTeam();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          {/* Match Info Header */}
          {matchLoading ? (
            <Skeleton className="h-24 w-full mb-8" />
          ) : matchData?.match && (
            <Card className="glossy-card mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{matchData.match.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span>{matchData.match.venue}</span>
                      <span>•</span>
                      <span>{matchData.match.date}</span>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm">
                    {matchData.match.matchType || "Cricket Match"}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Player Selection */}
            <div className="lg:col-span-2">
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Select Players ({selectedPlayers.length}/11)
                  </CardTitle>
                  <CardDescription>
                    Choose 11 players to build your fantasy team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Search and Filter */}
                  <div className="mb-6 space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search players..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    <Tabs value={roleFilter} onValueChange={setRoleFilter}>
                      <TabsList className="grid w-full grid-cols-5">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="wk">WK</TabsTrigger>
                        <TabsTrigger value="bat">BAT</TabsTrigger>
                        <TabsTrigger value="all-rounder">ALL</TabsTrigger>
                        <TabsTrigger value="bowl">BOWL</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  {/* Player List */}
                  {squadLoading ? (
                    <div className="space-y-3">
                      {[1, 2, 3, 4, 5].map(i => (
                        <Skeleton key={i} className="h-16 w-full" />
                      ))}
                    </div>
                  ) : filteredPlayers.length > 0 ? (
                    <div className="space-y-2 max-h-[600px] overflow-y-auto">
                      {filteredPlayers.map(player => {
                        const selected = isPlayerSelected(player.pid);
                        return (
                          <div
                            key={player.pid}
                            onClick={() => togglePlayer(player)}
                            className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                              selected
                                ? 'bg-primary/10 border-primary'
                                : 'hover:bg-muted/50 border-border'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {selected && <CheckCircle2 className="h-5 w-5 text-primary" />}
                              <div>
                                <p className="font-semibold">{player.name}</p>
                                <p className="text-sm text-muted-foreground">
                                  {player.roleStr || player.role}
                                </p>
                              </div>
                            </div>
                            <Badge variant={selected ? "default" : "outline"}>
                              {player.role.toUpperCase()}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-muted-foreground">
                      <Users className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No players found</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Team Summary Sidebar */}
            <div className="space-y-6">
              {/* Team Composition */}
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle className="text-lg">Team Composition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Wicket-keepers</span>
                    <Badge variant={roleCounts.wk >= 1 && roleCounts.wk <= 2 ? "default" : "destructive"}>
                      {roleCounts.wk}/1-2
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Batsmen</span>
                    <Badge variant={roleCounts.bat >= 3 && roleCounts.bat <= 5 ? "default" : "destructive"}>
                      {roleCounts.bat}/3-5
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">All-rounders</span>
                    <Badge variant={roleCounts.all >= 1 && roleCounts.all <= 3 ? "default" : "destructive"}>
                      {roleCounts.all}/1-3
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Bowlers</span>
                    <Badge variant={roleCounts.bowl >= 3 && roleCounts.bowl <= 5 ? "default" : "destructive"}>
                      {roleCounts.bowl}/3-5
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Players */}
              <Card className="glossy-card">
                <CardHeader>
                  <CardTitle className="text-lg">Selected Players</CardTitle>
                  <CardDescription>{selectedPlayers.length}/11 players</CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedPlayers.length > 0 ? (
                    <div className="space-y-2 max-h-[300px] overflow-y-auto">
                      {selectedPlayers.map(player => (
                        <div key={player.pid} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                          <span className="text-sm font-medium truncate">{player.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {player.role.toUpperCase()}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-6">
                      No players selected yet
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Validation & Submit */}
              <Card className="glossy-card">
                <CardContent className="pt-6 space-y-4">
                  {!validation.valid && selectedPlayers.length > 0 && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{validation.message}</AlertDescription>
                    </Alert>
                  )}

                  <Button
                    className="w-full gradient-cricket"
                    size="lg"
                    onClick={handleCreateTeam}
                    disabled={!validation.valid || createTeamMutation.isPending}
                  >
                    {createTeamMutation.isPending ? (
                      "Creating Team..."
                    ) : (
                      <>
                        <Trophy className="mr-2 h-4 w-4" />
                        Create Team
                      </>
                    )}
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setLocation("/matches")}
                  >
                    Cancel
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
