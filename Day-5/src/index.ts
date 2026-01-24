class Server {
    private readonly serverIp:string = '124.0.0.1'
    protected readonly serverPort:number = 8080
    public readonly serverName:string = "My Server"
}

class Admin extends Server {
    private serverMembersInfo(){
        return {
            success: true,
            message: "Server Members Now Accessible"
        }
    }
    getServerInfo(){
        console.log(this.serverName);
    }
    getAdminServerInfo(){
        console.log(this.serverName);
        console.log(this.serverIp);
        console.log(this.serverPort);
        
    }
}

const newServer = new Server()
console.log(newServer.serverPort);

const AdminNew = new Admin()

console.log(AdminNew.getAdminServerInfo());
