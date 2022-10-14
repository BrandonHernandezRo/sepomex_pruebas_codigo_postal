export async function getData(url){

    try{
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        const responseJSON =  await response.json();
        return responseJSON;

    }catch(error){
        throw error;
    }
    
}