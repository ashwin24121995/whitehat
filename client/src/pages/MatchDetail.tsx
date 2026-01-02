import { useParams, useLocation, Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Calendar, MapPin, Users, TrendingUp } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function MatchDetail() {
  const { matchId } = useParams<{ matchId: string }>();
  const [, setLocation] = useLocation();

  const { data: match, isLoading } = trpc.matches.getById.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container py-8">
          <Skeleton className="h-10 w-32 mb-6" />
          <Card className="p-6">
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-24 w-full mb-4" />
            <Skeleton className="h-64 w-full" />
          </Card>
        </div>
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container py-8">
          <Card className="p-12 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Match Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The match you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => setLocation("/matches")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Matches
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const isLive = match.status === "live";
  const isCompleted = match.status === "completed";
  const isUpcoming = match.status === "not_started";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => setLocation("/matches")}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Matches
        </Button>

        {/* Match Header */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium uppercase">
                {match.matchType}
              </span>
              {isLive && (
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-full text-sm font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  LIVE
                </span>
              )}
              {isCompleted && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  ✓ Completed
                </span>
              )}
              {isUpcoming && (
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-full text-sm font-medium">
                  📅 Upcoming
                </span>
              )}
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">{match.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{match.venue}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(match.dateTimeGMT).toLocaleString()}</span>
            </div>
            {match.matchType && (
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>{match.matchType.toUpperCase()} Match</span>
              </div>
            )}
          </div>
        </Card>

        {/* Score Card */}
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Match Score
          </h2>

          <div className="space-y-6">
            {/* Team A */}
            {match.teamAId && (
              <div className="border-b pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {match.teamALogo && (
                      <img
                        src={match.teamALogo}
                        alt={match.teamA}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{match.teamA}</h3>
                      <p className="text-sm text-muted-foreground">{match.teamAId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {match.teamAScore ? (
                      <>
                        <p className="text-2xl font-bold">{match.teamAScore}</p>
                        {match.teamAOvers && (
                          <p className="text-sm text-muted-foreground">({match.teamAOvers} ov)</p>
                        )}
                      </>
                    ) : (
                      <p className="text-muted-foreground">Yet to bat</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Team B */}
            {match.teamBId && (
              <div className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {match.teamBLogo && (
                      <img
                        src={match.teamBLogo}
                        alt={match.teamB}
                        className="w-12 h-12 object-contain"
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{match.teamB}</h3>
                      <p className="text-sm text-muted-foreground">{match.teamBId}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {match.teamBScore ? (
                      <>
                        <p className="text-2xl font-bold">{match.teamBScore}</p>
                        {match.teamBOvers && (
                          <p className="text-sm text-muted-foreground">({match.teamBOvers} ov)</p>
                        )}
                      </>
                    ) : (
                      <p className="text-muted-foreground">Yet to bat</p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Match Status */}
          {match.matchStatus && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-center font-medium text-blue-900 dark:text-blue-100">
                {match.matchStatus}
              </p>
            </div>
          )}
        </Card>

        {/* Match Info */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Match Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Match ID</p>
              <p className="font-mono text-sm">{match.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Status</p>
              <p className="font-medium capitalize">{match.status.replace("_", " ")}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Venue</p>
              <p className="font-medium">{match.venue}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
              <p className="font-medium">
                {new Date(match.dateTimeGMT).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {isUpcoming && (
              <Link href={`/create-team/${match.id}`}>
                <Button className="w-full md:w-auto">
                  <Trophy className="w-4 h-4 mr-2" />
                  Create Fantasy Team
                </Button>
              </Link>
            )}
            {isLive && (
              <Link href={`/create-team/${match.id}`}>
                <Button className="w-full md:w-auto">
                  <Trophy className="w-4 h-4 mr-2" />
                  Create Fantasy Team
                </Button>
              </Link>
            )}
            <Button
              variant="outline"
              onClick={() => setLocation("/matches")}
              className="w-full md:w-auto"
            >
              View All Matches
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
