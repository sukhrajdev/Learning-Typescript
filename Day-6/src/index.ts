class School {
    private schoolServerIp:string = "124.0.0.1";
    protected schoolServerPort:number = 3000;
    public schoolName:string = "St.farid Public School,Amloh";
}

class Admin extends School {
    getSchoolInfo(){
        console.log("School Tech Info:-");
        console.log(`Server Ip:- ${this.schoolServerIp}`);
        console.log(`Server port:- ${this.schoolServerPort}`);
        console.log(`School Name:- ${this.schoolName}`);
        console.log("Thanks For Supporting ! Us 😍");
    }
}
const new_admin = new Admin()
new_admin.getSchoolInfo()