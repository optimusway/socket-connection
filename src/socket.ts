export interface IProxy {
  connect: () => Promise<any>;
  close: () => Promise<any>;
  send: (options: any) => Promise<any>;
  isConnected?: () => boolean;
}

export interface ISocket {
  connect: () => Promise<void>;
  close: () => Promise<void>;
  send: (options: any) => Promise<void>;
  getCurrentProxy: () => IProxy;
  isSocketConnected: () => boolean;
}

export class Socket implements ISocket {
  proxy: IProxy;

  constructor(proxy: IProxy) {
    this.proxy = proxy;
  }

  connect = async () => await this.proxy.connect();
  close = async () => await this.proxy.close();
  send = async (options: any) => await this.proxy.send(options);
  getCurrentProxy = () => this.proxy;
  isSocketConnected = () => this.proxy.isConnected!();
}
