import { io } from 'socket.io-client';
import { getBackendBaseUrl } from './utils/backendUrl';

export const initSocket = async () => {
    const backendBaseUrl = getBackendBaseUrl() || window.location.origin;
    const options = {
        forceNew: true,
        reconnectionAttempts: Infinity,
        timeout: 20000,
        transports: ['websocket', 'polling'],
    };
    return io(backendBaseUrl, options);
};
