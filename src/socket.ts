export interface IProxy {
  connect: () => void;
  close: () => void;
  subscribe: (subscriptionName: string, callback: any) => void;
  unsubscribe: (subscriptionName: string) => void;
  unsubscribeFromAll?: () => void;
  subscribeToAll?: () => void;
  getAllSubscriptions?: () => any[];
  getSubscription?: (subscriptionName: string) => any;
  isConnected?: boolean;
}

export interface ISocket {
  connect: () => void;
  close: () => void;
  subscribe: (subscriptionName: string, callback: any) => void;
  unsubscribe: (subscriptionName: string) => void;
  unsubscribeFromAll: () => void;
  subscribeToAll: () => void;
  getAllSubscriptions: () => any[];
  getSubscription: (subscriptionName: string) => any;
  getCurrentProxy: () => IProxy;
  isSocketConnected: () => boolean;
}

export class Socket implements ISocket {

  proxy: IProxy;

  constructor(proxy: IProxy) {
    this.proxy = proxy
  }

  connect = () => this.proxy.connect();
  close = () => this.proxy.close();
  subscribe = (subscriptionName: string, callback: any) => this.proxy.subscribe(subscriptionName, callback);
  unsubscribe = (subscriptionName: string) => this.proxy.unsubscribe(subscriptionName);
  subscribeToAll = () => this.proxy.subscribeToAll!();
  unsubscribeFromAll = () => this.proxy.unsubscribeFromAll!();
  getAllSubscriptions = () => this.proxy.getAllSubscriptions!();
  getSubscription = (subscriptionName: string) => this.proxy.getSubscription!(subscriptionName);
  getCurrentProxy = () => this.proxy;
  isSocketConnected = () => this.proxy.isConnected!;
}