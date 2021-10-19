import { useState, useEffect } from 'react';

const useService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // const url = 'https://raw.githubusercontent.com/MD-Mehedi-Hasan18111/health-care-data/main/services.json';
        fetch('Hospital.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices];
}

export default useService;