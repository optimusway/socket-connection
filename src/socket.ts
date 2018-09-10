export interface IProxy {
  connect: () => Promise<any>;
  close: () => Promise<any>;
  send: (options: any) => Promise<any>;
  isConnected?: () => boolean;
  onopen?: () => void;
  onclose?: () => void;
}

export interface ISocket {
  connect: () => Promise<any>;
  close: () => Promise<any>;
  send: (options: any) => Promise<any>;
  getCurrentProxy: () => IProxy;
  isSocketConnected: () => boolean;
}

export class Socket implements ISocket {
  private readonly proxy: IProxy;

  constructor(proxy: IProxy) {
    this.proxy = proxy;
  }

  connect = async () => await this.proxy.connect();
  close = async () => await this.proxy.close();
  send = async (options: any) => await this.proxy.send(options);
  getCurrentProxy = () => this.proxy;
  isSocketConnected = () => this.proxy.isConnected!();
}
