import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const listActive = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db
      .query('updates')
      .withIndex('by_active_published', (q) => q.eq('active', true))
      .order('desc')
      .take(20)

    return rows.map((row) => ({
      id: row._id,
      title: row.title,
      body: row.body,
      publishedAt: row.publishedAt,
      mandatory: row.mandatory,
    }))
  },
})

export const create = mutation({
  args: {
    title: v.string(),
    body: v.string(),
    mandatory: v.optional(v.boolean()),
    active: v.optional(v.boolean()),
    publishedAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert('updates', {
      title: args.title.trim(),
      body: args.body.trim(),
      mandatory: args.mandatory ?? true,
      active: args.active ?? true,
      publishedAt: args.publishedAt ?? Date.now(),
    })
  },
})

export const deactivate = mutation({
  args: { id: v.id('updates') },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { active: false })
    return { ok: true as const }
  },
})
