import React from "react"
import Audience from "./Audience"
type Params = Promise<{ slug: string[] }>
const page = async ({
  params,
}: {
  params: Params
}) => {
  const [slug] = (await  params).slug
console.log(slug);
    
  return <Audience />
}

export default page
