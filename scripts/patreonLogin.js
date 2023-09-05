export async function patreonLogin() {

    await fetch("www.patreon.com/oauth2/authorize", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "response_type": "code",
            "client_id": CLIENTID,
        },

    }).then(response => {
        console.log(response);    
    })

}



const CLIENTID = "J2NDts4wxpFqKvmJY_x3B7QDCICwHps5UA5HVCmfi3_pzoWapSjdYQwF0XrR_YHg"