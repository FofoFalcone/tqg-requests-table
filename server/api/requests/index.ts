import useFirebaseClient from "~/composables/useFirebaseClient";
import { collection, getDocs } from "firebase/firestore";

const { firestore } = useFirebaseClient();
  
export default defineEventHandler(async event => {
    try {
        const ref = collection(firestore, 'requests');
        const snapshot = await getDocs(ref);
        const data: Object[] = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() });
        });
        return data;
    } catch(error) {
        return { statusCode: 401, error: error };
    }
});
