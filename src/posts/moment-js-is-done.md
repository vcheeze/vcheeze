---
title: "Moment.js is done (dead)"
description: But many of its successors are caryying the torch.
date: 2025-11-25
# updated: YYYY-MM-DD
tags: []
published: true
---

> We now generally consider Moment to be a legacy project in maintenance mode. It is not dead, but it is indeed done.

This is a direct quote from [Moment.js's docs](https://momentjs.com/docs/), where the maintainers of the popular date management library explain why Moment's evolution is coming to an end.

Some stats to illustrate the sheer momentum (pun fully intended) of this library, at the date of writing this (Nov 25, 2025):

- Over 26.6 million weekly downloads, a full five years after entering maintenance mode
- 70,700+ packages depend on it
- 48,000+ stars on GitHub

For reference, `tailwindcss` has ~31.4 million downloads this week, and `react` ~53.8 million. For a package that was last published two years ago, Moment still has an inredible hold in the modern javascript world.

## What changed?

Now, why do the maintainers discourage using Moment in new projects? A couple of key points:

- Its mutable design is confusing (although well-documented), yet is so foundational to the current implementation that an immutable version effectively comprises a new library altogether
- Its size - it doesn't work well with the modern "tree shaking" algorithms
- The rise of native APIs such as [Date](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) and [Intl](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl) for simple use cases, and
- Modern date libraries such as [Luxon](https://moment.github.io/luxon/), [Day.js](https://day.js.org/), and [date-fns](https://date-fns.org/)

Moment started in 2011, and it essentially became outdated. It remains one of the most widely used libraries, however, so it continues to be maintained, which brings us to the point below.

## What are the implications?

Here's what "maintenance mode" means for Moment:

- No new features
- No fixes to the aforementioned issues (mutable design and bundle size)
- No v3
- Critical security concerns *will* be addressed
- Data updates for Moment-Timezone *will* be released

## What's the way forward?

The alternatives Moment recommends are mentioned above. Notably, Luxon is created by one of the contributors of Moment, whose ideas on how to improve Moment were well-received but restricted by the design of the library. This gave birth to Luxon, which inherits parts of Moment and introduces major changes that address Moment's pitfalls.

Day.js and date-fns are also very solid options, with the former offering an easier migration from Moment and the latter embracing a funtional programming approach.

All three are very good options, and we might continue to see more viable options (P.S. keep an eye out for the native [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) API).

For now, the key takeaway is **don't use Moment in your new projects**. Reach for the `Intl` and `Date` objects first. If they can't meet your application's needs, then choose some of the alternatives offered here. You really can't go wrong with any of them.
