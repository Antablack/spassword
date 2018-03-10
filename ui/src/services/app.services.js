

export const AppServices = {
    async getApps() {
        let data = [
            {
                GROUPID: 1,
                GROUP: "Web Application",
                ACCOUNTS: [{
                    ACCOUNTID:1,
                    NAME: "facebook",
                    URL: "facebook.com",
                    USER: "juan.com",
                    PASSWORD: "Abc123456",
                    NOTES: "Esta es mi cuenta"
                },{
                    ACCOUNTID:2,
                    NAME: "AWS",
                    URL: "aws.com",
                    USER: "juan.com",
                    PASSWORD: "Abc123456",
                    NOTES: "Esta es mi cuenta"
                }]
            },
            {
                GROUPID: 1,
                GROUP: "Application",
                ACCOUNTS: [{
                    ACCOUNTID:3,
                    NAME: "AWS",
                    URL: "aws.com",
                    USER: "juan.com",
                    PASSWORD: "Abc123456",
                    NOTES: "Esta es mi cuenta"
                }]
            }]

            return data;
    }
}