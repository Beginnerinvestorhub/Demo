import { isDemo } from './env';

export async function fetchAlphaVantage(symbol: string) {
  try {
    const baseUrl = isDemo ? '/api/demo' : '';
    const res = await fetch(
      `${baseUrl}/price-proxy?symbol=${encodeURIComponent(symbol)}`
    );
    if (!res.ok) throw new Error('Alpha Vantage fetch failed');
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchIEXCloud(symbol: string) {
  try {
    const baseUrl = isDemo ? '/api/demo' : '';
    const res = await fetch(
      `${baseUrl}/iex-proxy?symbol=${encodeURIComponent(symbol)}`
    );
    if (!res.ok) throw new Error('IEX Cloud fetch failed');
    return await res.json();
  } catch {
    return null;
  }
}

export async function fetchCoinGecko(id: string) {
  try {
    const baseUrl = isDemo ? '/api/demo' : '';
    const res = await fetch(
      `${baseUrl}/coin-gecko-proxy?id=${encodeURIComponent(id)}`
    );
    if (!res.ok) throw new Error('CoinGecko fetch failed');
    return await res.json();
  } catch {
    return null;
  }
}
