import { Header } from "../primitive/Header";
import SearchableUsers from "../primitive/SearchableUsers";

export default function ListUsers() {

    return (
        <>
            <Header user='Usuário' />
            <SearchableUsers />
        </>
    )

}