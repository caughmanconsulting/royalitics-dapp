export class Sale {
  day: string;
  month: string;
  year: string;
  timestamp: string;
  price: number;
  royaltiesCollected: number;
  royaltiesUnCollected: number;
  marketplace: string;
  paidFullRoyalty: boolean;
  paidHalfRoyalty: boolean;
  sellerFee: number;
  constructor(
    day: string,
    month: string,
    year: string,
    timestamp: string,
    price: number,
    royaltiesCollected: number,
    royaltiesUnCollected: number,
    marketplace: string,
    paidFullRoyalty: boolean,
    paidHalfRoyalty: boolean,
    sellerFee: number
  ) {
    day = day;
    month = month;
    year = year;
    timestamp = timestamp;
    price = price;
    royaltiesCollected = royaltiesCollected;
    royaltiesUnCollected = royaltiesUnCollected;
    marketplace = marketplace;
    paidFullRoyalty = paidFullRoyalty;
    paidHalfRoyalty = paidHalfRoyalty;
    sellerFee = sellerFee;
  }
}
