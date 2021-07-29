import axios from 'axios'; 

const event_url = 'https://601caf791a9c220017060c02.mockapi.io/api/v1/Events';

const getEventApi = async (date) => {
    try {
        let params = [];
        let url = event_url;

        if (date) {
            params.push(`date=${date}`);
        }

        for (let i = 0; i < params.length; i++) {
            if (i === 0) {
                url = `${url}?${params[0]}`;
            } else {
                url = `${url}&${params[i]}`;
            }
        }

        const res = await axios.get(url);
        const data = res.data;
        return data;
    } catch(error) {
        throw error;
    }
};

export default getEventApi;