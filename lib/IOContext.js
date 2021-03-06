class IOContext {
    constructor(socket, packet, criteriaBuilder) {
        if (!socket || !packet)
            throw new InvalidIOContextError();

        if (typeof packet === 'string')
            try {
                packet = JSON.parse(packet)
            }
            catch(error){}

        this.socket = socket;
        this.data = packet.data;
        this.token = packet.token;
        this.user = socket.user;

        this.criteria = criteriaBuilder.build(packet.query);
    }
}

class InvalidIOContextError extends Error {
    constructor() {
        super();
    }
}

module.exports = IOContext;