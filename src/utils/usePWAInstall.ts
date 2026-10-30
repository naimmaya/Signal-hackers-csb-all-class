import { useEffect, useState } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const isStandalone =
          (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: standalone)')?.matches) ||
          Boolean((window.navigator as unknown as { standalone?: boolean })?.standalone);
        setIsInstalled(Boolean(isStandalone));

        const userAgent = (window.navigator?.userAgent || '').toLowerCase();
        const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIOSDevice);
      }
    } catch (e) {
      console.warn('[PWA] Error detecting standalone/iOS:', e);
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      try {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
      } catch (err) {
        console.warn('[PWA] beforeinstallprompt handling error:', err);
      }
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    try {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', handleAppInstalled);
    } catch (e) {
      console.warn('[PWA] Failed to attach install listeners:', e);
    }

    return () => {
      try {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
      } catch {
        // Ignore on teardown
      }
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return false;
    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
        setDeferredPrompt(null);
        return true;
      }
    } catch (e) {
      console.warn('[PWA] Install prompt failed:', e);
    }
    return false;
  };

  return {
    isInstallable: !!deferredPrompt,
    isInstalled,
    isIOS,
    install,
    deferredPrompt,
  };
}
