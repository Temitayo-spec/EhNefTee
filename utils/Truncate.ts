// truncate wallet address
export const truncateAddress = (
  address: string,
  start: number,
  end: number
) => {
  return `${address.slice(0, start)}...${address.slice(-end)}`;
};
