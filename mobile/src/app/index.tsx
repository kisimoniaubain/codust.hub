import Constants from 'expo-constants';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView, WebViewNavigation } from 'react-native-webview';
import { palette } from '../lib/theme';

const WEBSITE_URL =
  Constants.expoConfig?.extra?.websiteUrl ?? 'https://codust-hub.vercel.app/';
const WEBSITE_ORIGIN = new URL(WEBSITE_URL).origin;
const GRID_SIZE = 44;

export default function Index() {
  const webView = useRef<WebView>(null);
  const hasLoaded = useRef(false);
  const loadFailed = useRef(false);
  const loadingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadError, setLoadError] = useState<string | null>(null);
  const { width, height } = useWindowDimensions();

  const clearLoadingTimer = () => {
    if (loadingTimer.current) {
      clearTimeout(loadingTimer.current);
      loadingTimer.current = null;
    }
  };

  useEffect(() => {
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!canGoBack) return false;
      webView.current?.goBack();
      return true;
    });

    return () => subscription.remove();
  }, [canGoBack]);

  useEffect(() => () => clearLoadingTimer(), []);

  const handleNavigationChange = (navigation: WebViewNavigation) => {
    setCanGoBack(navigation.canGoBack);
  };

  const handleLoadStart = () => {
    clearLoadingTimer();
    loadFailed.current = false;
    setLoading(true);
    setProgress(0);
    setLoadError(null);
    loadingTimer.current = setTimeout(() => {
      setLoading(false);
      if (!hasLoaded.current) {
        setLoadError('The connection is taking longer than expected.');
      }
    }, 20000);
  };

  const handleLoadEnd = () => {
    clearLoadingTimer();
    if (loadFailed.current) {
      setLoading(false);
      return;
    }
    hasLoaded.current = true;
    setLoading(false);
    setProgress(1);
    setLoadError(null);
  };

  const handleLoadError = (description: string) => {
    clearLoadingTimer();
    loadFailed.current = true;
    setLoading(false);
    setLoadError(description || 'The website could not be loaded.');
  };

  const handleOpenWindow = (targetUrl: string) => {
    if (targetUrl.startsWith(`${WEBSITE_ORIGIN}/`) || targetUrl === WEBSITE_ORIGIN) {
      webView.current?.injectJavaScript(
        `window.location.href = ${JSON.stringify(targetUrl)}; true;`,
      );
      return;
    }

    clearLoadingTimer();
    setLoading(false);
    setProgress(1);
    void Linking.openURL(targetUrl).catch((error: unknown) => {
      const message = error instanceof Error ? error.message : 'The link could not be opened.';
      setLoadError(message);
    });
  };

  const verticalLines = Array.from({ length: Math.ceil(width / GRID_SIZE) + 1 }, (_, index) => index);
  const horizontalLines = Array.from({ length: Math.ceil(height / GRID_SIZE) + 1 }, (_, index) => index);
  const showLaunchScreen = !hasLoaded.current;

  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
    <View style={styles.container}>
      <WebView
        ref={webView}
        source={{ uri: WEBSITE_URL }}
        style={styles.webView}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onLoadProgress={(event) => {
          setProgress(event.nativeEvent.progress);
        }}
        onError={(event) => {
          handleLoadError(event.nativeEvent.description);
        }}
        onOpenWindow={(event) => handleOpenWindow(event.nativeEvent.targetUrl)}
        onRenderProcessGone={() => {
          handleLoadError('The page stopped unexpectedly. Reload to continue.');
        }}
        onContentProcessDidTerminate={() => {
          handleLoadError('The page stopped unexpectedly. Reload to continue.');
        }}
        onNavigationStateChange={handleNavigationChange}
        onShouldStartLoadWithRequest={(request) => {
          if (request.url.startsWith('https://') || request.url.startsWith('http://')) {
            return true;
          }
          if (request.url === 'about:blank') return true;
          if (/^(mailto|tel|sms):/i.test(request.url)) {
            void Linking.openURL(request.url).catch((error: unknown) => {
              const message = error instanceof Error ? error.message : 'The link could not be opened.';
              setLoadError(message);
            });
          }
          return false;
        }}
        javaScriptEnabled
        domStorageEnabled
        sharedCookiesEnabled
        setSupportMultipleWindows
        thirdPartyCookiesEnabled
        allowsBackForwardNavigationGestures
      />
      {showLaunchScreen && (
        <View style={styles.launchScreen}>
          <View pointerEvents="none" style={styles.grid}>
            {verticalLines.map((index) => (
              <View key={`v-${index}`} style={[styles.verticalLine, { left: index * GRID_SIZE }]} />
            ))}
            {horizontalLines.map((index) => (
              <View key={`h-${index}`} style={[styles.horizontalLine, { top: index * GRID_SIZE }]} />
            ))}
            <View style={styles.glow} />
            <View style={styles.centerLine} />
          </View>

          <View style={styles.launchContent}>
            <View style={styles.logoTile}>
              <Text style={styles.logoMark}>&lt;&gt;</Text>
            </View>
            <Text style={styles.brand}>CODUST<Text style={styles.brandSuffix}>.HUB</Text></Text>
            <View style={styles.loaderTrack}>
              <View style={styles.loaderFill} />
            </View>
            {loading ? (
              <View style={styles.loadingLabel}>
                <ActivityIndicator color={palette.primary} size="small" />
                <Text style={styles.loadingText}>Preparing your learning space</Text>
              </View>
            ) : (
              <View style={styles.retryCard}>
                <Text style={styles.errorText}>
                  {loadError ?? 'The website could not be loaded.'}
                </Text>
                <Pressable
                  onPress={() => {
                    setLoadError(null);
                    handleLoadStart();
                    webView.current?.reload();
                  }}
                  style={styles.retryButton}
                >
                  <Text style={styles.retry}>Try again</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      )}
      {loading && !showLaunchScreen && (
        <View pointerEvents="none" style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.max(progress * 100, 8)}%` }]} />
        </View>
      )}
      {loadError && (
        !showLaunchScreen && (
          <View style={styles.errorBanner}>
            <Text numberOfLines={2} style={styles.bannerText}>{loadError}</Text>
            <Pressable
              onPress={() => {
                setLoadError(null);
                handleLoadStart();
                webView.current?.reload();
              }}
              hitSlop={8}
            >
              <Text style={styles.retry}>Retry</Text>
            </Pressable>
            <Pressable onPress={() => setLoadError(null)} hitSlop={8}>
              <Text style={styles.dismiss}>×</Text>
            </Pressable>
          </View>
        )
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: palette.bg },
  container: { flex: 1, backgroundColor: palette.bg },
  webView: { flex: 1, backgroundColor: palette.bg },
  launchScreen: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: palette.bg,
  },
  grid: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden',
  },
  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(0, 219, 231, 0.055)',
  },
  horizontalLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(0, 219, 231, 0.055)',
  },
  glow: {
    position: 'absolute',
    top: '28%',
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(0, 219, 231, 0.035)',
  },
  centerLine: {
    position: 'absolute',
    alignSelf: 'center',
    top: 0,
    bottom: 0,
    width: 1,
    backgroundColor: 'rgba(0, 219, 231, 0.08)',
  },
  launchContent: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 32,
  },
  logoTile: {
    width: 76,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 219, 231, 0.34)',
    backgroundColor: '#1a1c22',
    shadowColor: palette.primary,
    shadowOpacity: 0.2,
    shadowRadius: 22,
    marginBottom: 18,
  },
  logoMark: {
    color: palette.primary,
    fontFamily: 'monospace',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -6,
    marginRight: 6,
  },
  brand: {
    color: palette.text,
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 2.4,
  },
  brandSuffix: { color: palette.primary },
  loaderTrack: {
    width: 56,
    height: 3,
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: 'rgba(116, 245, 255, 0.14)',
    marginTop: 24,
    marginBottom: 20,
  },
  loaderFill: {
    width: '45%',
    height: '100%',
    borderRadius: 3,
    backgroundColor: palette.primary,
  },
  loadingLabel: {
    minHeight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  loadingText: { color: palette.muted, fontSize: 14 },
  retryCard: {
    alignItems: 'center',
    padding: 18,
    borderRadius: 14,
    backgroundColor: 'rgba(30, 31, 37, 0.94)',
    borderWidth: 1,
    borderColor: 'rgba(116, 245, 255, 0.16)',
  },
  errorText: { color: palette.muted, fontSize: 14, lineHeight: 21, textAlign: 'center' },
  retryButton: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 14,
    borderRadius: 8,
    backgroundColor: palette.primary,
  },
  retry: { color: '#00363a', fontSize: 14, fontWeight: '700' },
  progressTrack: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(0, 219, 231, 0.12)',
  },
  progressFill: {
    height: '100%',
    backgroundColor: palette.primary,
  },
  errorBanner: {
    position: 'absolute',
    top: 8,
    left: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#25262d',
    borderWidth: 1,
    borderColor: 'rgba(255, 172, 232, 0.3)',
  },
  bannerText: { flex: 1, color: palette.muted, fontSize: 13 },
  dismiss: { color: palette.muted, fontSize: 20, fontWeight: '600' },
});
