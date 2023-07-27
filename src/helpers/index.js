export function showNumbersWithDots(total, selectedNumber) {
  const NUM_VISIBLE = 3; // Number of visible numbers (including selected number)
  const DOTS = '...';     // Three dots to represent hidden numbers

  if (total <= NUM_VISIBLE) {
    // If the total number is less than or equal to the number of visible numbers,
    // show all numbers without dots.
    return Array.from({ length: total }, (_, i) => i + 1).join(', ');
  }

  const halfVisible = Math.floor((NUM_VISIBLE - 1) / 2);
  const firstVisible = Math.max(1, selectedNumber - halfVisible);
  const lastVisible = Math.min(total, firstVisible + NUM_VISIBLE - 1);

  let visibleNumbers = Array.from({ length: lastVisible - firstVisible + 1 }, (_, i) => i + firstVisible);

  if (firstVisible > 1) {
    visibleNumbers = [1, DOTS, ...visibleNumbers];
  }

  if (lastVisible < total) {
    visibleNumbers.push(DOTS, total);
  }

  return visibleNumbers.map(num => (num === DOTS ? DOTS : num === selectedNumber ? `${num}` : num)).join(', ');
}