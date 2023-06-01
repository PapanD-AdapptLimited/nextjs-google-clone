import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";

const page = async (context: { searchParams: any; }) => {

  // console.log(context.searchParams)

  // const searchTerm = "lectures"
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT}&q=${context.searchParams.searchTerm}`)

  if (!response.ok) {
    console.error(response);
    throw new Error("Something went wrong");
  }

  const data = await response.json()

  const results = data.items;

  if(!results){
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {results && <div>
        <WebSearchResults results={data} />
        
        
        </div>}
    </>
  )
}

export default page