declare module 'socketinterfaces' {
  export = SocketInterfaces
}

declare namespace SocketInterfaces {

  export interface IProxy {
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

  export interface ISocket {
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