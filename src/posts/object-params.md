---
title: When your function has many optional parameters, define the param as an object
description: "A real-life example from Azure DevOps's Node.js API package that I recently had to endure:"
date: 2024-01-02
# updated: YYYY-MM-DD
tags: []
published: true
---

A real-life example from [Azure DevOps's Node.js API package](https://github.com/microsoft/azure-devops-node-api) that I recently had to endure:

```javascript
const response = await gitApi.getItems(
	repoId,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	{
		versionType: GitVersionType.Branch,
		version: branchName
	}
);
```

Just do this instead, please:

```javascript
const response = await gitApi.getItems({
	repoId,
	versionDescriptor: {
		versionType: GitVersionType.Branch,
		version: branchName
	}
});
```

It gets even worse when you want to pass that 9th parameter conditionally. If `branchName` is an optional parameter and isn't passed in the function call, we end up with atrocities like:

```javascript
// using Function.prototype.apply()
const response = await gitApi.getItems.apply(
	gitApi.getItems,
	...(branchName
		? [
				repoId,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				{
					versionType: GitVersionType.Branch,
					version: branchName
				}
			]
		: [repoId])
);

// or just the good old if/else
if (branchName) {
	// ugly call goes here
} else {
	// not-so-ugly call goes here
}
```

The same thing could be easily done with a single object as the param:

```javascript
const response = await gitApi.getItems.apply({
	repoId,
	...(branchName
		? {
				versionType: GitVersionType.Branch,
				version: branchName
			}
		: {})
});
```

Much neater, right? I don't like writing `undefined` so many times, even if I can copy/paste it or know some cool keyboard shortcut to duplicate it in my IDE. So please don't make me write `undefined` seven times just because I want to pass an optional param that might be... _*sigh*_, `undefined`.
