
const Book = ({params}:{params:{id:string}})=>{
    
    return <p>Post: {decodeURI(params.id)}</p>
}

export default Book