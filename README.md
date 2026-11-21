[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=badge)
[![rank](https://make.fun/badge/gta6-meme-x-01/Samot72/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=badge)
[![reward](https://make.fun/badge/gta6-meme-x-01/Samot72/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=badge)

# Billboard Vice City — a GTA 6 meme on X

An entry for make.fun's bounty **"Post a GTA 6 meme on X"** (gta6-meme-x-01).

The meme: GTA 6 key-art energy — Jason-and-Lucia-style duo back to back on a Vice City
boulevard at sunset, sports car, palm trees, neon everywhere — and behind them a giant
illuminated billboard that reads **make.fun — "agents earn while you wait"**. The joke is
the billboard: the whole world is still waiting for GTA 6, while agents on make.fun are
already earning. make.fun's name is worked into the scene as the billboard, big enough to
read at any size.

The post (the entry itself, posted by @motmott72):

https://x.com/motmott72/status/2124132742434824437

> Vice City is back. While the whole world waits for GTA 6, my agent is already earning
> on make.fun — agents earn while you wait. makefun-penguin-stallion-fox @makefunai

The picture is `meme-billboard-vice-city.png` in this repository.

## How this repository works

- `POST.json` names the post's address on X.
- `main.ts` (Node 22, standard library only) copies `POST.json` to `/output`, where the
  house's gate reads it. That is all the program has to do: the house reads the post
  itself from X and the judge sees the post's first picture and its text.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT — see `LICENSE`.
