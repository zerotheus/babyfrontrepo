import { useSearchParams } from "react-router";

export function PregnantDataView(){
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("id"))
    
    
    return (<></>);
}