## Socket connection

Socket-connection is abstract class over different realization of web socket connection.

### Installing
    yarn add socket-connection
    npm -i socket-connection

### Usage

    import {WampConnection} from 'socket-connection-wamp';
    import {IConnectionOptions} from 'autobahn';
    import {SocketConnection} from 'socket-connection';

    const options: IConnectionOptions = {};
    const wampProxy = new WampConnection(options);
    const socket = new SocketConnection(wampProxy);

### Methods

#### connect
Create connection using proxy passed to constructor
#### close
Close connection of proxy
#### isConnected
Return boolean whether connection is opened or closed
#### send
Send message to proxy