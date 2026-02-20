import { proxy } from '@/proxy';
import { NextResponse } from 'next/server';

jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: { next: jest.fn(() => ({})) },
}));

const mockNext = NextResponse.next as jest.Mock;

// Use a real Headers object so new Headers(request.headers) works inside proxy
function makeRequest(ua: string) {
  const h = new Headers();
  if (ua) h.set('user-agent', ua);
  return { headers: h } as any;
}

function getDeviceType(ua: string): string {
  mockNext.mockClear();
  proxy(makeRequest(ua));
  const requestHeaders = mockNext.mock.calls[0]?.[0]?.request?.headers as Headers;
  return requestHeaders?.get('x-device-type') ?? 'unknown';
}

describe('proxy – device detection', () => {
  describe('mobile detection', () => {
    it('detects iPhone', () => {
      expect(getDeviceType('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15')).toBe('mobile');
    });

    it('detects Android with Mobile flag', () => {
      expect(getDeviceType('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Mobile Safari/537.36')).toBe('mobile');
    });

    it('detects iPod', () => {
      expect(getDeviceType('Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15')).toBe('mobile');
    });
  });

  describe('tablet detection', () => {
    it('detects iPad', () => {
      expect(getDeviceType('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15')).toBe('tablet');
    });

    it('detects Android without Mobile flag (tablet)', () => {
      expect(getDeviceType('Mozilla/5.0 (Linux; Android 13; Nexus 10) AppleWebKit/537.36 Safari/537.36')).toBe('tablet');
    });
  });

  describe('desktop detection', () => {
    it('detects macOS', () => {
      expect(getDeviceType('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')).toBe('desktop');
    });

    it('detects Windows', () => {
      expect(getDeviceType('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')).toBe('desktop');
    });

    it('defaults to desktop for an empty user-agent', () => {
      expect(getDeviceType('')).toBe('desktop');
    });
  });

  it('sets x-device-type on the request headers (readable by Server Components)', () => {
    mockNext.mockClear();
    proxy(makeRequest('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'));
    const callArg = mockNext.mock.calls[0]?.[0];
    expect(callArg).toHaveProperty('request.headers');
    expect((callArg.request.headers as Headers).get('x-device-type')).toBe('desktop');
  });
});
