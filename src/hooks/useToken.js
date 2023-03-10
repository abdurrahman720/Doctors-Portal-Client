import { useEffect, useState } from "react";

const useToken = email => {

    const [token, setToken] = useState('')

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5001/jwt?email=${email}`)
        .then((response) => response.json())
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('doctorsToken', data.accessToken);
                setToken(data.accessToken);
            }
        });
     }
    },[email])
    return [token];
}

export default useToken;