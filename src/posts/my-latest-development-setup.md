---
title: My latest development setup
description: "Up until recently, I've been using my work laptop for a mix of both work and personal projects. Recently, however, as part of my company's restructuring and policy reviews, it beca…"
date: 2025-09-15
updated: 2026-08-14
tags: []
published: true
---

## Introduction

Up until recently, I've been using my work laptop for a mix of both work and personal projects. Recently, however, as part of my company's restructuring and policy reviews, it became ridiculously hard to disconnect from the mandatory company VPN, which blocks a lot of essential and useful tools in development, including many cloud services and Gen AI platforms.

So... I'm coming back to my personal laptop, which is a bit smaller and older, but still in great condition. My setup here has become a bit outdated, so as I bring my latest setup to my personal machine, I wanted to document what I did.

## Terminal

First thing I looked at was my terminal. My personal laptop still had iTerm2, while I've been using Ghostty for a while. The switch was natural and easy. Just had to install Ghostty and delete iTerm.

Then came the more interesting part: switching out zsh for fish shell. I made the switch a couple of years ago and never looked back, but my personal laptop never went through that cathartic experience with me, so now I get to take it along with me on the journey again.

Simple steps I took to get everything up and running:

1. `brew install fish` to install fish shell
2. `which fish` to find out your `fish` bin path (mine was `/opt/homebrew/bin/fish` since I installed fish via homebrew
3. `sudo sh -c 'echo /opt/homebrew/bin/fish >> /etc/shells'` to add fish to the list of valid shells. Make sure you use the right path for fish here
4. `chsh -s /opt/homebrew/bin/fish` to change your default shell - check your own path again here for fish
5. Quit and restart your terminal for the default shell change to take effect
6. Install [fisher](https://github.com/jorgebucaran/fisher), fish's plugin manager
7. Install plugins via fisher. I like fzf, nvm, and gitnow
8. `brew install starship` to install [Starship](https://starship.rs/), which I quite like ([tide](https://github.com/IlanCosman/tide) and [hydro](https://github.com/jorgebucaran/hydro) are other great alternatives)
9. that's it!

## Applications

Next, I installed the applications I commonly use. These include:

- [Raycast](https://www.raycast.com/) - best command center I've used so far
- [Brave](https://brave.com/) - my fav broswer
- [Cursor](https://cursor.com/) + [VS Code](https://code.visualstudio.com/) - hard for me to leave VS Code, but Cursor is powerful
- [Obsidian](https://obsidian.md/) - not really my second brain (not sure I believe having a second brain), but I do use it for most of my notes over Notion

And a few not as essential but still nice-to-have:

- Spotify
- Notion - not to replace Obsidian but mainly for collaborating/sharing with others

Other apps will be installed as I need them.
