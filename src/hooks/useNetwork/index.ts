import { ref, Ref } from 'vue';
import useEventListener from '../useEventListener';
type ConnectType = 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';
type EffectiveType = 'slow-2g' | '2g' | '3g' | '4g';
type MaybeNullableRef<T> = Ref<T | undefined>;
interface NetworkStatus {
  isSupported: Ref<boolean>;
  isOnLine: Ref<boolean>;
  type: MaybeNullableRef<ConnectType>;
  effectiveType: MaybeNullableRef<EffectiveType>;
  downlink: MaybeNullableRef<number>;
  downlinkMax: MaybeNullableRef<number>;
  saveData: MaybeNullableRef<boolean>;
  rtt: MaybeNullableRef<number>;
}

interface NavigatorConnection extends EventTarget {
  type?: ConnectType;
  effectiveType?: EffectiveType;
  downlink?: number;
  downlinkMax?: number;
  rtt?: number;
  saveData?: boolean;
  change?: (event: Event) => void;
}
type NavigatorExtend = Navigator & {
  connection?: NavigatorConnection;
};

function useNetwork(): Readonly<NetworkStatus> {
  const navigator: NavigatorExtend = window.navigator;

  const isOnLine = ref<boolean>(navigator.onLine);
  const isSupported = ref<boolean>(navigator && 'connection' in navigator);
  const type = ref<ConnectType>();
  const effectiveType = ref<EffectiveType>();
  const downlink = ref<number | undefined>();
  const downlinkMax = ref<number | undefined>();
  const saveData = ref<boolean | undefined>();
  const rtt = ref<number | undefined>();

  function updateNetworkStatus() {
    type.value = navigator.connection?.type;
    effectiveType.value = navigator.connection?.effectiveType;
    downlink.value = navigator.connection?.downlink;
    downlinkMax.value = navigator.connection?.downlinkMax;
    rtt.value = navigator.connection?.rtt;
    saveData.value = navigator.connection?.saveData;
  }
  if (navigator.connection) {
    useEventListener(navigator.connection, 'change', updateNetworkStatus);
  }
  // 比navigator.onLine靠谱，n不兼容navigator的会返回false或undefined
  useEventListener(window, 'offline', () => {
    isOnLine.value = false;
  });
  useEventListener(window, 'online', () => {
    isOnLine.value = true;
  });

  updateNetworkStatus();

  return {
    isSupported,
    type,
    isOnLine,
    effectiveType,
    downlink,
    downlinkMax,
    saveData,
    rtt,
  };
}

export default useNetwork;
