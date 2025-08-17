import type { Transaction } from "../models/Budget";

export async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch('/data/csv/td-jan25-jul25.csv');
  if (!response.ok) throw new Error('Failed to fetch CSV');

  const text = await response.text();
  const lines = text.trim().split('\n');

  return lines.filter((line) => line.trim().length > 0).map((line) => {
    const cells = line.split(',');
    const amount = parseFloat(cells[2].length > 0 ? cells[2] : cells[3]);
    return {
      date: cells[0],
      description: cells[1],
      amount,
      categories: [cells[2].length === 0 ? "payment" : "expense"], // Assuming categories are derived from the CSV structure
      csvLine: line, // Store the original CSV line for reference
    } as Transaction;
  });
}