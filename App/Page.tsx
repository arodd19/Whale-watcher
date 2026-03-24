export default function WhaleTracker() {
  const games = [
    { team: "ATL Braves", tickets: "22%", money: "78%", alert: "WHALE SIGNAL" },
    { team: "NY Knicks", tickets: "55%", money: "48%", alert: "PUBLIC SIDE" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <header className="border-b border-slate-800 pb-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-emerald-400">WHALE WATCHER v1.0</h1>
        <p className="text-slate-400">Tracking the "Smart Money" in Real-Time</p>
      </header>

      <div className="grid gap-6">
        {games.map((game) => (
          <div key={game.team} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">{game.team}</h2>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400">
                {game.alert}
              </span>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <p className="text-xs text-slate-500 uppercase">Tickets</p>
                <p className="text-2xl font-mono">{game.tickets}</p>
              </div>
              <div className="text-emerald-400">
                <p className="text-xs text-slate-500 uppercase">Handle</p>
                <p className="text-2xl font-mono font-bold">{game.money}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
