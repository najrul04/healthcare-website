import { useState } from 'react';

const usePatientinfo = () => {
    const [patientInfo, setPatientInfo] = useState({
        name: "",
        age: "",
        gender: "",
        symptoms: "",
        phone: "",
        email: "",
        address: ""
    })

    return [patientInfo, setPatientInfo];
}

export default usePatientinfo;