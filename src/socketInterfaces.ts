declare module 'socketinterfaces' {
  interface IProxy {
    connect: () => void;
    close: () => void;
    subscribe: (subscriptionName: string, callback: any) => void;
    unsubscribe: (subscriptionName: string) => void;
    unsubscribeFromAll?: () => void;
    subscribeToAll?: () => void;
    getAllSubscriptions?: () => any;
    getSubscription?: (subscriptionName: string) => any;
    isConnected?: () => boolean;
  }

  interface ISocket {
    connect: () => void;
    close: () => void;
    subscribe: (subscriptionName: string, callback: any) => void;
    unsubscribe: (subscriptionName: string) => void;
    unsubscribeFromAll: () => void;
    subscribeToAll: () => void;
    getAllSubscriptions: () => any;
    getSubscription: (subscriptionName: string) => any;
    getCurrentProxy: () => IProxy;
    isSocketConnected: () => boolean;
  }
}