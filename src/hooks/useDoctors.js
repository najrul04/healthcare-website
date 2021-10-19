import { useEffect, useState } from "react"


const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/MD-Mehedi-Hasan18111/health-care-data/main/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return [doctors, setDoctors];
}

export default useDoctors;