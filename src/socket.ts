export interface IProxy {
  connect: () => void;
  close: () => void;
  subscribe: (subscriptionName: string, callback: any) => void;
  unsubscribe: (subscriptionName: string) => void;
  unsubscribeFromAll?: () => void;
  subscribeToAll?: () => void;
  getAllSubscriptions?: () => any;
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
  getAllSubscriptions: () => any;
  getSubscription: (subscriptionName: string) => any;
  getCurrentProxy: () => IProxy;
  isSocketConnected: () => boolean;
}

export class Socket implements ISocket {

  proxy: IProxy;

  constructor(proxy: IProxy) {
    this.proxy = proxy
  }

  connect = async() => await this.proxy.connect();
  close = async() => await this.proxy.close();
  subscribe = async(subscriptionName: string, callback: any) => await this.proxy.subscribe(subscriptionName, callback);
  unsubscribe = async(subscriptionName: string) => await this.proxy.unsubscribe(subscriptionName);
  subscribeToAll = async() => await this.proxy.subscribeToAll!();
  unsubscribeFromAll = async() => await this.proxy.unsubscribeFromAll!();
  getAllSubscriptions = () => this.proxy.getAllSubscriptions!();
  getSubscription = (subscriptionName: string) => this.proxy.getSubscription!(subscriptionName);
  getCurrentProxy = () => this.proxy;
  isSocketConnected = () => this.proxy.isConnected!;
}