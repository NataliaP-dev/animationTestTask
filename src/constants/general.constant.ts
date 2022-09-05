export interface IBasketItem {
  price: number;
  hastag: string;
  description: string;
}

export const mockItem: IBasketItem = {
  price: 140,
  hastag: '#Eau de Parfum',
  description: 'Top notes: Bergamot and something else',
};
