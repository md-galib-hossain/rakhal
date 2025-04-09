export function buildCowInclude(withHistory: boolean) {
  const idTag = { id: true, tag: true };
  const idName = { id: true, name: true };
  const baseInclude = {
    farm: { select: idName },
    cowType: { select: { id: true, typeName: true } },
    currentGroup: { select: { name: true } },
    currentShade: { select: { name: true } },
  };

  if (!withHistory) {
    return baseInclude;
  }

  return {
    ...baseInclude,
    groupHistory: {
      take: 3,
      orderBy: { assignedAt: "desc" },
      select: {
        assignedAt: true,
        cow: { select: idTag },
        group: { select: idTag },
      },
    },
    shadeHistory: {
      take: 3,
      orderBy: { assignedAt: "desc" },
      select: {
        assignedAt: true,
        cow: { select: idTag },
        shade: { select: idName },
      },
    },
  };
}

export function normalizeQuery(raw: Record<string, unknown>) {
  const q = { ...raw };

  const withHistory = String(q.withHistory).toLowerCase() === "true";
  delete q.withHistory;

  return { cleaned: q, withHistory };
}
