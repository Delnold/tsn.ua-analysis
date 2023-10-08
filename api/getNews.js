import axios from "axios";


export async function getTsnNewsInfo
(startingRequest, iterationCount, requestDelay = 1000) {
    const dataNewsInfoArr = [];

    for (let i = 0; i < iterationCount; i++) {
        try {
            const response = await axios.get(startingRequest);
            if (response.status === 200) {
                dataNewsInfoArr.push(response.data);
                startingRequest = response.data.next;
                await new Promise((resolve) => {
                    console.log(`Current iteration: ${i}`)
                    setTimeout(resolve, requestDelay)
                });
            }
        } catch (error) {
            console.error(error);
            return dataNewsInfoArr
        }
    }

    return dataNewsInfoArr;
}


