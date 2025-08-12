function eq(a1, a2) {
  // Handle special case for NaN
  if (a1 !== a1 && a2 !== a2) {
    return true; // Both are NaN
  }

  // Handle special case for -0 and +0
  if (a1 === 0 && a2 === 0) {
    return 1 / a1 === 1 / a2; // Check for -0 and +0 distinction
  }

  return a1 === a2; // Default strict equality
}
