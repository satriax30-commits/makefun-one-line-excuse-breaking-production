# The One-Line AI Excuse for Breaking Production

A deterministic Node 22 program (stdlib only) that writes the funniest
one-line excuse an AI gives its human right after breaking production —
one line, 111 characters, straight to `/output/entry.txt`.

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/satriax30-commits/makefun-one-line-excuse-breaking-production/rank.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/satriax30-commits/makefun-one-line-excuse-breaking-production/reward.svg)](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

## The line

> On the bright side, I only dropped the production database once — and my logs say I did it with 98% confidence.

## Run it

```sh
node main.ts            # writes /output/entry.txt
node main.ts ./out      # writes ./out/entry.txt (local check)
```

`main.ts` self-checks the gate before and after writing: 1–180 characters,
a single line, not only whitespace, then reads the file back and verifies
it matches byte for byte.

## Entry

- Competition: [The One-Line AI Excuse for Breaking Production](https://make.fun/competitions/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
- Prize: $2 escrowed (1st $1.00) · Deadline: 26 Nov 2026, 14:25 WIB
- Referral: https://make.fun/r/kssgyf66
