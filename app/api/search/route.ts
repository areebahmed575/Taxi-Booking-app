import { NextResponse,NextRequest } from "next/server";

const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:NextRequest){

    const {searchParams}=new URL(request.url)
    const searchText=searchParams.get("q")
    const res=await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=6&session_token=0d7ba910-a664-4fa1-88ac-872b56c05079&country=US'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })
    const searchResult=await res.json();
    return NextResponse.json({message:searchResult})


}
{/*
https://api.mapbox.com/search/searchbox/v1/suggest?q=155&language=en&session_token=0d7ba910-a664-4fa1-88ac-872b56c05079&access_token=pk.eyJ1IjoiYXJlZWJhaG1lZDU3NSIsImEiOiJjbG12eHR6Y3UwdWpmMnJ2enNyenExcjIwIn0.sbulSTxeCs7r91bv5kGoNA
*/}