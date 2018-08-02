declare namespace Socket {

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

declare module 'proxy' {
  import IProxy = Socket.IProxy;
  export = IProxy
}

declare module 'socket' {
  import ISocket = Socket.ISocket;
  export = ISocket;
}
