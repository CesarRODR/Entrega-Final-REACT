import { useEffect, useState } from 'react'
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom';
import { getDoc, doc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {
    const [prod, setProd] = useState();
    const { id } = useParams();

    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "productos", id);

        getDoc(docRef).then((snapshot) => {
            setProd({ ...snapshot.data(), id });
        });

    }, [id])
                
    return (
        <div className='itemcontainer'>
            <ItemDetail {...prod} />
        </div>
    )
}














