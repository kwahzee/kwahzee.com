import { proxy } from '@/proxy';

const mockSet = jest.fn();

jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    next: jest.fn(() => ({ headers: { set: mockSet } })),
  },
}));

function makeRequest(ua: string) {
  return {
    headers: { get: (name: string) => (name === 'user-agent' ? ua : null) },
  } as ReturnType<typeof import('next/server').NextRequest.prototype.clone>;
}

describe('proxy – device detection', () => {
  beforeEach(() => mockSet.mockClear());

  describe('mobile detection', () => {
    it('detects iPhone', () => {
      proxy(makeRequest('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'mobile');
    });

    it('detects Android with Mobile flag', () => {
      proxy(makeRequest('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 Mobile Safari/537.36'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'mobile');
    });

    it('detects iPod', () => {
      proxy(makeRequest('Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'mobile');
    });
  });

  describe('tablet detection', () => {
    it('detects iPad', () => {
      proxy(makeRequest('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'tablet');
    });

    it('detects Android without Mobile flag (tablet)', () => {
      proxy(makeRequest('Mozilla/5.0 (Linux; Android 13; Nexus 10) AppleWebKit/537.36 Safari/537.36'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'tablet');
    });
  });

  describe('desktop detection', () => {
    it('detects macOS', () => {
      proxy(makeRequest('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'desktop');
    });

    it('detects Windows', () => {
      proxy(makeRequest('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'desktop');
    });

    it('defaults to desktop for an empty user-agent', () => {
      proxy(makeRequest(''));
      expect(mockSet).toHaveBeenCalledWith('x-device-type', 'desktop');
    });
  });

  it('always sets the x-device-type header on the response', () => {
    proxy(makeRequest('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'));
    expect(mockSet).toHaveBeenCalledTimes(1);
    expect(mockSet.mock.calls[0][0]).toBe('x-device-type');
  });
});
