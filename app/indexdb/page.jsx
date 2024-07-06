'use client'
import { useEffect } from "react";

const IndexedDb = () => {


    useEffect(() => {
        let db;
        const customerData = [
            { ssn: "411-11-1111", name: "Gokhan", age: 35, email: "gokhan@company.com" },
            { ssn: "888-88-8888", name: "John", age: 32, email: "john@home.org" },
        ];
        const request = window.indexedDB.open('testDatabase', 1)
        request.onerror = (err) => {
            console.log('error', err)
        }
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
            objectStore.createIndex("name", "name", { unique: false });
            objectStore.createIndex("email", "email", { unique: true });
            objectStore.transaction.oncomplete = (event) => {
                const customerObjectStore = db
                    .transaction("customers", "readwrite")
                    .objectStore("customers");
                customerData.forEach((customer) => {
                    customerObjectStore.add(customer);
                });
            };
        };
        request.onsuccess = (event) => {
            console.log('success')
            console.log(event.target)
            db = event.target.result
            request.onsuccess = () => {
                console.log('added')
            }
        }
    }, [])

    return (
        <div>
            Indexed DB Page <br />
        </div>
    )
}
export default IndexedDb
