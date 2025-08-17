export type TrEvent = {
    id: string;
    date: string;
    event: string;
};

export async function fetchEventsFromApi(page: number): Promise<Array<any>> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Generate mock events
  const pageSize = 10;
  return Array.from({ length: pageSize }, (_, i) => ({
    id: (page - 1) * pageSize + i + 1,
    title: `Event ${(page - 1) * pageSize + i + 1}`,
    description: `Description for event ${(page - 1) * pageSize + i + 1}`,
    date: new Date().toISOString(),
  }));
}