import React, { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes.interface';

export const useUsers = () => {
    const [usuarios, setUsuarios] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
      //llamado a la api
      chargeUsers();
    }, [])

    const chargeUsers = async () => {
        const resp = await reqResApi.get<ReqResList>('/users', {params: {page: pageRef.current}});
        if(resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            pageRef.current --;
            alert('No existen mas registros')
        }
    }

    const nextPage = () => {
        pageRef.current ++;
        chargeUsers();
    }
    const prevPage = () => {
        if(pageRef.current > 1) {
            pageRef.current --;
            chargeUsers();
        }
    }

    return {
        usuarios,
        nextPage,
        prevPage,
        pageRef
    }
}
